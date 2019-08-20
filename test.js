// var reg = /(?<=\bre)\w+\b/g
// console.log('reg.match:', 'reading reging'.match(reg))
var rawTxt = `
<html>
<head>
<link rel="shortcut icon" href="/favicon.ico"><link href="/static/css/app.01b5ca6c14c8d1b676626a4355f733fc.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="en-US~es~fr-FR~zh-CN.f48a560.css">
<style type="text/css">
@font-face{
  font-family: 'LqMok';
  src: url('../font/字体名称.eot');
  src:url('../font/字体名称.woff') format('woff'),
    url('../font/字体名称.ttf') format('truetype'), 
    url('../font/字体名称.svg') format('svg'); 
} 
.text-box {
  background-image: url("../test/1/o.png");
}
.text-box1 {
  background-image: url('../test/2/o.png');
}
.text-box2 {
  background-image: url(/dist/test.png);
}
</style>
</head>
<p style="background-image:url(../../test.png)">你好八月橘子虾</p>
<div style="background-image: url('http://tests.com.cn/test.png')"></div>
<img src="http://cdn/tes.png" style="width: 1px;">
<img id="showpic" src="http://cdn/tes1.png">
<script id="test" src="http://test1.com/run.js" type="text/script"></script><script src="http://test2.com/root.js?v=ttt"></script>
<script src="/dist/static/run.js?v=ttt"></script>
</html>
`
// var reg = /(?<=\<script\s+[^\>]*src=[\'\"])[^\>\'\"]*(?=[\'\"]\s*.*\>)/g
// var reg = /(?<=\<\w+\s+[^\>]*src=[\'\"])[^\'\"]*(?=[\'\"]\s*.*\>)/g
// var reg = /(?<=\<link\s+[^\>]*href=[\'\"])[^\>\'\"]*(?=[\'\"]\s*.*\>)/g
// var reg = /(?<=\burl\([\"\']*)[^\'\"]*(?=[\"\']*\))/g
var reg = /(?<=\<\w+\s+[^\>]*src=[\'\"])[^\'\"]*(?=[\'\"]\s*.*\>)|(?<=\<link\s+[^\>]*href=[\'\"])[^\>\'\"]*(?=[\'\"]\s*.*\>)|(?<=\burl\([\"\']*)[^\'\"]*(?=[\"\']*\))/g
console.log('rawTxt:', rawTxt)
console.log('matchText:', rawTxt.match(reg))
