/*
 FlexSearch v0.3.61
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/flexsearch
*/
'use strict';(function(e,l,u){let n;(n=u.define)&&n.amd?n([],function(){return l}):(n=u.modules)?n[e.toLowerCase()]=l:"object"===typeof exports?module.exports=l:u[e]=l})("FlexSearch",function(){function e(a){a||(a=v);this.id=a.id||G++;this.init(a);l(this,"index",function(){return this.a});l(this,"length",function(){return Object.keys(this.a).length})}function l(a,b,c){Object.defineProperty(a,b,{get:c})}function u(a,b){for(let c=0;c<b.length;c+=2)a=a.replace(b[c],b[c+1]);return a}function n(a,b,c,
f,d,p,g){if(b[c])return b[c];d=d?(9-(g||6))*p+(g||6)*d:p;b[c]=d;d>=g&&(a=a[9-(d+.5>>0)],a=a[c]||(a[c]=[]),a[a.length]=f);return d}function y(a,b){if(a){const c=Object.keys(a);for(let f=0,d=c.length;f<d;f++){const d=c[f],g=a[d];if(g)for(let c=0,f=g.length;c<f;c++)if(g[c]===b){1===f?delete a[d]:g.splice(c,1);break}else"object"===typeof g[c]&&y(g[c],b)}}}function H(a,b){a=a.length-b.length;return 0>a?1:a?-1:0}function I(a,b){a=a.length-b.length;return 0>a?-1:a?1:0}function x(a){return"function"===typeof a}
function z(a){return"undefined"===typeof a}function C(a){const b=Array(a);for(let c=0;c<a;c++)b[c]=t();return b}function t(){return Object.create(null)}const v={encode:"icase",b:"forward",j:!1,cache:!1,async:!1,l:!1,h:!1,threshold:0,depth:0},A=[];let G=0;const D=/\W+/g,E={},F={};e.create=function(a){return new e(a)};e.registerMatcher=function(a){for(const b in a)a.hasOwnProperty(b)&&A.push(new RegExp(b,"g"),a[b]);return this};e.registerEncoder=function(a,b){w[a]=b.bind(w);return this};e.registerLanguage=
function(a,b){E[a]=b.filter;F[a]=b.stemmer;return this};e.encode=function(a,b){return w[a](b)};e.prototype.init=function(a){this.i=[];a||(a=v);var b=a.preset,c={};this.b=a.tokenize||c.b||this.b||v.b;this.h=a.rtl||this.h||v.h;this.threshold=z(b=a.threshold)?c.threshold||this.threshold||v.threshold:b;this.depth=z(b=a.depth)?c.depth||this.depth||v.depth:b;this.f=(b=z(b=a.encode)?c.encode:b)&&w[b]&&w[b].bind(w)||(x(b)?b:this.f||!1);(b=a.matcher)&&this.addMatcher(b);if(b=a.filter){b=E[b]||b;c=this.f;var f=
t();if(b)for(let a=0;a<b.length;a++){const d=c?c(b[a]):b[a];f[d]=String.fromCharCode(65E3-b.length+a)}this.filter=b=f}if(b=a.stemmer){var d;a=F[b]||b;b=this.f;c=[];if(a)for(d in a)a.hasOwnProperty(d)&&(f=b?b(d):d,c.push(new RegExp("(?=.{"+(f.length+3)+",})"+f+"$","g"),b?b(a[d]):a[d]));this.stemmer=d=c}this.g=C(10-(this.threshold||0));this.c=t();this.a=t();return this};e.prototype.encode=function(a){a&&A.length&&(a=u(a,A));a&&this.i.length&&(a=u(a,this.i));a&&this.f&&(a=this.f(a));a&&this.stemmer&&
(a=u(a,this.stemmer));return a};e.prototype.addMatcher=function(a){const b=this.i;for(const c in a)a.hasOwnProperty(c)&&b.push(new RegExp(c,"g"),a[c]);return this};e.prototype.add=function(a,b,c,f,d){if(b&&"string"===typeof b&&(a||0===a)){const e="@"+a;if(this.a[e]&&!f)return this.update(a,b);if(!d&&c)return this.add(a,b,null,f,!0),c(),this;b=this.encode(b);if(!b.length)return this;c=this.b;b=x(c)?c(b):b.split(D);f=t();f._ctx=t();d=this.threshold;const B=this.depth,r=this.g,q=b.length,l=this.h;for(let e=
0;e<q;e++){var p=b[e];if(p){var g=p.length,k=(l?e+1:q-e)/q,m="";switch(c){case "reverse":case "both":for(var h=g;--h;)m=p[h]+m,n(r,f,m,a,l?1:(g-h)/g,k,d);m="";case "forward":for(h=0;h<g;h++)m+=p[h],n(r,f,m,a,l?(h+1)/g:1,k,d);break;case "full":for(h=0;h<g;h++){const b=(l?h+1:g-h)/g;for(let c=g;c>h;c--)m=p.substring(h,c),n(r,f,m,a,b,k,d)}break;default:if(g=n(r,f,p,a,1,k,d),B&&1<q&&g>=d)for(g=f._ctx[p]||(f._ctx[p]=t()),p=this.c[p]||(this.c[p]=C(10-(d||0))),k=e-B,m=e+B+1,0>k&&(k=0),m>q&&(m=q);k<m;k++)k!==
e&&n(p,g,b[k],a,0,10-(k<e?e-k:k-e),d)}}}this.a[e]=1}return this};e.prototype.update=function(a,b,c){this.a["@"+a]&&"string"===typeof b&&(this.remove(a),this.add(a,b,c,!0));return this};e.prototype.remove=function(a,b,c){const f="@"+a;if(this.a[f]){if(!c&&b)return this.remove(a,null,!0),b(),this;for(b=0;b<10-(this.threshold||0);b++)y(this.g[b],a);this.depth&&y(this.c,a);delete this.a[f]}return this};e.prototype.search=function(a,b,c,f){var d=a,e=[];if("object"===typeof a){b=a.limit;var g=a.threshold;
a=a.query}g||(g=this.threshold||0);x(b)?(c=b,b=1E3):b||0===b||(b=1E3);if(!f&&c)return c(this.search(d,b,null,!0)),this;if(!a||"string"!==typeof a)return e;d=this.encode(a);if(!d.length)return e;a=this.b;a=x(a)?a(d):d.split(D);c=a.length;f=!0;d=[];var k=t();if(1<c)if(this.depth){var m=!0;var h=a[0];k[h]=1}else a.sort(H);var l;if(!m||(l=this.c)[h])for(var n=m?1:0;n<c;n++){var r=a[n];if(r){if(!k[r]){var q=[];let a=!1,b=0;if(h=m?l[h]:this.g){let c;for(let d=0;d<10-g;d++)if(c=h[d][r])q[b++]=c,a=!0}if(a)d[d.length]=
1<b?q.concat.apply([],q):q[0];else{f=!1;break}k[r]=1}h=r}}else f=!1;if(f)a:{g=[];e=d.length;if(1<e){d.sort(I);m=t();l=d[0];h=l.length;for(a=0;a<h;)m["@"+l[a++]]=1;for(k=f=0;++k<e;){n=!1;r=k===e-1;l=d[k];h=l.length;for(a=0;a<h;)if(c=l[a++],q="@"+c,m[q]&&m[q]===k){if(r){if(g[f++]=c,b&&f===b){e=g;break a}}else m[q]=k+1;n=!0}if(!n)break}}else e&&(g=d[0],b&&g.length>b&&(g=g.slice(0,b)));e=g}return e};e.prototype.clear=function(){return this.destroy().init()};e.prototype.destroy=function(){this.g=this.c=
this.a=null;return this};const w={icase:function(a){return a.toLowerCase()}};return e}(!1),this);
