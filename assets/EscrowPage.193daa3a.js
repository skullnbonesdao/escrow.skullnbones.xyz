import{f as _,_ as f,g as d}from"./FilterEscrows.22db483b.js";import{Q as w}from"./QCard.13b9e245.js";import{Q as h}from"./QPage.707dc2dd.js";import{Q as l}from"./EscrowTakeView.2ca1dc1b.js";import{_ as y}from"./EscrowTable.a3f382b3.js";import{aa as u,ad as t,a3 as s,ay as c,a6 as e,aF as Q,ag as k,A as g,G as x,ai as n,X as b,a4 as i,a5 as a,ac as C,aH as m,aj as v}from"./index.7688b0fb.js";import"./use-key-composition.25d2cfbb.js";import"./QCardSection.ae18e1e0.js";import"./QSelect.519db975.js";const B={key:0,class:"row q-ma-md"},E={key:1},q=u({__name:"EscrowViews",props:["type","title"],setup(r){return(o,p)=>t(Q)().publicKey.value?(s(),c("div",E,[e(y,{escrow_filter:r.type,title:r.title},null,8,["escrow_filter","title"])])):(s(),c("div",B,[e(l),e(t(k),{dark:""}),e(l)]))}}),W=u({__name:"EscrowPage",setup(r){const o=g("open");return x(()=>{n().showLeftDrawer=!0}),b(()=>{n().showLeftDrawer=!1}),(p,L)=>(s(),i(h,{class:C((t(m)().screen.lt.md,"q-pa-md"))},{default:a(()=>[t(m)().screen.lt.md?(s(),i(w,{key:0,flat:"",class:"full-width"},{default:a(()=>[e(d,null,{default:a(()=>[e(_,{group:"somegroup",icon:"search",label:"Filters","header-class":"text-teal"},{default:a(()=>[e(f)]),_:1})]),_:1})]),_:1})):v("",!0),e(q,{type:o.value,title:"Public"},null,8,["type"])]),_:1},8,["class"]))}});export{W as default};
