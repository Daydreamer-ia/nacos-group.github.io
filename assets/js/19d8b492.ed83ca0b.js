"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[3308],{3905:(t,e,a)=>{a.d(e,{Zo:()=>N,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),i=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},N=function(t){var e=i(t.components);return n.createElement(m.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,N=o(t,["components","mdxType","originalType","parentName"]),k=i(a),d=r,c=k["".concat(m,".").concat(d)]||k[d]||u[d]||l;return a?n.createElement(c,p(p({ref:e},N),{},{components:a})):n.createElement(c,p({ref:e},N))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=d;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o[k]="string"==typeof t?t:r,p[1]=o;for(var i=2;i<l;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},16572:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={title:"Nacos Docker \u5feb\u901f\u5f00\u59cb",keywords:["Nacos","Docker"],description:"Nacos Docker \u5feb\u901f\u5f00\u59cb"},p="Nacos Docker \u5feb\u901f\u5f00\u59cb",o={unversionedId:"quick-start-docker",id:"version-1.X/quick-start-docker",title:"Nacos Docker \u5feb\u901f\u5f00\u59cb",description:"Nacos Docker \u5feb\u901f\u5f00\u59cb",source:"@site/versioned_docs/version-1.X/quick-start-docker.md",sourceDirName:".",slug:"/quick-start-docker",permalink:"/docs/1.X/quick-start-docker",draft:!1,tags:[],version:"1.X",frontMatter:{title:"Nacos Docker \u5feb\u901f\u5f00\u59cb",keywords:["Nacos","Docker"],description:"Nacos Docker \u5feb\u901f\u5f00\u59cb"}},m={},i=[{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2},{value:"Common property configuration",id:"common-property-configuration",level:2},{value:"Nacos + Grafana + Prometheus",id:"nacos--grafana--prometheus",level:2},{value:"\u76f8\u5173\u9879\u76ee",id:"\u76f8\u5173\u9879\u76ee",level:2}],N={toc:i},k="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(k,(0,n.Z)({},N,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nacos-docker-\u5feb\u901f\u5f00\u59cb"},"Nacos Docker \u5feb\u901f\u5f00\u59cb"),(0,r.kt)("h2",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Clone \u9879\u76ee"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"git clone https://github.com/nacos-group/nacos-docker.git\ncd nacos-docker\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5355\u673a\u6a21\u5f0f Derby"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"docker-compose -f example/standalone-derby.yaml up\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5355\u673a\u6a21\u5f0f MySQL"),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u5e0c\u671b\u4f7f\u7528MySQL5.7"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"docker-compose -f example/standalone-mysql-5.7.yaml up\n")),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u5e0c\u671b\u4f7f\u7528MySQL8"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"docker-compose -f example/standalone-mysql-8.yaml up\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u96c6\u7fa4\u6a21\u5f0f"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"docker-compose -f example/cluster-hostname.yaml up \n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u670d\u52a1\u6ce8\u518c"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance?serviceName=nacos.naming.serviceName&ip=20.18.7.10&port=8080'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u670d\u52a1\u53d1\u73b0"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"curl -X GET 'http://127.0.0.1:8848/nacos/v1/ns/instance/list?serviceName=nacos.naming.serviceName'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53d1\u5e03\u914d\u7f6e"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'curl -X POST "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test&content=helloWorld"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u83b7\u53d6\u914d\u7f6e"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'  curl -X GET "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Nacos \u63a7\u5236\u53f0"),(0,r.kt)("p",{parentName:"li"},"link\uff1a",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:8848/nacos/"},"http://127.0.0.1:8848/nacos/")))),(0,r.kt)("h2",{id:"common-property-configuration"},"Common property configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MODE"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u542f\u52a8\u65b9\u5f0f: \u96c6\u7fa4/\u5355\u673a"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster/standalone\u9ed8\u8ba4 ",(0,r.kt)("strong",{parentName:"td"},"cluster"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_SERVERS"),(0,r.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u5730\u5740"),(0,r.kt)("td",{parentName:"tr",align:null},"p1:port1\u7a7a\u683cip2:port2 \u7a7a\u683cip3:port3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PREFER_HOST_MODE"),(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301IP\u8fd8\u662f\u57df\u540d\u6a21\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"hostname/ip \u9ed8\u8ba4 ",(0,r.kt)("strong",{parentName:"td"},"ip"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_SERVER_PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos \u8fd0\u884c\u7aef\u53e3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 ",(0,r.kt)("strong",{parentName:"td"},"8848"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_SERVER_IP"),(0,r.kt)("td",{parentName:"tr",align:null},"\u591a\u7f51\u5361\u6a21\u5f0f\u4e0b\u53ef\u4ee5\u6307\u5b9aIP"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SPRING_DATASOURCE_PLATFORM"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5355\u673a\u6a21\u5f0f\u4e0b\u652f\u6301MYSQL\u6570\u636e\u5e93"),(0,r.kt)("td",{parentName:"tr",align:null},"mysql / \u7a7a \u9ed8\u8ba4:\u7a7a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MYSQL_SERVICE_HOST"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93 \u8fde\u63a5\u5730\u5740"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MYSQL_SERVICE_PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u7aef\u53e3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 : ",(0,r.kt)("strong",{parentName:"td"},"3306"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MYSQL_SERVICE_DB_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5e93\u540d"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MYSQL_SERVICE_USER"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u7528\u6237\u540d"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MYSQL_SERVICE_PASSWORD"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u7528\u6237\u5bc6\u7801"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MYSQL_SERVICE_DB_PARAM"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u8fde\u63a5\u53c2\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"default : ",(0,r.kt)("strong",{parentName:"td"},"characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MYSQL_DATABASE_NUM"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u7f16\u53f7"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 :",(0,r.kt)("strong",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JVM_XMS"),(0,r.kt)("td",{parentName:"tr",align:null},"-Xms"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 :1g")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JVM_XMX"),(0,r.kt)("td",{parentName:"tr",align:null},"-Xmx"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 :1g")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JVM_XMN"),(0,r.kt)("td",{parentName:"tr",align:null},"-Xmn"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 :512m")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JVM_MS"),(0,r.kt)("td",{parentName:"tr",align:null},"-XX:MetaspaceSize"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 :128m")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JVM_MMS"),(0,r.kt)("td",{parentName:"tr",align:null},"-XX:MaxMetaspaceSize"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 :320m")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_DEBUG"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u8fdc\u7a0bDEBUG"),(0,r.kt)("td",{parentName:"tr",align:null},"y/n \u9ed8\u8ba4 :n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TOMCAT_ACCESSLOG_ENABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"server.tomcat.accesslog.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 :false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_SYSTEM_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6743\u9650\u7cfb\u7edf\u7c7b\u578b\u9009\u62e9,\u76ee\u524d\u53ea\u652f\u6301nacos\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 :nacos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_ENABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u6743\u9650\u7cfb\u7edf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 :false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_TOKEN_EXPIRE_SECONDS"),(0,r.kt)("td",{parentName:"tr",align:null},"token \u5931\u6548\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 :18000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_TOKEN"),(0,r.kt)("td",{parentName:"tr",align:null},"token"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 :SecretKey012345678901234567890123456789012345678901234567890123456789")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_CACHE_ENABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6743\u9650\u7f13\u5b58\u5f00\u5173 ,\u5f00\u542f\u540e\u6743\u9650\u7f13\u5b58\u7684\u66f4\u65b0\u9ed8\u8ba4\u670915\u79d2\u7684\u5ef6\u8fdf"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 : false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MEMBER_LIST"),(0,r.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u7684\u65b9\u5f0f\u8bbe\u7f6e\u96c6\u7fa4\u5730\u5740"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f8b\u5b50:192.168.16.101:8847?raft_port=8807,192.168.16.101?raft_port=8808,192.168.16.101:8849?raft_port=8809")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EMBEDDED_STORAGE"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u96c6\u7fa4\u5d4c\u5165\u5f0f\u5b58\u50a8\u6a21\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"embedded"),"  \u9ed8\u8ba4 : none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_CACHE_ENABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"nacos.core.auth.caching.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"default : false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_USER_AGENT_AUTH_WHITE_ENABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"nacos.core.auth.enable.userAgentAuthWhite"),(0,r.kt)("td",{parentName:"tr",align:null},"default : false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_IDENTITY_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"nacos.core.auth.server.identity.key"),(0,r.kt)("td",{parentName:"tr",align:null},"default : serverIdentity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_IDENTITY_VALUE"),(0,r.kt)("td",{parentName:"tr",align:null},"nacos.core.auth.server.identity.value"),(0,r.kt)("td",{parentName:"tr",align:null},"default : security")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_SECURITY_IGNORE_URLS"),(0,r.kt)("td",{parentName:"tr",align:null},"nacos.security.ignore.urls"),(0,r.kt)("td",{parentName:"tr",align:null},"default : ",(0,r.kt)("inlineCode",{parentName:"td"},"/,/error,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-fe/public/**,/v1/auth/**,/v1/console/health/**,/actuator/**,/v1/console/server/**"))))),(0,r.kt)("h2",{id:"nacos--grafana--prometheus"},"Nacos + Grafana + Prometheus"),(0,r.kt)("p",null,"\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/monitor-guide.html"},"Nacos\u76d1\u63a7\u6307\u5357")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),":  grafana\u521b\u5efa\u4e00\u4e2a\u65b0\u6570\u636e\u6e90\u65f6\uff0c\u6570\u636e\u6e90\u5730\u5740\u5fc5\u987b\u662f ",(0,r.kt)("strong",{parentName:"p"},"http://prometheus:9090")),(0,r.kt)("h2",{id:"\u76f8\u5173\u9879\u76ee"},"\u76f8\u5173\u9879\u76ee"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos"},"Nacos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-docker"},"Nacos Docker"))))}u.isMDXComponent=!0}}]);