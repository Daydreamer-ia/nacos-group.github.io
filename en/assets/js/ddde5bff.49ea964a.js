"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[1400],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=m(a),k=r,g=u["".concat(p,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(g,i(i({ref:e},d),{},{components:a})):n.createElement(g,i({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},59939:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"Nacos system parameters introduce",keywords:["Nacos","System parameters"],description:"Nacos system parameters introduce"},i="Nacos system parameters introduce",o={unversionedId:"system-configurations",id:"version-2.X/system-configurations",title:"Nacos system parameters introduce",description:"Nacos system parameters introduce",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.X/system-configurations.md",sourceDirName:".",slug:"/system-configurations",permalink:"/en/docs/system-configurations",draft:!1,tags:[],version:"2.X",frontMatter:{title:"Nacos system parameters introduce",keywords:["Nacos","System parameters"],description:"Nacos system parameters introduce"}},p={},m=[{value:"Nacos Server",id:"nacos-server",level:2},{value:"Global parameters",id:"global-parameters",level:3},{value:"Naming module",id:"naming-module",level:3},{value:"Config module",id:"config-module",level:3},{value:"CMDB module",id:"cmdb-module",level:3},{value:"Nacos Java Client",id:"nacos-java-client",level:2},{value:"General parameters",id:"general-parameters",level:3},{value:"Naming client",id:"naming-client",level:3},{value:"Config client",id:"config-client",level:3}],d={toc:m},u="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nacos-system-parameters-introduce"},"Nacos system parameters introduce"),(0,r.kt)("h2",{id:"nacos-server"},"Nacos Server"),(0,r.kt)("p",null,"For Server side, usually set in ",(0,r.kt)("inlineCode",{parentName:"p"},"{nacos.home}/conf/application.properties"),", if the parameter name after mark (-D), says is the JVM parameter, need in ",(0,r.kt)("inlineCode",{parentName:"p"},"{nacos.home}/bin/startup.sh")," accordingly set up. Such as setting nacos. The value of the home, can be in ",(0,r.kt)("inlineCode",{parentName:"p"},"{nacos.home}/bin/startup.sh")," the following Settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'JAVA_OPT="${JAVA_OPT} -Dnacos.home=${BASE_DIR}"\n')),(0,r.kt)("h3",{id:"global-parameters"},"Global parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter names"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional value"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Support version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.home(-D)"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos root directory"),(0,r.kt)("td",{parentName:"tr",align:null},"Directory path"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos installation directory"),(0,r.kt)("td",{parentName:"tr",align:null},">= 0.1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.standalone(-D)"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether in stand-alone mode"),(0,r.kt)("td",{parentName:"tr",align:null},"true/false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},">= 0.1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.functionMode(-D)"),(0,r.kt)("td",{parentName:"tr",align:null},"Boot mode, support only start one module, do not set all modules will start"),(0,r.kt)("td",{parentName:"tr",align:null},"config/naming/null"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},">= 0.9.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.inetutils.prefer-hostname-over-ip"),(0,r.kt)("td",{parentName:"tr",align:null},"if you should fill in ",(0,r.kt)("inlineCode",{parentName:"td"},"hostname")," in ",(0,r.kt)("inlineCode",{parentName:"td"},"cluster.conf")),(0,r.kt)("td",{parentName:"tr",align:null},"true/false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},">= 0.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.inetutils.ip-address"),(0,r.kt)("td",{parentName:"tr",align:null},"Native IP, set this parameter, will use this IP to",(0,r.kt)("inlineCode",{parentName:"td"},"cluster.conf"),"matching, please make sure that the IP value exists in the ",(0,r.kt)("inlineCode",{parentName:"td"},"cluster.conf")),(0,r.kt)("td",{parentName:"tr",align:null},"Native IP"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},">= 0.3.0")))),(0,r.kt)("h3",{id:"naming-module"},"Naming module"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter names"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional value"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Support version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.naming.data.warmup"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the Server startup to preheat the data"),(0,r.kt)("td",{parentName:"tr",align:null},"true/false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},">= 1.0.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.naming.expireInstance"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether automatic removal of temporary instance"),(0,r.kt)("td",{parentName:"tr",align:null},"true/false"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},">= 1.0.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.naming.distro.taskDispatchPeriod"),(0,r.kt)("td",{parentName:"tr",align:null},"Synchronization task generation cycle, milliseconds"),(0,r.kt)("td",{parentName:"tr",align:null},"positive integer"),(0,r.kt)("td",{parentName:"tr",align:null},"2000"),(0,r.kt)("td",{parentName:"tr",align:null},">= 1.0.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.naming.distro.batchSyncKeyCount"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of each batch of key synchronization task"),(0,r.kt)("td",{parentName:"tr",align:null},"positive integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},">= 1.0.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.naming.distro.syncRetryDelay"),(0,r.kt)("td",{parentName:"tr",align:null},"Synchronization task failure retry intervals, milliseconds"),(0,r.kt)("td",{parentName:"tr",align:null},"positive integer"),(0,r.kt)("td",{parentName:"tr",align:null},"5000"),(0,r.kt)("td",{parentName:"tr",align:null},">= 1.0.2")))),(0,r.kt)("p",null,"In addition to the above listed to in ",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties"),"configuration properties, And some can be adjusted call interface at runtime, These parameters are in the ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/open-api"},"Open API"),(0,r.kt)("inlineCode",{parentName:"p"},"examine system current data index"),"the API in a statement."),(0,r.kt)("h3",{id:"config-module"},"Config module"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter names"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional value"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Support version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"db.num"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of database"),(0,r.kt)("td",{parentName:"tr",align:null},"positive integer"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},">= 0.1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"db.url.0"),(0,r.kt)("td",{parentName:"tr",align:null},"The first database URL"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},">= 0.1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"db.url.1"),(0,r.kt)("td",{parentName:"tr",align:null},"The second database URL"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},">= 0.1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"db.user"),(0,r.kt)("td",{parentName:"tr",align:null},"User name of the database connection"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},">= 0.1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"db.password"),(0,r.kt)("td",{parentName:"tr",align:null},"Database connection password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},">= 0.1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spring.datasource.platform"),(0,r.kt)("td",{parentName:"tr",align:null},"Database type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"mysql\uff5c>=1.3.0"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"db.pool.config.xxx"),(0,r.kt)("td",{parentName:"tr",align:null},"Database connection pool parameters, using hikari connection pool, the parameters are the same as hikari connection pool, such as ",(0,r.kt)("inlineCode",{parentName:"td"},"db.pool.config.connectionTimeout")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"db.pool.config.maximumPoolSize")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"same as hikariCp"),(0,r.kt)("td",{parentName:"tr",align:null},">=1.4.1")))),(0,r.kt)("p",null,"Now the db config support multi data source. It can set data source num by ",(0,r.kt)("inlineCode",{parentName:"p"},"db.num"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"db.url.index")," as the corresponding connection's url. When ",(0,r.kt)("inlineCode",{parentName:"p"},"db.user")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"db.password")," are set without ",(0,r.kt)("inlineCode",{parentName:"p"},"index"),", all db connection use ",(0,r.kt)("inlineCode",{parentName:"p"},"db.user")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"db.password")," to auth. If the username or password is different with different data source, can split by symbol ",(0,r.kt)("inlineCode",{parentName:"p"},","),", or use ",(0,r.kt)("inlineCode",{parentName:"p"},"db.user.index"),",",(0,r.kt)("inlineCode",{parentName:"p"},"db.user.password")," to set corresponding db connection's username or password. It is important to note that, when ",(0,r.kt)("inlineCode",{parentName:"p"},"db.user")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"db.password")," are set without index, and the mechanism which split ",(0,r.kt)("inlineCode",{parentName:"p"},"db.user"),",",(0,r.kt)("inlineCode",{parentName:"p"},"db.password")," by ",(0,r.kt)("inlineCode",{parentName:"p"},",")," exist, so if username or password contains ",(0,r.kt)("inlineCode",{parentName:"p"},","),", it will split the value by ",(0,r.kt)("inlineCode",{parentName:"p"},","),", and use split","[0]"," to auth, failed to auth finally.      "),(0,r.kt)("p",null,"Nacos started to use HikariCP connection pool from version 1.3, but before version 1.4.1, the connection pool configuration is system default value, and the configuration could not be customized. After 1.4.1, Nacos provide a method to configure the HikariCP connection pool.\n",(0,r.kt)("inlineCode",{parentName:"p"},"db.pool.config")," is the configuration prefix, ",(0,r.kt)("inlineCode",{parentName:"p"},"xxx")," is the actual hikariCP configuration, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"db.pool.config.connectionTimeout")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"db.pool.config.maximumPoolSize")," and so on. For more configuration of hikariCP, please check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/brettwooldridge/HikariCP"},"HikariCP"),"\nIt should be noted that ",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"user"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," will be rewrite by ",(0,r.kt)("inlineCode",{parentName:"p"},"db.url.n"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"db.user"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"db.password"),", and driverClassName is the default MySQL8 driver which supports mysql5.x."),(0,r.kt)("h3",{id:"cmdb-module"},"CMDB module"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter names"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional value"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Support version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.cmdb.loadDataAtStart"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to open the CMDB"),(0,r.kt)("td",{parentName:"tr",align:null},"true/false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},">= 0.7.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.cmdb.dumpTaskInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"The full amount of the interval of the dump, the unit is in seconds"),(0,r.kt)("td",{parentName:"tr",align:null},"positive integer"),(0,r.kt)("td",{parentName:"tr",align:null},"3600"),(0,r.kt)("td",{parentName:"tr",align:null},">= 0.7.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.cmdb.eventTaskInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"The pull interval change events, the unit is in seconds"),(0,r.kt)("td",{parentName:"tr",align:null},"positive integer"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},">= 0.7.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.cmdb.labelTaskInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"Label the pull interval set, the unit is in seconds"),(0,r.kt)("td",{parentName:"tr",align:null},"positive integer"),(0,r.kt)("td",{parentName:"tr",align:null},"300"),(0,r.kt)("td",{parentName:"tr",align:null},">= 0.7.0")))),(0,r.kt)("h2",{id:"nacos-java-client"},"Nacos Java Client"),(0,r.kt)("p",null,"Client parameters are divided into two kinds, one kind is through the -D parameter to specify the configuration of the client is a kind of structure, through ",(0,r.kt)("inlineCode",{parentName:"p"},"Properties")," objects specified in the configuration, the following without -D marked by ",(0,r.kt)("inlineCode",{parentName:"p"},"Properties")," injection configuration."),(0,r.kt)("h3",{id:"general-parameters"},"General parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter names"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional value"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Support version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection Nacos Server specify the connection point, you can refer to ",(0,r.kt)("a",{parentName:"td",href:"https://nacos.io/en-us/blog/address-server.html"},"file")),(0,r.kt)("td",{parentName:"tr",align:null},"domain name"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},">= 0.1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpointPort"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection Nacos Server specify the connection port, you can refer to ",(0,r.kt)("a",{parentName:"td",href:"https://nacos.io/en-us/blog/address-server.html"},"file")),(0,r.kt)("td",{parentName:"tr",align:null},"Legal port"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},">= 0.1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"namespace ID"),(0,r.kt)("td",{parentName:"tr",align:null},"namespace ID"),(0,r.kt)("td",{parentName:"tr",align:null},"config module is empty, naming module is public"),(0,r.kt)("td",{parentName:"tr",align:null},">= 0.8.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"serverAddr"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos Server address list, this value is higher priority than the endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"ip:port,ip:port,..."),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},">= 0.1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JM.LOG.PATH(-D)"),(0,r.kt)("td",{parentName:"tr",align:null},"client log directory"),(0,r.kt)("td",{parentName:"tr",align:null},"directory path"),(0,r.kt)("td",{parentName:"tr",align:null},"root directory of the user"),(0,r.kt)("td",{parentName:"tr",align:null},">= 0.1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"com.alibaba.nacos.config.log.level(-D)"),(0,r.kt)("td",{parentName:"tr",align:null},"Naming client log level"),(0,r.kt)("td",{parentName:"tr",align:null},"info,error,warn etc"),(0,r.kt)("td",{parentName:"tr",align:null},"info"),(0,r.kt)("td",{parentName:"tr",align:null},">= 1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"com.alibaba.nacos.naming.log.level(-D)"),(0,r.kt)("td",{parentName:"tr",align:null},"Config client log level"),(0,r.kt)("td",{parentName:"tr",align:null},"info,error,warn etc"),(0,r.kt)("td",{parentName:"tr",align:null},"info"),(0,r.kt)("td",{parentName:"tr",align:null},">= 1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"com.alibaba.nacos.client.naming.tls.enable(-D)"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to open the HTTPS"),(0,r.kt)("td",{parentName:"tr",align:null},"true/false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},">= 1.0.0")))),(0,r.kt)("h3",{id:"naming-client"},"Naming client"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter names"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional value"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Support version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"namingLoadCacheAtStart"),(0,r.kt)("td",{parentName:"tr",align:null},"If boot priority reads a local cache"),(0,r.kt)("td",{parentName:"tr",align:null},"true/false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},">= 1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"namingCacheRegistryDir"),(0,r.kt)("td",{parentName:"tr",align:null},"The subdirectory of cache, default is ",(0,r.kt)("inlineCode",{parentName:"td"},".../nacos/{SUB_DIR}/naming")),(0,r.kt)("td",{parentName:"tr",align:null},"path of SUB_DIR"),(0,r.kt)("td",{parentName:"tr",align:null},"empty string"),(0,r.kt)("td",{parentName:"tr",align:null},">=2.0.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"namingClientBeatThreadCount"),(0,r.kt)("td",{parentName:"tr",align:null},"client's heartbeat thread pool size"),(0,r.kt)("td",{parentName:"tr",align:null},"positive integer"),(0,r.kt)("td",{parentName:"tr",align:null},"number of the machine's CPU half"),(0,r.kt)("td",{parentName:"tr",align:null},">= 1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"namingPollingThreadCount"),(0,r.kt)("td",{parentName:"tr",align:null},"client regularly polling data update the thread pool size"),(0,r.kt)("td",{parentName:"tr",align:null},"positive integer"),(0,r.kt)("td",{parentName:"tr",align:null},"number of the machine's CPU half"),(0,r.kt)("td",{parentName:"tr",align:null},">= 1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"com.alibaba.nacos.naming.cache.dir(-D)"),(0,r.kt)("td",{parentName:"tr",align:null},"The directory of client cache"),(0,r.kt)("td",{parentName:"tr",align:null},"path of directory"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{user.home}/nacos/naming")),(0,r.kt)("td",{parentName:"tr",align:null},">= 1.0.0")))),(0,r.kt)("h3",{id:"config-client"},"Config client"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter names"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional value"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Support version"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"configLongPollTimeout(config.long-poll.timeout 1.0.1 version)"),(0,r.kt)("td",{parentName:"tr",align:null},"Long polling timeout, milliseconds"),(0,r.kt)("td",{parentName:"tr",align:null},"positive integer"),(0,r.kt)("td",{parentName:"tr",align:null},"30000"),(0,r.kt)("td",{parentName:"tr",align:null},">= 1.0.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"configRetryTime(config.retry.time 1.0.1 version)"),(0,r.kt)("td",{parentName:"tr",align:null},"Retry time long polling tasks, milliseconds"),(0,r.kt)("td",{parentName:"tr",align:null},"positive integer"),(0,r.kt)("td",{parentName:"tr",align:null},"2000"),(0,r.kt)("td",{parentName:"tr",align:null},">= 1.0.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxRetry"),(0,r.kt)("td",{parentName:"tr",align:null},"Long polling retries"),(0,r.kt)("td",{parentName:"tr",align:null},"positive integer"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},">= 1.0.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enableRemoteSyncConfig"),(0,r.kt)("td",{parentName:"tr",align:null},"Listeners are added to the remote configuration for the first time"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean value"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},">= 1.0.2")))))}s.isMDXComponent=!0}}]);