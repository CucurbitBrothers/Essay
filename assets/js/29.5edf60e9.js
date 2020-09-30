(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{385:function(e,a,l){"use strict";l.r(a);var t=l(42),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("p",[l("RouterLink",{attrs:{to:"/resource/database/elasticsearch/!https://zq99299.github.io/note-book/elasticsearch-core/"}},[e._v("转自")])],1),e._v(" "),l("h2",{attrs:{id:"core"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#core"}},[e._v("#")]),e._v(" core")]),e._v(" "),l("ul",[l("li",[e._v("全文搜索, 倒排索引")]),e._v(" "),l("li",[e._v("Lucene")]),e._v(" "),l("li",[e._v("Elasticsearch\n"),l("ul",[l("li",[e._v("自动维护数据的分布到多个节点的索引建立、检索请求分布到多个节点的执行")]),e._v(" "),l("li",[e._v("自动维护数据的冗余副本，保证一些机器宕机了，不会丢失任何数据")]),e._v(" "),l("li",[e._v("封装了更多的高级功能, 复杂搜索, 聚合分析全文检索，同义词处理，相关度排名，复杂数据分析，海量数据的近实时处理, 基于地理位置搜索")]),e._v(" "),l("li",[e._v("支持PB级数据")]),e._v(" "),l("li",[e._v("作为传统数据库的补充, 提供了数据库所不能提供的很多功能")])])])]),e._v(" "),l("p",[e._v("https://uzshare.com/view/822075")]),e._v(" "),l("h2",{attrs:{id:"入门"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#入门"}},[e._v("#")]),e._v(" 入门")]),e._v(" "),l("ul",[l("li",[e._v("面向文档的数据格式")])]),e._v(" "),l("h3",{attrs:{id:"集群管理"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#集群管理"}},[e._v("#")]),e._v(" 集群管理")]),e._v(" "),l("ol",[l("li",[e._v("快速查看集群健康状况\n"),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("GET /_cat/health?v\n参数v: 显示标题头\nunassign：未分配数量\nactive_shards_percent：可用 shards 百分比\n")])])])]),e._v(" "),l("li",[e._v("status 状态\n"),l("ul",[l("li",[e._v("green：每个索引的 primary shard 和 replica shard 都是 active 状态的")]),e._v(" "),l("li",[e._v("yellow：每个索引的 primary shard 都是 active 状态的，但是部分 replica shard 不是 active 状态，处于不可用的状态")]),e._v(" "),l("li",[e._v("red：不是所有索引的 primary shard 都是 active 状态的，部分索引有数据丢失了")])])])])]),e._v(" "),l("li",[e._v("查看集群索引\n"),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v(" GET /_cat/indices?v\n pri 默认是 5 个，rep 默认是 1 个\n")])])])])])]),e._v(" "),l("li",[e._v("查看节点使用情况\n"),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v(" GET _cat/nodes?h=name,fm,fcm,sm,qcm,im&v\n\n fielddata.memory_size (fm), // 字段缓存占用内存\n filter_cache.memory_size (fcm) // 过滤语句缓存占用内存\n segments.memory (sm) // 每个分片包含的断 占用内存\n")])])])])])]),e._v(" "),l("li",[e._v("查看索引内存占用情况\n"),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v(" GET _cat/segments?v\n GET _cat/segments?v&h=index,size,size.memory\n")])])])])])])]),e._v(" "),l("h3",{attrs:{id:"crud"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#crud"}},[e._v("#")]),e._v(" CRUD")]),e._v(" "),l("ol",[l("li",[e._v("创建索引")])]),e._v(" "),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v('PUT test_index\n{\n  "mappings": {\n    "properties" : {\n      "create_time" : {\n        "type":   "date",\n        "format": "yyyy-MM-dd HH:mm:ss"\n        },\n      "gender" : {\n        "type" : "long"\n      },\n      "id" : {\n        "type" : "long"\n      },\n      "name" : {\n        "type" : "text",\n        "fields" : {\n          "keyword" : {\n            "type" : "keyword",\n            "ignore_above" : 256\n          }\n        }\n      }\n    }\n  }\n}\n')])])])]),e._v(" "),l("li",[e._v("设置ignore_above后，超过给定长度后的数据将不被索引，无法通过term精确匹配检索返回结果")])]),e._v(" "),l("ol",{attrs:{start:"2"}},[l("li",[l("p",[e._v("删除索引")]),e._v(" "),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v(" DELETE /test_index?pretty\n")])])])])])]),e._v(" "),l("li",[l("p",[e._v("新增数据")]),e._v(" "),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v(' PUT /user_test/_doc/1\n {\n   "create_time": "2020-05-30 12:26:25"\n }\n\n *** resp ***\n\n {\n   "_index" : "test_index",\n   "_type" : "_doc",\n   "_id" : "4005",  # 数据版本号\n   "_version" : 1,\n   "result" : "created",\n   "_shards" : {\n     "total" : 2,  # 总的要写的分片数量\n     "successful" : 2,\n     "failed" : 0\n   },\n   "_seq_no" : 6,\n   "_primary_term" : 1\n }\n')])])])])])]),e._v(" "),l("li",[l("p",[e._v("查询数据")]),e._v(" "),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v(' GET /user_test/_search\n {\n   "query": {\n     "match_all": {}\n   }\n }\n')])])])])])]),e._v(" "),l("li",[l("p",[e._v("替换数据")]),e._v(" "),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v(' PUT /user_test/_doc/4005\n {\n   "create_time": "2020-05-30 14:26:25"\n }\n')])])])]),e._v(" "),l("li",[e._v("替换_id 为4005的所有数据, 如果不存在, 则插入")]),e._v(" "),l("li",[e._v("全量替换document内的json串内容")]),e._v(" "),l("li",[e._v("old_document 会标记为deleted, lazy deleted")]),e._v(" "),l("li",[e._v("如果加上 _create, 则为强制创建, 如果存在, 则报错")])])]),e._v(" "),l("li",[l("p",[e._v("更新数据")]),e._v(" "),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v(' POST /user_test/_update/2119\n {\n   "doc": {\n     "name": "update name"\n   }\n }\n')])])])]),e._v(" "),l("li",[e._v("partial update: 局部更新\n"),l("ul",[l("li",[e._v("内置乐观锁并发控制")]),e._v(" "),l("li",[e._v("retry策略\n"),l("ul",[l("li",[e._v("如果version版本冲突, 放弃更改")]),e._v(" "),l("li",[e._v("基于最新版本号和数据再去更新")]),e._v(" "),l("li",[e._v("重试次数为可以通过 retry 参数指定")])])])])]),e._v(" "),l("li",[e._v("优点:\n"),l("ul",[l("li",[e._v("查询, 修改, 写会操作都发生在es的一个shard 内部, 性能高")]),e._v(" "),l("li",[e._v("减少了查询和修改中的间隔, 可有效减少并发冲突")])])]),e._v(" "),l("li",[e._v("upsert: 存在更新, 不存在插入")])])]),e._v(" "),l("li",[l("p",[e._v("删除文档")]),e._v(" "),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v(' POST /user_test/_update/2119\n {\n   "doc": {\n     "name": "update name"\n   }\n }\n')])])])]),e._v(" "),l("li",[e._v("lazy delete\n"),l("ul",[l("li",[e._v("并不是直接删除, 而是标记为deleted, 当到达一定条件后es会自动删除")])])])])])]),e._v(" "),l("h3",{attrs:{id:"query-dsl-domain-specified-language-特定领域的语言"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#query-dsl-domain-specified-language-特定领域的语言"}},[e._v("#")]),e._v(" query DSL(Domain Specified Language，特定领域的语言)")]),e._v(" "),l("ol",[l("li",[l("p",[e._v("查询所有")]),e._v(" "),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v(' GET /user_test/_search\n {\n   "query": {\n     "match_all": {}\n   }\n }\n')])])])]),e._v(" "),l("li",[e._v("响应"),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v('{\n  "took" : 2,\n  "timed_out" : false,\n  "_shards" : {\n    "total" : 1,\n    "successful" : 1,\n    "skipped" : 0,\n    "failed" : 0\n  },\n  "hits" : {\n    "total" : {\n      "value" : 10000,\n      "relation" : "gte"\n    },\n    "max_score" : 1.0,\n    "hits" : [\n      {\n        "_index" : "user_test",\n        "_type" : "_doc",\n        "_id" : "2219",\n        "_score" : 1.0,\n        "_source" : {\n          "name" : "aaa",\n          "gender" : 1,\n          "state" : 1,\n          "create_time" : "2015-02-05T18:29:50.068955",\n          "id" : 2219\n        }\n      }\n    ]\n  }\n}\n')])])]),l("ul",[l("li",[e._v("took: 查询时间")]),e._v(" "),l("li",[e._v("timed_out: 是否超时")]),e._v(" "),l("li",[e._v("_shards: 查询分片信息")]),e._v(" "),l("li",[e._v("hits.total: 查询结果数量")]),e._v(" "),l("li",[e._v("hits.max_score: 最高相关度")]),e._v(" "),l("li",[e._v("hits.hits: 匹配到的document list")])])])])]),e._v(" "),l("li",[l("p",[e._v("条件查询")]),e._v(" "),l("ul",[l("li",[e._v("根据名称查询, 并且根据时间降序")]),e._v(" "),l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v(' GET user_test/_search\n {"query": {\n       "bool": {\n           "filter": {\n               "range": {\n                   "create_time": {\n                     "lt": "2020-07-10T12:24:00.00"\n                   }\n               }\n           }\n       }\n   },\n   "sort": { "create_time": { "order": "desc" }},\n   "size": 100\n }\n\n')])])])])])]),e._v(" "),l("li",[l("p",[e._v("分页查询")]),e._v(" "),l("ul",[l("li",[e._v("from: 表示从第几条数据开始, 而不是页数")]),e._v(" "),l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v(' GET user_test/_search\n {"query": {\n       "bool": {\n           "filter": {\n               "range": {\n                   "create_time": {\n                     "lt": "2020-07-10T12:24:00.00"\n                   }\n               }\n           }\n       }\n   },\n   "sort": { "create_time": { "order": "desc" }},\n   "size": 1,\n   "from": 2\n }\n\n')])])])])])]),e._v(" "),l("li",[l("p",[e._v("限制返回字段")]),e._v(" "),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v(' GET /user_test/_search\n {\n   "query": {\n     "match_all": {}\n   },\n   "_source": ["name","create_time"]\n }\n')])])])])])]),e._v(" "),l("li",[l("p",[e._v("query filter")]),e._v(" "),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v(' GET /user_test/_search\n {\n   "query": {\n     "match_all": {}\n   },\n   "_source": ["name","create_time"]\n }\n')])])])])])]),e._v(" "),l("li",[l("p",[e._v("full-text search")])]),e._v(" "),l("li",[l("p",[e._v("短语搜索(match_phrase)")])]),e._v(" "),l("li",[l("p",[e._v("高亮搜索结果")]),e._v(" "),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v(' GET /user_test/_search\n {\n     "query" : {\n         "match_phrase" : {\n             "name" : "thanks"\n         }\n     },\n     "highlight": {\n       "fields": {\n         "name": {}\n       }\n     }\n }\n')])])])])])])]),e._v(" "),l("h3",{attrs:{id:"聚合分析"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#聚合分析"}},[e._v("#")]),e._v(" 聚合分析")]),e._v(" "),l("ol",[l("li",[e._v("语法"),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v('GET /user_test/_search\n {\n   "aggs": {\n     "NAME": {\n       "AGG_TYPE": {}\n     }\n   }\n }\n')])])]),l("ul",[l("li",[e._v("aggs: 聚合函数")]),e._v(" "),l("li",[e._v("NAME: 命名")]),e._v(" "),l("li",[e._v("AGG_TYPE: 聚合类型: terms/ avg")])])]),e._v(" "),l("li",[e._v("聚合\n"),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v(' GET /user_test/_search\n {\n   "aggs": {\n     "group_by_gender": {\n       "terms": {\n         "field": "gender"\n       }\n     }\n   },\n   "size": 0\n }\n\n ----------------------------------------------------------\n 响应\n {\n   "took" : 164,\n   "timed_out" : false,\n   "_shards" : {\n     "total" : 1,\n     "successful" : 1,\n     "skipped" : 0,\n     "failed" : 0\n   },\n   "hits" : {\n     "total" : {\n       "value" : 10000,\n       "relation" : "gte"\n     },\n     "max_score" : null,\n     "hits" : [ ]\n   },\n   "aggregations" : {\n     "group_by_gender" : {\n       "doc_count_error_upper_bound" : 0,\n       "sum_other_doc_count" : 0,\n       "buckets" : [\n         {\n           "key" : 1,\n           "doc_count" : 46630\n         },\n         {\n           "key" : 2,\n           "doc_count" : 40823\n         },\n         {\n           "key" : 0,\n           "doc_count" : 12547\n         }\n       ]\n     }\n   }\n }\n\n')])])])]),e._v(" "),l("li",[e._v("size: 控制响应中hits.hits 中的数据")])])]),e._v(" "),l("li",[e._v("先搜索, 再聚合")]),e._v(" "),l("li",[e._v("嵌套聚合")]),e._v(" "),l("li",[e._v("多次嵌套(下钻操作)")])]),e._v(" "),l("h2",{attrs:{id:"es-集群剖析"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#es-集群剖析"}},[e._v("#")]),e._v(" es 集群剖析")]),e._v(" "),l("ol",[l("li",[e._v("对复杂分布式机制的透明隐藏特性\n"),l("ol",[l("li",[e._v("分片机制")]),e._v(" "),l("li",[e._v("集群发现机制")]),e._v(" "),l("li",[e._v("shard 负载均衡\n"),l("ol",[l("li",[e._v("自动分配shard")]),e._v(" "),l("li",[e._v("集群扩容, shard重新分配")]),e._v(" "),l("li",[e._v("增加减少节点是的数据 re balance")])])])])]),e._v(" "),l("li",[e._v("master节点\n"),l("ol",[l("li",[e._v("管理es集群元数据, 自动选举")]),e._v(" "),l("li",[e._v("节点对等: master 节点不承载所有的请求，所以不存在单节点瓶颈")])]),e._v(" "),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v(" \n")])])])]),e._v(" "),l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v(" \n")])])])])])])]),e._v(" "),l("h2",{attrs:{id:"分布式文档数据库"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#分布式文档数据库"}},[e._v("#")]),e._v(" 分布式文档数据库")]),e._v(" "),l("h3",{attrs:{id:"document-数据路由原理"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#document-数据路由原理"}},[e._v("#")]),e._v(" document 数据路由原理")]),e._v(" "),l("ol",[l("li",[e._v("什么是数据路由\n"),l("ul",[l("li",[e._v("创建document时, 该doc存放与哪一个shard")])])]),e._v(" "),l("li",[e._v("路由算法\n"),l("ul",[l("li",[e._v("shard = hash(routing) % number_of_primary_shards")]),e._v(" "),l("li",[e._v("routing = _id or custom routing value\n"),l("ul",[l("li",[e._v("默认的routing为 _id")]),e._v(" "),l("li",[e._v("手动指定 put /index/type/id?routing=user_id")]),e._v(" "),l("li",[e._v("手动指定 routing value，可以保证某一类 document 一定被路由到一个 shard 上去， 那么在后续进行应用级别的负载均衡，以及提升批量读取的性能的时候，是很有帮助的")])])]),e._v(" "),l("li",[e._v("因为路由算法的限制, 导致primary shard 数量不可变")])])]),e._v(" "),l("li",[e._v("写一致性, quorum机制\n"),l("ol",[l("li",[e._v("发送增删改请求时可以带上一个 consistency 参数, 指明写一致性\n"),l("ol",[l("li",[e._v("one: 只要有一个primary shard 是active")]),e._v(" "),l("li",[e._v("all: 所有 primary shard 和 replica shard 都是活跃的")]),e._v(" "),l("li",[e._v("quorum(default): 大部分shard都是活跃的\n"),l("ol",[l("li",[e._v("前提: number_of_replicas>1")]),e._v(" "),l("li",[e._v("quorum = int( (primary + number_of_replicas) / 2 ) + 1")])])])])])])]),e._v(" "),l("li",[e._v("document 查询内部原理\n"),l("ol",[l("li",[e._v("client 发送请求到任意node, 成为coordinate node(协调节点)")]),e._v(" "),l("li",[e._v("协调节点对document进行路由, 将请求转发到对应的node\n"),l("ul",[l("li",[e._v("此时会使用round-robin随机轮询算法, 在 pri, rep 中选择一个, 进行负载均衡")])])]),e._v(" "),l("li",[e._v("接受请求的node返回document给协调节点")]),e._v(" "),l("li",[e._v("协调节点返回document给客户端")])])])]),e._v(" "),l("h3",{attrs:{id:"初识搜索引擎"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#初识搜索引擎"}},[e._v("#")]),e._v(" 初识搜索引擎")]),e._v(" "),l("ol",[l("li",[l("p",[e._v("timeout机制: 在指定的超时时长内返回结果, 这个结果可能不是所有结果")])]),e._v(" "),l("li",[l("p",[e._v("multi-index搜索模式")]),e._v(" "),l("ol",[l("li",[e._v("/_search: 所有索引")]),e._v(" "),l("li",[e._v("/index1,index2/_search: 在两个索引下搜索数据")]),e._v(" "),l("li",[e._v("/*1,*2/_search: 按照通配符去匹配多个索引")])])]),e._v(" "),l("li",[l("p",[e._v("分页搜索时的deep paging")]),e._v(" "),l("ul",[l("li",[e._v("分页搜索 10 条数据，在搜索深分页（比如 10000 条以后的数据）， 每个节点会返回 10000+ 条数据进行排序后再选中其中的 10 条数据返回")]),e._v(" "),l("li",[e._v("协调节点会保存大量的数据, 还要进行排序, 既耗费网络带宽, 耗费内存, 还耗费CPU, 所以尽量避免")])])]),e._v(" "),l("li",[l("p",[e._v("mapping")]),e._v(" "),l("ol",[l("li",[e._v("查看mapping\n"),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("  GET /user_test/_mapping\n")])])])]),e._v(" "),l("li",[e._v("可在插入数据前收到创建索引, 密码es自动设置的mapping不符合预期")])])])])]),e._v(" "),l("li",[l("p",[e._v("元数据")]),e._v(" "),l("ol",[l("li",[e._v("_index, 类似于MySQL的一个库")]),e._v(" "),l("li",[e._v("_type: 类似于MySQL的一半表, 7.0 之后已不支持多type, 默认都为_doc")]),e._v(" "),l("li",[e._v("_id: document唯一标识\n"),l("ol",[l("li",[e._v("可手动指定, 也可自动生成")]),e._v(" "),l("li",[e._v("自动生成\n"),l("ol",[l("li",[e._v("长度20")]),e._v(" "),l("li",[e._v("URL安全, 经过了base64编码的id, 可以放在URL中传递")]),e._v(" "),l("li",[e._v("GUID方式, 分布式系统并行生成时不可能发生冲突")])])])])]),e._v(" "),l("li",[e._v("_source: 定制返回结果字段")]),e._v(" "),l("li",[e._v("_version: 数据版本号")]),e._v(" "),l("li",[e._v("_all: 插入一条document, es会自动将多个field的值, 用字符串的方式串联起来(空格 分割), 同时建立索引. 如果搜索没有指定field, 会默认搜索_all field")])])]),e._v(" "),l("li",[l("p",[e._v("groovy语法")]),e._v(" "),l("ol",[l("li",[e._v("内置脚本")]),e._v(" "),l("li",[e._v("外置脚本\n"),l("ol",[l("li",[e._v("语法内容存放在/config/scripts 目录下, 指定文件来获取脚本内容")]),e._v(" "),l("li",[e._v("外置脚本里面的语法和内置脚本不太相同, 内置中会把数据的json串当成字符串操作")])])])])]),e._v(" "),l("li",[l("p",[e._v("批量查询 mget")]),e._v(" "),l("ul",[l("li",[e._v("获取不同索引下的数据")])])]),e._v(" "),l("li",[l("p",[e._v("bulk 批量增删改")]),e._v(" "),l("ol",[l("li",[e._v("bulk size\n"),l("ol",[l("li",[e._v("bulk请求会加载到内存里, 如果太大, 性能会下降, 需要尝试")]),e._v(" "),l("li",[e._v("一般从1000--5000 条数据开始, 大小一般在5-15MB之间")])])]),e._v(" "),l("li",[e._v("请求内容\n"),l("ol",[l("li",[e._v("特殊格式: 多个请求写多个json串, 每个json串里面不能存在换行, 每个json串之间必须有一个换行")]),e._v(" "),l("li",[e._v("标准json格式: 将json串放在一个数组中, es会对它解析为一个JSONArray对象, 整个数据会在内存中出现一份一模一样的拷贝, 一份json文本, 一份JSONArray对象")])])]),e._v(" "),l("li",[e._v("标准json格式会耗费更多的时间解析请求, 占用更多的内存, 频繁的垃圾回收, 导致性能下降")])])]),e._v(" "),l("li",[l("p",[e._v("精确匹配和全文搜索")]),e._v(" "),l("ol",[l("li",[e._v("exact value: 搜索内容和值完全相同")]),e._v(" "),l("li",[e._v("full text: 对搜索内容分词, 缩写, 大小写转换等等\n"),l("ol",[l("li",[e._v("缩写")]),e._v(" "),l("li",[e._v("格式转换: like, liked, likes")]),e._v(" "),l("li",[e._v("大小写转换")]),e._v(" "),l("li",[e._v("同义词")])])])])]),e._v(" "),l("li",[l("p",[e._v("倒排索引原理")]),e._v(" "),l("ol",[l("li",[e._v("基本原理: 将document进行分词, 然后将结果作为索引")]),e._v(" "),l("li",[e._v("normalization(人性化)\n"),l("ol",[l("li",[e._v("配合分词器")]),e._v(" "),l("li",[e._v("对field 进行大小写, 单复数, 时态, 同义词等方面的处理")])])])])]),e._v(" "),l("li",[l("p",[e._v("分词器")]),e._v(" "),l("ol",[l("li",[e._v("切分词语, normalization\n"),l("ol",[l("li",[e._v("character filter: 对文本分词前, 进行预处理, 例如: 过滤HTML标签")]),e._v(" "),l("li",[e._v("tokenizer: 分词")]),e._v(" "),l("li",[e._v("token filter: 大小写转换, 复数转换, 同义词, 时态转换")])])]),e._v(" "),l("li",[e._v("查看分词结果\n"),l("ul",[l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v(' GET index_name/_analyze\n {\n   "field": "name",\n   "text": "xxxxx"\n }\n')])])])]),e._v(" "),l("li",[e._v("如果字段类型是 exact value, 使用该api会保存")])])])])]),e._v(" "),l("li",[l("p",[e._v("mapping")]),e._v(" "),l("ol",[l("li",[e._v("mapping中会定义每个field的数据类型, 不同数据类型对应不同的搜索行为(exact value / full text)")]),e._v(" "),l("li",[e._v("核心数据类型\n"),l("ol",[l("li",[e._v("string")]),e._v(" "),l("li",[e._v("byte, short, integer, long")]),e._v(" "),l("li",[e._v("float, double")]),e._v(" "),l("li",[e._v("boolean")]),e._v(" "),l("li",[e._v("date")])])]),e._v(" "),l("li",[e._v("mapping操作\n"),l("ul",[l("li",[e._v("获取mapping")]),e._v(" "),l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v(" GET /user_test/_mapping\n \n")])])])]),e._v(" "),l("li",[e._v("创建索引时指定mapping")]),e._v(" "),l("li",[l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v(' PUT user_test\n {\n   "mappings": {\n       "properties" : {\n         "name" : {\n           "type" : "text",\n           "fields" : {\n             "keyword" : {\n               "type" : "keyword",  // 数据类型\n               "ignore_above" : 256,\n               "analyzer": "english"  // 分词器\n               "index": "analyzed"  // 索引类型\n             }\n           }\n         }\n       }\n     }\n }\n')])])])]),e._v(" "),l("li",[e._v("索引类型:\n"),l("ul",[l("li",[e._v("analyzed: 全文full text")]),e._v(" "),l("li",[e._v("not_analyzed: 精准匹配 exact value,")]),e._v(" "),l("li",[e._v("no: 不索引\n"),l("ul",[l("li",[e._v("无法使用 _analyze 查看该字段的分词结果")])])])])]),e._v(" "),l("li",[e._v("只能创建index时手动建立mapping, 或者新增field mapping, 但是不能update field mapping")])])]),e._v(" "),l("li",[e._v("field:\n"),l("ul",[l("li",[e._v('multi value field 内数据类型不能混({ "tags": [ "tag1", "tag2" ]})')]),e._v(" "),l("li",[e._v("empty field: null, [], [null]")])])])])])]),e._v(" "),l("h3",{attrs:{id:"mapping"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#mapping"}},[e._v("#")]),e._v(" mapping")]),e._v(" "),l("p",[e._v("Elasticsearch索引mapping的写入、查看与修改\nhttps://blog.csdn.net/napoay/article/details/52012249")]),e._v(" "),l("h3",{attrs:{id:"fielddata"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#fielddata"}},[e._v("#")]),e._v(" fielddata")]),e._v(" "),l("p",[e._v("circuit_breaking_exception\nhttps://blog.csdn.net/u014017121/article/details/70312784\nhttps://www.elastic.co/guide/cn/elasticsearch/guide/current/_limiting_memory_usage.html")])])}),[],!1,null,null,null);a.default=n.exports}}]);