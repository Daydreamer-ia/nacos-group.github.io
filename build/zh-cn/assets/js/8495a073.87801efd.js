"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[5030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),i=c(n),d=o,g=i["".concat(s,".").concat(d)]||i[d]||m[d]||a;return n?r.createElement(g,u(u({ref:t},p),{},{components:n})):r.createElement(g,u({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[i]="string"==typeof e?e:o,u[1]=l;for(var c=2;c<a;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"\u4f7f\u7528Nacos\u5b9e\u73b0Spring Cloud Zuul\u7684\u52a8\u6001\u8def\u7531",keywords:["nacos"],description:"\u4f7f\u7528Nacos\u5b9e\u73b0Spring Cloud Zuul\u7684\u52a8\u6001\u8def\u7531"},u="\u4f7f\u7528Nacos\u5b9e\u73b0Spring Cloud Zuul\u7684\u52a8\u6001\u8def\u7531",l={permalink:"/zh-cn/blog/dynamic-route-zuul-nacos",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/dynamic-route-zuul-nacos.md",title:"\u4f7f\u7528Nacos\u5b9e\u73b0Spring Cloud Zuul\u7684\u52a8\u6001\u8def\u7531",description:"\u4f7f\u7528Nacos\u5b9e\u73b0Spring Cloud Zuul\u7684\u52a8\u6001\u8def\u7531",date:"2023-10-12T09:42:31.000Z",formattedDate:"2023\u5e7410\u670812\u65e5",tags:[],readingTime:4.585,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u4f7f\u7528Nacos\u5b9e\u73b0Spring Cloud Zuul\u7684\u52a8\u6001\u8def\u7531",keywords:["nacos"],description:"\u4f7f\u7528Nacos\u5b9e\u73b0Spring Cloud Zuul\u7684\u52a8\u6001\u8def\u7531"},prevItem:{title:"\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u57fa\u4e8eDNS\u7684\u670d\u52a1\u6ce8\u518c\u4e0e\u53d1\u73b0",permalink:"/zh-cn/blog/dns-sd"},nextItem:{title:"Eureka 2.0 \u5f00\u6e90\u5de5\u4f5c\u5ba3\u544a\u505c\u6b62\uff1f\u522b\u62c5\u5fc3\uff0cANS \u5373\u5c06 C\u4f4d\u5f3a\u52bf\u51fa\u9053\uff01",permalink:"/zh-cn/blog/eureka2"}},s={authorsImageUrls:[]},c=[{value:"\u4e00.\u524d\u8a00",id:"\u4e00\u524d\u8a00",level:3},{value:"\u4e8c.Spring Cloud Zuul\u52a8\u6001\u8def\u7531\u5b9e\u73b0\u601d\u8def",id:"\u4e8cspring-cloud-zuul\u52a8\u6001\u8def\u7531\u5b9e\u73b0\u601d\u8def",level:3},{value:"\u4e09.\u5177\u4f53\u5b9e\u73b0",id:"\u4e09\u5177\u4f53\u5b9e\u73b0",level:3},{value:"1.\u5728zuul-server\u4e2d\u6dfb\u52a0Nacos\u7684\u914d\u7f6e",id:"1\u5728zuul-server\u4e2d\u6dfb\u52a0nacos\u7684\u914d\u7f6e",level:5},{value:"2.\u8bfb\u53d6Nacos\u914d\u7f6e\u4fe1\u606f\u6838\u5fc3\u4ee3\u7801",id:"2\u8bfb\u53d6nacos\u914d\u7f6e\u4fe1\u606f\u6838\u5fc3\u4ee3\u7801",level:5},{value:"3.Zuul\u52a8\u6001\u5237\u65b0\u8def\u7531\u5b9e\u73b0",id:"3zuul\u52a8\u6001\u5237\u65b0\u8def\u7531\u5b9e\u73b0",level:5},{value:"\u56db.\u6f14\u793a",id:"\u56db\u6f14\u793a",level:3},{value:"1.\u4eceNacos github\u5730\u5740pull\u6e90\u7801\uff0c\u914d\u7f6e\u73af\u5883",id:"1\u4ecenacos-github\u5730\u5740pull\u6e90\u7801\u914d\u7f6e\u73af\u5883",level:5},{value:"2.\u542f\u52a8Nacos\uff0c\u914d\u7f6eZuul\u8def\u7531\u4fe1\u606f",id:"2\u542f\u52a8nacos\u914d\u7f6ezuul\u8def\u7531\u4fe1\u606f",level:5},{value:"3.\u542f\u52a8zuul-server\uff0c\u4eceNacos\u52a0\u8f7d\u8def\u7531\u4fe1\u606f\u6d4b\u8bd5",id:"3\u542f\u52a8zuul-server\u4ecenacos\u52a0\u8f7d\u8def\u7531\u4fe1\u606f\u6d4b\u8bd5",level:5},{value:"-------------------&gt;&gt;&gt;DEMO\u6e90\u7801",id:"-------------------demo\u6e90\u7801",level:2}],p={toc:c},i="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(i,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"authors: \u53f6\u5fd7\u8fdc")),(0,o.kt)("h3",{id:"\u4e00\u524d\u8a00"},"\u4e00.\u524d\u8a00"),(0,o.kt)("p",null,"Nacos\u662f\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u7684\u81f4\u529b\u4e8e\u670d\u52a1\u53d1\u73b0\u4e0e\u7ba1\u7406\u3001\u52a8\u6001\u914d\u7f6e\u7ba1\u7406\uff0c\u4ee5\u53ca\u52a8\u6001DNS\u670d\u52a1\u7684\u4e2d\u95f4\u4ef6\uff0c\u76ee\u524d\u5df2\u53d1\u5e03\u81f30.5.0\u7248\u672c\uff0c\u9664\u4e86\u4e0eSpring Cloud\u66f4\u52a0\u7d27\u5bc6\u7ed3\u5408\u4ee5\u5916\uff0c\u8fd8\u4e27\u5fc3\u75c5\u72c2\u5730\u652f\u6301JDK11\u3002\u5982\u679c\u60a8\u76ee\u524d\u7684\u9879\u76ee\u788d\u4e8eEureka\u7684\u6027\u80fd\uff0c\u800c\u53c8\u7f3a\u4e4f\u6210\u672c\u5f15\u8fdbConsul\uff0c\u90a3\u4e48Nacos\u662f\u60a8\u6700\u597d\u7684\u9009\u62e9\u3002\u597d\u4e86\uff0c\u56de\u5230\u6b63\u9898\uff0c\u5728\u4e0a\u5468\u8bb8\u8fdb\u641e\u4e86\u4e00\u4e2a",(0,o.kt)("a",{parentName:"p",href:"http://xujin.org/sc/gw/gw10/"},"\u4f7f\u7528Nacos\u5b9e\u73b0Spring Cloud Gateway\u7684\u52a8\u6001\u8def\u7531"),"\uff0c\u8ba9\u6211\u4eec\u76f4\u89c2\u5730\u611f\u53d7\u5230\u4e86Nacos\u7684\u65e0\u7f1d\u63a5\u5165\u5982\u4e1d\u822c\u987a\u6ed1\uff0c\u4f5c\u4e3aSpring Cloud\u4e2d\u7f51\u5173\u7684\u59cb\u7956Zuul\uff0c\u81ea\u7136\u4e5f\u9700\u8981\u8fd9\u4e00\u8d34\u5fc3\u8d4b\u80fd\u3002"),(0,o.kt)("h3",{id:"\u4e8cspring-cloud-zuul\u52a8\u6001\u8def\u7531\u5b9e\u73b0\u601d\u8def"},"\u4e8c.Spring Cloud Zuul\u52a8\u6001\u8def\u7531\u5b9e\u73b0\u601d\u8def"),(0,o.kt)("p",null,"\u5728\u793e\u533a\u4e66\u7c4d\u300a\u91cd\u65b0\u5b9a\u4e49Spring Cloud\u5b9e\u6218\u300b\u4e2d\u7b2c8\u7ae04\u5c0f\u8282\uff0c\u8be6\u7ec6\u5256\u6790\u4e86Zuul\u7684\u8def\u7531\u914d\u7f6e\u8868\u52a0\u8f7d\u4ee5\u53ca\u5237\u65b0\u539f\u7406\uff0c\u5176\u5927\u81f4\u601d\u60f3\u5c31\u662f\u91cd\u5199SimpleRouteLocator\u7c7b\u7684locateRoutes()\u65b9\u6cd5\uff0c\u540c\u65f6\u5b9e\u73b0RefreshableRouteLocator\u63a5\u53e3\uff0c\u65b9\u6cd5\u4f53\u5f15\u7528\u7236\u7c7b\u7684doRefresh()\u65b9\u6cd5\u3002\u5728\u4e66\u4e2d\u4f7f\u7528DB\u4f5c\u4e3a\u914d\u7f6e\u5b58\u653e\u7684\u4ed3\u5e93\uff0c\u5982\u4eca\u6709\u66f4\u4e3a\u5f3a\u5927\u7684Nacos\uff0c\u53ea\u9700\u8981\u5c06\u4e4b\u524d\u8bfb\u53d6DB\u7684\u903b\u8f91\u6362\u6210\u8bfb\u53d6Nacos\u5373\u53ef\u3002\u7f8e\u4e2d\u4e0d\u8db3\u7684\u662f\uff0c\u7531\u4e8eNacos\u8fd8\u9700\u8fdb\u4e00\u6b65\u5b8c\u5584\uff0c\u76ee\u524d\u5bf9Spring Cloud\u4e2d\u7684\u4e8b\u4ef6\u652f\u6301\u8fd8\u4e0d\u662f\u5f88\u5b8c\u7f8e\uff0c\u52a8\u6001\u5237\u65b0\u53ea\u80fd\u4f9d\u9760Zuul\u7684\u5185\u90e8\u903b\u8f91\u3002"),(0,o.kt)("h3",{id:"\u4e09\u5177\u4f53\u5b9e\u73b0"},"\u4e09.\u5177\u4f53\u5b9e\u73b0"),(0,o.kt)("h5",{id:"1\u5728zuul-server\u4e2d\u6dfb\u52a0nacos\u7684\u914d\u7f6e"},"1.\u5728zuul-server\u4e2d\u6dfb\u52a0Nacos\u7684\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    <dependency>\n        <groupId>com.alibaba.nacos</groupId>\n        <artifactId>nacos-client</artifactId>\n        <version>0.4.0</version>\n    </dependency>\n")),(0,o.kt)("h5",{id:"2\u8bfb\u53d6nacos\u914d\u7f6e\u4fe1\u606f\u6838\u5fc3\u4ee3\u7801"},"2.\u8bfb\u53d6Nacos\u914d\u7f6e\u4fe1\u606f\u6838\u5fc3\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'@Component\npublic class PropertiesAssemble{\n\n    public Map<String, ZuulRoute> getProperties() {\n        Map<String, ZuulRoute> routes = new LinkedHashMap<>();\n        List<ZuulRouteEntity> results = listenerNacos("zuul-server","zuul_route");\n        for (ZuulRouteEntity result : results) {\n            if (StringUtils.isBlank(result.getPath())\n                    /*|| org.apache.commons.lang3.StringUtils.isBlank(result.getUrl())*/) {\n                continue;\n            }\n            ZuulRoute zuulRoute = new ZuulRoute();\n            try {\n                BeanUtils.copyProperties(result, zuulRoute);\n            } catch (Exception e) {\n            }\n            routes.put(zuulRoute.getPath(), zuulRoute);\n        }\n        return routes;\n    }\n\n    private List<ZuulRouteEntity> listenerNacos (String dataId, String group) {\n        try {\n            Properties properties = new Properties();\n            properties.put(PropertyKeyConst.SERVER_ADDR, "localhost:8848");\n            ConfigService configService = NacosFactory.createConfigService(properties);\n            String content = configService.getConfig(dataId, group, 5000);\n            System.out.println("\u4eceNacos\u8fd4\u56de\u7684\u914d\u7f6e\uff1a" + content);\n            //\u6ce8\u518cNacos\u914d\u7f6e\u66f4\u65b0\u76d1\u542c\u5668\uff0c\u7528\u4e8e\u76d1\u542c\u89e6\u53d1\n//            configService.addListener(dataId, group, new Listener()  {\n//                @Override\n//                public void receiveConfigInfo(String configInfo) {\n//                    System.out.println("Nacos\u66f4\u65b0\u4e86\uff01");\n//\n//                }\n//                @Override\n//                public Executor getExecutor() {\n//                    return null;\n//                }\n//            });\n            return JSONObject.parseArray(content, ZuulRouteEntity.class);\n        } catch (NacosException e) {\n            e.printStackTrace();\n        }\n        return new ArrayList<>();\n    }\n}\n')),(0,o.kt)("p",null,'\u76ee\u524d\u7684demo\u5199\u5f97\u6bd4\u8f83\u7b80\u5355\uff0c\u76f4\u63a5\u5c06Nacos\u7684\u9ed8\u8ba4\u5730\u5740\u4e0e\u7aef\u53e3\u5199\u4e86\u8fdb\u6765\uff0cNacos\u5bf9\u4e8e\u914d\u7f6e\u7684\u7ba1\u7406\u6709\u4e24\u4e2a\u5750\u6807\uff0c\u4e00\u662fdataId\uff0c\u4e8c\u662fgroup\uff0c\u672cdemo\u4e2d\u7b14\u8005\u5c06\u5176\u5206\u522b\u547d\u540d\u4e3a"zuul-server","zuul_route"\u3002'),(0,o.kt)("h5",{id:"3zuul\u52a8\u6001\u5237\u65b0\u8def\u7531\u5b9e\u73b0"},"3.Zuul\u52a8\u6001\u5237\u65b0\u8def\u7531\u5b9e\u73b0"),(0,o.kt)("p",null,"\u8fd9\u90e8\u5206\u53ef\u4ee5\u67e5\u770bdemo\u5730\u5740\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SpringCloud/spring-cloud-zuul-nacos"},"https://github.com/SpringCloud/spring-cloud-zuul-nacos"),"\uff0c\u5177\u4f53\u5c31\u4e0d\u8d58\u8ff0\u3002"),(0,o.kt)("h3",{id:"\u56db\u6f14\u793a"},"\u56db.\u6f14\u793a"),(0,o.kt)("h5",{id:"1\u4ecenacos-github\u5730\u5740pull\u6e90\u7801\u914d\u7f6e\u73af\u5883"},"1.\u4eceNacos github\u5730\u5740pull\u6e90\u7801\uff0c\u914d\u7f6e\u73af\u5883"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20181129002717633.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3JpY2tpeWVhdA==,size_16,color_FFFFFF,t_70",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u8fd9\u91cc\u9700\u8981\u5728IDEA\u4e2d\u6dfb\u52a0\u542f\u52a8\u53c2\u6570-Dnacos.standalone=true\n",(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20181129002856286.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3JpY2tpeWVhdA==,size_16,color_FFFFFF,t_70",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,o.kt)("h5",{id:"2\u542f\u52a8nacos\u914d\u7f6ezuul\u8def\u7531\u4fe1\u606f"},"2.\u542f\u52a8Nacos\uff0c\u914d\u7f6eZuul\u8def\u7531\u4fe1\u606f"),(0,o.kt)("p",null,"\u542f\u52a8Nacos\u540e\uff0c\u5728\u6d4f\u89c8\u5668\u8f93\u5165",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8848/nacos/index.html"},"http://localhost:8848/nacos/index.html"),"\u4fbf\u4f1a\u8df3\u8f6c\u5230\u5982\u4e0b\u9875\u9762\uff1a\n",(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/2018112900323177.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3JpY2tpeWVhdA==,size_16,color_FFFFFF,t_70",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u70b9\u51fb\u914d\u7f6e\u5217\u8868\uff0c\u5355\u51fb\u53f3\u4fa7\u7684+\u53f7\u56fe\u6807\uff0c\u4fbf\u53ef\u4ee5\u65b0\u589e\u4e00\u9879\u914d\u7f6e\uff0c\u7531\u4e8e\u8fd9\u91cc\u5df2\u7ecf\u6dfb\u52a0\u597d\u4e86\uff0c\u5c31\u76f4\u63a5\u770b\u4fe1\u606f\uff1a\n",(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20181129003545464.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3JpY2tpeWVhdA==,size_16,color_FFFFFF,t_70",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,o.kt)("h5",{id:"3\u542f\u52a8zuul-server\u4ecenacos\u52a0\u8f7d\u8def\u7531\u4fe1\u606f\u6d4b\u8bd5"},"3.\u542f\u52a8zuul-server\uff0c\u4eceNacos\u52a0\u8f7d\u8def\u7531\u4fe1\u606f\u6d4b\u8bd5"),(0,o.kt)("p",null,"\u542f\u52a8Zuul\u540e\uff0cconsole\u4e2d\u51fa\u73b0\u5982\u4e0b\u4fe1\u606f\uff1a\n",(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20181129003851880.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3JpY2tpeWVhdA==,size_16,color_FFFFFF,t_70",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u5728\u6d4f\u89c8\u5668\u8f93\u5165",(0,o.kt)("a",{parentName:"p",href:"http://localhost:5555/baidu"},"http://localhost:5555/baidu"),",\u51fa\u73b0\u5982\u4e0b\u6548\u679c\uff0c\u76f4\u63a5\u8df3\u8f6c\u5230\u76ee\u6807\u5730\u5740\uff1a\n",(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/2018112900414387.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3JpY2tpeWVhdA==,size_16,color_FFFFFF,t_70",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u6211\u4eec\u73b0\u5728\u5c06Nacos\u4e2d\u7684\u914d\u7f6e\u4fee\u6539\u4e00\u4e0b\uff0c\u5c06",(0,o.kt)("a",{parentName:"p",href:"http://github.com/Lovnx%E6%8D%A2%E6%88%90http://www.baidu.com%EF%BC%8C%E4%BF%AE%E6%94%B9%E5%90%8E%E7%9B%B4%E6%8E%A5%E5%8F%91%E5%B8%83%EF%BC%9A"},"http://github.com/Lovnx\u6362\u6210http://www.baidu.com\uff0c\u4fee\u6539\u540e\u76f4\u63a5\u53d1\u5e03\uff1a"),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20181129004408166.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3JpY2tpeWVhdA==,size_16,color_FFFFFF,t_70",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u6211\u4eec\u4f1a\u5728console\u770b\u5230\uff1a\n",(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20181129004524375.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3JpY2tpeWVhdA==,size_16,color_FFFFFF,t_70",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u5728\u6d4f\u89c8\u5668\u8f93\u5165",(0,o.kt)("a",{parentName:"p",href:"http://localhost:5555/baidu"},"http://localhost:5555/baidu"),",\u51fa\u73b0\u5982\u4e0b\u6548\u679c\uff1a\n",(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20181129004810756.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3JpY2tpeWVhdA==,size_16,color_FFFFFF,t_70",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,o.kt)("h2",{id:"-------------------demo\u6e90\u7801"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/SpringCloud/spring-cloud-zuul-nacos"},"-------------------\x3e>>DEMO\u6e90\u7801")))}m.isMDXComponent=!0}}]);