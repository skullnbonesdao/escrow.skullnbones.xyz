import{ak as V,D as B,H as x,aK as w,F as _,aL as L,C as S,aM as I,G as M,aN as A,t as T,an as Q,aI as j,A as E,u as d,v as p,ah as D,ag as F,E as K,w as H}from"./index.39f809d9.js";import{u as P,a as U}from"./use-key-composition.d46b0d89.js";function O(){let e;const l=_();function u(){e=void 0}return V(u),B(u),{removeTick:u,registerTick(n){e=n,x(()=>{e===n&&(w(l)===!1&&e(),e=void 0)})}}}function W(){let e=null;const l=_();function u(){e!==null&&(clearTimeout(e),e=null)}return V(u),B(u),{removeTimeout:u,registerTimeout(n,r){u(),w(l)===!1&&(e=setTimeout(n,r))}}}let R=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const l=document.createElement("div");Object.assign(l.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(l),e.scrollLeft=-1e3,R=e.scrollLeft>=0,e.remove()}function G(e,l,u){let n;function r(){n!==void 0&&(L.remove(n),n=void 0)}return B(()=>{e.value===!0&&r()}),{removeFromHistory:r,addToHistory(){n={condition:()=>u.value===!0,handler:l},L.add(n)}}}const z={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},J=["beforeShow","show","beforeHide","hide"];function X({showing:e,canShow:l,hideOnRouteChange:u,handleShow:n,handleHide:r,processOnMount:b}){const y=_(),{props:i,emit:s,proxy:h}=y;let o;function f(t){e.value===!0?m(t):v(t)}function v(t){if(i.disable===!0||t!==void 0&&t.qAnchorHandled===!0||l!==void 0&&l(t)!==!0)return;const a=i["onUpdate:modelValue"]!==void 0;a===!0&&(s("update:modelValue",!0),o=t,x(()=>{o===t&&(o=void 0)})),(i.modelValue===null||a===!1)&&c(t)}function c(t){e.value!==!0&&(e.value=!0,s("beforeShow",t),n!==void 0?n(t):s("show",t))}function m(t){if(i.disable===!0)return;const a=i["onUpdate:modelValue"]!==void 0;a===!0&&(s("update:modelValue",!1),o=t,x(()=>{o===t&&(o=void 0)})),(i.modelValue===null||a===!1)&&k(t)}function k(t){e.value!==!1&&(e.value=!1,s("beforeHide",t),r!==void 0?r(t):s("hide",t))}function q(t){i.disable===!0&&t===!0?i["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!1):t===!0!==e.value&&(t===!0?c:k)(o)}S(()=>i.modelValue,q),u!==void 0&&I(y)===!0&&S(()=>h.$route.fullPath,()=>{u.value===!0&&e.value===!0&&m()}),b===!0&&M(()=>{q(i.modelValue)});const g={show:v,hide:m,toggle:f};return Object.assign(h,g),g}function Y(){let e;return{preventBodyScroll(l){l!==e&&(e!==void 0||l===!0)&&(e=l,A(l))}}}var Z=T({name:"QItem",props:{...P,...Q,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:u}){const{proxy:{$q:n}}=_(),r=U(e,n),{hasLink:b,linkAttrs:y,linkClass:i,linkTag:s,navigateOnClick:h}=j(),o=E(null),f=E(null),v=d(()=>e.clickable===!0||b.value===!0||e.tag==="label"),c=d(()=>e.disable!==!0&&v.value===!0),m=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(r.value===!0?" q-item--dark":"")+(b.value===!0&&e.active===null?i.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(c.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),k=d(()=>{if(e.insetLevel===void 0)return null;const a=n.lang.rtl===!0?"Right":"Left";return{["padding"+a]:16+e.insetLevel*56+"px"}});function q(a){c.value===!0&&(f.value!==null&&(a.qKeyEvent!==!0&&document.activeElement===o.value?f.value.focus():document.activeElement===f.value&&o.value.focus()),h(a))}function g(a){if(c.value===!0&&D(a,13)===!0){F(a),a.qKeyEvent=!0;const C=new MouseEvent("click",a);C.qKeyEvent=!0,o.value.dispatchEvent(C)}u("keyup",a)}function t(){const a=K(l.default,[]);return c.value===!0&&a.unshift(p("div",{class:"q-focus-helper",tabindex:-1,ref:f})),a}return()=>{const a={ref:o,class:m.value,style:k.value,role:"listitem",onClick:q,onKeyup:g};return c.value===!0?(a.tabindex=e.tabindex||"0",Object.assign(a,y.value)):v.value===!0&&(a["aria-disabled"]="true"),p(s.value,a,t())}}}),ee=T({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const u=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>p("div",{class:u.value},H(l.default))}}),te=T({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const u=d(()=>parseInt(e.lines,10)),n=d(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(u.value===1?" ellipsis":"")),r=d(()=>e.lines!==void 0&&u.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":u.value}:null);return()=>p("div",{style:r.value,class:n.value},H(l.default))}});export{Z as Q,J as a,W as b,X as c,G as d,Y as e,O as f,te as g,ee as h,R as r,z as u};