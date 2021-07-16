(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{426:function(n,e,t){"use strict";t.r(e);var s=t(44),l=Object(s.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h1",{attrs:{id:"_21-sql优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_21-sql优化"}},[this._v("#")]),this._v(" 21-SQL优化")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("1.MySQL大表优化\n    1.字段         \n            尽量使用TINYINT、SMALLINT、MEDIUM_INT作为整数类型而非INT，如果非负则加上UNSIGNED\n            使用枚举或整数代替字符串类型\n            尽可能的使用 varchar\n            尽量使用TIMESTAMP而非DATETIME，\n            避免使用NULL字段，很难查询优化且占用额外索引空间\n            用整型来存IP\n        2.索引\n            索引并不是越多越好，要根据查询有针对性的创建，考虑在WHERE和ORDER BY命令上涉及的列建立索引\n            应尽量避免在WHERE子句中对字段进行NULL值判断，否则将导致引擎放弃使用索引而进行全表扫描\n            不用外键，由程序保证约束  db_constraint=False\n            尽量不用UNIQUE，由程序保证约束\n        3.查询SQL\n             不做列运算：SELECT id WHERE age + 1 = 10，任何对列的操作都将导致表扫描，\n             sql语句尽可能简单：一条sql只能在一个cpu运算；\n             大语句拆小语句，减少锁时间；一条大sql可以堵死整个库\n             不用SELECT *\n             不用函数和触发器，在应用程序实现\n             少用JOIN\n             尽量避免在WHERE子句中使用!=或<>操作符，否则引擎将放弃使用索引而进行全表扫描\n             OR改写成IN：OR的效率是n级别，IN的效率是log(n)级别，in的个数建议控制在200以内\n             对于连续数值，使用BETWEEN不用IN：\n        4.引擎\n            1. InnoDB\n                1. 在并发度较高的场景下使用InnoDB会提升效率的。它的设计的目标就是处理大数据容量的数据库系统，\n                4. InnoDB更适合写密集的的表，适合作为线上事物型数据库。\n            2. MyISAM\n                1. 如果表的读操作远远多于写操作时，并且不需要事务的支持的。可以将MyIASM作为数据库引擎的首选，\n                   它强调的是性能，就读取数据而言比InnoDB更快。\n                2. MyISAM更适合读密集的表，适用于ROLAP数据仓库\n        5.系统调优参数\n        6.升级硬件\n        7.读写分离\n            主库写，从库读\n        8.缓存\n            1.mysql内部：缓存区的设置\n            2.数据访问层：对SQL语句做缓存，利用 drf-extensions + Redis进行缓存，减少服务器的访问次数\n            3.web层：页面静态化\n            4.浏览器客户端：客户端缓存\n        9.表拆分\n            1.垂直/水平  拆分\n        10.代理架构\n             通过独立的中间件来统一管理所有数据源和数据分片整合\n        11.选择NoSQL\n2.面试常见\n     一、表的设计\n        架构方向：对数据库性能影响较大的特性少用；应将计算集中在服务层，解放数据库CPU；\n        数据库擅长索引和存储，勿让数据库背负重负\n       \n        0、必须使用默认的InnoDB存储引擎--支持事务、行级锁、并发性能好、CPU及内存缓存页优化使得资源利用率高\n        1、表和字段使用中文注释--便于后人理解\n        2、使用默认utf8mb4字符集--标准、万国码、无乱码风险、无需转码\n        3、禁止使用触发器、视图、存储过程和event\n        4、禁止使用外键--外键导致表之间的耦合，update和delete操作都会涉及相关表，影响性能\n        5、禁止存大文件或者照片--在数据库里存储URI\n       \n 字段：\n        6、必须把字段定义为NOT NULL并设置默认值--null值需要更多的存储空间；\n        7、禁止使用TEXT/BOLB字段类型--浪费磁盘和内存空间，非必要的大量的大字段查询导致内存命中率降低，影响数据库性能\n       \n 索引：\n        8、单表索引控制在5个以内\n        9、联合索引不超过5个字段--超过5个起不到有效过滤数据的效果\n        10、建立组合索引，必须把区分度高的字段放在前边--更加有效的过滤数据\n        11、数据区分度不大的字段不应使用索引--例如：性别只有男，女，每次过滤数据很少\n    二、SQL查询规范：\n        1、禁止使用select *，只获取需要的字段--查询很多无用字段，增加CPU/IO/NET消耗；\n           不能有效的利用覆盖索引；增删字段易出bug\n        2、禁止使用属性的隐式转换select * from customer where phone=123123--会导致全表扫描，不能命中索引\n        3、禁止在where条件上使用函数和计算\n        4、禁止负向查询（NOT != <> !< !> MOT IN NOT LIKE）和%开头的like（前导模糊查询）--会导致全表扫描\n        5、禁止大表使用JOIN查询和子查询--会产生临时表，消耗较多CPU和内存，影响数据库性能\n        6、在属性上进行计算不能命中索引--如 select * from order where YEAR(date) <= '2017'不能命中索引导致全表扫描\n        7、明知道只有一条记录返回，建议加上limit 1\n")])])])])}),[],!1,null,null,null);e.default=l.exports}}]);