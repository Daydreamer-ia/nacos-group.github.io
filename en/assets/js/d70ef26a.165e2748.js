"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[2881],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),u=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=u(a),c=r,k=d["".concat(i,".").concat(c)]||d[c]||s[c]||l;return a?n.createElement(k,o(o({ref:e},m),{},{components:a})):n.createElement(k,o({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[d]="string"==typeof t?t:r,o[1]=p;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},19324:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={title:"Quick Start for Nacos Docker",keywords:["Nacos","Docker"],description:"Quick Start for Nacos Docker"},o="Quick Start for Nacos Docker",p={unversionedId:"quick-start-docker",id:"version-1.X/quick-start-docker",title:"Quick Start for Nacos Docker",description:"Quick Start for Nacos Docker",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.X/quick-start-docker.md",sourceDirName:".",slug:"/quick-start-docker",permalink:"/en/docs/1.X/quick-start-docker",draft:!1,tags:[],version:"1.X",frontMatter:{title:"Quick Start for Nacos Docker",keywords:["Nacos","Docker"],description:"Quick Start for Nacos Docker"}},i={},u=[{value:"Steps",id:"steps",level:2},{value:"Common property configuration",id:"common-property-configuration",level:2},{value:"Nacos + Grafana + Prometheus",id:"nacos--grafana--prometheus",level:2},{value:"Related Projects",id:"related-projects",level:2}],m={toc:u},d="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start-for-nacos-docker"},"Quick Start for Nacos Docker"),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("p",null,"Run the following command\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Clone project"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"git clone https://github.com/nacos-group/nacos-docker.git\ncd nacos-docker\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Stand-alone Derby"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"docker-compose -f example/standalone-derby.yaml up\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Stand-alone MySQL"),(0,r.kt)("p",{parentName:"li"},"To use MySQL 5.7, run"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"docker-compose -f example/standalone-mysql-5.7.yaml up\n")),(0,r.kt)("p",{parentName:"li"},"To use MySQL 8, run"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"docker-compose -f example/standalone-mysql-8.yaml up\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cluster"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"docker-compose -f example/cluster-hostname.yaml up \n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Service registration"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance?serviceName=nacos.naming.serviceName&ip=20.18.7.10&port=8080'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Service discovery"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"curl -X GET 'http://127.0.0.1:8848/nacos/v1/ns/instance/list?serviceName=nacos.naming.serviceName'\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Publish config"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'curl -X POST "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test&content=helloWorld"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get config"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'  curl -X GET "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open the Nacos console in your browser"),(0,r.kt)("p",{parentName:"li"},"link\uff1a",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:8848/nacos/"},"http://127.0.0.1:8848/nacos/")))),(0,r.kt)("h2",{id:"common-property-configuration"},"Common property configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"option"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MODE"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster/standalone"),(0,r.kt)("td",{parentName:"tr",align:null},"cluster/standalone default ",(0,r.kt)("strong",{parentName:"td"},"cluster"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_SERVERS"),(0,r.kt)("td",{parentName:"tr",align:null},"nacos cluster address"),(0,r.kt)("td",{parentName:"tr",align:null},"eg. ip1:port1 ip2:port2 ip3:port3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PREFER_HOST_MODE"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether hostname are supported"),(0,r.kt)("td",{parentName:"tr",align:null},"hostname/ip default ",(0,r.kt)("strong",{parentName:"td"},"ip"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_APPLICATION_PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"nacos server port"),(0,r.kt)("td",{parentName:"tr",align:null},"default ",(0,r.kt)("strong",{parentName:"td"},"8848"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_SERVER_IP"),(0,r.kt)("td",{parentName:"tr",align:null},"custom nacos server ip when network was mutil-network"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SPRING_DATASOURCE_PLATFORM"),(0,r.kt)("td",{parentName:"tr",align:null},"standalone support mysql"),(0,r.kt)("td",{parentName:"tr",align:null},"mysql / empty default empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MYSQL_SERVICE_HOST"),(0,r.kt)("td",{parentName:"tr",align:null},"mysql  host"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MYSQL_SERVICE_PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"mysql  database port"),(0,r.kt)("td",{parentName:"tr",align:null},"default : ",(0,r.kt)("strong",{parentName:"td"},"3306"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MYSQL_SERVICE_DB_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"mysql  database name"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MYSQL_SERVICE_USER"),(0,r.kt)("td",{parentName:"tr",align:null},"username of  database"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MYSQL_SERVICE_PASSWORD"),(0,r.kt)("td",{parentName:"tr",align:null},"password of  database"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MYSQL_DATABASE_NUM"),(0,r.kt)("td",{parentName:"tr",align:null},"It indicates the number of database"),(0,r.kt)("td",{parentName:"tr",align:null},"default :",(0,r.kt)("strong",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MYSQL_SERVICE_DB_PARAM"),(0,r.kt)("td",{parentName:"tr",align:null},"Database url parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"default:",(0,r.kt)("strong",{parentName:"td"},"characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JVM_XMS"),(0,r.kt)("td",{parentName:"tr",align:null},"-Xms"),(0,r.kt)("td",{parentName:"tr",align:null},"default :1g")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JVM_XMX"),(0,r.kt)("td",{parentName:"tr",align:null},"-Xmx"),(0,r.kt)("td",{parentName:"tr",align:null},"default :1g")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JVM_XMN"),(0,r.kt)("td",{parentName:"tr",align:null},"-Xmn"),(0,r.kt)("td",{parentName:"tr",align:null},"default :512m")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JVM_MS"),(0,r.kt)("td",{parentName:"tr",align:null},"-XX:MetaspaceSize"),(0,r.kt)("td",{parentName:"tr",align:null},"default :128m")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JVM_MMS"),(0,r.kt)("td",{parentName:"tr",align:null},"-XX:MaxMetaspaceSize"),(0,r.kt)("td",{parentName:"tr",align:null},"default :320m")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_DEBUG"),(0,r.kt)("td",{parentName:"tr",align:null},"enable remote debug"),(0,r.kt)("td",{parentName:"tr",align:null},"y/n default :n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TOMCAT_ACCESSLOG_ENABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"server.tomcat.accesslog.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"default :false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_SYSTEM_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"The auth system to use, currently only 'nacos' is supported"),(0,r.kt)("td",{parentName:"tr",align:null},"default :nacos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_ENABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"If turn on auth system"),(0,r.kt)("td",{parentName:"tr",align:null},"default :false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_TOKEN_EXPIRE_SECONDS"),(0,r.kt)("td",{parentName:"tr",align:null},"The token expiration in seconds"),(0,r.kt)("td",{parentName:"tr",align:null},"default :18000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_TOKEN"),(0,r.kt)("td",{parentName:"tr",align:null},"The default token"),(0,r.kt)("td",{parentName:"tr",align:null},"default :SecretKey012345678901234567890123456789012345678901234567890123456789")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_CACHE_ENABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"Turn on/off caching of auth information. By turning on this switch, the update of auth information would have a 15 seconds delay."),(0,r.kt)("td",{parentName:"tr",align:null},"default : false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MEMBER_LIST"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the cluster list with a configuration file or command-line argument"),(0,r.kt)("td",{parentName:"tr",align:null},"eg:192.168.16.101:8847?raft_port=8807,192.168.16.101?raft_port=8808,192.168.16.101:8849?raft_port=8809")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EMBEDDED_STORAGE"),(0,r.kt)("td",{parentName:"tr",align:null},"Use embedded storage in cluster mode without mysql"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"embedded")," default : none")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_CACHE_ENABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"nacos.core.auth.caching.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"default : false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_USER_AGENT_AUTH_WHITE_ENABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"nacos.core.auth.enable.userAgentAuthWhite"),(0,r.kt)("td",{parentName:"tr",align:null},"default : false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_IDENTITY_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"nacos.core.auth.server.identity.key"),(0,r.kt)("td",{parentName:"tr",align:null},"default : serverIdentity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_IDENTITY_VALUE"),(0,r.kt)("td",{parentName:"tr",align:null},"nacos.core.auth.server.identity.value"),(0,r.kt)("td",{parentName:"tr",align:null},"default : security")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_SECURITY_IGNORE_URLS"),(0,r.kt)("td",{parentName:"tr",align:null},"nacos.security.ignore.urls"),(0,r.kt)("td",{parentName:"tr",align:null},"default : ",(0,r.kt)("inlineCode",{parentName:"td"},"/,/error,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-fe/public/**,/v1/auth/**,/v1/console/health/**,/actuator/**,/v1/console/server/**"))))),(0,r.kt)("h2",{id:"nacos--grafana--prometheus"},"Nacos + Grafana + Prometheus"),(0,r.kt)("p",null,"Usage reference\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/monitor-guide.html"},"Nacos monitor-guide")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),":  When Grafana creates a new data source, the data source address must be ",(0,r.kt)("strong",{parentName:"p"},"http://prometheus:9090")),(0,r.kt)("h2",{id:"related-projects"},"Related Projects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos"},"Nacos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-docker"},"Nacos Docker"))))}s.isMDXComponent=!0}}]);