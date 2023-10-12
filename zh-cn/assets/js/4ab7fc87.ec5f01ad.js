"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[7652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=r,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},34725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={title:"Nacos \u591a\u4e2a\u65b0\u7248\u672c\u53d1\u5e03\uff0crust-sdk\u5b8c\u5168\u9002\u914d\u5b8c\u6210",keywords:["2.2.1","rust-sdk"],description:"Nacos \u591a\u4e2a\u65b0\u7248\u672c\u53d1\u5e03\uff0crust-sdk\u5b8c\u5168\u9002\u914d\u5b8c\u6210"},o="Nacos \u591a\u4e2a\u65b0\u7248\u672c\u53d1\u5e03\uff0crust-sdk\u5b8c\u5168\u9002\u914d\u5b8c\u6210",s={permalink:"/zh-cn/blog/2.2.1-release",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/2.2.1-release.md",title:"Nacos \u591a\u4e2a\u65b0\u7248\u672c\u53d1\u5e03\uff0crust-sdk\u5b8c\u5168\u9002\u914d\u5b8c\u6210",description:"Nacos \u591a\u4e2a\u65b0\u7248\u672c\u53d1\u5e03\uff0crust-sdk\u5b8c\u5168\u9002\u914d\u5b8c\u6210",date:"2023-10-12T09:42:31.000Z",formattedDate:"2023\u5e7410\u670812\u65e5",tags:[],readingTime:8.435,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Nacos \u591a\u4e2a\u65b0\u7248\u672c\u53d1\u5e03\uff0crust-sdk\u5b8c\u5168\u9002\u914d\u5b8c\u6210",keywords:["2.2.1","rust-sdk"],description:"Nacos \u591a\u4e2a\u65b0\u7248\u672c\u53d1\u5e03\uff0crust-sdk\u5b8c\u5168\u9002\u914d\u5b8c\u6210"},prevItem:{title:"Nacos 2.2.0 \u7248\u672c\u53d1\u5e03\uff0c\u65b0\u589e\u591a\u79cd\u63d2\u4ef6\u652f\u6301",permalink:"/zh-cn/blog/2.2.0-release"},nextItem:{title:"Nacos 2.2.2\u53d1\u5e03\uff0c\u4f18\u5316\u542f\u52a8\u4f53\u9a8c\u548c\u9274\u6743\u63d0\u793a",permalink:"/zh-cn/blog/2.2.2-release"}},c={authorsImageUrls:[]},l=[{value:"\u65b0\u7248\u672c\u53d1\u5e03",id:"\u65b0\u7248\u672c\u53d1\u5e03",level:2},{value:"Nacos 2.2.1",id:"nacos-221",level:3},{value:"Nacos 1.4.5",id:"nacos-145",level:3},{value:"Nacos-Rust-SDK 0.2.3",id:"nacos-rust-sdk-023",level:3},{value:"Nacos-Go-SDK 2.2.0",id:"nacos-go-sdk-220",level:3},{value:"\u793e\u533a",id:"\u793e\u533a",level:2},{value:"\u65b0Committer",id:"\u65b0committer",level:3},{value:"\u5c55\u671b",id:"\u5c55\u671b",level:2},{value:"2.X \u540e\u7eed\u8ba1\u5212",id:"2x-\u540e\u7eed\u8ba1\u5212",level:3},{value:"3.0 \u8ba1\u5212",id:"30-\u8ba1\u5212",level:3},{value:"About Nacos",id:"about-nacos",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Nacos\u793e\u533a\u65b0\u5e74\u540e\u597d\u4e8b\u4e0d\u65ad\uff0c\u5148\u662f\u5e74\u521d\u5728\u7535\u5b50\u6807\u51c6\u96622022\u5e74\u5ea6\u5f00\u6e90\u6210\u719f\u5ea6\u8bc4\u4f30\u4e2d\u88ab\u8bc4\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"\u4f18\u79c0\u8d30\u7ea7"),"\uff0c\u540c\u65f6\u83b7\u5f97\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"CSDN\u5e74\u5ea6\u5f00\u53d1\u8005\u5f71\u54cd\u529b\u9879\u76ee"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"InfoQ \u5341\u5927\u5f00\u6e90\u65b0\u9510\u9879\u76ee"),"\uff1b\u968f\u540e\u53c8\u53d1\u5e03\u4e86\u8bb8\u591a\u65b0\u7248\u672c\uff0c\u5176\u4e2d\u5305\u62ecNacos 2.2.1\u3001 1.4.5\u3001rust-sdk 0.2.3 \u4ee5\u53ca go-sdk 2.2.0\u7248\u672c\uff1b\u5728\u540c\u5b66\u4eec\u7684\u79ef\u6781\u53c2\u4e0e\u4e0b\uff0c\u793e\u533a\u4e5f\u662f\u53c8\u589e\u52a0\u4e863\u4f4d\u65b0\u7684Committer\u3002"),(0,r.kt)("h2",{id:"\u65b0\u7248\u672c\u53d1\u5e03"},"\u65b0\u7248\u672c\u53d1\u5e03"),(0,r.kt)("h3",{id:"nacos-221"},"Nacos 2.2.1"),(0,r.kt)("p",null,"Nacos 2.2.1\u7248\u672c\u4e3b\u8981\u9488\u5bf9Nacos\u793e\u533a\u4e8e12\u6708\u53d1\u5e03\u76842.2.0\u7248\u672c\u8fdb\u884c\u4e86\u4e00\u7cfb\u5217\u7684\u5347\u7ea7\u4ee5\u53ca\u4fee\u590d\uff0c\u4f8b\u5982\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/logback-adapter"},"logback-adapter"),"\u9002\u914d\u4e86\u65b0\u7248\u672c\u7684logback\u3001\u5347\u7ea7\u4e86grpc\u3001jraft\u7b49\u4f9d\u8d56\uff0c\u4ece\u800c\u5347\u7ea7\u4e86\u5bf9\u5e94\u7684netty\u548crocksdb\u7248\u672c\uff0c\u89e3\u51b3\u65e7\u7248\u672cnetty\u7684\u5b89\u5168\u6f0f\u6d1e\u548crocksdb\u5bf9\u4e8eARM64\u3001M1\u82af\u7247\u67b6\u6784\u7684\u76f4\u63a5\u652f\u6301\u3002\n\u529f\u80fd\u65b9\u9762\uff0c\u65b0\u589e\u4e00\u4e2aBeta\u529f\u80fd\uff0c\u652f\u6301Grpc\u7684TLS\u529f\u80fd\uff0c\u7528\u6237\u53ef\u5728\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u5206\u522b\u52a0\u8f7dCA\u6587\u4ef6\uff0c\u4fdd\u8bc1\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u52a0\u5bc6\u3002"),(0,r.kt)("p",null,"\u5728\u5ba2\u6237\u7aef\u5c42\u9762\uff0c\u65b0\u589e\u4e86\u670d\u52a1\u53d1\u73b0\u6a21\u5757\u5bf9Aliyun STS\u9274\u6743\u6a21\u5f0f\u7684\u652f\u6301\uff0c\u4ee5\u53ca\u5bf9GraalVM\u7684\u652f\u6301\u3002"),(0,r.kt)("p",null,"\u63d2\u4ef6\u65b9\u9762\uff0c\u4e3a\u591a\u6570\u636e\u6e90\u63d2\u4ef6\u6dfb\u52a0\u4e86\u6253\u5370SQL\u7684\u529f\u80fd\uff0c\u65b9\u9762\u63d2\u4ef6\u5f00\u53d1\u8005\u6216\u4f7f\u7528\u8005\u83b7\u5f97\u63d2\u4ef6\u6240\u751f\u6210\u7684SQL\uff0c\u51cf\u5c11\u6392\u67e5\u95ee\u9898\u7684\u65f6\u95f4\uff1b\n\u540c\u65f6\u5bf9\u9ed8\u8ba4\u9274\u6743\u63d2\u4ef6\u8fdb\u884c\u4e86\u4e00\u5b9a\u91cd\u6784\uff0c\u79fb\u9664\u4e86\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"jjwt"),"\u7684\u4f9d\u8d56\u540c\u65f6\u63d0\u5347\u6027\u80fd\u3001\u79fb\u9664",(0,r.kt)("inlineCode",{parentName:"p"},"token.secret.key"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"nacos.core.auth.server.identity.key")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"nacos.core.auth.server.identity.value"),"\u7684\u9ed8\u8ba4\u503c\u5e76\u63d0\u9192\u7528\u6237\u914d\u7f6e\u81ea\u5b9a\u4e49\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"token.secret.key"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"nacos.core.auth.server.identity.key")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"nacos.core.auth.server.identity.value"),"\u4ee5\u63d0\u9ad8\u5b89\u5168\u6027\uff0c\u5177\u4f53\u60c5\u51b5\u8bf7\u67e5\u770b",(0,r.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/blog/announcement-token-secret-key.html"},"\u98ce\u9669\u516c\u544a"),"\u3002"),(0,r.kt)("p",null,"\u6613\u7528\u6027\u65b9\u9762\uff0c\u65b0\u589e\u901a\u8fc7\u914d\u7f6e\u5185\u5bb9\u68c0\u7d22\u914d\u7f6e\u7684\u529f\u80fd\uff0c\u4f46\u8be5\u529f\u80fd",(0,r.kt)("strong",{parentName:"p"},"\u4f1a\u635f\u8017\u5927\u91cf\u6027\u80fd"),"\uff0c\u56e0\u6b64\u4ece\u5185\u90e8\u8fdb\u884c\u4e86\u9650\u6d41\uff0c\u4e5f\u8bf7\u7528\u6237\u5c3d\u91cf\u907f\u514d\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"2.2.1 \u7248\u672c\u66f4\u591a\u5177\u4f53\u53d8\u66f4\u5185\u5bb9\u53ef\u53c2\u8003\u53d8\u66f4\u65e5\u5fd7\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"## feature\n[#9276] Add search config by content.\n[#9703] add catalog v2 API to support list instances which is un-enabled.\n[#9710] Support prometheus-sd basic auth.\n[#9888] Beta support Grpc TLS feature.\n[#10062] Naming support aliyun STS auth.\n\n## Enhancement&Refactor\n[#9510] Add sql log print function.\n[#9646] Replace concatenated strings with placeholders.\n[#9708] Clean expired and invalid connections for HTTP client.\n[#9783] Handle public namespaceId as default namespaceId for publish and query config for V2 http api.\n[#9837] Enhance Grpc connected time when cluster started to load snapshot quickly.\n[#9859] Refactor default auth plugin, use custom JWT instead of jjwt.\n[#9860] Adapt logback 1.4.5 by SPI.\n[#9885] Add prometheus api exception handling.\n[#9949] Use Grpc replace all Http request between servers.\n[#9951] Judge the message whether `null` for metadata processor.\n[#10084] Client use Async appender to print log.\n\n## BugFix\n[#9621] Fix Config Client server check always up problem.\n[#9728] Fix prometheus http sd only return public namespace problem.\n[#9732] Fix namespace v2 api auth not work problem.\n[#9734] Fix http login url without default port problem.\n[#9795] Fix export config failure problem for non admin user after opening auth.\n[#9816] Fix redo data is different from server when register and unregister service with concurrency.\n[#9819] Fix update password failure problem after use nginx.\n[#9825] Fix config histroy page paged problem.\n[#9861] Fix auth check before distro filter.\n[#9862] Fix LDAP login failed.\n[#9943] Fix Config cas update can't work when using derby database.\n[#10014] Clear confused logic about namespace properties.\n[#10038] Fix load failover file failure.\n\n## Dependency\n[#9504][#9767] Upgeade-spring-boot version to 2.6.14.\n[#9789] Upgrade jraft version to 1.3.12.\n[#9772] Upgrade Grpc version to 1.50.2.\n[#9985] Replace flatten-maven-plugin with easyj-maven-plugin.\n[#10091] Upgrade snakeYaml to 2.0.\n")),(0,r.kt)("h3",{id:"nacos-145"},"Nacos 1.4.5"),(0,r.kt)("p",null,"Nacos 1.4.5\u7248\u672c\u57fa\u4e8e1.4.4\u7248\u672c\uff0c\u5c06\u90e8\u5206\u5408\u5e76\u57282.X\u7684\u95ee\u9898\u548c\u4f18\u5316\uff0c\u540c\u6b65\u5230\u6700\u65b0\u76841.X\u7248\u672c\u4e2d\uff0c\u5177\u4f53\u5185\u5bb9\u53ef\u67e5\u770b\u53d8\u66f4\u65e5\u5fd7\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"# Enhancement\n[#9064] Enhance error message and error code by merging #9045 and #8881 into v1.x.\n[#10089] Enhance STS auth for naming and async client log into v1.x.\n\n# BugFix\n[#3720] Fix not admin user can change others password by api.\n[#8979] Fix some ui problem by merging #8787\u3001#8156 and #7364 into the v1.\n[#9020] Fix startup failed without prefix CUSTOM_SEARCH_LOCATIONS.\n\n# Dependency\n[#8541] Upgrade spring-boot version to 2.6.8.\n")),(0,r.kt)("h3",{id:"nacos-rust-sdk-023"},"Nacos-Rust-SDK 0.2.3"),(0,r.kt)("p",null,"Nacos-Rust-SDK \u5728\u5e74\u524d\u5df2\u7ecf\u5b8c\u6210\u4e86\u5bf9\u914d\u7f6e\u4e2d\u5fc3\u7684\u529f\u80fd\u9002\u914d\uff0c \u7ecf\u8fc7\u793e\u533a\u540c\u5b66\u7684\u79ef\u6781\u8d21\u732e\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-sdk-rust/releases/tag/v0.2.3"},"Nacos-Rust-SDK 0.2.3"),"\u7248\u672c\u7ec8\u4e8e\u5b8c\u6210\u4e86\u6240\u6709\u529f\u80fd\u7684\u9002\u914d\uff0c\u540c\u65f6\u8fd8\u80fd\u591f\u7ed1\u5b9a\u5230nodejs\u4e2d\u4f7f\u7528\u3002\u6b22\u8fce\u6b63\u5728\u4f7f\u7528rust\u7684\u540c\u5b66\u4f7f\u7528\uff0c\u5e76\u53cd\u9988\u610f\u89c1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"* enhance: add some debug log by @onewe\n* chore: some logic optimization. by @CherishCai\n* add some unit tests by @onewe\n* chore: Optimize and Unified code.\n* ci: fix codecov tarpaulin with 0.22.0\n* chore: try exclude tls openssl by @CherishCai\n* [ISSUES #100] Change: naming api register_instance/select_instances by @onewe\n* doc: link to nacos-sdk-rust-binding-node by @CherishCai\n* [ISSUES #102] fix naming changed service log by @onewe\n* [ISSUES #101]  env cq count decrease to 1 by @onewe\n* [ISSUES #107] Add asynchronous api by @onewe\n* chore: upgrade version to 0.2.3 by @CherishCai\n")),(0,r.kt)("h3",{id:"nacos-go-sdk-220"},"Nacos-Go-SDK 2.2.0"),(0,r.kt)("p",null,"Nacos-Go-SDK 2.2.0 \u652f\u6301\u4e86\u6279\u91cf\u6ce8\u518c\u670d\u52a1\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"batchRegister"),"\u63a5\u53e3\uff0c\u540c\u65f6\u4fee\u590d\u4e86\u4e00\u4e9b\u65e7\u7248\u672cbug\uff0c\u5177\u4f53\u5185\u5bb9\u53ef\u67e5\u770b\u53d8\u66f4\u65e5\u5fd7\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"* config center support for disable local cache by @wangdongyun in #565\n* support batch register by @binbin0325 in #573\n* refine grpc_client by @binbin0325 in #574\n* fix MaxInt64 overflows on ARM 32-bits by @bavelee in #575\n* fix panic for rpc errorResponse by @binbin0325 in #577\n* fix QueryInstancesOfService clusters by @binbin0325 in #578\n")),(0,r.kt)("h2",{id:"\u793e\u533a"},"\u793e\u533a"),(0,r.kt)("p",null,"\u611f\u8c22\u793e\u533a\u5c0f\u4f19\u4f34\u7684\u79ef\u6781\u53c2\u4e0e\u548c\u539a\u7231\uff0cNacos\u793e\u533a\u57282022\u5e74\u6536\u83b7\u4e86\u7535\u5b50\u6807\u51c6\u96622022\u5e74\u5ea6\u5f00\u6e90\u6210\u719f\u5ea6\u8bc4\u4f30",(0,r.kt)("inlineCode",{parentName:"p"},"\u4f18\u79c0\u8d30\u7ea7"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"CSDN\u5e74\u5ea6\u5f00\u53d1\u8005\u5f71\u54cd\u529b\u9879\u76ee"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"InfoQ \u5341\u5927\u5f00\u6e90\u65b0\u9510\u9879\u76ee"),"\u7b49\u6b8a\u8363\uff0c\u57282023\u5e74\u4e5f\u5e0c\u671b\u6709\u66f4\u591a\u7684\u5c0f\u4f19\u4f34\u53c2\u4e0e\u5230Nacos\u793e\u533a\u4e2d\uff0c\u8ba9Nacos\u8d8a\u53d8\u8d8a\u597d"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"th",src:"https://cdn.nlark.com/yuque/0/2023/png/1577777/1679042599739-e7841f31-4f74-427c-a6b1-15100019212b.png#averageHue=%23b8b5ae&clientId=ue18ba04c-3f94-4&from=paste&height=640&id=u5c52e5b6&name=image.png&originHeight=1280&originWidth=960&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1848649&status=done&style=none&taskId=u85c6ed43-3b8b-4c06-bf69-f6002f5df35&title=&width=480",alt:"image.png"})),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"th",src:"https://cdn.nlark.com/yuque/0/2023/png/1577777/1679042600206-e0890689-ef18-4dd4-95b6-c3d84375d5d0.png#averageHue=%238088b2&clientId=ue18ba04c-3f94-4&from=paste&height=640&id=ubb66c1c4&name=image.png&originHeight=1280&originWidth=960&originalType=binary&ratio=2&rotation=0&showTitle=false&size=2119680&status=done&style=none&taskId=u83afbd7b-d79b-47c9-b23f-79921c8cb8a&title=&width=480",alt:"image.png"})),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"th",src:"https://cdn.nlark.com/yuque/0/2023/png/1577777/1679042599053-6d168221-bc17-4d88-bfde-bf69375783f8.png#averageHue=%23908a7e&clientId=ue18ba04c-3f94-4&from=paste&height=640&id=uf2bd9bae&name=image.png&originHeight=1280&originWidth=960&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1304756&status=done&style=none&taskId=u9421b95d-37ea-46f2-a439-790f5893431&title=&width=480",alt:"image.png"}))))),(0,r.kt)("h3",{id:"\u65b0committer"},"\u65b0Committer"),(0,r.kt)("p",null,"\u793e\u533a\u4e2d\u65b0\u589e\u4e863\u4f4dCommitter\uff0c\u4ed6\u4eec\u5206\u522b\u4e3aNacos-K8s\u3001Nacos-Rust-SDK\u3001\u4ee5\u53ca\u591a\u6570\u636e\u6e90\u63d2\u4ef6\u4f5c\u51fa\u4e86\u5de8\u5927\u8d21\u732e\u3002\u540c\u65f6\uff0cNacos\u793e\u533a\u4e5f\u8fce\u6765\u4e86\u7b2c\u4e00\u4f4d\u6765\u81ea\u5f00\u6e90\u4e4b\u590f\u7684Committer\u540c\u5b66\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"th",src:"https://cdn.nlark.com/yuque/0/2023/png/1577777/1679042674946-33a8223a-0d8b-4672-813a-322ecf4eb5f8.png#averageHue=%23accae6&clientId=ue18ba04c-3f94-4&from=paste&height=1130&id=ubdd03bac&name=image.png&originHeight=2260&originWidth=1500&originalType=binary&ratio=2&rotation=0&showTitle=false&size=3916282&status=done&style=none&taskId=u476b8ac5-e0eb-482b-bcd4-cd7a3255abb&title=&width=750",alt:"image.png"})),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"th",src:"https://cdn.nlark.com/yuque/0/2023/jpeg/1577777/1679042628935-5dd6dc8f-6a49-495c-89dc-cc8e9501f8e8.jpeg#averageHue=%23a1cae8&clientId=ue18ba04c-3f94-4&from=paste&height=1130&id=udfc8027f&name=%E8%94%A1%E9%B8%BF%E6%96%87-%20%E4%BA%BA%E7%89%A9%E6%B5%B7%E6%8A%A5.jpg&originHeight=2260&originWidth=1500&originalType=binary&ratio=2&rotation=0&showTitle=false&size=2541050&status=done&style=none&taskId=ud5808db0-3ff5-4d00-a136-300aae3292a&title=&width=750",alt:"\u8521\u9e3f\u6587- \u4eba\u7269\u6d77\u62a5.jpg"})),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"th",src:"https://cdn.nlark.com/yuque/0/2023/jpeg/1577777/1679042632980-5d760b63-97b7-4197-aba9-ec37542270c3.jpeg#averageHue=%239ec8e9&clientId=ue18ba04c-3f94-4&from=paste&height=1130&id=uc26a01a1&name=%E9%BB%84%E4%B9%99%E8%BD%A9-%E4%BA%BA%E7%89%A9%E6%B5%B7%E6%8A%A5.jpg&originHeight=2260&originWidth=1500&originalType=binary&ratio=2&rotation=0&showTitle=false&size=2403876&status=done&style=none&taskId=uf56dc19e-f032-4192-ada9-70722bd91d9&title=&width=750",alt:"\u9ec4\u4e59\u8f69-\u4eba\u7269\u6d77\u62a5.jpg"}))))),(0,r.kt)("h2",{id:"\u5c55\u671b"},"\u5c55\u671b"),(0,r.kt)("h3",{id:"2x-\u540e\u7eed\u8ba1\u5212"},"2.X \u540e\u7eed\u8ba1\u5212"),(0,r.kt)("p",null,"\u4ece2021\u5e743\u6708 2.0.0\u6b63\u5f0f\u7248\u53d1\u5e03\u81f3\u4eca\uff0c2.X\u7248\u672c\u5df2\u7ecf\u8d70\u4e86\u63a5\u8fd12\u5e74\u65f6\u95f4\uff0c\u5982\u4eca2.2.1\u7248\u672c\u53d1\u5e03\uff0c\u8bf4\u660e2.X\u7248\u672c\u5df2\u7ecf\u9010\u6e10\u6210\u719f\u7a33\u5b9a\uff0c\u57282.X\u7684\u540e\u7eed\u8ba1\u5212\u4e2d\uff0c\u9664\u4e86\u9f13\u52b1\u793e\u533a\u4e2d\u63d0\u4f9b\u548c\u5b8c\u5584\u5df2\u6709\u7684\u63d2\u4ef6\u591a\u79cd\u5b9e\u73b0\u4ee5\u5916\uff0c\u4f9d\u65e7\u4f1a\u4e3a\u5176\u6613\u7528\u6027\u548c\u6269\u5c55\u6027\u8fdb\u4e00\u6b65\u589e\u5f3a\uff0c\u6dfb\u52a0\u66f4\u591a\u7684\u63d2\u4ef6\u529f\u80fd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bfb\u5740\u63d2\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u53d8\u66f4\u94a9\u5b50\u63d2\u4ef6")),(0,r.kt)("h3",{id:"30-\u8ba1\u5212"},"3.0 \u8ba1\u5212"),(0,r.kt)("p",null,"Nacos\u793e\u533a\u540c\u65f6\u4e5f\u5f00\u542f\u4e86\u5173\u4e8e",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/8UwwD_WxSJINP8Qr_1wogg"},"Nacos3.0"),"\u7684\u7545\u60f3\u548c\u89c4\u5212\uff0cNacos\u5c06\u4f1a\u4ece\u7edf\u4e00\u63a7\u5236\u9762\u3001\u652f\u6301\u56fd\u4ea7\u5316\u3001\u5b58\u50a8\u8ba1\u7b97\u5206\u79bb\u7b49\u65b9\u5411\u8fdb\u4e00\u6b65\u6f14\u8fdbNacos\u7684\u529f\u80fd\u548c\u67b6\u6784\uff0c\u6b22\u8fce\u793e\u533a\u79ef\u6781\u53c2\u4e0e\u5230\u65b0\u7248\u672c\u7684\u5efa\u8bbe\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(97446).Z,width:"2308",height:"792"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/1577777/1660125280551-a2e881fe-d25e-4ebb-a28f-8e56683deef1.png#clientId=uf10cb19a-105c-4&crop=0&crop=0&crop=1&crop=1&from=url&id=Z9to1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=794&originWidth=1650&originalType=binary&ratio=1&rotation=0&showTitle=false&size=185821&status=done&style=none&taskId=u63849e10-1dae-45cb-b559-04d106ebe86&title=#crop=0&crop=0&crop=1&crop=1&id=rUihF&originHeight=794&originWidth=1650&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=",alt:"image.png"})),(0,r.kt)("h2",{id:"about-nacos"},"About Nacos"),(0,r.kt)("p",null,"Nacos \u81f4\u529b\u4e8e\u5e2e\u52a9\u60a8\u53d1\u73b0\u3001\u914d\u7f6e\u548c\u7ba1\u7406\u5fae\u670d\u52a1\u3002Nacos \u63d0\u4f9b\u4e86\u4e00\u7ec4\u7b80\u5355\u6613\u7528\u7684\u7279\u6027\u96c6\uff0c\u5e2e\u52a9\u60a8\u5feb\u901f\u5b9e\u73b0\u52a8\u6001\u670d\u52a1\u53d1\u73b0\u3001\u670d\u52a1\u914d\u7f6e\u3001\u670d\u52a1\u5143\u6570\u636e\u53ca\u6d41\u91cf\u7ba1\u7406\u3002"),(0,r.kt)("p",null,"Nacos \u5e2e\u52a9\u60a8\u66f4\u654f\u6377\u548c\u5bb9\u6613\u5730\u6784\u5efa\u3001\u4ea4\u4ed8\u548c\u7ba1\u7406\u5fae\u670d\u52a1\u5e73\u53f0\u3002 Nacos \u662f\u6784\u5efa\u4ee5\u201c\u670d\u52a1\u201d\u4e3a\u4e2d\u5fc3\u7684\u73b0\u4ee3\u5e94\u7528\u67b6\u6784 (\u4f8b\u5982\u5fae\u670d\u52a1\u8303\u5f0f\u3001\u4e91\u539f\u751f\u8303\u5f0f) \u7684\u670d\u52a1\u57fa\u7840\u8bbe\u65bd\u3002"),(0,r.kt)("p",null,"\u6700\u540e\u6b22\u8fce\u5927\u5bb6\u626b\u7801\u52a0\u5165Nacos\u793e\u533a\u7fa4"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2023/png/1577777/1679276899363-83081d59-67c6-4501-9cf8-0d84ba7c6d7e.png#averageHue=%23c1c2c2&clientId=u9dfeac18-3281-4&from=paste&height=551&id=ubcf45e51&name=image.png&originHeight=1102&originWidth=854&originalType=binary&ratio=2&rotation=0&showTitle=false&size=155261&status=done&style=none&taskId=ud6bea1fe-b003-441b-a810-84435d2aeff&title=&width=427",alt:"image.png"})))}u.isMDXComponent=!0},97446:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/220-roadmap-4f6c43b09ff72f49d669db4d09a9634d.png"}}]);