import{T as he,Q as qe,a as nt}from"./DiscordLinkButton.8f0140b2.js";import{t as E,u as c,v as $,w as U,x as le,y as P,z as K,A as k,C as p,D as re,E as lt,F as W,G as Ne,H as ye,I as Ee,J as Te,K as He,L as rt,M as Re,N as Me,O as it,Q as st,R as ut,S as ct,T as dt,U as me,V as Y,X as ft,Y as vt,Z as ht,$ as mt,a0 as gt,a1 as yt,a2 as Ce,a3 as te,a4 as ae,a5 as V,a6 as y,a7 as bt,a8 as We,a9 as be,aa as wt,ab as pt,ac as _t,ad as I,ae as St,af as ze,ag as xt,ah as $e,ai as ke,aj as qt,ak as Tt}from"./index.9dc93246.js";import{Q as oe,a as Ct,b as zt,c as G,_ as $t,d as kt}from"./FilterEscrows.d6f39585.js";import{Q as ge,a as Oe}from"./QCardSection.f747afd8.js";import{u as Ot,a as Vt,Q as Lt}from"./QSelect.32a36a4e.js";import{u as Qt,a as Bt,b as At,c as Pt,d as X,g as Dt,e as Nt}from"./use-key-composition.cd016e80.js";import{u as Et,a as Ht,Q as Rt}from"./QCard.dfe10abb.js";import{i as Mt,t as we,w as Wt,a as Ft,n as It,b as Ut,c as Kt}from"./index.9afb93df.js";var Ve=E({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:r}){const o=c(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>$("div",{class:o.value,role:"toolbar"},U(r.default))}}),jt=E({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:r,emit:o}){const{proxy:{$q:l}}=W(),t=le(K,P);if(t===P)return console.error("QHeader needs to be child of QLayout"),P;const u=k(parseInt(e.heightHint,10)),b=k(!0),O=c(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||l.platform.is.ios&&t.isContainer.value===!0),z=c(()=>{if(e.modelValue!==!0)return 0;if(O.value===!0)return b.value===!0?u.value:0;const s=u.value-t.scroll.value.position;return s>0?s:0}),_=c(()=>e.modelValue!==!0||O.value===!0&&b.value!==!0),n=c(()=>e.modelValue===!0&&_.value===!0&&e.reveal===!0),S=c(()=>"q-header q-layout__section--marginal "+(O.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(_.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),T=c(()=>{const s=t.rows.value.top,L={};return s[0]==="l"&&t.left.space===!0&&(L[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),s[2]==="r"&&t.right.space===!0&&(L[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),L});function d(s,L){t.update("header",s,L)}function v(s,L){s.value!==L&&(s.value=L)}function x({height:s}){v(u,s),d("size",s)}function w(s){n.value===!0&&v(b,!0),o("focusin",s)}p(()=>e.modelValue,s=>{d("space",s),v(b,!0),t.animate()}),p(z,s=>{d("offset",s)}),p(()=>e.reveal,s=>{s===!1&&v(b,e.modelValue)}),p(b,s=>{t.animate(),o("reveal",s)}),p(t.scroll,s=>{e.reveal===!0&&v(b,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&d("size",u.value),d("space",e.modelValue),d("offset",z.value),re(()=>{t.instances.header===g&&(t.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const s=lt(r.default,[]);return e.elevated===!0&&s.push($("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push($(oe,{debounce:0,onResize:x})),$("header",{class:S.value,style:T.value,onFocusin:w},s)}}});const Le=150;var Qe=E({name:"QDrawer",inheritAttrs:!1,props:{...Qt,...Et,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Bt,"onLayout","miniState"],setup(e,{slots:r,emit:o,attrs:l}){const t=W(),{proxy:{$q:u}}=t,b=Ht(e,u),{preventBodyScroll:O}=Vt(),{registerTimeout:z,removeTimeout:_}=At(),n=le(K,P);if(n===P)return console.error("QDrawer needs to be child of QLayout"),P;let S,T=null,d;const v=k(e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint),x=c(()=>e.mini===!0&&v.value!==!0),w=c(()=>x.value===!0?e.miniWidth:e.width),g=k(e.showIfAbove===!0&&v.value===!1?!0:e.modelValue===!0),s=c(()=>e.persistent!==!0&&(v.value===!0||Fe.value===!0));function L(a,m){if(D(),a!==!1&&n.animate(),A(0),v.value===!0){const B=n.instances[j.value];B!==void 0&&B.belowBreakpoint===!0&&B.hide(!1),H(1),n.isContainer.value!==!0&&O(!0)}else H(0),a!==!1&&de(!1);z(()=>{a!==!1&&de(!0),m!==!0&&o("show",a)},Le)}function f(a,m){N(),a!==!1&&n.animate(),H(0),A(Q.value*w.value),fe(),m!==!0?z(()=>{o("hide",a)},Le):_()}const{show:i,hide:q}=Pt({showing:g,hideOnRouteChange:s,handleShow:L,handleHide:f}),{addToHistory:D,removeFromHistory:N}=Ot(g,q,s),h={belowBreakpoint:v,hide:q},C=c(()=>e.side==="right"),Q=c(()=>(u.lang.rtl===!0?-1:1)*(C.value===!0?1:-1)),pe=k(0),M=k(!1),ie=k(!1),_e=k(w.value*Q.value),j=c(()=>C.value===!0?"left":"right"),se=c(()=>g.value===!0&&v.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:w.value:0),ue=c(()=>e.overlay===!0||e.miniToOverlay===!0||n.view.value.indexOf(C.value?"R":"L")>-1||u.platform.is.ios===!0&&n.isContainer.value===!0),F=c(()=>e.overlay===!1&&g.value===!0&&v.value===!1),Fe=c(()=>e.overlay===!0&&g.value===!0&&v.value===!1),Ie=c(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&M.value===!1?" hidden":"")),Ue=c(()=>({backgroundColor:`rgba(0,0,0,${pe.value*.4})`})),Se=c(()=>C.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),Ke=c(()=>C.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),je=c(()=>{const a={};return n.header.space===!0&&Se.value===!1&&(ue.value===!0?a.top=`${n.header.offset}px`:n.header.space===!0&&(a.top=`${n.header.size}px`)),n.footer.space===!0&&Ke.value===!1&&(ue.value===!0?a.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(a.bottom=`${n.footer.size}px`)),a}),Je=c(()=>{const a={width:`${w.value}px`,transform:`translateX(${_e.value}px)`};return v.value===!0?a:Object.assign(a,je.value)}),Ye=c(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),Ge=c(()=>`q-drawer q-drawer--${e.side}`+(ie.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(b.value===!0?" q-drawer--dark q-dark":"")+(M.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(v.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${x.value===!0?"mini":"standard"}`+(ue.value===!0||F.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Se.value===!0?" q-drawer--top-padding":""))),Xe=c(()=>{const a=u.lang.rtl===!0?e.side:j.value;return[[he,at,void 0,{[a]:!0,mouse:!0}]]}),Ze=c(()=>{const a=u.lang.rtl===!0?j.value:e.side;return[[he,xe,void 0,{[a]:!0,mouse:!0}]]}),et=c(()=>{const a=u.lang.rtl===!0?j.value:e.side;return[[he,xe,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function ce(){ot(v,e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint)}p(v,a=>{a===!0?(S=g.value,g.value===!0&&q(!1)):e.overlay===!1&&e.behavior!=="mobile"&&S!==!1&&(g.value===!0?(A(0),H(0),fe()):i(!1))}),p(()=>e.side,(a,m)=>{n.instances[m]===h&&(n.instances[m]=void 0,n[m].space=!1,n[m].offset=0),n.instances[a]=h,n[a].size=w.value,n[a].space=F.value,n[a].offset=se.value}),p(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&ce()}),p(()=>e.behavior+e.breakpoint,ce),p(n.isContainer,a=>{g.value===!0&&O(a!==!0),a===!0&&ce()}),p(n.scrollbarWidth,()=>{A(g.value===!0?0:void 0)}),p(se,a=>{R("offset",a)}),p(F,a=>{o("onLayout",a),R("space",a)}),p(C,()=>{A()}),p(w,a=>{A(),ve(e.miniToOverlay,a)}),p(()=>e.miniToOverlay,a=>{ve(a,w.value)}),p(()=>u.lang.rtl,()=>{A()}),p(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(tt(),n.animate())}),p(x,a=>{o("miniState",a)});function A(a){a===void 0?ye(()=>{a=g.value===!0?0:w.value,A(Q.value*a)}):(n.isContainer.value===!0&&C.value===!0&&(v.value===!0||Math.abs(a)===w.value)&&(a+=Q.value*n.scrollbarWidth.value),_e.value=a)}function H(a){pe.value=a}function de(a){const m=a===!0?"remove":n.isContainer.value!==!0?"add":"";m!==""&&document.body.classList[m]("q-body--drawer-toggle")}function tt(){T!==null&&clearTimeout(T),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ie.value=!0,T=setTimeout(()=>{T=null,ie.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function at(a){if(g.value!==!1)return;const m=w.value,B=X(a.distance.x,0,m);if(a.isFinal===!0){B>=Math.min(75,m)===!0?i():(n.animate(),H(0),A(Q.value*m)),M.value=!1;return}A((u.lang.rtl===!0?C.value!==!0:C.value)?Math.max(m-B,0):Math.min(0,B-m)),H(X(B/m,0,1)),a.isFirst===!0&&(M.value=!0)}function xe(a){if(g.value!==!0)return;const m=w.value,B=a.direction===e.side,J=(u.lang.rtl===!0?B!==!0:B)?X(a.distance.x,0,m):0;if(a.isFinal===!0){Math.abs(J)<Math.min(75,m)===!0?(n.animate(),H(1),A(0)):q(),M.value=!1;return}A(Q.value*J),H(X(1-J/m,0,1)),a.isFirst===!0&&(M.value=!0)}function fe(){O(!1),de(!0)}function R(a,m){n.update(e.side,a,m)}function ot(a,m){a.value!==m&&(a.value=m)}function ve(a,m){R("size",a===!0?e.miniWidth:m)}return n.instances[e.side]=h,ve(e.miniToOverlay,w.value),R("space",F.value),R("offset",se.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),Ne(()=>{o("onLayout",F.value),o("miniState",x.value),S=e.showIfAbove===!0;const a=()=>{(g.value===!0?L:f)(!1,!0)};if(n.totalWidth.value!==0){ye(a);return}d=p(n.totalWidth,()=>{d(),d=void 0,g.value===!1&&e.showIfAbove===!0&&v.value===!1?i(!1):a()})}),re(()=>{d!==void 0&&d(),T!==null&&(clearTimeout(T),T=null),g.value===!0&&fe(),n.instances[e.side]===h&&(n.instances[e.side]=void 0,R("size",0),R("offset",0),R("space",!1))}),()=>{const a=[];v.value===!0&&(e.noSwipeOpen===!1&&a.push(Ee($("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Xe.value)),a.push(Te("div",{ref:"backdrop",class:Ie.value,style:Ue.value,"aria-hidden":"true",onClick:q},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>et.value)));const m=x.value===!0&&r.mini!==void 0,B=[$("div",{...l,key:""+m,class:[Ye.value,l.class]},m===!0?r.mini():U(r.default))];return e.elevated===!0&&g.value===!0&&B.push($("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(Te("aside",{ref:"content",class:Ge.value,style:Je.value},B,"contentclose",e.noSwipeClose!==!0&&v.value===!0,()=>Ze.value)),$("div",{class:"q-drawer-container"},a)}}}),Jt=E({name:"QPageContainer",setup(e,{slots:r}){const{proxy:{$q:o}}=W(),l=le(K,P);if(l===P)return console.error("QPageContainer needs to be child of QLayout"),P;He(rt,!0);const t=c(()=>{const u={};return l.header.space===!0&&(u.paddingTop=`${l.header.size}px`),l.right.space===!0&&(u[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(u.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(u[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),u});return()=>$("div",{class:"q-page-container",style:t.value},U(r.default))}}),Yt=E({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:r}){const o=c(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>$("div",{class:o.value},U(r.default))}}),Gt=E({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:r,emit:o}){const{proxy:{$q:l}}=W(),t=le(K,P);if(t===P)return console.error("QFooter needs to be child of QLayout"),P;const u=k(parseInt(e.heightHint,10)),b=k(!0),O=k(Re.value===!0||t.isContainer.value===!0?0:window.innerHeight),z=c(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||l.platform.is.ios&&t.isContainer.value===!0),_=c(()=>t.isContainer.value===!0?t.containerHeight.value:O.value),n=c(()=>{if(e.modelValue!==!0)return 0;if(z.value===!0)return b.value===!0?u.value:0;const i=t.scroll.value.position+_.value+u.value-t.height.value;return i>0?i:0}),S=c(()=>e.modelValue!==!0||z.value===!0&&b.value!==!0),T=c(()=>e.modelValue===!0&&S.value===!0&&e.reveal===!0),d=c(()=>"q-footer q-layout__section--marginal "+(z.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(S.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(z.value!==!0?" hidden":""):"")),v=c(()=>{const i=t.rows.value.bottom,q={};return i[0]==="l"&&t.left.space===!0&&(q[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),i[2]==="r"&&t.right.space===!0&&(q[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),q});function x(i,q){t.update("footer",i,q)}function w(i,q){i.value!==q&&(i.value=q)}function g({height:i}){w(u,i),x("size",i)}function s(){if(e.reveal!==!0)return;const{direction:i,position:q,inflectionPoint:D}=t.scroll.value;w(b,i==="up"||q-D<100||t.height.value-_.value-q-u.value<300)}function L(i){T.value===!0&&w(b,!0),o("focusin",i)}p(()=>e.modelValue,i=>{x("space",i),w(b,!0),t.animate()}),p(n,i=>{x("offset",i)}),p(()=>e.reveal,i=>{i===!1&&w(b,e.modelValue)}),p(b,i=>{t.animate(),o("reveal",i)}),p([u,t.scroll,t.height],s),p(()=>l.screen.height,i=>{t.isContainer.value!==!0&&w(O,i)});const f={};return t.instances.footer=f,e.modelValue===!0&&x("size",u.value),x("space",e.modelValue),x("offset",n.value),re(()=>{t.instances.footer===f&&(t.instances.footer=void 0,x("size",0),x("offset",0),x("space",!1))}),()=>{const i=Me(r.default,[$(oe,{debounce:0,onResize:g})]);return e.elevated===!0&&i.push($("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),$("footer",{class:d.value,style:v.value,onFocusin:L},i)}}});const{passive:Be}=ut,Xt=["both","horizontal","vertical"];var Zt=E({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Xt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:r}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,u;p(()=>e.scrollTarget,()=>{z(),O()});function b(){l!==null&&l();const S=Math.max(0,ct(t)),T=dt(t),d={top:S-o.position.top,left:T-o.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const v=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";o.position={top:S,left:T},o.directionChanged=o.direction!==v,o.delta=d,o.directionChanged===!0&&(o.direction=v,o.inflectionPoint=o.position),r("scroll",{...o})}function O(){t=st(u,e.scrollTarget),t.addEventListener("scroll",_,Be),_(!0)}function z(){t!==void 0&&(t.removeEventListener("scroll",_,Be),t=void 0)}function _(S){if(S===!0||e.debounce===0||e.debounce==="0")b();else if(l===null){const[T,d]=e.debounce?[setTimeout(b,e.debounce),clearTimeout]:[requestAnimationFrame(b),cancelAnimationFrame];l=()=>{d(T),l=null}}}const{proxy:n}=W();return p(()=>n.$q.lang.rtl,b),Ne(()=>{u=n.$el.parentNode,O()}),re(()=>{l!==null&&l(),z()}),Object.assign(n,{trigger:_,getPosition:()=>o}),it}}),ea=E({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:r,emit:o}){const{proxy:{$q:l}}=W(),t=k(null),u=k(l.screen.height),b=k(e.container===!0?0:l.screen.width),O=k({position:0,direction:"down",inflectionPoint:0}),z=k(0),_=k(Re.value===!0?0:me()),n=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),S=c(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),T=c(()=>_.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${_.value}px`}:null),d=c(()=>_.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${_.value}px`,width:`calc(100% + ${_.value}px)`}:null);function v(f){if(e.container===!0||document.qScrollPrevented!==!0){const i={position:f.position.top,direction:f.direction,directionChanged:f.directionChanged,inflectionPoint:f.inflectionPoint.top,delta:f.delta.top};O.value=i,e.onScroll!==void 0&&o("scroll",i)}}function x(f){const{height:i,width:q}=f;let D=!1;u.value!==i&&(D=!0,u.value=i,e.onScrollHeight!==void 0&&o("scrollHeight",i),g()),b.value!==q&&(D=!0,b.value=q),D===!0&&e.onResize!==void 0&&o("resize",f)}function w({height:f}){z.value!==f&&(z.value=f,g())}function g(){if(e.container===!0){const f=u.value>z.value?me():0;_.value!==f&&(_.value=f)}}let s=null;const L={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:t,height:u,containerHeight:z,scrollbarWidth:_,totalWidth:c(()=>b.value+_.value),rows:c(()=>{const f=e.view.toLowerCase().split(" ");return{top:f[0].split(""),middle:f[1].split(""),bottom:f[2].split("")}}),header:Y({size:0,offset:0,space:!1}),right:Y({size:300,offset:0,space:!1}),footer:Y({size:0,offset:0,space:!1}),left:Y({size:300,offset:0,space:!1}),scroll:O,animate(){s!==null?clearTimeout(s):document.body.classList.add("q-body--layout-animate"),s=setTimeout(()=>{s=null,document.body.classList.remove("q-body--layout-animate")},155)},update(f,i,q){L[f][i]=q}};if(He(K,L),me()>0){let q=function(){f=null,i.classList.remove("hide-scrollbar")},D=function(){if(f===null){if(i.scrollHeight>l.screen.height)return;i.classList.add("hide-scrollbar")}else clearTimeout(f);f=setTimeout(q,300)},N=function(h){f!==null&&h==="remove"&&(clearTimeout(f),q()),window[`${h}EventListener`]("resize",D)},f=null;const i=document.body;p(()=>e.container!==!0?"add":"remove",N),e.container!==!0&&N("add"),ft(()=>{N("remove")})}return()=>{const f=Me(r.default,[$(Zt,{onScroll:v}),$(oe,{onResize:x})]),i=$("div",{class:n.value,style:S.value,ref:e.container===!0?void 0:t,tabindex:-1},f);return e.container===!0?$("div",{class:"q-layout-container overflow-hidden",ref:t},[$(oe,{onResize:w}),$("div",{class:"absolute-full",style:T.value},[$("div",{class:"scroll",style:d.value},[i])])]):i}}}),ta=E({name:"QCardActions",props:{...vt,vertical:Boolean},setup(e,{slots:r}){const o=ht(e),l=c(()=>`q-card__actions ${o.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>$("div",{class:l.value},U(r.default))}});function Ae(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const r=parseInt(e,10);return isNaN(r)?0:r}var aa=mt({name:"close-popup",beforeMount(e,{value:r}){const o={depth:Ae(r),handler(l){o.depth!==0&&setTimeout(()=>{const t=Dt(e);t!==void 0&&Nt(t,l,o.depth)})},handlerKey(l){gt(l,13)===!0&&o.handler(l)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:r,oldValue:o}){r!==o&&(e.__qclosepopup.depth=Ae(r))},beforeUnmount(e){const r=e.__qclosepopup;e.removeEventListener("click",r.handler),e.removeEventListener("keyup",r.handlerKey),delete e.__qclosepopup}});function oa(e){var r;const o=we(e);return(r=o==null?void 0:o.$el)!=null?r:o}const ne=Mt?window:void 0;function Pe(...e){let r,o,l,t;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,l,t]=e,r=ne):[r,o,l,t]=e,!r)return It;Array.isArray(o)||(o=[o]),Array.isArray(l)||(l=[l]);const u=[],b=()=>{u.forEach(n=>n()),u.length=0},O=(n,S,T,d)=>(n.addEventListener(S,T,d),()=>n.removeEventListener(S,T,d)),z=p(()=>[oa(r),we(t)],([n,S])=>{if(b(),!n)return;const T=Ut(S)?{...S}:S;u.push(...o.flatMap(d=>l.map(v=>O(n,d,v,T))))},{immediate:!0,flush:"post"}),_=()=>{z(),b()};return Kt(_),_}const Z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof Ce.global<"u"?Ce.global:typeof self<"u"?self:{},ee="__vueuse_ssr_handlers__",na=la();function la(){return ee in Z||(Z[ee]=Z[ee]||{}),Z[ee]}function ra(e,r){return na[e]||r}function ia(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const sa={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},De="vueuse-storage";function ua(e,r,o,l={}){var t;const{flush:u="pre",deep:b=!0,listenToStorageChanges:O=!0,writeDefaults:z=!0,mergeDefaults:_=!1,shallow:n,window:S=ne,eventFilter:T,onError:d=h=>{console.error(h)},initOnMounted:v}=l,x=(n?yt:k)(typeof r=="function"?r():r);if(!o)try{o=ra("getDefaultStorage",()=>{var h;return(h=ne)==null?void 0:h.localStorage})()}catch(h){d(h)}if(!o)return x;const w=we(r),g=ia(w),s=(t=l.serializer)!=null?t:sa[g],{pause:L,resume:f}=Wt(x,()=>i(x.value),{flush:u,deep:b,eventFilter:T});return S&&O&&Ft(()=>{Pe(S,"storage",N),Pe(S,De,D),v&&N()}),v||N(),x;function i(h){try{if(h==null)o.removeItem(e);else{const C=s.write(h),Q=o.getItem(e);Q!==C&&(o.setItem(e,C),S&&S.dispatchEvent(new CustomEvent(De,{detail:{key:e,oldValue:Q,newValue:C,storageArea:o}})))}}catch(C){d(C)}}function q(h){const C=h?h.newValue:o.getItem(e);if(C==null)return z&&w!==null&&o.setItem(e,s.write(w)),w;if(!h&&_){const Q=s.read(C);return typeof _=="function"?_(Q,w):g==="object"&&!Array.isArray(Q)?{...w,...Q}:Q}else return typeof C!="string"?C:s.read(C)}function D(h){N(h.detail)}function N(h){if(!(h&&h.storageArea!==o)){if(h&&h.key==null){x.value=w;return}if(!(h&&h.key!==e)){L();try{(h==null?void 0:h.newValue)!==s.write(x.value)&&(x.value=q(h))}catch(C){d(C)}finally{h?ye(f):f()}}}}}function ca(e,r,o={}){const{window:l=ne}=o;return ua(e,r,l==null?void 0:l.localStorage,o)}const da=be("div",{class:"text-h6"},"Disclaimer",-1),fa=be("div",{class:"col"},"I have read, understand and accept these terms.",-1),va={__name:"DisclaimerDialog",setup(e){const r=k(!1),o=k(ca("disclaimer_ack",!0));return(l,t)=>(te(),ae(Lt,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=u=>o.value=u),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:V(()=>[y(Rt,{flat:"",class:"text-white",style:{width:"500px"}},{default:V(()=>[y(ge,{class:"bg-secondary"},{default:V(()=>[da]),_:1}),y(ge,{class:"q-pt-md"},{default:V(()=>[bt(' THIS INTERFACE AND THE ESCROW PROTOCOL ARE PROVIDED "AS IS", AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND. The Interface does not provide, own, or control transactions conducted on the protocol or via related smart contracts. By using or accessing this Interface or the Escrow Protocol and related smart contracts, you agree that no developer or entity involved in creating, deploying or maintaining this Interface or the Escrow Protocol will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of, this Interface or the Escrow Protocol, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, digital assets, tokens, or anything else of value. ')]),_:1}),y(ge,{class:"row bg-secondary items-center"},{default:V(()=>[fa,y(Ct,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=u=>r.value=u),color:"accent"},null,8,["modelValue"])]),_:1}),y(ta,{align:"right"},{default:V(()=>[Ee(y(We,{disable:!r.value,class:"full-width",color:"primary",label:"Agree and continue"},null,8,["disable"]),[[aa]])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},ha="0.2.3-beta";const ma={class:"text-right col text-subtitle2"},Ta=wt({__name:"MainLayout",setup(e){const r=k();return(o,l)=>{const t=pt("router-view");return te(),ae(ea,{view:"hHh lpr fFf"},{default:V(()=>[y(jt,{class:"bg-dark"},{default:V(()=>[y(Ve,{class:"q-ma-none q-pa-none"},{default:V(()=>[y(zt,{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=u=>r.value=u),shrink:"",stretch:"","active-bg-color":"primary"},{default:V(()=>[y(G,{to:"/",class:_t(I(St)().is_whitelisted?"bg-blue":"")},{default:V(()=>[y(ze,null,{default:V(()=>[y(qe,{src:"logo.svg"})]),_:1})]),_:1},8,["class"]),y(G,{name:"tab_escrow",icon:"countertops",to:"/escrow"}),y(G,{name:"tab_manage",icon:"design_services",to:"/manage"}),y(G,{name:"tab_faq",icon:"quiz",to:"/faq"})]),_:1},8,["modelValue"]),y(nt),y(I(xt),{dark:""})]),_:1}),y(Oe)]),_:1}),I($e)().showLeftDrawer?(te(),ae(Qe,{key:0,"show-if-above":"",side:"left",bordered:""},{default:V(()=>[y($t)]),_:1})):ke("",!0),I($e)().showRightDrawer?(te(),ae(Qe,{key:1,"show-if-above":"",side:"right",bordered:""},{default:V(()=>[y(kt)]),_:1})):ke("",!0),y(Jt,null,{default:V(()=>[y(va,{class:"col-1"}),y(t,{style:{background:`linear-gradient(
            339deg,
            rgba(124, 2, 57, 1) 0%,
            rgba(17, 45, 79, 1) 60%,
            rgba(20, 71, 130, 1) 100%
          )`}})]),_:1}),y(Gt,{class:"bg-dark"},{default:V(()=>[y(Oe),y(Ve,null,{default:V(()=>[y(Yt,{class:"row items-center"},{default:V(()=>[y(qe,{src:"sa-powered_by_the_people.png",width:"100px"}),be("div",ma,"v"+qt(I(ha)),1),y(We,{flat:"",class:"q-mx-sm",round:"",to:"/settings"},{default:V(()=>[y(ze,{size:"30px"},{default:V(()=>[y(Tt,{name:"settings"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{Ta as default};