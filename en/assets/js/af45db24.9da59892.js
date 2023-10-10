/*! For license information please see af45db24.9da59892.js.LICENSE.txt */
(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[1519],{91262:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(67294),s=n(72389);function r(e){let{children:t,fallback:n}=e;return(0,s.Z)()?i.createElement(i.Fragment,null,t?.()):n??null}},35138:(e,t,n)=>{"use strict";n.d(t,{$Q:()=>m,N$:()=>c,zx:()=>o,$_:()=>v,iR:()=>u});var i=n(67294),s=n(94184),r=n.n(s),l=n(81876);const a={type:"primary",link:"",target:"_self"},o=function(e){return void 0===e&&(e=a),i.createElement("a",{className:r()({button:!0,[`button-${e.type}`]:!0}),target:e.target||"_self",href:(0,l.Rg)(e.link,e.language)},e.children)},c=e=>i.createElement("div",{className:r()({bone:!0,[`bone-${e.type}`]:!0})}),m=e=>{const{text:t,img:n}=e,s=r()({bar:!0});return i.createElement("div",{className:s},i.createElement("div",{className:"bar-body"},i.createElement("img",{src:n,className:"front-img"}),i.createElement("div",{className:"bar-title"},i.createElement("span",null,t),i.createElement(c,{type:"light"})),i.createElement("img",{src:n,className:"back-img"})))};var d=n(73935);class h extends i.Component{constructor(e){super(e),this.container=null,this.state={screenIndex:0,visibleNum:1}}componentDidMount(){this.throttleAdjust=(0,l.P2)((()=>{this.setState({visibleNum:this.getVisibleNum()})}),200),window?.addEventListener?.("resize",this.throttleAdjust),this.setState({visibleNum:this.getVisibleNum()})}componentWillUnmount(){window?.removeEventListener?.("resize",this.throttleAdjust)}getVisibleNum=()=>{let e=1;const t=this.container?.getBoundingClientRect().width,n=this.sliderItemChild0?.getBoundingClientRect?this.sliderItemChild0?.getBoundingClientRect().width:d.findDOMNode(this.sliderItemChild0)?.getBoundingClientRect().width;return t&&n&&(e=Math.floor(t/n)),e||1};getListWidth=()=>{let e=0;const{children:t}=this.props,{visibleNum:n}=this.state,s=i.Children.count(t),r=Math.ceil(s/n);if(this.container){const t=this.container?.getBoundingClientRect().width;e=t*r}return e};changeScreen=e=>{const{screenIndex:t}=this.state;e!==t&&this.setState({screenIndex:e})};renderSliderList=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:n}=this.state,s=[],r=i.Children.count(e),l=Math.ceil(r/n);for(let i=0;i<l;i++)s.push(Array.from(e).slice(i*n,(i+1)*n));return i.createElement("div",{className:"slider-list",style:{transform:`translateX(-${t*(this.container&&this.container?.getBoundingClientRect().width||0)}px)`,transition:"transform 500ms ease",width:this.getListWidth()}},s.map(((e,t)=>i.createElement("div",{className:"slider-screen",style:{width:this.container&&this.container?.getBoundingClientRect().width||0},key:t,ref:e=>{this[`sliderScreen${t}`]=e}},e.map(((e,s)=>i.createElement("div",{className:"slider-item",key:s},i.cloneElement(e,{ref:e=>{this[`sliderItemChild${t*n+s}`]=e}}))))))))};renderControl=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:n}=this.state,s=i.Children.count(e),l=Math.ceil(s/n),a=[];for(let o=0;o<l;o++)a.push(i.createElement("span",{key:o,className:r()({"slider-control-item":!0,"slider-control-item-active":o===t}),onClick:this.changeScreen.bind(this,o)}));return i.createElement("div",{className:"slider-control"},a)};render(){return i.createElement("div",{className:"slider",ref:e=>{this.container=e}},this.renderSliderList(),this.renderControl())}}const u=h;i.Component;var g=n(95999),p=n(52263);const f={vision:{title:(0,g.I)({id:"homepage.footerVersionTitle",message:"\u613f\u666f"}),content:(0,g.I)({id:"homepage.footerVersionContent",message:"Nacos \u901a\u8fc7\u63d0\u4f9b\u7b80\u5355\u6613\u7528\u7684\u52a8\u6001\u670d\u52a1\u53d1\u73b0\u3001\u670d\u52a1\u914d\u7f6e\u3001\u670d\u52a1\u5171\u4eab\u4e0e\u7ba1\u7406\u7b49\u670d\u52a1\u57fa\u7840\u8bbe\u65bd\uff0c\u5e2e\u52a9\u7528\u6237\u5728\u4e91\u539f\u751f\u65f6\u4ee3\uff0c\u5728\u79c1\u6709\u4e91\u3001\u6df7\u5408\u4e91\u6216\u8005\u516c\u6709\u4e91\u7b49\u6240\u6709\u4e91\u73af\u5883\u4e2d\uff0c\u66f4\u597d\u7684\u6784\u5efa\u3001\u4ea4\u4ed8\u3001\u7ba1\u7406\u81ea\u5df1\u7684\u5fae\u670d\u52a1\u5e73\u53f0\uff0c\u66f4\u5feb\u7684\u590d\u7528\u548c\u7ec4\u5408\u4e1a\u52a1\u670d\u52a1\uff0c\u66f4\u5feb\u7684\u4ea4\u4ed8\u5546\u4e1a\u521b\u65b0\u7684\u4ef7\u503c\uff0c\u4ece\u800c\u4e3a\u7528\u6237\u8d62\u5f97\u5e02\u573a\u3002"})},documentation:{title:(0,g.I)({id:"homepage.footerDocTitle",message:"\u6587\u6863"}),list:[{text:(0,g.I)({id:"homepage.footerDocListText1",message:"\u6982\u89c8"}),link:"/docs/what-is-nacos",target:""},{text:(0,g.I)({id:"homepage.footerDocListText2",message:"\u5feb\u901f\u5f00\u59cb"}),link:"/docs/quick-start",target:""},{text:(0,g.I)({id:"homepage.footerDocListText3",message:"\u5f00\u53d1\u8005\u6307\u5357"}),link:"/docs/contributing",target:""}]},resources:{title:(0,g.I)({id:"homepage.footerResourcesTitle",message:"\u8d44\u6e90"}),list:[{text:(0,g.I)({id:"homepage.footerResourcesListText1",message:"\u793e\u533a"}),link:"/community/index",target:""},{text:"\u4e91\u670d\u52a1 MSE",link:"https://cn.aliyun.com/product/aliware/mse?spm=nacos-website.topbar.0.0.0",target:"_blank"},{text:"\u4e91\u670d\u52a1 EDAS",link:"https://www.aliyun.com/product/edas?source_type=nacos_pc_20181219",target:"_blank"},{text:"\u4e91\u670d\u52a1 AHAS",link:"https://www.aliyun.com/product/ahas?source_type=nacos_pc_20190225",target:"_blank"}]},copyright:`Copyright \xa9 ${(new Date).getFullYear()} Nacos`},v=e=>{const{logo:t}=e,{i18n:n}=(0,p.Z)(),s=n.currentLocale;return i.createElement("footer",{className:"footer-container"},i.createElement("div",{className:"footer-body"},i.createElement("img",{src:e.logo}),i.createElement("div",{className:"cols-container"},i.createElement("div",{className:"col col-12"},i.createElement("h3",null,f.vision.title),i.createElement("p",null,f.vision.content)),i.createElement("div",{className:"col col-6"},i.createElement("dl",null,i.createElement("dt",null,f.documentation.title),f.documentation.list.map(((e,t)=>i.createElement("dd",{key:t},i.createElement("a",{href:`/${s}${e.link}`,target:e.target||"_self"},e.text)))))),i.createElement("div",{className:"col col-6"},i.createElement("dl",null,i.createElement("dt",null,f.resources.title),f.resources.list.map(((e,t)=>i.createElement("dd",{key:t},i.createElement("a",{href:`/${s}${e.link}`,target:e.target||"_self"},e.text))))))),i.createElement("div",{className:"copyright"},i.createElement("span",null,f.copyright))))}},37954:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var i=n(67294),s=n(95999),r=n(35138),l=n(91262);const a={title:(0,s.I)({id:"homepage.msemapTitle",message:"\u5fae\u670d\u52a1\u5168\u666f\u56fe"})},o=()=>i.createElement(l.Z,null,(()=>i.createElement("section",{className:"msemap-section"},i.createElement("h3",null,a.title),i.createElement(r.N$,{type:"dark"}),i.createElement("div",{id:"mse-arc-container"}))))},81876:(e,t,n)=>{"use strict";n.d(t,{P2:()=>i,Rg:()=>s});const i=(e,t)=>{let n=null;return function(){for(var i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];const l=this;clearTimeout(n),n=setTimeout((()=>{e.apply(l,s)}),t)}},s=(e,t)=>`${e}`.length>1&&/^\/[^/]/.test(`${e}`)?void 0===t?`${window.rootPath||""}${"default"===t?"/zh-cn":""}${e}`:`${window.rootPath||""}${"default"===t?"/zh-cn":`/${t}`}${e}`:e},94184:(e,t)=>{var n;!function(){"use strict";var i={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var l=s.apply(null,n);l&&e.push(l)}}else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)i.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()}}]);