(this["webpackJsonpminimal-feedback-example"]=this["webpackJsonpminimal-feedback-example"]||[]).push([[0],{61:function(e,t,a){e.exports=a(84)},62:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);a(62);var n=a(0),o=a.n(n),l=a(8),r=a.n(l),c=a(55),i=a(120),s=a(42),m=a.n(s),u=a(53),d=a.n(u),g=a(49),p=a.n(g),h=a(40),f=a.n(h),v=a(51),x=a.n(v),E=a(118),y=a(52),b=a.n(y),C=a(119),k=a(41),w=a.n(k),N=a(54),j=a.n(N),S="_2UiWv",I="_3jXf6",O="_3tLj6",_="_28I6M",F="_2tbx0",B="_1jaHn",R="_3mkGb",T="_2Qajs",W="_Yc-56";function D(e){return o.a.createElement("div",{className:R},o.a.createElement("div",{style:{justifyContent:"flex-end"},className:B},o.a.createElement(f.a,{style:{color:"grey",cursor:"pointer"},onClick:function(){return e.toggle("menu")}})),o.a.createElement(x.a,{style:{color:"#5BC15B",marginLeft:"10px",height:"40px",width:"40px"}}),o.a.createElement("span",{style:{fontSize:"15px"},className:O},"Thanks! We received your feedback."),o.a.createElement(i.a,{style:{marginTop:"9px",boxShadow:"none",borderRadius:"20px",marginBottom:"16px"},variant:"contained",color:"primary",onClick:function(){return e.toggle("menu")}},"send another"))}var L=Object(E.a)((function(e){return{root:{"& > *":{width:"100%"}}}}));function J(e){var t=L();Object(n.useState)("");return o.a.createElement("div",{className:R},o.a.createElement("div",{className:B},o.a.createElement(b.a,{style:{color:"grey",cursor:"pointer"},onClick:function(){return e.toggle("menu")}}),o.a.createElement("span",{className:O},e.icon,e.title),o.a.createElement(f.a,{style:{color:"grey",cursor:"pointer"},onClick:function(){return e.toggle("menu")}})),o.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},o.a.createElement(C.a,{onChange:function(t){var a=t.target.value;return e.onChange({feedback:a,type:e.type})},className:"inputRounded",placeholder:e.placeholder,autoFocus:!0,style:{width:"280px",borderWidth:"10px"},id:"outlined-basic",variant:"outlined",multiline:!0,rows:2,value:e.message.feedback,name:"issues",inputProps:{maxLength:200}})),o.a.createElement(i.a,{disabled:!(e.message.feedback.length>=1),style:{boxShadow:"none",marginTop:"9px",borderRadius:"20px"},variant:"contained",color:"primary",onClick:function(){e.save(),e.toggle("done"),e.message.feedback=""}},"Send Feedback"))}function q(e){var t=Object(n.useState)("menu"),a=t[0],l=t[1];Object(n.useState)(!0);return o.a.createElement(p.a,{className:T,overlayClassName:W,isOpen:e.modal,onRequestClose:e.toggle},o.a.createElement("div",{className:S},"menu"===a?o.a.createElement("div",{className:I},o.a.createElement("span",{className:O},"Whats on your mind?"),o.a.createElement("div",{className:_},o.a.createElement("div",{onClick:function(){return l("issue")},className:F},o.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},o.a.createElement(w.a,{style:{width:"50px",height:"50px",color:"#ff5252"}}),"Issue")),o.a.createElement("div",{onClick:function(){return l("idea")},className:F},o.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},o.a.createElement(m.a,{style:{width:"50px",height:"50px",color:"#F0BC2E"}}),"Idea")),o.a.createElement("div",{onClick:function(){return l("other")},className:F},o.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},o.a.createElement(d.a,{style:{width:"50px",height:"50px",color:"#3c3737"}}),"Other")))):"idea"===a?o.a.createElement(J,{onChange:e.onChange,save:e.save,message:e.value,placeholder:"I would love...",type:"idea",toggle:l,title:"Share an idea",icon:o.a.createElement(m.a,{style:{width:"20px",height:"20px",color:"#F0BC2E"}})}):"other"===a?o.a.createElement(J,{onChange:e.onChange,save:e.save,message:e.value,placeholder:"What do you want us to know?",type:"anything",toggle:l,title:"Tell us anything!",icon:null}):"done"===a?o.a.createElement(D,{toggle:l}):o.a.createElement(J,{onChange:e.onChange,save:e.save,message:e.value,placeholder:"i noticed that...",type:"issue",toggle:l,title:"Report an Issue",icon:o.a.createElement(w.a,{style:{width:"20px",height:"20px",color:"#ff5252"}})})))}var z=function(e){var t,a=e.onChange,l=e.value,r=e.save,c=Object(n.useState)(!1),s=c[0],m=c[1];return o.a.createElement("div",null,o.a.createElement(i.a,{startIcon:o.a.createElement(j.a,null),onClick:function(){return m(!0)},style:(t={marginTop:"9px",boxShadow:"none",position:"fixed",bottom:"15px",right:"15px",backgroundColor:"#FFF",borderRadius:"100px"},t.boxShadow="0px 0 1px 0.1rem rgba(94,43,250,.25)",t),variant:"contained"},"Feedback"),o.a.createElement(q,{save:r,value:l,onChange:a,modal:s,toggle:function(){m(!s)}}))};a(82);var G=()=>{const e=Object(n.useState)({feedback:""}),t=Object(c.a)(e,2),a=t[0],l=t[1];return o.a.createElement(z,{save:()=>{console.log(a)},value:a,onChange:e=>l(e)})};r.a.render(o.a.createElement(G,null),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.06c12c71.chunk.js.map