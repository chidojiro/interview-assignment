!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("react"),require("next/dynamic"));else if("function"==typeof define&&define.amd)define(["react","next/dynamic"],n);else{var e="object"==typeof exports?n(require("react"),require("next/dynamic")):n(t.react,t["next/dynamic"]);for(var r in e)("object"==typeof exports?exports:t)[r]=e[r]}}(global,function(t,n){return function(t){var n={},e={0:0};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.e=function(n){if(0!==e[n]){var r=require("./"+{1:"efb20e81de76cd5703f7",2:"4813e8579ccc301fbf29",3:"b9b51c2be462a6e0339d",4:"1fa6e1310b9df83f088e",5:"53b802eda0b43148d5cb",6:"93e0867e94bcdc2fb456",7:"a45d709d77b0f403c728",8:"d202d854183729e43ed8",9:"f0cb8731692c424ddc49",10:"60c1e8b36e37ceb5477a",11:"6a0dd1f10fe28b680196",12:"636cf1140cdb9ae0792a",13:"93189b3e731e27d8b86c",14:"adc8e0057371ef239b66"}[n]+".js"),o=r.modules,i=r.ids;for(var u in o)t[u]=o[u];for(var c=0;c<i.length;c++)e[i[c]]=0}return Promise.all([])},r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r.oe=function(t){process.nextTick(function(){throw t})},r(r.s=116)}([function(n,e){n.exports=t},function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},function(t,e){t.exports=n},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(32)("wks"),o=e(21),i=e(3).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n,e){var r=e(3),o=e(1),i=e(19),u=e(9),c=e(11),a=function(t,n,e){var f,s,l,p=t&a.F,h=t&a.G,v=t&a.S,d=t&a.P,y=t&a.B,m=t&a.W,b=h?o:o[n]||(o[n]={}),g=b.prototype,x=h?r:v?r[n]:(r[n]||{}).prototype;for(f in h&&(e=n),e)(s=!p&&x&&void 0!==x[f])&&c(b,f)||(l=s?x[f]:e[f],b[f]=h&&"function"!=typeof x[f]?e[f]:y&&s?i(l,r):m&&x[f]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):d&&"function"==typeof l?i(Function.call,l):l,d&&((b.virtual||(b.virtual={}))[f]=l,t&a.R&&g&&!g[f]&&u(g,f,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,e){t.exports=!e(13)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(8),o=e(47),i=e(30),u=Object.defineProperty;n.f=e(6)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(7),o=e(18);t.exports=e(6)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(51),o=e(28);t.exports=function(t){return r(o(t))}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=!0},function(t,n){t.exports={}},function(t,n,e){var r=e(50),o=e(33);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(20);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(7).f,o=e(11),i=e(4)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(28);t.exports=function(t){return Object(r(t))}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){t.exports=e(106)},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(10),o=e(3).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(10);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(32)("keys"),o=e(21);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(1),o=e(3),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(14)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){"use strict";var r=e(20);function o(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=r(n),this.reject=r(e)}t.exports.f=function(t){return new o(t)}},function(t,n,e){n.f=e(4)},function(t,n,e){var r=e(3),o=e(1),i=e(14),u=e(35),c=e(7).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,e){t.exports=e(96)},function(t,n,e){t.exports=e(71)},function(t,n,e){var r=e(68),o=e(103);t.exports=function(t,n){if(null==t)return{};var e,i,u=o(t,n);if(r){var c=r(t);for(i=0;i<c.length;i++)e=c[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(u[e]=t[e])}return u}},function(t,n,e){var r=e(37);function o(){return t.exports=o=r||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},o.apply(this,arguments)}t.exports=o},function(t,n,e){var r=e(50),o=e(33).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){t.exports=e(108)},function(t,n,e){var r=e(42);t.exports=function(t,n,e){return n in t?r(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},function(t,n){},function(t,n,e){"use strict";var r=e(74)(!0);e(46)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){"use strict";var r=e(14),o=e(5),i=e(48),u=e(9),c=e(15),a=e(75),f=e(22),s=e(78),l=e(4)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,n,e,v,d,y,m){a(e,n,v);var b,g,x,w=function(t){if(!p&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},_=n+" Iterator",O="values"==d,j=!1,S=t.prototype,E=S[l]||S["@@iterator"]||d&&S[d],P=E||w(d),k=d?O?w("entries"):P:void 0,L="Array"==n&&S.entries||E;if(L&&(x=s(L.call(new t)))!==Object.prototype&&x.next&&(f(x,_,!0),r||"function"==typeof x[l]||u(x,l,h)),O&&E&&"values"!==E.name&&(j=!0,P=function(){return E.call(this)}),r&&!m||!p&&!j&&S[l]||u(S,l,P),c[n]=P,c[_]=h,d)if(b={values:O?P:w("values"),keys:y?P:w("keys"),entries:k},m)for(g in b)g in S||i(S,g,b[g]);else o(o.P+o.F*(p||j),n,b);return b}},function(t,n,e){t.exports=!e(6)&&!e(13)(function(){return 7!=Object.defineProperty(e(29)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){t.exports=e(9)},function(t,n,e){var r=e(8),o=e(67),i=e(33),u=e(31)("IE_PROTO"),c=function(){},a=function(){var t,n=e(29)("iframe"),r=i.length;for(n.style.display="none",e(53).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=a(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(11),o=e(12),i=e(76)(!1),u=e(31)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),a=0,f=[];for(e in c)e!=u&&r(c,e)&&f.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(17);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(27),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(3).document;t.exports=r&&r.documentElement},function(t,n,e){e(79);for(var r=e(3),o=e(9),i=e(15),u=e(4)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<c.length;a++){var f=c[a],s=r[f],l=s&&s.prototype;l&&!l[u]&&o(l,u,f),i[f]=i.Array}},function(t,n,e){var r=e(17),o=e(4)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,e){var r=e(8),o=e(20),i=e(4)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||null==(e=r(u)[i])?n:o(e)}},function(t,n,e){var r,o,i,u=e(19),c=e(88),a=e(53),f=e(29),s=e(3),l=s.process,p=s.setImmediate,h=s.clearImmediate,v=s.MessageChannel,d=s.Dispatch,y=0,m={},b=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},g=function(t){b.call(t.data)};p&&h||(p=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return m[++y]=function(){c("function"==typeof t?t:Function(t),n)},r(y),y},h=function(t){delete m[t]},"process"==e(17)(l)?r=function(t){l.nextTick(u(b,t,1))}:d&&d.now?r=function(t){d.now(u(b,t,1))}:v?(i=(o=new v).port2,o.port1.onmessage=g,r=u(i.postMessage,i,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(r=function(t){s.postMessage(t+"","*")},s.addEventListener("message",g,!1)):r="onreadystatechange"in f("script")?function(t){a.appendChild(f("script")).onreadystatechange=function(){a.removeChild(this),b.call(t)}}:function(t){setTimeout(u(b,t,1),0)}),t.exports={set:p,clear:h}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var r=e(8),o=e(10),i=e(34);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){"use strict";var r=e(3),o=e(11),i=e(6),u=e(5),c=e(48),a=e(100).KEY,f=e(13),s=e(32),l=e(22),p=e(21),h=e(4),v=e(35),d=e(36),y=e(101),m=e(61),b=e(8),g=e(10),x=e(23),w=e(12),_=e(30),O=e(18),j=e(49),S=e(102),E=e(66),P=e(26),k=e(7),L=e(16),T=E.f,N=k.f,M=S.f,A=r.Symbol,F=r.JSON,G=F&&F.stringify,I=h("_hidden"),C=h("toPrimitive"),R={}.propertyIsEnumerable,D=s("symbol-registry"),B=s("symbols"),W=s("op-symbols"),q=Object.prototype,H="function"==typeof A&&!!P.f,V=r.QObject,K=!V||!V.prototype||!V.prototype.findChild,U=i&&f(function(){return 7!=j(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=T(q,n);r&&delete q[n],N(t,n,e),r&&t!==q&&N(q,n,r)}:N,J=function(t){var n=B[t]=j(A.prototype);return n._k=t,n},Y=H&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},z=function(t,n,e){return t===q&&z(W,n,e),b(t),n=_(n,!0),b(e),o(B,n)?(e.enumerable?(o(t,I)&&t[I][n]&&(t[I][n]=!1),e=j(e,{enumerable:O(0,!1)})):(o(t,I)||N(t,I,O(1,{})),t[I][n]=!0),U(t,n,e)):N(t,n,e)},Q=function(t,n){b(t);for(var e,r=y(n=w(n)),o=0,i=r.length;i>o;)z(t,e=r[o++],n[e]);return t},X=function(t){var n=R.call(this,t=_(t,!0));return!(this===q&&o(B,t)&&!o(W,t))&&(!(n||!o(this,t)||!o(B,t)||o(this,I)&&this[I][t])||n)},Z=function(t,n){if(t=w(t),n=_(n,!0),t!==q||!o(B,n)||o(W,n)){var e=T(t,n);return!e||!o(B,n)||o(t,I)&&t[I][n]||(e.enumerable=!0),e}},$=function(t){for(var n,e=M(w(t)),r=[],i=0;e.length>i;)o(B,n=e[i++])||n==I||n==a||r.push(n);return r},tt=function(t){for(var n,e=t===q,r=M(e?W:w(t)),i=[],u=0;r.length>u;)!o(B,n=r[u++])||e&&!o(q,n)||i.push(B[n]);return i};H||(c((A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===q&&n.call(W,e),o(this,I)&&o(this[I],t)&&(this[I][t]=!1),U(this,t,O(1,e))};return i&&K&&U(q,t,{configurable:!0,set:n}),J(t)}).prototype,"toString",function(){return this._k}),E.f=Z,k.f=z,e(41).f=S.f=$,e(24).f=X,P.f=tt,i&&!e(14)&&c(q,"propertyIsEnumerable",X,!0),v.f=function(t){return J(h(t))}),u(u.G+u.W+u.F*!H,{Symbol:A});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)h(nt[et++]);for(var rt=L(h.store),ot=0;rt.length>ot;)d(rt[ot++]);u(u.S+u.F*!H,"Symbol",{for:function(t){return o(D,t+="")?D[t]:D[t]=A(t)},keyFor:function(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var n in D)if(D[n]===t)return n},useSetter:function(){K=!0},useSimple:function(){K=!1}}),u(u.S+u.F*!H,"Object",{create:function(t,n){return void 0===n?j(t):Q(j(t),n)},defineProperty:z,defineProperties:Q,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:tt});var it=f(function(){P.f(1)});u(u.S+u.F*it,"Object",{getOwnPropertySymbols:function(t){return P.f(x(t))}}),F&&u(u.S+u.F*(!H||f(function(){var t=A();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))})),"JSON",{stringify:function(t){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(e=n=r[1],(g(n)||void 0!==t)&&!Y(t))return m(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!Y(n))return n}),r[1]=n,G.apply(F,r)}}),A.prototype[C]||e(9)(A.prototype,C,A.prototype.valueOf),l(A,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){var r=e(17);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(72);function o(t,n,e,o,i,u,c){try{var a=t[u](c),f=a.value}catch(t){return void e(t)}a.done?n(f):r.resolve(f).then(o,i)}t.exports=function(t){return function(){var n=this,e=arguments;return new r(function(r,i){var u=t.apply(n,e);function c(t){o(u,r,i,c,a,"next",t)}function a(t){o(u,r,i,c,a,"throw",t)}c(void 0)})}}},function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){var r=e(42);function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),r(t,o.key,o)}}t.exports=function(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}},function(t,n,e){var r=e(110),o=e(112);function i(t){return(i="function"==typeof o&&"symbol"==typeof r?function(t){return typeof t}:function(t){return t&&"function"==typeof o&&t.constructor===o&&t!==o.prototype?"symbol":typeof t})(t)}function u(n){return"function"==typeof o&&"symbol"===i(r)?t.exports=u=function(t){return i(t)}:t.exports=u=function(t){return t&&"function"==typeof o&&t.constructor===o&&t!==o.prototype?"symbol":i(t)},u(n)}t.exports=u},function(t,n,e){var r=e(24),o=e(18),i=e(12),u=e(30),c=e(11),a=e(47),f=Object.getOwnPropertyDescriptor;n.f=e(6)?f:function(t,n){if(t=i(t),n=u(n,!0),a)try{return f(t,n)}catch(t){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(7),o=e(8),i=e(16);t.exports=e(6)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,a=0;c>a;)r.f(t,e=u[a++],n[e]);return t}},function(t,n,e){t.exports=e(99)},function(t,n,e){t.exports=e(104)},function(t,n,e){var r=e(5),o=e(1),i=e(13);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},function(t,n,e){var r=function(t){"use strict";var n,e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function a(t,n,e,r){var o=n&&n.prototype instanceof d?n:d,i=Object.create(o.prototype),u=new P(r||[]);return i._invoke=function(t,n,e){var r=s;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return L()}for(e.method=o,e.arg=i;;){var u=e.delegate;if(u){var c=j(u,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===s)throw r=h,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=p;var a=f(t,n,e);if("normal"===a.type){if(r=e.done?h:l,a.arg===v)continue;return{value:a.arg,done:e.done}}"throw"===a.type&&(r=h,e.method="throw",e.arg=a.arg)}}}(t,e,u),i}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=a;var s="suspendedStart",l="suspendedYield",p="executing",h="completed",v={};function d(){}function y(){}function m(){}var b={};b[i]=function(){return this};var g=Object.getPrototypeOf,x=g&&g(g(k([])));x&&x!==e&&r.call(x,i)&&(b=x);var w=m.prototype=d.prototype=Object.create(b);function _(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function O(t){var n;this._invoke=function(e,o){function i(){return new Promise(function(n,i){!function n(e,o,i,u){var c=f(t[e],t,o);if("throw"!==c.type){var a=c.arg,s=a.value;return s&&"object"==typeof s&&r.call(s,"__await")?Promise.resolve(s.__await).then(function(t){n("next",t,i,u)},function(t){n("throw",t,i,u)}):Promise.resolve(s).then(function(t){a.value=t,i(a)},function(t){return n("throw",t,i,u)})}u(c.arg)}(e,o,n,i)})}return n=n?n.then(i,i):i()}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function S(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function E(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,u=function e(){for(;++o<t.length;)if(r.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return u.next=u}}return{next:L}}function L(){return{value:n,done:!0}}return y.prototype=w.constructor=m,m.constructor=y,m[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===y||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(O.prototype),O.prototype[u]=function(){return this},t.AsyncIterator=O,t.async=function(n,e,r,o){var i=new O(a(n,e,r,o));return t.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},_(w),w[c]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=k,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i],c=u.completion;if("root"===u.tryLoc)return o("end");if(u.tryLoc<=this.prev){var a=r.call(u,"catchLoc"),f=r.call(u,"finallyLoc");if(a&&f){if(this.prev<u.catchLoc)return o(u.catchLoc,!0);if(this.prev<u.finallyLoc)return o(u.finallyLoc)}else if(a){if(this.prev<u.catchLoc)return o(u.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return o(u.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=n,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(u)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),v},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),v}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,n,e){t.exports=e(73)},function(t,n,e){e(44),e(45),e(54),e(82),e(94),e(95),t.exports=e(1).Promise},function(t,n,e){var r=e(27),o=e(28);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),a=r(e),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(49),o=e(18),i=e(22),u={};e(9)(u,e(4)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(12),o=e(52),i=e(77);t.exports=function(t){return function(n,e,u){var c,a=r(n),f=o(a.length),s=i(u,f);if(t&&e!=e){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(27),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(11),o=e(23),i=e(31)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){"use strict";var r=e(80),o=e(81),i=e(15),u=e(12);t.exports=e(46)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){"use strict";var r,o,i,u,c=e(14),a=e(3),f=e(19),s=e(55),l=e(5),p=e(10),h=e(20),v=e(83),d=e(84),y=e(56),m=e(57).set,b=e(89)(),g=e(34),x=e(58),w=e(90),_=e(59),O=a.TypeError,j=a.process,S=j&&j.versions,E=S&&S.v8||"",P=a.Promise,k="process"==s(j),L=function(){},T=o=g.f,N=!!function(){try{var t=P.resolve(1),n=(t.constructor={})[e(4)("species")]=function(t){t(L,L)};return(k||"function"==typeof PromiseRejectionEvent)&&t.then(L)instanceof n&&0!==E.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),M=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},A=function(t,n){if(!t._n){t._n=!0;var e=t._c;b(function(){for(var r=t._v,o=1==t._s,i=0,u=function(n){var e,i,u,c=o?n.ok:n.fail,a=n.resolve,f=n.reject,s=n.domain;try{c?(o||(2==t._h&&I(t),t._h=1),!0===c?e=r:(s&&s.enter(),e=c(r),s&&(s.exit(),u=!0)),e===n.promise?f(O("Promise-chain cycle")):(i=M(e))?i.call(e,a,f):a(e)):f(r)}catch(t){s&&!u&&s.exit(),f(t)}};e.length>i;)u(e[i++]);t._c=[],t._n=!1,n&&!t._h&&F(t)})}},F=function(t){m.call(a,function(){var n,e,r,o=t._v,i=G(t);if(i&&(n=x(function(){k?j.emit("unhandledRejection",o,t):(e=a.onunhandledrejection)?e({promise:t,reason:o}):(r=a.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=k||G(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},G=function(t){return 1!==t._h&&0===(t._a||t._c).length},I=function(t){m.call(a,function(){var n;k?j.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},C=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),A(n,!0))},R=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw O("Promise can't be resolved itself");(n=M(t))?b(function(){var r={_w:e,_d:!1};try{n.call(t,f(R,r,1),f(C,r,1))}catch(t){C.call(r,t)}}):(e._v=t,e._s=1,A(e,!1))}catch(t){C.call({_w:e,_d:!1},t)}}};N||(P=function(t){v(this,P,"Promise","_h"),h(t),r.call(this);try{t(f(R,this,1),f(C,this,1))}catch(t){C.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e(91)(P.prototype,{then:function(t,n){var e=T(y(this,P));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=k?j.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&A(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=f(R,t,1),this.reject=f(C,t,1)},g.f=T=function(t){return t===P||t===u?new i(t):o(t)}),l(l.G+l.W+l.F*!N,{Promise:P}),e(22)(P,"Promise"),e(92)("Promise"),u=e(1).Promise,l(l.S+l.F*!N,"Promise",{reject:function(t){var n=T(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!N),"Promise",{resolve:function(t){return _(c&&this===u?P:this,t)}}),l(l.S+l.F*!(N&&e(93)(function(t){P.all(t).catch(L)})),"Promise",{all:function(t){var n=this,e=T(n),r=e.resolve,o=e.reject,i=x(function(){var e=[],i=0,u=1;d(t,!1,function(t){var c=i++,a=!1;e.push(void 0),u++,n.resolve(t).then(function(t){a||(a=!0,e[c]=t,--u||r(e))},o)}),--u||r(e)});return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=T(n),r=e.reject,o=x(function(){d(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(19),o=e(85),i=e(86),u=e(8),c=e(52),a=e(87),f={},s={};(n=t.exports=function(t,n,e,l,p){var h,v,d,y,m=p?function(){return t}:a(t),b=r(e,l,n?2:1),g=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(h=c(t.length);h>g;g++)if((y=n?b(u(v=t[g])[0],v[1]):b(t[g]))===f||y===s)return y}else for(d=m.call(t);!(v=d.next()).done;)if((y=o(d,b,v.value,n))===f||y===s)return y}).BREAK=f,n.RETURN=s},function(t,n,e){var r=e(8);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(15),o=e(4)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(55),o=e(4)("iterator"),i=e(15);t.exports=e(1).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(3),o=e(57).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,c=r.Promise,a="process"==e(17)(u);t.exports=function(){var t,n,e,f=function(){var r,o;for(a&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(a)e=function(){u.nextTick(f)};else if(!i||r.navigator&&r.navigator.standalone)if(c&&c.resolve){var s=c.resolve(void 0);e=function(){s.then(f)}}else e=function(){o.call(r,f)};else{var l=!0,p=document.createTextNode("");new i(f).observe(p,{characterData:!0}),e=function(){p.data=l=!l}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n,e){var r=e(3).navigator;t.exports=r&&r.userAgent||""},function(t,n,e){var r=e(9);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},function(t,n,e){"use strict";var r=e(3),o=e(1),i=e(7),u=e(6),c=e(4)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];u&&n&&!n[c]&&i.f(n,c,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(4)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(t){}return e}},function(t,n,e){"use strict";var r=e(5),o=e(1),i=e(3),u=e(56),c=e(59);r(r.P+r.R,"Promise",{finally:function(t){var n=u(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return c(n,t()).then(function(){return e})}:t,e?function(e){return c(n,t()).then(function(){throw e})}:t)}})},function(t,n,e){"use strict";var r=e(5),o=e(34),i=e(58);r(r.S,"Promise",{try:function(t){var n=o.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},function(t,n,e){e(97),t.exports=e(1).Object.assign},function(t,n,e){var r=e(5);r(r.S+r.F,"Object",{assign:e(98)})},function(t,n,e){"use strict";var r=e(6),o=e(16),i=e(26),u=e(24),c=e(23),a=e(51),f=Object.assign;t.exports=!f||e(13)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=f({},t)[e]||Object.keys(f({},n)).join("")!=r})?function(t,n){for(var e=c(t),f=arguments.length,s=1,l=i.f,p=u.f;f>s;)for(var h,v=a(arguments[s++]),d=l?o(v).concat(l(v)):o(v),y=d.length,m=0;y>m;)h=d[m++],r&&!p.call(v,h)||(e[h]=v[h]);return e}:f},function(t,n,e){e(60),t.exports=e(1).Object.getOwnPropertySymbols},function(t,n,e){var r=e(21)("meta"),o=e(10),i=e(11),u=e(7).f,c=0,a=Object.isExtensible||function(){return!0},f=!e(13)(function(){return a(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!a(t))return"F";if(!n)return"E";s(t)}return t[r].i},getWeak:function(t,n){if(!i(t,r)){if(!a(t))return!0;if(!n)return!1;s(t)}return t[r].w},onFreeze:function(t){return f&&l.NEED&&a(t)&&!i(t,r)&&s(t),t}}},function(t,n,e){var r=e(16),o=e(26),i=e(24);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,c=e(t),a=i.f,f=0;c.length>f;)a.call(t,u=c[f++])&&n.push(u);return n}},function(t,n,e){var r=e(12),o=e(41).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},function(t,n,e){var r=e(69);t.exports=function(t,n){if(null==t)return{};var e,o,i={},u=r(t);for(o=0;o<u.length;o++)e=u[o],n.indexOf(e)>=0||(i[e]=t[e]);return i}},function(t,n,e){e(105),t.exports=e(1).Object.keys},function(t,n,e){var r=e(23),o=e(16);e(70)("keys",function(){return function(t){return o(r(t))}})},function(t,n,e){e(107),t.exports=e(1).Array.isArray},function(t,n,e){var r=e(5);r(r.S,"Array",{isArray:e(61)})},function(t,n,e){e(109);var r=e(1).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){var r=e(5);r(r.S+r.F*!e(6),"Object",{defineProperty:e(7).f})},function(t,n,e){t.exports=e(111)},function(t,n,e){e(45),e(54),t.exports=e(35).f("iterator")},function(t,n,e){t.exports=e(113)},function(t,n,e){e(60),e(44),e(114),e(115),t.exports=e(1).Symbol},function(t,n,e){e(36)("asyncIterator")},function(t,n,e){e(36)("observable")},function(t,n,e){"use strict";e.r(n);var r=e(38),o=e.n(r),i=e(62),u=e.n(i),c=e(40),a=e.n(c),f=e(39),s=e.n(f),l=e(0),p=e.n(l),h=function(t){var n=t.registry;return function(t){var e,r=n.getComponent("layout","top-navigation"),i=function(e){var o=e.title,i=e.header,u=e.breadcrumbs,c=e.authenticated,f=s()(e,["title","header","breadcrumbs","authenticated"]),l={subMenu:["sub"],breadcrumbs:["breadcrumbs"]},h=function(t){l[t].forEach(function(n){l[t].push("".concat(n,"--").concat(c?"authenticated-user":"anonymous-user"))})};for(var v in l)h(v);var d=n.getComponent("menu",l.subMenu),y=n.getComponent("layout",l.breadcrumbs),m=i||{},b=m.media,g=m.headline,x=m.brand;return p.a.createElement("div",null,t.Head&&p.a.createElement(t.Head,a()({title:o},f)),p.a.createElement("header",{className:"header bg-brand--".concat(x||"dark-blue")},p.a.createElement("div",{className:"platform-placeholder platform-placeholder--navigation text--alternative"},p.a.createElement("div",{className:"bg-brand--".concat(x||"dark-blue")},p.a.createElement("div",{className:"navigation"},p.a.createElement("div",{className:"wrapper navigation__wrapper"},p.a.createElement(r,{registry:n,authenticated:c}),p.a.createElement(d,null),p.a.createElement(y,{breadcrumbs:u}))))),p.a.createElement("div",{className:"header__wrapper wrapper"},p.a.createElement("div",{className:"header__content content-block"},p.a.createElement("h1",{className:"content-block__title"},p.a.createElement("span",{className:"content-block__title-top"},g||o))),b&&p.a.createElement("div",{className:"header__media media-block"},p.a.createElement("img",{src:b.image,alt:""})))),p.a.createElement(t,f))};return i.getInitialProps=(e=u()(o.a.mark(function n(e){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",t.getInitialProps?t.getInitialProps(e):{});case 1:case"end":return n.stop()}},n)})),function(t){return e.apply(this,arguments)}),i}},v=e(25),d=e.n(v),y=e(63),m=e.n(y),b=e(64),g=e.n(b),x=e(43),w=e.n(x),_=e(37),O=e.n(_),j=e(65),S=e.n(j),E=function t(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(e.length<=0||!P(n))return n;var o=e.shift();return n.hasOwnProperty(o)?t(n[o],e):r},P=function(t){return t&&"object"===S()(t)&&!d()(t)},k=function t(n){if(!P(n))return n;for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];for(;r.length;){var i=r.shift();if(P(i))for(var u in i)n.hasOwnProperty(u)?P(i[u])?t(n[u],i[u]):n[u]=i[u]:O()(n,w()({},u,i[u]))}return n},L=e(2),T=e.n(L),N={missingTemplate:T()(function(){return e.e(10).then(e.bind(null,117))},{loadableGenerated:{webpack:function(){return[117]},modules:["./system/MissingTemplate"]}}),block:T()(function(){return e.e(11).then(e.bind(null,118))},{loadableGenerated:{webpack:function(){return[118]},modules:["../components/layout/Block"]}}),breadcrumbs:T()(function(){return e.e(12).then(e.bind(null,119))},{loadableGenerated:{webpack:function(){return[119]},modules:["../components/layout/Breadcrumbs"]}}),topNavigation:T()(function(){return e.e(13).then(e.bind(null,120))},{loadableGenerated:{webpack:function(){return[120]},modules:["../components/layout/TopNavigation"]}}),input:T()(function(){return e.e(1).then(e.bind(null,121))},{loadableGenerated:{webpack:function(){return[121]},modules:["../components/form-elements/Input"]}}),inputFilter:T()(function(){return e.e(2).then(e.bind(null,122))},{loadableGenerated:{webpack:function(){return[122]},modules:["../components/form-elements/InputFilter"]}}),password:T()(function(){return e.e(3).then(e.bind(null,123))},{loadableGenerated:{webpack:function(){return[123]},modules:["../components/form-elements/Password"]}}),textArea:T()(function(){return e.e(4).then(e.bind(null,124))},{loadableGenerated:{webpack:function(){return[124]},modules:["../components/form-elements/TextArea"]}}),radioButtons:T()(function(){return e.e(9).then(e.bind(null,129))},{loadableGenerated:{webpack:function(){return[129]},modules:["../components/form-elements/RadioButtons"]}}),checkboxes:T()(function(){return e.e(7).then(e.bind(null,130))},{loadableGenerated:{webpack:function(){return[130]},modules:["../components/form-elements/Checkboxes"]}}),dropdown:T()(function(){return e.e(8).then(e.bind(null,125))},{loadableGenerated:{webpack:function(){return[125]},modules:["../components/form-elements/Dropdown"]}}),upload:T()(function(){return e.e(5).then(e.bind(null,126))},{loadableGenerated:{webpack:function(){return[126]},modules:["../components/form-elements/Upload"]}}),logo:T()(function(){return e.e(14).then(e.bind(null,127))},{loadableGenerated:{webpack:function(){return[127]},modules:["../svg/Logo"]}}),button:T()(function(){return e.e(6).then(e.bind(null,128))},{loadableGenerated:{webpack:function(){return[128]},modules:["../components/form-elements/Button"]}})},M={system:{"missing-template":N.missingTemplate},layout:{block:N.block,breadcrumbs:N.breadcrumbs,"top-navigation":N.topNavigation},form:{input:N.input,"input-filter":N.inputFilter,password:N.password,textarea:N.textArea,"radio-buttons":N.radioButtons,checkboxes:N.checkboxes,dropdown:N.dropdown,upload:N.upload,button:N.button},svg:{logo:N.logo}},A=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};m()(this,t),this._registry=k({},M,n)}return g()(t,[{key:"getComponent",value:function(t,n){var e=this,r=!1;return d()(n)?n.forEach(function(n){var o=E(e._registry,[t,n]);o&&(r=o)}):r=E(this._registry,[t,n],!1),n&&!r&&(console.warn("Missing template: ".concat(n,".")),r=E(this._registry,["system","missing-template"],!1)),r}}]),t}();e.d(n,"Layout",function(){return h}),e.d(n,"Registry",function(){return A})}])});