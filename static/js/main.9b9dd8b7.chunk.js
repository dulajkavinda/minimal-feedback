(this["webpackJsonpminimal-feedback-example"]=this["webpackJsonpminimal-feedback-example"]||[]).push([[0],{61:function(e,t,a){e.exports=a(84)},62:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);a(62);var n=a(0),l=a.n(n),o=a(8),s=a.n(o),c=a(23),r=a(120),i=a(43),m=a.n(i),d=a(54),u=a.n(d),p=a(50),g=a.n(p),h=a(41),y=a.n(h),_=a(52),f=a.n(_),b=a(118),v=a(53),E=a.n(v),x=a(119),k=a(42),C=a.n(k),w=a(55),j=a.n(w),N="_styles-module__feedback_main__2UiWv",O="_styles-module__feedback_wrapper__3jXf6",S="_styles-module__feedback_title__3tLj6",I="_styles-module__feedback_items__28I6M",F="_styles-module__feedback_item__2tbx0",B="_styles-module__feedback_wrapper_issues__1jaHn",W="_styles-module__feedback_wrapper_issues_main__3mkGb",R="_styles-module__mymodal__2Qajs",D="_styles-module__myoverlay__Yc-56";function T(e){return l.a.createElement("div",{className:W},l.a.createElement("div",{style:{justifyContent:"flex-end"},className:B},l.a.createElement(y.a,{style:{color:"grey",cursor:"pointer"},onClick:()=>e.toggle("menu")})),l.a.createElement(f.a,{style:{color:"#5BC15B",marginLeft:"10px",height:"40px",width:"40px"}}),l.a.createElement("span",{style:{fontSize:"15px"},className:S},"Thanks! We received your feedback."),l.a.createElement(r.a,{style:{marginTop:"9px",boxShadow:"none",borderRadius:"20px",marginBottom:"16px"},variant:"contained",color:"primary",onClick:()=>e.toggle("menu")},"send another"))}const L=Object(b.a)(e=>({root:{"& > *":{width:"100%"}}}));function J(e){const t=L(),a=Object(n.useState)(""),o=Object(c.a)(a,2);o[0],o[1];return l.a.createElement("div",{className:W},l.a.createElement("div",{className:B},l.a.createElement(E.a,{style:{color:"grey",cursor:"pointer"},onClick:()=>e.toggle("menu")}),l.a.createElement("span",{className:S},e.icon,e.title),l.a.createElement(y.a,{style:{color:"grey",cursor:"pointer"},onClick:()=>e.toggle("menu")})),l.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},l.a.createElement(x.a,{onChange:({target:{value:t}})=>e.onChange({feedback:t,type:e.type}),className:"inputRounded",placeholder:e.placeholder,autoFocus:!0,style:{width:"280px",borderWidth:"10px"},id:"outlined-basic",variant:"outlined",multiline:!0,rows:2,value:e.message.feedback,name:"issues",inputProps:{maxLength:200}})),l.a.createElement(r.a,{disabled:!(e.message.feedback.length>=1),style:{boxShadow:"none",marginTop:"9px",borderRadius:"20px"},variant:"contained",color:"primary",onClick:()=>{e.save(),e.toggle("done"),e.message.feedback=""}},"Send Feedback"))}function q(e){const t=Object(n.useState)("menu"),a=Object(c.a)(t,2),o=a[0],s=a[1],r=Object(n.useState)(!0),i=Object(c.a)(r,2);i[0],i[1];return l.a.createElement(g.a,{className:R,overlayClassName:D,isOpen:e.modal,onRequestClose:e.toggle},l.a.createElement("div",{className:N},"menu"===o?l.a.createElement("div",{className:O},l.a.createElement("span",{className:S},"Whats on your mind?"),l.a.createElement("div",{className:I},l.a.createElement("div",{onClick:()=>s("issue"),className:F},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},l.a.createElement(C.a,{style:{width:"50px",height:"50px",color:"#ff5252"}}),"Issue")),l.a.createElement("div",{onClick:()=>s("idea"),className:F},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},l.a.createElement(m.a,{style:{width:"50px",height:"50px",color:"#F0BC2E"}}),"Idea")),l.a.createElement("div",{onClick:()=>s("other"),className:F},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},l.a.createElement(u.a,{style:{width:"50px",height:"50px",color:"#3c3737"}}),"Other")))):"idea"===o?l.a.createElement(J,{onChange:e.onChange,save:e.save,message:e.value,placeholder:"I would love...",type:"idea",toggle:s,title:"Share an idea",icon:l.a.createElement(m.a,{style:{width:"20px",height:"20px",color:"#F0BC2E"}})}):"other"===o?l.a.createElement(J,{onChange:e.onChange,save:e.save,message:e.value,placeholder:"What do you want us to know?",type:"anything",toggle:s,title:"Tell us anything!",icon:null}):"done"===o?l.a.createElement(T,{toggle:s}):l.a.createElement(J,{onChange:e.onChange,save:e.save,message:e.value,placeholder:"i noticed that...",type:"issue",toggle:s,title:"Report an Issue",icon:l.a.createElement(C.a,{style:{width:"20px",height:"20px",color:"#ff5252"}})})))}var z=({onChange:e,value:t,save:a})=>{const o=Object(n.useState)(!1),s=Object(c.a)(o,2),i=s[0],m=s[1];return l.a.createElement("div",null,l.a.createElement(r.a,{startIcon:l.a.createElement(j.a,null),onClick:()=>m(!0),style:{marginTop:"9px",boxShadow:"none",position:"fixed",bottom:"15px",right:"15px",backgroundColor:"#FFF",borderRadius:"100px",boxShadow:"0px 0 1px 0.1rem rgba(94,43,250,.25)"},variant:"contained"},"Feedback"),l.a.createElement(q,{save:a,value:t,onChange:e,modal:i,toggle:function(){m(!i)}}))};a(82);var G=()=>{const e=Object(n.useState)({feedback:""}),t=Object(c.a)(e,2),a=t[0],o=t[1];return l.a.createElement("div",{style:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center",flexDirection:"column"}},l.a.createElement("h1",{style:{fontFamily:"revert"}},"minimal-feedback"),l.a.createElement("p",{style:{fontWeight:"bold"}},"By"," ",l.a.createElement("span",{onClick:()=>(e=>{const t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)})("https://github.com/dulajkavinda"),style:{color:"blueviolet",fontWeight:"bold",cursor:"pointer"}},"Dulaj Kavinda")),l.a.createElement(z,{save:()=>{console.log(a)},value:a,onChange:e=>o(e)}))};s.a.render(l.a.createElement(G,null),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.9b9dd8b7.chunk.js.map