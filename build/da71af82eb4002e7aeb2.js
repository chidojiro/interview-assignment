exports.ids=[15],exports.modules={123:function(s,a,t){"use strict";t.r(a);var e=t(39),o=t.n(e).a.createElement;a.default=function(s){var a=s.message,t=s.onClose,l=s.show,n=Object(e.useState)(l),c=n[0],i=n[1];Object(e.useEffect)((function(){i(l)}),[l]);var u=["toast"];return c&&(u.push("show"),u.push("toast--active")),o("div",{className:u.join(" "),"data-rs-toast":"3","data-rs-toast-3":""},o("p",{className:"toast__message"},a),o("button",{className:"button--icon-only","data-rs-closable":"data-rs-toast-3",onClick:t},o("span",{className:"icon fill--dark-blue-50"},o("svg",null,o("use",{xlinkHref:"/static/assets/image/icons.svg#close"}))),o("span",{className:"hidden--visually"},"close")))}}};