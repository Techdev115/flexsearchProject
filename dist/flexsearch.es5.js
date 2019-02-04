/*
 FlexSearch v0.3.62
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/flexsearch
*/
'use strict';function K(g){var k=0;return function(){return k<g.length?{done:!1,value:g[k++]}:{done:!0}}}function L(g){var k="undefined"!=typeof Symbol&&Symbol.iterator&&g[Symbol.iterator];return k?k.call(g):{next:K(g)}}var R="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,S="function"==typeof Object.defineProperties?Object.defineProperty:function(g,k,e){g!=Array.prototype&&g!=Object.prototype&&(g[k]=e.value)};
function T(g,k){if(k){var e=R;g=g.split(".");for(var h=0;h<g.length-1;h++){var l=g[h];l in e||(e[l]={});e=e[l]}g=g[g.length-1];h=e[g];k=k(h);k!=h&&null!=k&&S(e,g,{configurable:!0,writable:!0,value:k})}}
T("Promise",function(g){function k(d){this.b=0;this.i=void 0;this.a=[];var c=this.c();try{d(c.resolve,c.reject)}catch(D){c.reject(D)}}function e(){this.a=null}function h(d){return d instanceof k?d:new k(function(c){c(d)})}if(g)return g;e.prototype.b=function(d){if(null==this.a){this.a=[];var c=this;this.c(function(){c.i()})}this.a.push(d)};var l=R.setTimeout;e.prototype.c=function(d){l(d,0)};e.prototype.i=function(){for(;this.a&&this.a.length;){var d=this.a;this.a=[];for(var c=0;c<d.length;++c){var e=
d[c];d[c]=null;try{e()}catch(E){this.f(E)}}}this.a=null};e.prototype.f=function(d){this.c(function(){throw d;})};k.prototype.c=function(){function d(d){return function(k){e||(e=!0,d.call(c,k))}}var c=this,e=!1;return{resolve:d(this.G),reject:d(this.f)}};k.prototype.G=function(d){if(d===this)this.f(new TypeError("A Promise cannot resolve to itself"));else if(d instanceof k)this.H(d);else{a:switch(typeof d){case "object":var c=null!=d;break a;case "function":c=!0;break a;default:c=!1}c?this.F(d):this.j(d)}};
k.prototype.F=function(d){var c=void 0;try{c=d.then}catch(D){this.f(D);return}"function"==typeof c?this.I(c,d):this.j(d)};k.prototype.f=function(c){this.m(2,c)};k.prototype.j=function(c){this.m(1,c)};k.prototype.m=function(c,e){if(0!=this.b)throw Error("Cannot settle("+c+", "+e+"): Promise already settled in state"+this.b);this.b=c;this.i=e;this.u()};k.prototype.u=function(){if(null!=this.a){for(var d=0;d<this.a.length;++d)c.b(this.a[d]);this.a=null}};var c=new e;k.prototype.H=function(c){var d=this.c();
c.A(d.resolve,d.reject)};k.prototype.I=function(c,e){var d=this.c();try{c.call(e,d.resolve,d.reject)}catch(E){d.reject(E)}};k.prototype.then=function(c,e){function d(c,d){return"function"==typeof c?function(d){try{g(c(d))}catch(t){h(t)}}:d}var g,h,A=new k(function(c,d){g=c;h=d});this.A(d(c,g),d(e,h));return A};k.prototype.catch=function(c){return this.then(void 0,c)};k.prototype.A=function(d,e){function k(){switch(g.b){case 1:d(g.i);break;case 2:e(g.i);break;default:throw Error("Unexpected state: "+
g.b);}}var g=this;null==this.a?c.b(k):this.a.push(k)};k.resolve=h;k.reject=function(c){return new k(function(d,e){e(c)})};k.race=function(c){return new k(function(d,e){for(var k=L(c),g=k.next();!g.done;g=k.next())h(g.value).A(d,e)})};k.all=function(c){var d=L(c),e=d.next();return e.done?h([]):new k(function(c,k){function g(d){return function(e){l[d]=e;C--;0==C&&c(l)}}var l=[],C=0;do l.push(void 0),C++,h(e.value).A(g(l.length-1),k),e=d.next();while(!e.done)})};return k});
(function(g,k,e){var h;(h=e.define)&&h.amd?h([],function(){return k}):(h=e.modules)?h[g.toLowerCase()]=k:"object"===typeof exports?module.exports=k:e[g]=k})("FlexSearch",function X(g){function e(b){this.id=b&&!t(b.id)?b.id:Y++;this.init(b);l(this,"index",function(){return this.a});l(this,"length",function(){return Object.keys(this.a).length})}function h(b,a,f,c){this.v!==this.h&&(this.l=this.l.concat(f),this.v++,c&&this.l.length>=c&&(this.v=this.h),this.C&&this.v===this.h&&(this.cache&&this.o.set(a,
this.l),this.C(this.l),this.l=[]));return this}function l(b,a,f){Object.defineProperty(b,a,{get:f})}function c(b){return new RegExp(b,"g")}function d(b,a){for(var f=0;f<a.length;f+=2)b=b.replace(a[f],a[f+1]);return b}function A(b,a,f,c,d,e,g){if(a[f])return a[f];d=d?(9-(g||6))*e+(g||6)*d:e;a[f]=d;d>=g&&(b=b[9-(d+.5>>0)],b=b[f]||(b[f]=[]),b[b.length]=c);return d}function D(b,a){if(b)for(var f=Object.keys(b),c=0,d=f.length;c<d;c++){var e=f[c],g=b[e];if(g)for(var y=0,h=g.length;y<h;y++)if(g[y]===a){1===
h?delete b[e]:g.splice(y,1);break}else"object"===typeof g[y]&&D(g[y],a)}}function E(b){for(var a="",f="",c="",d=0;d<b.length;d++){var e=b[d];if(e!==f)if(d&&"h"===e){if(c="a"===c||"e"===c||"i"===c||"o"===c||"u"===c||"y"===c,("a"===f||"e"===f||"i"===f||"o"===f||"u"===f||"y"===f)&&c||" "===f)a+=e}else a+=e;c=d===b.length-1?"":b[d+1];f=e}return a}function U(b,a){b=b.length-a.length;return 0>b?1:b?-1:0}function W(b,a){b=b.length-a.length;return 0>b?-1:b?1:0}function V(b,a,f){var c=[],d=b.length;if(1<d){b.sort(W);
for(var e=z(),g=b[0],y=g.length,h=0;h<y;)e["@"+g[h++]]=1;for(var l,F=0,q=0;++q<d;){var x=!1,u=q===d-1;var p=[];g=b[q];y=g.length;for(h=0;h<y;){l=g[h++];var m="@"+l;if(e[m]){var n=e[m];if(n===q){if(u){if(c[F++]=l,a&&F===a)return c}else e[m]=q+1;x=!0}else f&&(m=p[n]||(p[n]=[]),m[m.length]=l)}}if(!x&&!f)break}if(f&&(F=c.length,(q=p.length)&&(!a||F<a)))for(;q--;)if(l=p[q])for(h=0,y=l.length;h<y;h++)if(c[F++]=l[h],a&&F===a)return c}else d&&(c=b[0],a&&c.length>a&&(c=c.slice(0,a)));return c}function C(b){return"string"===
typeof b}function H(b){return"function"===typeof b}function t(b){return"undefined"===typeof b}function M(b){for(var a=Array(b),f=0;f<b;f++)a[f]=z();return a}function z(){return Object.create(null)}function Z(){var b,a;self.onmessage=function(f){if(f=f.data)if(f.search){var c=a.search(f.content,f.threshold?{limit:f.limit,threshold:f.threshold}:f.limit);self.postMessage({id:b,content:f.content,limit:f.limit,result:c})}else f.add?a.add(f.id,f.content):f.update?a.update(f.id,f.content):f.remove?a.remove(f.id):
f.clear?a.clear():f.info?(f=a.info(),f.worker=b,console.log(f)):f.register&&(b=f.id,f.options.cache=!1,f.options.async=!1,f.options.worker=!1,a=(new Function(f.register.substring(f.register.indexOf("{")+1,f.register.lastIndexOf("}"))))(),a=new a(f.options))}}function aa(b,a,f,c){b=g("flexsearch","id"+b,Z,function(a){(a=a.data)&&a.result&&c(a.id,a.content,a.result,a.limit)},a);var d=X.toString();f.id=a;b.postMessage({register:d,options:f,id:a});return b}var v={encode:"icase",g:"forward",w:!1,cache:!1,
async:!1,h:!1,B:!1,threshold:0,depth:0},N={memory:{encode:"extra",g:"strict",threshold:7},speed:{encode:"icase",g:"strict",threshold:7,depth:2},match:{encode:"extra",g:"full"},score:{encode:"extra",g:"strict",threshold:5,depth:4},balance:{encode:"balance",g:"strict",threshold:6,depth:3},fastest:{encode:"icase",g:"strict",threshold:9,depth:1}},J=[],Y=0,O=c("\\W+"),P={},Q={};e.create=function(b){return new e(b)};e.registerMatcher=function(b){for(var a in b)b.hasOwnProperty(a)&&J.push(c(a),b[a]);return this};
e.registerEncoder=function(b,a){G[b]=a.bind(G);return this};e.registerLanguage=function(b,a){P[b]=a.filter;Q[b]=a.stemmer;return this};e.encode=function(b,a){return G[b](a)};e.prototype.init=function(b){this.i=[];b||(b=v);var a=b.preset,f={};C(b)?((f=N[b])||console.warn("Preset not found: "+b),b={}):a&&((f=N[a])||console.warn("Preset not found: "+a));if(a=b.worker)if("undefined"===typeof Worker)b.worker=!1,this.f=null;else{var d=parseInt(a,10)||4;this.u=-1;this.v=0;this.l=[];this.C=null;this.f=Array(d);
for(var e=0;e<d;e++)this.f[e]=aa(this.id,e,b,h.bind(this))}this.g=b.tokenize||f.g||this.g||v.g;this.B=b.rtl||this.B||v.B;this.async="undefined"===typeof Promise||t(a=b.async)?this.async||v.async:a;this.h=t(a=b.worker)?this.h||v.h:a;this.threshold=t(a=b.threshold)?f.threshold||this.threshold||v.threshold:a;this.depth=t(a=b.depth)?f.depth||this.depth||v.depth:a;this.w=t(a=b.suggest)?this.w||v.w:a;this.j=(a=t(a=b.encode)?f.encode:a)&&G[a]&&G[a].bind(G)||(H(a)?a:this.j||!1);(a=b.matcher)&&this.addMatcher(a);
if(a=b.filter){a=P[a]||a;f=this.j;d=z();if(a)for(e=0;e<a.length;e++){var g=f?f(a[e]):a[e];d[g]=String.fromCharCode(65E3-a.length+e)}this.filter=d}if(a=b.stemmer){f=Q[a]||a;d=this.j;e=[];if(f)for(var l in f)f.hasOwnProperty(l)&&(g=d?d(l):l,e.push(c("(?=.{"+(g.length+3)+",})"+g+"$"),d?d(f[l]):f[l]));this.stemmer=e}this.b=M(10-(this.threshold||0));this.c=z();this.a=z();this.m=!0;this.o=(this.cache=a=t(a=b.cache)?this.cache||v.cache:a)?new ba(a):!1;return this};e.prototype.encode=function(b){b&&J.length&&
(b=d(b,J));b&&this.i.length&&(b=d(b,this.i));b&&this.j&&(b=this.j(b));b&&this.stemmer&&(b=d(b,this.stemmer));return b};e.prototype.addMatcher=function(b){var a=this.i,f;for(f in b)b.hasOwnProperty(f)&&a.push(c(f),b[f]);return this};e.prototype.add=function(b,a,f,c,d){if(a&&C(a)&&(b||0===b)){var e="@"+b;if(this.a[e]&&!c)return this.update(b,a);if(this.h)return++this.u>=this.f.length&&(this.u=0),this.f[this.u].postMessage({add:!0,id:b,content:a}),this.a[e]=""+this.u,f&&f(),this;if(!d){if(this.async&&
"function"!==typeof importScripts){var g=this;e=new Promise(function(f){setTimeout(function(){g.add(b,a,null,c,!0);g=null;f()})});if(f)e.then(f);else return e;return this}if(f)return this.add(b,a,null,c,!0),f(),this}a=this.encode(a);if(!a.length)return this;f=this.g;d=H(f)?f(a):a.split(O);var h=z();h._ctx=z();for(var B=this.threshold,l=this.depth,I=this.b,q=d.length,x=this.B,u=0;u<q;u++){var p=d[u];if(p){var m=p.length,n=(x?u+1:q-u)/q,w="";switch(f){case "reverse":case "both":for(var r=m;--r;)w=p[r]+
w,A(I,h,w,b,x?1:(m-r)/m,n,B);w="";case "forward":for(r=0;r<m;r++)w+=p[r],A(I,h,w,b,x?(r+1)/m:1,n,B);break;case "full":for(r=0;r<m;r++)for(var t=(x?r+1:m-r)/m,v=m;v>r;v--)w=p.substring(r,v),A(I,h,w,b,t,n,B);break;default:if(m=A(I,h,p,b,1,n,B),l&&1<q&&m>=B)for(m=h._ctx[p]||(h._ctx[p]=z()),p=this.c[p]||(this.c[p]=M(10-(B||0))),n=u-l,w=u+l+1,0>n&&(n=0),w>q&&(w=q);n<w;n++)n!==u&&A(p,m,d[n],b,0,10-(n<u?u-n:n-u),B)}}}this.a[e]=1;this.m=!1}return this};e.prototype.update=function(b,a,f){this.a["@"+b]&&C(a)&&
(this.remove(b),this.add(b,a,f,!0));return this};e.prototype.remove=function(b,a,f){var c="@"+b;if(this.a[c]){if(this.h)return this.f[this.a[c]].postMessage({remove:!0,id:b}),delete this.a[c],a&&a(),this;if(!f){if(this.async&&"function"!==typeof importScripts){var d=this;c=new Promise(function(a){setTimeout(function(){d.remove(b,null,!0);d=null;a()})});if(a)c.then(a);else return c;return this}if(a)return this.remove(b,null,!0),a(),this}for(a=0;a<10-(this.threshold||0);a++)D(this.b[a],b);this.depth&&
D(this.c,b);delete this.a[c];this.m=!1}return this};e.prototype.search=function(b,a,c,d){var f=b,e=[];if("object"===typeof b){(c=b.callback||a)&&(f.callback=null);a=b.limit;var g=b.threshold;b=b.query}g||(g=this.threshold||0);H(a)?(c=a,a=1E3):a||0===a||(a=1E3);if(this.h)for(this.C=c,this.v=0,this.l=[],e=0;e<this.h;e++)this.f[e].postMessage({search:!0,limit:a,threshold:g,content:b});else{if(!d){if(this.async&&"function"!==typeof importScripts){var h=this;b=new Promise(function(b){setTimeout(function(){b(h.search(f,
a,null,!0));h=null})});if(c)b.then(c);else return b;return this}if(c)return c(this.search(f,a,null,!0)),this}if(!b||!C(b))return e;f=b;if(this.cache)if(this.m){if(c=this.o.get(b))return c}else this.o.clear(),this.m=!0;f=this.encode(f);if(!f.length)return e;c=this.g;c=H(c)?c(f):f.split(O);d=c.length;var l=!0,B=[],t=z();if(1<d)if(this.depth){var q=!0;var x=c[0];t[x]=1}else c.sort(U);var u;if(!q||(u=this.c)[x])for(var p=q?1:0;p<d;p++){var m=c[p];if(m){if(!t[m]){var n=[],w=!1,r=0;if(x=q?u[x]:this.b)for(var v=
void 0,A=0;A<10-g;A++)if(v=x[A][m])n[r++]=v,w=!0;if(w)B[B.length]=1<r?n.concat.apply([],n):n[0];else if(!this.w){l=!1;break}t[m]=1}x=m}}else l=!1;l&&(e=V(B,a,this.w));this.cache&&this.o.set(b,e);return e}};e.prototype.info=function(){if(this.h)for(var b=0;b<this.h;b++)this.f[b].postMessage({info:!0,id:this.id});else{for(var a,c=0,d=0,e=0,g=0;g<10-(this.threshold||0);g++){b=Object.keys(this.b[g]);for(var h=0;h<b.length;h++)a=this.b[g][b[h]].length,c+=1*a+2*b[h].length+4,d+=a,e+=2*b[h].length}b=Object.keys(this.a);
a=b.length;for(g=0;g<a;g++)c+=2*b[g].length+2;return{id:this.id,memory:c,items:a,sequences:d,chars:e,cache:this.cache&&this.cache.s?this.cache.s.length:!1,matcher:J.length+(this.i?this.i.length:0),worker:this.h,threshold:this.threshold,depth:this.depth,contextual:this.depth&&"strict"===this.g}}};e.prototype.clear=function(){return this.destroy().init()};e.prototype.destroy=function(){this.cache&&(this.o.clear(),this.o=null);this.b=this.c=this.a=null;return this};e.prototype.export=function(){return JSON.stringify([this.b,
this.c,this.a])};e.prototype.import=function(b){b=JSON.parse(b);this.b=b[0];this.c=b[1];this.a=b[2]};var G={icase:function(b){return b.toLowerCase()},simple:function(){var b=[c("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),"a",c("[\u00e8\u00e9\u00ea\u00eb]"),"e",c("[\u00ec\u00ed\u00ee\u00ef]"),"i",c("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),"o",c("[\u00f9\u00fa\u00fb\u00fc\u0171]"),"u",c("[\u00fd\u0177\u00ff]"),"y",c("\u00f1"),"n",c("\u00e7"),"c",c("\u00df"),"s",c(" & ")," and ",c("[-/]")," ",c("[^a-z0-9 ]"),
"",c("\\s+")," "];return function(a){a=d(a.toLowerCase(),b);return" "===a?"":a}}(),advanced:function(){var b=[c("ae"),"a",c("ai"),"ei",c("ay"),"ei",c("ey"),"ei",c("oe"),"o",c("ue"),"u",c("ie"),"i",c("sz"),"s",c("zs"),"s",c("sh"),"s",c("ck"),"k",c("cc"),"k",c("dt"),"t",c("ph"),"f",c("pf"),"f",c("ou"),"o",c("uo"),"u"];return function(a,c){if(!a)return a;a=this.simple(a);2<a.length&&(a=d(a,b));c||1<a.length&&(a=E(a));return a}}(),extra:function(){var b=[c("p"),"b",c("z"),"s",c("[cgq]"),"k",c("n"),"m",
c("d"),"t",c("[vw]"),"f",c("[aeiouy]"),""];return function(a){if(!a)return a;a=this.advanced(a,!0);if(1<a.length){a=a.split(" ");for(var c=0;c<a.length;c++){var e=a[c];1<e.length&&(a[c]=e[0]+d(e.substring(1),b))}a=a.join(" ");a=E(a)}return a}}(),balance:function(){var b=[c("[-/]")," ",c("[^a-z0-9 ]"),"",c("\\s+")," "];return function(a){return E(d(a.toLowerCase(),b))}}()},ba=function(){function b(a){this.clear();this.D=!0!==a&&a}b.prototype.clear=function(){this.cache=z();this.count=z();this.index=
z();this.s=[]};b.prototype.set=function(a,b){if(this.D&&t(this.cache[a])){var c=this.s.length;if(c===this.D){c--;var e=this.s[c];delete this.cache[e];delete this.count[e];delete this.index[e]}this.index[a]=c;this.s[c]=a;this.count[a]=-1;this.cache[a]=b;this.get(a)}else this.cache[a]=b};b.prototype.get=function(a){var b=this.cache[a];if(this.D&&b){var c=++this.count[a],e=this.index,d=e[a];if(0<d){for(var g=this.s,h=d;this.count[g[--d]]<=c&&-1!==d;);d++;if(d!==h){for(c=h;c>d;c--)h=g[c-1],g[c]=h,e[h]=
c;g[d]=a;e[a]=d}}}return b};return b}();return e}(function(){var g={},k="undefined"!==typeof Blob&&"undefined"!==typeof URL&&URL.createObjectURL;return function(e,h,l,c,d){l=k?URL.createObjectURL(new Blob(["("+l.toString()+")()"],{type:"text/javascript"})):e+".es5.js";e+="-"+h;g[e]||(g[e]=[]);g[e][d]=new Worker(l);g[e][d].onmessage=c;console.log("Register Worker: "+e+"@"+d);return g[e][d]}}()),this);
