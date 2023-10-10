"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[1954],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Quick Start for Nacos Spring Projects",keywords:["Nacos","Spring","quick start"],description:"This quick start introduces how to enable Nacos configuration management and service discovery features for your Spring project."},i="Quick Start for Nacos Spring Projects",c={unversionedId:"quick-start-spring",id:"quick-start-spring",title:"Quick Start for Nacos Spring Projects",description:"This quick start introduces how to enable Nacos configuration management and service discovery features for your Spring project.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/quick-start-spring.md",sourceDirName:".",slug:"/quick-start-spring",permalink:"/en/docs/next/quick-start-spring",draft:!1,tags:[],version:"current",frontMatter:{title:"Quick Start for Nacos Spring Projects",keywords:["Nacos","Spring","quick start"],description:"This quick start introduces how to enable Nacos configuration management and service discovery features for your Spring project."}},s={},l=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Enable Configuration Service",id:"enable-configuration-service",level:2},{value:"Enable Service Discovery",id:"enable-service-discovery",level:2},{value:"Related Projects",id:"related-projects",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start-for-nacos-spring-projects"},"Quick Start for Nacos Spring Projects"),(0,r.kt)("p",null,"This quick start introduces how to enable Nacos configuration management and service discovery features for your Spring project."),(0,r.kt)("p",null,"For more details about Nacos Spring Boot: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-spring-project/wiki/Nacos-Spring-Project-0.3.1-%E6%96%B0%E5%8A%9F%E8%83%BD%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C"},"nacos-spring-project"),"."),(0,r.kt)("p",null,"The quick start includes two samples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How to enable Nacos server and Nacos Spring configuration modules to implement dynamic configuration management;"),(0,r.kt)("li",{parentName:"ul"},"How to enable Nacos server and Nacos Spring service discovery modules to implement service registration and discovery.")),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"Follow instructions in ",(0,r.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/quick-start.html"},"Nacos Quick Start")," to download Nacos and start the Nacos server."),(0,r.kt)("h2",{id:"enable-configuration-service"},"Enable Configuration Service"),(0,r.kt)("p",null,"Once you start the Nacos server, you can follow the steps below to enable the Nacos configuration management service for your Spring project. "),(0,r.kt)("p",null,"Sample project: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-examples/tree/master/nacos-spring-example/nacos-spring-config-example"},"nacos-spring-config-example")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add the Nacos Spring dependency.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>com.alibaba.nacos</groupId>\n    <artifactId>nacos-spring-context</artifactId>\n    <version>${latest.version}</version>\n</dependency>\n")),(0,r.kt)("p",null,'The the latest version can be available in maven repositories such as "',(0,r.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.alibaba.nacos/nacos-spring-context"},"mvnrepository.com"),'".'),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"@EnableNacosConfig")," annotation to enable the configuration service. In the code below, ",(0,r.kt)("inlineCode",{parentName:"li"},"@NacosPropertySource")," is used to load the configuration source whose  ",(0,r.kt)("inlineCode",{parentName:"li"},"dataId")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"example")," , and autorefresh is also enabled:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'@Configuration\n@EnableNacosConfig(globalProperties = @NacosProperties(serverAddr = "127.0.0.1:8848"))\n@NacosPropertySource(dataId = "example", autoRefreshed = true)\npublic class NacosConfiguration {\n\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Specify the property value for the ",(0,r.kt)("inlineCode",{parentName:"li"},"@NacosValue")," annotation of Nacos. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'@Controller\n@RequestMapping("config")\npublic class ConfigController {\n\n    @NacosValue(value = "${useLocalCache:false}", autoRefreshed = true)\n    private boolean useLocalCache;\n\n    @RequestMapping(value = "/get", method = GET)\n    @ResponseBody\n    public boolean get() {\n        return useLocalCache;\n    }\n}\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start Tomcat and call  ",(0,r.kt)("inlineCode",{parentName:"p"},"curl http://localhost:8080/config/get")," to get configuration information. Because no configuration has been published, a ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"message is returned.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now you can call ",(0,r.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/open-api.html"},"Nacos Open API")," to publish a configruation to the Nacos server. Assume the dataId is ",(0,r.kt)("inlineCode",{parentName:"p"},"example"),", and content is ",(0,r.kt)("inlineCode",{parentName:"p"},"useLocalCache=true"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -X POST "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=example&group=DEFAULT_GROUP&content=useLocalCache=true"\n')),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Access ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:8080/config/get"),"again, and you get a return message of ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", indicating that the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"useLocalCache"),"in your application has been updated.")),(0,r.kt)("h2",{id:"enable-service-discovery"},"Enable Service Discovery"),(0,r.kt)("p",null,"Now you would like to enable the service discovery function of Nacos in your Spring project. "),(0,r.kt)("p",null,"Sampe project: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-examples/tree/master/nacos-spring-example/nacos-spring-discovery-example"},"nacos-spring-discovery-example")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add the Nacos Spring dependency.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>com.alibaba.nacos</groupId>\n    <artifactId>nacos-spring-context</artifactId>\n    <version>${latest.version}</version>\n</dependency>\n")),(0,r.kt)("p",null,'The the latest version can be available in maven repositories such as "',(0,r.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.alibaba.nacos/nacos-spring-context"},"mvnrepository.com"),'".'),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"@EnableNacosDiscovery")," annotation to enable the service discovery function of Nacos:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'@Configuration\n@EnableNacosDiscovery(globalProperties = @NacosProperties(serverAddr = "127.0.0.1:8848"))\npublic class NacosConfiguration {\n\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"@NacosInjected")," to inject a Nacos ",(0,r.kt)("inlineCode",{parentName:"li"},"NamingService")," instance:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'@Controller\n@RequestMapping("discovery")\npublic class DiscoveryController {\n\n    @NacosInjected\n    private NamingService namingService;\n\n    @RequestMapping(value = "/get", method = GET)\n    @ResponseBody\n    public List<Instance> get(@RequestParam String serviceName) throws NacosException {\n        return namingService.getAllInstances(serviceName);\n    }\n}\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start Tomcat and call ",(0,r.kt)("inlineCode",{parentName:"p"},"curl http://localhost:8080/discovery/get?serviceName=example"),", and the return value is an empty JSON array ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Call ",(0,r.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/open-api.html"},"Nacos Open API")," to register a service called ",(0,r.kt)("inlineCode",{parentName:"p"},"example"),"to the Nacos Server."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance?serviceName=example&ip=127.0.0.1&port=8080'\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Access ",(0,r.kt)("inlineCode",{parentName:"li"},"curl http://localhost:8080/discovery/get?serviceName=example"),"again, and you will get the following return:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[\n  {\n    "instanceId": "127.0.0.1#8080#DEFAULT#example",\n    "ip": "127.0.0.1",\n    "port": 8080,\n    "weight": 1.0,\n    "healthy": true,\n    "cluster": {\n      "serviceName": null,\n      "name": "",\n      "healthChecker": {\n        "type": "TCP"\n      },\n      "defaultPort": 80,\n      "defaultCheckPort": 80,\n      "useIPPort4Check": true,\n      "metadata": {}\n    },\n    "service": null,\n    "metadata": {}\n  }\n]\n')),(0,r.kt)("h2",{id:"related-projects"},"Related Projects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos"},"Nacos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-project"},"Nacos Spring")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-boot-project"},"Nacos Spring Boot")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/alibaba/spring-cloud-alibaba"},"Spring Cloud Alibaba"))))}d.isMDXComponent=!0}}]);