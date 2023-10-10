"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[934],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),i=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=i(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(t),k=l,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||r;return t?a.createElement(d,o(o({ref:n},s),{},{components:t})):a.createElement(d,o({ref:n},s))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=k;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[u]="string"==typeof e?e:l,o[1]=c;for(var i=2;i<r;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},96713:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var a=t(87462),l=(t(67294),t(3905));const r={title:"NacosSync \u7528\u6237\u624b\u518c",keywords:["NacosSync","\u8fc1\u79fb","\u7528\u6237\u624b\u518c"],description:"NacosSync \u8fc1\u79fb\u7528\u6237\u624b\u518c"},o="NacosSync \u7528\u6237\u624b\u518c",c={unversionedId:"v2/ecology/use-nacos-sync",id:"version-2.X/v2/ecology/use-nacos-sync",title:"NacosSync \u7528\u6237\u624b\u518c",description:"NacosSync \u8fc1\u79fb\u7528\u6237\u624b\u518c",source:"@site/versioned_docs/version-2.X/v2/ecology/use-nacos-sync.md",sourceDirName:"v2/ecology",slug:"/v2/ecology/use-nacos-sync",permalink:"/docs/v2/ecology/use-nacos-sync",draft:!1,tags:[],version:"2.X",frontMatter:{title:"NacosSync \u7528\u6237\u624b\u518c",keywords:["NacosSync","\u8fc1\u79fb","\u7528\u6237\u624b\u518c"],description:"NacosSync \u8fc1\u79fb\u7528\u6237\u624b\u518c"},sidebar:"docs",previous:{title:"Nacos2.0\u670d\u52a1\u53d1\u73b0\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",permalink:"/docs/v2/guide/admin/nacos2-naming-benchmark"},next:{title:"Dubbo \u878d\u5408 Nacos \u6210\u4e3a\u6ce8\u518c\u4e2d\u5fc3",permalink:"/docs/v2/ecology/use-nacos-with-dubbo"}},p={},i=[{value:"\u7cfb\u7edf\u6a21\u5757\u67b6\u6784:",id:"\u7cfb\u7edf\u6a21\u5757\u67b6\u6784",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u83b7\u53d6\u5b89\u88c5\u5305",id:"\u83b7\u53d6\u5b89\u88c5\u5305",level:2},{value:"\u521d\u59cb\u5316\u6570\u636e\u5e93",id:"\u521d\u59cb\u5316\u6570\u636e\u5e93",level:2},{value:"\u6570\u636e\u5e93\u914d\u7f6e",id:"\u6570\u636e\u5e93\u914d\u7f6e",level:2},{value:"\u542f\u52a8\u670d\u52a1\u5668",id:"\u542f\u52a8\u670d\u52a1\u5668",level:2},{value:"\u68c0\u67e5\u7cfb\u7edf\u72b6\u6001",id:"\u68c0\u67e5\u7cfb\u7edf\u72b6\u6001",level:2},{value:"\u63a7\u5236\u53f0",id:"\u63a7\u5236\u53f0",level:2},{value:"\u5f00\u59cb\u8fc1\u79fb",id:"\u5f00\u59cb\u8fc1\u79fb",level:2},{value:"\u8fc1\u79fb\u4fe1\u606f",id:"\u8fc1\u79fb\u4fe1\u606f",level:3},{value:"\u6dfb\u52a0\u6ce8\u518c\u4e2d\u5fc3\u96c6\u7fa4\u4fe1\u606f",id:"\u6dfb\u52a0\u6ce8\u518c\u4e2d\u5fc3\u96c6\u7fa4\u4fe1\u606f",level:3},{value:"\u6dfb\u52a0\u540c\u6b65\u4efb\u52a1",id:"\u6dfb\u52a0\u540c\u6b65\u4efb\u52a1",level:3},{value:"Dubbo \u5ba2\u6237\u7aef\u8fde\u63a5\u5230 Nacos \u6ce8\u518c\u4e2d\u5fc3",id:"dubbo-\u5ba2\u6237\u7aef\u8fde\u63a5\u5230-nacos-\u6ce8\u518c\u4e2d\u5fc3",level:3},{value:"Dubbo Consumer\u5ba2\u6237\u7aef\u8fc1\u79fb",id:"dubbo-consumer\u5ba2\u6237\u7aef\u8fc1\u79fb",level:4},{value:"Dubbo Provider\u8fc1\u79fb",id:"dubbo-provider\u8fc1\u79fb",level:4},{value:"\u65b0\u7684\u90e8\u7f72\u7ed3\u6784",id:"\u65b0\u7684\u90e8\u7f72\u7ed3\u6784",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3}],s={toc:i},u="wrapper";function m(e){let{components:n,...t}=e;return(0,l.kt)(u,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nacossync-\u7528\u6237\u624b\u518c"},"NacosSync \u7528\u6237\u624b\u518c"),(0,l.kt)("h1",{id:"\u624b\u518c\u76ee\u6807"},"\u624b\u518c\u76ee\u6807"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7406\u89e3 NacosSync \u7ec4\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8 NacosSync \u670d\u52a1"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\uff0c\u6f14\u793a\u5982\u4f55\u5c06\u6ce8\u518c\u5230 Zookeeper \u7684 Dubbo \u5ba2\u6237\u7aef\u8fc1\u79fb\u5230 Nacos\u3002")),(0,l.kt)("h1",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"NacosSync\u662f\u4e00\u4e2a\u652f\u6301\u591a\u79cd\u6ce8\u518c\u4e2d\u5fc3\u7684\u540c\u6b65\u7ec4\u4ef6,\u57fa\u4e8eSpring boot\u5f00\u53d1\u6846\u67b6,\u6570\u636e\u5c42\u91c7\u7528Spring Data JPA,\u9075\u5faa\u4e86\u6807\u51c6\u7684JPA\u8bbf\u95ee\u89c4\u8303,\u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\u5b58\u50a8,\u9ed8\u8ba4\u4f7f\u7528Hibernate\u5b9e\u73b0,\u66f4\u52a0\u65b9\u4fbf\u7684\u652f\u6301\u8868\u7684\u81ea\u52a8\u521b\u5efa\u66f4\u65b0"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e86\u9ad8\u6548\u7684\u4e8b\u4ef6\u5f02\u6b65\u9a71\u52a8\u6a21\u578b, \u652f\u6301\u591a\u79cd\u81ea\u5b9a\u4e49\u4e8b\u4ef6,\u4f7f\u5f97\u540c\u6b65\u4efb\u52a1\u5904\u7406\u7684\u5ef6\u65f6\u63a7\u5236\u57283s,8C16G\u7684\u5355\u673a\u80fd\u591f\u652f\u63016K\u7684\u540c\u6b65\u4efb\u52a1"),(0,l.kt)("li",{parentName:"ul"},"NacosSync\u9664\u4e86\u5355\u673a\u90e8\u7f72,\u4e5f\u63d0\u4f9b\u4e86\u9ad8\u53ef\u7528\u7684\u96c6\u7fa4\u90e8\u7f72\u6a21\u5f0f,NacosSync\u662f\u65e0\u72b6\u6001\u8bbe\u8ba1,\u5c06\u4efb\u52a1\u7b49\u72b6\u6001\u6570\u636e\u8fc1\u79fb\u5230\u4e86\u6570\u636e\u5e93,\u4f7f\u5f97\u96c6\u7fa4\u6269\u5c55\u975e\u5e38\u65b9\u4fbf"),(0,l.kt)("li",{parentName:"ul"},"\u62bd\u8c61\u51fa\u4e86Sync\u7ec4\u4ef6\u6838\u5fc3\u63a5\u53e3,\u901a\u8fc7\u6ce8\u89e3\u5bf9\u540c\u6b65\u7c7b\u578b\u8fdb\u884c\u533a\u5206,\u4f7f\u5f97\u5f00\u53d1\u8005\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u6839\u636e\u81ea\u5df1\u9700\u6c42,\u53bb\u6269\u5c55\u4e0d\u540c\u6ce8\u518c\u4e2d\u5fc3,\u76ee\u524d\u5df2\u652f\u6301\u7684\u540c\u6b65\u7c7b\u578b:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Nacos\u6570\u636e\u540c\u6b65\u5230Nacos"),(0,l.kt)("li",{parentName:"ul"},"Zookeeper\u6570\u636e\u540c\u6b65\u5230Nacos"),(0,l.kt)("li",{parentName:"ul"},"Nacos\u6570\u636e\u540c\u6b65\u5230Zookeeper"),(0,l.kt)("li",{parentName:"ul"},"Eureka\u6570\u636e\u540c\u6b65\u5230Nacos"),(0,l.kt)("li",{parentName:"ul"},"Consul\u6570\u636e\u540c\u6b65\u5230Nacos",(0,l.kt)("a",{name:"d384971e"}))))),(0,l.kt)("h2",{id:"\u7cfb\u7edf\u6a21\u5757\u67b6\u6784"},"\u7cfb\u7edf\u6a21\u5757\u67b6\u6784:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB12VPaJVzqK1RjSZSgXXcpAVXa-886-752.png",alt:"image.png"}),(0,l.kt)("br",null),"\u63a7\u5236\u53f0",(0,l.kt)("br",null),"\u63d0\u4f9b\u4e86\u7cbe\u7b80Web\u64cd\u4f5c\u63a7\u5236\u53f0,\u652f\u6301\u56fd\u9645\u5316:",(0,l.kt)("br",null)),(0,l.kt)("a",{name:"b3408d06"}),"### \u540c\u6b65\u4efb\u52a1\u7ba1\u7406\u9875\u9762 ![](https://img.alicdn.com/tfs/TB1eSYyJ5LaK1RjSZFxXXamPFXa-2866-1064.png)",(0,l.kt)("a",{name:"091bc34b"}),"### \u6ce8\u518c\u4e2d\u5fc3\u7ba1\u7406\u9875\u9762",(0,l.kt)("a",{name:"53fdb015"}),"## ![image.png](https://img.alicdn.com/tfs/TB1e_rdJ7voK1RjSZFNXXcxMVXa-2876-1124.png)",(0,l.kt)("a",{name:"f6a633db"}),"## \u4f7f\u7528\u573a\u666f: * \u591a\u4e2a\u7f51\u7edc\u4e92\u901a\u7684Region\u4e4b\u95f4\u670d\u52a1\u5171\u4eab,\u6253\u7834Region\u4e4b\u95f4\u7684\u670d\u52a1\u8c03\u7528\u9650\u5236",(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1Mo6yJ4jaK1RjSZKzXXXVwXXa-1136-798.png",alt:"image.png"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53cc\u5411\u540c\u6b65\u529f\u80fd,\u652f\u6301Dubbo+Zookeeper\u670d\u52a1\u5e73\u6ed1\u8fc1\u79fb\u5230Dubbo+Nacos,\u4eab\u53d7Nacos\u66f4\u52a0\u4f18\u8d28\u7684\u670d\u52a1")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1Dza8J9zqK1RjSZPxXXc4tVXa-1728-838.png",alt:"image.png"})),(0,l.kt)("h1",{id:"\u4f7f\u7528\u6d41\u7a0b"},"\u4f7f\u7528\u6d41\u7a0b"),(0,l.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,l.kt)("p",null,"\u542f\u52a8\u670d\u52a1\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u5b89\u88c5\u4e0b\u9762\u7684\u670d\u52a1\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"64bit OS: Linux/Unix/Mac/Windows supported, Linux/Unix/Mac recommended."),(0,l.kt)("li",{parentName:"ul"},"64bit JDK 1.8+:\xa0",(0,l.kt)("a",{parentName:"li",href:"http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html"},"downloads"),",\xa0",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/cd/E19182-01/820-7851/inst_cli_jdk_javahome_t/"},"JAVA_HOME settings"),"."),(0,l.kt)("li",{parentName:"ul"},"Maven 3.2.x+:\xa0",(0,l.kt)("a",{parentName:"li",href:"https://maven.apache.org/download.cgi"},"downloads"),",\xa0",(0,l.kt)("a",{parentName:"li",href:"https://maven.apache.org/settings.html"},"settings"),"."),(0,l.kt)("li",{parentName:"ul"},"MySql 5.6.+")),(0,l.kt)("h2",{id:"\u83b7\u53d6\u5b89\u88c5\u5305"},"\u83b7\u53d6\u5b89\u88c5\u5305"),(0,l.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u5f0f\u53ef\u4ee5\u83b7\u5f97 NacosSync \u7684\u5b89\u88c5\u5305\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u4e0b\u8f7d NacosSync \u7684\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-sync/releases"},"nacosSync.${version}.zip")),(0,l.kt)("li",{parentName:"ul"},"\u4ece GitHub \u4e0a\u4e0b\u8f7d NacosSync \u7684\u6e90\u7801\u8fdb\u884c\u6784\u5efa")),(0,l.kt)("p",null,"Package:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-basic"},"cd nacosSync/\nmvn clean package -U\n")),(0,l.kt)("p",null,"\u76ee\u6807\u6587\u4ef6\u7684\u8def\u5f84\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-basic"},"nacos-sync/nacossync-distribution/target/nacosSync.${version}.zip\n")),(0,l.kt)("p",null,"\u89e3\u538b\u5b89\u88c5\u5305\u4e4b\u540e,\u5de5\u7a0b\u7684\u6587\u4ef6\u76ee\u5f55\u7ed3\u6784\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-basic"},"nacosSync\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 NOTICE\n\u251c\u2500\u2500 bin\n\u2502\xa0\xa0 \u251c\u2500\u2500 nacosSync.sql\n\u2502\xa0\xa0 \u251c\u2500\u2500 shutdown.sh\n\u2502\xa0\xa0 \u2514\u2500\u2500 startup.sh\n\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 application.properties\n\u2502\xa0\xa0 \u2514\u2500\u2500 logback-spring.xml\n\u251c\u2500\u2500 logs\n\u2514\u2500\u2500 nacosSync-server.${version}.jar\n")),(0,l.kt)("h2",{id:"\u521d\u59cb\u5316\u6570\u636e\u5e93"},"\u521d\u59cb\u5316\u6570\u636e\u5e93"),(0,l.kt)("p",null,"\u7cfb\u7edf\u9ed8\u8ba4\u914d\u7f6e\u7684\u6570\u636e\u5e93\u662fMysql\uff0c\u4e5f\u80fd\u652f\u6301\u5176\u4ed6\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u3002\n1.\u5efa\u5e93\uff0c\u7f3a\u7701\u7684\u6570\u636e\u5e93\u540d\u5b57\u4e3a\u201cnacos_Sync\u201d\u3002\n2.\u6570\u636e\u5e93\u8868\u4e0d\u9700\u8981\u5355\u72ec\u521b\u5efa\uff0c\u9ed8\u8ba4\u4f7f\u7528\u4e86hibernate\u7684\u81ea\u52a8\u5efa\u8868\u529f\u80fd\u3002\n3.\u5982\u679c\u4f60\u7684\u73af\u5883\u4e0d\u652f\u6301\u81ea\u52a8\u5efa\u8868\uff0c\u53ef\u4ee5\u4f7f\u7528\u7cfb\u7edf\u81ea\u5e26\u7684sql\u811a\u672c\u5efa\u8868\uff0c\u811a\u672c\u653e\u5728bin\u76ee\u5f55\u4e0b\u3002"),(0,l.kt)("h2",{id:"\u6570\u636e\u5e93\u914d\u7f6e"},"\u6570\u636e\u5e93\u914d\u7f6e"),(0,l.kt)("p",null,"\u6570\u636e\u5e93\u7684\u914d\u7f6e\u6587\u4ef6\u653e\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"conf/application.properties"),"\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-basic"},"spring.datasource.url=jdbc:mysql://127.0.0.1:3306/nacos_sync?characterEncoding=utf8\nspring.datasource.username=root\nspring.datasource.password=root\n")),(0,l.kt)("h2",{id:"\u542f\u52a8\u670d\u52a1\u5668"},"\u542f\u52a8\u670d\u52a1\u5668"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ nacosSync/bin:\nsh startup.sh  restart\n")),(0,l.kt)("h2",{id:"\u68c0\u67e5\u7cfb\u7edf\u72b6\u6001"},"\u68c0\u67e5\u7cfb\u7edf\u72b6\u6001"),(0,l.kt)("p",null,"1.\u68c0\u67e5\u7cfb\u7edf\u65e5\u5fd7"),(0,l.kt)("p",null,"\u65e5\u5fd7\u7684\u8def\u5f84\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"nacosSync/logs/nacosSync.log"),"\uff0c\u68c0\u67e5\u662f\u5426\u6709\u5f02\u5e38\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"2.\u68c0\u67e5\u7cfb\u7edf\u7aef\u53e3"),(0,l.kt)("p",null,"\u7f3a\u7701\u7684\u7cfb\u7edf\u7aef\u53e3\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"8081"),"\uff0c\u4f60\u53ef\u4ee5\u81ea\u5df1\u5b9a\u4e49\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"application.properties"),"\u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$netstat -ano|grep 8081\ntcp        0      0 0.0.0.0:8081                0.0.0.0:*                   LISTEN      off (0.00/0/0)\n")),(0,l.kt)("h2",{id:"\u63a7\u5236\u53f0"},"\u63a7\u5236\u53f0"),(0,l.kt)("p",null,"\u8bbf\u95ee\u8def\u5f84\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"http://127.0.0.1:8081/#/serviceSync\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1EKbkJ3HqK1RjSZFEXXcGMXXa-2866-606.png",alt:"image.png"})),(0,l.kt)("p",null,"\u5982\u679c\u68c0\u67e5\u6ca1\u6709\u95ee\u9898\uff0cNacosSync \u5df2\u7ecf\u6b63\u5e38\u542f\u52a8\u4e86\uff0cNacosSync \u7684\u90e8\u7f72\u7ed3\u6784\uff1a",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB107nfJ9zqK1RjSZFjXXblCFXa-1412-342.png",alt:"image.png"})),(0,l.kt)("h2",{id:"\u5f00\u59cb\u8fc1\u79fb"},"\u5f00\u59cb\u8fc1\u79fb"),(0,l.kt)("h3",{id:"\u8fc1\u79fb\u4fe1\u606f"},"\u8fc1\u79fb\u4fe1\u606f"),(0,l.kt)("p",null,"Dubbo\u670d\u52a1\u7684\u90e8\u7f72\u4fe1\u606f\uff1a",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1Ci_eJ4TpK1RjSZR0XXbEwXXa-938-700.png",alt:"image.png"})),(0,l.kt)("p",null,"\u8fc1\u79fb\u7684\u670d\u52a1\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Service Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Group Name"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"com.alibaba.nacos.api.DemoService"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"zk")))),(0,l.kt)("h3",{id:"\u6dfb\u52a0\u6ce8\u518c\u4e2d\u5fc3\u96c6\u7fa4\u4fe1\u606f"},"\u6dfb\u52a0\u6ce8\u518c\u4e2d\u5fc3\u96c6\u7fa4\u4fe1\u606f"),(0,l.kt)("p",null,"1.\u70b9\u51fb\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\u7684\u201c\u96c6\u7fa4\u914d\u7f6e\u201d\u6309\u94ae\uff0c\u65b0\u589e\u52a0\u4e00\u4e2a\u96c6\u7fa4\uff0c\u5148\u589e\u52a0\u4e00\u4e2aZookeeper\u96c6\u7fa4\uff0c\u9009\u62e9\u96c6\u7fa4\u7c7b\u578b\u4e3aZK\u3002\n",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1oJDnJ7voK1RjSZFwXXciCFXa-2870-1130.png",alt:"image.png"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u96c6\u7fa4\u540d\u5b57\u53ef\u4ee5\u81ea\u5b9a\u4e49\uff0c\u4f46\u662f\u4e00\u65e6\u786e\u8ba4\uff0c\u4e0d\u80fd\u88ab\u4fee\u6539\uff0c\u5426\u5219\u57fa\u4e8e\u6b64\u96c6\u7fa4\u589e\u52a0\u7684\u4efb\u52a1\uff0c\u5728 NacosSync \u91cd\u542f\u540e\uff0c\u5c06\u4e0d\u4f1a\u6062\u590d\u6210\u529f\u3002")),(0,l.kt)("p",null,"2.\u540c\u6837\u7684\u6b65\u9aa4\uff0c\u589e\u52a0NacosSync\u96c6\u7fa4\u3002\n",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1HQPhJVzqK1RjSZFCXXbbxVXa-2846-1042.png",alt:"image.png"})),(0,l.kt)("p",null,"3.\u6dfb\u52a0\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u5728\u5217\u8868\u4e2d\u67e5\u8be2\u5230\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1AX6fJVYqK1RjSZLeXXbXppXa-2864-824.png",alt:"image.png"})),(0,l.kt)("h3",{id:"\u6dfb\u52a0\u540c\u6b65\u4efb\u52a1"},"\u6dfb\u52a0\u540c\u6b65\u4efb\u52a1"),(0,l.kt)("p",null,"1.\u589e\u52a0\u4e00\u4e2a\u540c\u6b65\u4efb\u52a1\uff0c\u4eceZookeeper\u96c6\u7fa4\u540c\u6b65\u5230Nacos\u96c6\u7fa4\uff0c\u540c\u6b65\u7684\u7c92\u5ea6\u662f\u670d\u52a1\uff0cZookeeper\u96c6\u7fa4\u5219\u79f0\u4e3a\u6e90\u96c6\u7fa4\uff0cNacos\u96c6\u7fa4\u79f0\u4e3a\u76ee\u6807\u96c6\u7fa4\u3002\n",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1tF_fJVYqK1RjSZLeXXbXppXa-2838-1138.png",alt:"imagesd.png"})),(0,l.kt)("p",null,"\u6dfb\u52a0\u5b8c\u6210\u4e4b\u540e\uff0c\u53ef\u4ee5\u5728\u670d\u52a1\u540c\u6b65\u5217\u8868\u4e2d\uff0c\u67e5\u770b\u5df2\u6dfb\u52a0\u7684\u540c\u6b65\u4efb\u52a1\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1l6uJJ9zqK1RjSZPcXXbTepXa-2824-570.png",alt:"image.png"})),(0,l.kt)("p",null,"2.\u540c\u6b65\u5b8c\u6210\u4e4b\u540e\uff0c\u68c0\u67e5\u4e0b\u6570\u636e\u662f\u5426\u540c\u6b65\u6210\u529f\u5230Nacos\u96c6\u7fa4\uff0c\u53ef\u4ee5\u901a\u8fc7Nacos\u7684\u63a7\u5236\u53f0\u8fdb\u884c\u67e5\u8be2\u3002\n",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1tPneJ4TpK1RjSZR0XXbEwXXa-2872-828.png",alt:"image.png"})),(0,l.kt)("p",null,"3.\u6b64\u523b\uff0c\u6570\u636e\u5df2\u7ecf\u6210\u529f\u4eceZookeeper\u96c6\u7fa4\u540c\u6b65\u5230\u4e86Nacos\u96c6\u7fa4\uff0c\u90e8\u7f72\u7ed3\u6784\u5982\u4e0b\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB14kriJ6TpK1RjSZKPXXa3UpXa-1724-772.png",alt:"image.png"})),(0,l.kt)("h3",{id:"dubbo-\u5ba2\u6237\u7aef\u8fde\u63a5\u5230-nacos-\u6ce8\u518c\u4e2d\u5fc3"},"Dubbo \u5ba2\u6237\u7aef\u8fde\u63a5\u5230 Nacos \u6ce8\u518c\u4e2d\u5fc3"),(0,l.kt)("h4",{id:"dubbo-consumer\u5ba2\u6237\u7aef\u8fc1\u79fb"},"Dubbo Consumer\u5ba2\u6237\u7aef\u8fc1\u79fb"),(0,l.kt)("p",null,"Dubbo \u5df2\u7ecf\u652f\u6301Nacos\u6ce8\u518c\u4e2d\u5fc3\uff0c\u652f\u6301\u7684\u7248\u672c\u4e3a2.5+\uff0c\u9700\u8981\u589e\u52a0\u4e00\u4e2aNacos\u6ce8\u518c\u4e2d\u5fc3\u7684Dubbo\u6269\u5c55\u63d2\u4ef6\u4f9d\u8d56\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-basic"},"<dependency>\n      <groupId>com.alibaba</groupId>\n      <artifactId>dubbo-registry-nacos</artifactId>\n            <version>0.0.2</version>\n</dependency>\n")),(0,l.kt)("p",null,"\u589e\u52a0Nacos\u5ba2\u6237\u7aef\u7684\u4f9d\u8d56\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-basic"},"<dependency>\n        <groupId>com.alibaba.nacos</groupId>\n        <artifactId>nacos-client</artifactId>\n        <version>0.6.2</version>\n</dependency>\n")),(0,l.kt)("p",null,"\u914d\u7f6eDubbo Consumer\u7684Dubbo\u914d\u7f6e\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"consumer.yaml"),"\uff0c\u8ba9\u5ba2\u6237\u7aef\u80fd\u591f\u627e\u5230Nacos\u96c6\u7fa4\u3002 "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-basic"},"spring:\n  application:\nname: dubbo-consumer\ndemo:\n  service:\n    version: 1.0.0\n    group: zk\ndubbo:\n  registry:\n    address: nacos://127.0.0.1:8848\n")),(0,l.kt)("p",null,"\u4e0d\u9700\u8981\u4fee\u6539\u4ee3\u7801\uff0c\u914d\u7f6e\u66f4\u65b0\u5b8c\u6bd5\u4e4b\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u91cd\u542f\u4f60\u7684\u5e94\u7528\uff0c\u4f7f\u4e4b\u751f\u6548\u4e86\u3002"),(0,l.kt)("p",null,"Consumer\u53d1\u5e03\u5b8c\u6210\u4e4b\u540e\uff0c\u76ee\u524d\u7684\u90e8\u7f72\u7ed3\u6784\u5982\u4e0b\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB181fkJ3HqK1RjSZFEXXcGMXXa-1734-878.png",alt:"image.png"})),(0,l.kt)("h4",{id:"dubbo-provider\u8fc1\u79fb"},"Dubbo Provider\u8fc1\u79fb"),(0,l.kt)("p",null,"\u5728\u5347\u7ea7Provider\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u786e\u4fdd\u8be5Provider\u53d1\u5e03\u7684\u670d\u52a1\uff0c\u90fd\u5df2\u7ecf\u914d\u7f6e\u5728 NacosSync \u4e2d\uff0c\u540c\u6b65\u7684\u65b9\u5f0f\u4e3a\u4eceNacos\u540c\u6b65\u5230Zookeeper\uff0c\u56e0\u4e3aProvider\u5347\u7ea7\u8fde\u63a5\u5230Nacos\u4e4b\u540e\uff0c\u9700\u8981\u786e\u4fdd\u8001\u7684Dubbo Consumer\u5ba2\u6237\u7aef\u80fd\u591f\u5728Zookeeper\u4e0a\u8ba2\u9605\u5230\u8be5Provider\u7684\u5730\u5740\uff0c\u73b0\u5728\uff0c\u6211\u4eec\u589e\u52a0\u4e00\u4e2a\u540c\u6b65\u4efb\u52a1\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1pdDnJ7voK1RjSZFwXXciCFXa-2872-1060.png",alt:"image.png"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB19Ey_J6DpK1RjSZFrXXa78VXa-2842-660.png",alt:"image.png"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1aNacos\u670d\u52a1\u540c\u6b65\u5230Zookeeper\uff0c\u4e0d\u9700\u8981\u586b\u5199\u7248\u672c\u53f7\uff0c\u4f60\u5728\u9009\u62e9\u6e90\u96c6\u7fa4\u7684\u65f6\u5019\uff0c\u7248\u672c\u53f7\u7684\u8f93\u5165\u6846\u4f1a\u81ea\u52a8\u9690\u85cf\u6389\u3002")),(0,l.kt)("p",null,"\u540c\u6b65\u4efb\u52a1\u5b8c\u6210\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u5347\u7ea7Provider\u4e86\uff0c\u5347\u7ea7Provider\u7684\u65b9\u6cd5\uff0c\u53c2\u8003\u5347\u7ea7Consumer\u7684\u6b65\u9aa4\u3002"),(0,l.kt)("h3",{id:"\u65b0\u7684\u90e8\u7f72\u7ed3\u6784"},"\u65b0\u7684\u90e8\u7f72\u7ed3\u6784"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u5347\u7ea7\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u6709\u65b0\u8001\u7248\u672c\u7684\u5ba2\u6237\u7aef\u540c\u65f6\u5b58\u5728\uff0c\u90e8\u7f72\u7ed3\u6784\u5982\u4e0b\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB14Y_iJ3HqK1RjSZFPXXcwapXa-1728-838.png",alt:"image.png"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709\u7684\u5ba2\u6237\u7aef\u8fc1\u79fb\u5b8c\u6210\u4e4b\u540e\uff0c\u90e8\u7f72\u7ed3\u6784\u5982\u4e0b\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1Cg2dJYvpK1RjSZPiXXbmwXXa-1466-864.png",alt:"image.png"})),(0,l.kt)("p",null,"\u73b0\u5728\uff0cZookeeper\u96c6\u7fa4\uff0cNacosSync\u96c6\u7fa4\u5c31\u53ef\u4ee5\u4e0b\u7ebf\u4e86\u3002"),(0,l.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u540c\u6b65\u4efb\u52a1\u6dfb\u52a0\u4e4b\u540e\uff0c\u9700\u8981\u786e\u4fdd\u4e0b\u670d\u52a1\u662f\u5426\u6210\u529f\u540c\u6b65\u5230\u76ee\u6807\u96c6\u7fa4\uff0c\u53ef\u4ee5\u901a\u8fc7\u76ee\u6807\u96c6\u7fa4\u7684\u63a7\u5236\u53f0\u8fdb\u884c\u67e5\u8be2\u3002"),(0,l.kt)("li",{parentName:"ul"},"NacosSync \u652f\u6301\u9ad8\u53ef\u7528\u96c6\u7fa4\u6a21\u5f0f\u90e8\u7f72\uff0c\u4f60\u53ea\u9700\u8981\u628a\u6570\u636e\u5e93\u914d\u7f6e\u6210\u540c\u4e00\u4e2a\u5373\u53ef\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u68b3\u7406\u4e0d\u6e05\u695a\u8ba2\u9605\u548c\u53d1\u5e03\u7684\u670d\u52a1\uff0c\u5efa\u8bae\u53ef\u4ee5\u628a\u670d\u52a1\u90fd\u505a\u53cc\u5411\u540c\u6b65\u3002"),(0,l.kt)("li",{parentName:"ul"},"Dubbo \u5ba2\u6237\u7aef\u76ee\u524d\u4e0d\u652f\u6301 Nacos \u7684\u6743\u91cd\u529f\u80fd\uff0c\u5982\u679c\u4f60\u7528\u5230\u4e86\u6743\u91cd\u529f\u80fd\uff0c\u9700\u8981\u91cd\u65b0\u8003\u8651\u4e00\u4e0b\u65b9\u6848\u662f\u5426\u5408\u9002\u3002")))}m.isMDXComponent=!0}}]);