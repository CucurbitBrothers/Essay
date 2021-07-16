(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{430:function(l,v,_){"use strict";_.r(v);var i=_(44),n=Object(i.a)({},(function(){var l=this,v=l.$createElement,_=l._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[_("h1",{attrs:{id:"_30-高并发"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_30-高并发"}},[l._v("#")]),l._v(" 30-高并发")]),l._v(" "),_("ol",[_("li",[l._v("常见解决方案\n"),_("ol",[_("li",[l._v("技术层面\n"),_("ol",[_("li",[l._v("应用和静态资源（图片，视频，js，css）分离")]),l._v(" "),_("li",[l._v("缓存，和静态化\n"),_("ol",[_("li",[l._v("将数据库中获取的结果暂时保存起来，下次需要时直接提取")]),l._v(" "),_("li",[l._v("页面静态化是将程序最后生成的页面保存起来")])])]),l._v(" "),_("li",[l._v("数据库优化\n"),_("ol",[_("li",[l._v("表结构优化")]),l._v(" "),_("li",[l._v("索引优化")]),l._v(" "),_("li",[l._v("SQL语句优化")]),l._v(" "),_("li",[l._v("分区分表")]),l._v(" "),_("li",[l._v("分离活跃数据，或者叫冷热分离")])])])])]),l._v(" "),_("li",[l._v("设备层面\n"),_("ol",[_("li",[l._v("设备升级")]),l._v(" "),_("li",[l._v("集群和分布式\n"),_("ol",[_("li",[l._v("集群是每台服务器都具有相同的功能，处理请求时调用那台服务器都可以，主要起分流作用\n"),_("ul",[_("li",[l._v("集群有两个方式：一种是在静态资源集群。另一种是应用程序集群。静态资源集群比较简单。")])])]),l._v(" "),_("li",[l._v("应用程序集群在处理过程中最核心的问题就是"),_("span",{staticStyle:{"background-color":"#ffaaaa"}},[l._v("Session 同步问题")]),l._v(" "),_("ul",[_("li",[l._v("一种是在Session 发生变化后自动同步到其他服务器（Tomcat），另一种就是用一个程序统一管理Session， 在应用程序中通过重写Request并覆盖getSession 方法来获取指定服务器中的Session")])])]),l._v(" "),_("li",[l._v("还有一个核心的问题就是负载均衡\n"),_("ol",[_("li",[l._v("硬")]),l._v(" "),_("li",[l._v("软件\n"),_("ul",[_("li",[l._v("LVS(Linux Virtual Server)：最好的软件策略，有备机有主机，无单点问题，国产(阿里章文嵩博士)开源项目，工作在网络四层上\n"),_("ul",[_("li",[l._v("负载度高，但是功能少，而且对服务器的性能要求高")])])]),l._v(" "),_("li",[l._v("Nginx：Ngnix有”单点故障“的问题，如果挂了，会带来很多的麻烦。到了后期Web服务器继续增加，它本身可能会成为系统的瓶颈。nginx最高支持50000个并发连接数，工作在网路七层上\n"),_("ul",[_("li",[l._v("keepalived + nginx。")]),l._v(" "),_("li",[l._v("原理就在于做了一层TCP级别的负载均衡，使用VRRP协议，将一组机器（及其IP）组成一个虚拟 路由器，其中这个组的成员使用主从方式，主来承担流量分发任务，当主挂了之后，从挺身而出，承担主的任务，主恢复之后，便恢复 原来的主从模式。")])])]),l._v(" "),_("li",[l._v("Apache：web服务器第一，但不是最好的负载均衡服务器，工作在网路七层上")])])])])])])]),l._v(" "),_("li",[l._v("CDN\n"),_("ol",[_("li",[l._v("一种特殊的集群页面缓存服务器")]),l._v(" "),_("li",[l._v("将不同地域的请求分流到最近服务器，如果该服务器没有请求资源的缓存，则请求主服务器")])])]),l._v(" "),_("li",[l._v("数据库集群或者库表散列\n"),_("ol",[_("li",[l._v("读写分离")])])])])]),l._v(" "),_("li",[l._v("实在服务器就是扛不住，\n"),_("ul",[_("li",[l._v("漏桶(Leaky Bucket)算法思路很简单,水(请求)先进入到漏桶里,漏桶以一定的速度出水(接口有响应速率),当水流入速度过大会直接溢出(访问频率超过接口响应速率),然后就拒绝请求。因为漏桶的漏出速率是固定的参数,所以,即使网络中不存在资源冲突(没有发生拥塞),漏桶算法也不能使流突发(burst)到端口速率.因此,漏桶算法对于存在突发特性的流量来说缺乏效率.")]),l._v(" "),_("li",[l._v("令牌桶算法(Token Bucket)：随着时间流逝,系统会按恒定1/QPS时间间隔(如果QPS=100,则间隔是10ms)往桶里加入Token(想象和漏洞漏水相反,有个水龙头在不断的加水),如果桶已经满了就不再加了.新请求来临时,会各自拿走一个Token,如果没有Token可拿了就阻塞或者拒绝服务.令牌桶的另外一个好处是可以方便的改变速度. 一旦需要提高速率,则按需提高放入桶中的令牌的速率. 一般会定时(比如100毫秒)往桶中增加一定数量的令牌, 有些变种算法则实时的计算应该增加的令牌的数量.")])])]),l._v(" "),_("li",[l._v("围绕大数据和高并发这两个问题展开的，解决方案主要分为使用缓存和多资源两种类型。多资源主要指多存储（包括多内存）、多CPU和多网络，对于多资源来说又可以分为单个资源处理一个完整的请求和多个资源合作处理一个请求两种类型，如多存储和多CPU中的集群和分布式，多网络中的CDN和静态资源分离。理解了整个思路之后就抓住了架构演变的本质，而且自己可能还可以设计出更好的架构。")])])])]),l._v(" "),_("ul",[_("li",[l._v("Tips\n"),_("ul",[_("li",[l._v("系统吞吐量\n"),_("ul",[_("li",[l._v("并发数： 系统同时处理的request/事务数")]),l._v(" "),_("li",[l._v("响应时间： 一般取平均响应时间")]),l._v(" "),_("li",[l._v("QPS（TPS）：每秒钟request/事务 数量")]),l._v(" "),_("li",[l._v("QPS（TPS）= 并发数/平均响应时间")])])]),l._v(" "),_("li",[l._v("常用服务器\n"),_("ul",[_("li",[l._v("tomcat： 免费")]),l._v(" "),_("li",[l._v("weblogic： 稳定")])])])])])])])}),[],!1,null,null,null);v.default=n.exports}}]);