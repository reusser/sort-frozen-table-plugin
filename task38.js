class Table {

  constructor (config) {
    this.container   = document.querySelector(config.container);
    this.selfElement = document.createElement('table');
    this.tableWidth  = config.tableWidth;
    this.tableHeight = config.tableHeight;
    this.th          = config.th;
    this.tr          = config.tr;
    this.isSort      = config.isSort;
    this.isClass     = config.isClass;
    this.isId        = config.isId;
    this.className   = config.className;
    this.id          = config.id;
    this.init();
  }

  init() {
    this.selfElement.className = this.isClass ? this.className : '';
    this.selfElement.id = this.isId ? this.id : '';
    this.addTh();
    this.addTr();
    this.container.appendChild(this.selfElement);
  }

  addTh() {
    let thead   = document.createElement('thead');
    let eleText = '';

    this.th.forEach( (item) => {
      eleText += `<th>${item}</th>`;
    } );
    thead.innerHTML = eleText;

    this.selfElement.appendChild(thead);
  }

  addTr() {
    let tbody   = document.createElement('tbody');
    let eleText = '';

    this.tr.forEach( (item) => {
      let trText = '';
      item.forEach( (item) => {
        trText += `<td>${item}</td>`;
      } );
      eleText += `<tr>${trText}</tr>`;
    } );
    tbody.innerHTML = eleText;

    this.selfElement.appendChild(tbody);
  }
}