(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n(47)},35:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(14),c=(n(35),n(51)),i=n(53),l=n(54),u=n(49),s=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Home Page"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(u.a,{to:"/report"},"Report Obstruction")),a.a.createElement("li",null,a.a.createElement(u.a,{to:"/nopers"},"Bad Link"))))},p=function(){return a.a.createElement("div",null,a.a.createElement("p",null,"gosh darn we got us a 404 page not heckin found"))},m=n(13),f={lat:37.8131418,lng:-122.2662702},d=n(21),g=n.n(d),h=n(23),E=n(27),v=function(){for(var e="",t=0;t<24;t+=1)e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return e},w="https://s3-us-west-1.amazonaws.com/oak-bike/",b=function(e){var t=e.setUpload,n=e.setStatus,o=function(){var e=Object(h.a)(g.a.mark(function e(o){var a,r,c;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=o[0],r="".concat(v(),".").concat(a.type.split("/")[1]),(c=new FormData).append("key",r),c.append("file",a),fetch(w,{method:"POST",body:c}).then(function(e){console.log("response:",e);var o="".concat(w).concat(r);t(o),n("LOCATION")}).catch(function(e){console.error("ERROR:",e)});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(E.a,{onDrop:o},function(e){var t=e.getRootProps,n=e.getInputProps,o=e.isDragActive;return a.a.createElement("div",Object.assign({},t(),{className:"dropzone ".concat(o?"dropzone--isActive":"")}),a.a.createElement("input",n()),o?a.a.createElement("p",null,"Drop files here..."):a.a.createElement("p",null,"Try dropping some files here, or click to select files to upload."))})},O=n(52),k=n(55),S=n(50),j=n(56);var y=function(e){var t=e.initCenter,n=e.initZoom,r=e.setLocation,c=e.setStatus,i=Object(o.useState)(document.documentElement.clientHeight-60),l=Object(m.a)(i,2),u=l[0],s=l[1];Object(o.useEffect)(function(){var e=function(){s(document.documentElement.clientHeight-60)};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}},[]);var p=Object(o.useState)(t),f=Object(m.a)(p,2),d=f[0],g=f[1];Object(o.useEffect)(function(){(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(t,n){navigator.geolocation.getCurrentPosition(function(e){return t(e)},function(e){return n(e)},e)})})().then(function(e){var t=e.coords,n=t.latitude,o=t.longitude;g({lat:n,lng:o})}).catch(function(){console.warn("Could not get user location")})},[]);var h=Object(o.useState)(n),E=Object(m.a)(h,2),v=E[0],w=E[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(O.a,{center:d,zoom:v,onDrag:function(e){g(e.target.getCenter())},onZoom:function(e){w(e.target.getZoom())},style:{height:u}},a.a.createElement(k.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),a.a.createElement(S.a,{position:d},a.a.createElement(j.a,null,"A pretty CSS3 popup. ",a.a.createElement("br",null)," Easily customizable."))),a.a.createElement("button",{onClick:function(){r(d),c("DETAILS")}},"Save Location"))},A=function(e){var t=e.upload,n=e.location;return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"upload: ",t),a.a.createElement("p",null,"location: [",n.lat,", ",n.lng,"]"),a.a.createElement("p",null,"details..."))},L=function(){var e=Object(o.useState)("UPLOAD"),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(o.useState)({}),i=Object(m.a)(c,2),l=i[0],u=i[1],s=Object(o.useState)(f),p=Object(m.a)(s,2),d=p[0],g=p[1];switch(n){case"UPLOAD":return a.a.createElement(b,{setStatus:r,setUpload:u});case"LOCATION":return a.a.createElement(y,{initCenter:f,initZoom:14,setLocation:g,setStatus:r});case"DETAILS":return a.a.createElement(A,{upload:l,location:d});case"SUBMISSION":case"COMPLETE":return a.a.createElement("p",null,"...");default:return null}},C=function(){return a.a.createElement(c.a,{basename:"/oak-bike-client"},a.a.createElement(i.a,null,a.a.createElement(l.a,{exact:!0,path:"/",component:s}),a.a.createElement(l.a,{path:"/report",component:L}),a.a.createElement(l.a,{path:"/*",component:p})))},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}Object(r.render)(a.a.createElement(C,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/oak-bike-client",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/oak-bike-client","/service-worker.js");P?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):D(t,e)})}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.316a0877.chunk.js.map