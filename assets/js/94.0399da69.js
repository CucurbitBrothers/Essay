(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{460:function(v,_,t){"use strict";t.r(_);var d=t(44),l=Object(d.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"基础-07-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础-07-文件"}},[v._v("#")]),v._v(" 基础 07-文件")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("文件")]),v._v(" "),t("ul",[t("li",[v._v("基础\n"),t("ul",[t("li",[v._v("文件的作用\n"),t("ul",[t("li",[v._v("就是把一些数据存放起来，可以让程序下一次执行的时侯直接调用，而不必重新制作一份，省时省力。")])])]),v._v(" "),t("li",[v._v("文件类型：\n"),t("ul",[t("li",[v._v("i. 文本数据文件       -> 字符串")]),v._v(" "),t("li",[v._v("ii. 二进制数据文件   -> 二进制")]),v._v(" "),t("li",[v._v("类型转换\n"),t("ul",[t("li",[v._v('字符串转换为二进制                       str.encode("utf-8")')]),v._v(" "),t("li",[v._v("二进制转字符串                                a.decode()")])])])])]),v._v(" "),t("li",[v._v('在Windows系统中，如果写入数据包含中文，默认格式为 gbk。所以需加编码格式    open(\'test.txt\'，"w", encoding = "utf-8")')])])]),v._v(" "),t("li",[v._v("操作\n"),t("ul",[t("li",[v._v("f. open(文件名，访问模式)   3*4种访问模式")]),v._v(" "),t("li",[v._v("打开的文件记得在不用之后关闭，f.close( )\n"),t("ul",[t("li",[v._v("或者使用")])])])])])])])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("访问模式")]),v._v(" "),t("th",[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("r")]),v._v(" "),t("td",[v._v("以只读方式打开文件。文件的指针将会放在文件的开头。这是默认模式，可以省略。")])]),v._v(" "),t("tr",[t("td",[v._v("w")]),v._v(" "),t("td",[v._v("打开一个文件只用于写入。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件。")])]),v._v(" "),t("tr",[t("td",[v._v("a")]),v._v(" "),t("td",[v._v("打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。")])]),v._v(" "),t("tr",[t("td",[v._v("rb")]),v._v(" "),t("td",[v._v("以二进制格式打开一个文件用于只读")])]),v._v(" "),t("tr",[t("td",[v._v("wb")]),v._v(" "),t("td",[v._v("以二进制格式打开一个文件只用于写入")])]),v._v(" "),t("tr",[t("td",[v._v("ab")]),v._v(" "),t("td",[v._v("以二进制格式打开一个文件用于追加")])]),v._v(" "),t("tr",[t("td",[v._v("r+")]),v._v(" "),t("td",[v._v("打开一个文件用于读写")])]),v._v(" "),t("tr",[t("td",[v._v("w+")]),v._v(" "),t("td",[v._v("打开一个文件用于读写。如果该文件已存在则将其覆盖。如果该文件不存在，创建新文件。")])]),v._v(" "),t("tr",[t("td",[v._v("a+")]),v._v(" "),t("td",[v._v("打开一个文件用于读写。如果该文件已存在，文件指针将会放在文件的结尾。文件打开时会是追加模式。如果该文件不存在，创建新文件用于读写。")])]),v._v(" "),t("tr",[t("td",[v._v("rb+")]),v._v(" "),t("td",[v._v("二进制格式")])]),v._v(" "),t("tr",[t("td",[v._v("wb+")]),v._v(" "),t("td",[v._v("二进制格式")])]),v._v(" "),t("tr",[t("td",[v._v("ab+")]),v._v(" "),t("td",[v._v("二进制格式")])])])]),v._v(" "),t("ul",[t("li",[t("p",[t("strong",[v._v("读数据")])]),v._v(" "),t("ul",[t("li",[v._v("read( x )      读取x个字符")]),v._v(" "),t("li",[v._v("readline()    读一行数据，将指针移至下一行开头")]),v._v(" "),t("li",[v._v("readlines()   按照行的方式将文件进行一次性读取，返回一个列表，每一行为一个元素")])])]),v._v(" "),t("li",[t("p",[v._v("文件备份")]),v._v(" "),t("ul",[t("li",[v._v("关于文件的备份，建议使用  边读边写")])])])]),v._v(" "),t("p"),v._v(" "),t("p"),v._v(" "),t("ul",[t("li",[v._v("文件其他操作（os模块）")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v('os.rename("old","new")')]),v._v(" "),t("th",[v._v("重命名")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v('os.remove("filename")')]),v._v(" "),t("td",[v._v("删除文件")])]),v._v(" "),t("tr",[t("td",[v._v('os.mkdir("filename")')]),v._v(" "),t("td",[v._v("创建文件")])]),v._v(" "),t("tr",[t("td",[v._v("os.getcwd()")]),v._v(" "),t("td",[v._v("获取当前目录")])]),v._v(" "),t("tr",[t("td",[v._v("os.dirname()")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v('os.chdir("../")')]),v._v(" "),t("td",[v._v("改变默认目录")])]),v._v(" "),t("tr",[t("td",[v._v('os.listdir("./")')]),v._v(" "),t("td",[v._v("获取目录列表")])]),v._v(" "),t("tr",[t("td",[v._v('os.rmdir("file")')]),v._v(" "),t("td",[v._v("删除文件夹（只能删除空文件夹）")])]),v._v(" "),t("tr",[t("td",[v._v("os.path.exists( )")]),v._v(" "),t("td",[v._v("判断是否存在该文件或者文件夹")])])])]),v._v(" "),t("ul",[t("li",[v._v("如果要删除不为空的文件夹\n"),t("ul",[t("li",[v._v("使用shutil模块")]),v._v(" "),t("li",[v._v('shutil.rmtree("test")  删除文件夹 （不管是否为空）')])])])])])}),[],!1,null,null,null);_.default=l.exports}}]);