(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(51)},39:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(27),c=(n(39),n(53)),i=n(54),u=n(55),l=n(12),s=n(14),d=n(31),f=n(19),p=n(17),E="LOCATION",O="DETAILS",m="USE_MY_LOCATION",h="GET_LOCATION_COORDS",b="HANDLE_REPORT_IMAGE_UPLOAD",g={status:"IMAGE",image:{},location:{shared:!1,fetching:!1,coords:{lat:null,lng:null},method:null},details:{name:"",phone:"",email:"",notes:"",time:null}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.status,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_REPORT_STATUS":return t.payload;default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.image,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_REPORT_IMAGE":return t.payload;default:return e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.location,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_REPORT_LOCATION_SHARED":return Object(p.a)({},e,{location:t.payload});case"SET_REPORT_LOCATION_FETCHING":return Object(p.a)({},e,{fetching:t.payload});case"SET_REPORT_LOCATION_COORDS":return Object(p.a)({},e,{coords:t.payload});case"SET_REPORT_LOCATION_METHOD":return Object(p.a)({},e,{method:t.payload});default:return e}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.details,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_REPORT_DETAIL":return Object(p.a)({},e,Object(f.a)({},t.payload.key,t.payload.value));default:return e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;return{status:v(e.status,t),image:T(e.image,t),location:R(e.location,t),details:_(e.details,t)}},y=n(16),j=n.n(y),A=n(11),S=n(15),P=function(e){return e.report||{}},k=Object(S.a)(P,function(e){return e.status}),I=Object(S.a)(P,function(e){return e.image}),C=(Object(S.a)(P,function(e){return e.location.shared}),Object(S.a)(P,function(e){return e.location.fetching}),Object(S.a)(P,function(e){return e.location.coords})),D=Object(S.a)(P,function(e){return e.location.method}),N=Object(S.a)(P,function(e){return e.details}),x=function(e){return{type:"SET_REPORT_STATUS",payload:e}},L=function(e){return{type:"SET_REPORT_IMAGE",payload:e}},M=function(e){return{type:"SET_REPORT_LOCATION_SHARED",payload:e}},G=function(e){return{type:"SET_REPORT_LOCATION_FETCHING",payload:e}},H=function(e){return{type:"SET_REPORT_LOCATION_COORDS",payload:e}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(t,n){navigator.geolocation.getCurrentPosition(function(e){return t(e)},function(e){return n(e)},e)})},W=function(e){return new Promise(function(e,t){setTimeout(function(){return e({url:"".concat(Date.now())})},2e3)})},B=j.a.mark(J),z=j.a.mark(Y),F=j.a.mark($);function J(){var e;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(A.b)(G(!0));case 2:return t.prev=2,t.next=5,Object(A.a)(U);case 5:return e=t.sent,t.next=8,Object(A.b)(H({lat:e.coords.latitude,lng:e.coords.longitude}));case 8:return t.next=10,Object(A.b)(M(!0));case 10:return t.next=12,Object(A.c)(D);case 12:if(t.sent!==m){t.next=16;break}return t.next=16,Object(A.b)(x(O));case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(2),console.error("ERROR: ".concat(t.t0.message));case 21:return t.next=23,Object(A.b)(G(!1));case 23:case"end":return t.stop()}},B,this,[[2,18]])}function Y(e){var t;return j.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(A.a)(W,e);case 3:return t=n.sent,n.next=6,Object(A.b)(L(t));case 6:return n.next=8,Object(A.b)(x(E));case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.error("ERROR: ".concat(n.t0.message));case 13:case"end":return n.stop()}},z,this,[[0,10]])}function $(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.d)(h,J);case 2:return e.next=4,Object(A.d)(b,Y);case 4:case"end":return e.stop()}},F,this)}var q=$,K=Object(d.a)(),Q=Object(s.c)({report:w}),V=Object(s.e)(Q,Object(s.a)(K));K.run(q);var X=V,Z=n(52),ee=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Home Page"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(Z.a,{to:"/report"},"Report Obstruction")),a.a.createElement("li",null,a.a.createElement(Z.a,{to:"/nopers"},"Bad Link"))))},te=function(){return a.a.createElement("div",null,a.a.createElement("p",null,"gosh darn we got us a 404 page not heckin found"))},ne=n(32),re=Object(l.b)(null,function(e){return{uploadImage:function(t){return e(function(e){return{type:b,payload:e}}(t))}}})(function(e){return a.a.createElement(ne.a,{onDrop:function(t){return e.uploadImage(t[0])}},function(e){var t=e.getRootProps,n=e.getInputProps,r=e.isDragActive;return a.a.createElement("div",Object.assign({},t(),{className:"dropzone ".concat(r?"dropzone--isActive":"")}),a.a.createElement("input",n()),r?a.a.createElement("p",null,"Drop files here..."):a.a.createElement("p",null,"Try dropping some files here, or click to select files to upload."))})}),ae=Object(l.b)(function(e){return{method:D(e)}},function(e){return{setMethod:function(t){return e(function(e){return{type:"SET_REPORT_LOCATION_METHOD",payload:e}}(t))},getCoords:function(){return e({type:h})}}})(function(e){var t=e.method,n=e.setMethod,r=e.getCoords;switch(t){case m:return a.a.createElement("p",null,"fetching location...");case"DROP_PIN_ON_MAP":return a.a.createElement("p",null,"muh map...");case"ENTER_ADDRESS":return a.a.createElement("p",null,"enter address...");default:return a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){n(m),r()}},"Use My Location"),a.a.createElement("button",{onClick:function(){n("DROP_PIN_ON_MAP"),r()}},"Drop Pin on Map"),a.a.createElement("button",{onClick:function(){n("ENTER_ADDRESS")}},"Enter Address"))}}),oe=Object(l.b)(function(e){return{image:I(e),coords:C(e),details:N(e)}},function(e){return{setDetail:function(t,n){return e({type:"SET_REPORT_DETAIL",payload:{key:t,value:n}})}}})(function(e){var t=e.image,n=e.coords;e.details,e.setDetail;return a.a.createElement("div",null,a.a.createElement("p",null,"image url: ",t.url),a.a.createElement("p",null,"coords: [",n.lat,", ",n.lng,"]"),a.a.createElement("p",null,"more details..."))}),ce=Object(l.b)(function(e){return{status:k(e)}},null)(function(e){switch(e.status){case"IMAGE":return a.a.createElement(re,null);case E:return a.a.createElement(ae,null);case O:return a.a.createElement(oe,null);default:return a.a.createElement("p",null,"wat")}}),ie=function(){return a.a.createElement(l.a,{store:X},a.a.createElement(c.a,{basename:"/oak-bike-client"},a.a.createElement(i.a,null,a.a.createElement(u.a,{exact:!0,path:"/",component:ee}),a.a.createElement(u.a,{path:"/report",component:ce}),a.a.createElement(u.a,{path:"/*",component:te}))))},ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function le(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}Object(o.render)(a.a.createElement(ie,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/oak-bike-client",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/oak-bike-client","/service-worker.js");ue?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):le(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):le(t,e)})}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.15379a77.chunk.js.map