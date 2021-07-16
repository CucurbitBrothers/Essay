(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{419:function(t,l,_){"use strict";_.r(l);var v=_(44),n=Object(v.a)({},(function(){var t=this,l=t.$createElement,_=t._self._c||l;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_09-gil"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_09-gil"}},[t._v("#")]),t._v(" 09-GIL")]),t._v(" "),_("p",[t._v("GIL的全称是Global Interpreter Lock（全局解释器锁）")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("Python")])]),t._v(" "),_("li",[_("p",[_("span",{staticStyle:{"background-color":"#ffaaaa"}},[t._v("对多线程的影响")])])]),t._v(" "),_("li",[_("p",[t._v("由于GIL的存在，其实每个CPU在同一时刻只会执行一个线程（在单核CPU下的多线程其实都只是并发，不是并行，并发和并行从宏观上来讲都是同时处理多路请求的概念。但并发和并行又有区别，并行是指两个或者多个事件在同一时刻发生；而并发是指两个或多个事件在同一时间间隔内发生。）")])]),t._v(" "),_("li",[_("p",[t._v("在Python多线程下，每个线程的执行方式：\n1. 获取GIL\n2. 执行代码直到sleep或者是python虚拟机将其挂起。\n3. 释放GIL")]),t._v(" "),_("ul",[_("li",[t._v("也就是说只有某一线程获取到GIL的时候才会执行，而由于当前进程只存在一个GIL，所以同一时刻只会有一个线程执行。")]),t._v(" "),_("li",[t._v("如果想利用多核资源，可以使用多进程。每个进程有各自独立的GIL，互不干扰，这样就可以真正意义上的并行执行，提高执行效率")])])]),t._v(" "),_("li",[_("p",[t._v("线程释放GIL的情况")]),t._v(" "),_("ul",[_("li",[t._v("在")]),t._v(" "),_("li",[t._v("Python 3.x")]),t._v(" "),_("li",[t._v("Python 2.x")])])]),t._v(" "),_("li",[_("p",[t._v("Python多线程的作用")]),t._v(" "),_("ol",[_("li",[t._v("CPU密集型代码(各种循环处理、计数等等)，在这种情况下，\n"),_("ol",[_("li",[t._v("Python2.X 中 ticks计数很快就会达到阈值，然后触发GIL的释放与再竞争（多个线程来回切换当然是需要消耗资源的），所以python2下的多线程对CPU密集型代码并不友好。")]),t._v(" "),_("li",[t._v("而在python3.x中，GIL不使用ticks计数，改为使用计时器（执行时间达到阈值后，当前线程释放GIL），这样对CPU密集型程序会比较友好，但依然没有解决GIL导致的同一时间只能执行一个线程的问题，所以效率依然不尽如人意。")])])]),t._v(" "),_("li",[t._v("IO密集型代码(文件处理、网络爬虫等)，多线程能够有效提升效率(单线程下有IO操作会进行IO等待，造成不必要的时间浪费，而开启多线程能在线程A等待时，自动切换到线程B，可以不浪费CPU的资源，从而能提升程序执行效率)。所以python的多线程对IO密集型代码比较友好。")])])]),t._v(" "),_("li",[_("p",[t._v("多核多线程比单核多线程更差，原因是单核下多线程，每次释放GIL，唤醒的那个线程都能获取到GIL锁，所以能够无缝执行，但多核下，CPU0释放GIL后，其他CPU上的线程都会进行竞争，但GIL可能会马上又被CPU0拿到，导致其他几个CPU上被唤醒后的线程会醒着等待到切换时间后又进入待调度状态，这样会造成线程颠簸(thrashing)，导致效率更低")])]),t._v(" "),_("li",[_("p",[t._v("既然CPython解释存在GIL是否意味每个线程在全局变量就不用加Lock互斥锁了呢")]),t._v(" "),_("ul",[_("li",[t._v("这是一个严重错误的想法，为什么用户操作全局数据还需要加Lock，因为GIL的释放时机我们无法控制-操作非常可能并没有完成，而不像Lock那样我们用完才释放(操作完整)。")])])])])])}),[],!1,null,null,null);l.default=n.exports}}]);