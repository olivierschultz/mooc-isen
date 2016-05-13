/*!
 *
 *  Google
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

(function(){var k=this;function aa(){}
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function l(a){return"array"==ba(a)}function m(a){return"string"==typeof a}function ca(a){return"boolean"==typeof a}function da(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function n(a){return a[ea]||(a[ea]=++fa)}var ea="closure_uid_"+(1E9*Math.random()>>>0),fa=0;function ga(a,b,c){return a.call.apply(a.bind,arguments)}
function ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ga:ha;return p.apply(null,arguments)}var ia=Date.now||function(){return+new Date};
function q(a,b){function c(){}c.prototype=b.prototype;a.v=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Y=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};var ja;var ka=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function la(a,b){return a<b?-1:a>b?1:0};var ma=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(m(a))return m(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},r=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},na=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,
b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=m(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var H=g[h];b.call(c,H,h,a)&&(e[f++]=H)}return e},oa=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};function t(a,b){return 0<=ma(a,b)}function pa(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};var u;a:{var qa=k.navigator;if(qa){var ra=qa.userAgent;if(ra){u=ra;break a}}u=""};function sa(a,b,c){for(var d in a)b.call(c,a[d],d,a)}function ta(){var a=v,b;for(b in a)return!1;return!0}var ua="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function va(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ua.length;f++)c=ua[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var wa=-1!=u.indexOf("Opera")||-1!=u.indexOf("OPR"),w=-1!=u.indexOf("Trident")||-1!=u.indexOf("MSIE"),xa=-1!=u.indexOf("Edge"),x=-1!=u.indexOf("Gecko")&&!(-1!=u.toLowerCase().indexOf("webkit")&&-1==u.indexOf("Edge"))&&!(-1!=u.indexOf("Trident")||-1!=u.indexOf("MSIE"))&&-1==u.indexOf("Edge"),y=-1!=u.toLowerCase().indexOf("webkit")&&-1==u.indexOf("Edge");function ya(){var a=k.document;return a?a.documentMode:void 0}var za;
a:{var Aa="",Ba=function(){var a=u;if(x)return/rv\:([^\);]+)(\)|;)/.exec(a);if(xa)return/Edge\/([\d\.]+)/.exec(a);if(w)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(y)return/WebKit\/(\S+)/.exec(a);if(wa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Ba&&(Aa=Ba?Ba[1]:"");if(w){var Ca=ya();if(null!=Ca&&Ca>parseFloat(Aa)){za=String(Ca);break a}}za=Aa}var Da={};
function z(a){var b;if(!(b=Da[a])){b=0;for(var c=ka(String(za)).split("."),d=ka(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",H=RegExp("(\\d*)(\\D*)","g"),Zb=RegExp("(\\d*)(\\D*)","g");do{var X=H.exec(g)||["","",""],Y=Zb.exec(h)||["","",""];if(0==X[0].length&&0==Y[0].length)break;b=la(0==X[1].length?0:parseInt(X[1],10),0==Y[1].length?0:parseInt(Y[1],10))||la(0==X[2].length,0==Y[2].length)||la(X[2],Y[2])}while(0==b)}b=Da[a]=0<=b}return b}
var Ea=k.document,Fa=Ea&&w?ya()||("CSS1Compat"==Ea.compatMode?parseInt(za,10):5):void 0;var Ga=!w||9<=Number(Fa),Ha=w&&!z("9");!y||z("528");x&&z("1.9b")||w&&z("8")||wa&&z("9.5")||y&&z("528");x&&!z("8")||w&&z("9");var A="closure_listenable_"+(1E6*Math.random()|0),Ia=0;var Ja;Ja=y?"webkitTransitionEnd":wa?"otransitionend":"transitionend";function Ka(a){Ka[" "](a);return a}Ka[" "]=aa;function B(){0!=La&&n(this);this.O=this.O;this.U=this.U}var La=0;B.prototype.O=!1;function C(a,b){this.type=a;this.a=this.target=b;this.c=!1}C.prototype.f=function(){this.c=!0};C.prototype.preventDefault=function(){};function D(a,b){C.call(this,a?a.type:"");this.a=this.target=null;this.clientY=this.clientX=0;this.b=this.state=null;a&&this.s(a,b)}q(D,C);
D.prototype.s=function(a,b){this.type=a.type;var c=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.a=b;var d=a.relatedTarget;if(d&&x)try{Ka(d.nodeName)}catch(e){}null===c?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY):(this.clientX=void 0!==c.clientX?c.clientX:c.pageX,this.clientY=void 0!==c.clientY?c.clientY:c.pageY);this.state=a.state;this.b=a;a.defaultPrevented&&this.preventDefault()};
D.prototype.f=function(){D.v.f.call(this);this.b.stopPropagation?this.b.stopPropagation():this.b.cancelBubble=!0};D.prototype.preventDefault=function(){D.v.preventDefault.call(this);var a=this.b;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ha)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};function Ma(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.capture=!!d;this.A=e;++Ia;this.m=this.w=!1}function Na(a){a.m=!0;a.listener=null;a.a=null;a.src=null;a.A=null};function Oa(a){this.src=a;this.a={};this.b=0}function Pa(a,b,c,d,e,f){var g=b.toString();b=a.a[g];b||(b=a.a[g]=[],a.b++);var h=Qa(b,c,e,f);-1<h?(a=b[h],d||(a.w=!1)):(a=new Ma(c,a.src,g,!!e,f),a.w=d,b.push(a));return a}function Ra(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=ma(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(Na(b),0==a.a[c].length&&(delete a.a[c],a.b--))}}
function Qa(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.m&&f.listener==b&&f.capture==!!c&&f.A==d)return e}return-1};var Sa="closure_lm_"+(1E6*Math.random()|0),Ta={},Ua=0;function E(a,b,c,d,e){if(l(b)){for(var f=0;f<b.length;f++)E(a,b[f],c,d,e);return null}c=Va(c);return a&&a[A]?Pa(a.l,String(b),c,!1,d,e):Wa(a,b,c,!1,d,e)}
function Wa(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,h=Xa(a);h||(a[Sa]=h=new Oa(a));c=Pa(h,b,c,d,e,f);if(c.a)return c;d=Ya();c.a=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(Za(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Ua++;return c}
function Ya(){var a=$a,b=Ga?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function ab(a,b,c,d,e){if(l(b))for(var f=0;f<b.length;f++)ab(a,b[f],c,d,e);else c=Va(c),a&&a[A]?Pa(a.l,String(b),c,!0,d,e):Wa(a,b,c,!0,d,e)}
function bb(a,b,c,d,e){if(l(b))for(var f=0;f<b.length;f++)bb(a,b[f],c,d,e);else(c=Va(c),a&&a[A])?(a=a.l,b=String(b).toString(),b in a.a&&(f=a.a[b],c=Qa(f,c,d,e),-1<c&&(Na(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=Xa(a))&&(b=a.a[b.toString()],a=-1,b&&(a=Qa(b,c,!!d,e)),(c=-1<a?b[a]:null)&&cb(c))}
function cb(a){if("number"!=typeof a&&a&&!a.m){var b=a.src;if(b&&b[A])Ra(b.l,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(Za(c),d);Ua--;(c=Xa(b))?(Ra(c,a),0==c.b&&(c.src=null,b[Sa]=null)):Na(a)}}}function Za(a){return a in Ta?Ta[a]:Ta[a]="on"+a}function db(a,b,c,d){var e=!0;if(a=Xa(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.m&&(f=eb(f,d),e=e&&!1!==f)}return e}
function eb(a,b){var c=a.listener,d=a.A||a.src;a.w&&cb(a);return c.call(d,b)}
function $a(a,b){if(a.m)return!0;if(!Ga){var c;if(!(c=b))a:{c=["window","event"];for(var d=k,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new D(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(H){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.a;f;f=f.parentNode)e.push(f);for(var f=a.type,g=e.length-1;!c.c&&0<=g;g--){c.a=e[g];var h=db(e[g],f,!0,c),d=d&&h}for(g=0;!c.c&&g<e.length;g++)c.a=e[g],h=db(e[g],
f,!1,c),d=d&&h}return d}return eb(a,new D(b,this))}function Xa(a){a=a[Sa];return a instanceof Oa?a:null}var fb="__closure_events_fn_"+(1E9*Math.random()>>>0);function Va(a){if("function"==ba(a))return a;a[fb]||(a[fb]=function(b){return a.handleEvent(b)});return a[fb]};function gb(){return navigator.userAgent.match(/Android/i)}function hb(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)};var ib=!w;function F(a,b){return ib&&a.dataset?b in a.dataset?a.dataset[b]:null:a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())};function jb(a){if(a.classList)return a.classList;a=a.className;return m(a)&&a.match(/\S+/g)||[]}function kb(a,b){return a.classList?a.classList.contains(b):t(jb(a),b)}function G(a,b){a.classList?a.classList.add(b):kb(a,b)||(a.className+=0<a.className.length?" "+b:b)}function I(a,b){a.classList?a.classList.remove(b):kb(a,b)&&(a.className=na(jb(a),function(a){return a!=b}).join(" "))};function lb(a){this.a=a;this.b={};this.c=p(this.c,this);a=F(this.a,"appStoreUrl");var b=F(this.a,"playStoreUrl");this.b.M=a;this.b.I=b;var c;a=this.a;hb()&&this.b.M?(this.a.href=this.b.M,c=!0):gb()&&this.b.I&&(this.a.href=this.b.I,c=!0);c?E(a,"click",p(this.c)):(G(a,"mdl-js-button"),(c=document.querySelector('[for="'+a.id+'"]'))&&G(c,"mdl-js-menu"),window.componentHandler.upgradeElements([a,c]))}
lb.prototype.c=function(a){var b,c=F(this.a,"gLabel");hb()?b="Apple App Store":gb()&&(b="Google Play Store");c&&b&&(mb("Store",b,c),a.f());window.open(this.a.href)};function nb(){var a=J(ob);r(a,function(a){new lb(a)})}var ob="js-get-app-button";function pb(a){a=a.className;return m(a)&&a.match(/\S+/g)||[]}function qb(a,b){for(var c=pb(a),d=c,e=pa(arguments,1),f=0;f<e.length;f++)t(d,e[f])||d.push(e[f]);a.className=c.join(" ")}function rb(a,b){var c=pb(a),c=sb(c,pa(arguments,1));a.className=c.join(" ")}function sb(a,b){return na(a,function(a){return!t(b,a)})}function tb(a){var b=K;return t(pb(a),b)};function L(a,b){this.width=a;this.height=b}L.prototype.clone=function(){return new L(this.width,this.height)};L.prototype.toString=function(){return"("+this.width+" x "+this.height+")"};L.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};L.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
L.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function M(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}M.prototype.clone=function(){return new M(this.x,this.y)};M.prototype.toString=function(){return"("+this.x+", "+this.y+")"};M.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};M.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};M.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function N(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}N.prototype.clone=function(){return new N(this.top,this.right,this.bottom,this.left)};N.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"};N.prototype.expand=function(a,b,c,d){da(a)?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=Number(b),this.bottom+=Number(c),this.left-=Number(d));return this};
N.prototype.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};N.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
N.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};!x&&!w||w&&9<=Number(Fa)||x&&z("1.9.1");w&&z("9");var ub=w||wa||y;function J(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):vb(a)}function O(a){var b=document,c=null;b.getElementsByClassName?c=b.getElementsByClassName(a)[0]:b.querySelectorAll&&b.querySelector?c=b.querySelector("."+a):c=vb(a)[0];return c||null}
function vb(a){var b,c,d,e;b=document;if(b.querySelectorAll&&b.querySelector&&a)return b.querySelectorAll(""+(a?"."+a:""));if(a&&b.getElementsByClassName){var f=b.getElementsByClassName(a);return f}f=b.getElementsByTagName("*");if(a){e={};for(c=d=0;b=f[c];c++){var g=b.className;"function"==typeof g.split&&t(g.split(/\s+/),a)&&(e[d++]=b)}e.length=d;return e}return f}function wb(a){a=a.document;a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new L(a.clientWidth,a.clientHeight)}
function xb(a){var b=a.scrollingElement?a.scrollingElement:y||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement;a=a.parentWindow||a.defaultView;return w&&z("10")&&a.pageYOffset!=b.scrollTop?new M(b.scrollLeft,b.scrollTop):new M(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}function yb(a){return 9==a.nodeType?a:a.ownerDocument||a.document}function zb(a){this.a=a||k.document||document}
function Ab(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};function Bb(a,b){var c=yb(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}function Cb(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}w&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Db(a){var b=Eb;if("none"!=(Bb(a,"display")||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}function Eb(a){var b=a.offsetWidth,c=a.offsetHeight,d=y&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=Cb(a),new L(a.right-a.left,a.bottom-a.top)):new L(b,c)}
function Fb(a,b){var c=a.currentStyle?a.currentStyle[b]:null,d;if(c)if(/^\d+px?$/.test(c))d=parseInt(c,10);else{d=a.style.left;var e=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=c;c=a.style.pixelLeft;a.style.left=d;a.runtimeStyle.left=e;d=c}else d=0;return d}
function Gb(a){if(w){var b=Fb(a,"paddingLeft"),c=Fb(a,"paddingRight"),d=Fb(a,"paddingTop");a=Fb(a,"paddingBottom");return new N(d,c,a,b)}b=Bb(a,"paddingLeft");c=Bb(a,"paddingRight");d=Bb(a,"paddingTop");a=Bb(a,"paddingBottom");return new N(parseFloat(d),parseFloat(c),parseFloat(a),parseFloat(b))};function P(){B.call(this);this.l=new Oa(this);this.S=this}q(P,B);P.prototype[A]=!0;P.prototype.removeEventListener=function(a,b,c,d){bb(this,a,b,c,d)};function Hb(a,b){var c=a.S,d=b,e=d.type||d;if(m(d))d=new C(d,c);else if(d instanceof C)d.target=d.target||c;else{var f=d,d=new C(e,c);va(d,f)}d.c||(c=d.a=c,Ib(c,e,!0,d),d.c||Ib(c,e,!1,d))}
function Ib(a,b,c,d){if(b=a.l.a[String(b)]){b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.m&&g.capture==c){var h=g.listener,H=g.A||g.src;g.w&&Ra(a.l,g);e=!1!==h.call(H,d)&&e}}}};function Q(){P.call(this);this.b=Jb;this.R=this.g=null}q(Q,P);var Jb=0;Q.prototype.F=function(){this.c("begin")};Q.prototype.G=function(){this.c("end")};Q.prototype.c=function(a){Hb(this,a)};function Kb(a,b){if("function"!=ba(a))if(a&&"function"==typeof a.handleEvent)a=p(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:k.setTimeout(a,b||0)};function Lb(a,b,c){B.call(this);this.b=a;this.g=b||0;this.f=c;this.c=p(this.i,this)}q(Lb,B);Lb.prototype.a=0;function Mb(a){0!=a.a&&k.clearTimeout(a.a);a.a=0;a.a=Kb(a.c,a.g)}Lb.prototype.i=function(){this.a=0;this.b&&this.b.call(this.f)};var v={},Nb=null;function Ob(a){a=n(a);delete v[a];ta()&&Nb&&(a=Nb,0!=a.a&&k.clearTimeout(a.a),a.a=0)}function Pb(){Nb||(Nb=new Lb(function(){Qb()},20));var a=Nb;0!=a.a||Mb(a)}function Qb(){var a=ia();sa(v,function(b){Rb(b,a)});ta()||Pb()};function Sb(a,b,c,d){Q.call(this);if(!l(a)||!l(b))throw Error("Start and end parameters must be arrays");if(a.length!=b.length)throw Error("Start and end points must be the same length");this.i=a;this.T=b;this.P=c;this.L=d;this.f=[];this.a=0}q(Sb,Q);function Rb(a,b){a.a=(b-a.g)/(a.R-a.g);1<=a.a&&(a.a=1);var c=a.a;"function"==ba(a.L)&&(c=a.L(c));a.f=Array(a.i.length);for(var d=0;d<a.i.length;d++)a.f[d]=(a.T[d]-a.i[d])*c+a.i[d];1==a.a?(a.b=Jb,Ob(a),a.c("finish"),a.G()):1==a.b&&a.u()}
Sb.prototype.u=function(){this.c("animate")};Sb.prototype.c=function(a){Hb(this,new Tb(a,this))};function Tb(a,b){C.call(this,a);this.x=b.f[0];this.y=b.f[1];this.state=b.b}q(Tb,C);function R(a,b,c,d,e){Sb.call(this,b,c,d,e);this.H=a}q(R,Sb);R.prototype.j=aa;R.prototype.u=function(){this.j();R.v.u.call(this)};R.prototype.G=function(){this.j();R.v.G.call(this)};R.prototype.F=function(){this.j();R.v.F.call(this)};function Ub(a,b,c,d,e){if(2!=b.length||2!=c.length)throw Error("Start and end points must be 2D");R.apply(this,arguments)}q(Ub,R);Ub.prototype.j=function(){this.H.scrollLeft=Math.round(this.f[0]);this.H.scrollTop=Math.round(this.f[1])};function Vb(a){return 1-Math.pow(1-a,3)};function Wb(a,b,c){E(a,"click",function(a){a.preventDefault();b.call(c,a)})}var Xb,Yb=window.document.documentElement,$b;Yb.scrollTop=1;1===Yb.scrollTop?(Yb.scrollTop=0,$b=Yb):$b=document.body;Xb=$b;
function ac(a,b){var c={speed:300,offset:0};va(c,b||{});var d=F(a,"scrollTo");var e=O(d),f=yb(e),d=new M(0,0),g;g=f?yb(f):document;g=!w||9<=Number(Fa)||"CSS1Compat"==(g?new zb(yb(g)):ja||(ja=new zb)).a.compatMode?g.documentElement:g.body;e!=g&&(e=Cb(e),f=xb((f?new zb(yb(f)):ja||(ja=new zb)).a),d.x=e.left+f.x,d.y=e.top+f.y);d=d.y;f=xb(document).y;d-=c.offset;a:{c=new Ub(Xb,[0,f],[0,d],c.speed,Vb);if(c.b==Jb)c.a=0,c.f=c.i;else if(1==c.b)break a;Ob(c);d=ia();c.g=d;-1==c.b&&(c.g-=c.P*c.a);c.R=c.g+c.P;
c.a||c.F();c.c("play");-1==c.b&&c.c("resume");c.b=1;f=n(c);f in v||(v[f]=c);Pb();Rb(c,d)}};function bc(a){this.g=n(this);this.a=a;a=this.b=F(this.a,"targetId");var b=document;this.f=m(a)?b.getElementById(a):a;a:{a=this.f;if(ub&&!(w&&z("9")&&!z("10")&&k.SVGElement&&a instanceof k.SVGElement)&&(b=a.parentElement)){a=b;break a}b=a.parentNode;a=da(b)&&1==b.nodeType?b:null}this.J=a;this.c=O(cc);this.i=F(this.a,"youtubeId");this.C=null;dc(this);ec.set(this.g,this);B.call(this)}q(bc,B);var ec=new S;
function fc(a,b){var c=document.createElement("script");c.src="https://www.youtube.com/iframe_api";var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d);window.onYouTubeIframeAPIReady=p(function(){this.C=new YT.Player(this.b,{playerVars:{controls:2,showinfo:0},height:"100%",width:"100%",videoId:this.i,events:{onReady:b}})},a)}
function dc(a){var b=p(function(){qb(this.J,gc);this.C.playVideo()},a);Wb(a.a,function(a){a.preventDefault();this.C?b():fc(this,b)},a);Wb(a.c,function(a){a.preventDefault();rb(this.J,gc);this.C.stopVideo()},a)}function hc(){var a=J(ic);r(a,function(a){new bc(a)})}var ic="js-video-trigger",cc="js-video-close",gc="active";var jc={s:function(){var a=O("hero__fab"),b=O("site-header"),c=Db(b).height;Wb(a,function(){ac(a,{offset:c})});gb()||navigator.userAgent.match(/BlackBerry/i)||hb()||navigator.userAgent.match(/Opera Mini/i)||navigator.userAgent.match(/IEMobile/i)||hc()}};var kc={s:function(){}};function lc(a){P.call(this);this.a=a||window;E(this.a,"resize",this.c,!1,this);this.b=wb(this.a||window)}q(lc,P);lc.prototype.c=function(){var a=wb(this.a||window),b=this.b;a==b||a&&b&&a.width==b.width&&a.height==b.height||(this.b=a,Hb(this,"resize"))};var mc=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=window.document.documentElement;a.scrollTop=1;1===a.scrollTop?a.scrollTop=0:a=document.body;return a});function T(a,b,c){B.call(this);this.i=null!=c?p(a,c):a;this.g=b;this.f=p(this.u,this);this.c=[]}q(T,B);T.prototype.b=!1;T.prototype.a=null;T.prototype.j=function(a){this.c=arguments;this.a?this.b=!0:nc(this)};T.prototype.u=function(){this.a=null;this.b&&(this.b=!1,nc(this))};function nc(a){a.a=Kb(a.f,a.g);a.i.apply(null,a.c)};function oc(a){P.call(this);this.b={N:0,K:0};va(this.b,a||{});this.a={};this.g=new T(function(){pc(this)},100,this);this.f=mc();qc(this);pc(this);rc(this);a=new lc;E(a,"resize",function(){qc(this)}.bind(this))}q(oc,P);function qc(a){var b=J("js-scroll-spy-target"),c,d;a.a={};r(b,function(a){c=F(a,"scrollSpyGroup");d=F(a,"scrollSpySection");this.a[c]=this.a[c]||[];this.a[c].push({id:d,offset:a.offsetTop})},a)}
function sc(a,b){var c=[],d;0>b&&(b=0);sa(a.a,function(a,f){var g=null;r(a,function(a,c){a.group=f;d=0===c?this.b.K:this.b.N;b>=a.offset-d&&(g=a)},this);c.push(g)},a);return c}function pc(a){var b=sc(a,a.f.scrollTop);r(b,function(a){tc(a.group,a.id)},a)}function tc(a,b){var c="js-scroll-spy-link",d=J(c);(c=document.querySelector("."+(c+('[data-scroll-spy-group="'+a+'"]')+('[data-scroll-spy-target="'+b+'"]'))))&&!kb(c,"is-active")&&(r(d,function(a){I(a,"is-active")}),G(c,"is-active"))}
function rc(a){a.c||(a.c=E(window,"scroll",function(){this.g.j()},!0,a))};var uc={s:function(){var a=O("page"),b=document.querySelector(".js-scroll-spy-target"),c=O("site-header"),c=Db(c).height,d=Gb(a).top+c+5;new oc({N:d,K:b.offsetTop});a=J("js-scroll-spy-link a");r(a,function(a){uc.X(a,d)})},X:function(a,b){--b;Wb(a,function(c){ac(a,{offset:b});c=c.target.getAttribute("href");var d=c.replace(/^#/,""),e=document.getElementById(d);e&&(e.removeAttribute("id"),window.location.hash=c,setTimeout(function(){e.setAttribute("id",d)},300))})}};var vc;function wc(a,b){l(b)&&(b=b.join(" "));if(""===b||void 0==b){var c;vc||(vc={atomic:!1,autocomplete:"none",dropeffect:"none",haspopup:!1,live:"off",multiline:!1,multiselectable:!1,orientation:"vertical",readonly:!1,relevant:"additions text",required:!1,sort:"none",busy:!1,disabled:!1,hidden:!1,invalid:"false"});c=vc;"expanded"in c?a.setAttribute("aria-expanded",c.expanded):a.removeAttribute("aria-expanded")}else a.setAttribute("aria-expanded",b)};function S(a,b){this.B={};this.h=[];this.a=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){var e;if(a instanceof S)for(xc(a),d=a.h.concat(),xc(a),e=[],c=0;c<a.h.length;c++)e.push(a.B[a.h[c]]);else{var c=[],f=0;for(d in a)c[f++]=d;d=c;c=[];f=0;for(e in a)c[f++]=a[e];e=c}for(c=0;c<d.length;c++)this.set(d[c],e[c])}}
function xc(a){if(a.a!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Object.prototype.hasOwnProperty.call(a.B,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.a!=a.h.length){for(var e={},c=b=0;b<a.h.length;)d=a.h[b],Object.prototype.hasOwnProperty.call(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}S.prototype.set=function(a,b){Object.prototype.hasOwnProperty.call(this.B,a)||(this.a++,this.h.push(a));this.B[a]=b};S.prototype.clone=function(){return new S(this)};function mb(a,b,c,d,e){var f=Array.prototype.slice.call(arguments),g,h;for(g=0;3>g;g++)h=f[g],null!=h&&!m(h)&&(f[g]=h.toString());f.splice(0,0,"_trackEvent");window.tracker.pushCommand(f)};var U={o:{V:function(a,b,c){function d(){a.style.height="";I(a,b);G(a,c)}var e=Db(a).height;Modernizr.csstransitions?(ab(a,Ja,d),a.style.height=e+"px",setTimeout(function(){a.style.height="0";return a.offsetHeight})):d()},W:function(a,b,c){function d(){a.style.height=""}var e;Modernizr.csstransitions&&(a.style.visibility="hidden",a.style.display="block",e=Db(a).height,a.style.height="0",a.style.visibility="",a.style.display="",setTimeout(function(){var c;G(a,b);ab(a,Ja,d);c=a.offsetHeight;a.style.height=
e+"px";return c}));G(a,b);I(a,c)}}};U.draw=U.o;U.o.collapse=U.o.V;U.o.expand=U.o.W;function V(a){this.i=n(this);this.c={click:null,D:null};this.b=a;this.f="true"===F(this.b,"toggleModal");a=F(this.b,yc);var b=document.getElementById(a);b||(a="[data-"+String(zc).replace(/([A-Z])/g,"-$1").toLowerCase()+'="'+a+'"]',b=document.querySelector(a));this.a=b;a=window.location.hash.replace(/^#/,"");var b=this.a.getAttribute("aria-expanded"),b="true"===(null==b||void 0==b?"":String(b)),c=Ac(this),d=F(this.a,Bc);b||c?this.expand(!1,!1):(!d||d&&a!==d)&&this.collapse(!1,!1);this.c.click=E(this.b,
"click",p(this.j,this));Cc.set(this.i,this);B.call(this)}q(V,B);var Cc=new S;V.prototype.j=function(a){var b=tb(this.a);a.preventDefault();b?this.collapse():this.expand()};V.prototype.g=function(a){a.target===this.b||Ab(this.b,a.target)||Ab(this.a,a.target)||this.collapse()};
V.prototype.collapse=function(a,b){var c=F(this.a,Dc);a=ca(a)?a:!0;b=ca(b)?a:!0;this.f&&(cb(this.c.D),this.c.D=null);I(this.b,K);G(this.b,W);a&&c?U[c].collapse(this.a,K,W):(I(this.a,K),G(this.a,W));c=tb(this.a);wc(this.a,c);b&&mb("toggle",Ec,F(this.b,yc))};
V.prototype.expand=function(a,b){var c=F(this.a,Dc);a=ca(a)?a:!0;b=ca(b)?a:!0;this.f&&(this.c.D=E(document.documentElement,"click",p(this.g,this)));I(this.b,W);G(this.b,K);a&&c?U[c].expand(this.a,K,W):(I(this.a,W),G(this.a,K));c=tb(this.a);wc(this.a,c);b&&mb("toggle",Fc,F(this.b,yc))};function Ac(a){a=F(a.a,Gc)||"";var b=wb(window).width;return oa(a.split(" "),function(a){return(a=Hc[String(a).toUpperCase()])&&b>a})}function Ic(){var a=J(Jc);r(a,function(a){new V(a)})}
var W="is-collapsed",K="is-expanded",Jc="js-toggle",Ec="closed",Fc="open",Dc="toggleAnimation",Bc="hashId",zc="toggleId",yc="toggleTarget",Gc="initiallyExpanded",Hc={PALM:480,TABLET:768,DESKTOP:1024};function Kc(a){nb();Ic();var b={card:kc,faq:uc,home:jc};"undefined"!==typeof a&&b[a]&&b[a].s()}var Lc=["wallet","init"],Z=k;Lc[0]in Z||!Z.execScript||Z.execScript("var "+Lc[0]);for(var Mc;Lc.length&&(Mc=Lc.shift());)Lc.length||void 0===Kc?Z[Mc]?Z=Z[Mc]:Z=Z[Mc]={}:Z[Mc]=Kc;})();

// --------------- REGEX --------------------
$.validator.addMethod("usernameRegex", function(value, element) {
	return this.optional(element) || /^[a-z\u00E0-\u00FC_.+-]+$/i.test(value);
});

$.validator.addMethod("mailRegex", function(value, element) {
	return this.optional(element) || /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(value);
});


// --------------- Formulaire JqueryValidator ---------
var form = $("#myform");
    form.validate({
		//prendre le name
		errorElement: 'span',
		errorClass: 'help-block',
		highlight: function(element, errorClass, validClass) {
			$(element).closest('.form-group').addClass("has-error");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).closest('.form-group').removeClass("has-error");
        },
        rules: {
            name: {
              required: true,
              usernameRegex: true,
              minlength: 2,
          },
          surname: {
              required: true,
              usernameRegex: true,
              minlength: 2,
          },
          pseudo: {
              required: true,
              minlength: 2,
          },
          password : {
              required: true,
              minlength: 4,
          },
          city:{
              required: true,
          },
          name: {
              required: true,
              usernameRegex: true,
              minlength: 3,
          },
          email: {
              required: true,
              mailRegex: true,
              minlength: 3,
          },
      },
      messages: {
        username: {
          required: "Username required",
      },
      name: {
          required: "name required",
      },
      password : {
          required: "Password required",
      },
      name: {
          required: "Name required",
      },
      email: {
          required: "Email required",
      },
    }
    });

    // --------------- Login JqueryValidator ---------
    var login = $("#myLogin");
    login.validate({
          //prendre le name
          errorElement: 'span',
          errorClass: 'help-block',
          highlight: function(element, errorClass, validClass) {
            $(element).closest('.form-group').addClass("has-error");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).closest('.form-group').removeClass("has-error");
        },
        rules: {
            name: {
              required: true,
              usernameRegex: true,
              minlength: 2,
          },
          password : {
              required: true,
              minlength: 4,
          },
          email: {
              required: true,
              mailRegex: true,
              minlength: 3,
          },
      },
      messages: {
        password : {
            required: "Password required",
        },
        email: {
            required: "Email required",
        },
     }
    });