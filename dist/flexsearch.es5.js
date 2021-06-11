/**!
 * FlexSearch.js v0.7.0 (ES5)
 * Copyright 2018-2021 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/flexsearch
 */
(function(self){'use strict';var t;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var v="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var w=ba(this);function x(a,b){if(b)a:{var c=w;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];if(!(f in c))break a;c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&v(c,a,{configurable:!0,writable:!0,value:b})}}
x("Symbol",function(a){function b(g){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(g||"")+"_"+f++,g)}function c(g,e){this.h=g;v(this,"description",{configurable:!0,writable:!0,value:e})}if(a)return a;c.prototype.toString=function(){return this.h};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",f=0;return b});
x("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=w[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&v(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ca(aa(this))}})}return a});function ca(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function da(a,b){a instanceof String&&(a+="");var c=0,d=!1,f={next:function(){if(!d&&c<a.length){var g=c++;return{value:b(g,a[g]),done:!1}}d=!0;return{done:!0,value:void 0}}};f[Symbol.iterator]=function(){return f};return f}x("Array.prototype.keys",function(a){return a?a:function(){return da(this,function(b){return b})}});function ea(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
x("Promise",function(a){function b(e){this.l=0;this.m=void 0;this.h=[];this.M=!1;var h=this.A();try{e(h.resolve,h.reject)}catch(k){h.reject(k)}}function c(){this.h=null}function d(e){return e instanceof b?e:new b(function(h){h(e)})}if(a)return a;c.prototype.l=function(e){if(null==this.h){this.h=[];var h=this;this.m(function(){h.D()})}this.h.push(e)};var f=w.setTimeout;c.prototype.m=function(e){f(e,0)};c.prototype.D=function(){for(;this.h&&this.h.length;){var e=this.h;this.h=[];for(var h=0;h<e.length;++h){var k=
e[h];e[h]=null;try{k()}catch(l){this.A(l)}}}this.h=null};c.prototype.A=function(e){this.m(function(){throw e;})};b.prototype.A=function(){function e(l){return function(p){k||(k=!0,l.call(h,p))}}var h=this,k=!1;return{resolve:e(this.S),reject:e(this.D)}};b.prototype.S=function(e){if(e===this)this.D(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.U(e);else{a:switch(typeof e){case "object":var h=null!=e;break a;case "function":h=!0;break a;default:h=!1}h?this.R(e):this.I(e)}};
b.prototype.R=function(e){var h=void 0;try{h=e.then}catch(k){this.D(k);return}"function"==typeof h?this.V(h,e):this.I(e)};b.prototype.D=function(e){this.N(2,e)};b.prototype.I=function(e){this.N(1,e)};b.prototype.N=function(e,h){if(0!=this.l)throw Error("Cannot settle("+e+", "+h+"): Promise already settled in state"+this.l);this.l=e;this.m=h;2===this.l&&this.T();this.O()};b.prototype.T=function(){var e=this;f(function(){if(e.P()){var h=w.console;"undefined"!==typeof h&&h.error(e.m)}},1)};b.prototype.P=
function(){if(this.M)return!1;var e=w.CustomEvent,h=w.Event,k=w.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof e?e=new e("unhandledrejection",{cancelable:!0}):"function"===typeof h?e=new h("unhandledrejection",{cancelable:!0}):(e=w.document.createEvent("CustomEvent"),e.initCustomEvent("unhandledrejection",!1,!0,e));e.promise=this;e.reason=this.m;return k(e)};b.prototype.O=function(){if(null!=this.h){for(var e=0;e<this.h.length;++e)g.l(this.h[e]);this.h=null}};var g=new c;b.prototype.U=
function(e){var h=this.A();e.J(h.resolve,h.reject)};b.prototype.V=function(e,h){var k=this.A();try{e.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(e,h){function k(m,q){return"function"==typeof m?function(r){try{l(m(r))}catch(u){p(u)}}:q}var l,p,n=new b(function(m,q){l=m;p=q});this.J(k(e,l),k(h,p));return n};b.prototype.catch=function(e){return this.then(void 0,e)};b.prototype.J=function(e,h){function k(){switch(l.l){case 1:e(l.m);break;case 2:h(l.m);break;default:throw Error("Unexpected state: "+
l.l);}}var l=this;null==this.h?g.l(k):this.h.push(k);this.M=!0};b.resolve=d;b.reject=function(e){return new b(function(h,k){k(e)})};b.race=function(e){return new b(function(h,k){for(var l=ea(e),p=l.next();!p.done;p=l.next())d(p.value).J(h,k)})};b.all=function(e){var h=ea(e),k=h.next();return k.done?d([]):new b(function(l,p){function n(r){return function(u){m[r]=u;q--;0==q&&l(m)}}var m=[],q=0;do m.push(void 0),q++,d(k.value).J(n(m.length-1),p),k=h.next();while(!k.done)})};return b});
var fa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&(a[f]=d[f])}return a};x("Object.assign",function(a){return a||fa});function C(a){return"undefined"!==typeof a?a:!0}function ha(a){for(var b=Array(a),c=0;c<a;c++)b[c]=D();return b}function D(){return Object.create(null)}function ia(a,b){return b.length-a.length}function E(a){return"string"===typeof a}function F(a){return"object"===typeof a}function H(a){return"function"===typeof a};var ja=/[\u0300-\u036f]/g;function ka(a){a.normalize&&(a=a.normalize("NFD").replace(ja,""));return a}function la(a,b){for(var c=Object.keys(a),d=c.length,f=[],g="",e=0,h=0,k,l;h<d;h++)k=c[h],(l=a[k])?(f[e++]=I(b?"(?!\\b)"+k+"(\\b|_)":k),f[e++]=l):g+=(g?"|":"")+k;g&&(f[e++]=I(b?"(?!\\b)("+g+")(\\b|_)":"("+g+")"),f[e]="");return f}function J(a,b){for(var c=0,d=b.length;c<d&&(a=a.replace(b[c],b[c+1]),a);c+=2);return a}function I(a){return new RegExp(a,"g")}
function ma(a){for(var b="",c="",d=0,f=a.length,g=void 0;d<f;d++)(g=a[d])!==c&&(b+=c=g);return b};var oa={encode:na,G:!1,H:""},pa=/[\W_]+/;function na(a){return qa(this,ka(a).toLowerCase(),!1,pa)};var ra={},L={};function sa(a){M(a,"add");M(a,"append");M(a,"search");M(a,"update");M(a,"remove")}function M(a,b){a[b+"Async"]=function(){var c=this,d=arguments,f=d[d.length-1];if(H(f)){var g=f;delete d[d.length-1]}f=new Promise(function(e){setTimeout(function(){c.async=!0;var h=c[b].apply(c,d);c.async=!1;e(h)})});return g?(f.then(g),this):f}};function ta(a,b,c,d){var f=a.length,g=[],e,h=0;d&&(d=[]);for(var k=f-1;0<=k;k--){for(var l=a[k],p=l.length,n=D(),m=!B,q=0;q<p;q++){var r=l[q],u=r.length;if(u)for(var A=0,y=void 0,z;A<u;A++)if(z=r[A],B){if(B[z]){if(!k)if(c)c--;else if(g[h++]=z,h===b)return g;if(k||d)n[z]=1;m=!0}if(d&&(e[z]=(y=e[z])?++y:y=1,y<f)){var K=d[y-2]||(d[y-2]=[]);K[K.length]=z}}else n[z]=1}if(d)B||(e=n);else if(!m)return[];var B=n}if(d)for(a=d.length-1;0<=a;a--)for(f=d[a],e=f.length,k=0;k<e;k++)if(l=f[k],!B[l]){if(c)c--;else if(g[h++]=
l,h===b)return g;B[l]=1}return g}function ua(a,b){for(var c=D(),d=D(),f=[],g=0;g<a.length;g++)c[a[g]]=1;for(a=0;a<b.length;a++){g=b[a];for(var e=0,h;e<g.length;e++)h=g[e],c[h]&&!d[h]&&(d[h]=1,f[f.length]=h)}return f};function N(a){this.l=!0!==a&&a;this.cache=D();this.h=[]}function va(a,b,c){F(a)&&(a=a.query);var d=this.cache.get(a);d||(d=this.search(a,b,c),this.cache.set(a,d));return d}N.prototype.set=function(a,b){if(!this.cache[a]){var c=this.h.length;c===this.l?delete this.cache[this.h[c-1]]:c++;for(--c;0<c;c--)this.h[c]=this.h[c-1];this.h[0]=a}this.cache[a]=b};N.prototype.get=function(a){var b=this.cache[a];if(this.l&&b&&(a=this.h.indexOf(a))){var c=this.h[a-1];this.h[a-1]=this.h[a];this.h[a]=c}return b};var wa={memory:{charset:"latin:extra",F:3,C:4,o:!1},performance:{F:3,C:3,B:!1,context:{depth:2,F:1}},match:{charset:"latin:extra",H:"reverse"},score:{charset:"latin:advanced",F:20,C:3,context:{depth:3,F:9}},"default":{}};function xa(a,b,c,d,f,g){setTimeout(function(){var e=a(c,JSON.stringify(g));e&&e.then?e.then(function(){b.export(a,b,c,d,f+1)}):b.export(a,b,c,d,f+1)})};function O(a,b){if(!(this instanceof O))return new O(a);var c;if(a){E(a)?a=wa[a]:(c=a.preset)&&(a=Object.assign({},c[c],a));c=a.charset;var d=a.lang;E(c)&&(-1===c.indexOf(":")&&(c+=":default"),c=L[c]);E(d)&&(d=ra[d])}else a={};var f,g,e=a.context||{};this.encode=a.encode||c&&c.encode||na;this.register=b||D();this.F=f=a.resolution||9;this.H=b=c&&c.H||a.tokenize||"strict";this.depth="strict"===b&&e.depth;this.l=C(e.bidirectional);this.B=g=C(a.optimize);this.o=C(a.fastupdate);this.C=a.minlength||1;this.map=
g?ha(f):D();this.m=f=e.resolution||1;this.h=g?ha(f):D();this.G=c&&c.G||a.rtl;this.K=(b=a.matcher||d&&d.K)&&la(b,!1);this.L=(b=a.stemmer||d&&d.L)&&la(b,!0);if(c=b=a.filter||d&&d.filter){c=b;d=D();e=0;for(f=c.length;e<f;e++)d[c[e]]=1;c=d}this.filter=c;this.cache=(b=a.cache)&&new N(b)}
function qa(a,b,c,d){if(b&&(c&&(b=J(b,c)),a.K&&(b=J(b,a.K)),a.L&&1<b.length&&(b=J(b,a.L)),d||""===d)){b=b.split(d);if(a.filter){a=a.filter;c=b.length;d=[];for(var f=0,g=0;f<c;f++){var e=b[f];e&&!a[e]&&(d[g++]=e)}b=d}return b}return b}t=O.prototype;t.append=function(a,b){return this.add(a,b,!0)};
t.add=function(a,b,c,d){if(b&&(a||0===a)){if(!d&&!c&&this.register[a])return this.update(a,b);b=this.encode(b);if(d=b.length){for(var f=D(),g=D(),e=this.depth,h=this.F,k=0;k<d;k++){var l=b[this.G?d-1-k:k],p=l.length;if(l&&p>=this.C&&(e||!g[l])){var n=P(h,d,k),m="";switch(this.H){case "full":if(3<p){for(n=0;n<p;n++)for(var q=p;q>n;q--)if(q-n>=this.C){var r=P(h,d,k,p,n);m=l.substring(n,q);Q(this,g,m,r,a,c)}break}case "reverse":if(2<p){for(q=p-1;0<q;q--)m=l[q]+m,m.length>=this.C&&Q(this,g,m,P(h,d,k,
p,q),a,c);m=""}case "forward":if(1<p){for(q=0;q<p;q++)m+=l[q],m.length>=this.C&&Q(this,g,m,n,a,c);break}default:if(Q(this,g,l,n,a,c),e&&1<d&&k<d-1)for(p=D(),m=this.m,n=l,q=Math.min(e+1,d-k),r=p[n]=1;r<q;r++)if((l=b[this.G?d-1-k-r:k+r])&&l.length>=this.C&&!p[l]){p[l]=1;var u=this.l&&l>n;Q(this,f,u?n:l,P(m+(d/2>m?0:1),d,k,q-1,r-1),a,c,u?l:n)}}}}this.o||(this.register[a]=1)}}return this};function P(a,b,c,d,f){return c&&1<a?b+(d||0)<=a?c+(f||0):(a-1)/(b+(d||0))*(c+(f||0))+1|0:0}
function Q(a,b,c,d,f,g,e){var h=e?a.h:a.map;if(!b[c]||e&&!b[c][e])a.B&&(h=h[d]),e?(b=b[c]||(b[c]=D()),b[e]=1,h=h[e]||(h[e]=D())):b[c]=1,h=h[c]||(h[c]=[]),a.B||(h=h[d]||(h[d]=[])),g&&-1!==h.indexOf(f)||(h[h.length]=f,a.o&&(a=a.register[f]||(a.register[f]=[]),a[a.length]=h))}
t.search=function(a,b,c){F(a)?(c=a,a=c.query):F(b)&&(c=b);var d=[],f=0;if(c){b=c.limit;f=c.offset||0;var g=c.context;var e=c.suggest}if(a){a=this.encode(a);var h=a.length;if(1<h){c=D();for(var k=[],l=0,p=0,n;l<h;l++)if((n=a[l])&&n.length>=this.C&&!c[n])if(this.B||e||this.map[n])k[p++]=n,c[n]=1;else return d;a=k;h=a.length}}if(!h)return d;b||(b=100);g=this.depth&&1<h&&!1!==g;c=0;if(g){var m=a[0];c=1}else 1<h&&a.sort(ia);for(;c<h;c++){l=a[c];g?(k=ya(this,d,e,b,f,2===h,l,m),e&&!1===k&&d.length||(m=l)):
k=ya(this,d,e,b,f,1===h,l);if(k)return k;if(e&&c===h-1){k=d.length;if(!k){if(g){g=0;c=-1;continue}return d}if(1===k)return za(d[0],b,f)}}return ta(d,b,f,e)};
function ya(a,b,c,d,f,g,e,h){var k=[],l=h?a.h:a.map;a.B||(l=Aa(l,e,h,a.l));if(l){for(var p=0,n=Math.min(l.length,h?a.m:a.F),m=0,q=0,r,u;m<n;m++)if(r=l[m])if(a.B&&(r=Aa(r,e,h,a.l)),f&&r&&g&&(u=r.length,u<=f?(f-=u,r=null):(r=r.slice(f),f=0)),r&&(k[p++]=r,g&&(q+=r.length,q>=d)))break;if(p){if(g)return za(k,d,0);b[b.length]=k;return}}return!c&&k}function za(a,b,c){a=1===a.length?a[0]:[].concat.apply([],a);return c||a.length>b?a.slice(c,c+b):a}
function Aa(a,b,c,d){c?(d=d&&b>c,a=(a=a[d?b:c])&&a[d?c:b]):a=a[b];return a}t.contain=function(a){return!!this.register[a]};t.update=function(a,b){return this.remove(a).add(a,b)};
t.remove=function(a,b){var c=this.register[a];if(c){if(this.o)for(var d=0,f;d<c.length;d++)f=c[d],f.splice(f.indexOf(a),1);else R(this.map,a,this.F,this.B),this.depth&&R(this.h,a,this.m,this.B);b||delete this.register[a];if(this.cache)for(b=this.cache,c=0;c<b.h.length;c++)f=b.h[c],d=b.cache[f],-1!==d.indexOf(a)&&(b.h.splice(c--,1),delete b.cache[f])}return this};
function R(a,b,c,d,f){var g=0;if(a.constructor===Array)if(f)b=a.indexOf(b),-1!==b?1<a.length&&(a.splice(b,1),g++):g++;else{f=Math.min(a.length,c);for(var e=0,h;e<f;e++)if(h=a[e])g=R(h,b,c,d,f),d||g||delete a[e]}else for(e in a)(g=R(a[e],b,c,d,f))||delete a[e];return g}t.searchCache=va;
t.export=function(a,b,c,d,f){switch(f||(f=0)){case 0:var g="reg";if(this.o){var e=D();for(var h in this.register)e[h]=1}else e=this.register;break;case 1:g="cfg";e={doc:0,opt:this.B?1:0};break;case 2:g="map";e=this.map;break;case 3:g="ctx";e=this.h;break;default:return}xa(a,b||this,c?c+"."+g:g,d,f,e);return!0};t.import=function(a,b){if(b)switch(E(b)&&(b=JSON.parse(b)),a){case "cfg":this.B=!!b.opt;break;case "reg":this.o=!1;this.register=b;break;case "map":this.map=b;break;case "ctx":this.h=b}};sa(O.prototype);function Ba(a){a=a.data;var b=self._index,c=a.args,d=a.task;switch(d){case "init":d=a.options||{};a=a.factory;b=d.encode;d.cache=!1;b&&0===b.indexOf("function")&&(d.encode=Function("return "+b)());a?(Function("return "+a)()(self),self._index=new self.FlexSearch.Index(d),delete self.FlexSearch):self._index=new O(d);break;default:a=a.id,b=b[d].apply(b,c),postMessage("search"===d?{id:a,msg:b}:{id:a})}};var Ca=0;function S(a){if(!(this instanceof S))return new S(a);var b;a?H(b=a.encode)&&(a.encode=b.toString()):a={};(b=(self||window)._factory)&&(b=b.toString());var c=self.exports,d=this;this.s=Da(b,c,a.worker);this.h=D();if(this.s){if(c)this.s.on("message",function(f){d.h[f.id](f.msg);delete d.h[f.id]});else this.s.onmessage=function(f){f=f.data;d.h[f.id](f.msg);delete d.h[f.id]};this.s.postMessage({task:"init",factory:b,options:a})}}T("add");T("append");T("search");T("update");T("remove");
function T(a){S.prototype[a]=S.prototype[a+"Async"]=function(){var b=this,c=[].slice.call(arguments),d=c[c.length-1];if(H(d)){var f=d;c.splice(c.length-1,1)}d=new Promise(function(g){setTimeout(function(){b.h[++Ca]=g;b.s.postMessage({task:a,id:Ca,args:c})})});return f?(d.then(f),this):d}}
function Da(a,b,c){try{var d=b?eval('new (require("worker_threads")["Worker"])("../dist/node/node.js")'):a?new Worker(URL.createObjectURL(new Blob(["onmessage="+Ba.toString()],{type:"text/javascript"}))):new Worker(E(c)?c:"worker/worker.js",{type:"module"})}catch(f){}return d};function U(a){if(!(this instanceof U))return new U(a);var b=a.document||a.doc||a,c;this.I=[];this.h=[];this.m=[];this.register=D();this.key=(c=b.key||b.id)&&V(c,this.m)||"id";this.o=C(a.fastupdate);this.A=(c=b.store)&&!0!==c&&[];this.store=c&&D();this.D=(c=b.tag)&&V(c,this.m);this.l=c&&D();this.cache=(c=a.cache)&&new N(c);a.cache=!1;this.s=a.worker;this.async=!1;c=D();var d=b.index||b.field||b;E(d)&&(d=[d]);for(var f=0,g,e=void 0;f<d.length;f++)g=d[f],E(g)||(e=g,g=g.field),e=F(e)?Object.assign({},
a,e):a,this.s&&(c[g]=new S(e),c[g].s||(this.s=!1)),this.s||(c[g]=new O(e,this.register)),this.I[f]=V(g,this.m),this.h[f]=g;if(this.A)for(a=b.store,E(a)&&(a=[a]),b=0;b<a.length;b++)this.A[b]=V(a[b],this.m);this.index=c}function V(a,b){for(var c=a.split(":"),d=0,f=0;f<c.length;f++)a=c[f],0<=a.indexOf("[]")&&(a=a.substring(0,a.length-2))&&(b[d]=!0),a&&(c[d++]=a);d<c.length&&(c.length=d);return 1<d?c:c[0]}function W(a,b){if(E(b))a=a[b];else for(var c=0;a&&c<b.length;c++)a=a[b[c]];return a}
function X(a,b,c,d,f){a=a[f];if(d===c.length-1)b[f]=a;else if(a)if(a.constructor===Array)for(b=b[f]=Array(a.length),f=0;f<a.length;f++)X(a,b,c,d,f);else b=b[f]||(b[f]=D()),f=c[++d],X(a,b,c,d,f)}function Y(a,b,c,d,f,g,e,h){a=a[e];if(d===b.length-1){if(a.constructor===Array){if(c[d]){for(b=0;b<a.length;b++)f.add(g,a[b],!0,!0);return}a=a.join(" ")}f.add(g,a,h,!0)}else if(a)if(a.constructor===Array)for(e=0;e<a.length;e++)Y(a,b,c,d,f,g,e,h);else e=b[++d],Y(a,b,c,d,f,g,e,h)}t=U.prototype;
t.add=function(a,b,c){F(a)&&(b=a,a=W(b,this.key));if(b&&(a||0===a)){if(!c&&this.register[a])return this.update(a,b);for(var d=0,f,g;d<this.h.length;d++)g=this.h[d],f=this.I[d],E(f)&&(f=[f]),Y(b,f,this.m,0,this.index[g],a,f[0],c);if(this.D){d=W(b,this.D);f=D();E(d)&&(d=[d]);g=0;for(var e;g<d.length;g++)if(e=d[g],!f[e]&&(f[e]=1,e=this.l[e]||(this.l[e]=[]),!c||-1===e.indexOf(a)))if(e[e.length]=a,this.o){var h=this.register[a]||(this.register[a]=[]);h[h.length]=e}}if(this.store&&(!c||!this.store[a])){if(this.A){var k=
D();for(c=0;c<this.A.length;c++)d=this.A[c],E(d)?k[d]=b[d]:X(b,k,d,0,d[0])}this.store[a]=k||b}}return this};t.append=function(a,b){return this.add(a,b,!0)};t.update=function(a,b){return this.remove(a).add(a,b)};
t.remove=function(a){F(a)&&(a=W(a,this.key));if(this.register[a]){for(var b=0;b<this.h.length&&(this.index[this.h[b]].remove(a,!this.s),!this.o);b++);if(this.D&&!this.o)for(var c in this.l){b=this.l[c];var d=b.indexOf(a);-1!==d&&(1<b.length?b.splice(d,1):delete this.l[c])}this.store&&delete this.store[a];delete this.register[a]}return this};
t.search=function(a,b,c,d){F(a)?(c=a,a=c.query):F(b)&&(c=b,b=0);var f=[],g=[],e,h=0;if(c)if(c.constructor===Array){var k=c;c=null}else{k=(e=c.pluck)||c.index||c.field;var l=c.tag;var p=this.store&&c.enrich;var n="and"===c.bool;b=c.limit||100;var m=c.offset||0;if(l&&(E(l)&&(l=[l]),!a)){g=0;for(e=void 0;g<l.length;g++)if(e=Ea.call(this,l[g],b,m,p))f[f.length]=e,h++;return h?f:[]}E(k)&&(k=[k])}k||(k=this.h);n=n&&(1<k.length||l&&1<l.length);for(var q=!d&&(this.s||this.async)&&[],r=0,u=void 0,A=void 0,
y=void 0;r<k.length;r++)if(y=void 0,A=k[r],E(A)||(y=A,A=A.field),q)q[r]=this.index[A].searchAsync(a,b,y||c);else{d?u=d[r]:u=this.index[A].search(a,b,y||c);y=u&&u.length;if(l&&y){var z=[],K=0;n&&(z[0]=[u]);var B=0,G=void 0;for(G=void 0;B<l.length;B++)if(G=l[B],y=(G=this.l[G])&&G.length)K++,z[z.length]=n?[G]:G;K&&(u=n?ta(z,b||100,m||0):ua(u,z),y=u.length)}if(y)g[h]=A,f[h++]=u;else if(n)return[]}if(q){var Ma=this;return new Promise(function(Na){Promise.all(q).then(function(Oa){Na(Ma.search(a,b,c,Oa))})})}if(!h)return[];
if(e&&(!p||!this.store))return f[0];l=0;for(m=void 0;l<g.length;l++){m=f[l];m.length&&p&&(m=Fa.call(this,m));if(e)return m;f[l]={field:g[l],result:m}}return f};function Ea(a,b,c,d){var f=this.l[a],g=f&&f.length-c;if(g&&0<g){if(g>b||c)f=f.slice(c,c+b);d&&(f=Fa.call(this,f));return{tag:a,result:f}}}function Fa(a){for(var b=Array(a.length),c=0,d;c<a.length;c++)d=a[c],b[c]={id:d,doc:this.store[d]};return b}t.contain=function(a){return!!this.register[a]};t.get=function(a){return this.store[a]};
t.set=function(a,b){this.store[a]=b;return this};t.searchCache=va;t.export=function(a,b,c,d,f){f||(f=0);d||(d=0);if(d<this.h.length){var g=this.h[d],e=this.index[g];b=this;setTimeout(function(){e.export(a,b,f?g.replace(":","-"):"",d,f++)||(d++,f=1,b.export(a,b,g,d,f))})}else{switch(f){case 1:c="tag";var h=this.l;break;case 2:c="store";h=this.store;break;default:return}xa(a,this,c,d,f,h)}};
t.import=function(a,b){if(b)switch(E(b)&&(b=JSON.parse(b)),a){case "tag":this.l=b;break;case "reg":this.o=!1;this.register=b;a=0;for(var c;a<this.h.length;a++)c=this.index[this.h[a]],c.register=b,c.o=!1;break;case "store":this.store=b;break;default:a=a.split("."),c=a[0],a=a[1],c&&a&&this.index[c].import(a,b)}};sa(U.prototype);var Ha={encode:Ga,G:!1,H:""},Ia=/[\W_]+/,Ja=[I("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),"a",I("[\u00e8\u00e9\u00ea\u00eb]"),"e",I("[\u00ec\u00ed\u00ee\u00ef]"),"i",I("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),"o",I("[\u00f9\u00fa\u00fb\u00fc\u0171]"),"u",I("[\u00fd\u0177\u00ff]"),"y",I("\u00f1"),"n",I("[\u00e7c]"),"k",I("\u00df"),"s",I(" & ")," and "];function Ga(a){return qa(this,ka(a).toLowerCase(),!a.normalize&&Ja,Ia)};var La={encode:Ka,G:!1,H:"strict"},Pa=/[^a-z0-9]+/,Qa={b:"p",v:"f",w:"f",z:"s",x:"s","\u00df":"s",d:"t",n:"m",c:"k",g:"k",j:"k",q:"k",i:"e",y:"e",u:"o"};function Ka(a){a=Ga.call(this,a).join(" ");var b=[];if(a)for(var c=a.split(Pa),d=c.length,f=0,g,e=0;f<d;f++)if((a=c[f])&&(!this.filter||!this.filter[a])){g=a[0];for(var h=Qa[g]||g,k=h,l=1;l<a.length;l++)g=a[l],(g=Qa[g]||g)&&g!==k&&(h+=g,k=g);b[e++]=h}return b};var Sa={encode:Ra,G:!1,H:""},Ta=[I("ae"),"a",I("oe"),"o",I("sh"),"s",I("th"),"t",I("ph"),"f",I("pf"),"f",I("(?![aeo])h(?![aeo])"),"",I("(?!^[aeo])h(?!^[aeo])"),""];function Ra(a,b){a&&(a=Ka.call(this,a).join(" "),2<a.length&&(a=J(a,Ta)),b||(1<a.length&&(a=ma(a)),a&&(a=a.split(" "))));return a};var Va={encode:Ua,G:!1,H:""},Wa=I("(?!\\b)[aeo]");function Ua(a){a&&(a=Ra.call(this,a,!0),1<a.length&&(a=a.replace(Wa,"")),1<a.length&&(a=ma(a)),a&&(a=a.split(" ")));return a};L["latin:default"]=oa;L["latin:simple"]=Ha;L["latin:balance"]=La;L["latin:advanced"]=Sa;L["latin:extra"]=Va;var Z=self,Xa,Ya={Index:O,Document:U,Worker:S,registerCharset:function(a,b){L[a]=b},registerLanguage:function(a,b){ra[a]=b}};(Xa=Z.define)&&Xa.amd?Xa([],function(){return Ya}):Z.exports?Z.exports=Ya:Z.FlexSearch=Ya;}(this));
