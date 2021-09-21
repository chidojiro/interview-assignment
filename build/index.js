(()=>{var e={703:(e,t,r)=>{"use strict";var n=r(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,l){if(l!==n){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},697:(e,t,r)=>{e.exports=r(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n),r.d(n,{Accordion:()=>Y,AccordionItem:()=>X,Button:()=>C,Checkbox:()=>L,Filter:()=>$,HeaderText:()=>c,InputField:()=>S});const e=require("react");var t=r.n(e),o=r(697),a=r.n(o);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i=function(e){var r,n=e.variation,o=e.titleTop,a=e.titleBottom,i=e.children,c=e.cta,s=e.classes,u=["header","header--text"].concat(function(e){if(Array.isArray(e))return l(e)}(r=void 0===s?[]:s)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),p="bg-brand--".concat(n||"dark-blue");return p&&u.push(p),t().createElement("header",{className:u.join(" ")},t().createElement("div",{className:"header__wrapper wrapper"},t().createElement("div",{className:"header__content header__content--full-width content-block"},t().createElement("h1",{className:"content-block__title"},t().createElement("span",{className:"content-block__title-top"},o),a&&t().createElement("span",{className:"content-block__title-bottom text--emphasis"},a)),(i||c)&&t().createElement("div",{className:"content-block__split"},t().createElement("div",{className:"content-block__split-text content-block__split-text--s"},i&&t().createElement("p",null,i)),(null==c?void 0:c.title)&&t().createElement("a",{href:null==c?void 0:c.href,className:"button"},c.title)))))};i.propTypes={variation:a().string.isRequired,titleTop:a().string,titleBottom:a().string,cta:a().shape({href:a().string,title:a().string}),classes:a().array,children:a().any};const c=i;var s=function(e){var r=e.wrapClass,n=e.label,o=e.id,a=e.required,l=e.optionalLabel,i=e.ChildComponent,c=e.componentProps,s=e.error,u=e.description,p=e.children;return t().createElement("div",{className:r.join(" ")},n&&t().createElement("label",{className:"form-group__label",htmlFor:o},n,!a&&t().createElement("span",{className:"form-group__optional"}," ",l||"optional")),t().createElement("div",{className:"form-group__input"},t().createElement(i,c)),s&&t().createElement("div",{className:"form-group__feedback"},s),u&&t().createElement("div",{className:"form-group__message"},u),p)};s.propTypes={wrapClass:a().array,label:a().string,id:a().string,required:a().bool,optionalLabel:a().string,ChildComponent:a().any,componentProps:a().object,error:a().string,description:a().string,children:a().any};const u=s;var p=["fieldLabel"],f=["id","name"];function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var y=function(e){var r,n=e.wrapClass,o=e.label,a=e.required,l=e.capitalize,i=e.optionalLabel,c=e.ChildComponent,s=e.componentProps,u=e.error,y=e.description,g=e.children,v=function(e){if(Array.isArray(e))return d(e)}(r=n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();v.push("form-group--selection-control");var h=s.fieldLabel,O=m(s,p);return t().createElement("div",{className:v.join(" ")},o&&t().createElement("div",{className:"form-group__label"},o,!a&&t().createElement("span",{className:"form-group__optional"}," ",i||"optional")),g?g.map((function(e,r){var n=e.props,o=n.id,a=n.name,i=m(n,f),s=(a||"").split(" ").join("-"),u=o||"field--".concat(s);return t().createElement("div",{className:"form-group__input",key:r},t().createElement(c,b({id:u,name:a,capitalize:l},i)))})):t().createElement("div",{className:"form-group__input"},t().createElement(c,b({label:h},O))),u&&t().createElement("div",{className:"form-group__feedback"},u),y&&t().createElement("div",{className:"form-group__message"},y))};y.propTypes={wrapClass:a().array,label:a().string,id:a().string,required:a().bool,capitalize:a().bool,optionalLabel:a().string,ChildComponent:a().any,componentProps:a().object,error:a().string,description:a().string,children:a().any};const g=y;var v=["label","name","id","required","readOnly","description","error","children","optionalLabel","formGroupClass","capitalize"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const j=function(e){var r=function(r){var n=r.label,o=r.name,a=r.id,l=r.required,i=r.readOnly,c=r.description,s=r.error,p=r.children,f=r.optionalLabel,b=r.formGroupClass,m=r.capitalize,d=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(r,v),y="checkbox"===(null==e?void 0:e.type),j=["form-group"];b&&j.push(b),s&&j.push("form-group--error");var E=(o||"").split(" ").join("-"),_=a||"field--".concat(E),w=n;n&&m&&(w=n.charAt(0).toUpperCase()+n.slice(1));var P=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({name:o,id:_,capitalize:m},d);i&&(P.readOnly="readonly"),l&&(P.required="required");var S={wrapClass:j,label:w,id:_,required:l,capitalize:m,optionalLabel:f,ChildComponent:e,componentProps:P,error:s,description:c,children:p};return y?t().createElement(g,S):t().createElement(u,S)};return r.propTypes={label:a().string.isRequired,name:a().string.isRequired,id:a().string,error:a().string,description:a().string,required:a().bool,readOnly:a().bool,capitalize:a().bool,children:a().any,optionalLabel:a().string,formGroupClass:a().string},r};var E=["type"];function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P=function(e){var r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({type:e.type||"text"},function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,E));return t().createElement("input",r)};P.propTypes={type:a().string};const S=j(P);var N=["children","size","fullWidth","color","type","icon","preloader","className"];function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},x.apply(this,arguments)}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function A(e){var r,n=e.children,o=e.size,a=e.fullWidth,l=e.color,i=e.type,c=void 0===i?"ghost":i,s=e.icon,u=e.preloader,p=e.className,f=void 0===p?"":p,b=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,N),m=["button"].concat(function(e){if(Array.isArray(e))return k(e)}(r=f.split(" "))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=[],y=!1,g=!1,v=!0,h=!1,O=s,j="s"!==o&&"m"!==o;if("s"===o&&!["ghost","ghost-icon","filled","filled-icon","plain","plain-icon"].includes(c))return console.warn("Your type ".concat(c," is not supported by the small size")),null;if(j&&!["ghost","filled","plain"].includes(c))return console.warn("Your type ".concat(c," is not supported by the large size")),null;switch(c){case"ghost-icon":y=!0;break;case"ghost-social":y=!0,O="social-btn-".concat(s),m.push("button--social"),d.push("icon-".concat(s));break;case"filled":m.push("button--filled");break;case"filled-icon":m.push("button--filled"),y=!0;break;case"icon":m.push("button--filled"),m.push("button--icon"),y=!0,h=!0,v=!1;break;case"plain":m.push("button--plain");break;case"plain-icon":m.push("button--plain"),y=!0}return j||m.push("button--".concat(o)),l&&m.push("button--".concat(l)),a&&m.push("button--full-width"),u&&(g=!0,v=!1,y=!1,m.push("button--preloader")),t().createElement("button",x({className:m.join(" "),type:"button"},b),h&&t().createElement("span",{className:"button__text"},n),y&&t().createElement("span",{className:"icon ".concat("icon"!==c?"icon--inline":"")},t().createElement("svg",{className:d.join(" ")},t().createElement("use",{xlinkHref:"/themes/custom/bluex/dist/assets/image/icons.svg#".concat(O)}))),g&&t().createElement("span",{className:"dots"}),v&&n)}A.propTypes={children:a().any.isRequired,size:a().oneOf(["s","m"]),fullWidth:a().bool,color:a().string,type:a().oneOf(["ghost-icon","ghost-social","filled","filled-icon","icon","plain","plain-icon"]),icon:a().string,preloader:a().bool,className:a().string};const C=A;var T=["id","label","capitalize"];function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},I.apply(this,arguments)}function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var z=function(e){var r=e.id,n=e.label,o=e.capitalize,a=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({id:r},function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,T)),l=n;return n&&o&&(l=n.charAt(0).toUpperCase()+n.slice(1)),t().createElement("label",{htmlFor:r,className:"selection-control selection-control--checkbox"},t().createElement("span",{className:"selection-control__input"},t().createElement("input",I({type:"checkbox"},a)),t().createElement("span",{className:"icon selection-control__control","aria-hidden":"true"},t().createElement("svg",{viewBox:"0 0 16 16"},t().createElement("polyline",{points:"2.1,8.5 6.2,12.4 13.9,5.1"})))),t().createElement("span",{className:"selection-control__label"},l))};z.type="checkbox",z.propTypes={id:a().string,label:a().string,capitalize:a().bool};const L=j(z),M=function(t){var r=(0,e.useRef)();return(0,e.useEffect)((function(){t&&t.forEach((function(e){new e(r.current)}))}),[t]),[r]};function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){W(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function W(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var F=function(r){var n,o=r.title,a=r.mobileTitle,l=r.children,i=r.footer,c=r.clearLink,s=r.closeMobileOnSubmit,u=void 0===s||s,p=r.libs,f=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(e){i=!0,o=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(M(p),1)[0],b=(0,e.useRef)(),m="";return i&&"object"!==R((m=H({},i)).props.children)&&u&&(m.props=H(H({},m.props),{},{onClick:(n=m.props.onClick,function(){n&&n(),function(e){e.current.dispatchEvent(new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0,buttons:1}))}(b)})})),t().createElement("div",{className:"filter","data-rs-filter":"",ref:f},t().createElement("div",{className:"filter__toggle","data-rs-filter-refine-search":""},t().createElement("span",{className:"icon icon--inline hidden--from-l"},t().createElement("svg",null,t().createElement("use",{xlinkHref:"/themes/custom/bluex/dist/assets/image/icons.svg#filter"}))),t().createElement("span",null,o)),t().createElement("div",{className:"filter__content","data-rs-filter-content":""},t().createElement("div",{className:"filter__header hidden--from-l"},t().createElement("span",{className:"filter__title"},a),t().createElement("span",{className:"icon icon--inline"},t().createElement("svg",{"data-rs-filter-close":"",ref:b},t().createElement("use",{xlinkHref:"/themes/custom/bluex/dist/assets/image/icons.svg#close"})))),t().createElement("div",{className:"filter__block"},c&&t().createElement("div",{className:"filter__clear"},c),l),m&&t().createElement("div",{className:"filter__footer divider--top hidden--from-l"},m)))};F.propTypes={title:a().string,mobileTitle:a().string,children:a().any,footer:a().any,clearLink:a().any,closeMobileOnSubmit:a().bool,libs:a().object};const $=F;var G=function(e){var r=e.children;return t().createElement("ul",{className:"link-list link-list--single accordion"},r)};G.propTypes={children:a().any};const Y=G;var V=["children","title","subtitle","expanded","libs"];function J(){return J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},J.apply(this,arguments)}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Q=function(e){var r=e.children,n=e.title,o=e.subtitle,a=e.expanded,l=void 0!==a&&a,i=e.libs,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,V),s=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(e){i=!0,o=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return K(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?K(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(M(i),1)[0];return t().createElement("li",J({},c,{className:"link-list__item"}),t().createElement("div",{className:"collapsible__trigger ".concat(l?"icon__toggler--active":""),"data-rs-collapsible":"",role:"button","aria-expanded":l,"data-rs-toggable":"",ref:s,"data-scl":""},t().createElement("h3",{className:"link-list__link"},n,o&&t().createElement("p",{className:"text--alternative pt-xs mb-none"},o),t().createElement("span",{className:"hidden--from-l toggle-arrow icon"},t().createElement("svg",null,t().createElement("use",{xlinkHref:"/themes/custom/bluex/dist/assets/image/icons.svg#chevron-down"}))),t().createElement("span",{className:"hidden--until-l toggle-arrow icon icon--l"},t().createElement("svg",null,t().createElement("use",{xlinkHref:"/themes/custom/bluex/dist/assets/image/icons.svg#chevron-down-30"}))))),t().createElement("div",{className:"collapsible__content body-copy","data-rs-collapsible-content":"".concat(l?"expanded":""),"aria-hidden":!l},t().createElement("div",{className:"collapsible__content--wrapper"},r)))};Q.propTypes={children:a().any,title:a().string,subtitle:a().string,expanded:a().bool,libs:a().object};const X=Q})();var o=exports;for(var a in n)o[a]=n[a];n.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();