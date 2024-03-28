import{Q as n,a as s}from"./QCardSection.843b2ee9.js";import{Q as r}from"./QCard.0802cc54.js";import{Q as i}from"./QPage.08ab7b97.js";import{a9 as c,G as d,ah as l,a2 as h,a3 as f,a4 as o,a5 as a,a8 as e,a6 as t}from"./index.68d5f6a7.js";const u=e("h4",null,"FAQ",-1),b=e("div",{class:"text-h4"},"How to create an offer?",-1),_=e("div",null,[t(" Under "),e("b",null,"MANAGE/CREATE"),t(" you can create a new offer. To create an offer for the asset you need to provide 2 tokens. "),e("br"),e("br"),t(" 1. The token you want to offer "),e("br"),t(" 2. the token you want in exchange "),e("br"),t(" 3. Set the amounts for both tokens and continue if needed in the "),e("b",null,"advanced section"),t(". ")],-1),p=e("div",{class:"text-h4"},"How to take an offer?",-1),m=e("div",{class:""},[t(" Under "),e("b",null,"VIEW"),t(" you can take an offer by filtering using the filter on the left. You can take an offer by clicking on a row or the icon on the right. A new sidebar will one on the right and you can provide the amount you want to take if its partial fill or just click the button below the token amounts. ")],-1),g=e("div",{class:"text-h4"},"How to close or cancel an offer?",-1),y=e("div",null,[t(" Under "),e("b",null,"MANAGE/VIEW CREATED"),t(" or "),e("b",null,"MANAGE/VIEW CLOSE FILLED"),t(" you can close your offer and recover the SOL needed for the escrow account creation. ")],-1),v=e("div",{class:"text-h4"},"Advanced offer options explained",-1),w=e("div",null,[e("b",null,"Direct:"),e("br"),t("Used for direct trades with a peer so no other can fill that order"),e("br"),e("br"),e("b",null,"Expire:"),e("br"),t("Whenever a escrow should only be exchangeable for a limited timespan"),e("br"),e("br"),e("b",null,"Partial/Full-FIll:"),e("br"),t(" Decide weather the taker of an offer can fill that order by 100% or by any percentage of that (only limited by slippage and token decimals)"),e("br"),e("br"),e("b",null,"Member Deal:"),e("br"),t(" This option enables private listing to a group here S&B Members"),e("br"),e("br"),e("b",null,"Slippage:"),e("br"),t("Defines how many correct decimals are required for token decimal rounding. Example: 0.9999 will get accepted as 1 by the program if the token decimal is 0 and the slippage is set to 1%/1000 - Slippage can also be set to 0 but may can not get filled!"),e("br")],-1),x=e("div",{class:"text-h4"},"When do i get my exchanged tokens?",-1),k=e("div",null," Every asset exchange happens immediately for both exchanging parties. Which means that once a order gets filled partially or fully both parties get the tokens they requested there is no need to claim you asset. (To recover the account fee the creator can close the account in Manage/Close section ",-1),E=e("div",{class:"text-h4"},"What are the account costs?",-1),A=e("div",null," The account costs for creating the escrow are at around 0.0044 SOL ",-1),S=e("div",{class:"text-h4"},"Why is there a fee?",-1),T=e("div",null,[t(" 1. To cover costs for deployment/updates and new features"),e("br"),t(" 2. Disincentivize using BOTs and constant list and delist of offers. "),e("br"),t(" 3. Potentially pay for an official audit."),e("br")],-1),D=e("div",{class:"text-h4"},"What are the fees?",-1),Q=e("div",null,[e("b",null,"MAKE:"),t(" 0.01 SOL"),e("br"),e("b",null,"TAKE:"),t(" 0.006 SOL"),e("br")],-1),B=c({__name:"FAQPage",setup(W){return d(()=>{l().showLeftDrawer=!1,l().showRightDrawer=!1}),(C,L)=>(h(),f(i,{class:"q-pa-md q-gutter-y-md"},{default:o(()=>[a(r,{flat:""},{default:o(()=>[a(n,{class:"text-center"},{default:o(()=>[u]),_:1})]),_:1}),a(r,{flat:""},{default:o(()=>[a(n,{class:""},{default:o(()=>[b,_]),_:1}),a(s),a(n,{class:""},{default:o(()=>[p,m]),_:1}),a(s),a(n,{class:""},{default:o(()=>[g,y]),_:1}),a(s),a(n,{class:""},{default:o(()=>[v,w]),_:1}),a(s),a(n,{class:""},{default:o(()=>[x,k]),_:1}),a(s),a(n,{class:""},{default:o(()=>[E,A]),_:1}),a(s),a(n,{class:""},{default:o(()=>[S,T]),_:1}),a(s),a(n,{class:""},{default:o(()=>[D,Q]),_:1})]),_:1})]),_:1}))}});export{B as default};
