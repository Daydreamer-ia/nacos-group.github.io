import"./hoisted.xAUjAW8J.js";import"./index.PDhEm6KS.js";const f="_top";class H extends HTMLElement{_current=this.querySelector('a[aria-current="true"]');minH=parseInt(this.dataset.minH||"2",10);maxH=parseInt(this.dataset.maxH||"3",10);set current(e){e!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),e.setAttribute("aria-current","true"),this._current=e)}constructor(){super();const e=[...this.querySelectorAll("a")],s=t=>{if(t instanceof HTMLHeadingElement){if(t.id===f)return!0;const o=t.tagName[1];if(o){const n=parseInt(o,10);if(n>=this.minH&&n<=this.maxH)return!0}}return!1},r=t=>{if(!t)return null;const o=t;for(;t;){if(s(t))return t;for(t=t.previousElementSibling;t?.lastElementChild;)t=t.lastElementChild;const n=r(t);if(n)return n}return r(o.parentElement)},c=t=>{for(const{isIntersecting:o,target:n}of t){if(!o)continue;const h=r(n);if(!h)continue;const d=e.find(g=>g.hash==="#"+encodeURIComponent(h.id));if(d){this.current=d;break}}},a=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let i;const u=()=>{i&&i.disconnect(),i=new IntersectionObserver(c,{rootMargin:this.getRootMargin()}),a.forEach(t=>i.observe(t))};u();const l=window.requestIdleCallback||(t=>setTimeout(t,1));let m;window.addEventListener("resize",()=>{i&&i.disconnect(),clearTimeout(m),m=setTimeout(()=>l(u),200)})}getRootMargin(){const e=document.querySelector("header")?.getBoundingClientRect().height||0,s=this.querySelector("summary")?.getBoundingClientRect().height||0,r=e+s+60,c=r+24,a=document.documentElement.clientHeight;return`-${r}px 0% ${c-a}px`}}customElements.define("markdown-toc",H);
