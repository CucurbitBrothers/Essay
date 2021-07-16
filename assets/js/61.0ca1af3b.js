(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{428:function(v,_,l){"use strict";l.r(_);var i=l(44),o=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"_20-mysql"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_20-mysql"}},[v._v("#")]),v._v(" 20-MySQL")]),v._v(" "),l("p",[v._v("问题")]),v._v(" "),l("ol",[l("li",[v._v("MySQL查询执行过程\n"),l("ol",[l("li",[l("img",{attrs:{src:"image/44439150904cf87b19b596ab7b4b59be.png",alt:"44439150904cf87b19b596ab7b4b59be.png"}})]),v._v(" "),l("li",[v._v("客户端发送一个查询给服务器。")]),v._v(" "),l("li",[v._v("服务器先检查查询缓存，如果命中，则直接返回缓存中的结果。如果没有没有命中，则进入下一阶段（解析器）。")]),v._v(" "),l("li",[v._v("服务器由解析器检查sql语法是否正确，然后由预处理器检查sql中的表和字段是否存在，最后由查询优器生成执行计划。这一步很耗资源。")]),v._v(" "),l("li",[v._v("mysql根据优化器生成的执行计划，调用存储引擎的API来执行查询。")]),v._v(" "),l("li",[v._v("将结果返回给客户端。")])])]),v._v(" "),l("li",[v._v("MySQL客户端和服务端之间的通信\n"),l("ol",[l("li",[v._v("在mysql服务器和客户端之间的通信时“半双工”的。就是在同一时刻要么由客户向Mysql服务器发送数据，要么由MySQL服务器向客户端发送数据")])])])]),v._v(" "),l("ul",[l("li",[v._v("完整的select语句")])]),v._v(" "),l("p",[v._v("select distinct *")]),v._v(" "),l("p",[v._v("from 表名")]),v._v(" "),l("p",[v._v("where ....")]),v._v(" "),l("p",[v._v("group by ... having ...")]),v._v(" "),l("p",[v._v("order by ...")]),v._v(" "),l("p",[v._v("limit start,count")]),v._v(" "),l("ul",[l("li",[v._v("执行顺序为：\n"),l("ul",[l("li",[v._v("from 表名")]),v._v(" "),l("li",[v._v("where ....")]),v._v(" "),l("li",[v._v("group by ...")]),v._v(" "),l("li",[v._v("select distinct *")]),v._v(" "),l("li",[v._v("having ...")]),v._v(" "),l("li",[v._v("order by ...")]),v._v(" "),l("li",[v._v("limit start,count")])])]),v._v(" "),l("li",[v._v("表备份\n"),l("ul",[l("li",[v._v("mysqldump –uroot –p 数据库名 > python.sql;")]),v._v(" "),l("li",[v._v("mysql -uroot –p 新数据库名 < python.sql")])])])]),v._v(" "),l("ol",[l("li",[l("strong",[v._v("MySQL数据库引擎:")]),v._v(" "),l("ul",[l("li",[v._v("MySQL5.5版本之前默认的是MyISAM存储引擎，5.5版本之后是InnoDB。")]),v._v(" "),l("li",[v._v("现在最新的版本是8.0，速度相比5.7提高了两倍，而且默认字符集utf8mb4，在这以前是latin1。")]),v._v(" "),l("li",[v._v("MySQL的“utf8”实际上不是真正的UTF-8编码。“utf8”只支持每个字符最多三个字节，而真正的UTF-8是每个字符最多四个字节。MySQL的“utf8mb4”才是真正的“UTF-8”编码, 可以同其他程序的“UTF-8”兼容。")])])])]),v._v(" "),l("ul",[l("li",[v._v("关于引擎：常用的就是MyISAM和InnoDB，除了这两个还有CSV（支持从数据库中拷入/拷出CSV文件）、HEAP（也称为MEMORY，通过在内存中创建临时表来存储数据，拥有极高的插入、更新和查询效率，缺点就是不稳定，发生 异常，或者重启电脑都会丢失数据）")])]),v._v(" "),l("ol",[l("li",[l("p",[l("strong",[v._v("InnoDB")])]),v._v(" "),l("ol",[l("li",[v._v("Innodb引擎提供了对数据库ACID事务的支持（原子性，一致性，隔离性，持久性）。")]),v._v(" "),l("li",[v._v("并且还提供了行级锁和外键的约束，同时也支持表锁。InnoDB的行级锁基于索引，其他情况下使用表锁。")]),v._v(" "),l("li",[v._v("大部分情况都是使用行级锁，它的粒度小，写操作不锁定全表。所以在并发度较高的场景下使用InnoDB会提升效率的。它的设计的目标就是处理大数据容量的数据库系统，")]),v._v(" "),l("li",[v._v("InnoDB更适合写密集的的表，适合作为线上事物型数据库。")])])]),v._v(" "),l("li",[l("p",[l("strong",[v._v("MyISAM")])]),v._v(" "),l("ol",[l("li",[v._v("不提供事务的支持，也不支持行级锁和外键，只支持表锁。")]),v._v(" "),l("li",[v._v("MyISAM可以支持查询和插入操作的并发进行.而且大量的insert操作时比较快，但是大量update时速度就不尽人意了。")]),v._v(" "),l("li",[v._v("如果表的读操作远远多于写操作时，并且不需要事务的支持的。可以将MyIASM作为数据库引擎的首选，它强调的是性能，就读取数据而言比InnoDB更快。")]),v._v(" "),l("li",[v._v("MyISAM更适合读密集的表，适用于ROLAP数据仓库")])])]),v._v(" "),l("li",[l("p",[v._v("隔离级别")]),v._v(" "),l("ol",[l("li",[v._v("隔离级别           脏读（Dirty Read）          不可重复读（NonRepeatable Read）     幻读（Phantom Read）")]),v._v(" "),l("li",[v._v("读未提交")]),v._v(" "),l("li",[v._v("读已提交")]),v._v(" "),l("li",[v._v("可重复读（Repeatable read）          0                         0                     1\n"),l("ul",[l("li",[v._v("避免脏读，不可重复读的发生")]),v._v(" "),l("li",[v._v("不过会有幻读现象，InnoDB引擎可以通过next-key locks机制来避免幻读")])])]),v._v(" "),l("li",[v._v("序列化（Serializable ）                    0                          0                     0\n"),l("ul",[l("li",[v._v("该隔离级别下事务都是串行顺序执行的，MySQL 数据库的 InnoDB 引擎会给读操作隐式加一把读共享锁，从而避免了脏读、不可重读复读和幻读问题。")])])])])]),v._v(" "),l("li",[l("p",[l("strong",[v._v("索引")])]),v._v(" "),l("ol",[l("li",[l("p",[v._v("MySQL索引的类型：")]),v._v(" "),l("ol",[l("li",[v._v("主键（聚集）索引，非聚集索引（普通索引、全文索引，唯一索引（unique），），\n"),l("ol",[l("li",[v._v("主键索引是唯一索引的特殊类型。求主键中的每个值是唯一的，并且不能为空")]),v._v(" "),l("li",[v._v("聚集索引表中各行的物理顺序与键值的逻辑（索引）顺序相同，每个表只能有一个。MySQL里主键就是聚集索引。聚集索引在叶子节点存储的是表中的数据。")]),v._v(" "),l("li",[v._v("非聚集索引指定表的逻辑顺序。数据存储在一个位置，索引存储在另一个位置，索引中包含指向数据存储位置的指针。可以理解为：非聚集索引在叶子节点存储的是主键和索引列。使用非聚集索引查询出数据时，拿到叶子节点上的主键，再去根据主键查到想要查找的数据，因此速度会慢一点。")])])])])]),v._v(" "),l("li",[l("p",[v._v("特点")]),v._v(" "),l("ol",[l("li",[v._v("可以加快数据库的检索速度,但是会降低插入、删除、修改等维护任务的速度。")]),v._v(" "),l("li",[v._v("索引需要占物理和内存空间，所以不要建太多，注意平衡。")]),v._v(" "),l("li",[v._v("最左匹配原则（\n"),l("ol",[l("li",[v._v("联合索引")]),v._v(" "),l("li",[v._v("(col1, col2, col3)这个联合索引的所有前缀 就是(col1), (col1, col2), (col1, col2, col3), 包含这些列的查询都会启用索 引查询.\n"),l("ul",[l("li",[v._v("** (col1, col3)会启用(col1)的索引查询**")])])]),v._v(" "),l("li",[v._v("其他所有不在最左前缀里的列都不会启用索引, 即使包含了联合索引里的部分列 也不行. 即上述中的(col2), (col3), (col2, col3) 都不会启用索引去查询.")])])])])]),v._v(" "),l("li",[l("p",[v._v("Mysql支持Hash索引和B+树索引两种")])]),v._v(" "),l("li",[l("p",[l("strong",[v._v("B+树索引:")])]),v._v(" "),l("ol",[l("li",[v._v("将无序的数据变成有序(相对)-----\x3e>底层结构就是B+树")]),v._v(" "),l("li",[v._v("B+树检索速度相当较快,所以就会提高检索速度")]),v._v(" "),l("li",[v._v("但因为B+树是一种平衡树,对这颗树增删改的话，那肯定会破坏它的原有结构,而要维持平衡树的结构就得做一些额外的工作,因此也就降低了增删改的效率\n"),l("ol",[l("li",[v._v("平衡树:一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树")])])]),v._v(" "),l("li",[v._v("MySQL索引为什么采用B+树这种宽树，而不是二叉树，\n"),l("ol",[l("li",[v._v("B+树的数据全部存放在叶子节点中，非叶子节点用来做索引，而叶子节点中有一个指针指向一下个叶子节点。做这个优化的目的是为了提高区间访问的性能。而正是这个特性决定了B+树更适合用来存储外部数据")]),v._v(" "),l("li",[v._v("好处：\n"),l("ol",[l("li",[v._v("磁盘读写代价低。把节点分块，磁盘I/O变少")]),v._v(" "),l("li",[v._v("查询效率稳定")]),v._v(" "),l("li",[v._v("数据都存在叶子节点，方便扫库")])])])])])])]),v._v(" "),l("li",[l("p",[l("strong",[v._v("哈希索引")])]),v._v(" "),l("ol",[l("li",[v._v("就是采用一定的哈希算法，把键值换算成新的哈希值")]),v._v(" "),l("li",[v._v("只需一次哈希算法即可立刻定位到相应的位置，速度非常快")]),v._v(" "),l("li",[v._v("局限性:\n"),l("ol",[l("li",[v._v("哈希索引没办法利用索引完成排序")]),v._v(" "),l("li",[v._v("不支持最左匹配原则")]),v._v(" "),l("li",[v._v("在有大量重复键值情况下，哈希索引的效率也是极低的--\x3e哈希碰撞问题")]),v._v(" "),l("li",[v._v("不支持范围查询,同样也就不支持模糊查询.")])])])])])])]),v._v(" "),l("li",[l("p",[l("strong",[v._v("锁")])]),v._v(" "),l("ol",[l("li",[v._v("我们在操作数据库的时候，可能会由于并发问题而引起的数据的不一致性（数据冲突）,这时候就需要锁了.比较幸运的是锁会隐式添加, 对于UPDATE、DELETE、INSERT语句，InnoDB会自动给涉及数据集加排他锁（X);  MyISAM在执行查询语句SELECT前，会自动给涉及的所有表加读锁，在执行更新操作（UPDATE、DELETE、INSERT等）前，会自动给涉及的表加写锁，这个过程并不需要用户干预")])])]),v._v(" "),l("li",[l("p",[v._v("分类:")]),v._v(" "),l("ol",[l("li",[l("p",[v._v("按使用方式")]),v._v(" "),l("ol",[l("li",[v._v("乐观锁/ 悲观锁")])])]),v._v(" "),l("li",[l("p",[v._v("按照粒度")]),v._v(" "),l("ul",[l("li",[v._v("表级锁(MyISAM，CSV，Memory)----共享读锁,独占写锁")]),v._v(" "),l("li",[v._v("行级锁(InnoDB)----共享锁(S) / 排它锁(X)")]),v._v(" "),l("li",[v._v("页级锁(Berkeley DB—开源的文件数据库，2006年被ORACAL收购)")])])])])]),v._v(" "),l("li",[l("p",[l("strong",[v._v("乐观锁:")])]),v._v(" "),l("ol",[l("li",[v._v("不是数据库自带的,需要我们自己去实现.一般我们添加一个版本字段来实现")]),v._v(" "),l("li",[v._v("在操作数据库(更新操作)时,想法很乐观,认为这次操作不会导致冲突,并不进行其他的特殊处理(不加锁),而是在进行更新后,再去判断是否有冲突")])])]),v._v(" "),l("li",[l("p",[l("strong",[v._v("实现:")])]),v._v(" "),l("ol",[l("li",[v._v("在表中的数据进行操作时(更新)，先给数据表加一个版本(version)字段")]),v._v(" "),l("li",[v._v("每操作一次，将那条记录的版本号加1。也就是先查询出那条记录，获取出version字段,")]),v._v(" "),l("li",[v._v("如果要对那条记录进行操作(更新),则先判断此刻version的值是否与刚刚查询出来时的version的值相等，如果相等，则说明这段期间，没有其他程序对其进行操作，则可以执行更新，将version字段的值加1；")]),v._v(" "),l("li",[v._v("如果更新时发现此刻的version值与刚刚获取出来的version的值不相等，则说明这段期间已经有其他程序对其进行操作了，则不进行更新操作。")])])]),v._v(" "),l("li",[l("p",[v._v("乐观锁适用于写比较少的情况下（多读场景），即冲突真的很少发生的时候，这样可以省去了锁的开销，加大了系统的整个吞吐量。")])]),v._v(" "),l("li",[l("p",[l("strong",[v._v("悲观锁")])]),v._v(" "),l("ol",[l("li",[v._v("在操作数据时，认为此操作会出现数据冲突，所以在进行每次操作时都要通过获取锁才能进行对相同数据的操作,所以会耗费比较多的时间，悲观锁是由数据库自己实现了的，可以直接调用数据库的相关语句。")]),v._v(" "),l("li",[v._v("悲观锁涉及到另外两个锁:共享锁与排它锁\n"),l("ol",[l("li",[v._v("共享锁:\n"),l("ol",[l("li",[v._v("又被称为读锁，其他用户可以并发读取数据(不断加读锁)，但任何事务都不能获取数据上的排他锁，直到已释放所有共享锁。")]),v._v(" "),l("li",[v._v("共享锁下其它用户可以并发读取，查询数据。但不能修改，增加，删除数据。资源共享.。")]),v._v(" "),l("li",[v._v("在执行语句后面加上lock in share mode")])])]),v._v(" "),l("li",[v._v("排它锁:\n"),l("ol",[l("li",[v._v("又称为写锁。若事务T对数据对象A加上X锁，则只允许T读取和修改A，其它任何事务都不能再对A加任何类型的锁，直到T释放A上的锁。")]),v._v(" "),l("li",[v._v("在更新操作(INSERT、UPDATE 或 DELETE)过程中始终应用排它锁。")]),v._v(" "),l("li",[v._v("在执行语句后面加上for update")])])])])])])]),v._v(" "),l("li",[l("p",[v._v("行锁:")]),v._v(" "),l("ol",[l("li",[v._v("开销大，加锁慢；会出现死锁；锁定粒度小，发生锁冲突的概率低，并发度高")])])]),v._v(" "),l("li",[l("p",[v._v("表锁")]),v._v(" "),l("ol",[l("li",[v._v("开销小，加锁快；不会出现死锁；锁定力度大，发生锁冲突概率高，并发度最低")])])]),v._v(" "),l("li",[l("p",[v._v("页锁")]),v._v(" "),l("ol",[l("li",[v._v("开销和加锁速度介于表锁和行锁之间；会出现死锁；锁定粒度介于表锁和行锁之间，并发度一般")])])]),v._v(" "),l("li",[l("p",[v._v("死锁：")]),v._v(" "),l("ol",[l("li",[v._v("并发的问题就少不了死锁,幸运的是mysql的回滚会解决不少死锁问题,但还是存在。\n"),l("ol",[l("li",[v._v("两个（或以上）的session加锁顺序不一致")])])]),v._v(" "),l("li",[v._v("解决:\n"),l("ol",[l("li",[v._v("以固定的顺序访问表和行。")]),v._v(" "),l("li",[v._v("大事务拆小。大事务更倾向于死锁，如果业务允许，将大事务拆小。")]),v._v(" "),l("li",[v._v("在同一个事务中，尽可能做到一次锁定所需要的所有资源，减少死锁概率")]),v._v(" "),l("li",[v._v("在业务环境允许的情况下，尽量降低隔离级别")]),v._v(" "),l("li",[v._v("为表添加合理的索引。可以看到如果不走索引将会为表的每一行记录添加上锁，死锁的概率大大增大")])])])])])])])}),[],!1,null,null,null);_.default=o.exports}}]);