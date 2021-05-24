/**!
 * FlexSearch.js v0.7.0-beta (Bundle)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/flexsearch
 */
(function _f(self){'use strict';try{if(module)self=module}catch(e){}self._factory=_f;var u;function w(a,b){return"undefined"!==typeof a?a:b}function x(a){const b=Array(a);for(let c=0;c<a;c++)b[c]=z();return b}function z(){return Object.create(null)}function aa(a,b){return b.length-a.length}function A(a){return"string"===typeof a}function B(a){return"object"===typeof a}function C(a){return"function"===typeof a};const ba=/[\u0300-\u036f]/g;function ca(a){a.normalize&&(a=a.normalize("NFD").replace(ba,""));return a}function da(a,b){const c=Object.keys(a),d=c.length,e=[];let f="",g=0;for(let h=0,k,m;h<d;h++)k=c[h],(m=a[k])?(e[g++]=D(b?"(?!\\b)"+k+"(\\b|_)":k),e[g++]=m):f+=(f?"|":"")+k;f&&(e[g++]=D(b?"(?!\\b)("+f+")(\\b|_)":"("+f+")"),e[g]="");return e}function E(a,b){for(let c=0,d=b.length;c<d&&(a=a.replace(b[c],b[c+1]),a);c+=2);return a}function D(a){return new RegExp(a,"g")}
function ea(a){let b="",c="";for(let d=0,e=a.length,f;d<e;d++)(f=a[d])!==c&&(b+=c=f);return b};const fa=/[\W_]+/;function ha(a){return ia(this,ca(a).toLowerCase(),!1,fa)};const ja={},F={};let ka=Promise;function la(a){G(a,"add");G(a,"append");G(a,"search");G(a,"update");G(a,"remove")}function G(a,b){a[b+"Async"]=function(){const c=this,d=arguments;var e=d[d.length-1];let f;C(e)&&(f=e,delete d[d.length-1]);e=new ka(function(g){setTimeout(function(){c.async=!0;const h=c[b].apply(c,d);c.async=!1;g(h)})});return f?(e.then(f),this):e}};function ma(a,b,c,d){var e=a.length;let f=[],g,h=0;d&&(d=[]);for(--e;0<=e;e--){const k=a[e],m=k.length,l=z();let q=!g;for(let r=0;r<m;r++){const v=k[r],p=v.length;if(p)for(let n=0,t=0,y;n<p;n++)if(y=v[n],!g)l[y]=1;else if(g[y]){if(e)d&&t<b&&((d[r]||(d[r]=[]))[t++]=y),l[y]=1;else if(c)c--;else if(f[h++]=y,h===b)return f;q=!0}}if(!q&&!d)return[];g=l}if(d)for(let k=d.length-1,m,l;0<=k;k--)if((l=(m=d[k])&&m.length)&&c&&(l<=c?(c-=l,l=0):l-=c),l){if(h+l>=b)return f.concat(m.slice(c,b-h+c));f=f.concat(c?
m.slice(c):m);h+=l;c=0}return f}function na(a,b){const c=z(),d=z(),e=[];for(let f=0;f<a.length;f++)c[a[f]]=1;for(let f=0,g;f<b.length;f++){g=b[f];for(let h=0,k;h<g.length;h++)k=g[h],c[k]&&!d[k]&&(d[k]=1,e[e.length]=k)}return e};function J(a){this.l=!0!==a&&a;this.cache=z();this.h=[]}function oa(a,b,c){B(a)&&(a=a.query);let d=this.cache.get(a);d||(d=this.search(a,b,c),this.cache.set(a,d));return d}J.prototype.set=function(a,b){if(!this.cache[a]){var c=this.h.length;c===this.l?delete this.cache[this.h[c-1]]:c++;for(--c;0<c;c--)this.h[c]=this.h[c-1];this.h[0]=a}this.cache[a]=b};J.prototype.get=function(a){const b=this.cache[a];if(this.l&&b&&(a=this.h.indexOf(a))){const c=this.h[a-1];this.h[a-1]=this.h[a];this.h[a]=c}return b};const ra={memory:{charset:"latin:extra",C:3,B:3,o:!1,A:"memory"},performance:{threshold:8,B:3,context:{depth:1,G:!0}},match:{charset:"latin:extra",I:"full",C:3},score:{charset:"latin:advanced",threshold:1,context:{depth:3,G:!0}},"default":{C:3,threshold:0,depth:3}};function sa(a,b,c,d,e,f){setTimeout(function(){const g=a(c,JSON.stringify(f));g&&g.then?g.then(function(){b.export(a,b,c,d,e+1)}):b.export(a,b,c,d,e+1)})};F["latin:default"]=ha;
function K(a,b){if(!(this instanceof K))return new K(a);var c;if(a){A(a)?a=ra[a]:(c=a.preset)&&(a=Object.assign({},c[c],a));c=a.charset;var d=a.lang;A(c)&&(-1===c.indexOf(":")&&(c+=":default"),c=F[c]);A(d)&&(d=ja[d])}else a={};let e,f,g,h=a.context||{};this.encode=a.encode||c&&c.encode||ha;this.register=b||z();e=a.resolution||9;f=a.threshold||0;f>=e&&(f=e-1);this.C=e;this.threshold=f;this.D=b=c&&c.I||a.tokenize||"strict";this.depth="strict"===b&&h.depth;this.G=w(h.bidirectional,!0);this.A=g="memory"===
a.optimize;this.o=w(a.fastupdate,!0);this.B=a.minlength||1;this.map=g?x(e-f):z();e=h.resolution||e;f=h.threshold||f;f>=e&&(f=e-1);this.l=e;this.s=f;this.h=g?x(e-f):z();this.F=c&&c.F||a.rtl;this.L=(b=a.matcher||d&&d.L)&&da(b,!1);this.M=(b=a.stemmer||d&&d.M)&&da(b,!0);if(c=b=a.filter||d&&d.filter){c=b;d=z();for(let k=0,m=c.length;k<m;k++)d[c[k]]=1;c=d}this.filter=c;this.cache=(b=a.cache)&&new J(b)}
function ia(a,b,c,d){if(b&&(c&&(b=E(b,c)),a.L&&(b=E(b,a.L)),a.M&&1<b.length&&(b=E(b,a.M)),d||""===d)){b=b.split(d);if(a.filter){a=a.filter;c=b.length;d=[];for(let e=0,f=0;e<c;e++){const g=b[e];g&&!a[g]&&(d[f++]=g)}a=d}else a=b;return a}return b}u=K.prototype;u.append=function(a,b){return this.add(a,b,!0)};
u.add=function(a,b,c,d){if(!d&&!c&&this.register[a])return this.update(a,b);if(b&&(a||0===a)&&(b=this.encode(b),d=b.length)){const l=this.depth,q=this.C-this.threshold,r=z(),v=z();for(let p=0;p<d;p++){let n=b[this.F?d-1-p:p];var e=n.length;if(n&&e>=this.B&&(l||!r[n])){var f=Math.min(this.C/d*p|0,p);if(f<q){var g="";switch(this.D){case "full":if(3<e){for(var h=0;h<e;h++){var k=h?Math.min(f/2+this.C/e*h/2|0,f+h):f;if(k<q)for(var m=e;m>h;m--)g=n.substring(h,m),g.length>=this.B&&L(this,r,g,k,a,c)}break}case "reverse":if(2<
e){for(h=e-1;0<h;h--)g=n[h]+g,g.length>=this.B&&L(this,r,g,f,a,c);g=""}case "forward":if(1<e)for(h=0;h<e;h++)g+=n[h],g.length>=this.B&&L(this,r,g,f,a,c);break;default:if(L(this,r,n,f,a,c),l&&1<d&&p<d-1)for(e=this.l-this.s,f=z(),g=n,h=Math.min(l+1,d-p),f[g]=1,k=1;k<h;k++)if((n=b[this.F?d-1-p-k:p+k])&&n.length>=this.B&&!f[n]){if(f[n]=1,m=Math.min((this.l-h)/d*p+k|0,p+(k-1)),m<e){const t=this.G&&n>g;L(this,v,t?g:n,m,a,c,t?n:g)}}else h=Math.min(h+1,d-p)}}}}this.o||(this.register[a]=1)}return this};
function L(a,b,c,d,e,f,g){let h=g?a.h:a.map;if(!b[c]||g&&!b[c][g])a.A&&(h=h[d]),g?(b=b[c]||(b[c]=z()),b[g]=1,h=h[g]||(h[g]=z())):b[c]=1,h=h[c]||(h[c]=[]),a.A||(h=h[d]||(h[d]=[])),f&&-1!==h.indexOf(e)||(h[h.length]=e,a.o&&(a=a.register[e]||(a.register[e]=[]),a[a.length]=h))}
u.search=function(a,b,c){B(a)?(c=a,a=c.query):B(b)&&(c=b);let d=[],e;var f=this.threshold;let g,h=0;if(c){b=c.limit;h=c.offset||0;f=w(c.threshold,f);var k=c.context;g=c.suggest}if(a&&(a=this.encode(a),e=a.length,1<e)){c=z();var m=[];for(let q=0,r=0,v;q<e;q++)if((v=a[q])&&v.length>=this.B&&!c[v])if(this.A||g||this.map[v])m[r++]=v,c[v]=1;else return d;a=m;e=a.length}if(!e)return d;b||(b=100);c=this.C-f;f=this.l-f;k=this.depth&&1<e&&!1!==k;m=0;let l;k?(l=a[0],m=1):1<e&&a.sort(aa);for(let q,r;m<e;m++){r=
a[m];k?(q=ta(this,d,g,f,b,h,2===e,r,l),g&&!1===q&&d.length||(l=r)):q=ta(this,d,g,c,b,h,1===e,r);if(q)return q;if(g&&m===e-1){let v=d.length;if(!v){if(k){k=0;m=-1;continue}return d}if(1===v)return ua(d[0],b,h)}}return ma(d,b,h,g)};
function ta(a,b,c,d,e,f,g,h,k){let m=[],l=k?a.h:a.map;a.A||(l=va(l,h,k,a.G));if(l){let q=0;d=Math.min(l.length,d);for(let r=0,v=0,p,n;r<d&&!(p=l[r],a.A&&(p=va(p,h,k,a.G)),p&&g&&(n=p.length,n<=f?(f-=n,p=null):f&&(p=p.slice(f),f=0)),p&&(m[q++]=p,g&&(v+=p.length,v>=e)));r++);if(q){if(g)return ua(m,e,0);b[b.length]=m;return}}return!c&&m}function ua(a,b,c){a=1===a.length?a[0]:[].concat.apply([],a);return c||a.length>b?a.slice(c,c+b):a}
function va(a,b,c,d){c?(d=d&&b>c,a=(a=a[d?b:c])&&a[d?c:b]):a=a[b];return a}u.contain=function(a){return!!this.register[a]};u.update=function(a,b){return this.remove(a).add(a,b)};
u.remove=function(a,b){const c=this.register[a];if(c){if(this.o)for(let d=0,e;d<c.length;d++)e=c[d],e.splice(e.indexOf(a),1);else M(this.map,a,this.C-this.threshold,this.A),this.depth&&M(this.h,a,this.l-this.s,this.A);b||delete this.register[a];if(this.cache){b=this.cache;for(let d=0,e,f;d<b.h.length;d++)f=b.h[d],e=b.cache[f],-1!==e.indexOf(a)&&(b.h.splice(d--,1),delete b.cache[f])}}return this};
function M(a,b,c,d,e){let f=0;if(a.constructor===Array)if(e)b=a.indexOf(b),-1!==b?1<a.length&&(a.splice(b,1),f++):f++;else{e=Math.min(a.length,c);for(let g=0,h;g<e;g++)if(h=a[g])f=M(h,b,c,d,e),d||f||delete a[g]}else for(let g in a)(f=M(a[g],b,c,d,e))||delete a[g];return f}u.searchCache=oa;
u.export=function(a,b,c,d,e){let f,g;switch(e||(e=0)){case 0:f="reg";if(this.o){g=z();for(let h in this.register)g[h]=1}else g=this.register;break;case 1:f="cfg";g={doc:0,opt:this.A?1:0};break;case 2:f="map";g=this.map;break;case 3:f="ctx";g=this.h;break;default:return}sa(a,b||this,c?c+"."+f:f,d,e,g);return!0};u.import=function(a,b){if(b)switch(A(b)&&(b=JSON.parse(b)),a){case "cfg":this.A=!!b.opt;break;case "reg":this.o=!1;this.register=b;break;case "map":this.map=b;break;case "ctx":this.h=b}};la(K.prototype);function wa(a){var b=self._index;a=a.data;const c=a.args;var d=a.task;switch(d){case "init":b=a.options||{};a=a.factory;d=b.encode;b.cache=!1;d&&0===d.indexOf("function")&&(b.encode=Function("return "+d)());a?(Function("return "+a)()(self),self._index=new self.FlexSearch.Index(b),delete self.FlexSearch):self._index=new K(b);break;default:b=b[d].apply(b,c),postMessage("search"===d?b:null)}};function N(a,b){var c;B(a)&&(b=a);b?C(c=b.encode)&&(b.encode=c.toString()):b={};(a=(self||window)._factory)&&(a=a.toString());c=self.exports;if(this.m=xa(a,c,b.worker)){this.h=null;var d=this;if(c)this.m.on("message",function(e){d.h(e)});else this.m.onmessage=function(e){d.h(e.data)};this.m.postMessage({task:"init",factory:a,options:b})}}O("add");O("append");O("search");O("update");O("remove");
function O(a){N.prototype[a]=N.prototype[a+"Async"]=function(){const b=this,c=[].slice.call(arguments);var d=c[c.length-1];let e;C(d)&&(e=d,c.splice(c.length-1,1));d=new ka(function(f){setTimeout(function(){b.m.postMessage({task:a,args:c});b.h=f})});return e?(d.then(e),this):d}}
function xa(a,b,c){let d;try{d=b?eval('new (require("worker_threads")["Worker"])("../dist/node/node.js")'):a?new Worker(URL.createObjectURL(new Blob(["onmessage="+wa.toString()],{type:"text/javascript"}))):new Worker(A(c)?c:"worker/worker.js",{type:"module"})}catch(e){}return d};function R(a){if(!(this instanceof R))return new R(a);var b;a||(a={});this.N=[];this.h=[];this.D=[];this.register=z();this.key=(b=a.key)&&S(b,this.D)||"id";this.o=w(a.fastupdate,!0);this.J=!!(b=a.extern);this.H=!this.J&&(b=a.store)&&!0!==b&&[];this.store=b&&(this.J?b:z());this.K=(b=a.tag)&&S(b,this.D);this.l=b&&z();this.cache=(b=a.cache)&&new J(b);a.cache=!1;this.m=a.worker;this.async=!1;b=a;a=z();let c=b.doc;if(A(c))c=[c];else if(c.constructor!==Array){var d=c;c=Object.keys(c)}for(let e=0,f,g;e<
c.length;e++)f=c[e],A(f)?d&&(g=d[f]):(g=f,f=f.field),g=B(g)?Object.assign({},b,g):b,this.m&&(a[f]=new N(g),a[f].m||(this.m=!1)),this.m||(a[f]=new K(g,this.register)),this.N[e]=S(f,this.D),this.h[e]=f;if(this.H)for(d=b.store,A(d)&&(d=[d]),b=0;b<d.length;b++)this.H[b]=S(d[b],this.D);this.s=a}function S(a,b){const c=a.split(":");let d=0;for(let e=0;e<c.length;e++)a=c[e],0<=a.indexOf("[]")&&(a=a.substring(0,a.length-2))&&(b[d]=!0),a&&(c[d++]=a);d<c.length&&(c.length=d);return 1<d?c:c[0]}
function T(a,b){if(A(b))a=a[b];else for(let c=0;a&&c<b.length;c++)a=a[b[c]];return a}function U(a,b,c,d,e){a=a[e];if(d===c.length-1)b[e]=a;else if(a)if(a.constructor===Array)for(b=b[e]=Array(a.length),e=0;e<a.length;e++)U(a,b,c,d,e);else b=b[e]||(b[e]=z()),e=c[++d],U(a,b,c,d,e)}
function V(a,b,c,d,e,f,g,h){a=a[g];if(d===b.length-1){if(a.constructor===Array){if(c[d]){for(b=0;b<a.length;b++)e.add(f,a[b],!0,!0);return}a=a.join(" ")}e.add(f,a,h,!0)}else if(a)if(a.constructor===Array)for(g=0;g<a.length;g++)V(a,b,c,d,e,f,g,h);else g=b[++d],V(a,b,c,d,e,f,g,h)}u=R.prototype;
u.add=function(a,b,c){B(a)&&(b=a,a=T(b,this.key));if(b&&(a||0===a)){if(this.register[a])return this.update(a,b);for(let d=0,e,f;d<this.h.length;d++)f=this.h[d],e=this.N[d],A(e)&&(e=[e]),V(b,e,this.D,0,this.s[f],a,e[0],c);if(this.K){let d=T(b,this.K),e=z();A(d)&&(d=[d]);for(let f=0,g,h;f<d.length;f++)if(g=d[f],!e[g]&&(e[g]=1,h=this.l[g]||(this.l[g]=[]),!c||-1===h.indexOf(a)))if(h[h.length]=a,this.o){const k=this.register[a]||(this.register[a]=[]);k[k.length]=h}}if(this.store&&!this.J){let d;if(this.H){d=
z();for(let e=0,f;e<this.H.length;e++)f=this.H[e],A(f)?d[f]=b[f]:U(b,d,f,0,f[0])}this.store[a]=d||b}}return this};u.append=function(a,b){return this.add(a,b,!0)};u.update=function(a,b){return this.remove(a).add(a,b)};
u.remove=function(a){B(a)&&(a=T(a,this.key));if(this.register[a]){var b=this.o&&!this.m;for(var c=0;c<this.h.length&&(this.s[this.h[c]].remove(a,b),!b);c++);if(this.K&&!b)for(let d in this.l)b=this.l[d],c=b.indexOf(a),-1!==c&&(1<b.length?b.splice(c,1):delete this.l[d]);this.store&&!this.J&&delete this.store[a];delete this.register[a]}return this};
u.search=function(a,b,c,d){B(a)?(c=a,a=c.query):B(b)&&(c=b,b=0);let e=[],f=[],g,h,k,m,l,q,r,v=0;if(c)if(c.constructor===Array)k=c,c=null;else if(k=(g=c.pluck)||c.field||c.doc,l=c.tag,h=this.store&&c.enrich,q="and"===c.bool,b=c.limit||100,r=c.offset||0,k&&(A(k)?k=[k]:k.constructor!==Array&&(m=k,k=Object.keys(k))),l&&(A(l)&&(l=[l]),!a)){for(let n=0,t;n<l.length;n++)if(t=ya.call(this,l[n],b,r,h))e[e.length]=t,v++;return v?e:[]}k||(k=this.h);q=q&&(1<k.length||l&&1<l.length);const p=!d&&(this.m||this.async)&&
[];for(let n=0,t,y,H;n<k.length;n++){let P;y=k[n];A(y)?m&&(P=m[y]):(P=y,y=y.field);if(p)p[n]=this.s[y].searchAsync(a,b,P||c);else{d?t=d[n]:t=this.s[y].search(a,b,P||c);H=t.length;if(l&&H){const I=[];let pa=0;q&&(I[0]=[t]);for(let W=0,qa,Q;W<l.length;W++)if(qa=l[W],H=(Q=this.l[qa])&&Q.length)pa++,I[I.length]=q?[Q]:Q;pa&&(t=q?ma(I,b||100,r||0):na(t,I),H=t.length)}if(H)f[v]=y,e[v++]=t;else if(q)return[]}}if(p){const n=this;return new Promise(function(t){Promise.all(p).then(function(y){t(n.search(a,b,
c,y))})})}if(!v)return[];if(g&&(!h||!this.store))return e[0];for(let n=0,t;n<f.length;n++){t=e[n];t.length&&h&&(t=za.call(this,t));if(g)return t;e[n]={field:f[n],result:t}}return e};function ya(a,b,c,d){let e=this.l[a],f=e&&e.length-c;if(f&&0<f){if(f>b||c)e=e.slice(c,c+b);d&&(e=za.call(this,e));return{tag:a,result:e}}}function za(a){const b=Array(a.length);for(let c=0,d;c<a.length;c++)d=a[c],b[c]={key:d,doc:this.store[d]};return b}u.contain=function(a){return!!this.register[a]};u.get=function(a){return this.store[a]};
u.set=function(a,b){this.store[a]=b;return this};u.searchCache=oa;u.export=function(a,b,c,d,e){e||(e=0);d||(d=0);if(d<this.h.length){const f=this.h[d],g=this.s[f];b=this;setTimeout(function(){g.export(a,b,e?f.replace(":","-"):"",d,e++)||(d++,e=1,b.export(a,b,f,d,e))})}else{let f;switch(e){case 1:c="tag";f=this.l;break;case 2:c="store";f=this.store;break;default:return}sa(a,this,c,d,e,f)}};
u.import=function(a,b){if(b)switch(A(b)&&(b=JSON.parse(b)),a){case "tag":this.l=b;break;case "reg":this.o=!1;this.register=b;for(let d=0,e;d<this.h.length;d++)e=this.s[this.h[d]],e.register=b,e.o=!1;break;case "store":this.store=b;break;default:a=a.split(".");const c=a[0];a=a[1];c&&a&&this.s[c].import(a,b)}};la(R.prototype);const Aa=/[\W_]+/,Ba=[D("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),"a",D("[\u00e8\u00e9\u00ea\u00eb]"),"e",D("[\u00ec\u00ed\u00ee\u00ef]"),"i",D("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),"o",D("[\u00f9\u00fa\u00fb\u00fc\u0171]"),"u",D("[\u00fd\u0177\u00ff]"),"y",D("\u00f1"),"n",D("[\u00e7c]"),"k",D("\u00df"),"s",D(" & ")," and "];function Ca(a){return ia(this,ca(a).toLowerCase(),!a.normalize&&Ba,Aa)};var Ea={encode:Da,F:!1,I:"strict"};const Fa=/[^a-z0-9]+/,Ga={b:"p",v:"f",w:"f",z:"s",x:"s","\u00df":"s",d:"t",n:"m",c:"k",g:"k",j:"k",q:"k",i:"e",y:"e",u:"o"};function Da(a){a=Ca.call(this,a).join(" ");const b=[];if(a){const c=a.split(Fa),d=c.length;for(let e=0,f,g=0;e<d;e++)if((a=c[e])&&(!this.filter||!this.filter[a])){f=a[0];let h=Ga[f]||f,k=h;for(let m=1;m<a.length;m++){f=a[m];const l=Ga[f]||f;l&&l!==k&&(h+=l,k=l)}b[g++]=h}}return b};var Ia={encode:Ha,F:!1,I:""};const Ja=[D("ae"),"a",D("oe"),"o",D("sh"),"s",D("th"),"t",D("ph"),"f",D("pf"),"f"];function Ha(a,b){a&&(a=Da.call(this,a).join(" "),2<a.length&&(a=E(a,Ja)),b||(1<a.length&&(a=ea(a)),a&&(a=a.split(" "))));return a};var La={encode:Ka,F:!1,I:""};const Ma=D("(?!\\b)[aeiouy]");function Ka(a){a&&(a=Ha.call(this,a,!0),1<a.length&&(a=a.replace(Ma,"")),1<a.length&&(a=ea(a)),a&&(a=a.split(" ")));return a};F["latin:simple"]={encode:Ca,F:!1,I:""};F["latin:balance"]=Ea;F["latin:advanced"]=Ia;F["latin:extra"]=La;const X=self;let Y;const Z={Index:K,Document:R,Worker:N,registerCharset:function(a,b){F[a]=b},registerLanguage:function(a,b){ja[a]=b}};(Y=X.define)&&Y.amd?Y([],function(){return Z}):X.exports?X.exports=Z:X.FlexSearch=Z;}(this));
