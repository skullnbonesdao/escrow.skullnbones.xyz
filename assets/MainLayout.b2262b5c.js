import{T as he,Q as qe,a as ot,f as nt,c as rt}from"./DiscordLinkButton.5915b8e5.js";import{t as N,u,v as T,w as j,x as le,y as D,z as U,A as z,C as w,D as be,E as lt,F as K,G as it,H as ye,I as Pe,J as Ce,K as Ee,L as st,M as He,N as Ne,O as me,Q as X,R as ut,S as ct,T as dt,U as ft,V as vt,X as ht,Y as Te,Z as ae,$ as oe,a0 as $,a1 as m,a2 as mt,a3 as We,a4 as I,a5 as gt,a6 as yt,a7 as bt,a8 as W,a9 as wt,aa as ze,ab as pt,ac as ke,ad as $e,ae as Le,af as _t}from"./index.8bfa3fc8.js";import{Q as ne,a as St,b as xt,c as G,_ as qt,d as Ct}from"./FilterEscrows.63a4622f.js";import{Q as ge,a as Qe}from"./QCardSection.de03d96b.js";import{u as Tt,a as zt,Q as kt}from"./QSelect.0a8cf310.js";import{u as $t,a as Lt,b as Qt,c as Ot,d as Z,g as Vt,e as Bt}from"./use-key-composition.f214f6c9.js";import{u as At,a as Dt,Q as Rt}from"./QCard.c0669c95.js";import{Q as Pt}from"./QScrollObserver.518fa990.js";import{i as Et,t as we,w as Ht,a as Nt,n as Wt,b as Mt,c as It}from"./index.b0994aa4.js";var Oe=N({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:l}){const o=u(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>T("div",{class:o.value,role:"toolbar"},j(l.default))}}),Ft=N({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:o}){const{proxy:{$q:r}}=K(),a=le(U,D);if(a===D)return console.error("QHeader needs to be child of QLayout"),D;const c=z(parseInt(e.heightHint,10)),S=z(!0),O=u(()=>e.reveal===!0||a.view.value.indexOf("H")>-1||r.platform.is.ios&&a.isContainer.value===!0),L=u(()=>{if(e.modelValue!==!0)return 0;if(O.value===!0)return S.value===!0?c.value:0;const s=c.value-a.scroll.value.position;return s>0?s:0}),x=u(()=>e.modelValue!==!0||O.value===!0&&S.value!==!0),n=u(()=>e.modelValue===!0&&x.value===!0&&e.reveal===!0),q=u(()=>"q-header q-layout__section--marginal "+(O.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(x.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),k=u(()=>{const s=a.rows.value.top,Q={};return s[0]==="l"&&a.left.space===!0&&(Q[r.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),s[2]==="r"&&a.right.space===!0&&(Q[r.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),Q});function b(s,Q){a.update("header",s,Q)}function g(s,Q){s.value!==Q&&(s.value=Q)}function p({height:s}){g(c,s),b("size",s)}function y(s){n.value===!0&&g(S,!0),o("focusin",s)}w(()=>e.modelValue,s=>{b("space",s),g(S,!0),a.animate()}),w(L,s=>{b("offset",s)}),w(()=>e.reveal,s=>{s===!1&&g(S,e.modelValue)}),w(S,s=>{a.animate(),o("reveal",s)}),w(a.scroll,s=>{e.reveal===!0&&g(S,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const h={};return a.instances.header=h,e.modelValue===!0&&b("size",c.value),b("space",e.modelValue),b("offset",L.value),be(()=>{a.instances.header===h&&(a.instances.header=void 0,b("size",0),b("offset",0),b("space",!1))}),()=>{const s=lt(l.default,[]);return e.elevated===!0&&s.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(T(ne,{debounce:0,onResize:p})),T("header",{class:q.value,style:k.value,onFocusin:y},s)}}});const Ve=150;var Be=N({name:"QDrawer",inheritAttrs:!1,props:{...$t,...At,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Lt,"onLayout","miniState"],setup(e,{slots:l,emit:o,attrs:r}){const a=K(),{proxy:{$q:c}}=a,S=Dt(e,c),{preventBodyScroll:O}=zt(),{registerTimeout:L,removeTimeout:x}=Qt(),n=le(U,D);if(n===D)return console.error("QDrawer needs to be child of QLayout"),D;let q,k=null,b;const g=z(e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint),p=u(()=>e.mini===!0&&g.value!==!0),y=u(()=>p.value===!0?e.miniWidth:e.width),h=z(e.showIfAbove===!0&&g.value===!1?!0:e.modelValue===!0),s=u(()=>e.persistent!==!0&&(g.value===!0||Me.value===!0));function Q(t,v){if(R(),t!==!1&&n.animate(),A(0),g.value===!0){const B=n.instances[J.value];B!==void 0&&B.belowBreakpoint===!0&&B.hide(!1),E(1),n.isContainer.value!==!0&&O(!0)}else E(0),t!==!1&&de(!1);L(()=>{t!==!1&&de(!0),v!==!0&&o("show",t)},Ve)}function d(t,v){P(),t!==!1&&n.animate(),E(0),A(V.value*y.value),fe(),v!==!0?L(()=>{o("hide",t)},Ve):x()}const{show:i,hide:_}=Ot({showing:h,hideOnRouteChange:s,handleShow:Q,handleHide:d}),{addToHistory:R,removeFromHistory:P}=Tt(h,_,s),f={belowBreakpoint:g,hide:_},C=u(()=>e.side==="right"),V=u(()=>(c.lang.rtl===!0?-1:1)*(C.value===!0?1:-1)),pe=z(0),M=z(!1),ie=z(!1),_e=z(y.value*V.value),J=u(()=>C.value===!0?"left":"right"),se=u(()=>h.value===!0&&g.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:y.value:0),ue=u(()=>e.overlay===!0||e.miniToOverlay===!0||n.view.value.indexOf(C.value?"R":"L")>-1||c.platform.is.ios===!0&&n.isContainer.value===!0),F=u(()=>e.overlay===!1&&h.value===!0&&g.value===!1),Me=u(()=>e.overlay===!0&&h.value===!0&&g.value===!1),Ie=u(()=>"fullscreen q-drawer__backdrop"+(h.value===!1&&M.value===!1?" hidden":"")),Fe=u(()=>({backgroundColor:`rgba(0,0,0,${pe.value*.4})`})),Se=u(()=>C.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),je=u(()=>C.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),Ue=u(()=>{const t={};return n.header.space===!0&&Se.value===!1&&(ue.value===!0?t.top=`${n.header.offset}px`:n.header.space===!0&&(t.top=`${n.header.size}px`)),n.footer.space===!0&&je.value===!1&&(ue.value===!0?t.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(t.bottom=`${n.footer.size}px`)),t}),Ke=u(()=>{const t={width:`${y.value}px`,transform:`translateX(${_e.value}px)`};return g.value===!0?t:Object.assign(t,Ue.value)}),Je=u(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),Ye=u(()=>`q-drawer q-drawer--${e.side}`+(ie.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(S.value===!0?" q-drawer--dark q-dark":"")+(M.value===!0?" no-transition":h.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${p.value===!0?"mini":"standard"}`+(ue.value===!0||F.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Se.value===!0?" q-drawer--top-padding":""))),Xe=u(()=>{const t=c.lang.rtl===!0?e.side:J.value;return[[he,tt,void 0,{[t]:!0,mouse:!0}]]}),Ge=u(()=>{const t=c.lang.rtl===!0?J.value:e.side;return[[he,xe,void 0,{[t]:!0,mouse:!0}]]}),Ze=u(()=>{const t=c.lang.rtl===!0?J.value:e.side;return[[he,xe,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function ce(){at(g,e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint)}w(g,t=>{t===!0?(q=h.value,h.value===!0&&_(!1)):e.overlay===!1&&e.behavior!=="mobile"&&q!==!1&&(h.value===!0?(A(0),E(0),fe()):i(!1))}),w(()=>e.side,(t,v)=>{n.instances[v]===f&&(n.instances[v]=void 0,n[v].space=!1,n[v].offset=0),n.instances[t]=f,n[t].size=y.value,n[t].space=F.value,n[t].offset=se.value}),w(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&ce()}),w(()=>e.behavior+e.breakpoint,ce),w(n.isContainer,t=>{h.value===!0&&O(t!==!0),t===!0&&ce()}),w(n.scrollbarWidth,()=>{A(h.value===!0?0:void 0)}),w(se,t=>{H("offset",t)}),w(F,t=>{o("onLayout",t),H("space",t)}),w(C,()=>{A()}),w(y,t=>{A(),ve(e.miniToOverlay,t)}),w(()=>e.miniToOverlay,t=>{ve(t,y.value)}),w(()=>c.lang.rtl,()=>{A()}),w(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(et(),n.animate())}),w(p,t=>{o("miniState",t)});function A(t){t===void 0?ye(()=>{t=h.value===!0?0:y.value,A(V.value*t)}):(n.isContainer.value===!0&&C.value===!0&&(g.value===!0||Math.abs(t)===y.value)&&(t+=V.value*n.scrollbarWidth.value),_e.value=t)}function E(t){pe.value=t}function de(t){const v=t===!0?"remove":n.isContainer.value!==!0?"add":"";v!==""&&document.body.classList[v]("q-body--drawer-toggle")}function et(){k!==null&&clearTimeout(k),a.proxy&&a.proxy.$el&&a.proxy.$el.classList.add("q-drawer--mini-animate"),ie.value=!0,k=setTimeout(()=>{k=null,ie.value=!1,a&&a.proxy&&a.proxy.$el&&a.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function tt(t){if(h.value!==!1)return;const v=y.value,B=Z(t.distance.x,0,v);if(t.isFinal===!0){B>=Math.min(75,v)===!0?i():(n.animate(),E(0),A(V.value*v)),M.value=!1;return}A((c.lang.rtl===!0?C.value!==!0:C.value)?Math.max(v-B,0):Math.min(0,B-v)),E(Z(B/v,0,1)),t.isFirst===!0&&(M.value=!0)}function xe(t){if(h.value!==!0)return;const v=y.value,B=t.direction===e.side,Y=(c.lang.rtl===!0?B!==!0:B)?Z(t.distance.x,0,v):0;if(t.isFinal===!0){Math.abs(Y)<Math.min(75,v)===!0?(n.animate(),E(1),A(0)):_(),M.value=!1;return}A(V.value*Y),E(Z(1-Y/v,0,1)),t.isFirst===!0&&(M.value=!0)}function fe(){O(!1),de(!0)}function H(t,v){n.update(e.side,t,v)}function at(t,v){t.value!==v&&(t.value=v)}function ve(t,v){H("size",t===!0?e.miniWidth:v)}return n.instances[e.side]=f,ve(e.miniToOverlay,y.value),H("space",F.value),H("offset",se.value),e.showIfAbove===!0&&e.modelValue!==!0&&h.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),it(()=>{o("onLayout",F.value),o("miniState",p.value),q=e.showIfAbove===!0;const t=()=>{(h.value===!0?Q:d)(!1,!0)};if(n.totalWidth.value!==0){ye(t);return}b=w(n.totalWidth,()=>{b(),b=void 0,h.value===!1&&e.showIfAbove===!0&&g.value===!1?i(!1):t()})}),be(()=>{b!==void 0&&b(),k!==null&&(clearTimeout(k),k=null),h.value===!0&&fe(),n.instances[e.side]===f&&(n.instances[e.side]=void 0,H("size",0),H("offset",0),H("space",!1))}),()=>{const t=[];g.value===!0&&(e.noSwipeOpen===!1&&t.push(Pe(T("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Xe.value)),t.push(Ce("div",{ref:"backdrop",class:Ie.value,style:Fe.value,"aria-hidden":"true",onClick:_},void 0,"backdrop",e.noSwipeBackdrop!==!0&&h.value===!0,()=>Ze.value)));const v=p.value===!0&&l.mini!==void 0,B=[T("div",{...r,key:""+v,class:[Je.value,r.class]},v===!0?l.mini():j(l.default))];return e.elevated===!0&&h.value===!0&&B.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(Ce("aside",{ref:"content",class:Ye.value,style:Ke.value},B,"contentclose",e.noSwipeClose!==!0&&g.value===!0,()=>Ge.value)),T("div",{class:"q-drawer-container"},t)}}}),jt=N({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:o}}=K(),r=le(U,D);if(r===D)return console.error("QPageContainer needs to be child of QLayout"),D;Ee(st,!0);const a=u(()=>{const c={};return r.header.space===!0&&(c.paddingTop=`${r.header.size}px`),r.right.space===!0&&(c[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(c.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(c[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),c});return()=>T("div",{class:"q-page-container",style:a.value},j(l.default))}}),Ut=N({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:l}){const o=u(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>T("div",{class:o.value},j(l.default))}}),Kt=N({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:o}){const{proxy:{$q:r}}=K(),a=le(U,D);if(a===D)return console.error("QFooter needs to be child of QLayout"),D;const c=z(parseInt(e.heightHint,10)),S=z(!0),O=z(He.value===!0||a.isContainer.value===!0?0:window.innerHeight),L=u(()=>e.reveal===!0||a.view.value.indexOf("F")>-1||r.platform.is.ios&&a.isContainer.value===!0),x=u(()=>a.isContainer.value===!0?a.containerHeight.value:O.value),n=u(()=>{if(e.modelValue!==!0)return 0;if(L.value===!0)return S.value===!0?c.value:0;const i=a.scroll.value.position+x.value+c.value-a.height.value;return i>0?i:0}),q=u(()=>e.modelValue!==!0||L.value===!0&&S.value!==!0),k=u(()=>e.modelValue===!0&&q.value===!0&&e.reveal===!0),b=u(()=>"q-footer q-layout__section--marginal "+(L.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(q.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(L.value!==!0?" hidden":""):"")),g=u(()=>{const i=a.rows.value.bottom,_={};return i[0]==="l"&&a.left.space===!0&&(_[r.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),i[2]==="r"&&a.right.space===!0&&(_[r.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),_});function p(i,_){a.update("footer",i,_)}function y(i,_){i.value!==_&&(i.value=_)}function h({height:i}){y(c,i),p("size",i)}function s(){if(e.reveal!==!0)return;const{direction:i,position:_,inflectionPoint:R}=a.scroll.value;y(S,i==="up"||_-R<100||a.height.value-x.value-_-c.value<300)}function Q(i){k.value===!0&&y(S,!0),o("focusin",i)}w(()=>e.modelValue,i=>{p("space",i),y(S,!0),a.animate()}),w(n,i=>{p("offset",i)}),w(()=>e.reveal,i=>{i===!1&&y(S,e.modelValue)}),w(S,i=>{a.animate(),o("reveal",i)}),w([c,a.scroll,a.height],s),w(()=>r.screen.height,i=>{a.isContainer.value!==!0&&y(O,i)});const d={};return a.instances.footer=d,e.modelValue===!0&&p("size",c.value),p("space",e.modelValue),p("offset",n.value),be(()=>{a.instances.footer===d&&(a.instances.footer=void 0,p("size",0),p("offset",0),p("space",!1))}),()=>{const i=Ne(l.default,[T(ne,{debounce:0,onResize:h})]);return e.elevated===!0&&i.push(T("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),T("footer",{class:b.value,style:g.value,onFocusin:Q},i)}}}),Jt=N({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:o}){const{proxy:{$q:r}}=K(),a=z(null),c=z(r.screen.height),S=z(e.container===!0?0:r.screen.width),O=z({position:0,direction:"down",inflectionPoint:0}),L=z(0),x=z(He.value===!0?0:me()),n=u(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),q=u(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),k=u(()=>x.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${x.value}px`}:null),b=u(()=>x.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${x.value}px`,width:`calc(100% + ${x.value}px)`}:null);function g(d){if(e.container===!0||document.qScrollPrevented!==!0){const i={position:d.position.top,direction:d.direction,directionChanged:d.directionChanged,inflectionPoint:d.inflectionPoint.top,delta:d.delta.top};O.value=i,e.onScroll!==void 0&&o("scroll",i)}}function p(d){const{height:i,width:_}=d;let R=!1;c.value!==i&&(R=!0,c.value=i,e.onScrollHeight!==void 0&&o("scrollHeight",i),h()),S.value!==_&&(R=!0,S.value=_),R===!0&&e.onResize!==void 0&&o("resize",d)}function y({height:d}){L.value!==d&&(L.value=d,h())}function h(){if(e.container===!0){const d=c.value>L.value?me():0;x.value!==d&&(x.value=d)}}let s=null;const Q={instances:{},view:u(()=>e.view),isContainer:u(()=>e.container),rootRef:a,height:c,containerHeight:L,scrollbarWidth:x,totalWidth:u(()=>S.value+x.value),rows:u(()=>{const d=e.view.toLowerCase().split(" ");return{top:d[0].split(""),middle:d[1].split(""),bottom:d[2].split("")}}),header:X({size:0,offset:0,space:!1}),right:X({size:300,offset:0,space:!1}),footer:X({size:0,offset:0,space:!1}),left:X({size:300,offset:0,space:!1}),scroll:O,animate(){s!==null?clearTimeout(s):document.body.classList.add("q-body--layout-animate"),s=setTimeout(()=>{s=null,document.body.classList.remove("q-body--layout-animate")},155)},update(d,i,_){Q[d][i]=_}};if(Ee(U,Q),me()>0){let _=function(){d=null,i.classList.remove("hide-scrollbar")},R=function(){if(d===null){if(i.scrollHeight>r.screen.height)return;i.classList.add("hide-scrollbar")}else clearTimeout(d);d=setTimeout(_,300)},P=function(f){d!==null&&f==="remove"&&(clearTimeout(d),_()),window[`${f}EventListener`]("resize",R)},d=null;const i=document.body;w(()=>e.container!==!0?"add":"remove",P),e.container!==!0&&P("add"),ut(()=>{P("remove")})}return()=>{const d=Ne(l.default,[T(Pt,{onScroll:g}),T(ne,{onResize:p})]),i=T("div",{class:n.value,style:q.value,ref:e.container===!0?void 0:a,tabindex:-1},d);return e.container===!0?T("div",{class:"q-layout-container overflow-hidden",ref:a},[T(ne,{onResize:y}),T("div",{class:"absolute-full",style:k.value},[T("div",{class:"scroll",style:b.value},[i])])]):i}}}),Yt=N({name:"QCardActions",props:{...ct,vertical:Boolean},setup(e,{slots:l}){const o=dt(e),r=u(()=>`q-card__actions ${o.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>T("div",{class:r.value},j(l.default))}});function Ae(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const l=parseInt(e,10);return isNaN(l)?0:l}var Xt=ft({name:"close-popup",beforeMount(e,{value:l}){const o={depth:Ae(l),handler(r){o.depth!==0&&setTimeout(()=>{const a=Vt(e);a!==void 0&&Bt(a,r,o.depth)})},handlerKey(r){vt(r,13)===!0&&o.handler(r)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:l,oldValue:o}){l!==o&&(e.__qclosepopup.depth=Ae(l))},beforeUnmount(e){const l=e.__qclosepopup;e.removeEventListener("click",l.handler),e.removeEventListener("keyup",l.handlerKey),delete e.__qclosepopup}});function Gt(e){var l;const o=we(e);return(l=o==null?void 0:o.$el)!=null?l:o}const re=Et?window:void 0;function De(...e){let l,o,r,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([o,r,a]=e,l=re):[l,o,r,a]=e,!l)return Wt;Array.isArray(o)||(o=[o]),Array.isArray(r)||(r=[r]);const c=[],S=()=>{c.forEach(n=>n()),c.length=0},O=(n,q,k,b)=>(n.addEventListener(q,k,b),()=>n.removeEventListener(q,k,b)),L=w(()=>[Gt(l),we(a)],([n,q])=>{if(S(),!n)return;const k=Mt(q)?{...q}:q;c.push(...o.flatMap(b=>r.map(g=>O(n,b,g,k))))},{immediate:!0,flush:"post"}),x=()=>{L(),S()};return It(x),x}const ee=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof Te.global<"u"?Te.global:typeof self<"u"?self:{},te="__vueuse_ssr_handlers__",Zt=ea();function ea(){return te in ee||(ee[te]=ee[te]||{}),ee[te]}function ta(e,l){return Zt[e]||l}function aa(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const oa={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Re="vueuse-storage";function na(e,l,o,r={}){var a;const{flush:c="pre",deep:S=!0,listenToStorageChanges:O=!0,writeDefaults:L=!0,mergeDefaults:x=!1,shallow:n,window:q=re,eventFilter:k,onError:b=f=>{console.error(f)},initOnMounted:g}=r,p=(n?ht:z)(typeof l=="function"?l():l);if(!o)try{o=ta("getDefaultStorage",()=>{var f;return(f=re)==null?void 0:f.localStorage})()}catch(f){b(f)}if(!o)return p;const y=we(l),h=aa(y),s=(a=r.serializer)!=null?a:oa[h],{pause:Q,resume:d}=Ht(p,()=>i(p.value),{flush:c,deep:S,eventFilter:k});return q&&O&&Nt(()=>{De(q,"storage",P),De(q,Re,R),g&&P()}),g||P(),p;function i(f){try{if(f==null)o.removeItem(e);else{const C=s.write(f),V=o.getItem(e);V!==C&&(o.setItem(e,C),q&&q.dispatchEvent(new CustomEvent(Re,{detail:{key:e,oldValue:V,newValue:C,storageArea:o}})))}}catch(C){b(C)}}function _(f){const C=f?f.newValue:o.getItem(e);if(C==null)return L&&y!==null&&o.setItem(e,s.write(y)),y;if(!f&&x){const V=s.read(C);return typeof x=="function"?x(V,y):h==="object"&&!Array.isArray(V)?{...y,...V}:V}else return typeof C!="string"?C:s.read(C)}function R(f){P(f.detail)}function P(f){if(!(f&&f.storageArea!==o)){if(f&&f.key==null){p.value=y;return}if(!(f&&f.key!==e)){Q();try{(f==null?void 0:f.newValue)!==s.write(p.value)&&(p.value=_(f))}catch(C){b(C)}finally{f?ye(d):d()}}}}}function ra(e,l,o={}){const{window:r=re}=o;return na(e,l,r==null?void 0:r.localStorage,o)}const la=I("div",{class:"text-h6"},"Disclaimer",-1),ia=I("div",{class:"col"},"I have read, understand and accept these terms.",-1),sa={__name:"DisclaimerDialog",setup(e){const l=z(!1),o=z(ra("disclaimer_ack",!0));return(r,a)=>(ae(),oe(kt,{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=c=>o.value=c),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:$(()=>[m(Rt,{flat:"",class:"text-white",style:{width:"500px"}},{default:$(()=>[m(ge,{class:"bg-secondary"},{default:$(()=>[la]),_:1}),m(ge,{class:"q-pt-md"},{default:$(()=>[mt(' THIS INTERFACE AND THE ESCROW PROTOCOL ARE PROVIDED "AS IS", AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND. The Interface does not provide, own, or control transactions conducted on the protocol or via related smart contracts. By using or accessing this Interface or the Escrow Protocol and related smart contracts, you agree that no developer or entity involved in creating, deploying or maintaining this Interface or the Escrow Protocol will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of, this Interface or the Escrow Protocol, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, digital assets, tokens, or anything else of value. ')]),_:1}),m(ge,{class:"row bg-secondary items-center"},{default:$(()=>[ia,m(St,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=c=>l.value=c),color:"accent"},null,8,["modelValue"])]),_:1}),m(Yt,{align:"right"},{default:$(()=>[Pe(m(We,{disable:!l.value,class:"full-width",color:"primary",label:"Agree and continue"},null,8,["disable"]),[[Xt]])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},ua="0.2.6-beta";const ca={class:"col"},da={class:"col text-right text-subtitle2"},fa={class:""},xa=gt({__name:"MainLayout",setup(e){const l=z();return(o,r)=>{const a=yt("router-view");return ae(),oe(Jt,{view:"hHh lpr fFf"},{default:$(()=>[m(Ft,{class:"bg-dark"},{default:$(()=>[m(Oe,{class:"q-ma-none q-pa-none"},{default:$(()=>[m(xt,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=c=>l.value=c),shrink:"",stretch:"","active-bg-color":"primary"},{default:$(()=>[m(G,{to:"/",class:bt(W(wt)().is_whitelisted?"bg-blue":"")},{default:$(()=>[m(ze,null,{default:$(()=>[m(qe,{src:"logo.svg"})]),_:1})]),_:1},8,["class"]),m(G,{name:"tab_escrow",icon:"countertops",to:"/escrow"}),m(G,{name:"tab_manage",icon:"design_services",to:"/manage"}),m(G,{name:"tab_faq",icon:"quiz",to:"/faq"})]),_:1},8,["modelValue"]),m(ot),m(W(pt),{dark:""})]),_:1}),m(Qe)]),_:1}),W(ke)().showLeftDrawer?(ae(),oe(Be,{key:0,"show-if-above":"",side:"left",bordered:""},{default:$(()=>[m(qt)]),_:1})):$e("",!0),W(ke)().showRightDrawer?(ae(),oe(Be,{key:1,"show-if-above":"",side:"right",bordered:""},{default:$(()=>[m(Ct)]),_:1})):$e("",!0),m(jt,null,{default:$(()=>[m(sa,{class:"col-1"}),m(a,{style:{background:`linear-gradient(
            339deg,
            rgba(124, 2, 57, 1) 0%,
            rgba(17, 45, 79, 1) 60%,
            rgba(20, 71, 130, 1) 100%
          )`}})]),_:1}),m(Kt,{class:"bg-dark"},{default:$(()=>[m(Qe),m(Oe,null,{default:$(()=>[m(Ut,{class:"row items-center"},{default:$(()=>[I("div",ca,[m(qe,{src:" sa-powered_by_the_people.png",width:"100px"})]),I("div",{class:"col text-subtitle2 text-center",style:{"font-size":"10px"},onClick:r[1]||(r[1]=c=>W(rt)("budkxEapRhWjRYXSEurLjyT9jpsd92y1smqMYzSBgTC"))},Le(W(nt)("budkxEapRhWjRYXSEurLjyT9jpsd92y1smqMYzSBgTC")),1),I("div",da,"v"+Le(W(ua)),1),I("div",fa,[m(We,{flat:"",class:"q-mx-sm",round:"",to:"/settings"},{default:$(()=>[m(ze,{size:"30px"},{default:$(()=>[m(_t,{name:"settings"})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{xa as default};
