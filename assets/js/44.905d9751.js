(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{400:function(e,n,v){"use strict";v.r(n);var t=v(42),r=Object(t.a)({},(function(){var e=this,n=e.$createElement,v=e._self._c||n;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"生成证书"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#生成证书"}},[e._v("#")]),e._v(" 生成证书")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("使用openssl生成密钥privkey.pem：\nopenssl genrsa -out privkey.pem 1024/2038")])]),e._v(" "),v("li",[v("p",[e._v("使用密钥生成证书server.pem：\nopenssl req -new -x509 -key privkey.pem -out server.pem -days 365")])])]),e._v(" "),v("p",[e._v("证书信息可以随便填或者留空，只有Common Name要根据你的域名填写。")]),e._v(" "),v("p",[e._v("以我的个人网站为例\nCommon Name (e.g. server FQDN or YOUR name) []: wuyanxin.com")]),e._v(" "),v("p",[e._v("也可以通过*.yourdomain.com来匹配你的二级域名")]),e._v(" "),v("h2",{attrs:{id:"配置nginx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx"}},[e._v("#")]),e._v(" 配置nginx")]),e._v(" "),v("p",[e._v("server {\nlisten 443;\nserver_name youdomain.com;")]),e._v(" "),v("p",[e._v("ssl on;\nssl_certificate /path/to/server.pem;\nssl_certificate_key /path/to/privkey.pem;")]),e._v(" "),v("p",[e._v("...\n}\n验证配置，重启nginx")]),e._v(" "),v("p",[e._v("$ sudo nginx -t && sudo nginx -s reload")]),e._v(" "),v("h2",{attrs:{id:"信任证书"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#信任证书"}},[e._v("#")]),e._v(" 信任证书")]),e._v(" "),v("p",[e._v("这时访问你的站点会得到一个不安全提示，因为你的证书不是一个有效的证书颁发机构颁发的。\n这时需要我们手动信任证书。")]),e._v(" "),v("p",[e._v("1 点击地址栏前面的红色感叹号，再点击“详细信息”")]),e._v(" "),v("p",[e._v("2 点击“View certification”")]),e._v(" "),v("p",[e._v("3 将上图中的证书拖拽到桌面，会在桌面生成一个“wuyanxin.com.cer”文件")]),e._v(" "),v("p",[e._v("4 双击打开，并输入密码")]),e._v(" "),v("p",[e._v("5 在列表中找到你的证书，双击打开")]),e._v(" "),v("p",[e._v("6 将证书改为“始终信任”，然后关闭窗口，输入密码")]),e._v(" "),v("p",[e._v("7 刷新页面，你将获得一个绿色小锁（valid HTTPS）")])])}),[],!1,null,null,null);n.default=r.exports}}]);