exports.ids=[12],exports.modules={119:function(e,r,a){"use strict";a.r(r);var l=a(41),t=a.n(l).a.createElement;r.default=function(e){var r,a=e.breadcrumbs;return a.length>1&&(r=a[a.length-2]),t("nav",{className:"breadcrumb","aria-label":"breadcrumb"},r&&t("a",{href:r.uri,className:"breadcrumb__link hidden--from-l"},r.title),t("ul",{className:"breadcrumb__list hidden--until-l"},a.map((function(e,r){return t("li",{className:"breadcrumb__item",key:r},e.uri&&t("a",{href:e.uri,className:"breadcrumb__link"},e.title),!e.uri&&e.title)}))))}}};