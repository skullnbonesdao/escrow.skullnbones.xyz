import{Q as s,a as n}from"./QCardSection.f747afd8.js";import{Q as l}from"./QCard.dfe10abb.js";import{Q as d}from"./QPage.dae901b3.js";import{aa as h,G as f,ah as r,a3 as u,a4 as _,a5 as o,a9 as e,a6 as a,a7 as t,aj as i,ad as c,bA as b,aW as p}from"./index.9dc93246.js";const m={class:"q-gutter-y-md"},y=e("div",{class:"text-h3"},"FAQ",-1),g=e("div",{class:"text-h4"},"How to create an offer?",-1),v=e("div",null,[t(" Under "),e("b",null,"MANAGE/CREATE"),t(" you can create a new offer. To create an offer for the asset you need to provide 2 tokens. "),e("br"),e("br"),t(" 1. The token you want to offer "),e("br"),t(" 2. the token you want in exchange "),e("br"),t(" 3. Set the amounts for both tokens and continue if needed in the "),e("b",null,"advanced section"),t(". ")],-1),w=e("div",{class:"text-h4"},"How to take an offer?",-1),x=e("div",{class:""},[t(" Under "),e("b",null,"VIEW"),t(" you can take an offer by filtering using the filter on the left. You can take an offer by clicking on a row or the icon on the right. A new sidebar will one on the right and you can provide the amount you want to take if its partial fill or just click the button below the token amounts. ")],-1),E=e("div",{class:"text-h4"},"How to close or cancel an offer?",-1),k=e("div",null,[t(" Under "),e("b",null,"MANAGE/VIEW CREATED"),t(" or "),e("b",null,"MANAGE/VIEW CLOSE FILLED"),t(" you can close your offer and recover the SOL needed for the escrow account creation. ")],-1),A=e("div",{class:"text-h4"},"Advanced offer options explained",-1),S=e("div",null,[e("b",null,"Direct:"),e("br"),t("Used for direct trades with a peer so no other can fill that order"),e("br"),e("br"),e("b",null,"Expire:"),e("br"),t("Whenever a escrow should only be exchangeable for a limited timespan"),e("br"),e("br"),e("b",null,"Partial/Full-FIll:"),e("br"),t(" Decide whether the taker of an offer can fill that order by 100% or by any percentage of that (only limited by slippage and token decimals)"),e("br"),e("br"),e("b",null,"Member Deal:"),e("br"),t(" This option enables private listing to a group here S&B Members"),e("br"),e("br"),e("b",null,"Slippage:"),e("br"),t("Defines how many correct decimals are required for token decimal rounding. Example: 0.9999 will get accepted as 1 by the program if the token decimal is 0 and the slippage is set to 1%/1000 - Slippage can also be set to 0 but may can not get filled!"),e("br")],-1),T=e("div",{class:"text-h4"},"When do I get my exchanged tokens?",-1),D=e("div",null," Every asset exchange happens immediately for both exchanging parties. Which means that once a order gets filled partially or fully both parties get the tokens they requested there is no need to claim you asset. (To recover the account fee the creator can close the account in Manage/Close section ",-1),W=e("div",{class:"text-h4"},"What are the account costs?",-1),M=e("div",null," The account costs for creating the escrow are at around 0.0044 SOL ",-1),Q=e("div",{class:"text-h4"},"Why is there a fee?",-1),C=e("div",null,[t(" 1. To cover costs for deployment/updates and new features"),e("br"),t(" 2. Disincentivize using BOTs and constant list and delist of offers. "),e("br"),t(" 3. Potentially pay for an official audit."),e("br")],-1),L=e("div",{class:"text-h4"},"What are the fees?",-1),F=e("b",null,"MAKE:",-1),I=e("br",null,null,-1),N=e("b",null,"TAKE:",-1),O=e("br",null,null,-1),U=h({__name:"FAQPage",setup(V){return f(()=>{r().showLeftDrawer=!1,r().showRightDrawer=!1}),(q,B)=>(u(),_(d,{class:"row justify-center q-pa-md"},{default:o(()=>[e("div",m,[a(l,{flat:"",class:"col"},{default:o(()=>[a(s,{class:"text-center"},{default:o(()=>[y]),_:1})]),_:1}),a(l,{flat:"",class:"q-gutter-y-md",style:{"max-width":"750px"}},{default:o(()=>[a(s,{class:""},{default:o(()=>[g,v]),_:1}),a(n),a(s,{class:""},{default:o(()=>[w,x]),_:1}),a(n),a(s,{class:""},{default:o(()=>[E,k]),_:1}),a(n),a(s,{class:""},{default:o(()=>[A,S]),_:1}),a(n),a(s,{class:""},{default:o(()=>[T,D]),_:1}),a(n),a(s,{class:""},{default:o(()=>[W,M]),_:1}),a(n),a(s,{class:""},{default:o(()=>[Q,C]),_:1}),a(n),a(s,{class:""},{default:o(()=>[L,e("div",null,[F,t(" "+i(c(b))+" SOL",1),I,N,t(" "+i(c(p))+" SOL",1),O])]),_:1})]),_:1})])]),_:1}))}});export{U as default};