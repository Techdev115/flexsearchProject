/*
 FlexSearch v0.4.0
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/flexsearch
*/
'use strict';function L(g){var l=0;return function(){return l<g.length?{done:!1,value:g[l++]}:{done:!0}}}function M(g){var l="undefined"!=typeof Symbol&&Symbol.iterator&&g[Symbol.iterator];return l?l.call(g):{next:L(g)}}var S="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,T="function"==typeof Object.defineProperties?Object.defineProperty:function(g,l,d){g!=Array.prototype&&g!=Object.prototype&&(g[l]=d.value)};
function U(g,l){if(l){var d=S;g=g.split(".");for(var m=0;m<g.length-1;m++){var k=g[m];k in d||(d[k]={});d=d[k]}g=g[g.length-1];m=d[g];l=l(m);l!=m&&null!=l&&T(d,g,{configurable:!0,writable:!0,value:l})}}
U("Promise",function(g){function l(e){this.f=0;this.o=void 0;this.a=[];var d=this.i();try{e(d.resolve,d.reject)}catch(C){d.reject(C)}}function d(){this.a=null}function m(e){return e instanceof l?e:new l(function(d){d(e)})}if(g)return g;d.prototype.f=function(e){if(null==this.a){this.a=[];var d=this;this.i(function(){d.o()})}this.a.push(e)};var k=S.setTimeout;d.prototype.i=function(e){k(e,0)};d.prototype.o=function(){for(;this.a&&this.a.length;){var e=this.a;this.a=[];for(var d=0;d<e.length;++d){var f=
e[d];e[d]=null;try{f()}catch(G){this.l(G)}}}this.a=null};d.prototype.l=function(e){this.i(function(){throw e;})};l.prototype.i=function(){function e(e){return function(l){f||(f=!0,e.call(d,l))}}var d=this,f=!1;return{resolve:e(this.L),reject:e(this.l)}};l.prototype.L=function(e){if(e===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof l)this.M(e);else{a:switch(typeof e){case "object":var d=null!=e;break a;case "function":d=!0;break a;default:d=!1}d?this.K(e):this.v(e)}};
l.prototype.K=function(e){var d=void 0;try{d=e.then}catch(C){this.l(C);return}"function"==typeof d?this.N(d,e):this.v(e)};l.prototype.l=function(d){this.I(2,d)};l.prototype.v=function(d){this.I(1,d)};l.prototype.I=function(d,f){if(0!=this.f)throw Error("Cannot settle("+d+", "+f+"): Promise already settled in state"+this.f);this.f=d;this.o=f;this.J()};l.prototype.J=function(){if(null!=this.a){for(var d=0;d<this.a.length;++d)f.f(this.a[d]);this.a=null}};var f=new d;l.prototype.M=function(d){var e=this.i();
d.D(e.resolve,e.reject)};l.prototype.N=function(d,f){var e=this.i();try{d.call(f,e.resolve,e.reject)}catch(G){e.reject(G)}};l.prototype.then=function(d,f){function e(d,e){return"function"==typeof d?function(e){try{g(d(e))}catch(E){m(E)}}:e}var g,m,D=new l(function(d,e){g=d;m=e});this.D(e(d,g),e(f,m));return D};l.prototype.catch=function(d){return this.then(void 0,d)};l.prototype.D=function(d,l){function e(){switch(g.f){case 1:d(g.o);break;case 2:l(g.o);break;default:throw Error("Unexpected state: "+
g.f);}}var g=this;null==this.a?f.f(e):this.a.push(e)};l.resolve=m;l.reject=function(d){return new l(function(e,f){f(d)})};l.race=function(d){return new l(function(e,f){for(var l=M(d),g=l.next();!g.done;g=l.next())m(g.value).D(e,f)})};l.all=function(d){var e=M(d),f=e.next();return f.done?m([]):new l(function(d,l){function g(e){return function(f){k[e]=f;F--;0==F&&d(k)}}var k=[],F=0;do k.push(void 0),F++,m(f.value).D(g(k.length-1),l),f=e.next();while(!f.done)})};return l});
(function(g,l,d){var m;(m=d.define)&&m.amd?m([],function(){return l}):(m=d.modules)?m[g.toLowerCase()]=l:"object"===typeof exports?module.exports=l:d[g]=l})("FlexSearch",function Y(g){function d(a,b){var c=b?b.id:a&&a.id;this.id=c||0===c?c:Z++;this.init(a,b);k(this,"index",function(){return this.b});k(this,"length",function(){return Object.keys(this.b).length})}function m(a,b,c,d){this.B!==this.h&&(this.u=this.u.concat(c),this.B++,d&&this.u.length>=d&&(this.B=this.h),this.G&&this.B===this.h&&(this.cache&&
this.w.set(b,this.u),this.G(this.u),this.u=[]));return this}function k(a,b,c){Object.defineProperty(a,b,{get:c})}function f(a){return new RegExp(a,"g")}function e(a,b){for(var c=0;c<b.length;c+=2)a=a.replace(b[c],b[c+1]);return a}function D(a,b,c,d,h,u,e){if(b[c])return b[c];h=h?(9-(e||6))*u+(e||6)*h:u;b[c]=h;h>=e&&(a=a[9-(h+.5>>0)],a=a[c]||(a[c]=[]),a[a.length]=d);return h}function C(a,b){if(a)for(var c=Object.keys(a),d=0,h=c.length;d<h;d++){var u=c[d],e=a[u];if(e)for(var f=0,g=e.length;f<g;f++)if(e[f]===
b){1===g?delete a[u]:e.splice(f,1);break}else E(e[f])&&C(e[f],b)}}function G(a){for(var b="",c="",d="",h=0;h<a.length;h++){var u=a[h];if(u!==c)if(h&&"h"===u){if(d="a"===d||"e"===d||"i"===d||"o"===d||"u"===d||"y"===d,("a"===c||"e"===c||"i"===c||"o"===c||"u"===c||"y"===c)&&d||" "===c)b+=u}else b+=u;d=h===a.length-1?"":a[h+1];c=u}return b}function V(a,b){a=a.length-b.length;return 0>a?1:a?-1:0}function X(a,b){a=a.length-b.length;return 0>a?-1:a?1:0}function W(a,b,c,d){var h=[],u=a.length;if(1<u){a.sort(X);
for(var e=B(),f=a[0],r=f.length,g=0;g<r;)e["@"+f[g++]]=1;for(var p,m=0,q=0;++q<u;){var k=!1,x=q===u-1;var v=[];f=a[q];r=f.length;for(g=0;g<r;){p=f[g++];var n="@"+p;if(e[n]){var w=e[n];if(w===q){if(x){if(h[m++]=c?c[n]:p,b&&m===b)return h}else e[n]=q+1;k=!0}else d&&(n=v[w]||(v[w]=[]),n[n.length]=p)}}if(!k&&!d)break}if(d&&(m=h.length,(q=v.length)&&(!b||m<b)))for(;q--;)if(p=v[q])for(g=0,r=p.length;g<r;g++)if(h[m++]=c?c["@"+p[g]]:p[g],b&&m===b)return h}else if(u)if(c)for(a=a[0],d=a.length,b&&b<d&&(d=b),
h=Array(d),b=0;b<d;b++)h[b]=c["@"+a[b]];else h=a[0],b&&h.length>b&&(h=h.slice(0,b));return h}function F(a){return"string"===typeof a}function I(a){return"function"===typeof a}function E(a){return"object"===typeof a}function z(a){return"undefined"===typeof a}function N(a){for(var b=Array(a),c=0;c<a;c++)b[c]=B();return b}function B(){return Object.create(null)}function aa(){var a,b;self.onmessage=function(c){if(c=c.data)if(c.search){var d=b.search(c.content,c.threshold?{limit:c.limit,threshold:c.threshold}:
c.limit);self.postMessage({id:a,content:c.content,limit:c.limit,result:d})}else c.add?b.add(c.id,c.content):c.update?b.update(c.id,c.content):c.remove?b.remove(c.id):c.clear?b.clear():c.info?(c=b.info(),c.worker=a,console.log(c)):c.register&&(a=c.id,c.options.cache=!1,c.options.async=!1,c.options.worker=!1,b=(new Function(c.register.substring(c.register.indexOf("{")+1,c.register.lastIndexOf("}"))))(),b=new b(c.options))}}function ba(a,b,c,d){a=g("flexsearch","id"+a,aa,function(a){(a=a.data)&&a.result&&
d(a.id,a.content,a.result,a.limit)},b);var h=Y.toString();c.id=b;a.postMessage({register:h,options:c,id:b});return a}var t={encode:"icase",g:"forward",C:!1,cache:!1,async:!1,h:!1,F:!1,threshold:0,depth:0,c:!1},O={memory:{encode:"extra",g:"strict",threshold:7},speed:{encode:"icase",g:"strict",threshold:7,depth:2},match:{encode:"extra",g:"full"},score:{encode:"extra",g:"strict",threshold:5,depth:4},balance:{encode:"balance",g:"strict",threshold:6,depth:3},fastest:{encode:"icase",g:"strict",threshold:9,
depth:1}},K=[],Z=0,P=f("\\W+"),Q={},R={};d.create=function(a){return new d(a)};d.registerMatcher=function(a){for(var b in a)a.hasOwnProperty(b)&&K.push(f(b),a[b]);return this};d.registerEncoder=function(a,b){H[a]=b.bind(H);return this};d.registerLanguage=function(a,b){Q[a]=b.filter;R[a]=b.stemmer;return this};d.encode=function(a,b){return H[a](b)};d.prototype.init=function(a,b){this.f=[];if(b){var c=b.preset;a=b}else a||(a=t),c=a.preset;b={};F(a)?((b=O[a])||console.warn("Preset not found: "+a),a=
{}):c&&((b=O[c])||console.warn("Preset not found: "+c));if(c=a.worker)if("undefined"===typeof Worker)a.worker=!1,this.a=null;else{var e=parseInt(c,10)||4;this.v=-1;this.B=0;this.u=[];this.G=null;this.a=Array(e);for(var h=0;h<e;h++)this.a[h]=ba(this.id,h,a,m.bind(this))}this.g=a.tokenize||b.g||this.g||t.g;this.F=a.rtl||this.F||t.F;this.async="undefined"===typeof Promise||z(c=a.async)?this.async||t.async:c;this.h=z(c=a.worker)?this.h||t.h:c;this.threshold=z(c=a.threshold)?b.threshold||this.threshold||
t.threshold:c;this.depth=z(c=a.depth)?b.depth||this.depth||t.depth:c;this.C=z(c=a.suggest)?this.C||t.C:c;this.i=(c=z(c=a.encode)?b.encode||t.encode:c)&&H[c]&&H[c].bind(H)||(I(c)?c:this.i||!1);(c=a.matcher)&&this.addMatcher(c);if(c=a.filter){c=Q[c]||c;b=this.i;e=B();if(c)for(h=0;h<c.length;h++){var u=b?b(c[h]):c[h];e[u]=String.fromCharCode(65E3-c.length+h)}this.filter=e}if(c=a.stemmer){b=R[c]||c;e=this.i;h=[];if(b)for(var g in b)b.hasOwnProperty(g)&&(u=e?e(g):g,h.push(f("(?=.{"+(u.length+3)+",})"+
u+"$"),e?e(b[g]):b[g]));this.stemmer=h}this.c=h=(c=a.doc)?c:this.c||t.c;this.m=N(10-(this.threshold||0));this.s=B();this.b=B();this.j=h&&B();if(h)if(a.doc=null,g=h.field,b=h.index=[],e=h.ref={},h.id=h.id.split(":"),g.constructor===Array)for(h=0;h<g.length;h++)e[g[h]]=h,g[h]=g[h].split(":"),b[h]=new d(a),b[h].j=this.j;else e[g]=0,h.field=[g.split(":")],b[0]=new d(a),b[0].j=this.j;this.o=!0;this.w=(this.cache=c=z(c=a.cache)?this.cache||t.cache:c)?new ca(c):!1;return this};d.prototype.encode=function(a){a&&
K.length&&(a=e(a,K));a&&this.f.length&&(a=e(a,this.f));a&&this.i&&(a=this.i(a));a&&this.stemmer&&(a=e(a,this.stemmer));return a};d.prototype.addMatcher=function(a){var b=this.f,c;for(c in a)a.hasOwnProperty(c)&&b.push(f(c),a[c]);return this};d.prototype.add=function(a,b,c,d,h){if(this.c&&E(a))return this.l("add",a,b);if(b&&F(b)&&(a||0===a)){var e="@"+a;if(this.b[e]&&!d)return this.update(a,b);if(this.h)return++this.v>=this.a.length&&(this.v=0),this.a[this.v].postMessage({add:!0,id:a,content:b}),this.b[e]=
""+this.v,c&&c(),this;if(!h){if(this.async&&"function"!==typeof importScripts){var f=this;e=new Promise(function(c){setTimeout(function(){f.add(a,b,null,d,!0);f=null;c()})});if(c)e.then(c);else return e;return this}if(c)return this.add(a,b,null,d,!0),c(),this}b=this.encode(b);if(!b.length)return this;c=this.g;h=I(c)?c(b):b.split(P);var g=B();g._ctx=B();for(var r=this.threshold,m=this.depth,p=this.m,k=h.length,q=this.F,A=0;A<k;A++){var x=h[A];if(x){var v=x.length,n=(q?A+1:k-A)/k,w="";switch(c){case "reverse":case "both":for(var y=
v;--y;)w=x[y]+w,D(p,g,w,a,q?1:(v-y)/v,n,r);w="";case "forward":for(y=0;y<v;y++)w+=x[y],D(p,g,w,a,q?(y+1)/v:1,n,r);break;case "full":for(y=0;y<v;y++)for(var t=(q?y+1:v-y)/v,z=v;z>y;z--)w=x.substring(y,z),D(p,g,w,a,t,n,r);break;default:if(v=D(p,g,x,a,1,n,r),m&&1<k&&v>=r)for(v=g._ctx[x]||(g._ctx[x]=B()),x=this.s[x]||(this.s[x]=N(10-(r||0))),n=A-m,w=A+m+1,0>n&&(n=0),w>k&&(w=k);n<w;n++)n!==A&&D(x,v,h[n],a,0,10-(n<A?A-n:n-A),r)}}}this.b[e]=1;this.o=!1}return this};d.prototype.l=function(a,b,c){if(b.constructor===
Array)for(var d=0,e=b.length;d<e;d++){if(d===e-1)return this.l(a,b[d],c);this.l(a,b[d])}else{d=this.c.index;for(var f=this.c.id,g=0;g<f.length;g++)e=(e||b)[f[g]];if("remove"===a)for(delete this.j["@"+e],f=0,g=d.length;f<g;f++){if(f===g-1)return d[f].remove(e,c);d[f].remove(e)}f=this.c.field;g=0;for(var m=f.length;g<m;g++){for(var k=f[g],J=void 0,p=0;p<k.length;p++)J=(J||b)[k[p]];this.j["@"+e]=b;k=d[g];p="add"===a?k.add:k.update;if(g===m-1)return p.call(k,e,J,c);p.call(k,e,J)}}};d.prototype.update=
function(a,b,c){if(this.c&&E(a))return this.l("update",a,b);this.b["@"+a]&&F(b)&&(this.remove(a),this.add(a,b,c,!0));return this};d.prototype.remove=function(a,b,c){if(this.c&&E(a))return this.l("remove",a,b);var d="@"+a;if(this.b[d]){if(this.h)return this.a[this.b[d]].postMessage({remove:!0,id:a}),delete this.b[d],b&&b(),this;if(!c){if(this.async&&"function"!==typeof importScripts){var e=this;d=new Promise(function(b){setTimeout(function(){e.remove(a,null,!0);e=null;b()})});if(b)d.then(b);else return d;
return this}if(b)return this.remove(a,null,!0),b(),this}for(b=0;b<10-(this.threshold||0);b++)C(this.m[b],a);this.depth&&C(this.s,a);delete this.b[d];this.o=!1}return this};d.prototype.search=function(a,b,c,d){if(E(b)){if(b.constructor===Array)for(var e=0;e<b.length;e++)b[e].query=a;else b.query=a;a=b;b=0}var f=a,g=[];if(E(a)&&a.constructor!==Array){(c=a.callback||b)&&(f.callback=null);b=a.limit;var r=a.threshold;var m=a.boost;a=a.query}if(this.c){a=this.c.ref;r=this.c.index;var k=f.field;if(k)f.field=
null;else if(f.constructor===Array){var p=f;k=[];for(var t=0;t<f.length;t++)k[t]=f[t].field}else k=Object.keys(a);if(E(k)){k.constructor===Array||(k=[k]);t=k.length;for(var q=0;q<t;q++)p&&(f=p[q]),g[q]=r[a[k[q]]].search(f);return c?c(g.concat.apply([],g)):this.async?new Promise(function(a){Promise.all(g).then(function(b){a(b.concat.apply([],b))})}):g.concat.apply([],g)}return r[a[k]].search(f,c)}r||(r=this.threshold||0);I(b)?(c=b,b=1E3):b||0===b||(b=1E3);if(this.h)for(this.G=c,this.B=0,this.u=[],
k=0;k<this.h;k++)this.a[k].postMessage({search:!0,limit:b,threshold:r,content:a});else{if(!d){if(this.async&&"function"!==typeof importScripts){var A=this;a=new Promise(function(a){setTimeout(function(){a(A.search(f,b,null,!0));A=null})});if(c)a.then(c);else return a;return this}if(c)return c(this.search(f,b,null,!0)),this}if(!a||!F(a))return g;f=a;if(this.cache)if(this.o){if(c=this.w.get(a))return c}else this.w.clear(),this.o=!0;f=this.encode(f);if(!f.length)return g;c=this.g;c=I(c)?c(f):f.split(P);
p=c.length;d=!0;e=[];var x=B();1<p&&(this.depth?(k=!0,q=c[0],x[q]=1):c.sort(V));if(!k||(t=this.s)[q]){var v=0;m&&(r=(r||1)/m,0>m&&(v=r));for(m=k?1:0;m<p;m++){var n=c[m];if(n){if(!x[n]){var w=[],y=!1,z=0;if(q=k?t[q]:this.m)for(var D=void 0,C=v;C<10-r;C++)if(D=q[C][n])w[z++]=D,y=!0;if(y)e[e.length]=1<z?w.concat.apply([],w):w[0];else if(!this.C){d=!1;break}x[n]=1}q=n}}}else d=!1;d&&(g=W(e,b,this.j,this.C));this.cache&&this.w.set(a,g);return g}};d.prototype.info=function(){if(this.h)for(var a=0;a<this.h;a++)this.a[a].postMessage({info:!0,
id:this.id});else{for(var b,c=0,d=0,e=0,f=0;f<10-(this.threshold||0);f++){a=Object.keys(this.m[f]);for(var g=0;g<a.length;g++)b=this.m[f][a[g]].length,c+=1*b+2*a[g].length+4,d+=b,e+=2*a[g].length}a=Object.keys(this.b);b=a.length;for(f=0;f<b;f++)c+=2*a[f].length+2;return{id:this.id,memory:c,items:b,sequences:d,chars:e,cache:this.cache&&this.cache.A?this.cache.A.length:!1,matcher:K.length+(this.f?this.f.length:0),worker:this.h,threshold:this.threshold,depth:this.depth,contextual:this.depth&&"strict"===
this.g}}};d.prototype.clear=function(){return this.destroy().init()};d.prototype.destroy=function(){this.cache&&(this.w.clear(),this.w=null);this.m=this.s=this.b=null;return this};d.prototype.export=function(){if(this.c){for(var a=this.c.index,b=Array(a.length+1),c=0;c<a.length;c++)b[c]=[a[c].m,a[c].s,a[c].b];b[c]=this.j;return JSON.stringify(b)}return JSON.stringify([this.m,this.s,this.b])};d.prototype.import=function(a){a=JSON.parse(a);if(this.c){for(var b=this.c.index,c=b.length,d=0;d<c;d++){var e=
b[d];e.m=a[d][0];e.s=a[d][1];e.b=a[d][2];e.j=a[c]}this.j=a[c]}else this.m=a[0],this.s=a[1],this.b=a[2],this.j=a[3]};var H={icase:function(a){return a.toLowerCase()},simple:function(){var a=[f("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),"a",f("[\u00e8\u00e9\u00ea\u00eb]"),"e",f("[\u00ec\u00ed\u00ee\u00ef]"),"i",f("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),"o",f("[\u00f9\u00fa\u00fb\u00fc\u0171]"),"u",f("[\u00fd\u0177\u00ff]"),"y",f("\u00f1"),"n",f("\u00e7"),"c",f("\u00df"),"s",f(" & ")," and ",f("[-/]"),
" ",f("[^a-z0-9 ]"),"",f("\\s+")," "];return function(b){b=e(b.toLowerCase(),a);return" "===b?"":b}}(),advanced:function(){var a=[f("ae"),"a",f("ai"),"ei",f("ay"),"ei",f("ey"),"ei",f("oe"),"o",f("ue"),"u",f("ie"),"i",f("sz"),"s",f("zs"),"s",f("sh"),"s",f("ck"),"k",f("cc"),"k",f("dt"),"t",f("ph"),"f",f("pf"),"f",f("ou"),"o",f("uo"),"u"];return function(b,c){if(!b)return b;b=this.simple(b);2<b.length&&(b=e(b,a));c||1<b.length&&(b=G(b));return b}}(),extra:function(){var a=[f("p"),"b",f("z"),"s",f("[cgq]"),
"k",f("n"),"m",f("d"),"t",f("[vw]"),"f",f("[aeiouy]"),""];return function(b){if(!b)return b;b=this.advanced(b,!0);if(1<b.length){b=b.split(" ");for(var c=0;c<b.length;c++){var d=b[c];1<d.length&&(b[c]=d[0]+e(d.substring(1),a))}b=b.join(" ");b=G(b)}return b}}(),balance:function(){var a=[f("[-/]")," ",f("[^a-z0-9 ]"),"",f("\\s+")," "];return function(b){return G(e(b.toLowerCase(),a))}}()},ca=function(){function a(a){this.clear();this.H=!0!==a&&a}a.prototype.clear=function(){this.cache=B();this.count=
B();this.index=B();this.A=[]};a.prototype.set=function(a,c){if(this.H&&z(this.cache[a])){var b=this.A.length;if(b===this.H){b--;var d=this.A[b];delete this.cache[d];delete this.count[d];delete this.index[d]}this.index[a]=b;this.A[b]=a;this.count[a]=-1;this.cache[a]=c;this.get(a)}else this.cache[a]=c};a.prototype.get=function(a){var b=this.cache[a];if(this.H&&b){var d=++this.count[a],e=this.index,f=e[a];if(0<f){for(var g=this.A,k=f;this.count[g[--f]]<=d&&-1!==f;);f++;if(f!==k){for(d=k;d>f;d--)k=g[d-
1],g[d]=k,e[k]=d;g[f]=a;e[a]=f}}}return b};return a}();return d}(function(){var g={},l="undefined"!==typeof Blob&&"undefined"!==typeof URL&&URL.createObjectURL;return function(d,m,k,f,e){k=l?URL.createObjectURL(new Blob(["("+k.toString()+")()"],{type:"text/javascript"})):d+".es5.js";d+="-"+m;g[d]||(g[d]=[]);g[d][e]=new Worker(k);g[d][e].onmessage=f;console.log("Register Worker: "+d+"@"+e);return g[d][e]}}()),this);
