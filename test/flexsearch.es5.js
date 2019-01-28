/*
 FlexSearch v0.3.3
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/flexsearch
*/
'use strict';function H(g){var h=0;return function(){return h<g.length?{done:!1,value:g[h++]}:{done:!0}}}function I(g){var h="undefined"!=typeof Symbol&&Symbol.iterator&&g[Symbol.iterator];return h?h.call(g):{next:H(g)}}var Q="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,R="function"==typeof Object.defineProperties?Object.defineProperty:function(g,h,e){g!=Array.prototype&&g!=Object.prototype&&(g[h]=e.value)};
function S(g,h){if(h){var e=Q;g=g.split(".");for(var k=0;k<g.length-1;k++){var a=g[k];a in e||(e[a]={});e=e[a]}g=g[g.length-1];k=e[g];h=h(k);h!=k&&null!=h&&R(e,g,{configurable:!0,writable:!0,value:h})}}
S("Promise",function(g){function h(d){this.b=0;this.g=void 0;this.a=[];var a=this.c();try{d(a.resolve,a.reject)}catch(t){a.reject(t)}}function e(){this.a=null}function k(d){return d instanceof h?d:new h(function(a){a(d)})}if(g)return g;e.prototype.b=function(d){if(null==this.a){this.a=[];var a=this;this.c(function(){a.g()})}this.a.push(d)};var a=Q.setTimeout;e.prototype.c=function(d){a(d,0)};e.prototype.g=function(){for(;this.a&&this.a.length;){var d=this.a;this.a=[];for(var a=0;a<d.length;++a){var h=
d[a];d[a]=null;try{h()}catch(z){this.f(z)}}}this.a=null};e.prototype.f=function(d){this.c(function(){throw d;})};h.prototype.c=function(){function d(d){return function(e){h||(h=!0,d.call(a,e))}}var a=this,h=!1;return{resolve:d(this.s),reject:d(this.f)}};h.prototype.s=function(d){if(d===this)this.f(new TypeError("A Promise cannot resolve to itself"));else if(d instanceof h)this.u(d);else{a:switch(typeof d){case "object":var a=null!=d;break a;case "function":a=!0;break a;default:a=!1}a?this.o(d):this.j(d)}};
h.prototype.o=function(a){var d=void 0;try{d=a.then}catch(t){this.f(t);return}"function"==typeof d?this.v(d,a):this.j(a)};h.prototype.f=function(a){this.l(2,a)};h.prototype.j=function(a){this.l(1,a)};h.prototype.l=function(a,h){if(0!=this.b)throw Error("Cannot settle("+a+", "+h+"): Promise already settled in state"+this.b);this.b=a;this.g=h;this.m()};h.prototype.m=function(){if(null!=this.a){for(var a=0;a<this.a.length;++a)l.b(this.a[a]);this.a=null}};var l=new e;h.prototype.u=function(a){var d=this.c();
a.A(d.resolve,d.reject)};h.prototype.v=function(a,h){var d=this.c();try{a.call(h,d.resolve,d.reject)}catch(z){d.reject(z)}};h.prototype.then=function(a,e){function d(a,d){return"function"==typeof a?function(d){try{g(a(d))}catch(C){k(C)}}:d}var g,k,m=new h(function(a,d){g=a;k=d});this.A(d(a,g),d(e,k));return m};h.prototype.catch=function(a){return this.then(void 0,a)};h.prototype.A=function(a,h){function d(){switch(e.b){case 1:a(e.g);break;case 2:h(e.g);break;default:throw Error("Unexpected state: "+
e.b);}}var e=this;null==this.a?l.b(d):this.a.push(d)};h.resolve=k;h.reject=function(a){return new h(function(d,h){h(a)})};h.race=function(a){return new h(function(d,h){for(var e=I(a),g=e.next();!g.done;g=e.next())k(g.value).A(d,h)})};h.all=function(a){var d=I(a),e=d.next();return e.done?k([]):new h(function(a,h){function g(d){return function(h){m[d]=h;l--;0==l&&a(m)}}var m=[],l=0;do m.push(void 0),l++,k(e.value).A(g(m.length-1),h),e=d.next();while(!e.done)})};return h});
(function(g,h,e){var k;(k=e.define)&&k.amd?k([],function(){return h}):(k=e.modules)?k[g.toLowerCase()]=h:"object"===typeof exports?module.exports=h:e[g]=h})("FlexSearch",function X(g){function e(b){F(b)&&(b=J[b]);b||(b=x);this.id=b.id||Y++;this.init(b);k(this,"index",function(){return this.a});k(this,"length",function(){return Object.keys(this.a).length})}function k(b,c,a){Object.defineProperty(b,c,{get:a})}function a(b){return new RegExp(b,"g")}function l(b,c){for(var a=0;a<c.length;a+=2)b=b.replace(c[a],
c[a+1]);return b}function d(b,c,a,f,d,K,e){if(c[a])return c[a];d=d?(9-(e||6))*K+(e||6)*d:K;c[a]=d;d>=e&&(b=b[d+.5>>0],b=b[a]||(b[a]=[]),b[b.length]=f);return d}function m(b,c){if(b)for(var a=Object.keys(b),f=0,d=a.length;f<d;f++){var e=a[f],g=b[e];if(g)for(var r=0,k=g.length;r<k;r++)if(g[r]===c){1===k?delete b[e]:g.splice(r,1);break}else"object"===typeof g[r]&&m(g[r],c)}}function t(b){for(var c="",a="",f="",d=0;d<b.length;d++){var e=b[d];if(e!==a)if(d&&"h"===e){if(f="a"===f||"e"===f||"i"===f||"o"===
f||"u"===f||"y"===f,("a"===a||"e"===a||"i"===a||"o"===a||"u"===a||"y"===a)&&f||" "===a)c+=e}else c+=e;f=d===b.length-1?"":b[d+1];a=e}return c}function z(b,c){var a=w();if(b)for(var f=0;f<b.length;f++){var d=c?c(b[f]):b[f];a[d]=String.fromCharCode(65E3-b.length+f)}return a}function T(b,c){var d=[];if(b)for(var f in b)if(b.hasOwnProperty(f)){var e=c?c(f):f;d.push(a("(?=.{"+(e.length+3)+",})"+e+"$"),c?c(b[f]):b[f])}return d}function W(b,c){b=b.length-c.length;return 0>b?1:b?-1:0}function U(b,c){b=b.length-
c.length;return 0>b?-1:b?1:0}function V(b,c,a){var f=[],d=[],e=b.length;if(1<e){b.sort(U);for(var g=w(),r=b[0],u=r.length,k=0;k<u;)g[r[k++]]=1;for(var n,p=0,q=0;++q<e;){var v=!1,m=q===e-1;d=[];r=b[q];u=r.length;for(k=0;k<u;)if(n=r[k++],g[n]){var l=g[n];if(l===q){if(m){if(f[p++]=n,c&&p===c)return f}else g[n]=q+1;v=!0}else a&&(l=d[l]||(d[l]=[]),l[l.length]=n)}if(!v&&!a)break}if(a&&(p=f.length,(q=d.length)&&(!c||p<c)))for(;q--;)if(n=d[q])for(b=0,a=n.length;b<a;b++)if(f[p++]=n[b],c&&p===c)return f}else e&&
(f=b[0],c&&f.length>c&&(f=f.slice(0,c)));return f}function F(b){return"string"===typeof b}function C(b){return"function"===typeof b}function y(b){return"undefined"===typeof b}function D(b){b.F||(b.F=L(function(){b.F=0;var c=b.async;c&&(b.async=!1);if(b.b.length){for(var a=Date.now(),f;(f=b.b.shift())||0===f;){var d=b.c[f];switch(d[0]){case B.add:b.add(d[1],d[2]);break;case B.remove:b.remove(d[1])}delete b.c[f];if(100<Date.now()-a)break}b.b.length&&D(b)}c&&(b.async=c)},1,"search-async-"+b.id))}function M(b){for(var c=
Array(b),a=0;a<b;a++)c[a]=w();return c}function w(){return Object.create(null)}function Z(b,c,a,f){b=g("flexsearch","id"+b,function(){var b,c;self.onmessage=function(a){if(a=a.data)if(a.search){var f=c.search(a.content,a.threshold?{limit:a.limit,threshold:a.threshold}:a.limit);self.postMessage({id:b,content:a.content,limit:a.limit,result:f})}else a.add?c.add(a.id,a.content):a.update?c.update(a.id,a.content):a.remove?c.remove(a.id):a.clear?c.clear():a.register&&(b=a.id,a.options.cache=!1,a.options.async=
!0,a.options.worker=!1,c=(new Function(a.register.substring(a.register.indexOf("{")+1,a.register.lastIndexOf("}"))))(),c=new c(a.options))}},function(b){(b=b.data)&&b.result&&f(b.id,b.content,b.result,b.limit)},c);var d=X.toString();a.id=c;b.postMessage(c,{register:d,options:a,id:c});return b}var x={encode:"icase",h:"forward",w:!1,cache:!1,async:!1,i:!1,threshold:0,depth:0},J={memory:{encode:"extra",h:"strict",threshold:7},speed:{encode:"icase",h:"strict",threshold:7,depth:2},match:{encode:"extra",
h:"full"},score:{encode:"extra",h:"strict",threshold:5,depth:4},balance:{encode:"balance",h:"strict",threshold:6,depth:3},fastest:{encode:"icase",h:"strict",threshold:9,depth:1}},E=[],Y=0,B={add:0,update:1,remove:2},N=a("\\W+"),O={},P={};(function(){for(var b=Object.getOwnPropertyNames({}.__proto__),c=w(),a=0;a<b.length;a++)c[b[a]]=1;return c})();e.create=function(b){return new e(b)};e.registerMatcher=function(b){for(var c in b)b.hasOwnProperty(c)&&E.push(a(c),b[c]);return this};e.registerEncoder=
function(b,c){A[b]=c.bind(A);return this};e.registerLanguage=function(b,c){O[b]=c.filter;P[b]=c.stemmer;return this};e.encode=function(b,c){return A[b](c)};e.prototype.init=function(b){this.D=[];b||(b=x);var c=b.profile,a=c?J[c]:{};if(c=b.worker)if(Worker){var f=this,d=parseInt(c,10)||4;f.m=-1;f.o=0;f.f=[];f.C=null;f.j=Array(d);for(var e=0;e<d;e++)f.j[e]=Z(f.id,e,b,function(b,c,a,d){if(f.o!==f.i)return f.f=f.f.concat(a),f.o++,d&&f.f.length>=d&&(f.o=f.i),f.C&&f.o===f.i&&(f.cache&&f.g.set(c,f.f),f.C(f.f),
f.f=[]),f})}else b.worker=!1,this.j=null;this.h=b.tokenize||a.h||this.h||x.h;this.async=y(c=b.async)?this.async||x.async:c;this.i=y(c=b.worker)?this.i||x.i:c;this.threshold=y(c=b.threshold)?a.threshold||this.threshold||x.threshold:c;this.depth=y(c=b.depth)?a.depth||this.depth||x.depth:c;this.w=y(c=b.suggest)?this.w||x.w:c;this.s=(c=y(c=b.encode)?a.encode:c)&&A[c]&&A[c].bind(A)||(C(c)?c:this.s||!1);(c=b.matcher)&&this.addMatcher(c);if(c=b.filter)this.filter=z(O[c]||c,this.s);if(c=b.stemmer)this.stemmer=
T(P[c]||c,this.s);this.v=M(10);this.l=w();this.a=w();this.c=w();this.b=[];this.F=0;this.u=!0;this.g=(this.cache=c=y(c=b.cache)?this.cache||x.cache:c)?new aa(c):!1;return this};e.prototype.encode=function(b){b&&E.length&&(b=l(b,E));b&&this.D.length&&(b=l(b,this.D));b&&this.s&&(b=this.s(b));b&&this.stemmer&&(b=l(b,this.stemmer));return b};e.prototype.addMatcher=function(b){var c=this.D,d;for(d in b)b.hasOwnProperty(d)&&c.push(a(d),b[d]);return this};e.prototype.add=function(b,c,a){if(c&&F(c)&&(b||0===
b))if(this.a[b]&&!a)this.update(b,c);else{if(this.i)return++this.m>=this.j.length&&(this.m=0),this.j[this.m].postMessage(this.m,{add:!0,id:b,content:c}),this.a[b]=""+this.m,this;if(this.async)return this.c[b]||(this.b[this.b.length]=b),this.c[b]=[B.add,b,c],D(this),this;c=this.encode(c);if(!c.length)return this;a=this.h;c=C(a)?a(c):c.split(N);var f=w();f._ctx=w();for(var e=this.threshold,g=this.depth,k=this.v,r=c.length,u=0;u<r;u++){var l=c[u];if(l){var n=l.length,p=(r-u)/r,q="";switch(a){case "reverse":case "both":for(var v=
n-1;1<=v;v--)q=l[v]+q,d(k,f,q,b,(n-v)/n,p,e);q="";case "forward":for(v=0;v<n;v++)q+=l[v],d(k,f,q,b,1,p,e);break;case "full":for(v=0;v<n;v++)for(var m=(n-v)/n,t=n;t>v;t--)q=l.substring(v,t),d(k,f,q,b,m,p,e);break;default:if(n=d(k,f,l,b,1,p,e),g&&1<r&&n>=e)for(n=f._ctx[l]||(f._ctx[l]=w()),l=this.l[l]||(this.l[l]=M(10)),p=u-g,q=u+g+1,0>p&&(p=0),q>r&&(q=r);p<q;p++)p!==u&&d(l,n,c[p],b,0,10-(p<u?u-p:p-u),e)}}}this.a[b]=1;this.u=!1}return this};e.prototype.update=function(b,c){this.a[b]&&F(c)&&(this.remove(b),
this.add(b,c,!0));return this};e.prototype.remove=function(b){if(this.a[b]){if(this.i){var c=this.a[b];this.j[c].postMessage(c,{remove:!0,id:b});delete this.a[b];return this}if(this.async)return this.c[b]||(this.b[this.b.length]=b),this.c[b]=[B.remove,b],D(this),this;for(c=0;10>c;c++)m(this.v[c],b);this.depth&&m(this.l,b);delete this.a[b];this.u=!1}return this};e.prototype.search=function(b,c,a,d){var f=b,e=[];if("object"===typeof b){(a=b.callback||c)&&(f.callback=null);c=b.limit;var g=b.threshold;
b=b.query}g||(g=this.threshold||0);C(c)?(a=c,c=1E3):c||0===c||(c=1E3);if(this.i)for(this.C=a,this.o=0,this.f=[],e=0;e<this.i;e++)this.j[e].postMessage(e,{search:!0,limit:c,threshold:g,content:b});else if(a){var k=this;L(function(){a(k.search(f,c,null,!0));k=null},1,"search-"+this.id)}else{if(!d&&this.async&&"function"!==typeof importScripts){var l=this;return new Promise(function(b){b(l.search(f,c,null,!0));l=null})}if(!b||!F(b))return e;f=b;if(this.cache)if(this.u){if(d=this.g.get(b))return d}else this.g.clear(),
this.u=!0;f=this.encode(f);if(!f.length)return e;d=this.h;d=C(d)?d(f):f.split(N);var u=d.length,n=!0,p=[],q=w();if(1<u)if(this.depth){var m=!0;var t=d[0];q[t]=1}else d.sort(W);var x;if(!m||(x=this.l)[t])for(var y=m?1:0;y<u;y++){var z=d[y];if(z){if(!q[z]){var A=[],B=!1,D=0;if(t=m?x[t]:this.v)for(var E=void 0,G=9;G>=g;G--)if(E=t[G][z])A[D++]=E,B=!0;if(B)p[p.length]=1<D?A.concat.apply([],A):A[0];else if(!this.w){n=!1;break}q[z]=1}t=z}}else n=!1;n&&(e=V(p,c,this.w));this.cache&&this.g.set(b,e);return e}};
e.prototype.clear=function(){this.destroy();return this.init()};e.prototype.destroy=function(){this.cache&&(this.g.clear(),this.g=null);this.filter=this.stemmer=this.v=this.l=this.a=this.c=this.b=null;return this};var A={icase:function(b){return b.toLowerCase()},simple:function(){var b=[a("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),"a",a("[\u00e8\u00e9\u00ea\u00eb]"),"e",a("[\u00ec\u00ed\u00ee\u00ef]"),"i",a("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),"o",a("[\u00f9\u00fa\u00fb\u00fc\u0171]"),"u",a("[\u00fd\u0177\u00ff]"),
"y",a("\u00f1"),"n",a("\u00e7"),"c",a("\u00df"),"s",a(" & ")," and ",a("[-/]")," ",a("[^a-z0-9 ]"),"",a("\\s+")," "];return function(a){a=l(a.toLowerCase(),b);return" "!==a?a:""}}(),advanced:function(){var b=[a("ae"),"a",a("ai"),"ei",a("ay"),"ei",a("ey"),"ei",a("oe"),"o",a("ue"),"u",a("ie"),"i",a("sz"),"s",a("zs"),"s",a("sh"),"s",a("ck"),"k",a("cc"),"k",a("dt"),"t",a("ph"),"f",a("pf"),"f",a("ou"),"o",a("uo"),"u"];return function(a,d){if(!a)return a;a=this.simple(a);2<a.length&&(a=l(a,b));d||1<a.length&&
(a=t(a));return a}}(),extra:function(){var b=[a("p"),"b",a("z"),"s",a("[cgq]"),"k",a("n"),"m",a("d"),"t",a("[vw]"),"f",a("[aeiouy]"),""];return function(a){if(!a)return a;a=this.advanced(a,!0);if(1<a.length){a=a.split(" ");for(var c=0;c<a.length;c++){var d=a[c];1<d.length&&(a[c]=d[0]+l(d.substring(1),b))}a=a.join(" ");a=t(a)}return a}}(),balance:function(){var b=[a("[-/]")," ",a("[^a-z0-9 ]"),"",a("\\s+")," "];return function(a){return t(l(a.toLowerCase(),b))}}()},L=function(){var a=w();return function(b,
d,f){var c=a[f];c&&clearTimeout(c);return a[f]=setTimeout(b,d)}}(),aa=function(){function a(a){this.clear();this.B=!0!==a&&a}a.prototype.clear=function(){this.cache=w();this.count=w();this.index=w();this.a=[]};a.prototype.set=function(a,b){if(this.B&&y(this.cache[a])){var c=this.a.length;if(c===this.B){c--;var d=this.a[c];delete this.cache[d];delete this.count[d];delete this.index[d]}this.index[a]=c;this.a[c]=a;this.count[a]=-1;this.cache[a]=b;this.get(a)}else this.cache[a]=b};a.prototype.get=function(a){var b=
this.cache[a];if(this.B&&b){var c=++this.count[a],d=this.index,e=d[a];if(0<e){for(var g=this.a,k=e;this.count[g[--e]]<=c&&-1!==e;);e++;if(e!==k){for(c=k;c>e;c--)k=g[c-1],g[c]=k,d[k]=c;g[e]=a;d[a]=e}}}return b};return a}();return e}(function(){var g={},h="undefined"!==typeof Blob&&"undefined"!==typeof URL&&URL.createObjectURL;return function(e,k,a,l,d){var m=e;e=h?URL.createObjectURL(new Blob(["("+a.toString()+")()"],{type:"text/javascript"})):m+".es5.js";m+="-"+k;g[m]||(g[m]=[]);g[m][d]=new Worker(e);
g[m][d].onmessage=l;return{postMessage:function(a,d){g[m][a].postMessage(d)}}}}()),this);
