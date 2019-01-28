/*
 FlexSearch v0.3.3
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/flexsearch
*/
'use strict';(function(f,u,v){let k;(k=v.define)&&k.amd?k([],function(){return u}):(k=v.modules)?k[f.toLowerCase()]=u:"object"===typeof exports?module.exports=u:v[f]=u})("FlexSearch",function(){function f(a){a||(a=x);this.id=a.id||G++;this.init(a);u(this,"index",function(){return this.a});u(this,"length",function(){return Object.keys(this.a).length})}function u(a,b,c){Object.defineProperty(a,b,{get:c})}function v(a,b){for(let c=0;c<b.length;c+=2)a=a.replace(b[c],b[c+1]);return a}function k(a,b,c,
e,d,h,g){if(b[c])return b[c];d=d?(9-(g||6))*h+(g||6)*d:h;b[c]=d;d>=g&&(a=a[d+.5>>0],a=a[c]||(a[c]=[]),a[a.length]=e);return d}function z(a,b){if(a){const c=Object.keys(a);for(let e=0,d=c.length;e<d;e++){const d=c[e],g=a[d];if(g)for(let c=0,e=g.length;c<e;c++)if(g[c]===b){1===e?delete a[d]:g.splice(c,1);break}else"object"===typeof g[c]&&z(g[c],b)}}}function H(a,b){a=a.length-b.length;return 0>a?1:a?-1:0}function I(a,b){a=a.length-b.length;return 0>a?-1:a?1:0}function y(a){return"function"===typeof a}
function A(a){return"undefined"===typeof a}function C(a){const b=Array(a);for(let c=0;c<a;c++)b[c]=q();return b}function q(){return Object.create(null)}const x={encode:"icase",b:"forward",i:!1,cache:!1,async:!1,j:!1,threshold:0,depth:0},B=[];let G=0;const D=/\W+/g,E={},F={};(function(){const a=Object.getOwnPropertyNames({}.__proto__),b=q();for(let c=0;c<a.length;c++)b[a[c]]=1;return b})();f.create=function(a){return new f(a)};f.registerMatcher=function(a){for(let b in a)a.hasOwnProperty(b)&&B.push(new RegExp(b,
"g"),a[b]);return this};f.registerEncoder=function(a,b){w[a]=b.bind(w);return this};f.registerLanguage=function(a,b){E[a]=b.filter;F[a]=b.stemmer;return this};f.encode=function(a,b){return w[a](b)};f.prototype.init=function(a){this.h=[];a||(a=x);var b=a.profile,c={};this.b=a.tokenize||c.b||this.b||x.b;this.threshold=A(b=a.threshold)?c.threshold||this.threshold||x.threshold:b;this.depth=A(b=a.depth)?c.depth||this.depth||x.depth:b;this.f=(b=A(b=a.encode)?c.encode:b)&&w[b]&&w[b].bind(w)||(y(b)?b:this.f||
!1);(b=a.matcher)&&this.addMatcher(b);if(b=a.filter){b=E[b]||b;c=this.f;var e=q();if(b)for(let a=0;a<b.length;a++){const d=c?c(b[a]):b[a];e[d]=String.fromCharCode(65E3-b.length+a)}this.filter=b=e}if(b=a.stemmer){var d;a=F[b]||b;b=this.f;c=[];if(a)for(d in a)a.hasOwnProperty(d)&&(e=b?b(d):d,c.push(new RegExp("(?=.{"+(e.length+3)+",})"+e+"$","g"),b?b(a[d]):a[d]));this.stemmer=d=c}this.g=C(10);this.c=q();this.a=q();q();return this};f.prototype.encode=function(a){a&&B.length&&(a=v(a,B));a&&this.h.length&&
(a=v(a,this.h));a&&this.f&&(a=this.f(a));a&&this.stemmer&&(a=v(a,this.stemmer));return a};f.prototype.addMatcher=function(a){const b=this.h;for(const c in a)a.hasOwnProperty(c)&&b.push(new RegExp(c,"g"),a[c]);return this};f.prototype.add=function(a,b,c){if(b&&"string"===typeof b&&(a||0===a))if(this.a[a]&&!c)this.update(a,b);else{b=this.encode(b);if(!b.length)return this;c=this.b;b=y(c)?c(b):b.split(D);const f=q();f._ctx=q();const l=this.threshold,p=this.depth,r=this.g,n=b.length;for(let t=0;t<n;t++){var e=
b[t];if(e){var d=e.length,h=(n-t)/n,g="";switch(c){case "reverse":case "both":for(var m=d-1;1<=m;m--)g=e[m]+g,k(r,f,g,a,(d-m)/d,h,l);g="";case "forward":for(m=0;m<d;m++)g+=e[m],k(r,f,g,a,1,h,l);break;case "full":for(m=0;m<d;m++){const b=(d-m)/d;for(let c=d;c>m;c--)g=e.substring(m,c),k(r,f,g,a,b,h,l)}break;default:if(d=k(r,f,e,a,1,h,l),p&&1<n&&d>=l)for(d=f._ctx[e]||(f._ctx[e]=q()),e=this.c[e]||(this.c[e]=C(10)),h=t-p,g=t+p+1,0>h&&(h=0),g>n&&(g=n);h<g;h++)h!==t&&k(e,d,b[h],a,0,10-(h<t?t-h:h-t),l)}}}this.a[a]=
1}return this};f.prototype.update=function(a,b){this.a[a]&&"string"===typeof b&&(this.remove(a),this.add(a,b,!0));return this};f.prototype.remove=function(a){if(this.a[a]){for(let b=0;10>b;b++)z(this.g[b],a);this.depth&&z(this.c,a);delete this.a[a]}return this};f.prototype.search=function(a,b,c){var e=a,d=[];if("object"===typeof a){b=a.limit;var h=a.threshold;a=a.query}h||(h=this.threshold||0);y(b)?(c=b,b=1E3):b||0===b||(b=1E3);if(c)c(this.search(e,b,null,!0));else{if(!a||"string"!==typeof a)return d;
e=this.encode(a);if(!e.length)return d;a=this.b;a=y(a)?a(e):e.split(D);c=a.length;var g=!0;e=[];var f=q();if(1<c)if(this.depth){var k=!0;var l=a[0];f[l]=1}else a.sort(H);var p;if(!k||(p=this.c)[l])for(var r=k?1:0;r<c;r++){var n=a[r];if(n){if(!f[n]){const a=[];let b=!1,c=0;if(l=k?p[l]:this.g){let d;for(let e=9;e>=h;e--)if(d=l[e][n])a[c++]=d,b=!0}if(b)e[e.length]=1<c?a.concat.apply([],a):a[0];else{g=!1;break}f[n]=1}l=n}}else g=!1;if(g)a:{h=[];d=e.length;if(1<d){e.sort(I);k=q();p=e[0];l=p.length;for(a=
0;a<l;)k[p[a++]]=1;for(f=g=0;++f<d;){r=!1;n=f===d-1;p=e[f];l=p.length;for(a=0;a<l;)if(c=p[a++],k[c]&&k[c]===f){if(n){if(h[g++]=c,b&&g===b){d=h;break a}}else k[c]=f+1;r=!0}if(!r)break}}else d&&(h=e[0],b&&h.length>b&&(h=h.slice(0,b)));d=h}return d}};f.prototype.clear=function(){this.destroy();return this.init()};f.prototype.destroy=function(){this.filter=this.stemmer=this.g=this.c=this.a=null;return this};const w={icase:function(a){return a.toLowerCase()}};return f}(!1),this);
