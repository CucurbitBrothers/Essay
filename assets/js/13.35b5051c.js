(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{367:function(_,v,l){"use strict";l.r(v);var i=l(42),n=Object(i.a)({},(function(){var _=this,v=_.$createElement,l=_._self._c||v;return l("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[l("p",[l("a",{attrs:{href:"https://labuladong.gitbook.io/algo/di-ling-zhang-bi-du-xi-lie/xue-xi-shu-ju-jie-gou-he-suan-fa-de-gao-xiao-fang-fa",target:"_blank",rel:"noopener noreferrer"}},[_._v("labuladong的算法小抄"),l("OutboundLink")],1)]),_._v(" "),l("h1",{attrs:{id:"数据结构的存储方式"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#数据结构的存储方式"}},[_._v("#")]),_._v(" 数据结构的存储方式")]),_._v(" "),l("ol",[l("li",[_._v("数组/顺序表（顺序存储）\n"),l("ul",[l("li",[_._v("一种聚合数据类型")]),_._v(" "),l("li",[_._v("将元素顺序地存放在一块连续的存储区里，元素间的顺序关系由它们的存储顺序自然表示")])])]),_._v(" "),l("li",[_._v("链表（链式存储）\n"),l("ul",[l("li",[_._v("将元素存放在通过链接构造起来的一系列存储块中")]),_._v(" "),l("li",[_._v("链表是一种由节点（Node）组成的线性数据集合，每个节点通过指针指向下一个节点。它是一种由节点组成，并能用于表示序列的数据结构")]),_._v(" "),l("li",[_._v("单链表: 每个节点仅指向下一个节点，最后一个节点指向空")]),_._v(" "),l("li",[_._v("双链表: 每个节点有两个指针p，n。p指向前一个节点，n指向下一个节点；最后一个节点指向空")]),_._v(" "),l("li",[_._v("循环链表: 每个节点指向下一个节点，最后一个节点指向第一个节点")])])])]),_._v(" "),l("h2",{attrs:{id:"问题"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[_._v("#")]),_._v(" 问题")]),_._v(" "),l("ol",[l("li",[_._v("顺序表和链表的区别\n"),l("ul",[l("li",[_._v("顺序表存储数据，需预先申请一整块足够大的存储空间，然后将数据按照次序逐一存储\n"),l("ul",[l("li",[_._v("存储空间连续，空间利用率高")]),_._v(" "),l("li",[_._v("时间复杂度来说的话，适合索引查找")]),_._v(" "),l("li",[_._v("需要处理扩容缩容问题")])])]),_._v(" "),l("li",[_._v("链表则是什么时候存储数据什么时候申请空间，存储空间是分散的\n"),l("ul",[l("li",[_._v("不需要考虑扩容缩容问题")]),_._v(" "),l("li",[_._v("时间复杂度来说的话，适合插入,删除 O(1), 查找为O(n)")]),_._v(" "),l("li",[_._v("每次申请一个节点的空间，会产生很多空间碎片，而且每个数据元素携带指针，空间利用率低, 需要更多的空间")])])])])])]),_._v(" "),l("h1",{attrs:{id:"常见数据结构"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#常见数据结构"}},[_._v("#")]),_._v(" 常见数据结构")]),_._v(" "),l("ol",[l("li",[_._v("堆\n"),l("ul",[l("li",[_._v("堆：类似与一棵树(一个完全二叉树)")]),_._v(" "),l("li",[_._v("堆内存由语言系统环境管理")])])]),_._v(" "),l("li",[_._v("栈\n"),l("ul",[l("li",[_._v("只允许在一段进行操作, 后进先出(LIFO, Last In First Out)")]),_._v(" "),l("li",[_._v("支持两个基本操作：push用于将元素压入栈，pop用于删除栈顶元素")]),_._v(" "),l("li",[_._v("栈内存由系统自动分配")]),_._v(" "),l("li",[_._v("时间复杂度\n"),l("ul",[l("li",[_._v("索引：O(n)")]),_._v(" "),l("li",[_._v("查找：O(n)")]),_._v(" "),l("li",[_._v("插入：O(1)")]),_._v(" "),l("li",[_._v("删除：O(1)")])])])])]),_._v(" "),l("li",[_._v("队列\n"),l("ul",[l("li",[_._v("一端插入, 另一端删除")]),_._v(" "),l("li",[_._v("先进先出的（First In First Out）的线性表，简称FIFO。允许插入的一端为队尾，允许删除的一端为队头")]),_._v(" "),l("li",[_._v("支持两种基本操作：enqueue 用于添加一个元素到队列，dequeue 用于删除队列中的一个元素")]),_._v(" "),l("li",[_._v("时间复杂度\n"),l("ul",[l("li",[_._v("索引：O(n)")]),_._v(" "),l("li",[_._v("查找：O(n)")]),_._v(" "),l("li",[_._v("插入：O(1)")]),_._v(" "),l("li",[_._v("删除：O(1)")])])])])]),_._v(" "),l("li",[_._v("图\n"),l("ul",[l("li",[_._v("G =（V，E）的有序对，其包括顶点或节点的集合 V 以及边或弧的集合E，其中E包括了两个来自V的元素（即边与两个顶点相关联 ，并且该关联为这两个顶点的无序对）")]),_._v(" "),l("li",[_._v("两种表现方式\n"),l("ul",[l("li",[_._v("邻接矩阵(二维数组)\n"),l("ul",[l("li",[_._v("判断连通性迅速，并可以进行矩阵运算")]),_._v(" "),l("li",[_._v("如果图比较稀疏, 比较耗费空间")])])]),_._v(" "),l("li",[_._v("邻接表(链表)\n"),l("ul",[l("li",[_._v("省空间, 操作效率比邻接矩阵低")])])])])])])]),_._v(" "),l("li",[_._v("散列表(哈希)\n"),l("ul",[l("li",[_._v("通过散列函数把键映射到一个数组中")])])]),_._v(" "),l("li",[_._v("树\n"),l("ul",[l("li",[_._v("用数组实现类似于堆, 用链表实现就是普通的树")])])])]),_._v(" "),l("h1",{attrs:{id:"数据结构的基本操作"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#数据结构的基本操作"}},[_._v("#")]),_._v(" 数据结构的基本操作")]),_._v(" "),l("ul",[l("li",[_._v("对于任何数据结构，其基本操作无非遍历 + 访问，再具体一点就是：增删查改。")]),_._v(" "),l("li",[_._v("数据结构种类很多，但它们存在的目的都是在不同的应用场景，尽可能高效地增删查改")]),_._v(" "),l("li",[_._v("各种数据结构的遍历 + 访问无非两种形式：线性的和非线性的。\n"),l("ul",[l("li",[_._v("线性: for / while 迭代为代表")]),_._v(" "),l("li",[_._v("非线性: 递归")])])])])])}),[],!1,null,null,null);v.default=n.exports}}]);