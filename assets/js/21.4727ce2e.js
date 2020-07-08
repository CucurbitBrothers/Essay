(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{370:function(e,v,_){"use strict";_.r(v);var a=_(42),s=Object(a.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h3",{attrs:{id:"开发规范"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#开发规范"}},[e._v("#")]),e._v(" 开发规范")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://yq.aliyun.com/articles/531067",target:"_blank",rel:"noopener noreferrer"}},[e._v("阿里云开发规范"),_("OutboundLink")],1)]),e._v(" "),_("li",[e._v("按类划分, 不要多个业务共用")]),e._v(" "),_("li",[e._v("越简单越容易管理")])]),e._v(" "),_("h3",{attrs:{id:"进阶命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进阶命令"}},[e._v("#")]),e._v(" 进阶命令")]),e._v(" "),_("h4",{attrs:{id:"scan"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#scan"}},[e._v("#")]),e._v(" scan")]),e._v(" "),_("ul",[_("li",[e._v("代替 keys")])]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("SCAN cursor [MATCH pattern] [COUNT count]\n")])])]),_("h4",{attrs:{id:"slow-log-慢查询日志"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#slow-log-慢查询日志"}},[e._v("#")]),e._v(" SLOW LOG 慢查询日志")]),e._v(" "),_("ul",[_("li",[e._v("Redis 服务器将所有的慢查询日志保存在服务器状态的 "),_("code",[e._v("slowlog")]),e._v(" 链表中， 每个链表节点都包含一个 "),_("code",[e._v("slowlogEntry")]),e._v(" 结构， 每个 "),_("code",[e._v("slowlogEntry")]),e._v(" 结构代表一条慢查询日志")])]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("typedef struct slowlogEntry {\n    // 唯一标识符\n    long long id;\n\n        // 命令执行时的时间，格式为 UNIX 时间戳\n    time_t time;\n\n    // 执行命令消耗的时间，以微秒为单位\n    long long duration;\n\n    // 命令与命令参数\n    robj **argv;\n\n    // 命令与命令参数的数量\n    int argc;\n\n} slowlogEntry;\n")])])]),_("ul",[_("li",[e._v("配置方法")]),e._v(" "),_("li",[e._v("修改配置文件 "),_("code",[e._v("redis.conf")]),e._v(" ，重启redis")]),e._v(" "),_("li",[e._v("动态设置")])]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("# 慢查询的阈值（单位：微秒）\n# 不要设置过大，默认为 10 ms，通常可设置为 1ms。\n# =0: 记录所有;  <0: 不记录任何命令\nslowlog-log-slower-than\n\n# 指定服务器最多保存多少条慢查询日志, 默认值为 128\n# 先进先出的队列; 固定长度; 保存在内存内, 可以定期持久化内存\n# 不要设置过小，通常可设置在1000左右\nslowlog-max-len\n\nCONFIG SET slowlog-log-slower-than 0\n")])])]),_("ul",[_("li",[e._v("查询慢日志")]),e._v(" "),_("li",[e._v("SLOWLOG GET [n]")]),e._v(" "),_("li",[e._v("SLOWLOG LEN")]),e._v(" "),_("li",[e._v("SLOWLOG RESET")])]),e._v(" "),_("h4",{attrs:{id:"rename-command"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rename-command"}},[e._v("#")]),e._v(" rename-command")]),e._v(" "),_("ul",[_("li",[e._v("在conf 配置文件中将一些高危命令重命名")])]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("rename-command flushall flushallall\nrename-command keys keysys\n")])])]),_("h4",{attrs:{id:"bigkeys"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bigkeys"}},[e._v("#")]),e._v(" bigkeys")]),e._v(" "),_("ul",[_("li",[e._v("检查大 key.")]),e._v(" "),_("li",[e._v("redis-cli -p 6380 --bigkeys")]),e._v(" "),_("li",[e._v("string类型可以筛选出最占内存的key, 其他类型只能筛选出元素最多的key")])]),e._v(" "),_("h4",{attrs:{id:"monitor"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#monitor"}},[e._v("#")]),e._v(" monitor")]),e._v(" "),_("ul",[_("li",[e._v("查看执行来源")])]),e._v(" "),_("h4",{attrs:{id:"info"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#info"}},[e._v("#")]),e._v(" info")]),e._v(" "),_("ul",[_("li",[e._v("全面反映redis运行情况")])]),e._v(" "),_("h4",{attrs:{id:"config"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[e._v("#")]),e._v(" config")]),e._v(" "),_("ul",[_("li",[e._v("热修改 配置文件")])]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("config get *\nconfig set xxx\n\n# 将热修改的参数刷到redis配置文件, 避免重启时被原先的配置覆盖\nconfig rewrite\n")])])]),_("h4",{attrs:{id:"set"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[e._v("#")]),e._v(" set")]),e._v(" "),_("ul",[_("li",[e._v("SET key value [EX seconds] [PX milliseconds] [NX|XX]")])]),e._v(" "),_("h3",{attrs:{id:"redis-分布式锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis-分布式锁"}},[e._v("#")]),e._v(" Redis 分布式锁")]),e._v(" "),_("ul",[_("li",[e._v("redlock")]),e._v(" "),_("li",[e._v("http://redis.cn/topics/distlock.html")])]),e._v(" "),_("h3",{attrs:{id:"redis-数据过期策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis-数据过期策略"}},[e._v("#")]),e._v(" Redis 数据过期策略")]),e._v(" "),_("ul",[_("li",[e._v("设置过期时间")]),e._v(" "),_("li",[e._v("expire key time(以秒为单位)--这是最常用的方式")]),e._v(" "),_("li",[e._v("setex(String key, int seconds, String value)–字符串独有的方式")]),e._v(" "),_("li",[e._v("过期策略")]),e._v(" "),_("li",[e._v("过期方式\n"),_("ul",[_("li",[e._v("被动删除：")]),e._v(" "),_("li",[e._v("当读/写一个已经过期的key时，会触发惰性删除策略，直接删除掉这个过期key")]),e._v(" "),_("li",[e._v("对CPU友好,但是对内存不友好, 甚至会造成内存泄漏")]),e._v(" "),_("li",[e._v("主动删除(定期删除)：")]),e._v(" "),_("li",[e._v("由于惰性删除策略无法保证冷数据被及时删掉，所以Redis会定期主动淘汰一批已过期的key")]),e._v(" "),_("li",[e._v("合理设置删除操作的执行时长（每次删除执行多长时间）和执行频率（每隔多长时间做一次删除）")]),e._v(" "),_("li",[e._v("常规的自检主要包括:\n"),_("ul",[_("li",[e._v("更新服务器的各类统计信息，比如时间、内存占用、数据库占用情况等。")]),e._v(" "),_("li",[e._v("清理数据库中的过期键值对。")]),e._v(" "),_("li",[e._v("对不合理的数据库进行大小调整。")]),e._v(" "),_("li",[e._v("关闭和清理连接失效的客户端。")]),e._v(" "),_("li",[e._v("尝试进行 AOF 或 RDB 持久化操作。")]),e._v(" "),_("li",[e._v("如果服务器是主节点的话，对附属节点进行定期同步。")]),e._v(" "),_("li",[e._v("如果处于集群模式的话，对集群进行定期同步和连接测试。")])])]),e._v(" "),_("li",[e._v("maxmemory")]),e._v(" "),_("li",[e._v("当前已用内存超过maxmemory限定时，触发主动清理策略\n"),_("ul",[_("li",[e._v("volatile-lru：只对设置了过期时间的key进行LRU（默认值）")]),e._v(" "),_("li",[e._v("allkeys-lru ： 删除lru算法的key")]),e._v(" "),_("li",[e._v("volatile-random：随机删除即将过期key")]),e._v(" "),_("li",[e._v("allkeys-random：随机删除")]),e._v(" "),_("li",[e._v("volatile-ttl ： 删除即将过期的")]),e._v(" "),_("li",[e._v("noeviction ： 永不过期，返回错误当mem_used内存已经超过maxmemory的设定")])])])])]),e._v(" "),_("li",[e._v("redis 采用的过期策略")]),e._v(" "),_("li",[e._v("惰性删除+定期删除")]),e._v(" "),_("li",[e._v("4、RDB对过期key的处理")])]),e._v(" "),_("p",[e._v("过期key对RDB没有任何影响")]),e._v(" "),_("ul",[_("li",[e._v("从内存数据库持久化数据到RDB文件\n"),_("ul",[_("li",[e._v("持久化key之前，会检查是否过期，过期的key不进入RDB文件")])])]),e._v(" "),_("li",[e._v("从RDB文件恢复数据到内存数据库\n"),_("ul",[_("li",[e._v("数据载入数据库之前，会对key先进行过期检查，如果过期，不导入数据库（主库情况）")])])]),e._v(" "),_("li",[e._v("5、AOF对过期key的处理")])]),e._v(" "),_("p",[e._v("过期key对AOF没有任何影响")]),e._v(" "),_("ul",[_("li",[e._v("从内存数据库持久化数据到AOF文件：\n"),_("ul",[_("li",[e._v("当key过期后，还没有被删除，此时进行执行持久化操作（该key是不会进入aof文件的，因为没有发生修改命令）")]),e._v(" "),_("li",[e._v("当key过期后，在发生删除操作时，程序会向aof文件追加一条del命令（在将来的以aof文件恢复数据的时候该过期的键就会被删掉）")])])]),e._v(" "),_("li",[e._v("AOF重写\n"),_("ul",[_("li",[e._v("重写时，会先判断key是否过期，已过期的key不会重写到aof文件")])])])]),e._v(" "),_("h3",{attrs:{id:"最大内存淘汰策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最大内存淘汰策略"}},[e._v("#")]),e._v(" 最大内存淘汰策略")]),e._v(" "),_("ul",[_("li",[e._v("maxmemory-policy")]),e._v(" "),_("li",[e._v("volatile-lru")]),e._v(" "),_("li",[e._v("OOM")])]),e._v(" "),_("h3",{attrs:{id:"事务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[e._v("#")]),e._v(" 事务")]),e._v(" "),_("p",[e._v("Redis 通过 MULTI 、 DISCARD 、 EXEC和 WATCH 四个命令来实现事务功能")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("MULTI # 开启事务")])]),e._v(" "),_("li",[_("p",[e._v("EXEC # 触发事务")])]),e._v(" "),_("li",[_("p",[e._v("``` redis> MULTI OK")]),e._v(" "),_("p",[e._v('redis> SET book-name "Mastering C++ in 21 days" QUEUED')]),e._v(" "),_("p",[e._v("redis> GET book-name QUEUED")]),e._v(" "),_("p",[e._v('redis> SADD tag "C++" "Programming" "Mastering Series" QUEUED')]),e._v(" "),_("p",[e._v("redis> SMEMBERS tag QUEUED")]),e._v(" "),_("p",[e._v('redis> EXEC 1) OK 2) "Mastering C++ in 21 days" 3) (integer) 3 4) 1) "Mastering Series" 2) "C++" 3) "Programming" ```')])]),e._v(" "),_("li",[_("p",[e._v("事务执行过程")])]),e._v(" "),_("li",[_("p",[e._v("开始事务。")])]),e._v(" "),_("li",[_("p",[e._v("命令入队。")])]),e._v(" "),_("li",[_("p",[e._v("执行事务。")])]),e._v(" "),_("li",[_("p",[e._v("DISCARD")])]),e._v(" "),_("li",[_("p",[e._v("用于取消一个事务,清空客户端的整个事务队列,然后将客户端从事务状态调整回非事务状态")])]),e._v(" "),_("li",[_("p",[e._v("WATCH")])]),e._v(" "),_("li",[_("p",[e._v("用于在事务开始之前监视任意数量的键： 当调用 EXEC 命令执行事务时， 如果任意一个被监视的键已经被其他客户端修改了， 那么整个事务不再执行， 直接返回失败")])])]),e._v(" "),_("h3",{attrs:{id:"pipeline-与事务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pipeline-与事务"}},[e._v("#")]),e._v(" Pipeline 与事务")]),e._v(" "),_("h4",{attrs:{id:"_1-pipeline概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-pipeline概念"}},[e._v("#")]),e._v(" 1. Pipeline概念")]),e._v(" "),_("p",[_("code",[e._v("Redis")]),e._v("客户端执行一条命令分为以下四个步骤:")]),e._v(" "),_("p",[e._v("1.发送命令 2.命令排队 3.命令执行 4.返回结果")]),e._v(" "),_("p",[e._v("其中,第一步+第四步称为"),_("code",[e._v("Round Trip Time")]),e._v("("),_("code",[e._v("RTT")]),e._v(",往返时间).")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://segmentfault.com/img/bVV916?w=1372&h=744",alt:"图1.1 没有Pipeline执行n次命令"}})]),e._v(" "),_("p",[_("code",[e._v("Redis")]),e._v("提供了批量操作命令(例如"),_("code",[e._v("mget")]),e._v(","),_("code",[e._v("mset")]),e._v("等),有效的节约"),_("code",[e._v("RTT")]),e._v(".但大部分命令是不支持批量操作的,例如要执行"),_("code",[e._v("n")]),e._v("次"),_("code",[e._v("hgetall")]),e._v("命令,并没有"),_("code",[e._v("mhgetall")]),e._v("存在,需要消耗"),_("code",[e._v("n")]),e._v("次"),_("code",[e._v("RTT")]),e._v("."),_("code",[e._v("Redis")]),e._v("的客户端和服务端可能不是在不同的机器上.例如客户端在北京,"),_("code",[e._v("Redis")]),e._v("服务端在上海,两地直线距离为1300公里,那么1次"),_("code",[e._v("RTT")]),e._v("时间="),_("code",[e._v("1300×2/(300000×2/3)=13毫秒")]),e._v("(光在真空中传输速度为每秒30万公里,这里假设光纤的速度为光速的2/3),那么客户端在1秒内大约只能执行80次左右的命令,这个和"),_("code",[e._v("Redis")]),e._v("的高并发高吞吐背道而驰.")]),e._v(" "),_("p",[_("code",[e._v("Pipeline")]),e._v("(流水线)机制能改善上面这类问题,它能将一组"),_("code",[e._v("Redis")]),e._v("命令进行组装,通过一次"),_("code",[e._v("RTT")]),e._v("传输给"),_("code",[e._v("Redis")]),e._v(",再将这组"),_("code",[e._v("Redis")]),e._v("命令按照顺序执行并装填结果返回给客户端."),_("strong",[e._v("图1.1")]),e._v("中未使用"),_("code",[e._v("Pipeline")]),e._v("执行了n次命令,整个过程需要n个"),_("code",[e._v("RTT")]),e._v(".")]),e._v(" "),_("p",[_("code",[e._v("Pipeline")]),e._v("并不是什么新的技术和机制,很多技术上都使用过.而且"),_("code",[e._v("RTT")]),e._v("在不同网络环境下会有不同,例如同机房和同机器会比较快,跨机房跨地区会比较慢."),_("code",[e._v("Redis")]),e._v("命令真正执行的时间通常在微秒级别,所以才会有"),_("code",[e._v("Redis")]),e._v("性能瓶颈是网络这样的说法.")]),e._v(" "),_("h4",{attrs:{id:"_2-原生批量命令与pipeline对比"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-原生批量命令与pipeline对比"}},[e._v("#")]),e._v(" 2. 原生批量命令与Pipeline对比")]),e._v(" "),_("p",[e._v("可以使用"),_("code",[e._v("Pipeline")]),e._v("模拟出批量操作的效果,但是在使用时需要质疑它与原生批量命令的区别,具体包含几点:")]),e._v(" "),_("ul",[_("li",[e._v("原生批量命令是原子性,"),_("code",[e._v("Pipeline")]),e._v("是非原子性的.")]),e._v(" "),_("li",[e._v("原生批量命令是一个命令对应多个"),_("code",[e._v("key")]),e._v(","),_("code",[e._v("Pipeline")]),e._v("支持多个命令.")]),e._v(" "),_("li",[e._v("原生批量命令是"),_("code",[e._v("Redis")]),e._v("服务端支持实现的,而"),_("code",[e._v("Pipeline")]),e._v("需要服务端与客户端的共同实现.")])]),e._v(" "),_("h4",{attrs:{id:"_3-pipeline总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-pipeline总结"}},[e._v("#")]),e._v(" 3. Pipeline总结")]),e._v(" "),_("p",[_("code",[e._v("Pipeline")]),e._v("虽然好用,但是每次"),_("code",[e._v("Pipeline")]),e._v("组装的命令个数不能没有节制,否则一次组装"),_("code",[e._v("Pipeline")]),e._v("数据量过大,一方面会增加客户端的等待时机,另一方面会造成一定的网络阻塞,可以将一次包含大量命令的"),_("code",[e._v("Pipeline")]),e._v("拆分成多次较小的"),_("code",[e._v("Pipeline")]),e._v("来完成.")]),e._v(" "),_("p",[_("code",[e._v("Pipeline")]),e._v("只能操作一个"),_("code",[e._v("Redis")]),e._v("实例,但即使在分布式"),_("code",[e._v("Redis")]),e._v("场景中,也可以作为批量操作的重要优化方法.")]),e._v(" "),_("h3",{attrs:{id:"事务-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事务-2"}},[e._v("#")]),e._v(" 事务")]),e._v(" "),_("p",[e._v("为了保证多条命令组合的原子性,"),_("code",[e._v("Redis")]),e._v("提供了简单的事务以及集成"),_("code",[e._v("Lua")]),e._v("脚本来解决这个问题.")]),e._v(" "),_("p",[e._v("熟悉关系型数据库的开发者应该对事务比较了解,简单地说,事务表示一组动作,要么全部成功,要不全部不成功.例如在在电商网站中"),_("strong",[e._v("用户")]),e._v("购买"),_("strong",[e._v("商品A")]),e._v("那么需要将"),_("strong",[e._v("商品A")]),e._v("的库存-1,并创建一个订单.这两个操作要么远不执行成功,要么全部执行不成功,否则会出现数据不一致的情况.")]),e._v(" "),_("p",[_("code",[e._v("Redis")]),e._v("提供了简单的功能,将一组需要一起执行的命令放到"),_("code",[e._v("multi")]),e._v("和"),_("code",[e._v("exec")]),e._v("两个命令之间."),_("code",[e._v("multi")]),e._v("命令代表事务的开始,"),_("code",[e._v("exec")]),e._v("命令代表事务结束,他们之间的命令是原子顺序执行的. 例如上述的用户购买商品问题:")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("    127.0.0.1:6379> multi\n    OK\n    127.0.0.1:6379> hincrby commodity:a:detail stock -1\n    QUEUE\n    127.0.0.1:6379> rpush user:1:orders {\"commodity\":'a',..}\n    QUEUE\n")])])]),_("p",[e._v("可以看到数据操作命令返回的结果是"),_("code",[e._v("QUEUE")]),e._v(",代表命令并没有真正执行,而是暂时保存在"),_("code",[e._v("Redis")]),e._v("中.如果此时另一个客户端执行"),_("code",[e._v("llen user:1:orders")]),e._v("返回结果为0.")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("    127.0.0.1:6379> llen user:1:orders\n    (integer) 0\n")])])]),_("p",[e._v("只有当"),_("code",[e._v("exec")]),e._v("执行后,用户购买商品的行为才算完成,如下两个结果对应"),_("code",[e._v("hincrby")]),e._v("和"),_("code",[e._v("rpush")]),e._v("命令.")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("    127.0.0.1:6379> exec\n    1) (integer) 4  # 商品原库存为5\n    2) (integer) 1\n    127.0.0.1:6379> llen user:1:orders\n    (integer) 1\n")])])]),_("p",[e._v("如果要停止事务的执行,可以使用"),_("code",[e._v("discard")]),e._v("命令替代"),_("code",[e._v("exec")]),e._v("命令即可.")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("    127.0.0.1:6379> discard\n    OK\n    127.0.0.1:6379> llen user:1:orders\n    (integer) 0\n")])])]),_("p",[e._v("如果事务中的命令出现错误,"),_("code",[e._v("Redis")]),e._v("的处理机制也不尽相同.")]),e._v(" "),_("p",[e._v("1."),_("strong",[e._v("命令错误")]),e._v(" 例如下面操作错将"),_("code",[e._v("set")]),e._v("写成了"),_("code",[e._v("sett")]),e._v(",属于语法错误,会造成整个事务无法执行,"),_("code",[e._v("key")]),e._v("和"),_("code",[e._v("counter")]),e._v("的值未发生变化:")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v('    127.0.0.1:6379> mget key counter\n    1) "hello"\n    2) "100"\n    127.0.0.1:6379> multi\n    OK\n    127.0.0.1:6379> sett key world\n    (error) ERR unknown command \'sett\'\n    127.0.0.1:6379> incr counter\n    QUEUE\n    127.0.0.1:6379> exec\n    (error) EXECABORT Transaction discarded because of previous errors.\n    127.0.0.1:6379> mget key counter\n    1) "hello"\n    2) "100"\n')])])]),_("p",[e._v("2."),_("strong",[e._v("运行时错误")]),e._v(" 例如用户购买商品,误把"),_("code",[e._v("rpush")]),e._v("写成了"),_("code",[e._v("zadd")])]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("    127.0.0.1:6379> multi\n    OK\n    127.0.0.1:6379> hincrby commodity:a:detail stock -1\n    QUEUED\n    127.0.0.1:6379> zadd user:1:orders {\"commodity\":'a',..}\n    QUEUED\n    127.0.0.1:6379> exec\n    1) (integer) 1\n    2) (error) WRONGTYPE Operation against a key holding the wrong kind of value.\n    127.0.0.1:6379> hget commodity:a:detail stack\n    (integer) 3\n")])])]),_("p",[e._v("可以看到"),_("code",[e._v("Redis")]),e._v("并不支持回滚功能,"),_("code",[e._v("hincrby commodity:a:detail stock -1")]),e._v("命令已经执行成功,开发者需要自己修改这类问题.")])])}),[],!1,null,null,null);v.default=s.exports}}]);