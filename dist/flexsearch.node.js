/**!
 * FlexSearch.js v0.7.0
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/flexsearch
 */
(function(){'use strict';function t(a){return"string"===typeof a}function y(a){return a.constructor===Array}function z(a){return"function"===typeof a}function B(a){return"object"===typeof a}function D(a){return"undefined"===typeof a}function aa(a){for(var b=Array(a),c=0;c<a;c++)b[c]=G();return b}function G(){return Object.create(null)}function H(a,b){for(var c=0,e=b.length;c<e&&(a=a.replace(b[c],b[c+1]),a);c+=2);return a}function L(a){return new RegExp(a,"g")}
function ba(a){for(var b="",c="",e=0,d=a.length,h=void 0;e<d;e++)(h=a[e])!==c&&(b+=c=h);return b}function M(a,b,c,e){if(b&&(c&&b&&(b=H(b,c)),b&&a.o&&(b=H(b,a.o)),a.s&&1<b.length&&(b=H(b,a.s)),b&&(e||""===e)&&(b=b.split(e),a.filter))){a=a.filter;c=b.length;e=[];for(var d=0,h=0;d<c;d++){var f=b[d];f&&!a[f]&&(e[h++]=f)}b=e}return b};O.prototype.export=function(a){var b=!a||D(a.serialize)||a.serialize;if(this.a){var c=!a||D(a.doc)||a.doc,e=!a||D(a.index)||a.index;a=[];var d=0;if(e)for(e=this.a.keys;d<e.length;d++){var h=this.a.index[e[d]];a[d]=[h.j,h.h,Object.keys(h.f)]}c&&(a[d]=this.m)}else a=[this.j,this.h,Object.keys(this.f)];b&&(a=JSON.stringify(a));return a};
O.prototype.import=function(a,b){if(!b||D(b.serialize)||b.serialize)a=JSON.parse(a);var c={};if(this.a){var e=!b||D(b.doc)||b.doc,d=0;if(!b||D(b.index)||b.index){b=this.a.keys;for(var h=b.length,f=a[0][2];d<f.length;d++)c[f[d]]=1;for(d=0;d<h;d++){f=this.a.index[b[d]];var g=a[d];g&&(f.j=g[0],f.h=g[1],f.f=c)}}e&&(this.m=B(e)?e:a[d])}else{e=a[2];for(d=0;d<e.length;d++)c[e[d]]=1;this.j=a[0];this.h=a[1];this.f=c}};O.prototype.find=function(a,b){return this.where(a,b,1)[0]||null};
O.prototype.where=function(a,b,c,e){var d=this.m,h=[],f=0,g;if(B(a)){c||(c=b);var k=Object.keys(a);var m=k.length;var r=!1;if(1===m&&"id"===k[0])return[d[a.id]];if((g=this.w)&&!e)for(var q=0;q<g.length;q++){var p=g[q],l=a[p];if(!D(l)){var n=this.u[p]["@"+l];if(0===--m)return n;k.splice(k.indexOf(p),1);delete a[p];break}}g=Array(m);for(q=0;q<m;q++)g[q]=k[q].split(":")}else{if(z(a)){b=e||Object.keys(d);c=b.length;for(k=0;k<c;k++)m=d[b[k]],a(m)&&(h[f++]=m);return h}if(D(b))return[d[a]];if("id"===a)return[d[b]];
k=[a];m=1;g=[a.split(":")];r=!0}e=n||e||Object.keys(d);q=e.length;for(p=0;p<q;p++){l=n?e[p]:d[e[p]];for(var w=!0,u=0;u<m;u++){r||(b=a[k[u]]);var v=g[u],x=v.length,A=l;if(1<x)for(var C=0;C<x;C++)A=A[v[C]];else A=A[v[0]];if(A!==b){w=!1;break}}if(w&&(h[f++]=l,c&&f===c))break}return h};function S(a){this.clear();this.l=!0!==a&&a}S.prototype.clear=function(){this.cache=G();this.count=G();this.index=G();this.b=[]};S.prototype.set=function(a,b){if(this.l&&D(this.cache[a])){var c=this.b.length;if(c===this.l){c--;var e=this.b[c];delete this.cache[e];delete this.count[e];delete this.index[e]}this.b[c]=a;this.index[a]=c;this.count[a]=-1;this.cache[a]=b;this.get(a)}else this.cache[a]=b};
S.prototype.get=function(a){var b=this.cache[a];if(this.l&&b){var c=++this.count[a],e=this.index,d=e[a];if(0<d){for(var h=this.b,f=d;this.count[h[--d]]<=c&&-1!==d;);d++;if(d!==f){for(c=f;c>d;c--)f=h[c-1],h[c]=f,e[f]=c;h[d]=a;e[a]=d}}}return b};var da={memory:{encode:"extra",i:"strict",threshold:0,g:1},speed:{encode:"icase",i:"strict",threshold:1,g:3,depth:2},match:{encode:"extra",i:"full",threshold:1,g:3},score:{encode:"extra",i:"strict",threshold:1,g:9,depth:4},balance:{encode:"balance",i:"strict",threshold:0,g:3,depth:3},fast:{encode:"icase",i:"strict",threshold:8,g:9,depth:1}};var fa={encode:ea,c:!1},ha=/[\W_]+/;function ea(a){return M(this,a.toLowerCase(),!1,ha)};var ia={encode:ea,tokenize:"strict",cache:!1,async:!1,worker:!1,rtl:!1,doc:!1,resolution:9,threshold:0,depth:0},ja=0,U={},V={};function O(a){if(!(this instanceof O))return new O(a);var b=a&&a.id;this.id=b||0===b?b:ja++;this.init(a);ka(this,"index",function(){return Object.keys(this.f)});ka(this,"length",function(){return this.index.length})}O.registerCharset=function(a,b){V[a]=b;return O};O.registerLanguage=function(a,b){V[a]=b;return O};
O.prototype.init=function(a){var b;if(t(a))a=da[a];else if(b=a.preset)a=Object.assign({},da[b],a);this.encode||(a?a=Object.assign({},ia,a):a=ia);if(a){this.async=a.async;var c=a.charset;var e=a.lang;this.v=(t(c)?V[c].i:c&&c.i)||a.tokenize;this.c=t(b=a.rtl||c)?V[b].c:c&&c.c||b;this.threshold=a.threshold;this.g=(b=a.resolution)<=this.threshold?this.threshold+1:b;this.depth="strict"===this.v&&a.depth||0;this.encode=t(b=a.encode||c)?V[-1===b.indexOf(":")?b+":default":b].encode:c&&c.encode||b;this.o=(b=
a.matcher||e)&&la(t(b)?U[b].o:e&&e.o||b,!1);if(c=b=a.filter||e){c=t(b)?U[b].filter:e&&e.filter||b;for(var d=G(),h=0,f=c.length;h<f;h++)d[c[h]]=1;c=d}this.filter=c;this.s=(b=a.stemmer||e)&&la(t(b)?U[b].s:e&&e.s||b,!0);(this.a=c=(b=a.doc)&&ma(b))&&(a.doc=null)}this.j=aa(this.g-(this.threshold||0));this.h=G();this.f={};if(c){this.m=G();b=c.index={};e=c.keys=[];d=c.field;h=c.tag;f=c.store;y(c.id)||(c.id=c.id.split(":"));if(f){var g=G();if(t(f))g[f]=1;else if(y(f))for(var k=0;k<f.length;k++)g[f[k]]=1;
else B(f)&&(g=f);c.store=g}if(h){this.u=G();f=G();if(d)if(t(d))f[d]=a;else if(y(d))for(g=0;g<d.length;g++)f[d[g]]=a;else B(d)&&(f=d);y(h)||(c.tag=h=[h]);for(d=0;d<h.length;d++)this.u[h[d]]=G();this.w=h;d=f}if(d){if(!y(d))if(B(d)){var m=d;c.field=d=Object.keys(d)}else c.field=d=[d];for(c=0;c<d.length;c++)h=d[c],y(h)||(m&&(a=m[h]),e[c]=h,d[c]=h.split(":")),b[h]=new O(a)}}if(b=a.cache)this.l=!0,this.b=new S(b);return this};
function ma(a){var b=G(),c;for(c in a)if(a.hasOwnProperty(c)){var e=a[c];b[c]=y(e)?e.slice(0):B(e)?ma(e):e}return b}
O.prototype.add=function(a,b,c,e,d){if(this.a&&B(a))return W(this,"add",a,b);if(b&&t(b)&&(a||0===a)){if(this.f[a]&&!e)return this.update(a,b);if(!d){if(this.async){var h=this;d=new Promise(function(C){setTimeout(function(){h.add(a,b,null,e,!0);h=null;C()})});if(c)d.then(c);else return d;return this}if(c)return this.add(a,b,null,e,!0),c(),this}b=this.encode(b);if(!b.length)return this;c=b;d=G();d._ctx=G();for(var f=c.length,g=this.threshold,k=this.depth,m=this.g,r=this.j,q=this.c,p=0;p<f;p++){var l=
c[p];if(l){var n=l.length,w=(q?p+1:f-p)/f,u="";switch(this.v){case "reverse":case "both":for(var v=n;--v;)u=l[v]+u,X(r,d,u,a,q?1:(n-v)/n,w,g,m-1);u="";case "forward":for(v=0;v<n;v++)u+=l[v],X(r,d,u,a,q?(v+1)/n:1,w,g,m-1);break;case "full":for(v=0;v<n;v++)for(var x=(q?v+1:n-v)/n,A=n;A>v;A--)u=l.substring(v,A),X(r,d,u,a,x,w,g,m-1);break;default:if(n=X(r,d,l,a,1,w,g,m-1),k&&1<f&&n>=g)for(n=d._ctx[l]||(d._ctx[l]=G()),l=this.h[l]||(this.h[l]=aa(m-(g||0))),w=p-k,u=p+k+1,0>w&&(w=0),u>f&&(u=f);w<u;w++)w!==
p&&X(l,n,c[w],a,0,m-(w<p?p-w:w-p),g,m-1)}}}this.f[a]=1;this.l=!1}return this};
function W(a,b,c,e){if(y(c)){var d=c.length;if(d--){for(var h=0;h<d;h++)W(a,b,c[h]);return W(a,b,c[d],e)}}else{var f=a.a.index,g=a.a.keys,k=a.a.tag;h=a.a.store;var m;var r=a.a.id;d=c;for(var q=0;q<r.length;q++)d=d[r[q]];if("remove"===b&&(delete a.m[d],r=g.length,r--)){for(a=0;a<r;a++)f[g[a]].remove(d);return f[g[r]].remove(d,e)}if(k){for(m=0;m<k.length;m++){var p=k[m];var l=c;r=p.split(":");for(q=0;q<r.length;q++)l=l[r[q]];l="@"+l}m=a.u[p];m=m[l]||(m[l]=[])}r=a.a.field;k=0;for(p=r.length;k<p;k++){q=
r[k];l=c;for(var n=0;n<q.length;n++)l=l[q[n]];q=f[g[k]];"add"===b?q.add(d,l,k===p-1&&e):q.update(d,l,k===p-1&&e)}if(h){e=Object.keys(h);b=G();for(f=0;f<e.length;f++)if(g=e[f],h[g])for(g=g.split(":"),k=r=void 0,p=0;p<g.length;p++)l=g[p],r=(r||c)[l],k=(k||b)[l]=r;c=b}m&&(m[m.length]=c);a.m[d]=c}return a}O.prototype.update=function(a,b,c){if(this.a&&B(a))return W(this,"update",a,b);this.f[a]&&t(b)&&(this.remove(a),this.add(a,b,c,!0));return this};
O.prototype.remove=function(a,b,c){if(this.a&&B(a))return W(this,"remove",a,b);if(this.f[a]){if(!c){if(this.async&&"function"!==typeof importScripts){var e=this;c=new Promise(function(d){setTimeout(function(){e.remove(a,null,!0);e=null;d()})});if(b)c.then(b);else return c;return this}if(b)return this.remove(a,null,!0),b(),this}for(b=0;b<this.g-(this.threshold||0);b++)na(this.j[b],a);this.depth&&na(this.h,a);delete this.f[a];this.l=!1}return this};var Y;
function oa(a,b,c,e,d,h,f,g,k,m,r){e=pa(e,g?0:h,k,f,c,m,r);if(k){k=e.page;var q=e.next;e=e.result}if(g)e=a.where(g,null,h,e);else{c=e;e=a.m;h=c.length;f=Array(h);for(g=0;g<h;g++)f[g]=e[c[g]];e=f}d&&(z(d)||(Y=d.split(":"),1<Y.length?d=qa:(Y=Y[0],d=ra)),e.sort(d));e=Z(k,q,e);a.b&&a.b.set(b,e);return e}
O.prototype.search=function(a,b,c,e){if(B(b)){if(y(b))for(var d=0;d<b.length;d++)b[d].query=a;else b.query=a;a=b;b=1E3}else b&&z(b)?(c=b,b=1E3):b||0===b||(b=1E3);var h=[],f=a;if(B(a)&&!y(a)){c||(c=a.callback)&&(f.callback=null);var g=a.sort;var k=a.page;b=a.limit;var m=a.threshold;var r=a.suggest;a=a.query}if(this.a){m=this.a.index;var q=f.where,p=f.bool||"or",l=f.field,n=p,w,u;if(l)y(l)||(l=[l]);else if(y(f)){var v=f;l=[];n=[];for(var x=0;x<f.length;x++)e=f[x],d=e.bool||p,l[x]=e.field,n[x]=d,"not"===
d?w=!0:"and"===d&&(u=!0)}else l=this.a.keys;p=l.length;for(x=0;x<p;x++)v&&(f=v[x]),k&&!t(f)&&(f.page=null,f.limit=0),h[x]=m[l[x]].search(f,0);if(c)return c(oa(this,a,n,h,g,b,r,q,k,u,w));if(this.async){var A=this;return new Promise(function(ca){Promise.all(h).then(function(va){ca(oa(A,a,n,va,g,b,r,q,k,u,w))})})}return oa(this,a,n,h,g,b,r,q,k,u,w)}m||(m=this.threshold||0);if(!e){if(this.async&&"function"!==typeof importScripts){var C=this;m=new Promise(function(ca){setTimeout(function(){ca(C.search(f,
b,null,!0));C=null})});if(c)m.then(c);else return m;return this}if(c)return c(this.search(f,b,null,!0)),this}if(!a||!t(a))return h;f=a;if(this.b)if(this.l){if(c=this.b.get(a))return c}else this.b.clear(),this.l=!0;f=this.encode(f);if(!f.length)return h;c=f;v=c.length;e=!0;d=[];var P=G(),Q=0;1<v&&(this.depth?p=!0:c.sort(sa));if(!p||(x=this.h))for(var T=this.g;Q<v;Q++){var E=c[Q];if(E){if(p){if(!l)if(x[E])l=E,P[E]=1;else if(!r)return h;if(r&&Q===v-1&&!d.length)p=!1,E=l||E,P[E]=0;else if(!l)continue}if(!P[E]){var F=
[],N=!1,I=0,J=p?x[l]:this.j;if(J)for(var R=void 0,K=0;K<T-m;K++)if(R=J[K]&&J[K][E])F[I++]=R,N=!0;if(N)l=E,d[d.length]=1<I?F.concat.apply([],F):F[0];else if(!r){e=!1;break}P[E]=1}}}else e=!1;e&&(h=pa(d,b,k,r));this.b&&this.b.set(a,h);return h};O.prototype.info=function(){return{id:this.id,items:this.length,matcher:this.o.length,worker:this.A,threshold:this.threshold,depth:this.depth,resolution:this.g,contextual:this.depth&&"strict"===this.v}};O.prototype.clear=function(){return this.destroy().init()};
O.prototype.destroy=function(){this.b&&(this.b.clear(),this.b=null);this.j=this.h=this.f=null;if(this.a){for(var a=this.a.keys,b=0;b<a.length;b++)this.a.index[a[b]].destroy();this.a=this.m=null}return this};function ka(a,b,c){Object.defineProperty(a,b,{get:c})}function X(a,b,c,e,d,h,f,g){if(b[c])return b[c];d=d?(g-(f||g/1.5))*h+(f||g/1.5)*d:h;b[c]=d;d>=f&&(a=a[g-(d+.5>>0)],a=a[c]||(a[c]=[]),a[a.length]=e);return d}
function na(a,b){if(a)for(var c=Object.keys(a),e=0,d=c.length;e<d;e++){var h=c[e],f=a[h];if(f)for(var g=0,k=f.length;g<k;g++)if(f[g]===b){1===k?delete a[h]:f.splice(g,1);break}else B(f[g])&&na(f[g],b)}}function la(a,b){for(var c=Object.keys(a),e=c.length,d=[],h="",f=0,g=0,k;g<e;g++){var m=c[g];(k=a[m])?(d[f++]=L(b?"(?!\\b)"+m+"(\\b|_)":m),d[f++]=k):h+=(h?"|":"")+m}h&&(d[f++]=L(b?"(?!\\b)("+h+")(\\b|_)":"("+h+")"),d[f]="");return d}function sa(a,b){return b.length-a.length}
function ra(a,b){return a[Y]-b[Y]}function qa(a,b){for(var c=Y.length,e=0;e<c;e++)a=a[Y[e]],b=b[Y[e]];return a-b}function Z(a,b,c){return a?{page:a,next:b?""+b:null,result:c}:c}
function pa(a,b,c,e,d,h,f){var g=[];if(!0===c){c="0";var k=""}else k=c&&c.split(":");var m=a.length;if(1<m){var r=G(),q=[],p,l=0,n,w=!0,u=0,v;if(k)if(2===k.length){var x=k;k=!1}else k=v=parseInt(k[0],10);if(f){for(p=G();l<m;l++)if("not"===d[l]){var A=a[l];var C=A.length;for(n=0;n<C;n++)p["@"+A[n]]=1}else var P=l+1;if(D(P))return Z(c,K,g);l=0}else var Q=t(d)&&d;for(var T;l<m;l++){var E=l===(P||m)-1;if(!Q||!l)if((n=Q||d&&d[l])&&"and"!==n)if("or"===n)T=!1;else continue;else T=h=!0;A=a[l];if(C=A.length){if(w)if(I){var F=
I.length;for(n=0;n<F;n++){w=I[n];var N="@"+w;f&&p[N]||(r[N]=1,h||(g[u++]=w))}var I=null;w=!1}else{I=A;continue}N=!1;for(n=0;n<C;n++){F=A[n];var J="@"+F,R=h?r[J]||0:l;if(!(!R&&!e||f&&p[J]||!h&&r[J]))if(R===l){if(E){if(!v||--v<u)if(g[u++]=F,b&&u===b)return Z(c,u+(k||0),g)}else r[J]=l+1;N=!0}else e&&(J=q[R]||(q[R]=[]),J[J.length]=F)}if(T&&!N&&!e)break}else if(T&&!e)return Z(c,K,A)}if(I)if(l=I.length,f)for(n=k?parseInt(k,10):0;n<l;n++)a=I[n],p["@"+a]||(g[u++]=a);else g=I;if(e)for(u=g.length,x?(l=parseInt(x[0],
10)+1,n=parseInt(x[1],10)+1):(l=q.length,n=0);l--;)if(F=q[l]){for(C=F.length;n<C;n++)if(e=F[n],!f||!p["@"+e])if(g[u++]=e,b&&u===b)return Z(c,l+":"+n,g);n=0}}else!m||d&&"not"===d[0]||(g=a[0],k&&(k=parseInt(k[0],10)));if(b){f=g.length;k&&k>f&&(k=0);k=k||0;var K=k+b;K<f?g=g.slice(k,K):(K=0,k&&(g=g.slice(k)))}return Z(c,K,g)};var ua={encode:ta,c:!1},wa=/[\W_]+/,xa=[L("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),"a",L("[\u00e8\u00e9\u00ea\u00eb]"),"e",L("[\u00ec\u00ed\u00ee\u00ef]"),"i",L("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),"o",L("[\u00f9\u00fa\u00fb\u00fc\u0171]"),"u",L("[\u00fd\u0177\u00ff]"),"y",L("\u00f1"),"n",L("[\u00e7c]"),"k",L("\u00df"),"s",L(" & ")," and "];function ta(a,b){b||(b=this);return M(b,a.toLowerCase(),xa,wa)};var ya=[L("ae"),"a",L("ai"),"ei",L("ay"),"ei",L("ey"),"ei",L("oe"),"o",L("ue"),"u",L("ie"),"i",L("sz"),"s",L("zs"),"s",L("sh"),"s",L("ck"),"k",L("cc"),"k",L("th"),"t",L("dt"),"t",L("ph"),"f",L("pf"),"f",L("ou"),"o",L("uo"),"u"];function za(a,b){a&&(a=ta(a,this).join(" "),2<a.length&&(a=H(a,ya)),b||(1<a.length&&(a=ba(a)),a&&(a=a.split(" "))));return a};var Ba={encode:Aa,c:!1},Ca=/[\W_]+/;function Aa(a){return M(this,a.toLowerCase(),!1,Ca)};var Ea={encode:Da,c:!1},Fa=[L("(?!\\b)p"),"b",L("(?!\\b)z"),"s",L("(?!\\b)[cgq]"),"k",L("(?!\\b)n"),"m",L("(?!\\b)d"),"t",L("(?!\\b)[vw]"),"f",L("(?!\\b)[aeiouy]"),""];function Da(a){a&&(a=za(a,!0),1<a.length&&(a=H(a,Fa)),1<a.length&&(a=ba(a)),a&&(a=a.split(" ")));return a};var Ha={encode:Ga,c:!1,i:"strict"},Ia=/[^a-z]+/;function Ga(a){a=M(this,a.toLowerCase(),!1,!1);var b=[];if(a)for(var c=a.split(Ia),e=c.length,d=0,h=0;d<e;d++)if((a=c[d])&&2<a.length&&(!this.filter||!this.filter[a])){for(var f=a[0],g=Ja(f),k=1;k<a.length;k++){var m=Ja(a[k]);if(m!==g&&(f+=m,g=m,4===f.length))break}b[h++]=(f+"0000").substring(0,4)}return b}
function Ja(a){switch(a){case "b":case "f":case "p":case "v":return 1;case "c":case "g":case "j":case "k":case "q":case "s":case "x":case "z":return 2;case "d":case "t":return 3;case "l":return 4;case "m":case "n":return 5;case "r":return 6}return""};var La={encode:Ka,c:!0},Ma=/[\W_]+/;function Ka(a){return M(this,a,!1,Ma)};var Oa={encode:Na,c:!1,i:"strict"},Pa=/[\x00-\x7F]/g;function Na(a){return M(this,a.replace(Pa,""),!1,"")};var Ra={encode:Qa,c:!1},Sa=/[\W_]+/;function Qa(a){return M(this,a,!1,Sa)};V["latin:advanced"]={encode:za,c:!1};V["latin:balance"]=Ba;V["latin:default"]=fa;V["latin:extra"]=Ea;V["latin:simple"]=ua;V["latin:soundex"]=Ha;V["arabic:default"]=La;V["cjk:default"]=Oa;V["cyrillic:default"]=Ra;(function(){var a=this||window,b;(b=a.define)&&b.amd?b([],function(){return O}):"object"===typeof a.exports?a.module.exports=O:a.FlexSearch=O})();}).call(this);
