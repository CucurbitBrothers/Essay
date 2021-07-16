(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{459:function(l,_,v){"use strict";v.r(_);var a=v(44),i=Object(a.a)({},(function(){var l=this,_=l.$createElement,v=l._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[v("h1",{attrs:{id:"基础-06-函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基础-06-函数"}},[l._v("#")]),l._v(" 基础 06-函数")]),l._v(" "),v("ul",[v("li",[v("p",[v("strong",[l._v("函数：****就是对模块功能代码的封�")]),l._v("�")])]),l._v(" "),v("li",[v("p",[l._v("位置参数和关键字调用")]),l._v(" "),v("ul",[v("li",[l._v("位置参数调用：   保证实参要和形参一一对应")]),l._v(" "),v("li",[l._v("关键字参数调用：需要保证的是形参名书写正确")])])])]),l._v(" "),v("p"),l._v(" "),v("ul",[v("li",[l._v("特例：参数列表第一个为*，表明这个函数只能通过关键字参数调用")])]),l._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[l._v("                    def func(*,name,age)\n                        pass\n            \n                    func(name = 'tom',age = 12)\n")])])]),v("p"),l._v(" "),v("ul",[v("li",[l._v("global")])]),l._v(" "),v("p",[l._v("函数外部用于定义全局变量，")]),l._v(" "),v("p",[l._v("函数内部用于声明全局变量")]),l._v(" "),v("ul",[v("li",[l._v("函数内部对全局变量进行赋值时才需要global声明，对其本身修改（可变数据类型的部分操作）则不需要")])]),l._v(" "),v("p"),l._v(" "),v("ul",[v("li",[v("p",[l._v("缺省参数：带默认值的参数一定要位于参数列表最后")])]),l._v(" "),v("li",[v("p",[l._v("不定长参数")]),l._v(" "),v("ul",[v("li",[l._v("def func([formal_args,] *args, **kwargs):")]),l._v(" "),v("li",[l._v("加了（*）的变量args会存放所有未命名的变量参数，args为元组，也是缺省参数，默认为空的元组")]),l._v(" "),v("li",[l._v("加了（**）的变量kwargs会存放命名参数，如 key = value，kwargs为字典，也是缺省参数，默认为空的字典")])])]),l._v(" "),v("li",[v("p",[v("span",{staticStyle:{"background-color":"#ffaaaa"}},[v("strong",[l._v("参数顺序;必传参数，缺省参数，元组参数，字典参数（py3中缺省和元组可以互换）")])])])]),l._v(" "),v("li",[v("p",[l._v("拆包")]),l._v(" "),v("ul",[v("li",[l._v("返回多个返回值时，默认为元组")]),l._v(" "),v("li",[l._v("拆包时，")]),l._v(" "),v("li",[l._v("可以对元组，列表，字典（取出的是key）进行拆包。")])])])]),l._v(" "),v("p"),l._v(" "),v("ul",[v("li",[v("span",{staticStyle:{"background-color":"#ffaaaa"}},[v("strong",[l._v("递归函数")])]),l._v(" "),v("ul",[v("li",[l._v("在Python中有次数限制，需要停止条件。")]),l._v(" "),v("li",[l._v("默认递归深度接近1000，不同平台结果不同\n"),v("ul",[v("li",[l._v("sys.setrecursionlimit（_1500�_�）\n"),v("ul",[v("li",[l._v("设置Python解释器堆栈的最大深度限制。此限制可防止无限递归导致C堆栈溢出并导致Python崩溃。")]),l._v(" "),v("li",[l._v("最大限制取决于平台。当用户需要深度递归的程序和支持更高限制的平台时，需要设置更高的限制。但是应该小心，因为太高的限制可能导致崩溃。")])])])])])])]),l._v(" "),v("li",[v("strong",[l._v("匿名函数    �")]),l._v("�")]),l._v(" "),v("li",[v("strong",[l._v("引用")])]),l._v(" "),v("li",[l._v("Python中值是靠引用传递的。")]),l._v(" "),v("li",[l._v("Python函数调用时\n"),v("ul",[v("li",[l._v("不可变参数传递是值传递，")]),l._v(" "),v("li",[l._v("可变参数传递是引用传递，而不是值传递。")])])]),l._v(" "),v("li",[l._v("对数据的修改\n"),v("ul",[v("li",[l._v("不可变数据类型（数字、字符串、元组）是重新赋值\n"),v("ul",[v("li",[l._v("Python中，数字 256 以内已经预定义。")])])]),l._v(" "),v("li",[l._v("可变数据类型（类表，字典，集合）的部分操作是修改原来的值，会导致指向该引用的变量全部改变\n"),v("ul",[v("li",[l._v("lista + listb       相当于重新赋值")]),l._v(" "),v("li",[l._v("lista += listb     修改原来的数据")])])])])]),l._v(" "),v("li",[v("strong",[l._v("匿名函数")]),l._v(" "),v("ul",[v("li",[l._v("函数的另一种解释")]),l._v(" "),v("li",[l._v("某些情况下很好用\n"),v("ul",[v("li",[l._v("自定义字典排序\n"),v("ul",[v("li",[l._v("将字典放在列表中")]),l._v(" "),v("li",[l._v("列表对象.sort( key = lambda x：x[ key ] )")])])])])])])])]),l._v(" "),v("p"),l._v(" "),v("ul",[v("li",[v("span",{staticStyle:{"background-color":"#ffaaaa"}},[v("strong",[l._v("列表推导式")])]),l._v(" "),v("ul",[v("li",[l._v("轻量级循环创建列表，快速创建一个有规律的列表")]),l._v(" "),v("li",[l._v("a = [x for x in range(1,101)]")]),l._v(" "),v("li",[l._v("b = [a[x:x+3] for x in range(0,len(a),3)]")]),l._v(" "),v("li",[l._v("若 x 是 无用的，可用下划线_代替         [PlaneBullet()  for _ in range(6)]")])])])]),l._v(" "),v("p")])}),[],!1,null,null,null);_.default=i.exports}}]);