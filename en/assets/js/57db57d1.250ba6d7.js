"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[5957],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={title:"Nacos with Spring Boot Projects",keywords:["Nacos","Spring Boot"],description:"Quick Start for Nacos Spring Boot Projects"},i="Nacos with Spring Boot Projects",s={unversionedId:"v2/ecology/use-nacos-with-spring-boot",id:"version-1.X/v2/ecology/use-nacos-with-spring-boot",title:"Nacos with Spring Boot Projects",description:"Quick Start for Nacos Spring Boot Projects",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.X/v2/ecology/use-nacos-with-spring-boot.md",sourceDirName:"v2/ecology",slug:"/v2/ecology/use-nacos-with-spring-boot",permalink:"/en/docs/1.X/v2/ecology/use-nacos-with-spring-boot",draft:!1,tags:[],version:"1.X",frontMatter:{title:"Nacos with Spring Boot Projects",keywords:["Nacos","Spring Boot"],description:"Quick Start for Nacos Spring Boot Projects"},sidebar:"docs",previous:{title:"Nacos with Spring Projects",permalink:"/en/docs/1.X/v2/ecology/use-nacos-with-spring"},next:{title:"Nacos with Spring Cloud Projects",permalink:"/en/docs/1.X/v2/ecology/use-nacos-with-spring-cloud"}},c={},l=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Enable Configuration Service",id:"enable-configuration-service",level:2},{value:"Enable Service Discovery",id:"enable-service-discovery",level:2},{value:"Related Projects",id:"related-projects",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nacos-with-spring-boot-projects"},"Nacos with Spring Boot Projects"),(0,a.kt)("p",null,"This quick start introduces how to enable Nacos configuration management and service discovery features for your Spring Boot project."),(0,a.kt)("p",null,"For more details about Nacos Spring Boot: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-spring-boot-project/wiki/spring-boot-0.2.2-%E4%BB%A5%E5%8F%8A-0.1.2%E7%89%88%E6%9C%AC%E6%96%B0%E5%8A%9F%E8%83%BD%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C"},"nacos-spring-boot-project"),"."),(0,a.kt)("p",null,"The quick start includes two samples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to enable dynamic configuration updates with Nacos server and nacos-config-spring-boot-starter;"),(0,a.kt)("li",{parentName:"ul"},"How to enable service registration and discovery with Nacos Server and nacos-discovery-spring-boot-starter.")),(0,a.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("p",null,"Follow instructions in ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/1.X/v2/quickstart/quick-start"},"Nacos Quick Start")," to download Nacos and start the Nacos server."),(0,a.kt)("h2",{id:"enable-configuration-service"},"Enable Configuration Service"),(0,a.kt)("p",null,"Once you start the Nacos server, you can follow the steps below to enable the Nacos configuration management service for your Spring Boot project. "),(0,a.kt)("p",null,"Sample project: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-examples/tree/master/nacos-spring-boot-example/nacos-spring-boot-config-example"},"nacos-spring-boot-config-example")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add the Nacos Spring Boot dependency.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>com.alibaba.boot</groupId>\n    <artifactId>nacos-config-spring-boot-starter</artifactId>\n    <version>${latest.version}</version>\n</dependency>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": Version ",(0,a.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.alibaba.boot/nacos-config-spring-boot-starter"},"0.2.x.RELEASE")," is compatible with the Spring Boot 2.0.x line. Version ",(0,a.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.alibaba.boot/nacos-config-spring-boot-starter"},"0.1.x.RELEASE")," is compatible with the Spring Boot 1.x line."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Configure the Nacos server address in ",(0,a.kt)("inlineCode",{parentName:"li"},"application.properties")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nacos.config.server-addr=127.0.0.1:8848\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"@NacosPropertySource")," to load the configuration source whose ",(0,a.kt)("inlineCode",{parentName:"li"},"dataId")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"example")," , and enable autorefresh of configuration updates:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plain"},'@SpringBootApplication\n@NacosPropertySource(dataId = "example", autoRefreshed = true)\npublic class NacosConfigApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(NacosConfigApplication.class, args);\n    }\n}\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Specify the property value of the ",(0,a.kt)("inlineCode",{parentName:"li"},"@NacosValue")," annotation of Nacos.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'@Controller\n@RequestMapping("config")\npublic class ConfigController {\n\n    @NacosValue(value = "${useLocalCache:false}", autoRefreshed = true)\n    private boolean useLocalCache;\n\n    @RequestMapping(value = "/get", method = GET)\n    @ResponseBody\n    public boolean get() {\n        return useLocalCache;\n    }\n}\n')),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start ",(0,a.kt)("inlineCode",{parentName:"p"},"NacosConfigApplication"),"and call ",(0,a.kt)("inlineCode",{parentName:"p"},"curl http://localhost:8080/config/get"),". You will get a return message of ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", as no configuration has been published so far.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Call ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/1.X/v2/guide/user/open-api"},"Nacos Open API")," to publish a configuration to the Nacos server. Assume the dataId is ",(0,a.kt)("inlineCode",{parentName:"p"},"example"),", and the content is ",(0,a.kt)("inlineCode",{parentName:"p"},"useLocalCache=true"),"."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -X POST "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=example&group=DEFAULT_GROUP&content=useLocalCache=true"\n')),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Access ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:8080/config/get"),"again, and the returned value will be",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\uff0cindicating that the value of ",(0,a.kt)("inlineCode",{parentName:"li"},"useLocalCache"),"in your application has been updated.")),(0,a.kt)("h2",{id:"enable-service-discovery"},"Enable Service Discovery"),(0,a.kt)("p",null,"Now you would also like to enable the service discovery feature of Nacos in your Spring Boot project. "),(0,a.kt)("p",null,"Sample project: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-examples/tree/master/nacos-spring-boot-example/nacos-spring-boot-discovery-example"},"nacos-spring-boot-discovery-example")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add the Nacos Spring Boot dependency.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>com.alibaba.boot</groupId>\n    <artifactId>nacos-discovery-spring-boot-starter</artifactId>\n    <version>${latest.version}</version>\n</dependency>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": Version ",(0,a.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.alibaba.boot/nacos-discovery-spring-boot-starter"},"0.2.x.RELEASE")," is compatible with the Spring Boot 2.0.x line. Version ",(0,a.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.alibaba.boot/nacos-discovery-spring-boot-starter"},"0.1.x.RELEASE")," is compatible with the Spring Boot 1.x line."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Configure the Nacos server address in ",(0,a.kt)("inlineCode",{parentName:"li"},"application.properties")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nacos.discovery.server-addr=127.0.0.1:8848\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"@NacosInjected")," to inject a Nacos ",(0,a.kt)("inlineCode",{parentName:"li"},"NamingService")," instance:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'@Controller\n@RequestMapping("discovery")\npublic class DiscoveryController {\n\n    @NacosInjected\n    private NamingService namingService;\n\n    @RequestMapping(value = "/get", method = GET)\n    @ResponseBody\n    public List<Instance> get(@RequestParam String serviceName) throws NacosException {\n        return namingService.getAllInstances(serviceName);\n    }\n}\n\n@SpringBootApplication\npublic class NacosDiscoveryApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(NacosDiscoveryApplication.class, args);\n    }\n}\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start ",(0,a.kt)("inlineCode",{parentName:"p"},"NacosDiscoveryApplication"),"and call ",(0,a.kt)("inlineCode",{parentName:"p"},"curl http://localhost:8080/discovery/get?serviceName=example"),"\uff0cyou will get a return value of an empty JSON array ",(0,a.kt)("inlineCode",{parentName:"p"},"[]"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Call ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/1.X/v2/guide/user/open-api"},"Nacos Open API")," to register a service called ",(0,a.kt)("inlineCode",{parentName:"p"},"example")," to the Nacos server."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance?serviceName=example&ip=127.0.0.1&port=8080'\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Access ",(0,a.kt)("inlineCode",{parentName:"li"},"curl http://localhost:8080/discovery/get?serviceName=example"),"again and you will get the following return:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[\n  {\n    "instanceId": "127.0.0.1-8080-DEFAULT-example",\n    "ip": "127.0.0.1",\n    "port": 8080,\n    "weight": 1.0,\n    "healthy": true,\n    "cluster": {\n      "serviceName": null,\n      "name": "",\n      "healthChecker": {\n        "type": "TCP"\n      },\n      "defaultPort": 80,\n      "defaultCheckPort": 80,\n      "useIPPort4Check": true,\n      "metadata": {}\n    },\n    "service": null,\n    "metadata": {}\n  }\n]\n')),(0,a.kt)("h2",{id:"related-projects"},"Related Projects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos"},"Nacos")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-project"},"Nacos Spring")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-boot-project"},"Nacos Spring Boot")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/alibaba/spring-cloud-alibaba"},"Spring Cloud Alibaba"))))}d.isMDXComponent=!0}}]);