import{a as c,c as w,b as h,d as x,_ as y,e as Q}from"./DiscordLinkButton.736c070d.js";import{Q as l}from"./QCardSection.8573565b.js";import{Q as n}from"./QCard.00b690b9.js";import{Q as g}from"./QPage.c04464cc.js";import{a5 as b,ac as t,aQ as f,b8 as k,G as C,P as u,bz as i,Z as _,$ as p,a0 as e,a1 as a,a4 as o,a8 as r,aG as $,a7 as q}from"./index.0d96c4a5.js";import{d as v}from"./index.564f1c1f.js";import"./use-key-composition.5785be4a.js";const B=o("p",{class:"text-h4 q-pa-sm"},"Offer",-1),P={class:"col-4"},S={class:"col-3"},D=o("div",{class:"col text-center text-h2"},"Offer does not exist anymore!",-1),M=b({__name:"EscrowViewPage",setup(G){return t().showRightDrawer=!1,t().showLeftDrawer=!1,f(),k(),C(async()=>{const s=new u(i().params.account);await t().load_escrow(s)}),v(()=>{var s;return(s=i())==null?void 0:s.params},async()=>{const s=new u(i().params.account);await t().load_escrow(s)}),(s,d)=>(_(),p(g,{class:"q-gutter-y-sm"},{default:e(()=>[a(n,{flat:""},{default:e(()=>[a(l,{class:"row q-gutter-x-sm items-center"},{default:e(()=>[B,a(c),o("p",{class:"text-h6",onClick:d[0]||(d[0]=R=>{var m;return r(w)(((m=r(t)().escrow_selected)==null?void 0:m.publicKey.toString())??"")})}),a(c),a(h),a(x)]),_:1})]),_:1}),r(t)().escrow_selected?(_(),$("div",{key:0,class:q(["q-px-sm q-gutter-x-sm",r(f)().screen.lt.md?"col":"row"])},[a(c),o("div",P,[a(y)]),o("div",S,[a(n,{flat:"",class:"full-height"},{default:e(()=>[a(l,null,{default:e(()=>[a(Q)]),_:1})]),_:1})]),a(c)],2)):(_(),p(n,{key:1,flat:""},{default:e(()=>[a(l,null,{default:e(()=>[D]),_:1})]),_:1}))]),_:1}))}});export{M as default};
