(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(51)},39:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(27),c=(n(39),n(53)),l=n(54),u=n(55),i=n(15),s=n(12),d=n(31),p=n(19),O=n(16),E="GET_LOCATION_COORDS",m={status:"IMAGE",image:null,location:{shared:!1,fetching:!1,coords:{lat:null,lng:null},method:null},details:{name:"",phone:"",email:"",notes:"",time:null}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.status,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_REPORT_STATUS":return t.payload;default:return e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.image,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_REPORT_IMAGE":return t.payload;default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.location,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_REPORT_LOCATION_SHARED":return Object(O.a)({},e,{location:t.payload});case"SET_REPORT_LOCATION_FETCHING":return Object(O.a)({},e,{fetching:t.payload});case"SET_REPORT_LOCATION_COORDS":return Object(O.a)({},e,{coords:t.payload});case"SET_REPORT_LOCATION_METHOD":return Object(O.a)({},e,{method:t.payload});default:return e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.details,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_REPORT_DETAIL":return Object(O.a)({},e,Object(p.a)({},t.payload.key,t.payload.value));default:return e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;return{status:f(e.status,t),image:h(e.image,t),location:g(e.location,t),details:b(e.details,t)}},T=n(17),R=n.n(T),_=n(14),j=function(e){return{type:"SET_REPORT_LOCATION_SHARED",payload:e}},w=function(e){return{type:"SET_REPORT_LOCATION_FETCHING",payload:e}},y=function(e){return{type:"SET_REPORT_LOCATION_COORDS",payload:e}},I=R.a.mark(P),A=R.a.mark(C),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(t,n){navigator.geolocation.getCurrentPosition(function(e){return t(e)},function(e){return n(e)},e)})};function P(){var e;return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.b)(w(!0));case 2:return t.prev=2,t.next=5,Object(_.a)(S);case 5:return e=t.sent,t.next=8,Object(_.b)(y({lat:e.coords.latitude,lng:e.coords.longitude}));case 8:return t.next=10,Object(_.b)(j(!0));case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),console.log("ERROR: ".concat(t.t0.message));case 15:return t.next=17,Object(_.b)(w(!1));case 17:case"end":return t.stop()}},I,this,[[2,12]])}function C(){return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.c)(E,P);case 2:case"end":return e.stop()}},A,this)}var k=C,x=Object(d.a)(),N=Object(s.c)({report:v}),D=Object(s.e)(N,Object(s.a)(x));x.run(k);var L=D,G=n(52),H=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home Page"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(G.a,{to:"/report"},"Report Obstruction")),r.a.createElement("li",null,r.a.createElement(G.a,{to:"/nopers"},"Bad Link"))))},M=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"gosh darn we got us a 404 page not heckin found"))},B=n(32),z=Object(i.b)(null,function(e){return{setImage:function(t){return e(function(e){return{type:"SET_REPORT_IMAGE",payload:e}}(t))}}})(function(e){e.setImage;return r.a.createElement(B.a,{onDrop:function(e){var t=e[0];console.log("image:",t)}},function(e){var t=e.getRootProps,n=e.getInputProps,a=e.isDragActive;return r.a.createElement("div",Object.assign({},t(),{className:"dropzone ".concat(a?"dropzone--isActive":"")}),r.a.createElement("input",n()),a?r.a.createElement("p",null,"Drop files here..."):r.a.createElement("p",null,"Try dropping some files here, or click to select files to upload."))})}),F=n(13),J=function(e){return e.report||{}},W=Object(F.a)(J,function(e){return e.status}),U=(Object(F.a)(J,function(e){return e.image}),Object(F.a)(J,function(e){return e.location.shared}),Object(F.a)(J,function(e){return e.location.fetching}),Object(F.a)(J,function(e){return e.location.coords}),Object(F.a)(J,function(e){return e.location.method}),Object(F.a)(J,function(e){return e.details}),Object(i.b)(function(e){return{status:W(e)}},null)(function(e){switch(e.status){case"IMAGE":return r.a.createElement(z,null);default:return r.a.createElement("p",null,"wat")}})),$=function(){return r.a.createElement(i.a,{store:L},r.a.createElement(c.a,{basename:"/oak-bike-client"},r.a.createElement(l.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:H}),r.a.createElement(u.a,{path:"/report",component:U}),r.a.createElement(u.a,{path:"/*",component:M}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(o.render)(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.33689e85.chunk.js.map