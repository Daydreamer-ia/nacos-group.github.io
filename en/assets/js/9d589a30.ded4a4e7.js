"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[7318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"Quick Start for Nacos",keywords:["Nacos","Quick start"],description:"This topic is about how to set up and use Nacos."},i="Quick Start for Nacos",s={unversionedId:"v2/quickstart/quick-start",id:"version-1.X/v2/quickstart/quick-start",title:"Quick Start for Nacos",description:"This topic is about how to set up and use Nacos.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.X/v2/quickstart/quick-start.md",sourceDirName:"v2/quickstart",slug:"/v2/quickstart/quick-start",permalink:"/en/docs/1.X/v2/quickstart/quick-start",draft:!1,tags:[],version:"1.X",frontMatter:{title:"Quick Start for Nacos",keywords:["Nacos","Quick start"],description:"This topic is about how to set up and use Nacos."},sidebar:"docs",previous:{title:"Nacos architecture",permalink:"/en/docs/1.X/v2/architecture"},next:{title:"Quick Start for Nacos Docker",permalink:"/en/docs/1.X/v2/quickstart/quick-start-docker"}},l={},c=[{value:"0.Choose Version",id:"0choose-version",level:2},{value:"1.Prerequisites",id:"1prerequisites",level:2},{value:"2.Download &amp; Build from Release",id:"2download--build-from-release",level:2},{value:"1)Download source code from Github",id:"1download-source-code-from-github",level:3},{value:"2)Download run package",id:"2download-run-package",level:3},{value:"3.Setting Configuration",id:"3setting-configuration",level:2},{value:"4.Start Server",id:"4start-server",level:2},{value:"Linux/Unix/Mac",id:"linuxunixmac",level:3},{value:"Windows",id:"windows",level:3},{value:"5.Service &amp; Configuration Management",id:"5service--configuration-management",level:2},{value:"Service registration",id:"service-registration",level:3},{value:"Service discovery",id:"service-discovery",level:3},{value:"Publish config",id:"publish-config",level:3},{value:"Get config",id:"get-config",level:3},{value:"6.Shutdown Servers",id:"6shutdown-servers",level:2},{value:"Linux/Unix/Mac",id:"linuxunixmac-1",level:3},{value:"Windows",id:"windows-1",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start-for-nacos"},"Quick Start for Nacos"),(0,o.kt)("p",null,"This topic is about how to set up and use Nacos."),(0,o.kt)("h2",{id:"0choose-version"},"0.Choose Version"),(0,o.kt)("p",null,"You can see the introduction of each version at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/releases"},"release notes")," or ",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/blog/index.html"},"blog"),", the current recommended version is 2.1.1."),(0,o.kt)("h2",{id:"1prerequisites"},"1.Prerequisites"),(0,o.kt)("p",null,"Before you begin, install the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"64bit OS: Linux/Unix/Mac/Windows supported, Linux/Unix/Mac recommended."),(0,o.kt)("li",{parentName:"ol"},"64bit JDK 1.8+: ",(0,o.kt)("a",{parentName:"li",href:"http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html"},"downloads"),", ",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/cd/E19182-01/820-7851/inst_cli_jdk_javahome_t/"},"JAVA_HOME settings"),"."),(0,o.kt)("li",{parentName:"ol"},"Maven 3.2.x+: ",(0,o.kt)("a",{parentName:"li",href:"https://maven.apache.org/download.cgi"},"downloads"),", ",(0,o.kt)("a",{parentName:"li",href:"https://maven.apache.org/settings.html"},"settings"),".")),(0,o.kt)("h2",{id:"2download--build-from-release"},"2.Download & Build from Release"),(0,o.kt)("p",null,"There are two ways to get Nacos. "),(0,o.kt)("h3",{id:"1download-source-code-from-github"},"1)Download source code from Github"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/alibaba/nacos.git\ncd nacos/\nmvn -Prelease-nacos -Dmaven.test.skip=true clean install -U \nls -al distribution/target/\n\n// change the $version to your actual path\ncd distribution/target/nacos-server-$version/nacos/bin\n")),(0,o.kt)("h3",{id:"2download-run-package"},"2)Download run package"),(0,o.kt)("p",null,"Select the latest stable version from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/releases"},"https://github.com/alibaba/nacos/releases")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  unzip nacos-server-$version.zip  OR tar -xvf nacos-server-$version.tar.gz\n  cd nacos/bin\n")),(0,o.kt)("h2",{id:"3setting-configuration"},"3.Setting Configuration"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Must do this setting in 2.2.0.1 and 2.2.1, otherwise fail to start.")),(0,o.kt)("p",null,"Setting configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"application.properties")," under ",(0,o.kt)("inlineCode",{parentName:"p"},"conf"),"."),(0,o.kt)("p",null,"Setting ",(0,o.kt)("inlineCode",{parentName:"p"},"nacos.core.auth.plugin.nacos.token.secret.key")," parameter\uff0cdetail see ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/1.X/v2/plugin/auth-plugin"},"Authentication-Custom SecretKey"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Attention\uff0cDefault value in Document ",(0,o.kt)("inlineCode",{parentName:"p"},"SecretKey012345678901234567890123456789012345678901234567890123456789")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"VGhpc0lzTXlDdXN0b21TZWNyZXRLZXkwMTIzNDU2Nzg=")," is a public default, ",(0,o.kt)("strong",{parentName:"p"},"only")," should use in test temporary. Please ",(0,o.kt)("strong",{parentName:"p"},"make sure")," to replace it with another valid value when you actually deploy.")),(0,o.kt)("h2",{id:"4start-server"},"4.Start Server"),(0,o.kt)("h3",{id:"linuxunixmac"},"Linux/Unix/Mac"),(0,o.kt)("p",null,"Run the following command to start(standalone means non-cluster mode):"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sh startup.sh -m standalone")),(0,o.kt)("p",null,"If you are using a ubuntu system, or encounter this error message [[symbol not found, try running as follows:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"bash startup.sh -m standalone")),(0,o.kt)("h3",{id:"windows"},"Windows"),(0,o.kt)("p",null,"Run the following command to start(standalone means non-cluster mode):"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cmd startup.cmd -m standalone")),(0,o.kt)("h2",{id:"5service--configuration-management"},"5.Service & Configuration Management"),(0,o.kt)("h3",{id:"service-registration"},"Service registration"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance?serviceName=nacos.naming.serviceName&ip=20.18.7.10&port=8080'")),(0,o.kt)("h3",{id:"service-discovery"},"Service discovery"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"curl -X GET 'http://127.0.0.1:8848/nacos/v1/ns/instance/list?serviceName=nacos.naming.serviceName'")),(0,o.kt)("h3",{id:"publish-config"},"Publish config"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'curl -X POST "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test&content=helloWorld"')),(0,o.kt)("h3",{id:"get-config"},"Get config"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'curl -X GET "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=nacos.cfg.dataId&group=test"    ')),(0,o.kt)("h2",{id:"6shutdown-servers"},"6.Shutdown Servers"),(0,o.kt)("h3",{id:"linuxunixmac-1"},"Linux/Unix/Mac"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sh shutdown.sh")),(0,o.kt)("h3",{id:"windows-1"},"Windows"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cmd shutdown.cmd")),(0,o.kt)("p",null,"Or click the ",(0,o.kt)("inlineCode",{parentName:"p"},"shutdown.cmd")," file operation."))}p.isMDXComponent=!0}}]);