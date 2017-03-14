class Table {

  constructor (config) {
    this.container   = document.querySelector(config.container);
    this.selfElement = document.createElement('table');
    this.tableWidth  = config.tableWidth;
    this.tableHeight = config.tableHeight;
    this.th          = config.th;
    this.tr          = config.tr;
    this.isSort      = config.isSort;
    this.sortSwitch  = config.sortSwitch;
    this.className   = config.className;
    this.id          = config.id;
    this.isFrozen    = config.isFrozen;
    this.init();
  }

  init() {
    this.selfElement.className = this.className;
    this.selfElement.id = this.id;
    this.container.appendChild(this.selfElement);
    this.renderTr();
    this.setStyle();
    this.fixedTop();
  }

  addTh() {
    let eleText = '';

    this.th.forEach( (item) => {
      eleText += `<th>${item}</th>`;
    } );

    return eleText;
  }

  renderTr() {
    let eleText = '';

    this.tr.forEach( (item) => {
      let trText = '';
      item.forEach( (item) => {
        trText += `<td>${item}</td>`;
      } );
      eleText += `<tr>${trText}</tr>`;
    } );
    this.selfElement.innerHTML = this.addTh() + eleText;
    this.addArrow();
  }

  addArrow() {
    if (!this.isSort) return;

    let ths = document.getElementsByTagName('th');

    Array.from(ths).every( (item, index) => {
      let nowIndex = index;
      if (this.sortSwitch[index] === 0) return true;

      let arrowBox  = document.createElement('div');
      let upArrow   = document.createElement('div');
      let downArrow = document.createElement('div');
    
      arrowBox.className  = 'sort-table-arrow-box';
      upArrow.className   = 'sort-table-up-arrow';
      downArrow.className = 'sort-table-down-arrow';

      arrowBox.appendChild(upArrow);
      arrowBox.appendChild(downArrow); 
      item.appendChild(arrowBox);

      upArrow.onclick = () => {
        this.sortUp(nowIndex);
      };

      downArrow.onclick = () => {
        this.sortDown(nowIndex);
      };

      return true;
    } );
  }

  sortUp(index) {

    this.tr.sort( (a, b) => {
      return a[index] - b[index];
    } );

    this.renderTr();
  }

  sortDown(index) {

    this.tr.sort( (a, b) => {
      return b[index] - a[index];
    } );

    this.renderTr();
  }

  fixedTop () {
    if (!this.isFrozen) return;
    let [thOne] = Array.from(document.getElementsByTagName('th'));
    let height  = window.getComputedStyle(thOne, null).getPropertyValue('height');
    let width   = window.getComputedStyle(thOne, null).getPropertyValue('width');

    const getTop = () => {
      return document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
    }

    const getOffsetTop = (obj) => {
      let top = obj.offsetTop;
      if (obj.offsetParent != null) {
        top += getOffsetTop(obj.offsetParent);
      }
      return top;
    };

    let offTop    = getOffsetTop(this.selfElement.getElementsByTagName('tr')[0]);
    let offHeight = this.selfElement.offsetHeight;

    window.onscroll = () => {
      if (getTop() > offTop && getTop() < (offTop + offHeight)) {
        this.selfElement.getElementsByTagName('tr')[0].style.position = 'fixed';
        Array.from(document.getElementsByTagName('th')).forEach( (item) => {
          item.style.height  = height;
          item.style.width   = width;
          item.style.opacity = '.8';
        })
      } else {
        this.selfElement.getElementsByTagName('tr')[0].style.position = 'relative';
      }
    }
  }
  setStyle() {
    this.selfElement.style.width  = this.tableWidth;
    this.selfElement.style.height = this.tableHeight;
  }

}