##sort-table-plugin
##介绍
快速生成可排序表格
<br>
##使用方法
###HTML部分 例如：

	<!DOCTYPE html>
	<html lang="zh-cmn-Hans">
	<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
  	<title>UI组件之排序表格</title>
	<link rel="stylesheet" type="text/css" href="task38.css">
	<!--引入基础样式-->
	</head>
	<body>
	<script type="text/javascript" src="config.js"></script><!--引入配置文件-->
	<script type="text/javascript" src="task38.js"></script><!--引入主文件-->
	<script type="text/javascript">
	//创建一个新的表格 并传入配置信息
  	new Table(config);
	</script>
	</body>
	</html>

###配置部分
###修改config.js的内容自定义配置信息
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
	  tableHeight: '900px',
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
	  //是否开启首行冻结 true开启 false关闭
	  isFrozen: true,
	  //class名 自定义class名请在默认类型名后添加 如 'sort-table my-table' 否则可能会导致默认样式无法应用
	  className: 'sort-table',
	  //id名
	  id: ''
	}
	//样式自行在所用的css文件中添加
###除表格宽高的其他样式可以自行在css文件中根据需要修改
##一些例子
	  th: ['姓名', '高数', '线代', '概率论', '离散数学', '数据结构'],
	  sortSwitch: [0, 1, 1, 1, 1, 1],
此时除姓名外数据都可排序

	  sortSwitch: [0, 0, 0, 1, 1, 1],
此时只有后三项数据可以排序

	  isFrozen: true,
此时开启了表头冻结功能，当页面向下滚动，使得第一行已经在屏幕外时，则第一行则变成始终固定在屏幕最上方
<br>
[效果预览](https://Reusjs.github.io/sort-table-plugin/task38.html "demo")