!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueTreeNavigation=t():e.VueTreeNavigation=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}([function(e,t,n){"use strict";function r(e,t,n,r,i,a,o,s){var u,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),o?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=u):i&&(u=s?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(e,t){return u.call(t),c(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:l}}n.d(t,"a",(function(){return r}))},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(a).concat([i]).join("\n")}var o;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},i=0;i<t.length;i++){var a=t[i],o=a[0],s={id:e+":"+i,css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):n.push(r[o]={id:o,parts:[s]})}return n}n.r(t),n.d(t,"default",(function(){return p}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},o=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,l=!1,c=function(){},d=null,f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,i){l=n,d=i||{};var o=r(e,t);return v(o),function(t){for(var n=[],i=0;i<o.length;i++){var s=o[i];(u=a[s.id]).refs--,n.push(u)}t?v(o=r(e,t)):o=[];for(i=0;i<n.length;i++){var u;if(0===(u=n[i]).refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete a[u.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=a[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(g(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var o=[];for(i=0;i<n.parts.length;i++)o.push(g(n.parts[i]));a[n.id]={id:n.id,refs:1,parts:o}}}}function h(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function g(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(l)return c;r.parentNode.removeChild(r)}if(f){var i=u++;r=s||(s=h()),t=y.bind(null,r,i,!1),n=y.bind(null,r,i,!0)}else r=h(),t=b.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var m,_=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function y(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function b(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),d.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},function(e,t,n){"use strict";n.r(t);var r=n(4),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t.default=i.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(23)),i=a(n(15));function a(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{isOpen:null}},props:{parentItem:{type:Object,required:!0},level:{type:Number,required:!0},defaultOpenLevel:{type:Number,required:!0}},computed:{classes:function(){return e={"NavigationLevel--closed":!this.isOpen},t="NavigationLevel--level-"+this.level,n=!0,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e;var e,t,n}},methods:{onToggleClick:function(){this.isOpen=!this.isOpen},onItemClick:function(){!1===this.isOpen&&(this.isOpen=!0)},renderLevelAsOpen:function(){if(this.defaultOpenLevel>=this.level)return!0;var e=void 0;if(e=void 0!==this.$router?this.$route.path+this.$route.hash:window.location.pathname+window.location.hash,""!==this.parentItem.meta.target&&e.includes(this.parentItem.meta.target))return!0;for(var t=0;t<this.parentItem.children.length;t++){var n=this.parentItem.children[t];if(""!==n.meta.target&&e.includes(n.meta.target))return!0}return!1}},components:{NavigationItem:i.default,NavigationToggle:r.default},mounted:function(){this.isOpen=this.renderLevelAsOpen()}}},function(e,t,n){"use strict";n.r(t);var r=n(6),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t.default=i.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{open:{type:Boolean,required:!1,default:!1}}}},function(e,t,n){"use strict";n.r(t);var r=n(8),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t.default=i.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{active:!1}},props:{item:Object,required:!0},methods:{isActive:function(){return""!==this.item.meta.target&&(this.$route?(this.$route.path+this.$route.hash).endsWith(this.item.meta.target)||(this.$route.path+this.$route.hash).endsWith(this.item.meta.target+"/"):window.location.href.endsWith(this.item.meta.target)||window.location.href.endsWith(this.item.meta.target+"/"))}},computed:{showLabel:function(){return void 0===this.item.path&&void 0===this.item.element&&void 0===this.item.external},showRouterLink:function(){return this.showLink&&void 0!==this.$router},showHyperLink:function(){return this.showLink&&void 0===this.$router},showExternalHyperLink:function(){return void 0!==this.item.external},showLink:function(){return void 0!==this.item.path||void 0!==this.item.element},classes:function(){return{"NavigationItem--active":this.active}}},watch:{item:function(){this.active=this.isActive()},$route:function(){this.active=this.isActive()}},mounted:function(){var e=this;this.active=this.isActive(),this.$router||window.addEventListener("hashchange",(function(){e.active=e.isActive()}))}}},function(e,t,n){"use strict";var r=n(12);n.o(r,"render")&&n.d(t,"render",(function(){return r.render})),n.o(r,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return r.staticRenderFns}))},function(e,t,n){"use strict";var r=n(13);n.o(r,"render")&&n.d(t,"render",(function(){return r.render})),n.o(r,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return r.staticRenderFns}))},function(e,t,n){"use strict";var r=n(16);n.o(r,"render")&&n.d(t,"render",(function(){return r.render})),n.o(r,"staticRenderFns")&&n.d(t,"staticRenderFns",(function(){return r.staticRenderFns}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.render=function(){var e=this,t=e._self._c;return t("div",{staticClass:"NavigationLevel",class:e.classes},[t("div",{staticClass:"NavigationLevel__parent"},[t("NavigationToggle",{attrs:{open:e.isOpen},nativeOn:{click:function(t){return e.onToggleClick.apply(null,arguments)}}}),e._v(" "),t("NavigationItem",{attrs:{item:e.parentItem},nativeOn:{click:function(t){return e.onItemClick.apply(null,arguments)}}})],1),e._v(" "),t("ul",{staticClass:"NavigationLevel__children"},[e._t("default")],2)])},t.staticRenderFns=[]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.render=function(){var e=this._self._c;return e("span",{staticClass:"NavigationToggle",class:{"NavigationToggle--closed":!this.open}},[e("span",{staticClass:"NavigationToggle__icon",class:{"NavigationToggle__icon--closed":!this.open}})])},t.staticRenderFns=[]},function(e,t,n){var r=n(25);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(2).default)("ed10dae0",r,!0,{})},function(e,t,n){"use strict";n.r(t);var r=n(11),i=n(7);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n(26);var o=n(0),s=Object(o.a)(i.default,r.render,r.staticRenderFns,!1,null,null,null);t.default=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.render=function(){var e=this,t=e._self._c;return t("span",{staticClass:"NavigationItem",class:e.classes},[e.showLabel?t("span",{staticClass:"NavigationItem__label"},[e._v(e._s(e.item.name))]):e._e(),e._v(" "),e.showRouterLink?t("router-link",{staticClass:"NavigationItem__router-link",attrs:{to:e.item.meta.target}},[e._v(e._s(e.item.name))]):e._e(),e._v(" "),e.showHyperLink?t("a",{staticClass:"NavigationItem__link",attrs:{href:e.item.meta.target}},[e._v(e._s(e.item.name))]):e._e(),e._v(" "),e.showExternalHyperLink?t("a",{staticClass:"NavigationItem__external-link",attrs:{href:e.item.meta.target,target:"_blank"}},[e._v(e._s(e.item.name))]):e._e()],1)},t.staticRenderFns=[]},function(e,t,n){var r=n(27);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(2).default)("21177052",r,!0,{})},function(e,t,n){var r=n(29);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(2).default)("9690b7d0",r,!0,{})},function(e,t,n){"use strict";var r,i=n(20),a=(r=i)&&r.__esModule?r:{default:r};e.exports={install:function(e,t){e.component("vue-tree-navigation",a.default)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(21);n(31);var i={props:{items:{type:Array,required:!1,default:function(){return[]}},defaultOpenLevel:{type:Number,default:0}},computed:{navItems:function(){return this.items&&this.items.length?this.items:this.$router&&this.$router.options&&this.$router.options.routes&&this.$router.options.routes.length?this.$router.options.routes:(console.warn("[VueTreeNavigation]: Haven't you forget to provide items or define vue-router routes?"),[])},navItemsWithMetadata:function(){var e=JSON.parse(JSON.stringify(this.navItems));return(0,r.insertMetadataToNavItems)(e)}},render:function(e){var t=e("ul",(0,r.generateLevel)(e,this.navItemsWithMetadata,1,this.defaultOpenLevel)),n=e("div",{class:["NavigationLevel","NavigationLevel--level-0"]},[t]);return e("div",{class:"TreeNavigation"},[n])}};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getItemMetadata=t.insertMetadataToNavItems=t.generateLevel=void 0;var r=o(n(22)),i=o(n(15)),a=n(30);function o(e){return e&&e.__esModule?e:{default:e}}t.generateLevel=function e(t,n,a,o){var s=[];return n.forEach((function(n){if(n.hasOwnProperty("children")){var u=t(r.default,{props:{parentItem:n,level:a,defaultOpenLevel:o}},[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e(t,n.children,a+1,o))));s.push(t("li",[u]))}else{var l=t(i.default,{props:{item:n}});s.push(t("li",[l]))}})),s},t.insertMetadataToNavItems=function e(t,n){return t.forEach((function(t){t.meta=s(t,n),t.hasOwnProperty("children")&&(t.children=e(t.children,t))})),t};var s=t.getItemMetadata=function(e,t){var n=(0,a.sanitizeElement)(e.element),r=(0,a.sanitizePath)(e.path),i=e.external;if(void 0===t){if(void 0===n&&void 0===r&&void 0===i)return{path:"",target:""};if(void 0!==i)return{path:"",target:i};if(void 0!==r)return{path:r,target:r};if(void 0!==n)return{path:"",target:"/"+n}}var o=(0,a.sanitizePath)(t.meta.path);return void 0!==i?{path:o,target:i}:void 0!==r?{path:o+r,target:o+r}:void 0!==n?{path:o,target:(0,a.sanitizePath)(o+n)}:{path:o,target:""}}},function(e,t,n){"use strict";n.r(t);var r=n(9),i=n(3);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n(28);var o=n(0),s=Object(o.a)(i.default,r.render,r.staticRenderFns,!1,null,null,null);t.default=s.exports},function(e,t,n){"use strict";n.r(t);var r=n(10),i=n(5);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n(24);var o=n(0),s=Object(o.a)(i.default,r.render,r.staticRenderFns,!1,null,null,null);t.default=s.exports},function(e,t,n){"use strict";n(14)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".NavigationToggle{position:relative;top:-3px;padding:5px 5px 5px 3px;cursor:pointer}.NavigationToggle__icon{display:inline-block;padding:3px;border:solid #000;border-width:0 2px 2px 0;transform:rotate(45deg)}.NavigationToggle__icon--closed{transform:rotate(-45deg)}",""])},function(e,t,n){"use strict";n(17)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".NavigationItem{display:inline-block;padding-top:5px;padding-bottom:5px}.NavigationItem span{cursor:pointer}",""])},function(e,t,n){"use strict";n(18)},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".NavigationLevel--closed ul{display:none}",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.sanitizeElement=function(e){return void 0===e||""===e||"#"!==e[0]&&(e="#"+e),e},t.sanitizePath=function(e){if(void 0!==e)return"/"!==e[0]&&(e="/"+e),"/"===e[e.length-1]&&(e=e.slice(0,-1)),e}},function(e,t,n){var r=n(32);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(2).default)("2905413a",r,!0,{})},function(e,t,n){(e.exports=n(1)(!1)).push([e.i,".TreeNavigation{display:inline-block;padding:0;margin:0}.TreeNavigation ul{padding:0;margin:0;list-style-type:none}.TreeNavigation li{padding-left:20px}",""])}])}));
//# sourceMappingURL=vue-tree-navigation.js.map