"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[6942],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),o=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(c.Provider,{value:e},t.children)},k="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=o(a),s=r,N=k["".concat(c,".").concat(s)]||k[s]||d[s]||l;return a?n.createElement(N,p(p({ref:e},m),{},{components:a})):n.createElement(N,p({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=s;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[k]="string"==typeof t?t:r,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},14456:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"Nacos\u670d\u52a1\u914d\u7f6e\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",keywords:["Nacos","\u670d\u52a1","\u914d\u7f6e","\u6027\u80fd"],description:"Nacos\u670d\u52a1\u914d\u7f6e\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a"},p="Nacos\u670d\u52a1\u914d\u7f6e\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",i={unversionedId:"nacos-config-benchmark",id:"version-1.X/nacos-config-benchmark",title:"Nacos\u670d\u52a1\u914d\u7f6e\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",description:"Nacos\u670d\u52a1\u914d\u7f6e\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.X/nacos-config-benchmark.md",sourceDirName:".",slug:"/nacos-config-benchmark",permalink:"/zh-cn/docs/1.X/nacos-config-benchmark",draft:!1,tags:[],version:"1.X",frontMatter:{title:"Nacos\u670d\u52a1\u914d\u7f6e\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",keywords:["Nacos","\u670d\u52a1","\u914d\u7f6e","\u6027\u80fd"],description:"Nacos\u670d\u52a1\u914d\u7f6e\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a"}},c={},o=[{value:"\u6d4b\u8bd5\u76ee\u7684",id:"\u6d4b\u8bd5\u76ee\u7684",level:2},{value:"\u6d4b\u8bd5\u5de5\u5177",id:"\u6d4b\u8bd5\u5de5\u5177",level:2},{value:"\u6d4b\u8bd5\u73af\u5883",id:"\u6d4b\u8bd5\u73af\u5883",level:2},{value:"1.\u73af\u5883",id:"1\u73af\u5883",level:3},{value:"2.\u8bbe\u7f6e\u542f\u52a8\u53c2\u6570",id:"2\u8bbe\u7f6e\u542f\u52a8\u53c2\u6570",level:3},{value:"\u6d4b\u8bd5\u573a\u666f",id:"\u6d4b\u8bd5\u573a\u666f",level:2},{value:"\u6d4b\u8bd5\u6570\u636e",id:"\u6d4b\u8bd5\u6570\u636e",level:2},{value:"1. \u53d1\u5e03\u914d\u7f6e",id:"1-\u53d1\u5e03\u914d\u7f6e",level:3},{value:"2. \u83b7\u53d6\u914d\u7f6e",id:"2-\u83b7\u53d6\u914d\u7f6e",level:3},{value:"3. \u76d1\u542c\u914d\u7f6e",id:"3-\u76d1\u542c\u914d\u7f6e",level:3},{value:"4. \u957f\u8fde\u63a5\u5bb9\u91cf\u6d4b\u8bd5",id:"4-\u957f\u8fde\u63a5\u5bb9\u91cf\u6d4b\u8bd5",level:3},{value:"\u6d4b\u8bd5\u7ed3\u8bba",id:"\u6d4b\u8bd5\u7ed3\u8bba",level:2}],m={toc:o},k="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(k,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nacos\u670d\u52a1\u914d\u7f6e\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a"},"Nacos\u670d\u52a1\u914d\u7f6e\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a"),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u76ee\u7684"},"\u6d4b\u8bd5\u76ee\u7684"),(0,r.kt)("p",null,"\u4e3b\u8981\u8ba9\u5927\u5bb6\u4e86\u89e3Nacos\u7684\u6027\u80fd\u8d1f\u8f7d\u548c\u5bb9\u91cf\uff0c\u534f\u52a9\u6211\u4eec\u66f4\u597d\u7684\u7ba1\u7406Nacos\u6027\u80fd\u8d28\u91cf\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u5feb\u7684\u8fd0\u7528\u8bc4\u4f30Nacos\u7cfb\u7edf\u8d1f\u8377\u3002"),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u5de5\u5177"},"\u6d4b\u8bd5\u5de5\u5177"),(0,r.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u81ea\u7814\u7684PAS\u6027\u80fd\u8bc4\u4f30\u670d\u52a1\u5e73\u53f0\u8fdb\u884c\u538b\u6d4b\uff0c\u5176\u539f\u7406\u662f\u57fa\u4e8e\u5229\u7528JMeter\u5f15\u64ce\uff0c\u4f7f\u7528PAS\u81ea\u52a8\u751f\u6210\u7684JMeter\u811a\u672c\uff0c\u8fdb\u884c\u667a\u80fd\u538b\u6d4b\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1xCfDDpzqK1RjSZFvXXcB7VXa-692-297.png",alt:"IMAGE"})),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u73af\u5883"},"\u6d4b\u8bd5\u73af\u5883"),(0,r.kt)("h3",{id:"1\u73af\u5883"},"1.\u73af\u5883"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u673a\u5668"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU 8\u6838\uff0c\u5185\u5b5816G")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u89c4\u6a21"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5355\u673a\uff0c3\u8282\u70b9\uff0c10\u8282\u70b9\uff0c100\u8282\u70b9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nacos\u7248\u672c"),(0,r.kt)("td",{parentName:"tr",align:null},"0.8.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93"),(0,r.kt)("td",{parentName:"tr",align:null},"32C128G")))),(0,r.kt)("h3",{id:"2\u8bbe\u7f6e\u542f\u52a8\u53c2\u6570"},"2.\u8bbe\u7f6e\u542f\u52a8\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/opt/taobao/java/bin/java -server -Xms4g -Xmx4g -Xmn2g \n-XX:MetaspaceSize=128m \n-XX:MaxMetaspaceSize=320m \n-Xdebug \n-Xrunjdwp:transport=dt_socket,address=9555,server=y,suspend=n \n-XX:+UseConcMarkSweepGC \n-XX:+UseCMSCompactAtFullCollection \n-XX:CMSInitiatingOccupancyFraction=70 \n-XX:+CMSParallelRemarkEnabled -XX:SoftRefLRUPolicyMSPerMB=0 \n-XX:+CMSClassUnloadingEnabled -XX:SurvivorRatio=8 \n-XX:-UseParNewGC -verbose:gc -Xloggc:/home/admin/nacos/logs/nacos_gc.log \n-XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:+PrintGCApplicationStoppedTime \n-XX:+PrintAdaptiveSizePolicy -Dnacos.home=/home/admin/nacos -XX:-OmitStackTraceInFastThrow \n-XX:-UseLargePages -jar /home/admin/nacos/target/nacos-server.jar \n--spring.config.location=classpath:/,classpath:/config/,file:./,file:./config/,file:/home/admin/nacos/conf/\n")),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u573a\u666f"},"\u6d4b\u8bd5\u573a\u666f"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u6d4b\u8bd5\u573a\u666f\u90fd\u662f\u670d\u52a1\u914d\u7f6e\u91cd\u8981\u63a5\u53e3\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1Nacos\u670d\u52a1\u53d1\u5e03\u914d\u7f6e\u7684\u80fd\u529b"),(0,r.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1Nacos\u670d\u52a1\u83b7\u53d6\u914d\u7f6e\u7684\u80fd\u529b"),(0,r.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1Nacos\u670d\u52a1\u76d1\u542c\u914d\u7f6e\u7684\u80fd\u529b"),(0,r.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1Nacos\u670d\u52a1\u957f\u8fde\u63a5\u5bb9\u91cf\u80fd\u529b")),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u6570\u636e"},"\u6d4b\u8bd5\u6570\u636e"),(0,r.kt)("h3",{id:"1-\u53d1\u5e03\u914d\u7f6e"},"1. \u53d1\u5e03\u914d\u7f6e"),(0,r.kt)("p",null,"\u53d1\u5e03\u914d\u7f6e\u4e3b\u8981\u6d4b\u8bd5Nacos publishConfig\u63a5\u53e3\u7684\u6027\u80fd\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5728\u5404\u89c4\u6a21\u96c6\u7fa4\u7684\u6027\u80fd\u8868\u73b0\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5355\u673a"),(0,r.kt)("th",{parentName:"tr",align:"center"},"3\u8282\u70b9"),(0,r.kt)("th",{parentName:"tr",align:"center"},"10\u8282\u70b9"),(0,r.kt)("th",{parentName:"tr",align:"center"},"100\u8282\u70b9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1400"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4214"),(0,r.kt)("td",{parentName:"tr",align:"center"},"6863"),(0,r.kt)("td",{parentName:"tr",align:"center"},"8626")))),(0,r.kt)("p",null,"\u5177\u4f53\u6211\u4eec\u770b\u4e0b3\u8282\u70b9\u670d\u52a1\u96c6\u7fa4\u53d1\u5e03\u914d\u7f6e\u80fd\u529b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4ee5\u4e0b\u4e3a\u5404\u4e2a\u5e76\u53d1\u6570 (\u65bd\u538b\u673a\u53f0\u6570*\u5e76\u53d1\u6570) \u65f6\uff0c\u53d1\u5e03\u914d\u7f6e\u7684TPS\uff0c\u5e73\u5747RT\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1OjzIDpzqK1RjSZFoXXbfcXXa-693-400.png",alt:"IMAGE"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1s.EfDxjaK1RjSZKzXXXVwXXa-693-325.png",alt:"IMAGE"})),(0,r.kt)("h3",{id:"2-\u83b7\u53d6\u914d\u7f6e"},"2. \u83b7\u53d6\u914d\u7f6e"),(0,r.kt)("p",null,"\u83b7\u53d6\u914d\u7f6e\u5bf9Nacos getConfig\u63a5\u53e3\u8fdb\u884c\u6d4b\u8bd5\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5b9e\u6d4b\u5728\u5404\u4e2a\u89c4\u6a21\u96c6\u7fa4\u7684\u6027\u80fd\u8868\u73b0\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5355\u673a"),(0,r.kt)("th",{parentName:"tr",align:"center"},"3\u8282\u70b9"),(0,r.kt)("th",{parentName:"tr",align:"center"},"10\u8282\u70b9"),(0,r.kt)("th",{parentName:"tr",align:"center"},"100\u8282\u70b9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"15000"),(0,r.kt)("td",{parentName:"tr",align:"center"},"23013"),(0,r.kt)("td",{parentName:"tr",align:"center"},"45000"),(0,r.kt)("td",{parentName:"tr",align:"center"},"161099")))),(0,r.kt)("p",null,"\u5177\u4f53\u6211\u4eec\u4e5f\u770b\u4e0b3\u8282\u70b9\u670d\u52a1\u96c6\u7fa4\u83b7\u53d6\u914d\u7f6e\u80fd\u529b\uff0c\u4ee5\u4e0b\u4e3a\u5404\u4e2a\u5e76\u53d1\u6570 (\u65bd\u538b\u673a\u53f0\u6570*\u5e76\u53d1\u6570) \u65f6\uff0c\u83b7\u53d6\u914d\u7f6e\u7684TPS\uff0c\u5e73\u5747RT\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1UjzDDr2pK1RjSZFsXXaNlXXa-691-365.png",alt:"IMAGE"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1kcfADwTqK1RjSZPhXXXfOFXa-691-380.png",alt:"IMAGE"})),(0,r.kt)("h3",{id:"3-\u76d1\u542c\u914d\u7f6e"},"3. \u76d1\u542c\u914d\u7f6e"),(0,r.kt)("p",null,"\u6267\u884cNacos addListeners\u7684\u63a5\u53e3\u7684\u6027\u80fd\uff0c \u76d1\u542c\u914d\u7f6e\u4e3b\u8981\u91c7\u7528\u589e\u52a0\u591a\u4e2a\u914d\u7f6e\u76d1\u542c\uff0c\u5e76\u591a\u6b21\u53d1\u5e03\u914d\u7f6e\u7684\u65b9\u6cd5\uff0c\u7edf\u8ba1\u53d1\u5e03\u65f6\u95f4\u4e0e\u76d1\u542c\u63a5\u6536\u5230\u914d\u7f6e\u65f6\u95f4\u95f4\u9694\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u6211\u4eec\u9009\u53d6\u4e86\u51e0\u4e2a\u70b9\uff0c\u5217\u4e3e\u4e86\u53d1\u5e03\u4e0e\u76d1\u542c\u65f6\u95f4\u5dee\uff0c\u5728100ms\u5185\u57fa\u672c\u90fd\u80fd\u76d1\u542c\u5230\u914d\u7f6e\u7684\u66f4\u6539\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u6b21\u6570"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u53d1\u5e03\u4e0e\u76d1\u542c\u65f6\u95f4\u5dee(ms)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"63")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"53")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"84")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"73")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"46")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"6"),(0,r.kt)("td",{parentName:"tr",align:"center"},"35")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"7"),(0,r.kt)("td",{parentName:"tr",align:"center"},"73")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"8"),(0,r.kt)("td",{parentName:"tr",align:"center"},"183")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"9"),(0,r.kt)("td",{parentName:"tr",align:"center"},"104")))),(0,r.kt)("h3",{id:"4-\u957f\u8fde\u63a5\u5bb9\u91cf\u6d4b\u8bd5"},"4. \u957f\u8fde\u63a5\u5bb9\u91cf\u6d4b\u8bd5"),(0,r.kt)("p",null,"Nacos\u76d1\u542c\u914d\u7f6e\u4e0e\u5ba2\u6237\u7aef\u5efa\u7acb\u957f\u8fde\u63a5\uff0c\u957f\u8fde\u63a5\u4f1a\u6d88\u8017\u670d\u52a1\u5185\u5b58\uff0c\u4ece\u800c\u96c6\u7fa4load\u589e\u9ad8\u3002\u5efa\u7acb\u957f\u8fde\u63a5\u5bb9\u91cf\u7684\u80fd\u529b\uff0c\u4e3b\u8981\u8003\u67e5\u914d\u7f6e\u76d1\u542c\u7684\u74f6\u9888\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u6d4b\u8bd5\u65b9\u6cd5\u9010\u6e10\u589e\u52a0\u96c6\u7fa4\u7684\u8fde\u63a5\uff0c\u5355\u673a\u8fde\u63a5\u8fbe\u52309000\u65f6\uff0cCPU: 13.9% \u5185\u5b58\uff1a18.8%\uff0cload\uff1a4.7\uff0c\u90fd\u5904\u4e8e\u6b63\u5e38\u72b6\u6001\uff0c\u8fde\u63a5\u6570\u91cf\u589e\u52a0\u540e\uff0cload\u4f1a\u6210\u500d\u6570\u7ea7\u589e\u52a0\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5728\u5404\u89c4\u6a21\u96c6\u7fa4\u6d4b\u8bd5\u57fa\u672c\u4e0a\u7b26\u5408\u9a8c\u8bc1\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5355\u673a"),(0,r.kt)("th",{parentName:"tr",align:"center"},"3\u8282\u70b9"),(0,r.kt)("th",{parentName:"tr",align:"center"},"10\u8282\u70b9"),(0,r.kt)("th",{parentName:"tr",align:"center"},"100\u8282\u70b9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"9000"),(0,r.kt)("td",{parentName:"tr",align:"center"},"27000"),(0,r.kt)("td",{parentName:"tr",align:"center"},"90000"),(0,r.kt)("td",{parentName:"tr",align:"center"},"910000")))),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u7ed3\u8bba"},"\u6d4b\u8bd5\u7ed3\u8bba"),(0,r.kt)("p",null,"Nacos\u6027\u80fd\u6d4b\u8bd5\u90fd\u662f\u9488\u5bf9\u91cd\u70b9\u529f\u80fd\uff0c\u901a\u8fc7\u5bf9\u5404\u89c4\u6a21\u96c6\u7fa4\u8fdb\u884c\u538b\u6d4b\uff0c\u53ef\u4ee5\u770b\u5230\u5404\u4e2a\u96c6\u7fa4\u7684\u63a5\u53e3\u5bb9\u91cf\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u672c\u6d4b\u8bd5\u4f9b\u7ed9\u5927\u5bb6\u4f5c\u4e3a\u53c2\u8003\uff0c\u5982\u6709\u4e0d\u8db3\u6216\u504f\u5dee\uff0c\u8bf7\u6307\u6b63\uff01",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u5bf9\u6027\u80fd\u6709\u5176\u4ed6\u9700\u6c42\uff0c\u53ef\u4ee5\u7ed9\u6211\u4eec\u63d0issue\u3002"))}d.isMDXComponent=!0}}]);