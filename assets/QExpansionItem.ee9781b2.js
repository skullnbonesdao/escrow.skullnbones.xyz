import{cL as Ie,cM as Qe,cB as He,cN as Ye,cO as Ve,P as he,cP as Xe,cQ as ke,cC as Ue,cD as Ze,bZ as U,cR as $e,cS as H,c5 as Be,cT as Le,cU as Z,cV as ae,cp as se,ch as ee,cW as ie,J as X,ah as k,bs as K,aC as W,aQ as J,aF as T,bC as Oe,cX as We,c0 as re,a7 as Ge,cs as Je,cj as et,aT as be,aX as tt,cx as nt,cY as ue,cZ as xe,c_ as Fe,c$ as Re,cc as Ne,O as ne,K as at,b_ as De,bz as it,bT as rt,ck as we}from"./index.4815f946.js";import{u as ot,a as lt,b as ut}from"./QSpace.0389e547.js";import{j as ze,c as oe,b as le,k as st,u as je,l as ct,m as dt,n as ft,o as vt,p as Ce,q as mt,r as gt,a as ht,s as bt,t as yt,v as pt,w as kt,x as Se,y as ve}from"./QSelect.3f4ba8f9.js";import{u as qe}from"./rtl.ce0711a5.js";const ye=e=>{const a=e.decode.bind(e),i=e.encode.bind(e);return{decode:a,encode:i}},xt=e=>a=>{const i=Ie(e,a),{encode:d,decode:n}=ye(i),t=i;return t.decode=(r,f)=>{const g=n(r,f);return Qe(He.Buffer.from(g))},t.encode=(r,f,g)=>{const v=Ye(r,e);return d(v,f,g)},t},wt=xt(8),Ct=e=>{const a=Ve(e),{encode:i,decode:d}=ye(a),n=a;return n.decode=(t,r)=>!!d(t,r),n.encode=(t,r,f)=>{const g=Number(t);return i(g,r,f)},n},Te=e=>{const a=Ie(32,e),{encode:i,decode:d}=ye(a),n=a;return n.decode=(t,r)=>{const f=d(t,r);return new he(f)},n.encode=(t,r,f)=>{const g=t.toBuffer();return i(g,r,f)},n};class St extends Error{constructor(a){super(a)}}class qt extends St{constructor(){super(...arguments),this.name="TokenOwnerOffCurveError"}}const Tt=Xe([ke("mintAuthorityOption"),Te("mintAuthority"),wt("supply"),Ve("decimals"),Ct("isInitialized"),ke("freezeAuthorityOption"),Te("freezeAuthority")]);Tt.span;function Wt(e,a,i=!1,d=Ue,n=Ze){if(!i&&!he.isOnCurve(a.toBuffer()))throw new qt;const[t]=he.findProgramAddressSync([a.toBuffer(),d.toBuffer(),e.toBuffer()],n);return t}var Gt=U({name:"QTab",props:ot,emits:lt,setup(e,{slots:a,emit:i}){const{renderTab:d}=ut(e,a,i);return()=>d("div")}});const pe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Mt=Object.keys(pe);pe.all=!0;function ce(e){const a={};for(const i of Mt)e[i]===!0&&(a[i]=!0);return Object.keys(a).length===0?pe:(a.horizontal===!0?a.left=a.right=!0:a.left===!0&&a.right===!0&&(a.horizontal=!0),a.vertical===!0?a.up=a.down=!0:a.up===!0&&a.down===!0&&(a.vertical=!0),a.horizontal===!0&&a.vertical===!0&&(a.all=!0),a)}const Et=["INPUT","TEXTAREA"];function de(e,a){return a.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof a.handler=="function"&&Et.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(a.uid)===-1)}function _t(e){const a=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((i,d)=>{const n=parseFloat(i);n&&(a[d]=n)}),a}var Pt=$e({name:"touch-swipe",beforeMount(e,{value:a,arg:i,modifiers:d}){if(d.mouse!==!0&&H.has.touch!==!0)return;const n=d.mouseCapture===!0?"Capture":"",t={handler:a,sensitivity:_t(i),direction:ce(d),noop:Be,mouseStart(r){de(r,t)&&Le(r)&&(Z(t,"temp",[[document,"mousemove","move",`notPassive${n}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(r,!0))},touchStart(r){if(de(r,t)){const f=r.target;Z(t,"temp",[[f,"touchmove","move","notPassiveCapture"],[f,"touchcancel","end","notPassiveCapture"],[f,"touchend","end","notPassiveCapture"]]),t.start(r)}},start(r,f){H.is.firefox===!0&&ae(e,!0);const g=se(r);t.event={x:g.left,y:g.top,time:Date.now(),mouse:f===!0,dir:!1}},move(r){if(t.event===void 0)return;if(t.event.dir!==!1){ee(r);return}const f=Date.now()-t.event.time;if(f===0)return;const g=se(r),v=g.left-t.event.x,y=Math.abs(v),b=g.top-t.event.y,w=Math.abs(b);if(t.event.mouse!==!0){if(y<t.sensitivity[1]&&w<t.sensitivity[1]){t.end(r);return}}else if(window.getSelection().toString()!==""){t.end(r);return}else if(y<t.sensitivity[2]&&w<t.sensitivity[2])return;const C=y/f,S=w/f;t.direction.vertical===!0&&y<w&&y<100&&S>t.sensitivity[0]&&(t.event.dir=b<0?"up":"down"),t.direction.horizontal===!0&&y>w&&w<100&&C>t.sensitivity[0]&&(t.event.dir=v<0?"left":"right"),t.direction.up===!0&&y<w&&b<0&&y<100&&S>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&y<w&&b>0&&y<100&&S>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&y>w&&v<0&&w<100&&C>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&y>w&&v>0&&w<100&&C>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(ee(r),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ze(),t.styleCleanup=x=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const E=()=>{document.body.classList.remove("no-pointer-events--children")};x===!0?setTimeout(E,50):E()}),t.handler({evt:r,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:f,distance:{x:y,y:w}})):t.end(r)},end(r){t.event!==void 0&&(ie(t,"temp"),H.is.firefox===!0&&ae(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),r!==void 0&&t.event.dir!==!1&&ee(r),t.event=void 0)}};if(e.__qtouchswipe=t,d.mouse===!0){const r=d.mouseCapture===!0||d.mousecapture===!0?"Capture":"";Z(t,"main",[[e,"mousedown","mouseStart",`passive${r}`]])}H.has.touch===!0&&Z(t,"main",[[e,"touchstart","touchStart",`passive${d.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const i=e.__qtouchswipe;i!==void 0&&(a.oldValue!==a.value&&(typeof a.value!="function"&&i.end(),i.handler=a.value),i.direction=ce(a.modifiers))},beforeUnmount(e){const a=e.__qtouchswipe;a!==void 0&&(ie(a,"main"),ie(a,"temp"),H.is.firefox===!0&&ae(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchswipe)}});function At(){const e=new Map;return{getCache:function(a,i){return e[a]===void 0?e[a]=i:e[a]},getCacheWithFn:function(a,i){return e[a]===void 0?e[a]=i():e[a]}}}const It={name:{required:!0},disable:Boolean},Me={setup(e,{slots:a}){return()=>T("div",{class:"q-panel scroll",role:"tabpanel"},re(a.default))}},Vt={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},$t=["update:modelValue","beforeTransition","transition"];function Bt(){const{props:e,emit:a,proxy:i}=W(),{getCacheWithFn:d}=At();let n,t;const r=X(null),f=X(null);function g(c){const h=e.vertical===!0?"up":"left";A((i.$q.lang.rtl===!0?-1:1)*(c.direction===h?1:-1))}const v=k(()=>[[Pt,g,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),y=k(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),b=k(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),w=k(()=>`--q-transition-duration: ${e.transitionDuration}ms`),C=k(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),S=k(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),x=k(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);K(()=>e.modelValue,(c,h)=>{const M=D(c)===!0?z(c):-1;t!==!0&&O(M===-1?0:M<z(h)?-1:1),r.value!==M&&(r.value=M,a("beforeTransition",c,h),J(()=>{a("transition",c,h)}))});function E(){A(1)}function B(){A(-1)}function _(c){a("update:modelValue",c)}function D(c){return c!=null&&c!==""}function z(c){return n.findIndex(h=>h.props.name===c&&h.props.disable!==""&&h.props.disable!==!0)}function R(){return n.filter(c=>c.props.disable!==""&&c.props.disable!==!0)}function O(c){const h=c!==0&&e.animated===!0&&r.value!==-1?"q-transition--"+(c===-1?y.value:b.value):null;f.value!==h&&(f.value=h)}function A(c,h=r.value){let M=h+c;for(;M>-1&&M<n.length;){const q=n[M];if(q!==void 0&&q.props.disable!==""&&q.props.disable!==!0){O(c),t=!0,a("update:modelValue",q.props.name),setTimeout(()=>{t=!1});return}M+=c}e.infinite===!0&&n.length!==0&&h!==-1&&h!==n.length&&A(c,c===-1?n.length:-1)}function j(){const c=z(e.modelValue);return r.value!==c&&(r.value=c),!0}function s(){const c=D(e.modelValue)===!0&&j()&&n[r.value];return e.keepAlive===!0?[T(Ge,S.value,[T(x.value===!0?d(C.value,()=>({...Me,name:C.value})):Me,{key:C.value,style:w.value},()=>c)])]:[T("div",{class:"q-panel scroll",style:w.value,key:C.value,role:"tabpanel"},[c])]}function u(){if(n.length!==0)return e.animated===!0?[T(Oe,{name:f.value},s)]:s()}function p(c){return n=We(re(c.default,[])).filter(h=>h.props!==null&&h.props.slot===void 0&&D(h.props.name)===!0),n.length}function o(){return n}return Object.assign(i,{next:E,previous:B,goTo:_}),{panelIndex:r,panelDirectives:v,updatePanelsList:p,updatePanelIndex:j,getPanelContent:u,getEnabledPanels:R,getPanels:o,isValidPanelName:D,keepAliveProps:S,needsUniqueKeepAliveWrapper:x,goToPanelByOffset:A,goToPanel:_,nextPanel:E,previousPanel:B}}var Jt=U({name:"QTabPanel",props:It,setup(e,{slots:a}){return()=>T("div",{class:"q-tab-panel",role:"tabpanel"},re(a.default))}}),en=U({name:"QTabPanels",props:{...Vt,...oe},emits:$t,setup(e,{slots:a}){const i=W(),d=le(e,i.proxy.$q),{updatePanelsList:n,getPanelContent:t,panelDirectives:r}=Bt(),f=k(()=>"q-tab-panels q-panel-parent"+(d.value===!0?" q-tab-panels--dark q-dark":""));return()=>(n(a),Je("div",{class:f.value},t(),"pan",e.swipeable,()=>r.value))}});const Ee={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},fe={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Ke=Object.keys(fe);Ke.forEach(e=>{fe[e].regex=new RegExp(fe[e].pattern)});const Lt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Ke.join("")+"])|(.)","g"),_e=/[.*+?^${}()|[\]\\]/g,V=String.fromCharCode(1),Ot={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Ft(e,a,i,d){let n,t,r,f,g,v;const y=X(null),b=X(C());function w(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}K(()=>e.type+e.autogrow,x),K(()=>e.mask,s=>{if(s!==void 0)E(b.value,!0);else{const u=A(b.value);x(),e.modelValue!==u&&a("update:modelValue",u)}}),K(()=>e.fillMask+e.reverseFillMask,()=>{y.value===!0&&E(b.value,!0)}),K(()=>e.unmaskedValue,()=>{y.value===!0&&E(b.value)});function C(){if(x(),y.value===!0){const s=R(A(e.modelValue));return e.fillMask!==!1?j(s):s}return e.modelValue}function S(s){if(s<n.length)return n.slice(-s);let u="",p=n;const o=p.indexOf(V);if(o>-1){for(let c=s-p.length;c>0;c--)u+=V;p=p.slice(0,o)+u+p.slice(o)}return p}function x(){if(y.value=e.mask!==void 0&&e.mask.length!==0&&w(),y.value===!1){f=void 0,n="",t="";return}const s=Ee[e.mask]===void 0?e.mask:Ee[e.mask],u=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",p=u.replace(_e,"\\$&"),o=[],c=[],h=[];let M=e.reverseFillMask===!0,q="",m="";s.replace(Lt,($,l,I,Y,Q)=>{if(Y!==void 0){const F=fe[Y];h.push(F),m=F.negate,M===!0&&(c.push("(?:"+m+"+)?("+F.pattern+"+)?(?:"+m+"+)?("+F.pattern+"+)?"),M=!1),c.push("(?:"+m+"+)?("+F.pattern+")?")}else if(I!==void 0)q="\\"+(I==="\\"?"":I),h.push(I),o.push("([^"+q+"]+)?"+q+"?");else{const F=l!==void 0?l:Q;q=F==="\\"?"\\\\\\\\":F.replace(_e,"\\\\$&"),h.push(F),o.push("([^"+q+"]+)?"+q+"?")}});const L=new RegExp("^"+o.join("")+"("+(q===""?".":"[^"+q+"]")+"+)?"+(q===""?"":"["+q+"]*")+"$"),N=c.length-1,P=c.map(($,l)=>l===0&&e.reverseFillMask===!0?new RegExp("^"+p+"*"+$):l===N?new RegExp("^"+$+"("+(m===""?".":m)+"+)?"+(e.reverseFillMask===!0?"$":p+"*")):new RegExp("^"+$));r=h,f=$=>{const l=L.exec(e.reverseFillMask===!0?$:$.slice(0,h.length+1));l!==null&&($=l.slice(1).join(""));const I=[],Y=P.length;for(let Q=0,F=$;Q<Y;Q++){const te=P[Q].exec(F);if(te===null)break;F=F.slice(te.shift().length),I.push(...te)}return I.length!==0?I.join(""):$},n=h.map($=>typeof $=="string"?$:V).join(""),t=n.split(V).join(u)}function E(s,u,p){const o=d.value,c=o.selectionEnd,h=o.value.length-c,M=A(s);u===!0&&x();const q=R(M),m=e.fillMask!==!1?j(q):q,L=b.value!==m;o.value!==m&&(o.value=m),L===!0&&(b.value=m),document.activeElement===o&&J(()=>{if(m===t){const P=e.reverseFillMask===!0?t.length:0;o.setSelectionRange(P,P,"forward");return}if(p==="insertFromPaste"&&e.reverseFillMask!==!0){const P=o.selectionEnd;let $=c-1;for(let l=g;l<=$&&l<P;l++)n[l]!==V&&$++;_.right(o,$);return}if(["deleteContentBackward","deleteContentForward"].indexOf(p)>-1){const P=e.reverseFillMask===!0?c===0?m.length>q.length?1:0:Math.max(0,m.length-(m===t?0:Math.min(q.length,h)+1))+1:c;o.setSelectionRange(P,P,"forward");return}if(e.reverseFillMask===!0)if(L===!0){const P=Math.max(0,m.length-(m===t?0:Math.min(q.length,h+1)));P===1&&c===1?o.setSelectionRange(P,P,"forward"):_.rightReverse(o,P)}else{const P=m.length-h;o.setSelectionRange(P,P,"backward")}else if(L===!0){const P=Math.max(0,n.indexOf(V),Math.min(q.length,c)-1);_.right(o,P)}else{const P=c-1;_.right(o,P)}});const N=e.unmaskedValue===!0?A(m):m;String(e.modelValue)!==N&&(e.modelValue!==null||N!=="")&&i(N,!0)}function B(s,u,p){const o=R(A(s.value));u=Math.max(0,n.indexOf(V),Math.min(o.length,u)),g=u,s.setSelectionRange(u,p,"forward")}const _={left(s,u){const p=n.slice(u-1).indexOf(V)===-1;let o=Math.max(0,u-1);for(;o>=0;o--)if(n[o]===V){u=o,p===!0&&u++;break}if(o<0&&n[u]!==void 0&&n[u]!==V)return _.right(s,0);u>=0&&s.setSelectionRange(u,u,"backward")},right(s,u){const p=s.value.length;let o=Math.min(p,u+1);for(;o<=p;o++)if(n[o]===V){u=o;break}else n[o-1]===V&&(u=o);if(o>p&&n[u-1]!==void 0&&n[u-1]!==V)return _.left(s,p);s.setSelectionRange(u,u,"forward")},leftReverse(s,u){const p=S(s.value.length);let o=Math.max(0,u-1);for(;o>=0;o--)if(p[o-1]===V){u=o;break}else if(p[o]===V&&(u=o,o===0))break;if(o<0&&p[u]!==void 0&&p[u]!==V)return _.rightReverse(s,0);u>=0&&s.setSelectionRange(u,u,"backward")},rightReverse(s,u){const p=s.value.length,o=S(p),c=o.slice(0,u+1).indexOf(V)===-1;let h=Math.min(p,u+1);for(;h<=p;h++)if(o[h-1]===V){u=h,u>0&&c===!0&&u--;break}if(h>p&&o[u-1]!==void 0&&o[u-1]!==V)return _.leftReverse(s,p);s.setSelectionRange(u,u,"forward")}};function D(s){a("click",s),v=void 0}function z(s){if(a("keydown",s),et(s)===!0||s.altKey===!0)return;const u=d.value,p=u.selectionStart,o=u.selectionEnd;if(s.shiftKey||(v=void 0),s.keyCode===37||s.keyCode===39){s.shiftKey&&v===void 0&&(v=u.selectionDirection==="forward"?p:o);const c=_[(s.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(s.preventDefault(),c(u,v===p?o:p),s.shiftKey){const h=u.selectionStart;u.setSelectionRange(Math.min(v,h),Math.max(v,h),"forward")}}else s.keyCode===8&&e.reverseFillMask!==!0&&p===o?(_.left(u,p),u.setSelectionRange(u.selectionStart,o,"backward")):s.keyCode===46&&e.reverseFillMask===!0&&p===o&&(_.rightReverse(u,o),u.setSelectionRange(p,u.selectionEnd,"forward"))}function R(s){if(s==null||s==="")return"";if(e.reverseFillMask===!0)return O(s);const u=r;let p=0,o="";for(let c=0;c<u.length;c++){const h=s[p],M=u[c];if(typeof M=="string")o+=M,h===M&&p++;else if(h!==void 0&&M.regex.test(h))o+=M.transform!==void 0?M.transform(h):h,p++;else return o}return o}function O(s){const u=r,p=n.indexOf(V);let o=s.length-1,c="";for(let h=u.length-1;h>=0&&o>-1;h--){const M=u[h];let q=s[o];if(typeof M=="string")c=M+c,q===M&&o--;else if(q!==void 0&&M.regex.test(q))do c=(M.transform!==void 0?M.transform(q):q)+c,o--,q=s[o];while(p===h&&q!==void 0&&M.regex.test(q));else return c}return c}function A(s){return typeof s!="string"||f===void 0?typeof s=="number"?f(""+s):s:f(s)}function j(s){return t.length-s.length<=0?s:e.reverseFillMask===!0&&s.length!==0?t.slice(0,-s.length)+s:s+t.slice(s.length)}return{innerValue:b,hasMask:y,moveCursorForPaste:B,updateMaskValue:E,onMaskedKeydown:z,onMaskedClick:D}}function Rt(e,a){function i(){const d=e.modelValue;try{const n="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(d)===d&&("length"in d?Array.from(d):[d]).forEach(t=>{n.items.add(t)}),{files:n.files}}catch{return{files:void 0}}}return a===!0?k(()=>{if(e.type==="file")return i()}):k(i)}var tn=U({name:"QInput",inheritAttrs:!1,props:{...st,...Ot,...je,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ct,"paste","change","keydown","click","animationend"],setup(e,{emit:a,attrs:i}){const{proxy:d}=W(),{$q:n}=d,t={};let r=NaN,f,g,v=null,y;const b=X(null),w=dt(e),{innerValue:C,hasMask:S,moveCursorForPaste:x,updateMaskValue:E,onMaskedKeydown:B,onMaskedClick:_}=Ft(e,a,q,b),D=Rt(e,!0),z=k(()=>Ce(C.value)),R=gt(h),O=ft(),A=k(()=>e.type==="textarea"||e.autogrow===!0),j=k(()=>A.value===!0||["text","search","url","tel","password"].includes(e.type)),s=k(()=>{const l={...O.splitAttrs.listeners.value,onInput:h,onPaste:c,onChange:L,onBlur:N,onFocus:ue};return l.onCompositionstart=l.onCompositionupdate=l.onCompositionend=R,S.value===!0&&(l.onKeydown=B,l.onClick=_),e.autogrow===!0&&(l.onAnimationend=M),l}),u=k(()=>{const l={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:w.value,...O.splitAttrs.attributes.value,id:O.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return A.value===!1&&(l.type=e.type),e.autogrow===!0&&(l.rows=1),l});K(()=>e.type,()=>{b.value&&(b.value.value=e.modelValue)}),K(()=>e.modelValue,l=>{if(S.value===!0){if(g===!0&&(g=!1,String(l)===r))return;E(l)}else C.value!==l&&(C.value=l,e.type==="number"&&t.hasOwnProperty("value")===!0&&(f===!0?f=!1:delete t.value));e.autogrow===!0&&J(m)}),K(()=>e.autogrow,l=>{l===!0?J(m):b.value!==null&&i.rows>0&&(b.value.style.height="auto")}),K(()=>e.dense,()=>{e.autogrow===!0&&J(m)});function p(){mt(()=>{const l=document.activeElement;b.value!==null&&b.value!==l&&(l===null||l.id!==O.targetUid.value)&&b.value.focus({preventScroll:!0})})}function o(){b.value!==null&&b.value.select()}function c(l){if(S.value===!0&&e.reverseFillMask!==!0){const I=l.target;x(I,I.selectionStart,I.selectionEnd)}a("paste",l)}function h(l){if(!l||!l.target)return;if(e.type==="file"){a("update:modelValue",l.target.files);return}const I=l.target.value;if(l.target.qComposing===!0){t.value=I;return}if(S.value===!0)E(I,!1,l.inputType);else if(q(I),j.value===!0&&l.target===document.activeElement){const{selectionStart:Y,selectionEnd:Q}=l.target;Y!==void 0&&Q!==void 0&&J(()=>{l.target===document.activeElement&&I.indexOf(l.target.value)===0&&l.target.setSelectionRange(Y,Q)})}e.autogrow===!0&&m()}function M(l){a("animationend",l),m()}function q(l,I){y=()=>{v=null,e.type!=="number"&&t.hasOwnProperty("value")===!0&&delete t.value,e.modelValue!==l&&r!==l&&(r=l,I===!0&&(g=!0),a("update:modelValue",l),J(()=>{r===l&&(r=NaN)})),y=void 0},e.type==="number"&&(f=!0,t.value=l),e.debounce!==void 0?(v!==null&&clearTimeout(v),t.value=l,v=setTimeout(y,e.debounce)):y()}function m(){requestAnimationFrame(()=>{const l=b.value;if(l!==null){const I=l.parentNode.style,{scrollTop:Y}=l,{overflowY:Q,maxHeight:F}=n.platform.is.firefox===!0?{}:window.getComputedStyle(l),te=Q!==void 0&&Q!=="scroll";te===!0&&(l.style.overflowY="hidden"),I.marginBottom=l.scrollHeight-1+"px",l.style.height="1px",l.style.height=l.scrollHeight+"px",te===!0&&(l.style.overflowY=parseInt(F,10)<l.scrollHeight?"auto":"hidden"),I.marginBottom="",l.scrollTop=Y}})}function L(l){R(l),v!==null&&(clearTimeout(v),v=null),y!==void 0&&y(),a("change",l.target.value)}function N(l){l!==void 0&&ue(l),v!==null&&(clearTimeout(v),v=null),y!==void 0&&y(),f=!1,g=!1,delete t.value,e.type!=="file"&&setTimeout(()=>{b.value!==null&&(b.value.value=C.value!==void 0?C.value:"")})}function P(){return t.hasOwnProperty("value")===!0?t.value:C.value!==void 0?C.value:""}be(()=>{N()}),tt(()=>{e.autogrow===!0&&m()}),Object.assign(O,{innerValue:C,fieldClass:k(()=>`q-${A.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:k(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:b,emitValue:q,hasValue:z,floatingLabel:k(()=>z.value===!0&&(e.type!=="number"||isNaN(C.value)===!1)||Ce(e.displayValue)),getControl:()=>T(A.value===!0?"textarea":"input",{ref:b,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...u.value,...s.value,...e.type!=="file"?{value:P()}:D.value}),getShadowControl:()=>T("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(A.value===!0?"":" text-no-wrap")},[T("span",{class:"invisible"},P()),T("span",e.shadowText)])});const $=vt(O);return Object.assign(d,{focus:p,select:o,getNativeElement:()=>b.value}),nt(d,"nativeEl",()=>b.value),$}});function me(e,a,i){const d=se(e);let n,t=d.left-a.event.x,r=d.top-a.event.y,f=Math.abs(t),g=Math.abs(r);const v=a.direction;v.horizontal===!0&&v.vertical!==!0?n=t<0?"left":"right":v.horizontal!==!0&&v.vertical===!0?n=r<0?"up":"down":v.up===!0&&r<0?(n="up",f>g&&(v.left===!0&&t<0?n="left":v.right===!0&&t>0&&(n="right"))):v.down===!0&&r>0?(n="down",f>g&&(v.left===!0&&t<0?n="left":v.right===!0&&t>0&&(n="right"))):v.left===!0&&t<0?(n="left",f<g&&(v.up===!0&&r<0?n="up":v.down===!0&&r>0&&(n="down"))):v.right===!0&&t>0&&(n="right",f<g&&(v.up===!0&&r<0?n="up":v.down===!0&&r>0&&(n="down")));let y=!1;if(n===void 0&&i===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};n=a.event.lastDir,y=!0,n==="left"||n==="right"?(d.left-=t,f=0,t=0):(d.top-=r,g=0,r=0)}return{synthetic:y,payload:{evt:e,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:d,direction:n,isFirst:a.event.isFirst,isFinal:i===!0,duration:Date.now()-a.event.time,distance:{x:f,y:g},offset:{x:t,y:r},delta:{x:d.left-a.event.lastX,y:d.top-a.event.lastY}}}}let Nt=0;var nn=$e({name:"touch-pan",beforeMount(e,{value:a,modifiers:i}){if(i.mouse!==!0&&H.has.touch!==!0)return;function d(t,r){i.mouse===!0&&r===!0?ee(t):(i.stop===!0&&ue(t),i.prevent===!0&&xe(t))}const n={uid:"qvtp_"+Nt++,handler:a,modifiers:i,direction:ce(i),noop:Be,mouseStart(t){de(t,n)&&Le(t)&&(Z(n,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),n.start(t,!0))},touchStart(t){if(de(t,n)){const r=t.target;Z(n,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),n.start(t)}},start(t,r){if(H.is.firefox===!0&&ae(e,!0),n.lastEvt=t,r===!0||i.stop===!0){if(n.direction.all!==!0&&(r!==!0||n.modifiers.mouseAllDir!==!0&&n.modifiers.mousealldir!==!0)){const v=t.type.indexOf("mouse")>-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);t.defaultPrevented===!0&&xe(v),t.cancelBubble===!0&&ue(v),Object.assign(v,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:t.qClonedBy===void 0?[n.uid]:t.qClonedBy.concat(n.uid)}),n.initialEvent={target:t.target,event:v}}ue(t)}const{left:f,top:g}=se(t);n.event={x:f,y:g,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:g}},move(t){if(n.event===void 0)return;const r=se(t),f=r.left-n.event.x,g=r.top-n.event.y;if(f===0&&g===0)return;n.lastEvt=t;const v=n.event.mouse===!0,y=()=>{d(t,v);let C;i.preserveCursor!==!0&&i.preservecursor!==!0&&(C=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),v===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ze(),n.styleCleanup=S=>{if(n.styleCleanup=void 0,C!==void 0&&(document.documentElement.style.cursor=C),document.body.classList.remove("non-selectable"),v===!0){const x=()=>{document.body.classList.remove("no-pointer-events--children")};S!==void 0?setTimeout(()=>{x(),S()},50):x()}else S!==void 0&&S()}};if(n.event.detected===!0){n.event.isFirst!==!0&&d(t,n.event.mouse);const{payload:C,synthetic:S}=me(t,n,!1);C!==void 0&&(n.handler(C)===!1?n.end(t):(n.styleCleanup===void 0&&n.event.isFirst===!0&&y(),n.event.lastX=C.position.left,n.event.lastY=C.position.top,n.event.lastDir=S===!0?void 0:C.direction,n.event.isFirst=!1));return}if(n.direction.all===!0||v===!0&&(n.modifiers.mouseAllDir===!0||n.modifiers.mousealldir===!0)){y(),n.event.detected=!0,n.move(t);return}const b=Math.abs(f),w=Math.abs(g);b!==w&&(n.direction.horizontal===!0&&b>w||n.direction.vertical===!0&&b<w||n.direction.up===!0&&b<w&&g<0||n.direction.down===!0&&b<w&&g>0||n.direction.left===!0&&b>w&&f<0||n.direction.right===!0&&b>w&&f>0?(n.event.detected=!0,n.move(t)):n.end(t,!0))},end(t,r){if(n.event!==void 0){if(ie(n,"temp"),H.is.firefox===!0&&ae(e,!1),r===!0)n.styleCleanup!==void 0&&n.styleCleanup(),n.event.detected!==!0&&n.initialEvent!==void 0&&n.initialEvent.target.dispatchEvent(n.initialEvent.event);else if(n.event.detected===!0){n.event.isFirst===!0&&n.handler(me(t===void 0?n.lastEvt:t,n).payload);const{payload:f}=me(t===void 0?n.lastEvt:t,n,!0),g=()=>{n.handler(f)};n.styleCleanup!==void 0?n.styleCleanup(g):g()}n.event=void 0,n.initialEvent=void 0,n.lastEvt=void 0}}};if(e.__qtouchpan=n,i.mouse===!0){const t=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";Z(n,"main",[[e,"mousedown","mouseStart",`passive${t}`]])}H.has.touch===!0&&Z(n,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const i=e.__qtouchpan;i!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&i.end(),i.handler=a.value),i.direction=ce(a.modifiers))},beforeUnmount(e){const a=e.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),ie(a,"main"),ie(a,"temp"),H.is.firefox===!0&&ae(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchpan)}});const Dt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},ge={xs:2,sm:4,md:8,lg:16,xl:24};var Pe=U({name:"QSeparator",props:{...oe,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const a=W(),i=le(e,a.proxy.$q),d=k(()=>e.vertical===!0?"vertical":"horizontal"),n=k(()=>` q-separator--${d.value}`),t=k(()=>e.inset!==!1?`${n.value}-${Dt[e.inset]}`:""),r=k(()=>`q-separator${n.value}${t.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(i.value===!0?" q-separator--dark":"")),f=k(()=>{const g={};if(e.size!==void 0&&(g[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const v=e.spaced===!0?`${ge.md}px`:e.spaced in ge?`${ge[e.spaced]}px`:e.spaced,y=e.vertical===!0?["Left","Right"]:["Top","Bottom"];g[`margin${y[0]}`]=g[`margin${y[1]}`]=v}return g});return()=>T("hr",{class:r.value,style:f.value,"aria-orientation":d.value})}}),an=U({name:"QList",props:{...oe,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const i=W(),d=le(e,i.proxy.$q),n=k(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(d.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>T(e.tag,{class:n.value},re(a.default))}});const zt={xs:2,sm:4,md:6,lg:10,xl:14};function Ae(e,a,i){return{transform:a===!0?`translateX(${i.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var rn=U({name:"QLinearProgress",props:{...oe,...Fe,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:a}){const{proxy:i}=W(),d=le(e,i.$q),n=Re(e,zt),t=k(()=>e.indeterminate===!0||e.query===!0),r=k(()=>e.reverse!==e.query),f=k(()=>({...n.value!==null?n.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),g=k(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),v=k(()=>Ae(e.buffer!==void 0?e.buffer:1,r.value,i.$q)),y=k(()=>`with${e.instantFeedback===!0?"out":""}-transition`),b=k(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${y.value} q-linear-progress__track--${d.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),w=k(()=>Ae(t.value===!0?1:e.value,r.value,i.$q)),C=k(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${y.value} q-linear-progress__model--${t.value===!0?"in":""}determinate`),S=k(()=>({width:`${e.value*100}%`})),x=k(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${y.value}`);return()=>{const E=[T("div",{class:b.value,style:v.value}),T("div",{class:C.value,style:w.value})];return e.stripe===!0&&t.value===!1&&E.push(T("div",{class:x.value,style:S.value})),T("div",{class:g.value,style:f.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Ne(a.default,E))}}});function jt(e,a){const i=X(null),d=k(()=>e.disable===!0?null:T("span",{ref:i,class:"no-outline",tabindex:-1}));function n(t){const r=a.value;t!==void 0&&t.type.indexOf("key")===0?r!==null&&document.activeElement!==r&&r.contains(document.activeElement)===!0&&r.focus():i.value!==null&&(t===void 0||r!==null&&r.contains(t.target)===!0)&&i.value.focus()}return{refocusTargetEl:d,refocusTarget:n}}var Kt={xs:30,sm:35,md:40,lg:50,xl:60};const on={...oe,...Fe,...je,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},ln=["update:modelValue"];function un(e,a){const{props:i,slots:d,emit:n,proxy:t}=W(),{$q:r}=t,f=le(i,r),g=X(null),{refocusTargetEl:v,refocusTarget:y}=jt(i,g),b=Re(i,Kt),w=k(()=>i.val!==void 0&&Array.isArray(i.modelValue)),C=k(()=>{const o=ne(i.val);return w.value===!0?i.modelValue.findIndex(c=>ne(c)===o):-1}),S=k(()=>w.value===!0?C.value>-1:ne(i.modelValue)===ne(i.trueValue)),x=k(()=>w.value===!0?C.value===-1:ne(i.modelValue)===ne(i.falseValue)),E=k(()=>S.value===!1&&x.value===!1),B=k(()=>i.disable===!0?-1:i.tabindex||0),_=k(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(i.disable===!0?" disabled":"")+(f.value===!0?` q-${e}--dark`:"")+(i.dense===!0?` q-${e}--dense`:"")+(i.leftLabel===!0?" reverse":"")),D=k(()=>{const o=S.value===!0?"truthy":x.value===!0?"falsy":"indet",c=i.color!==void 0&&(i.keepColor===!0||(e==="toggle"?S.value===!0:x.value!==!0))?` text-${i.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${o}${c}`}),z=k(()=>{const o={type:"checkbox"};return i.name!==void 0&&Object.assign(o,{".checked":S.value,"^checked":S.value===!0?"checked":void 0,name:i.name,value:w.value===!0?i.val:i.trueValue}),o}),R=ht(z),O=k(()=>{const o={tabindex:B.value,role:e==="toggle"?"switch":"checkbox","aria-label":i.label,"aria-checked":E.value===!0?"mixed":S.value===!0?"true":"false"};return i.disable===!0&&(o["aria-disabled"]="true"),o});function A(o){o!==void 0&&(ee(o),y(o)),i.disable!==!0&&n("update:modelValue",j(),o)}function j(){if(w.value===!0){if(S.value===!0){const o=i.modelValue.slice();return o.splice(C.value,1),o}return i.modelValue.concat([i.val])}if(S.value===!0){if(i.toggleOrder!=="ft"||i.toggleIndeterminate===!1)return i.falseValue}else if(x.value===!0){if(i.toggleOrder==="ft"||i.toggleIndeterminate===!1)return i.trueValue}else return i.toggleOrder!=="ft"?i.trueValue:i.falseValue;return i.indeterminateValue}function s(o){(o.keyCode===13||o.keyCode===32)&&ee(o)}function u(o){(o.keyCode===13||o.keyCode===32)&&A(o)}const p=a(S,E);return Object.assign(t,{toggle:A}),()=>{const o=p();i.disable!==!0&&R(o,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const c=[T("div",{class:D.value,style:b.value,"aria-hidden":"true"},o)];v.value!==null&&c.push(v.value);const h=i.label!==void 0?Ne(d.default,[i.label]):re(d.default);return h!==void 0&&c.push(T("div",{class:`q-${e}__label q-anchor--skip`},h)),T("div",{ref:g,class:_.value,...O.value,onClick:A,onKeydown:s,onKeyup:u},c)}}async function sn(e,a,i="finalized"){const d=await e.getLatestBlockhash();return await e.confirmTransaction({blockhash:d.blockhash,lastValidBlockHeight:d.lastValidBlockHeight,signature:a})}var Qt=U({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:a,emit:i}){let d=!1,n,t,r=null,f=null,g,v;function y(){n&&n(),n=null,d=!1,r!==null&&(clearTimeout(r),r=null),f!==null&&(clearTimeout(f),f=null),t!==void 0&&t.removeEventListener("transitionend",g),g=null}function b(x,E,B){E!==void 0&&(x.style.height=`${E}px`),x.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,d=!0,n=B}function w(x,E){x.style.overflowY=null,x.style.height=null,x.style.transition=null,y(),E!==v&&i(E)}function C(x,E){let B=0;t=x,d===!0?(y(),B=x.offsetHeight===x.scrollHeight?0:void 0):(v="hide",x.style.overflowY="hidden"),b(x,B,E),r=setTimeout(()=>{r=null,x.style.height=`${x.scrollHeight}px`,g=_=>{f=null,(Object(_)!==_||_.target===x)&&w(x,"show")},x.addEventListener("transitionend",g),f=setTimeout(g,e.duration*1.1)},100)}function S(x,E){let B;t=x,d===!0?y():(v="show",x.style.overflowY="hidden",B=x.scrollHeight),b(x,B,E),r=setTimeout(()=>{r=null,x.style.height=0,g=_=>{f=null,(Object(_)!==_||_.target===x)&&w(x,"hide")},x.addEventListener("transitionend",g),f=setTimeout(g,e.duration*1.1)},100)}return be(()=>{d===!0&&y()}),()=>T(Oe,{css:!1,appear:e.appear,onEnter:C,onLeave:S},a.default)}});const G=at({}),Ht=Object.keys(De);var cn=U({name:"QExpansionItem",props:{...De,...bt,...oe,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...yt,"click","afterShow","afterHide"],setup(e,{slots:a,emit:i}){const{proxy:{$q:d}}=W(),n=le(e,d),t=X(e.modelValue!==null?e.modelValue:e.defaultOpened),r=X(null),f=qe(),{show:g,hide:v,toggle:y}=pt({showing:t});let b,w;const C=k(()=>`q-expansion-item q-item-type q-expansion-item--${t.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),S=k(()=>{if(e.contentInsetLevel===void 0)return null;const m=d.lang.rtl===!0?"Right":"Left";return{["padding"+m]:e.contentInsetLevel*56+"px"}}),x=k(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),E=k(()=>{const m={};return Ht.forEach(L=>{m[L]=e[L]}),m}),B=k(()=>x.value===!0||e.expandIconToggle!==!0),_=k(()=>e.expandedIcon!==void 0&&t.value===!0?e.expandedIcon:e.expandIcon||d.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),D=k(()=>e.disable!==!0&&(x.value===!0||e.expandIconToggle===!0)),z=k(()=>({expanded:t.value===!0,detailsId:e.targetUid,toggle:y,show:g,hide:v})),R=k(()=>{const m=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:d.lang.label[t.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":t.value===!0?"true":"false","aria-controls":f,"aria-label":m}});K(()=>e.group,m=>{w!==void 0&&w(),m!==void 0&&p()});function O(m){x.value!==!0&&y(m),i("click",m)}function A(m){m.keyCode===13&&j(m,!0)}function j(m,L){L!==!0&&r.value!==null&&r.value.focus(),y(m),ee(m)}function s(){i("afterShow")}function u(){i("afterHide")}function p(){b===void 0&&(b=qe()),t.value===!0&&(G[e.group]=b);const m=K(t,N=>{N===!0?G[e.group]=b:G[e.group]===b&&delete G[e.group]}),L=K(()=>G[e.group],(N,P)=>{P===b&&N!==void 0&&N!==b&&v()});w=()=>{m(),L(),G[e.group]===b&&delete G[e.group],w=void 0}}function o(){const m={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},L=[T(we,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&t.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:_.value})];return D.value===!0&&(Object.assign(m,{tabindex:0,...R.value,onClick:j,onKeyup:A}),L.unshift(T("div",{ref:r,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),T(ve,m,()=>L)}function c(){let m;return a.header!==void 0?m=[].concat(a.header(z.value)):(m=[T(ve,()=>[T(Se,{lines:e.labelLines},()=>e.label||""),e.caption?T(Se,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&m[e.switchToggleSide===!0?"push":"unshift"](T(ve,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>T(we,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&m[e.switchToggleSide===!0?"unshift":"push"](o()),m}function h(){const m={ref:"item",style:e.headerStyle,class:e.headerClass,dark:n.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return B.value===!0&&(m.clickable=!0,m.onClick=O,Object.assign(m,x.value===!0?E.value:R.value)),T(kt,m,c)}function M(){return it(T("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:S.value,id:f},re(a.default)),[[rt,t.value]])}function q(){const m=[h(),T(Qt,{duration:e.duration,onShow:s,onHide:u},M)];return e.expandSeparator===!0&&m.push(T(Pe,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:n.value}),T(Pe,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:n.value})),m}return e.group!==void 0&&p(),be(()=>{w!==void 0&&w()}),()=>T("div",{class:C.value},[T("div",{class:"q-expansion-item__container relative-position"},q())])}});export{an as Q,nn as T,ln as a,un as b,Pe as c,rn as d,tn as e,cn as f,Wt as g,Gt as h,Jt as i,en as j,At as k,on as u,sn as w};