(this["webpackJsonpminimal-feedback-example"]=this["webpackJsonpminimal-feedback-example"]||[]).push([[0],{61:function(e,t,a){e.exports=a(84)},62:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);a(62);var n=a(0),l=a.n(n),o=a(8),r=a.n(o),c=a(55),i=a(120),s=a(42),m=a.n(s),u=a(53),d=a.n(u),p=a(49),g=a.n(p),h=a(40),f=a.n(h),v=a(51),y=a.n(v),E=a(118),x=a(52),b=a.n(x),C=a(119),k=a(41),w=a.n(k),j=a(54),N=a.n(j),S="_2UiWv",I="_3jXf6",_="_3tLj6",F="_28I6M",O="_2tbx0",B="_1jaHn",W="_3mkGb",R="_2Qajs",D="_Yc-56";function T(e){return l.a.createElement("div",{className:W},l.a.createElement("div",{style:{justifyContent:"flex-end"},className:B},l.a.createElement(f.a,{style:{color:"grey",cursor:"pointer"},onClick:function(){return e.toggle("menu")}})),l.a.createElement(y.a,{style:{color:"#5BC15B",marginLeft:"10px",height:"40px",width:"40px"}}),l.a.createElement("span",{style:{fontSize:"15px"},className:_},"Thanks! We received your feedback."),l.a.createElement(i.a,{style:{marginTop:"9px",boxShadow:"none",borderRadius:"20px",marginBottom:"16px"},variant:"contained",color:"primary",onClick:function(){return e.toggle("menu")}},"send another"))}var L=Object(E.a)((function(e){return{root:{"& > *":{width:"100%"}}}}));function J(e){var t=L();Object(n.useState)("");return l.a.createElement("div",{className:W},l.a.createElement("div",{className:B},l.a.createElement(b.a,{style:{color:"grey",cursor:"pointer"},onClick:function(){return e.toggle("menu")}}),l.a.createElement("span",{className:_},e.icon,e.title),l.a.createElement(f.a,{style:{color:"grey",cursor:"pointer"},onClick:function(){return e.toggle("menu")}})),l.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},l.a.createElement(C.a,{onChange:function(t){var a=t.target.value;return e.onChange({feedback:a,type:e.type})},className:"inputRounded",placeholder:e.placeholder,autoFocus:!0,style:{width:"280px",borderWidth:"10px"},id:"outlined-basic",variant:"outlined",multiline:!0,rows:2,value:e.message.feedback,name:"issues",inputProps:{maxLength:200}})),l.a.createElement(i.a,{disabled:!(e.message.feedback.length>=1),style:{boxShadow:"none",marginTop:"9px",borderRadius:"20px"},variant:"contained",color:"primary",onClick:function(){e.save(),e.toggle("done"),e.message.feedback=""}},"Send Feedback"))}function q(e){var t=Object(n.useState)("menu"),a=t[0],o=t[1];Object(n.useState)(!0);return l.a.createElement(g.a,{className:R,overlayClassName:D,isOpen:e.modal,onRequestClose:e.toggle},l.a.createElement("div",{className:S},"menu"===a?l.a.createElement("div",{className:I},l.a.createElement("span",{className:_},"Whats on your mind?"),l.a.createElement("div",{className:F},l.a.createElement("div",{onClick:function(){return o("issue")},className:O},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},l.a.createElement(w.a,{style:{width:"50px",height:"50px",color:"#ff5252"}}),"Issue")),l.a.createElement("div",{onClick:function(){return o("idea")},className:O},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},l.a.createElement(m.a,{style:{width:"50px",height:"50px",color:"#F0BC2E"}}),"Idea")),l.a.createElement("div",{onClick:function(){return o("other")},className:O},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},l.a.createElement(d.a,{style:{width:"50px",height:"50px",color:"#3c3737"}}),"Other")))):"idea"===a?l.a.createElement(J,{onChange:e.onChange,save:e.save,message:e.value,placeholder:"I would love...",type:"idea",toggle:o,title:"Share an idea",icon:l.a.createElement(m.a,{style:{width:"20px",height:"20px",color:"#F0BC2E"}})}):"other"===a?l.a.createElement(J,{onChange:e.onChange,save:e.save,message:e.value,placeholder:"What do you want us to know?",type:"anything",toggle:o,title:"Tell us anything!",icon:null}):"done"===a?l.a.createElement(T,{toggle:o}):l.a.createElement(J,{onChange:e.onChange,save:e.save,message:e.value,placeholder:"i noticed that...",type:"issue",toggle:o,title:"Report an Issue",icon:l.a.createElement(w.a,{style:{width:"20px",height:"20px",color:"#ff5252"}})})))}var z=function(e){var t,a=e.onChange,o=e.value,r=e.save,c=Object(n.useState)(!1),s=c[0],m=c[1];return l.a.createElement("div",null,l.a.createElement(i.a,{startIcon:l.a.createElement(N.a,null),onClick:function(){return m(!0)},style:(t={marginTop:"9px",boxShadow:"none",position:"fixed",bottom:"15px",right:"15px",backgroundColor:"#FFF",borderRadius:"100px"},t.boxShadow="0px 0 1px 0.1rem rgba(94,43,250,.25)",t),variant:"contained"},"Feedback"),l.a.createElement(q,{save:r,value:o,onChange:a,modal:s,toggle:function(){m(!s)}}))};a(82);var G=()=>{const e=Object(n.useState)({feedback:""}),t=Object(c.a)(e,2),a=t[0],o=t[1];return l.a.createElement("div",{style:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center",flexDirection:"column"}},l.a.createElement("h1",{style:{fontFamily:"revert"}},"minimal-feedback"),l.a.createElement("p",{style:{fontWeight:"bold"}},"By"," ",l.a.createElement("span",{onClick:()=>(e=>{const t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)})("https://github.com/dulajkavinda"),style:{color:"blueviolet",fontWeight:"bold",cursor:"pointer"}},"Dulaj Kavinda")),l.a.createElement(z,{save:()=>{console.log(a)},value:a,onChange:e=>o(e)}))};r.a.render(l.a.createElement(G,null),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.bdd946c9.chunk.js.map