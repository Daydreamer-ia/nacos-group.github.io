"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[8560],{3905:(t,a,e)=>{e.d(a,{Zo:()=>k,kt:()=>g});var n=e(67294);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function p(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var m=n.createContext({}),u=function(t){var a=n.useContext(m),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},k=function(t){var a=u(t.components);return n.createElement(m.Provider,{value:a},t.children)},d="mdxType",o={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),d=u(e),N=l,g=d["".concat(m,".").concat(N)]||d[N]||o[N]||r;return e?n.createElement(g,i(i({ref:a},k),{},{components:e})):n.createElement(g,i({ref:a},k))}));function g(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=e.length,i=new Array(r);i[0]=N;var p={};for(var m in a)hasOwnProperty.call(a,m)&&(p[m]=a[m]);p.originalType=t,p[d]="string"==typeof t?t:l,i[1]=p;for(var u=2;u<r;u++)i[u]=e[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}N.displayName="MDXCreateElement"},58831:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var n=e(87462),l=(e(67294),e(3905));const r={title:"Nacos2.0\u670d\u52a1\u53d1\u73b0\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",keywords:["Nacos","\u670d\u52a1","\u53d1\u73b0","\u6027\u80fd"],description:"Nacos2.0\u670d\u52a1\u53d1\u73b0\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a"},i="Nacos2.0.0-ALPHA2 \u670d\u52a1\u53d1\u73b0\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",p={unversionedId:"v2/guide/admin/nacos2-naming-benchmark",id:"v2/guide/admin/nacos2-naming-benchmark",title:"Nacos2.0\u670d\u52a1\u53d1\u73b0\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",description:"Nacos2.0\u670d\u52a1\u53d1\u73b0\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/v2/guide/admin/nacos2-naming-benchmark.md",sourceDirName:"v2/guide/admin",slug:"/v2/guide/admin/nacos2-naming-benchmark",permalink:"/en/docs/next/v2/guide/admin/nacos2-naming-benchmark",draft:!1,tags:[],version:"current",frontMatter:{title:"Nacos2.0\u670d\u52a1\u53d1\u73b0\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",keywords:["Nacos","\u670d\u52a1","\u53d1\u73b0","\u6027\u80fd"],description:"Nacos2.0\u670d\u52a1\u53d1\u73b0\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a"},sidebar:"docs",previous:{title:"Nacos2.0\u670d\u52a1\u914d\u7f6e\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",permalink:"/en/docs/next/v2/guide/admin/nacos2-config-benchmark"},next:{title:"NacosSync user guide",permalink:"/en/docs/next/v2/ecology/use-nacos-sync"}},m={},u=[{value:"\u6d4b\u8bd5\u76ee\u7684",id:"\u6d4b\u8bd5\u76ee\u7684",level:2},{value:"\u6d4b\u8bd5\u5de5\u5177",id:"\u6d4b\u8bd5\u5de5\u5177",level:2},{value:"\u6d4b\u8bd5\u73af\u5883",id:"\u6d4b\u8bd5\u73af\u5883",level:2},{value:"1. \u73af\u5883",id:"1-\u73af\u5883",level:3},{value:"2.\u8bbe\u7f6e\u542f\u52a8\u53c2\u6570",id:"2\u8bbe\u7f6e\u542f\u52a8\u53c2\u6570",level:3},{value:"\u6d4b\u8bd5\u573a\u666f",id:"\u6d4b\u8bd5\u573a\u666f",level:2},{value:"\u6d4b\u8bd5\u6570\u636e",id:"\u6d4b\u8bd5\u6570\u636e",level:2},{value:"1. \u6ce8\u518c\u5b9e\u4f8b",id:"1-\u6ce8\u518c\u5b9e\u4f8b",level:3},{value:"\u76f8\u5173API",id:"\u76f8\u5173api",level:4},{value:"\u7ed3\u679c\u6570\u636e\u5982\u4e0b",id:"\u7ed3\u679c\u6570\u636e\u5982\u4e0b",level:4},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790",level:4},{value:"2. \u67e5\u8be2\u5b9e\u4f8b",id:"2-\u67e5\u8be2\u5b9e\u4f8b",level:3},{value:"\u76f8\u5173API",id:"\u76f8\u5173api-1",level:4},{value:"\u7ed3\u679c\u6570\u636e\u5982\u4e0b",id:"\u7ed3\u679c\u6570\u636e\u5982\u4e0b-1",level:4},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790-1",level:4},{value:"3. \u6ce8\u9500\u5b9e\u4f8b",id:"3-\u6ce8\u9500\u5b9e\u4f8b",level:3},{value:"\u76f8\u5173API",id:"\u76f8\u5173api-2",level:4},{value:"\u7ed3\u679c\u6570\u636e\u5982\u4e0b",id:"\u7ed3\u679c\u6570\u636e\u5982\u4e0b-2",level:4},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790-2",level:4},{value:"\u6d4b\u8bd5\u7ed3\u8bba",id:"\u6d4b\u8bd5\u7ed3\u8bba",level:2}],k={toc:u},d="wrapper";function o(t){let{components:a,...e}=t;return(0,l.kt)(d,(0,n.Z)({},k,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nacos200-alpha2-\u670d\u52a1\u53d1\u73b0\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a"},"Nacos2.0.0-ALPHA2 \u670d\u52a1\u53d1\u73b0\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Document translating and optimizing...")),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u76ee\u7684"},"\u6d4b\u8bd5\u76ee\u7684"),(0,l.kt)("p",null,"Nacos2.0\u5bf9\u8fde\u63a5\u6a21\u578b\uff0c\u670d\u52a1\u53d1\u73b0\u7684\u6570\u636e\u6a21\u578b\u4e5f\u8fd0\u4f5c\u6a21\u5f0f\u8fdb\u884c\u4e86\u5927\u8303\u56f4\u7684\u91cd\u6784\uff0c\u56e0\u6b64\u9700\u8981\u5728\u76f8\u540c\u6216\u7c7b\u4f3c\u7684\u573a\u666f\u4e0b\uff0c\u4e86\u89e3Nacos2\u7684\u670d\u52a1\u53d1\u73b0\u6027\u80fd\u8d1f\u8f7d\u548c\u5bb9\u91cf\u4e0eNacos1\u7684\u533a\u522b\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u5feb\u7684\u8fd0\u7528\u8bc4\u4f30Nacos\u7cfb\u7edf\u8d1f\u8377\u3002"),(0,l.kt)("p",null,"Nacos1.0\u6027\u80fd\u6d4b\u8bd5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/en/docs/next/nacos-naming-benchmark"},"\u670d\u52a1\u53d1\u73b0\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a")),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u5de5\u5177"},"\u6d4b\u8bd5\u5de5\u5177"),(0,l.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u81ea\u7814\u7684PAS\u6027\u80fd\u8bc4\u4f30\u670d\u52a1\u5e73\u53f0\u8fdb\u884c\u538b\u6d4b\uff0c\u5176\u539f\u7406\u662f\u57fa\u4e8e\u5229\u7528JMeter\u5f15\u64ce\uff0c\u4f7f\u7528PAS\u81ea\u52a8\u751f\u6210\u7684JMeter\u811a\u672c\uff0c\u8fdb\u884c\u667a\u80fd\u538b\u6d4b\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1xCfDDpzqK1RjSZFvXXcB7VXa-692-297.png",alt:"Pas\u56fe"})),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u73af\u5883"},"\u6d4b\u8bd5\u73af\u5883"),(0,l.kt)("h3",{id:"1-\u73af\u5883"},"1. \u73af\u5883"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u6307\u6807")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u53c2\u6570")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u673a\u5668"),(0,l.kt)("td",{parentName:"tr",align:null},"CPU 8\u6838\uff0c\u5185\u5b5816G")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u89c4\u6a21"),(0,l.kt)("td",{parentName:"tr",align:null},"3\u8282\u70b9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Nacos\u7248\u672c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u7aef\uff1aNacos2.0.0-ALPHA2\uff0c \u5ba2\u6237\u7aef\uff1aNacos2.0.0-ALPHA2")))),(0,l.kt)("h3",{id:"2\u8bbe\u7f6e\u542f\u52a8\u53c2\u6570"},"2.\u8bbe\u7f6e\u542f\u52a8\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"${JAVA_HOME}/bin/java -DembeddedStorage=true -server -Xms10g -Xmx10g -Xmn4g -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=320m -XX:-OmitStackTraceInFastThrow -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/home/admin/nacos/logs/java_heapdump.hprof -XX:-UseLargePages -Dnacos.member.list= -Djava.ext.dirs=${JAVA_HOME}/jre/lib/ext:${JAVA_HOME}/lib/ext -Xloggc:/home/admin/nacos/logs/nacos_gc.log -verbose:gc -XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:+PrintGCTimeStamps -XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=10 -XX:GCLogFileSize=100M -Dloader.path=/home/admin/nacos/plugins/health,/home/admin/nacos/plugins/cmdb -Dnacos.home=/home/admin/nacos -jar /home/admin/nacos/target/nacos-server.jar --spring.config.additional-location=file:/home/admin/nacos/conf/ --logging.config=/home/admin/nacos/conf/nacos-logback.xml --server.max-http-header-size=524288 nacos.nacos\n")),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u573a\u666f"},"\u6d4b\u8bd5\u573a\u666f"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u6d4b\u8bd5\u573a\u666f\u90fd\u662f\u670d\u52a1\u53d1\u73b0\u91cd\u8981\u63a5\u53e3\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1Nacos\u670d\u52a1\u53d1\u73b0\u6ce8\u518c\u5b9e\u4f8b\u7684\u80fd\u529b"),(0,l.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1Nacos\u670d\u52a1\u53d1\u73b0\u67e5\u8be2\u5b9e\u4f8b\u7684\u80fd\u529b"),(0,l.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1Nacos\u670d\u52a1\u53d1\u73b0\u6ce8\u9500\u5b9e\u4f8b\u7684\u80fd\u529b")),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u6570\u636e"},"\u6d4b\u8bd5\u6570\u636e"),(0,l.kt)("h3",{id:"1-\u6ce8\u518c\u5b9e\u4f8b"},"1. \u6ce8\u518c\u5b9e\u4f8b"),(0,l.kt)("p",null,"\u65bd\u538b\u673a\u6a21\u62df100\u4e2a\u5ba2\u6237\u7aef\u540c\u65f6\u53d1\u8d77\u6ce8\u518c\u670d\u52a1\uff0c\u6bcf\u4e2a\u5ba2\u6237\u7aef\u4e00\u6761\u957f\u8fde\u63a5\uff0c\u6bcf\u4e2a\u5ba2\u6237\u7aef\u6ce8\u518c1W\u4e2a\u670d\u52a1\u3002\u603b\u6570100W\u4e2a\u670d\u52a1\u53ca\u5b9e\u4f8b\u3002"),(0,l.kt)("p",null,"\u6ce8\u518c\u5b8c\u6210\u4e4b\u540e\u6bcf\u4e2a\u5ba2\u6237\u7aef\u7ee7\u7eed\u4e0d\u505c\u8fdb\u884c\u6ce8\u518c\u8bf7\u6c42\uff0c\u6a21\u62df\u91cd\u590d\u6ce8\u518c\u8bf7\u6c42\uff08\u4f1a\u8fdb\u884c\u66f4\u65b0\u66ff\u6362\uff09\uff0c\u540c\u65f6\u8bb0\u5f55\u4e0b\u6574\u4e2a\u8fc7\u7a0b\u4e2d\u7684\u76f8\u5173\u6570\u636e\u3002"),(0,l.kt)("h4",{id:"\u76f8\u5173api"},"\u76f8\u5173API"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"NamingService.registerInstance(String serviceName, Instance instance)"),"\xa0"),(0,l.kt)("h4",{id:"\u7ed3\u679c\u6570\u636e\u5982\u4e0b"},"\u7ed3\u679c\u6570\u636e\u5982\u4e0b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u65bd\u538b\u673a\u6570\u91cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6bcf\u53f0\u7ebf\u7a0b\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5e73\u5747TPS"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5e73\u5747RT"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6700\u5c0fRT"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6700\u5927RT"),(0,l.kt)("th",{parentName:"tr",align:null},"80%RT(ms)"),(0,l.kt)("th",{parentName:"tr",align:null},"95%RT(ms)"),(0,l.kt)("th",{parentName:"tr",align:null},"99%RT(ms)"),(0,l.kt)("th",{parentName:"tr",align:null},"CPU\u4f7f\u7528\u7387"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"7256.32"),(0,l.kt)("td",{parentName:"tr",align:null},"13.14"),(0,l.kt)("td",{parentName:"tr",align:null},"0.39"),(0,l.kt)("td",{parentName:"tr",align:null},"2522.25"),(0,l.kt)("td",{parentName:"tr",align:null},"6.72"),(0,l.kt)("td",{parentName:"tr",align:null},"12.86"),(0,l.kt)("td",{parentName:"tr",align:null},"126.33"),(0,l.kt)("td",{parentName:"tr",align:null},"80%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"50"),(0,l.kt)("td",{parentName:"tr",align:null},"16418.04"),(0,l.kt)("td",{parentName:"tr",align:null},"5.8"),(0,l.kt)("td",{parentName:"tr",align:null},"0.41"),(0,l.kt)("td",{parentName:"tr",align:null},"3906.77"),(0,l.kt)("td",{parentName:"tr",align:null},"4.0"),(0,l.kt)("td",{parentName:"tr",align:null},"8.88"),(0,l.kt)("td",{parentName:"tr",align:null},"48.84"),(0,l.kt)("td",{parentName:"tr",align:null},"90%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"26784.84"),(0,l.kt)("td",{parentName:"tr",align:null},"3.6"),(0,l.kt)("td",{parentName:"tr",align:null},"0.38"),(0,l.kt)("td",{parentName:"tr",align:null},"1606.41"),(0,l.kt)("td",{parentName:"tr",align:null},"3.82"),(0,l.kt)("td",{parentName:"tr",align:null},"8.91"),(0,l.kt)("td",{parentName:"tr",align:null},"30.62"),(0,l.kt)("td",{parentName:"tr",align:null},"90%")))),(0,l.kt)("h4",{id:"\u7ed3\u679c\u5206\u6790"},"\u7ed3\u679c\u5206\u6790"),(0,l.kt)("p",null,"\u76f8\u8f83Nacos1.X\u7248\u672c\uff0c\u6ce8\u518c\u6027\u80fd\u603b\u4f53\u63d0\u5347\u81f3\u5c112\u500d\uff0c\u5728\u670d\u52a1\u7aef\u673a\u80fd\u51cf\u534a\u7684\u60c5\u51b5\u4e0b\uff0c\u670d\u52a1\u5b9e\u4f8b\u6570\u57fa\u672c\u4e00\u81f4\u7684\u60c5\u51b5\u4e0b\uff0cTPS\u4ecd\u80fd\u505a\u52302\u500d\u5de6\u53f3\u7684\u63d0\u9ad8\u3002"),(0,l.kt)("h3",{id:"2-\u67e5\u8be2\u5b9e\u4f8b"},"2. \u67e5\u8be2\u5b9e\u4f8b"),(0,l.kt)("p",null,"\u65bd\u538b\u673a\u5148\u6a21\u62df\u53d1\u8d77\u6ce8\u518c\u670d\u52a1\uff0c\u603b\u657010W\u4e2a\u670d\u52a1\uff0c\u6bcf\u4e2a\u670d\u52a110\u4e2a\u5b9e\u4f8b\uff0c\u603b\u6570100W\u5b9e\u4f8b\u3002"),(0,l.kt)("p",null,"\u6ce8\u518c\u5b8c\u6210\u540e\uff0c\u6a21\u62df100\u4e2a\u5ba2\u6237\u7aef\u540c\u65f6\u4e0d\u505c\u8fdb\u884c\u968f\u673a\u670d\u52a1\u67e5\u8be2\u8bf7\u6c42\uff0c\u5e76\u4e14\u6709\u5b9e\u4f8b\u957f\u5ea6\u6821\u9a8c\u3002\u540c\u65f6\u8bb0\u5f55\u4e0b\u6574\u4e2a\u8fc7\u7a0b\u4e2d\u7684\u76f8\u5173\u6570\u636e\u3002"),(0,l.kt)("h4",{id:"\u76f8\u5173api-1"},"\u76f8\u5173API"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"NacosNamingService.getAllInstances(String serviceName, boolean subscribe)"),"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," subscribe \u4e3a false \u8fdb\u884c\u6d4b\u8bd5\uff0c\u5426\u5219\u5c06\u4f1a\u4f18\u5148\u67e5\u8be2\u5ba2\u6237\u7aef\u7f13\u5b58\u3002"),(0,l.kt)("h4",{id:"\u7ed3\u679c\u6570\u636e\u5982\u4e0b-1"},"\u7ed3\u679c\u6570\u636e\u5982\u4e0b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u65bd\u538b\u673a\u6570\u91cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6bcf\u53f0\u7ebf\u7a0b\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5e73\u5747TPS"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5e73\u5747RT"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6700\u5c0fRT"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6700\u5927RT"),(0,l.kt)("th",{parentName:"tr",align:null},"80%RT(ms)"),(0,l.kt)("th",{parentName:"tr",align:null},"95%RT(ms)"),(0,l.kt)("th",{parentName:"tr",align:null},"99%RT(ms)"),(0,l.kt)("th",{parentName:"tr",align:null},"CPU\u4f7f\u7528\u7387"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"12998.46"),(0,l.kt)("td",{parentName:"tr",align:null},"7.54"),(0,l.kt)("td",{parentName:"tr",align:null},"0.55"),(0,l.kt)("td",{parentName:"tr",align:null},"213.86"),(0,l.kt)("td",{parentName:"tr",align:null},"9.68"),(0,l.kt)("td",{parentName:"tr",align:null},"10.69"),(0,l.kt)("td",{parentName:"tr",align:null},"27.92"),(0,l.kt)("td",{parentName:"tr",align:null},"40%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"50"),(0,l.kt)("td",{parentName:"tr",align:null},"12785.01"),(0,l.kt)("td",{parentName:"tr",align:null},"7.93"),(0,l.kt)("td",{parentName:"tr",align:null},"0.38"),(0,l.kt)("td",{parentName:"tr",align:null},"900.48"),(0,l.kt)("td",{parentName:"tr",align:null},"8.34"),(0,l.kt)("td",{parentName:"tr",align:null},"14.18"),(0,l.kt)("td",{parentName:"tr",align:null},"33.04"),(0,l.kt)("td",{parentName:"tr",align:null},"40%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"18451.78"),(0,l.kt)("td",{parentName:"tr",align:null},"10.63"),(0,l.kt)("td",{parentName:"tr",align:null},"0.6"),(0,l.kt)("td",{parentName:"tr",align:null},"829.42"),(0,l.kt)("td",{parentName:"tr",align:null},"11.95"),(0,l.kt)("td",{parentName:"tr",align:null},"23.79"),(0,l.kt)("td",{parentName:"tr",align:null},"44.19"),(0,l.kt)("td",{parentName:"tr",align:null},"45%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"30680.48"),(0,l.kt)("td",{parentName:"tr",align:null},"3.12"),(0,l.kt)("td",{parentName:"tr",align:null},"0.46"),(0,l.kt)("td",{parentName:"tr",align:null},"1138.38"),(0,l.kt)("td",{parentName:"tr",align:null},"4.33"),(0,l.kt)("td",{parentName:"tr",align:null},"5.9"),(0,l.kt)("td",{parentName:"tr",align:null},"9.57"),(0,l.kt)("td",{parentName:"tr",align:null},"50%")))),(0,l.kt)("h4",{id:"\u7ed3\u679c\u5206\u6790-1"},"\u7ed3\u679c\u5206\u6790"),(0,l.kt)("p",null,"\u76f8\u8f83Nacos1.X\u7248\u672c\uff0c\u67e5\u8be2\u6027\u80fd\u603b\u4f53\u63d0\u5347\u81f3\u5c113\u500d\uff0c\u5728\u670d\u52a1\u7aef\u673a\u80fd\u51cf\u534a\u7684\u60c5\u51b5\u4e0b\uff0c\u670d\u52a1\u5b9e\u4f8b\u6570\u57fa\u672c\u4e00\u81f4\u7684\u60c5\u51b5\u4e0b\uff0cTPS\u4ecd\u80fd\u505a\u52303\u500d\u5de6\u53f3\u7684\u63d0\u9ad8\uff0c\u5355\u673a\u591a\u7ebf\u7a0b\u573a\u666f\u751a\u81f3\u670910\u500d\u7684\u63d0\u5347\u3002"),(0,l.kt)("h3",{id:"3-\u6ce8\u9500\u5b9e\u4f8b"},"3. \u6ce8\u9500\u5b9e\u4f8b"),(0,l.kt)("p",null,"\u65bd\u538b\u673a\u5148\u6a21\u62df100\u4e2a\u5ba2\u6237\u7aef\u540c\u65f6\u53d1\u8d77\u6ce8\u518c\u670d\u52a1\uff0c\u6bcf\u4e2a\u5ba2\u6237\u7aef\u4e00\u6761\u957f\u8fde\u63a5\uff0c\u6bcf\u4e2a\u5ba2\u6237\u7aef\u6ce8\u518c1W\u4e2a\u670d\u52a1\u3002\u603b\u6570100W\u4e2a\u670d\u52a1\u53ca\u5b9e\u4f8b\u3002"),(0,l.kt)("p",null,"\u6ce8\u518c\u5b8c\u6210\u540e\uff0c\u6a21\u62df\u4f7f\u7528\u76f8\u540c100\u4e2a\u5ba2\u6237\u7aef\u540c\u65f6\u4e0d\u505c\u8fdb\u884c\u968f\u673a\u670d\u52a1\u6ce8\u9500\u8bf7\u6c42\uff0c\u540c\u65f6\u8bb0\u5f55\u4e0b\u6574\u4e2a\u8fc7\u7a0b\u4e2d\u7684\u76f8\u5173\u6570\u636e\u3002"),(0,l.kt)("h4",{id:"\u76f8\u5173api-2"},"\u76f8\u5173API"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"NacosNamingService.deregisterInstance(String serviceName, String ip, int port)"),"\xa0"),(0,l.kt)("h4",{id:"\u7ed3\u679c\u6570\u636e\u5982\u4e0b-2"},"\u7ed3\u679c\u6570\u636e\u5982\u4e0b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u65bd\u538b\u673a\u6570\u91cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6bcf\u53f0\u7ebf\u7a0b\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5e73\u5747TPS"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5e73\u5747RT"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6700\u5c0fRT"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6700\u5927RT"),(0,l.kt)("th",{parentName:"tr",align:null},"80%RT(ms)"),(0,l.kt)("th",{parentName:"tr",align:null},"95%RT(ms)"),(0,l.kt)("th",{parentName:"tr",align:null},"99%RT(ms)"),(0,l.kt)("th",{parentName:"tr",align:null},"CPU\u4f7f\u7528\u7387"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"9614.96"),(0,l.kt)("td",{parentName:"tr",align:null},"9.88"),(0,l.kt)("td",{parentName:"tr",align:null},"0.41"),(0,l.kt)("td",{parentName:"tr",align:null},"1115.27"),(0,l.kt)("td",{parentName:"tr",align:null},"8.85"),(0,l.kt)("td",{parentName:"tr",align:null},"15.32"),(0,l.kt)("td",{parentName:"tr",align:null},"104.76"),(0,l.kt)("td",{parentName:"tr",align:null},"70%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"50"),(0,l.kt)("td",{parentName:"tr",align:null},"22252.07"),(0,l.kt)("td",{parentName:"tr",align:null},"4.28"),(0,l.kt)("td",{parentName:"tr",align:null},"0.39"),(0,l.kt)("td",{parentName:"tr",align:null},"856.1"),(0,l.kt)("td",{parentName:"tr",align:null},"4.03"),(0,l.kt)("td",{parentName:"tr",align:null},"5.65"),(0,l.kt)("td",{parentName:"tr",align:null},"31.02"),(0,l.kt)("td",{parentName:"tr",align:null},"90% -> 60%\xa0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"29393.8"),(0,l.kt)("td",{parentName:"tr",align:null},"2.55"),(0,l.kt)("td",{parentName:"tr",align:null},"0.42"),(0,l.kt)("td",{parentName:"tr",align:null},"741.09"),(0,l.kt)("td",{parentName:"tr",align:null},"2.67"),(0,l.kt)("td",{parentName:"tr",align:null},"8.91"),(0,l.kt)("td",{parentName:"tr",align:null},"15.85"),(0,l.kt)("td",{parentName:"tr",align:null},"90% -> 60%")))),(0,l.kt)("h4",{id:"\u7ed3\u679c\u5206\u6790-2"},"\u7ed3\u679c\u5206\u6790"),(0,l.kt)("p",null,"\u76f8\u8f83Nacos1.X\u7248\u672c\uff0c\u6ce8\u9500\u6027\u80fd\u603b\u4f53\u63d0\u5347\u81f3\u5c112\u500d\uff0c\u5728\u670d\u52a1\u7aef\u673a\u80fd\u51cf\u534a\u7684\u60c5\u51b5\u4e0b\uff0c\u670d\u52a1\u5b9e\u4f8b\u6570\u57fa\u672c\u4e00\u81f4\u7684\u60c5\u51b5\u4e0b\uff0cTPS\u4ecd\u80fd\u505a\u52302\u500d\u5de6\u53f3\u7684\u63d0\u9ad8\u3002\n\u5173\u4e8eCPU\u753190% \u964d\u4f4e\u4e3a 60%\u7684\u573a\u666f\uff0c \u662f\u7531\u4e8e\u968f\u7740\u6ce8\u9500\u7684\u7684\u670d\u52a1\u548c\u5b9e\u4f8b\u589e\u591a\uff0c\u91cd\u590d\u6ce8\u9500\u7684\u64cd\u4f5c\u53d8\u5f97\u9891\u7e41\uff0c\u672a\u547d\u4e2d\u670d\u52a1\u548c\u5b9e\u4f8b\u7684\u64cd\u4f5c\u4f1a\u88ab\u5feb\u901f\u8fd4\u56de\u4e14\u64cd\u4f5c\u91cf\u5c0f\uff0c\u56e0\u6b64CPU\u4e0b\u964d\u3001TPS\u76f8\u5bf9\u6ce8\u518c\u7565\u9ad8\u3002"),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u7ed3\u8bba"},"\u6d4b\u8bd5\u7ed3\u8bba"),(0,l.kt)("p",null,"Nacos2\u670d\u52a1\u53d1\u73b0\u6027\u80fd\u6d4b\u8bd5\u90fd\u662f\u9488\u5bf9\u91cd\u70b9\u529f\u80fd\uff0c\u901a\u8fc7\u5bf93\u8282\u70b9\u89c4\u6a21\u96c6\u7fa4\u8fdb\u884c\u538b\u6d4b\uff0c\u53ef\u4ee5\u770b\u5230\u63a5\u53e3\u6027\u80fd\u8d1f\u8f7d\u548c\u5bb9\u91cf\uff0c\u4ee5\u53ca\u5bf9\u6bd4\u76f8\u540c/\u7c7b\u4f3c\u573a\u666f\u4e0bNacos1.X\u7248\u672c\u7684\u63d0\u5347\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u538b\u6d4b\u65f6\u670d\u52a1\u53ca\u5b9e\u4f8b\u5bb9\u91cf\u8fbe\u5230\u767e\u4e07\u7ea7\uff0c\u96c6\u7fa4\u8fd0\u884c\u6301\u7eed\u7a33\u5b9a\uff0c\u8fbe\u5230\u9884\u671f\uff1b\uff08\u8be5\u573a\u666f\u6ca1\u6709\u8ba1\u7b97\u9891\u7e41\u53d8\u66f4\u5bfc\u81f4\u7684\u9891\u7e41\u63a8\u9001\u5185\u5bb9\uff0c\u4ec5\u5355\u7eaf\u8ba1\u7b97\u5bb9\u91cf\u4e0a\u7ebf\uff0c\u9644\u5e26\u63a8\u9001\u7684\u771f\u5b9e\u573a\u666f\u5c06\u5728\u4e0b\u8f6e\u538b\u6d4b\u62a5\u544a\u4e2d\u7ed9\u51fa\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u6ce8\u518c/\u6ce8\u9500\u5b9e\u4f8bTPS\u8fbe\u5230 26000 \u4ee5\u4e0a\uff0c\u603b\u4f53\u8f83Nacos1.X\u63d0\u5347\u81f3\u5c112\u500d\uff0c\u63a5\u53e3\u8fbe\u5230\u9884\u671f\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u67e5\u8be2\u5b9e\u4f8bTPS\u80fd\u591f\u8fbe\u5230 30000 \u4ee5\u4e0a\uff0c\u603b\u4f53\u8f83Nacos1.X\u63d0\u53473\u500d\u5de6\u53f3\uff0c\u63a5\u53e3\u8fbe\u5230\u9884\u671f\uff1b")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u672c\u6b21\u53ea\u6d4b\u8bd5\u4e34\u65f6\u5b9e\u4f8b\u6ce8\u518c/\u67e5\u8be2/\u6ce8\u9500\uff0c\u672a\u6d89\u53ca\u6301\u4e45\u5b9e\u4f8b\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u672c\u6d4b\u8bd5\u4e3a\u5bf9\u6bd4Nacos1.X\u7248\u672c\u7684\u6d4b\u8bd5\u573a\u666f\uff0c\u4ec5\u6d4b\u8bd5\u5355\u6838\u5fc3\u63a5\u53e3\u7684\u80fd\u529b\u503c\uff0c",(0,l.kt)("strong",{parentName:"li"},"\u771f\u5b9e\u6a21\u62df\u573a\u666f\u538b\u6d4b")," \u5c06\u5728\u540e\u7eed\u7248\u672c\u7ed9\u51fa\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u672c\u6d4b\u8bd5\u4f9b\u7ed9\u5927\u5bb6\u4f5c\u4e3a\u53c2\u8003\uff0c\u5982\u6709\u4e0d\u8db3\u6216\u504f\u5dee\uff0c\u8bf7\u6307\u6b63! \u5982\u679c\u5bf9\u6027\u80fd\u6709\u5176\u4ed6\u9700\u6c42\uff0c\u53ef\u4ee5\u7ed9\u6211\u4eec\u63d0issue\u3002")))}o.isMDXComponent=!0}}]);