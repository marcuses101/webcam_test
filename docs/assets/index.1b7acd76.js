(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function M(){}function R(e){return e()}function F(){return Object.create(null)}function A(e){e.forEach(R)}function Q(e){return typeof e=="function"}function V(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function X(e){return Object.keys(e).length===0}function m(e,t){e.appendChild(t)}function q(e,t,n){e.insertBefore(t,n||null)}function D(e){e.parentNode.removeChild(e)}function Y(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function G(e){return document.createTextNode(e)}function E(){return G(" ")}function N(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function O(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Z(e){return Array.from(e.childNodes)}function ee(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function H(e,t){for(let n=0;n<e.options.length;n+=1){const l=e.options[n];if(l.__value===t){l.selected=!0;return}}e.selectedIndex=-1}function te(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}let $;function L(e){$=e}function ne(){if(!$)throw new Error("Function called outside component initialization");return $}function oe(e){ne().$$.on_mount.push(e)}const x=[],S=[],I=[],U=[],re=Promise.resolve();let T=!1;function le(){T||(T=!0,re.then(J))}function j(e){I.push(e)}const P=new Set;let C=0;function J(){const e=$;do{for(;C<x.length;){const t=x[C];C++,L(t),ie(t.$$)}for(L(null),x.length=0,C=0;S.length;)S.pop()();for(let t=0;t<I.length;t+=1){const n=I[t];P.has(n)||(P.add(n),n())}I.length=0}while(x.length);for(;U.length;)U.pop()();T=!1,P.clear(),L(e)}function ie(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}const ce=new Set;function ue(e,t){e&&e.i&&(ce.delete(e),e.i(t))}function se(e,t,n,l){const{fragment:o,on_mount:r,on_destroy:c,after_update:_}=e.$$;o&&o.m(t,n),l||j(()=>{const f=r.map(R).filter(Q);c?c.push(...f):A(f),e.$$.on_mount=[]}),_.forEach(j)}function ae(e,t){const n=e.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function fe(e,t){e.$$.dirty[0]===-1&&(x.push(e),le(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function de(e,t,n,l,o,r,c,_=[-1]){const f=$;L(e);const a=e.$$={fragment:null,ctx:null,props:r,update:M,not_equal:o,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:F(),dirty:_,skip_bound:!1,root:t.target||f.$$.root};c&&c(a.root);let p=!1;if(a.ctx=n?n(e,t.props||{},(h,y,...b)=>{const w=b.length?b[0]:y;return a.ctx&&o(a.ctx[h],a.ctx[h]=w)&&(!a.skip_bound&&a.bound[h]&&a.bound[h](w),p&&fe(e,h)),y}):[],a.update(),p=!0,A(a.before_update),a.fragment=l?l(a.ctx):!1,t.target){if(t.hydrate){const h=Z(t.target);a.fragment&&a.fragment.l(h),h.forEach(D)}else a.fragment&&a.fragment.c();t.intro&&ue(e.$$.fragment),se(e,t.target,t.anchor,t.customElement),J()}L(f)}class he{$destroy(){ae(this,1),this.$destroy=M}$on(t,n){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(t){this.$$set&&!X(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function W(e,t,n){const l=e.slice();return l[13]=t[n].label,l[14]=t[n].value,l}function z(e){let t,n=e[13]+"",l,o;return{c(){t=v("option"),l=G(n),t.__value=o=e[14],t.value=t.__value},m(r,c){q(r,t,c),m(t,l)},p(r,c){c&16&&n!==(n=r[13]+"")&&ee(l,n),c&16&&o!==(o=r[14])&&(t.__value=o,t.value=t.__value)},d(r){r&&D(t)}}}function K(e){let t;return{c(){t=v("h3"),t.textContent="Loading"},m(n,l){q(n,t,l)},d(n){n&&D(t)}}}function _e(e){let t,n,l,o,r,c,_,f,a,p,h,y,b,w,k=e[4],i=[];for(let s=0;s<k.length;s+=1)i[s]=z(W(e,k,s));let u=!e[3]&&K();return{c(){t=v("main"),n=v("h1"),n.textContent="Webcam test",l=E(),o=v("select");for(let s=0;s<i.length;s+=1)i[s].c();r=E(),c=v("div"),u&&u.c(),_=E(),f=v("video"),f.innerHTML='<track kind="captions"/>',a=E(),p=v("button"),p.textContent="snap",h=E(),y=v("canvas"),e[1]===void 0&&j(()=>e[6].call(o)),O(f,"class","svelte-armym3"),O(p,"class","svelte-armym3"),O(c,"class","stack svelte-armym3"),O(y,"class","svelte-armym3")},m(s,g){q(s,t,g),m(t,n),m(t,l),m(t,o);for(let d=0;d<i.length;d+=1)i[d].m(o,null);H(o,e[1]),m(t,r),m(t,c),u&&u.m(c,null),m(c,_),m(c,f),e[8](f),m(c,a),m(c,p),m(t,h),m(t,y),e[9](y),b||(w=[N(o,"change",e[6]),N(o,"change",e[7]),N(p,"click",e[5])],b=!0)},p(s,[g]){if(g&16){k=s[4];let d;for(d=0;d<k.length;d+=1){const B=W(s,k,d);i[d]?i[d].p(B,g):(i[d]=z(B),i[d].c(),i[d].m(o,null))}for(;d<i.length;d+=1)i[d].d(1);i.length=k.length}g&18&&H(o,s[1]),s[3]?u&&(u.d(1),u=null):u||(u=K(),u.c(),u.m(c,_))},i:M,o:M,d(s){s&&D(t),Y(i,s),u&&u.d(),e[8](null),e[9](null),b=!1,A(w)}}}function me(e,t,n){let l,o,r,c=null,_=[],f;async function a(i){try{if(!i)return;n(3,c=await navigator.mediaDevices.getUserMedia({video:{deviceId:i,width:{ideal:1080}},audio:!1})),n(2,o.srcObject=c,o),o.play()}catch(u){console.log(u)}}async function p(){try{const i=await navigator.mediaDevices.enumerateDevices();n(4,_=i.filter(({kind:u})=>u==="videoinput").map(({deviceId:u,label:s})=>({value:u,label:s}))),n(1,f=_[0].value)}catch(i){console.log(i)}}oe(()=>{p()});function h(){const{videoHeight:i,videoWidth:u}=o;n(0,r.width=u,r),n(0,r.height=i,r),l.drawImage(o,0,0,u,i);const s=r.toDataURL("image/jpeg"),g=document.createElement("a");g.href=s,g.setAttribute("download",`webcam-test ${new Date().toDateString()}`),g.click(),g.remove()}function y(){f=te(this),n(1,f),n(4,_)}const b=()=>console.log(f);function w(i){S[i?"unshift":"push"](()=>{o=i,n(2,o)})}function k(i){S[i?"unshift":"push"](()=>{r=i,n(0,r)})}return e.$$.update=()=>{e.$$.dirty&1&&(l=r==null?void 0:r.getContext("2d")),e.$$.dirty&2&&a(f)},[r,f,o,c,_,h,y,b,w,k]}class pe extends he{constructor(t){super(),de(this,t,me,_e,V,{})}}new pe({target:document.getElementById("app")});
