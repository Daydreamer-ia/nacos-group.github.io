"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[2062],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),k=r,m=u["".concat(c,".").concat(k)]||u[k]||d[k]||l;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},48710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"Nacos \u5feb\u901f\u5f00\u59cb",keywords:["Nacos","\u5feb\u901f\u5f00\u59cb"],description:"\u8fd9\u4e2a\u5feb\u901f\u5f00\u59cb\u624b\u518c\u662f\u5e2e\u5fd9\u60a8\u5feb\u901f\u5728\u60a8\u7684\u7535\u8111\u4e0a\uff0c\u4e0b\u8f7d\u3001\u5b89\u88c5\u5e76\u4f7f\u7528 Nacos\u3002"},i="Nacos \u5feb\u901f\u5f00\u59cb",o={unversionedId:"v2/quickstart/quick-start",id:"v2/quickstart/quick-start",title:"Nacos \u5feb\u901f\u5f00\u59cb",description:"\u8fd9\u4e2a\u5feb\u901f\u5f00\u59cb\u624b\u518c\u662f\u5e2e\u5fd9\u60a8\u5feb\u901f\u5728\u60a8\u7684\u7535\u8111\u4e0a\uff0c\u4e0b\u8f7d\u3001\u5b89\u88c5\u5e76\u4f7f\u7528 Nacos\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/v2/quickstart/quick-start.md",sourceDirName:"v2/quickstart",slug:"/v2/quickstart/quick-start",permalink:"/zh-cn/docs/next/v2/quickstart/quick-start",draft:!1,tags:[],version:"current",frontMatter:{title:"Nacos \u5feb\u901f\u5f00\u59cb",keywords:["Nacos","\u5feb\u901f\u5f00\u59cb"],description:"\u8fd9\u4e2a\u5feb\u901f\u5f00\u59cb\u624b\u518c\u662f\u5e2e\u5fd9\u60a8\u5feb\u901f\u5728\u60a8\u7684\u7535\u8111\u4e0a\uff0c\u4e0b\u8f7d\u3001\u5b89\u88c5\u5e76\u4f7f\u7528 Nacos\u3002"},sidebar:"docs",previous:{title:"Nacos \u67b6\u6784",permalink:"/zh-cn/docs/next/v2/architecture"},next:{title:"Nacos Docker \u5feb\u901f\u5f00\u59cb",permalink:"/zh-cn/docs/next/v2/quickstart/quick-start-docker"}},c={},s=[{value:"0.\u7248\u672c\u9009\u62e9",id:"0\u7248\u672c\u9009\u62e9",level:2},{value:"1.\u9884\u5907\u73af\u5883\u51c6\u5907",id:"1\u9884\u5907\u73af\u5883\u51c6\u5907",level:2},{value:"2.\u4e0b\u8f7d\u6e90\u7801\u6216\u8005\u5b89\u88c5\u5305",id:"2\u4e0b\u8f7d\u6e90\u7801\u6216\u8005\u5b89\u88c5\u5305",level:2},{value:"\u4ece Github \u4e0a\u4e0b\u8f7d\u6e90\u7801\u65b9\u5f0f",id:"\u4ece-github-\u4e0a\u4e0b\u8f7d\u6e90\u7801\u65b9\u5f0f",level:3},{value:"\u4e0b\u8f7d\u7f16\u8bd1\u540e\u538b\u7f29\u5305\u65b9\u5f0f",id:"\u4e0b\u8f7d\u7f16\u8bd1\u540e\u538b\u7f29\u5305\u65b9\u5f0f",level:3},{value:"3.\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"3\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",level:2},{value:"4.\u542f\u52a8\u670d\u52a1\u5668",id:"4\u542f\u52a8\u670d\u52a1\u5668",level:2},{value:"Linux/Unix/Mac",id:"linuxunixmac",level:3},{value:"Windows",id:"windows",level:3},{value:"5.\u670d\u52a1\u6ce8\u518c&amp;\u53d1\u73b0\u548c\u914d\u7f6e\u7ba1\u7406",id:"5\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u548c\u914d\u7f6e\u7ba1\u7406",level:2},{value:"\u670d\u52a1\u6ce8\u518c",id:"\u670d\u52a1\u6ce8\u518c",level:3},{value:"\u670d\u52a1\u53d1\u73b0",id:"\u670d\u52a1\u53d1\u73b0",level:3},{value:"\u53d1\u5e03\u914d\u7f6e",id:"\u53d1\u5e03\u914d\u7f6e",level:3},{value:"\u83b7\u53d6\u914d\u7f6e",id:"\u83b7\u53d6\u914d\u7f6e",level:3},{value:"6.\u5173\u95ed\u670d\u52a1\u5668",id:"6\u5173\u95ed\u670d\u52a1\u5668",level:2},{value:"Linux/Unix/Mac",id:"linuxunixmac-1",level:3},{value:"Windows",id:"windows-1",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nacos-\u5feb\u901f\u5f00\u59cb"},"Nacos \u5feb\u901f\u5f00\u59cb"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u5feb\u901f\u5f00\u59cb\u624b\u518c\u662f\u5e2e\u5fd9\u60a8\u5feb\u901f\u5728\u60a8\u7684\u7535\u8111\u4e0a\uff0c\u4e0b\u8f7d\u3001\u5b89\u88c5\u5e76\u4f7f\u7528 Nacos\u3002"),(0,r.kt)("h2",{id:"0\u7248\u672c\u9009\u62e9"},"0.\u7248\u672c\u9009\u62e9"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728Nacos\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/releases"},"release notes"),"\u53ca",(0,r.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/blog/index.html"},"\u535a\u5ba2"),"\u4e2d\u627e\u5230\u6bcf\u4e2a\u7248\u672c\u652f\u6301\u7684\u529f\u80fd\u7684\u4ecb\u7ecd\uff0c\u5f53\u524d\u63a8\u8350\u7684\u7a33\u5b9a\u7248\u672c\u4e3a2.1.1\u3002"),(0,r.kt)("h2",{id:"1\u9884\u5907\u73af\u5883\u51c6\u5907"},"1.\u9884\u5907\u73af\u5883\u51c6\u5907"),(0,r.kt)("p",null,"Nacos \u4f9d\u8d56 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/cd/E19182-01/820-7851/inst_cli_jdk_javahome_t/"},"Java")," \u73af\u5883\u6765\u8fd0\u884c\u3002\u5982\u679c\u60a8\u662f\u4ece\u4ee3\u7801\u5f00\u59cb\u6784\u5efa\u5e76\u8fd0\u884cNacos\uff0c\u8fd8\u9700\u8981\u4e3a\u6b64\u914d\u7f6e ",(0,r.kt)("a",{parentName:"p",href:"https://maven.apache.org/index.html"},"Maven"),"\u73af\u5883\uff0c\u8bf7\u786e\u4fdd\u662f\u5728\u4ee5\u4e0b\u7248\u672c\u73af\u5883\u4e2d\u5b89\u88c5\u4f7f\u7528:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"64 bit OS\uff0c\u652f\u6301 Linux/Unix/Mac/Windows\uff0c\u63a8\u8350\u9009\u7528 Linux/Unix/Mac\u3002"),(0,r.kt)("li",{parentName:"ol"},"64 bit JDK 1.8+\uff1b",(0,r.kt)("a",{parentName:"li",href:"http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html"},"\u4e0b\u8f7d")," & ",(0,r.kt)("a",{parentName:"li",href:"https://docs.oracle.com/cd/E19182-01/820-7851/inst_cli_jdk_javahome_t/"},"\u914d\u7f6e"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"Maven 3.2.x+\uff1b",(0,r.kt)("a",{parentName:"li",href:"https://maven.apache.org/download.cgi"},"\u4e0b\u8f7d")," & ",(0,r.kt)("a",{parentName:"li",href:"https://maven.apache.org/settings.html"},"\u914d\u7f6e"),"\u3002")),(0,r.kt)("h2",{id:"2\u4e0b\u8f7d\u6e90\u7801\u6216\u8005\u5b89\u88c5\u5305"},"2.\u4e0b\u8f7d\u6e90\u7801\u6216\u8005\u5b89\u88c5\u5305"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u6e90\u7801\u548c\u53d1\u884c\u5305\u4e24\u79cd\u65b9\u5f0f\u6765\u83b7\u53d6 Nacos\u3002"),(0,r.kt)("h3",{id:"\u4ece-github-\u4e0a\u4e0b\u8f7d\u6e90\u7801\u65b9\u5f0f"},"\u4ece Github \u4e0a\u4e0b\u8f7d\u6e90\u7801\u65b9\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/alibaba/nacos.git\ncd nacos/\nmvn -Prelease-nacos -Dmaven.test.skip=true clean install -U  \nls -al distribution/target/\n\n// change the $version to your actual path\ncd distribution/target/nacos-server-$version/nacos/bin\n\n")),(0,r.kt)("h3",{id:"\u4e0b\u8f7d\u7f16\u8bd1\u540e\u538b\u7f29\u5305\u65b9\u5f0f"},"\u4e0b\u8f7d\u7f16\u8bd1\u540e\u538b\u7f29\u5305\u65b9\u5f0f"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/releases"},"\u6700\u65b0\u7a33\u5b9a\u7248\u672c")," \u4e0b\u8f7d ",(0,r.kt)("inlineCode",{parentName:"p"},"nacos-server-$version.zip")," \u5305\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  unzip nacos-server-$version.zip \u6216\u8005 tar -xvf nacos-server-$version.tar.gz\n  cd nacos/bin\n")),(0,r.kt)("h2",{id:"3\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"},"3.\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u57282.2.0.1\u548c2.2.1\u7248\u672c\u65f6\uff0c\u5fc5\u987b\u6267\u884c\u6b64\u53d8\u66f4\uff0c\u5426\u5219\u65e0\u6cd5\u542f\u52a8\uff1b\u5176\u4ed6\u7248\u672c\u4e3a\u5efa\u8bae\u8bbe\u7f6e\u3002")),(0,r.kt)("p",null,"\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"conf"),"\u76ee\u5f55\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties"),"\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u8bbe\u7f6e\u5176\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"nacos.core.auth.plugin.nacos.token.secret.key"),"\u503c\uff0c\u8be6\u60c5\u53ef\u67e5\u770b",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/v2/plugin/auth-plugin"},"\u9274\u6743-\u81ea\u5b9a\u4e49\u5bc6\u94a5"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u6587\u6863\u4e2d\u7684\u9ed8\u8ba4\u503c",(0,r.kt)("inlineCode",{parentName:"p"},"SecretKey012345678901234567890123456789012345678901234567890123456789"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"VGhpc0lzTXlDdXN0b21TZWNyZXRLZXkwMTIzNDU2Nzg="),"\u4e3a\u516c\u5f00\u9ed8\u8ba4\u503c\uff0c\u53ef\u7528\u4e8e\u4e34\u65f6\u6d4b\u8bd5\uff0c\u5b9e\u9645\u4f7f\u7528\u65f6\u8bf7",(0,r.kt)("strong",{parentName:"p"},"\u52a1\u5fc5"),"\u66f4\u6362\u4e3a\u81ea\u5b9a\u4e49\u7684\u5176\u4ed6\u6709\u6548\u503c\u3002")),(0,r.kt)("h2",{id:"4\u542f\u52a8\u670d\u52a1\u5668"},"4.\u542f\u52a8\u670d\u52a1\u5668"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6ce8\uff1aNacos\u7684\u8fd0\u884c\u5efa\u8bae\u81f3\u5c11\u57282C4G 60G\u7684\u673a\u5668\u914d\u7f6e\u4e0b\u8fd0\u884c\u3002")),(0,r.kt)("h3",{id:"linuxunixmac"},"Linux/Unix/Mac"),(0,r.kt)("p",null,"\u542f\u52a8\u547d\u4ee4(standalone\u4ee3\u8868\u7740\u5355\u673a\u6a21\u5f0f\u8fd0\u884c\uff0c\u975e\u96c6\u7fa4\u6a21\u5f0f):"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sh startup.sh -m standalone")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662fubuntu\u7cfb\u7edf\uff0c\u6216\u8005\u8fd0\u884c\u811a\u672c\u62a5\u9519\u63d0\u793a[[\u7b26\u53f7\u627e\u4e0d\u5230\uff0c\u53ef\u5c1d\u8bd5\u5982\u4e0b\u8fd0\u884c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bash startup.sh -m standalone")),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("p",null,"\u542f\u52a8\u547d\u4ee4(standalone\u4ee3\u8868\u7740\u5355\u673a\u6a21\u5f0f\u8fd0\u884c\uff0c\u975e\u96c6\u7fa4\u6a21\u5f0f):"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"startup.cmd -m standalone")),(0,r.kt)("h2",{id:"5\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u548c\u914d\u7f6e\u7ba1\u7406"},"5.\u670d\u52a1\u6ce8\u518c&\u53d1\u73b0\u548c\u914d\u7f6e\u7ba1\u7406"),(0,r.kt)("h3",{id:"\u670d\u52a1\u6ce8\u518c"},"\u670d\u52a1\u6ce8\u518c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance?serviceName=nacos.naming.serviceName&ip=20.18.7.10&port=8080'")),(0,r.kt)("h3",{id:"\u670d\u52a1\u53d1\u73b0"},"\u670d\u52a1\u53d1\u73b0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"curl -X GET 'http://127.0.0.1:8848/nacos/v1/ns/instance/list?serviceName=nacos.naming.serviceName'")),(0,r.kt)("h3",{id:"\u53d1\u5e03\u914d\u7f6e"},"\u53d1\u5e03\u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'curl -X POST "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test&content=HelloWorld"')),(0,r.kt)("h3",{id:"\u83b7\u53d6\u914d\u7f6e"},"\u83b7\u53d6\u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'curl -X GET "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test"')),(0,r.kt)("h2",{id:"6\u5173\u95ed\u670d\u52a1\u5668"},"6.\u5173\u95ed\u670d\u52a1\u5668"),(0,r.kt)("h3",{id:"linuxunixmac-1"},"Linux/Unix/Mac"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sh shutdown.sh")),(0,r.kt)("h3",{id:"windows-1"},"Windows"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"shutdown.cmd")),(0,r.kt)("p",null,"\u6216\u8005\u53cc\u51fbshutdown.cmd\u8fd0\u884c\u6587\u4ef6\u3002"))}d.isMDXComponent=!0}}]);