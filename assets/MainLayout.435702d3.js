import{Q as ie,a as De,b as Fe}from"./QList.39ea5e92.js";import{t as F,u as n,v as q,w as re,x as ue,y as P,z as G,A as p,C as m,D as se,E as Ae,F as N,G as Te,H as me,I as Ie,J as he,K as Ce,L as Ne,M as Ee,N as Ue,O as je,Q as Ke,R as Ge,S as Xe,T as le,U as j,V as Je,X as Ye,Y as Ze,Z as et,$ as ge,a0 as be,a1 as L,a2 as y,a3 as ye,a4 as tt,a5 as oe,a6 as at,a7 as we,a8 as lt,a9 as ot,aa as nt,ab as it}from"./index.b8311b6f.js";import{T as ne,Q as xe}from"./waitForTransactionConfirmation.22b79b48.js";import{Q as Se,_ as rt}from"./EscrowTakeDrawer.ad1298c5.js";import{u as ut,a as st,b as ct,c as dt,d as ft,e as vt}from"./QItemLabel.49e75ffd.js";import{u as mt,a as ht,b as K}from"./use-key-composition.b6bda01f.js";import"./EscrowTakeView.5546625a.js";var gt=F({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:w}){const r=n(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>q("div",{class:r.value,role:"toolbar"},re(w.default))}}),bt=F({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:w,emit:r}){const{proxy:{$q:i}}=N(),l=ue(G,P);if(l===P)return console.error("QHeader needs to be child of QLayout"),P;const c=p(parseInt(e.heightHint,10)),b=p(!0),z=n(()=>e.reveal===!0||l.view.value.indexOf("H")>-1||i.platform.is.ios&&l.isContainer.value===!0),$=n(()=>{if(e.modelValue!==!0)return 0;if(z.value===!0)return b.value===!0?c.value:0;const o=c.value-l.scroll.value.position;return o>0?o:0}),h=n(()=>e.modelValue!==!0||z.value===!0&&b.value!==!0),a=n(()=>e.modelValue===!0&&h.value===!0&&e.reveal===!0),k=n(()=>"q-header q-layout__section--marginal "+(z.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(h.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),x=n(()=>{const o=l.rows.value.top,T={};return o[0]==="l"&&l.left.space===!0&&(T[i.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),o[2]==="r"&&l.right.space===!0&&(T[i.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),T});function d(o,T){l.update("header",o,T)}function f(o,T){o.value!==T&&(o.value=T)}function Q({height:o}){f(c,o),d("size",o)}function S(o){a.value===!0&&f(b,!0),r("focusin",o)}m(()=>e.modelValue,o=>{d("space",o),f(b,!0),l.animate()}),m($,o=>{d("offset",o)}),m(()=>e.reveal,o=>{o===!1&&f(b,e.modelValue)}),m(b,o=>{l.animate(),r("reveal",o)}),m(l.scroll,o=>{e.reveal===!0&&f(b,o.direction==="up"||o.position<=e.revealOffset||o.position-o.inflectionPoint<100)});const v={};return l.instances.header=v,e.modelValue===!0&&d("size",c.value),d("space",e.modelValue),d("offset",$.value),se(()=>{l.instances.header===v&&(l.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const o=Ae(w.default,[]);return e.elevated===!0&&o.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(q(ie,{debounce:0,onResize:Q})),q("header",{class:k.value,style:x.value,onFocusin:S},o)}}});const qe=150;var yt=F({name:"QDrawer",inheritAttrs:!1,props:{...ut,...mt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...st,"onLayout","miniState"],setup(e,{slots:w,emit:r,attrs:i}){const l=N(),{proxy:{$q:c}}=l,b=ht(e,c),{preventBodyScroll:z}=vt(),{registerTimeout:$,removeTimeout:h}=ct(),a=ue(G,P);if(a===P)return console.error("QDrawer needs to be child of QLayout"),P;let k,x=null,d;const f=p(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),Q=n(()=>e.mini===!0&&f.value!==!0),S=n(()=>Q.value===!0?e.miniWidth:e.width),v=p(e.showIfAbove===!0&&f.value===!1?!0:e.modelValue===!0),o=n(()=>e.persistent!==!0&&(f.value===!0||ze.value===!0));function T(t,u){if(H(),t!==!1&&a.animate(),B(0),f.value===!0){const C=a.instances[E.value];C!==void 0&&C.belowBreakpoint===!0&&C.hide(!1),M(1),a.isContainer.value!==!0&&z(!0)}else M(0),t!==!1&&ee(!1);$(()=>{t!==!1&&ee(!0),u!==!0&&r("show",t)},qe)}function s(t,u){A(),t!==!1&&a.animate(),M(0),B(R.value*S.value),te(),u!==!0?$(()=>{r("hide",t)},qe):h()}const{show:g,hide:_}=dt({showing:v,hideOnRouteChange:o,handleShow:T,handleHide:s}),{addToHistory:H,removeFromHistory:A}=ft(v,_,o),W={belowBreakpoint:f,hide:_},O=n(()=>e.side==="right"),R=n(()=>(c.lang.rtl===!0?-1:1)*(O.value===!0?1:-1)),ce=p(0),D=p(!1),X=p(!1),de=p(S.value*R.value),E=n(()=>O.value===!0?"left":"right"),J=n(()=>v.value===!0&&f.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:S.value:0),Y=n(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(O.value?"R":"L")>-1||c.platform.is.ios===!0&&a.isContainer.value===!0),I=n(()=>e.overlay===!1&&v.value===!0&&f.value===!1),ze=n(()=>e.overlay===!0&&v.value===!0&&f.value===!1),$e=n(()=>"fullscreen q-drawer__backdrop"+(v.value===!1&&D.value===!1?" hidden":"")),_e=n(()=>({backgroundColor:`rgba(0,0,0,${ce.value*.4})`})),fe=n(()=>O.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),ke=n(()=>O.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),Be=n(()=>{const t={};return a.header.space===!0&&fe.value===!1&&(Y.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&ke.value===!1&&(Y.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),Le=n(()=>{const t={width:`${S.value}px`,transform:`translateX(${de.value}px)`};return f.value===!0?t:Object.assign(t,Be.value)}),Qe=n(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Oe=n(()=>`q-drawer q-drawer--${e.side}`+(X.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(b.value===!0?" q-drawer--dark q-dark":"")+(D.value===!0?" no-transition":v.value===!0?"":" q-layout--prevent-focus")+(f.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${Q.value===!0?"mini":"standard"}`+(Y.value===!0||I.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(fe.value===!0?" q-drawer--top-padding":""))),Pe=n(()=>{const t=c.lang.rtl===!0?e.side:E.value;return[[ne,We,void 0,{[t]:!0,mouse:!0}]]}),Me=n(()=>{const t=c.lang.rtl===!0?E.value:e.side;return[[ne,ve,void 0,{[t]:!0,mouse:!0}]]}),Ve=n(()=>{const t=c.lang.rtl===!0?E.value:e.side;return[[ne,ve,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function Z(){Re(f,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}m(f,t=>{t===!0?(k=v.value,v.value===!0&&_(!1)):e.overlay===!1&&e.behavior!=="mobile"&&k!==!1&&(v.value===!0?(B(0),M(0),te()):g(!1))}),m(()=>e.side,(t,u)=>{a.instances[u]===W&&(a.instances[u]=void 0,a[u].space=!1,a[u].offset=0),a.instances[t]=W,a[t].size=S.value,a[t].space=I.value,a[t].offset=J.value}),m(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&Z()}),m(()=>e.behavior+e.breakpoint,Z),m(a.isContainer,t=>{v.value===!0&&z(t!==!0),t===!0&&Z()}),m(a.scrollbarWidth,()=>{B(v.value===!0?0:void 0)}),m(J,t=>{V("offset",t)}),m(I,t=>{r("onLayout",t),V("space",t)}),m(O,()=>{B()}),m(S,t=>{B(),ae(e.miniToOverlay,t)}),m(()=>e.miniToOverlay,t=>{ae(t,S.value)}),m(()=>c.lang.rtl,()=>{B()}),m(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(He(),a.animate())}),m(Q,t=>{r("miniState",t)});function B(t){t===void 0?me(()=>{t=v.value===!0?0:S.value,B(R.value*t)}):(a.isContainer.value===!0&&O.value===!0&&(f.value===!0||Math.abs(t)===S.value)&&(t+=R.value*a.scrollbarWidth.value),de.value=t)}function M(t){ce.value=t}function ee(t){const u=t===!0?"remove":a.isContainer.value!==!0?"add":"";u!==""&&document.body.classList[u]("q-body--drawer-toggle")}function He(){x!==null&&clearTimeout(x),l.proxy&&l.proxy.$el&&l.proxy.$el.classList.add("q-drawer--mini-animate"),X.value=!0,x=setTimeout(()=>{x=null,X.value=!1,l&&l.proxy&&l.proxy.$el&&l.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function We(t){if(v.value!==!1)return;const u=S.value,C=K(t.distance.x,0,u);if(t.isFinal===!0){C>=Math.min(75,u)===!0?g():(a.animate(),M(0),B(R.value*u)),D.value=!1;return}B((c.lang.rtl===!0?O.value!==!0:O.value)?Math.max(u-C,0):Math.min(0,C-u)),M(K(C/u,0,1)),t.isFirst===!0&&(D.value=!0)}function ve(t){if(v.value!==!0)return;const u=S.value,C=t.direction===e.side,U=(c.lang.rtl===!0?C!==!0:C)?K(t.distance.x,0,u):0;if(t.isFinal===!0){Math.abs(U)<Math.min(75,u)===!0?(a.animate(),M(1),B(0)):_(),D.value=!1;return}B(R.value*U),M(K(1-U/u,0,1)),t.isFirst===!0&&(D.value=!0)}function te(){z(!1),ee(!0)}function V(t,u){a.update(e.side,t,u)}function Re(t,u){t.value!==u&&(t.value=u)}function ae(t,u){V("size",t===!0?e.miniWidth:u)}return a.instances[e.side]=W,ae(e.miniToOverlay,S.value),V("space",I.value),V("offset",J.value),e.showIfAbove===!0&&e.modelValue!==!0&&v.value===!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),Te(()=>{r("onLayout",I.value),r("miniState",Q.value),k=e.showIfAbove===!0;const t=()=>{(v.value===!0?T:s)(!1,!0)};if(a.totalWidth.value!==0){me(t);return}d=m(a.totalWidth,()=>{d(),d=void 0,v.value===!1&&e.showIfAbove===!0&&f.value===!1?g(!1):t()})}),se(()=>{d!==void 0&&d(),x!==null&&(clearTimeout(x),x=null),v.value===!0&&te(),a.instances[e.side]===W&&(a.instances[e.side]=void 0,V("size",0),V("offset",0),V("space",!1))}),()=>{const t=[];f.value===!0&&(e.noSwipeOpen===!1&&t.push(Ie(q("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Pe.value)),t.push(he("div",{ref:"backdrop",class:$e.value,style:_e.value,"aria-hidden":"true",onClick:_},void 0,"backdrop",e.noSwipeBackdrop!==!0&&v.value===!0,()=>Ve.value)));const u=Q.value===!0&&w.mini!==void 0,C=[q("div",{...i,key:""+u,class:[Qe.value,i.class]},u===!0?w.mini():re(w.default))];return e.elevated===!0&&v.value===!0&&C.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(he("aside",{ref:"content",class:Oe.value,style:Le.value},C,"contentclose",e.noSwipeClose!==!0&&f.value===!0,()=>Me.value)),q("div",{class:"q-drawer-container"},t)}}}),wt=F({name:"QPageContainer",setup(e,{slots:w}){const{proxy:{$q:r}}=N(),i=ue(G,P);if(i===P)return console.error("QPageContainer needs to be child of QLayout"),P;Ce(Ne,!0);const l=n(()=>{const c={};return i.header.space===!0&&(c.paddingTop=`${i.header.size}px`),i.right.space===!0&&(c[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(c.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(c[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),c});return()=>q("div",{class:"q-page-container",style:l.value},re(w.default))}});const{passive:pe}=je,xt=["both","horizontal","vertical"];var St=F({name:"QScrollObserver",props:{axis:{type:String,validator:e=>xt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:w}){const r={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,l,c;m(()=>e.scrollTarget,()=>{$(),z()});function b(){i!==null&&i();const k=Math.max(0,Ke(l)),x=Ge(l),d={top:k-r.position.top,left:x-r.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const f=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";r.position={top:k,left:x},r.directionChanged=r.direction!==f,r.delta=d,r.directionChanged===!0&&(r.direction=f,r.inflectionPoint=r.position),w("scroll",{...r})}function z(){l=Ue(c,e.scrollTarget),l.addEventListener("scroll",h,pe),h(!0)}function $(){l!==void 0&&(l.removeEventListener("scroll",h,pe),l=void 0)}function h(k){if(k===!0||e.debounce===0||e.debounce==="0")b();else if(i===null){const[x,d]=e.debounce?[setTimeout(b,e.debounce),clearTimeout]:[requestAnimationFrame(b),cancelAnimationFrame];i=()=>{d(x),i=null}}}const{proxy:a}=N();return m(()=>a.$q.lang.rtl,b),Te(()=>{c=a.$el.parentNode,z()}),se(()=>{i!==null&&i(),$()}),Object.assign(a,{trigger:h,getPosition:()=>r}),Ee}}),qt=F({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:w,emit:r}){const{proxy:{$q:i}}=N(),l=p(null),c=p(i.screen.height),b=p(e.container===!0?0:i.screen.width),z=p({position:0,direction:"down",inflectionPoint:0}),$=p(0),h=p(Xe.value===!0?0:le()),a=n(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),k=n(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),x=n(()=>h.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${h.value}px`}:null),d=n(()=>h.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${h.value}px`,width:`calc(100% + ${h.value}px)`}:null);function f(s){if(e.container===!0||document.qScrollPrevented!==!0){const g={position:s.position.top,direction:s.direction,directionChanged:s.directionChanged,inflectionPoint:s.inflectionPoint.top,delta:s.delta.top};z.value=g,e.onScroll!==void 0&&r("scroll",g)}}function Q(s){const{height:g,width:_}=s;let H=!1;c.value!==g&&(H=!0,c.value=g,e.onScrollHeight!==void 0&&r("scrollHeight",g),v()),b.value!==_&&(H=!0,b.value=_),H===!0&&e.onResize!==void 0&&r("resize",s)}function S({height:s}){$.value!==s&&($.value=s,v())}function v(){if(e.container===!0){const s=c.value>$.value?le():0;h.value!==s&&(h.value=s)}}let o=null;const T={instances:{},view:n(()=>e.view),isContainer:n(()=>e.container),rootRef:l,height:c,containerHeight:$,scrollbarWidth:h,totalWidth:n(()=>b.value+h.value),rows:n(()=>{const s=e.view.toLowerCase().split(" ");return{top:s[0].split(""),middle:s[1].split(""),bottom:s[2].split("")}}),header:j({size:0,offset:0,space:!1}),right:j({size:300,offset:0,space:!1}),footer:j({size:0,offset:0,space:!1}),left:j({size:300,offset:0,space:!1}),scroll:z,animate(){o!==null?clearTimeout(o):document.body.classList.add("q-body--layout-animate"),o=setTimeout(()=>{o=null,document.body.classList.remove("q-body--layout-animate")},155)},update(s,g,_){T[s][g]=_}};if(Ce(G,T),le()>0){let _=function(){s=null,g.classList.remove("hide-scrollbar")},H=function(){if(s===null){if(g.scrollHeight>i.screen.height)return;g.classList.add("hide-scrollbar")}else clearTimeout(s);s=setTimeout(_,300)},A=function(W){s!==null&&W==="remove"&&(clearTimeout(s),_()),window[`${W}EventListener`]("resize",H)},s=null;const g=document.body;m(()=>e.container!==!0?"add":"remove",A),e.container!==!0&&A("add"),Je(()=>{A("remove")})}return()=>{const s=Ye(w.default,[q(St,{onScroll:f}),q(ie,{onResize:Q})]),g=q("div",{class:a.value,style:k.value,ref:e.container===!0?void 0:l,tabindex:-1},s);return e.container===!0?q("div",{class:"q-layout-container overflow-hidden",ref:l},[q(ie,{onResize:S}),q("div",{class:"absolute-full",style:x.value},[q("div",{class:"scroll",style:d.value},[g])])]):g}}});const Lt=Ze({__name:"MainLayout",setup(e){const w=p();return(r,i)=>{const l=et("router-view");return ge(),be(qt,{view:"hHh lpR fFf"},{default:L(()=>[y(bt,{class:"bg-black"},{default:L(()=>[y(gt,{class:"q-ma-none q-pa-none"},{default:L(()=>[y(ye,{class:tt(["q-mx-sm",oe(at)().is_whitelisted?"bg-primary":""]),round:"",to:"/"},{default:L(()=>[y(we,{size:"50px"},{default:L(()=>[y(De,{src:"logo.png"})]),_:1})]),_:1},8,["class"]),y(xe),y(Fe,{modelValue:w.value,"onUpdate:modelValue":i[0]||(i[0]=c=>w.value=c),shrink:"",stretch:"","active-bg-color":"secondary"},{default:L(()=>[y(Se,{name:"tab_escrow",label:"Offers",icon:"countertops",to:"/escrow"}),y(Se,{name:"tab_create",icon:"handyman",label:"Edit",to:"/create"})]),_:1},8,["modelValue"]),y(xe),y(oe(lt),{dark:""}),y(ye,{class:"q-mx-sm",round:"",to:"/settings"},{default:L(()=>[y(we,{size:"30px"},{default:L(()=>[y(ot,{name:"settings"})]),_:1})]),_:1})]),_:1})]),_:1}),oe(nt)().showRightDrawer?(ge(),be(yt,{key:0,"show-if-above":"",side:"right",bordered:""},{default:L(()=>[y(rt)]),_:1})):it("",!0),y(wt,null,{default:L(()=>[y(l)]),_:1})]),_:1})}}});export{Lt as default};
