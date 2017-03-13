/**
 * [config description]
 * @type {Object}
 */
let config = {
  //设置表格父元素,值为css选择器写法 如 .container 或 #container 或 div
  container: 'body',
  //表格宽度
  tableWidth: '600px',
  //表格高度
  tableHeight: '600px',
  //表头
  th: ['姓名', '高数', '线代', '概率论', '离散数学', '数据结构'],
  //设置要排序的表头 0为不排序，1为要排序。 按th中的索引位置依次设置
  sortSwitch: [0, 1, 1, 1, 1, 1],
  //设置每行的内容
  tr: [
        ['oyh',     '71', '83', '75', '91', '87'],
        ['liuzh',   '92', '78', '86', '69', '89'],
        ['yyh',     '68', '73', '78', '71', '83'],
        ['microzz', '82', '75', '83', '89', '88'],
        ['hzzly',   '70', '70', '85', '76', '86']
  ],
  //是否为排序表格 false则不添加排序功能
  isSort: true,
  //是否为表格设置class名
  isClass: false,
  //class名
  className: '',
  //是否为表格设置id名
  isId: false,
  //id名
  id: ''
}
//样式自行在所用的css文件中添加