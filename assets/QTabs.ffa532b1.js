import{aF as m,bZ as ne,aJ as Ee,c1 as ee,cf as Te,J as w,ah as g,aT as U,aX as X,bz as ze,cg as De,ch as fe,ci as Qe,cj as Oe,ck as G,cc as We,aC as ae,cl as je,ca as Fe,c5 as Ve,aQ as be,c7 as he,bs as N,b3 as He,aV as Ke,aR as Ne,c0 as Ue}from"./index.82e60bfd.js";import{u as Xe,a as te,b as ge,r as Ge}from"./rtl.00570d91.js";const Je=m("div",{class:"q-space"});var ot=ne({name:"QSpace",setup(){return()=>Je}});let Ze=0;const lt=["click","keydown"],rt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Ze++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function it(e,B,v,i){const o=Ee(Te,ee);if(o===ee)return console.error("QTab/QRouteTab component needs to be child of QTabs"),ee;const{proxy:P}=ae(),_=w(null),I=w(null),d=w(null),f=g(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),q=g(()=>o.currentModel.value===e.name),z=g(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(q.value===!0?" q-tab--active"+(o.tabProps.value.activeClass?" "+o.tabProps.value.activeClass:"")+(o.tabProps.value.activeColor?` text-${o.tabProps.value.activeColor}`:"")+(o.tabProps.value.activeBgColor?` bg-${o.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&o.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||o.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(i!==void 0?i.linkClass.value:"")),M=g(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(o.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),y=g(()=>e.disable===!0||o.hasFocus.value===!0||q.value===!1&&o.hasActiveTab.value===!0?-1:e.tabindex||0);function S(l,T){if(T!==!0&&_.value!==null&&_.value.focus(),e.disable===!0){i!==void 0&&i.hasRouterLink.value===!0&&fe(l);return}if(i===void 0){o.updateModel({name:e.name}),v("click",l);return}if(i.hasRouterLink.value===!0){const C=(b={})=>{let R;const k=b.to===void 0||je(b.to,e.to)===!0?o.avoidRouteWatcher=Xe():null;return i.navigateToRouterLink(l,{...b,returnRouterError:!0}).catch(E=>{R=E}).then(E=>{if(k===o.avoidRouteWatcher&&(o.avoidRouteWatcher=!1,R===void 0&&(E===void 0||E.message.startsWith("Avoided redundant navigation")===!0)&&o.updateModel({name:e.name})),b.returnRouterError===!0)return R!==void 0?Promise.reject(R):E})};v("click",l,C),l.defaultPrevented!==!0&&C();return}v("click",l)}function x(l){Qe(l,[13,32])?S(l,!0):Oe(l)!==!0&&l.keyCode>=35&&l.keyCode<=40&&l.altKey!==!0&&l.metaKey!==!0&&o.onKbdNavigate(l.keyCode,P.$el)===!0&&fe(l),v("keydown",l)}function W(){const l=o.tabProps.value.narrowIndicator,T=[],C=m("div",{ref:d,class:["q-tab__indicator",o.tabProps.value.indicatorClass]});e.icon!==void 0&&T.push(m(G,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&T.push(m("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&T.push(e.alertIcon!==void 0?m(G,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):m("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),l===!0&&T.push(C);const b=[m("div",{class:"q-focus-helper",tabindex:-1,ref:_}),m("div",{class:M.value},We(B.default,T))];return l===!1&&b.push(C),b}const D={name:g(()=>e.name),rootRef:I,tabIndicatorRef:d,routeData:i};U(()=>{o.unregisterTab(D)}),X(()=>{o.registerTab(D)});function j(l,T){const C={ref:I,class:z.value,tabindex:y.value,role:"tab","aria-selected":q.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:S,onKeydown:x,...T};return ze(m(l,C,W()),[[De,f.value]])}return{renderTab:j,$tabs:o}}function Ye(){const e=w(!Fe.value);return e.value===!1&&X(()=>{e.value=!0}),e}const we=typeof ResizeObserver<"u",me=we===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var pe=ne({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:B}){let v=null,i,o={width:-1,height:-1};function P(d){d===!0||e.debounce===0||e.debounce==="0"?_():v===null&&(v=setTimeout(_,e.debounce))}function _(){if(v!==null&&(clearTimeout(v),v=null),i){const{offsetWidth:d,offsetHeight:f}=i;(d!==o.width||f!==o.height)&&(o={width:d,height:f},B("resize",o))}}const{proxy:I}=ae();if(we===!0){let d;const f=q=>{i=I.$el.parentNode,i?(d=new ResizeObserver(P),d.observe(i),_()):q!==!0&&be(()=>{f(!0)})};return X(()=>{f()}),U(()=>{v!==null&&clearTimeout(v),d!==void 0&&(d.disconnect!==void 0?d.disconnect():i&&d.unobserve(i))}),Ve}else{let q=function(){v!==null&&(clearTimeout(v),v=null),f!==void 0&&(f.removeEventListener!==void 0&&f.removeEventListener("resize",P,he.passive),f=void 0)},z=function(){q(),i&&i.contentDocument&&(f=i.contentDocument.defaultView,f.addEventListener("resize",P,he.passive),_())};const d=Ye();let f;return X(()=>{be(()=>{i=I.$el,i&&z()})}),U(q),I.trigger=P,()=>{if(d.value===!0)return m("object",{style:me.style,tabindex:-1,type:"text/html",data:me.url,"aria-hidden":"true",onLoad:z})}}}});function et(e,B,v){const i=v===!0?["left","right"]:["top","bottom"];return`absolute-${B===!0?i[0]:i[1]}${e?` text-${e}`:""}`}const tt=["left","center","right","justify"];var ut=ne({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>tt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:B,emit:v}){const{proxy:i}=ae(),{$q:o}=i,{registerTick:P}=te(),{registerTick:_}=te(),{registerTick:I}=te(),{registerTimeout:d,removeTimeout:f}=ge(),{registerTimeout:q,removeTimeout:z}=ge(),M=w(null),y=w(null),S=w(e.modelValue),x=w(!1),W=w(!0),D=w(!1),j=w(!1),l=[],T=w(0),C=w(!1);let b=null,R=null,k;const E=g(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:et(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),ye=g(()=>{const t=T.value,n=S.value;for(let a=0;a<t;a++)if(l[a].name.value===n)return!0;return!1}),Ce=g(()=>`q-tabs__content--align-${x.value===!0?"left":j.value===!0?"justify":e.align}`),qe=g(()=>`q-tabs row no-wrap items-center q-tabs--${x.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Re=g(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Ce.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),F=g(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),V=g(()=>e.vertical!==!0&&o.lang.rtl===!0),J=g(()=>Ge===!1&&V.value===!0);N(V,O),N(()=>e.modelValue,t=>{Z({name:t,setCurrent:!0,skipEmit:!0})}),N(()=>e.outsideArrows,H);function Z({name:t,setCurrent:n,skipEmit:a}){S.value!==t&&(a!==!0&&e["onUpdate:modelValue"]!==void 0&&v("update:modelValue",t),(n===!0||e["onUpdate:modelValue"]===void 0)&&(_e(S.value,t),S.value=t))}function H(){P(()=>{oe({width:M.value.offsetWidth,height:M.value.offsetHeight})})}function oe(t){if(F.value===void 0||y.value===null)return;const n=t[F.value.container],a=Math.min(y.value[F.value.scroll],Array.prototype.reduce.call(y.value.children,(c,u)=>c+(u[F.value.content]||0),0)),s=n>0&&a>n;x.value=s,s===!0&&_(O),j.value=n<parseInt(e.breakpoint,10)}function _e(t,n){const a=t!=null&&t!==""?l.find(c=>c.name.value===t):null,s=n!=null&&n!==""?l.find(c=>c.name.value===n):null;if(a&&s){const c=a.tabIndicatorRef.value,u=s.tabIndicatorRef.value;b!==null&&(clearTimeout(b),b=null),c.style.transition="none",c.style.transform="none",u.style.transition="none",u.style.transform="none";const r=c.getBoundingClientRect(),h=u.getBoundingClientRect();u.style.transform=e.vertical===!0?`translate3d(0,${r.top-h.top}px,0) scale3d(1,${h.height?r.height/h.height:1},1)`:`translate3d(${r.left-h.left}px,0,0) scale3d(${h.width?r.width/h.width:1},1,1)`,I(()=>{b=setTimeout(()=>{b=null,u.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",u.style.transform="none"},70)})}s&&x.value===!0&&Q(s.rootRef.value)}function Q(t){const{left:n,width:a,top:s,height:c}=y.value.getBoundingClientRect(),u=t.getBoundingClientRect();let r=e.vertical===!0?u.top-s:u.left-n;if(r<0){y.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(r),O();return}r+=e.vertical===!0?u.height-c:u.width-a,r>0&&(y.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(r),O())}function O(){const t=y.value;if(t===null)return;const n=t.getBoundingClientRect(),a=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);V.value===!0?(W.value=Math.ceil(a+n.width)<t.scrollWidth-1,D.value=a>0):(W.value=a>0,D.value=e.vertical===!0?Math.ceil(a+n.height)<t.scrollHeight:Math.ceil(a+n.width)<t.scrollWidth)}function le(t){R!==null&&clearInterval(R),R=setInterval(()=>{Le(t)===!0&&A()},5)}function re(){le(J.value===!0?Number.MAX_SAFE_INTEGER:0)}function ie(){le(J.value===!0?0:Number.MAX_SAFE_INTEGER)}function A(){R!==null&&(clearInterval(R),R=null)}function Se(t,n){const a=Array.prototype.filter.call(y.value.children,h=>h===n||h.matches&&h.matches(".q-tab.q-focusable")===!0),s=a.length;if(s===0)return;if(t===36)return Q(a[0]),a[0].focus(),!0;if(t===35)return Q(a[s-1]),a[s-1].focus(),!0;const c=t===(e.vertical===!0?38:37),u=t===(e.vertical===!0?40:39),r=c===!0?-1:u===!0?1:void 0;if(r!==void 0){const h=V.value===!0?-1:1,L=a.indexOf(n)+r*h;return L>=0&&L<s&&(Q(a[L]),a[L].focus({preventScroll:!0})),!0}}const ke=g(()=>J.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,n)=>{t.scrollLeft=-n}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,n)=>{t.scrollTop=n}}:{get:t=>t.scrollLeft,set:(t,n)=>{t.scrollLeft=n}});function Le(t){const n=y.value,{get:a,set:s}=ke.value;let c=!1,u=a(n);const r=t<u?-1:1;return u+=r*5,u<0?(c=!0,u=0):(r===-1&&u<=t||r===1&&u>=t)&&(c=!0,u=t),s(n,u),O(),c}function ue(t,n){for(const a in t)if(t[a]!==n[a])return!1;return!0}function Pe(){let t=null,n={matchedLen:0,queryDiff:9999,hrefLen:0};const a=l.filter(r=>r.routeData!==void 0&&r.routeData.hasRouterLink.value===!0),{hash:s,query:c}=i.$route,u=Object.keys(c).length;for(const r of a){const h=r.routeData.exact.value===!0;if(r.routeData[h===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:L,query:Y,matched:Be,href:Me}=r.routeData.resolvedLink.value,p=Object.keys(Y).length;if(h===!0){if(L!==s||p!==u||ue(c,Y)===!1)continue;t=r.name.value;break}if(L!==""&&L!==s||p!==0&&ue(Y,c)===!1)continue;const $={matchedLen:Be.length,queryDiff:u-p,hrefLen:Me.length-L.length};if($.matchedLen>n.matchedLen){t=r.name.value,n=$;continue}else if($.matchedLen!==n.matchedLen)continue;if($.queryDiff<n.queryDiff)t=r.name.value,n=$;else if($.queryDiff!==n.queryDiff)continue;$.hrefLen>n.hrefLen&&(t=r.name.value,n=$)}t===null&&l.some(r=>r.routeData===void 0&&r.name.value===S.value)===!0||Z({name:t,setCurrent:!0})}function Ie(t){if(f(),C.value!==!0&&M.value!==null&&t.target&&typeof t.target.closest=="function"){const n=t.target.closest(".q-tab");n&&M.value.contains(n)===!0&&(C.value=!0,x.value===!0&&Q(n))}}function xe(){d(()=>{C.value=!1},30)}function K(){ce.avoidRouteWatcher===!1?q(Pe):z()}function se(){if(k===void 0){const t=N(()=>i.$route.fullPath,K);k=()=>{t(),k=void 0}}}function Ae(t){l.push(t),T.value++,H(),t.routeData===void 0||i.$route===void 0?q(()=>{if(x.value===!0){const n=S.value,a=n!=null&&n!==""?l.find(s=>s.name.value===n):null;a&&Q(a.rootRef.value)}}):(se(),t.routeData.hasRouterLink.value===!0&&K())}function $e(t){l.splice(l.indexOf(t),1),T.value--,H(),k!==void 0&&t.routeData!==void 0&&(l.every(n=>n.routeData===void 0)===!0&&k(),K())}const ce={currentModel:S,tabProps:E,hasFocus:C,hasActiveTab:ye,registerTab:Ae,unregisterTab:$e,verifyRouteModel:K,updateModel:Z,onKbdNavigate:Se,avoidRouteWatcher:!1};He(Te,ce);function ve(){b!==null&&clearTimeout(b),A(),k!==void 0&&k()}let de;return U(ve),Ke(()=>{de=k!==void 0,ve()}),Ne(()=>{de===!0&&se(),H()}),()=>m("div",{ref:M,class:qe.value,role:"tablist",onFocusin:Ie,onFocusout:xe},[m(pe,{onResize:oe}),m("div",{ref:y,class:Re.value,onScroll:O},Ue(B.default)),m(G,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(W.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||o.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:re,onTouchstartPassive:re,onMouseupPassive:A,onMouseleavePassive:A,onTouchendPassive:A}),m(G,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(D.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||o.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:ie,onTouchstartPassive:ie,onMouseupPassive:A,onMouseleavePassive:A,onTouchendPassive:A})])}});export{pe as Q,lt as a,it as b,ot as c,ut as d,rt as u};
