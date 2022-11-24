"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[586],{7481:function(e,t,i){i.d(t,{l:function(){return v}});var o=i(5893),n=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("label",{className:"text-base dark:text-mtxWhite",children:"Any other questions?"}),(0,o.jsx)("textarea",{className:"w-full p-3 mt-2 mb-4 bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none text-sm",id:"questions"})]})},a=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("input",{type:"submit",className:"py-3 px-6 my-2 bg-emerald-500 text-white font-medium rounded bg-indigo-500 cursor-pointer ease-in-out duration-300 hover:brightness-75 ",defaultValue:"Send"})})},r=i(3917),s=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"my-2 font-medium dark:text-mtxWhite flex flex-row gap-x-3 items-center justify-start",children:[(0,o.jsx)("input",{type:"checkbox",required:!0}),"Do you agree to our ",(0,o.jsx)(r.rU,{href:"/legal/terms",passHref:!0,children:(0,o.jsx)("a",{className:"underline p-0 m-0 -ml-1.5 -mr-2.5",children:"terms"})}),"?*"]})})},l=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("label",{className:"text-base dark:text-mtxWhite",children:"If your application is accepted, then you will receive an email/message (on Discord) from us. It can take up to two weeks for us to process your application. Messaging our staff members won't make it go any faster. You will also be given an interview (through Discord) at a time of your choosing. When you submit your application, all of our available positions might be filled. Would you like us to hold your application until one of our positions become available?*"}),(0,o.jsx)("textarea",{className:"w-full p-3 mt-2 mb-4 bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none text-sm ",required:!0,id:"hold-application"}),(0,o.jsx)(n,{}),(0,o.jsx)(s,{}),(0,o.jsx)(a,{})]})},d=i(7294),c=i(9953);function m(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.webhooks=c.lb}var t,i,o;return t=e,(i=[{key:"postApplication",value:function(e,t,i){var o;t.forEach((function(t){c.dx[e]=c.dx[e].replaceAll("{".concat(t.id,"}"),t.value)}));var n,a={embeds:[{author:{name:"".concat((n=e,n.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()})).join(" "))," Application submitted by ").concat(null===(o=t.find((function(e){return"dsc"===e.id})))||void 0===o?void 0:o.value),icon_url:null===i||void 0===i?void 0:i.image},color:3092790,description:c.dx.developer}]};fetch(this.webhooks[e],{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(a)})}}])&&m(t.prototype,i),o&&m(t,o),e}(),p=function(e){var t=e.id,i=e.question,n=e.required,a=e.min,r=e.max;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("label",{className:"text-base dark:text-mtxWhite",children:i}),(0,o.jsx)("input",{type:"range",min:a||0,max:r||10,required:n,id:t,className:"w-full px-0 py-2 mt-2 mr-4 text-base transition duration-500 ease-in-out transform bg-gray-100 focus:none"})]})},g=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("label",{className:"text-base dark:text-mtxWhite",children:"Email*"}),(0,o.jsx)("input",{type:"email",className:"p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none",placeholder:"E.g. admin@matrixdev.xyz",id:"email",required:!0}),(0,o.jsx)("label",{className:"text-base dark:text-mtxWhite",children:"Discord Username/Tag*"}),(0,o.jsx)("input",{type:"text",className:"p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none",placeholder:"E.g. Trxppy#5537",required:!0,pattern:"^.{3,32}#[0-9]{4}$",id:"dsc"}),(0,o.jsx)("label",{className:"text-base dark:text-mtxWhite",children:"Discord User ID*"}),(0,o.jsx)("input",{type:"text",className:"p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none",placeholder:"E.g. 599324888716804108",required:!0,minLength:18,maxLength:18,id:"id"}),(0,o.jsx)("label",{className:"text-base dark:text-mtxWhite",children:"Timezone (UTC)*"}),(0,o.jsx)("input",{type:"text",className:"p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none",placeholder:"E.g. UTC+13",required:!0,id:"timezone"}),(0,o.jsx)(p,{question:"On a scale of 1-10, how active are you on Discord?",required:!0,id:"active"}),(0,o.jsx)(p,{question:"On a scale of 1-10, how good is your grammar?*",required:!0,id:"grammar"}),(0,o.jsx)(p,{question:"On a scale of 1-10, how good are you at co-operating with others?*",required:!0,id:"co-operation"})]})},h=i(3299),v=function(e){var t=e.type,i=e.description,n=e.children,a=(0,h.useSession)().data,r=(0,d.useState)([]),s=r[0],c=r[1];return(0,d.useEffect)((function(){var e=[{id:document.getElementById("email").id,value:document.getElementById("email").value||"N/A"},{id:document.getElementById("dsc").id,value:document.getElementById("dsc").value||"N/A"},{id:document.getElementById("id").id,value:document.getElementById("id").value||"N/A"},{id:document.getElementById("timezone").id,value:document.getElementById("timezone").value||"N/A"},{id:document.getElementById("active").id,value:document.getElementById("active").value||"N/A"},{id:document.getElementById("grammar").id,value:document.getElementById("grammar").value||"N/A"},{id:document.getElementById("co-operation").id,value:document.getElementById("co-operation").value||"N/A"}],i=[{id:document.getElementById("hold-application").id,value:document.getElementById("hold-application").value||"N/A"},{id:document.getElementById("questions").id,value:document.getElementById("questions").value||"N/A"}];if("developer"===t)c(e.concat([{id:document.getElementById("reliability").id,value:document.getElementById("reliability").value||"N/A"},{id:document.getElementById("member-duration").id,value:document.getElementById("member-duration").value||"N/A"},{id:document.getElementById("motives").id,value:document.getElementById("motives").value||"N/A"},{id:document.getElementById("experience").id,value:document.getElementById("experience").value||"N/A"},{id:document.getElementById("skillset").id,value:document.getElementById("skillset").value||"N/A"},{id:document.getElementById("preferences").id,value:document.getElementById("preferences").value||"N/A"},{id:document.getElementById("maintenance").id,value:document.getElementById("maintenance").value||"N/A"},{id:document.getElementById("previous-work").id,value:document.getElementById("previous-work").value||"N/A"},{id:document.getElementById("github").id,value:document.getElementById("github").value||"N/A"}]).concat(i))}),[t]),(0,o.jsx)("div",{className:"flex items-center justify-center min-h-screen py-28",children:(0,o.jsx)("div",{className:"w-full md:w-4/5 mx-42 px-12 pb-8 pt-16 bg-white dark:bg-mtxDarkGray rounded-xl md:shadow-2xl",children:(0,o.jsx)("div",{className:"space-y-6",children:(0,o.jsxs)("form",{action:"submit",onSubmit:function(e){switch(e.preventDefault(),t){case"developer":(new u).postApplication("developer",s,null===a||void 0===a?void 0:a.user);break;case"manager":(new u).postApplication("manager",s,null===a||void 0===a?void 0:a.user);break;case"marketing agent":(new u).postApplication("marketing",s,null===a||void 0===a?void 0:a.user);break;case"moderator":(new u).postApplication("moderator",s,null===a||void 0===a?void 0:a.user);break;case"public relations":(new u).postApplication("public",s,null===a||void 0===a?void 0:a.user);break;case"support agent":(new u).postApplication("support",s,null===a||void 0===a?void 0:a.user)}window.alert("Successs")},children:[(0,o.jsxs)("h2",{className:"text-2xl font-black tracking-tighter dark:text-mtxWhite",children:["Submit your ",t," application"]}),(0,o.jsx)("p",{className:"my-4 pb-10 dark:text-mtxWhite",children:i}),(0,o.jsx)(g,{}),n,(0,o.jsx)(l,{})]})})})})}},4471:function(e,t,i){i.d(t,{H:function(){return n}});var o=i(5893),n=function(e){var t=e.id,i=e.question,n=e.required;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("label",{className:"text-base dark:text-mtxWhite",children:i}),(0,o.jsx)("textarea",{className:"w-full p-3 mt-2 mb-4 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none text-sm ",required:n,id:t})]})}},8428:function(e){e.exports=JSON.parse('{"404":{"title":"404 | Page not found","description":"The page you are looking for does not exist. Please check the URL and try again."},"500":{"title":"500 | Internal server error","description":"An internal server error has occurred. Please try again later."},"welcome":{"title":"Welcome | Matrix Development","description":"Welcome to Matrix Development. We\'re a small group of developers inspired by our love for programming. We pride ourselves on the things we can do in order to make a difference to people across the world. We strive on becoming a popular development group, not for the money but for the reputation it can bring to us and the opportunities we can earn from this."},"home":{"title":"We don\'t shape reality, we create it.","description":"Welcome to the homepage of the aspiring organisation with big ideas. A passionate, engaging community. The next generation of developers. Immerse yourselves into the diverse and welcoming organisation of Matrix Development.","image":"/assets/img/WBqMzVRDbehc3OgB85SVKC7YlfPJ3Kvf.png"},"cookies":{"title":"Cookie Policy | Matrix Development","description":"View Matrix Development\'s official cookie policy. This Cookie Policy explains how Matrix Development uses cookies and similar technologies to recognize you when you visit our websites at https://matrixdev.xyz. It explains what these technologies are and why we use them, as well as your rights to control our use of them.","image":"/assets/img/pAiZ2AO1S8DrjGRAz6boAvVUE1zeCLJz.png"},"terms":{"title":"Terms of Service | Matrix Development","description":"View Matrix Development\'s official terms of service. These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and Matrix Development, doing business as Matrix, concerning your access to and use of the https://matrixdev.xyz website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the \u201cSite\u201d).","image":"/assets/img/FX7Em5jr66NDqaqtn4M9elAuP90DWHeq.png"},"privacy":{"title":"Privacy Policy | Matrix Development","description":"View Matrix Development\'s official privacy policy. Thank you for choosing to be part of our community at Matrix Development. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at legal@matrixdev.xyz.","image":"/assets/img/H5WU8Zt6j6JpDHeUtpPRprvOd2FK58zh.png"},"disclaimer":{"title":"Disclaimer | Matrix Development","description":"View Matrix Development\'s official disclaimer. The information provided by Matrix Development on https://matrixdev.xyz is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.","image":"/assets/img/AF4vpCO9KEHjik9mn1WMlIcSmAF5nWoa.png"},"about":{"title":"About | Matrix Development","description":"Learn more about who we are and what we do as an organisation. View our current development projects and meet the staff team who makes everything tick.","image":"/assets/img/SJINnzV0blbZQM8gp7t86ReRjj4npKPi.png"},"development":{"title":"Developer Application | Matrix Development","description":"Join our diverse team of experienced bot, app, website and game developers from across the world and learn new skills and languages along the way.","image":"/assets/img/5vCKaEPAsG3PfzMwwTqYNcBIP2AECsLK.png"},"management":{"title":"Manager Application | Matrix Development","description":"Join our experienced and global management team and become a manager for the group. We\'ll definitely make it worth the time and effort you put in.","image":"/assets/img/qogvC74wQb6EKvUQenW922Z2C6vi92MI.png"},"support":{"title":"Support Agent Application | Matrix Development","description":"Join our esteemed and kind support team, full of experienced individuals with training in helping people with any background.","image":"/assets/img/bkTeEL60bgPh8WzUv3N3hJrBTtExLZRT.png"},"moderation":{"title":"Moderator Application | Matrix Development","description":"Rules are rules, and people need to follow them. If you\'re interested in enforcing our rules, then check out our moderation department.","image":"/assets/img/yRdlI4Vcz71kcH0L9hwXgRotGRmZhGeO.png"},"marketing":{"title":"Marketing Application | Matrix Development","description":"Marketing applications are currently closed. Keep an eye out in the announcements channels on Discord or this page for when marketing agent applications open!","image":"/assets/img/ZuJ29X5zKfnWdQiEiuUsbWcRbDRd4kU0.png"},"public":{"title":"Public Relations Manager Application | Matrix Development","description":"Public relations applications are currently closed. Keep an eye out in the announcements channels on Discord or this page for when marketing agent applications opens!","image":"/assets/img/WxX1BDUKJ4ZXC71dpvHk6Uyg02EWx0Le.png"},"applications":{"title":"Applications | Matrix Development","description":"Want to be part our awesome team here at Matrix Development? Now here\'s your chance! We\'ve got a diverse variety of roles to work in so you can contribute to our awesome organisation and get to know fellow members better.","image":"/assets/img/15SZssezMgiBVVLhhw8jQMR6igni09Gf.png"},"affiliates":{"title":"Affiliates | Matrix Development","description":"View the full lists of affiliates of Matrix Development, the communities helping to power us.","image":"/assets/img/oqhmRIG6kZjAZMudLkM6vxGhOzRjKQ03.png"},"resources":{"title":"Resources | Matrix Development","description":"View the full list of public resources we have to offer for other developers including our very own public API.","image":"/assets/img/ZOfXlIMnGkZo8cKSxhWnvCzYkqdy2eG2.png"}}')}}]);