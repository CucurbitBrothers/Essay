(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{468:function(t,_,v){"use strict";v.r(_);var e=v(44),d=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),v("h3",{attrs:{id:"配置键"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置键"}},[t._v("#")]),t._v(" 配置键")]),t._v(" "),v("p",[t._v("Flask-SQLAlchemy 扩展能够识别的配置键的清单:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("KEY")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Tips")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("SQLALCHEMY_DATABASE_URI")])]),t._v(" "),v("td",[t._v("用于连接数据的数据库。例如："),v("code",[t._v("sqlite:////tmp/test.db``mysql://username:password@server/db")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("SQLALCHEMY_BINDS")])]),t._v(" "),v("td",[t._v("一个映射绑定 (bind) 键到 SQLAlchemy 连接 URIs 的字典。 更多的信息请参阅 "),v("a",{attrs:{href:"http://www.pythondoc.com/flask-sqlalchemy/binds.html#binds",target:"_blank",rel:"noopener noreferrer"}},[v("em",[t._v("绑定多个数据库")]),v("OutboundLink")],1),t._v("。")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("SQLALCHEMY_ECHO")])]),t._v(" "),v("td",[t._v("如果设置成 True，SQLAlchemy 将会记录所有 发到标准输出(stderr)的语句，这对调试很有帮助。")]),t._v(" "),v("td",[t._v("打印SQL语句")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("SQLALCHEMY_RECORD_QUERIES")])]),t._v(" "),v("td",[t._v("可以用于显式地禁用或者启用查询记录。查询记录 在调试或者测试模式下自动启用。更多信息请参阅 "),v("code",[t._v("get_debug_queries()")]),t._v("。")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("SQLALCHEMY_NATIVE_UNICODE")])]),t._v(" "),v("td",[t._v("可以用于显式地禁用支持原生的 unicode。这是 某些数据库适配器必须的（像在 Ubuntu 某些版本上的 PostgreSQL），当使用不合适的指定无编码的数据库 默认值时。")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("SQLALCHEMY_POOL_SIZE")])]),t._v(" "),v("td",[t._v("数据库连接池的大小。默认是数据库引擎的默认值 （通常是 5）。")]),t._v(" "),v("td",[t._v("20")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("SQLALCHEMY_POOL_TIMEOUT")])]),t._v(" "),v("td",[t._v("指定数据库连接池的超时时间。默认是 10秒。")]),t._v(" "),v("td",[t._v("30")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("SQLALCHEMY_POOL_RECYCLE")])]),t._v(" "),v("td",[t._v("自动回收连接的秒数。这对 MySQL 是必须的，默认 情况下 MySQL 会自动移除闲置 8 小时或者以上的连接。 需要注意地是如果使用 MySQL 的话， Flask-SQLAlchemy 会自动地设置这个值为 2 小时。")]),t._v(" "),v("td",[t._v("3600")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("SQLALCHEMY_MAX_OVERFLOW")])]),t._v(" "),v("td",[t._v("控制在连接池达到最大值后可以创建的连接数。当这些额外的 连接回收到连接池后将会被断开和抛弃。")]),t._v(" "),v("td",[t._v("10")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("SQLALCHEMY_TRACK_MODIFICATIONS")])]),t._v(" "),v("td",[t._v("如果设置成 True (默认情况)，Flask-SQLAlchemy 将会追踪对象的修改并且发送信号。这需要额外的内存， 如果不必要的可以禁用它。")]),t._v(" "),v("td",[t._v("False")])])])])])}),[],!1,null,null,null);_.default=d.exports}}]);