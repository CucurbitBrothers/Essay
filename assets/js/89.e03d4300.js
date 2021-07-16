(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{455:function(n,l,t){"use strict";t.r(l);var a=t(44),v=Object(a.a)({},(function(){var n=this,l=n.$createElement,t=n._self._c||l;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"基础-02-python基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础-02-python基础"}},[n._v("#")]),n._v(" 基础 02-Python基础")]),n._v(" "),t("ol",[t("li",[n._v("** Python基础知识：**\n"),t("ol",[t("li",[n._v("认识Python\n"),t("ol",[t("li",[n._v("作者：Guido Van Rossum （龟叔）/吉多")]),n._v(" "),t("li",[n._v("正式诞生与1991年")]),n._v(" "),t("li",[n._v("Life is short，you need Python.")])])]),n._v(" "),t("li",[n._v("注释\n"),t("ol",[t("li",[n._v("单行   #")]),n._v(" "),t("li",[n._v('多行   """。。。 """\n'),t("ol",[t("li",[n._v("并且可以保存当前文本格式，（保留里面的换行符，空白符）")])])])])]),n._v(" "),t("li",[n._v("变量的作用：\n"),t("ol",[t("li",[t("span",{staticStyle:{"background-color":"#ffaaaa"}},[n._v("存储数据。每个变量都存储一种类型的数据，该数据类型就是该变量的数据类型")])])])]),n._v(" "),t("li",[n._v("为什么变量分了很多种数据类型？\n"),t("ol",[t("li",[t("span",{staticStyle:{"background-color":"#ffaaaa"}},[n._v("不同的数据类型占用的内存大小不同，在有限的内存中，定义无限的变量。（合理的使用变量的数据类型，节约内存的使用，提高程序的性能）")])])])]),n._v(" "),t("li",[n._v("输入和输出"),t("span",{staticStyle:{"background-color":"#ffaaaa"}},[n._v("Python2 和Python的区别")]),n._v(" "),t("ul",[t("li",[n._v("Python2.x\n            input（）接收的是一个表达式（能够返回结果或数据的），最终类型与输入相同\n            raw_input（）获得都是字符串")]),n._v(" "),t("li",[n._v("Python3.x\n            只存在 input（），与2.x中的raw_input（）等价\n"),t("span",{staticStyle:{"background-color":"#ffaaaa"}},[n._v("print（）时，要输出%，用两个%%即可。")])])])]),n._v(" "),t("li",[n._v("标识符和关键字\n"),t("ol",[t("li",[n._v("标识符\n由字母，数字，下划线，组成，切数字不能开头。\n严格区分大小写。")]),n._v(" "),t("li",[n._v("关键字\n            已经被系统预定义的具有特殊功能、特殊含义的标识符，在代码中，可以直接使用。\n            通常不允许开发者命名一个与关键词同名的变量，除非你知道后果，并且明知这就是预期的效果")])])]),n._v(" "),t("li",[n._v("格式化输出\n%-2d                 不足两位在右边补空格\n %2d                  不足两位在左边补空格\n %.2d /(%02d)   不足两位左边补0\n (%.xf)                保留x位小数\n (%04f)              不足四位左边补0")]),n._v(" "),t("li",[n._v("数据类型转换\n"),t("ol",[t("li",[n._v("int(x [,base ])     base表示x（字符串类型）的进制，结果为将x转换成10进制表示.\n"),t("ol",[t("li",[n._v("向下取整,等同于 math.floor()")]),n._v(" "),t("li",[n._v("round: 四舍五入")]),n._v(" "),t("li",[n._v("math.ceil: 向上取整")])])]),n._v(" "),t("li",[n._v("str(x )                 将对象 x 转换为表达式字符串，如果是字符串，没有变化")]),n._v(" "),t("li",[n._v("repr(x )              将对象 x 转换为表达式字符串，如果是字符串，在两端加引号")]),n._v(" "),t("li",[t("span",{staticStyle:{"background-color":"#ffaaaa"}},[n._v("eval(str )            用来计算在字符串中的有效Python表达式,并返回一个对象")]),n._v("如果是一个字符串表达式，放入到eval中，先去两侧的引号，若Python中有相应的类型，直接返回；如果没有相应的类型，查看是否有对应的变量名，如果有，直接返回，如果没有，则报错NameError。")]),n._v(" "),t("li",[n._v("chr(x )    将一个整数转换为一个Unicode字符")]),n._v(" "),t("li",[n._v("ord(x )    将一个字符转换为它的ASCII整数值")]),n._v(" "),t("li",[n._v("hex(x )    将一个整数转换为一个十六进制字符串")]),n._v(" "),t("li",[n._v("oct(x )    将一个整数转换为一个八进制字符串")]),n._v(" "),t("li",[n._v("bin(x )    将一个整数转换为一个二进制字符串")])])]),n._v(" "),t("li",[n._v("进制表示"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("python3 test.py \n输入数字：12\n十进制数为：12\n转换为二进制为： 0b1100\n转换为八进制为： 0o14\n转换为十六进制为： 0xc\n")])])])])])])])])}),[],!1,null,null,null);l.default=v.exports}}]);