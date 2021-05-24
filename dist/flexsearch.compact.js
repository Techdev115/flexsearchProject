/**!
 * FlexSearch.js v0.7.0-beta (Compact)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/flexsearch
 */
(function(self){'use strict';var v;function w(a,b){return"undefined"!==typeof a?a:b}function y(a){const b=Array(a);for(let c=0;c<a;c++)b[c]=z();return b}function z(){return Object.create(null)}function aa(a,b){return b.length-a.length}function A(a){return"string"===typeof a}function B(a){return"object"===typeof a};const ba=/[\u0300-\u036f]/g;function C(a){a.normalize&&(a=a.normalize("NFD").replace(ba,""));return a}function D(a,b){const c=Object.keys(a),e=c.length,d=[];let f="",g=0;for(let h=0,k,m;h<e;h++)k=c[h],(m=a[k])?(d[g++]=E(b?"(?!\\b)"+k+"(\\b|_)":k),d[g++]=m):f+=(f?"|":"")+k;f&&(d[g++]=E(b?"(?!\\b)("+f+")(\\b|_)":"("+f+")"),d[g]="");return d}function F(a,b){for(let c=0,e=b.length;c<e&&(a=a.replace(b[c],b[c+1]),a);c+=2);return a}function E(a){return new RegExp(a,"g")}
function I(a){let b="",c="";for(let e=0,d=a.length,f;e<d;e++)(f=a[e])!==c&&(b+=c=f);return b};const ca=/[\W_]+/;function J(a){return K(this,C(a).toLowerCase(),!1,ca)};const da={},N={};let ea=Promise;function fa(a){O(a,"add");O(a,"append");O(a,"search");O(a,"update");O(a,"remove")}function O(a,b){a[b+"Async"]=function(){const c=this,e=arguments;var d=e[e.length-1];let f;"function"===typeof d&&(f=d,delete e[e.length-1]);d=new ea(function(g){setTimeout(function(){c.async=!0;const h=c[b].apply(c,e);c.async=!1;g(h)})});return f?(d.then(f),this):d}};function ha(a,b,c,e){var d=a.length;let f=[],g,h=0;e&&(e=[]);for(--d;0<=d;d--){const k=a[d],m=k.length,l=z();let q=!g;for(let r=0;r<m;r++){const u=k[r],p=u.length;if(p)for(let n=0,t=0,x;n<p;n++)if(x=u[n],!g)l[x]=1;else if(g[x]){if(d)e&&t<b&&((e[r]||(e[r]=[]))[t++]=x),l[x]=1;else if(c)c--;else if(f[h++]=x,h===b)return f;q=!0}}if(!q&&!e)return[];g=l}if(e)for(let k=e.length-1,m,l;0<=k;k--)if((l=(m=e[k])&&m.length)&&c&&(l<=c?(c-=l,l=0):l-=c),l){if(h+l>=b)return f.concat(m.slice(c,b-h+c));f=f.concat(c?
m.slice(c):m);h+=l;c=0}return f}function ka(a,b){const c=z(),e=z(),d=[];for(let f=0;f<a.length;f++)c[a[f]]=1;for(let f=0,g;f<b.length;f++){g=b[f];for(let h=0,k;h<g.length;h++)k=g[h],c[k]&&!e[k]&&(e[k]=1,d[d.length]=k)}return d};const la={memory:{charset:"latin:extra",A:3,o:3,D:!1,s:"memory"},performance:{threshold:8,o:3,context:{depth:1,G:!0}},match:{charset:"latin:extra",H:"full",A:3},score:{charset:"latin:advanced",threshold:1,context:{depth:3,G:!0}},"default":{A:3,threshold:0,depth:3}};N["latin:default"]=J;
function P(a,b){if(!(this instanceof P))return new P(a);var c;let e;a?(A(a)?a=la[a]:(c=a.preset)&&(a=Object.assign({},c[c],a)),c=a.charset,e=a.lang,A(c)&&(-1===c.indexOf(":")&&(c+=":default"),c=N[c]),A(e)&&(e=da[e])):a={};let d,f,g,h=a.context||{};this.encode=a.encode||c&&c.encode||J;this.register=b||z();d=a.resolution||9;f=a.threshold||0;f>=d&&(f=d-1);this.A=d;this.threshold=f;this.F=b=c&&c.H||a.tokenize||"strict";this.depth="strict"===b&&h.depth;this.G=w(h.bidirectional,!0);this.s=g="memory"===
a.optimize;this.D=w(a.fastupdate,!0);this.o=a.minlength||1;this.h=g?y(d-f):z();d=h.resolution||d;f=h.threshold||f;f>=d&&(f=d-1);this.l=d;this.B=f;this.m=g?y(d-f):z();this.C=c&&c.C||a.rtl;this.I=(b=a.matcher||e&&e.I)&&D(b,!1);this.J=(b=a.stemmer||e&&e.J)&&D(b,!0);if(a=b=a.filter||e&&e.filter){a=b;c=z();for(let k=0,m=a.length;k<m;k++)c[a[k]]=1;a=c}this.filter=a}
function K(a,b,c,e){if(b&&(c&&(b=F(b,c)),a.I&&(b=F(b,a.I)),a.J&&1<b.length&&(b=F(b,a.J)),e||""===e)){b=b.split(e);if(a.filter){a=a.filter;c=b.length;e=[];for(let d=0,f=0;d<c;d++){const g=b[d];g&&!a[g]&&(e[f++]=g)}a=e}else a=b;return a}return b}v=P.prototype;v.append=function(a,b){return this.add(a,b,!0)};
v.add=function(a,b,c,e){if(!e&&!c&&this.register[a])return this.update(a,b);if(b&&(a||0===a)&&(b=this.encode(b),e=b.length)){const l=this.depth,q=this.A-this.threshold,r=z(),u=z();for(let p=0;p<e;p++){let n=b[this.C?e-1-p:p];var d=n.length;if(n&&d>=this.o&&(l||!r[n])){var f=Math.min(this.A/e*p|0,p);if(f<q){var g="";switch(this.F){case "full":if(3<d){for(var h=0;h<d;h++){var k=h?Math.min(f/2+this.A/d*h/2|0,f+h):f;if(k<q)for(var m=d;m>h;m--)g=n.substring(h,m),g.length>=this.o&&Q(this,r,g,k,a,c)}break}case "reverse":if(2<
d){for(h=d-1;0<h;h--)g=n[h]+g,g.length>=this.o&&Q(this,r,g,f,a,c);g=""}case "forward":if(1<d)for(h=0;h<d;h++)g+=n[h],g.length>=this.o&&Q(this,r,g,f,a,c);break;default:if(Q(this,r,n,f,a,c),l&&1<e&&p<e-1)for(d=this.l-this.B,f=z(),g=n,h=Math.min(l+1,e-p),f[g]=1,k=1;k<h;k++)if((n=b[this.C?e-1-p-k:p+k])&&n.length>=this.o&&!f[n]){if(f[n]=1,m=Math.min((this.l-h)/e*p+k|0,p+(k-1)),m<d){const t=this.G&&n>g;Q(this,u,t?g:n,m,a,c,t?n:g)}}else h=Math.min(h+1,e-p)}}}}this.D||(this.register[a]=1)}return this};
function Q(a,b,c,e,d,f,g){let h=g?a.m:a.h;if(!b[c]||g&&!b[c][g])a.s&&(h=h[e]),g?(b=b[c]||(b[c]=z()),b[g]=1,h=h[g]||(h[g]=z())):b[c]=1,h=h[c]||(h[c]=[]),a.s||(h=h[e]||(h[e]=[])),f&&-1!==h.indexOf(d)||(h[h.length]=d,a.D&&(a=a.register[d]||(a.register[d]=[]),a[a.length]=h))}
v.search=function(a,b,c){B(a)?(c=a,a=c.query):B(b)&&(c=b);let e=[],d;var f=this.threshold;let g,h=0;if(c){b=c.limit;h=c.offset||0;f=w(c.threshold,f);var k=c.context;g=c.suggest}if(a&&(a=this.encode(a),d=a.length,1<d)){c=z();var m=[];for(let q=0,r=0,u;q<d;q++)if((u=a[q])&&u.length>=this.o&&!c[u])if(this.s||g||this.h[u])m[r++]=u,c[u]=1;else return e;a=m;d=a.length}if(!d)return e;b||(b=100);c=this.A-f;f=this.l-f;k=this.depth&&1<d&&!1!==k;m=0;let l;k?(l=a[0],m=1):1<d&&a.sort(aa);for(let q,r;m<d;m++){r=
a[m];k?(q=ma(this,e,g,f,b,h,2===d,r,l),g&&!1===q&&e.length||(l=r)):q=ma(this,e,g,c,b,h,1===d,r);if(q)return q;if(g&&m===d-1){let u=e.length;if(!u){if(k){k=0;m=-1;continue}return e}if(1===u)return na(e[0],b,h)}}return ha(e,b,h,g)};
function ma(a,b,c,e,d,f,g,h,k){let m=[],l=k?a.m:a.h;a.s||(l=oa(l,h,k,a.G));if(l){let q=0;e=Math.min(l.length,e);for(let r=0,u=0,p,n;r<e&&!(p=l[r],a.s&&(p=oa(p,h,k,a.G)),p&&g&&(n=p.length,n<=f?(f-=n,p=null):f&&(p=p.slice(f),f=0)),p&&(m[q++]=p,g&&(u+=p.length,u>=d)));r++);if(q){if(g)return na(m,d,0);b[b.length]=m;return}}return!c&&m}function na(a,b,c){a=1===a.length?a[0]:[].concat.apply([],a);return c||a.length>b?a.slice(c,c+b):a}
function oa(a,b,c,e){c?(e=e&&b>c,a=(a=a[e?b:c])&&a[e?c:b]):a=a[b];return a}v.contain=function(a){return!!this.register[a]};v.update=function(a,b){return this.remove(a).add(a,b)};v.remove=function(a,b){const c=this.register[a];if(c){if(this.D)for(let e=0,d;e<c.length;e++)d=c[e],d.splice(d.indexOf(a),1);else S(this.h,a,this.A-this.threshold,this.s),this.depth&&S(this.m,a,this.l-this.B,this.s);b||delete this.register[a]}return this};
function S(a,b,c,e,d){let f=0;if(a.constructor===Array)if(d)b=a.indexOf(b),-1!==b?1<a.length&&(a.splice(b,1),f++):f++;else{d=Math.min(a.length,c);for(let g=0,h;g<d;g++)if(h=a[g])f=S(h,b,c,e,d),e||f||delete a[g]}else for(let g in a)(f=S(a[g],b,c,e,d))||delete a[g];return f}fa(P.prototype);function T(a){if(!(this instanceof T))return new T(a);var b;a||(a={});this.K=[];this.h=[];this.F=[];this.register=z();this.key=(b=a.key)&&U(b,this.F)||"id";this.D=w(a.fastupdate,!0);this.B=!!(b=a.extern);this.l=!this.B&&(b=a.store)&&!0!==b&&[];this.store=b&&(this.B?b:z());this.async=!1;b=a;a=z();let c=b.doc;if(A(c))c=[c];else if(c.constructor!==Array){var e=c;c=Object.keys(c)}for(let d=0,f,g;d<c.length;d++)f=c[d],A(f)?e&&(g=e[f]):(g=f,f=f.field),g=B(g)?Object.assign({},b,g):b,this.L||(a[f]=new P(g,
this.register)),this.K[d]=U(f,this.F),this.h[d]=f;if(this.l)for(e=b.store,A(e)&&(e=[e]),b=0;b<e.length;b++)this.l[b]=U(e[b],this.F);this.m=a}function U(a,b){const c=a.split(":");let e=0;for(let d=0;d<c.length;d++)a=c[d],0<=a.indexOf("[]")&&(a=a.substring(0,a.length-2))&&(b[e]=!0),a&&(c[e++]=a);e<c.length&&(c.length=e);return 1<e?c:c[0]}function pa(a,b){if(A(b))a=a[b];else for(let c=0;a&&c<b.length;c++)a=a[b[c]];return a}
function V(a,b,c,e,d){a=a[d];if(e===c.length-1)b[d]=a;else if(a)if(a.constructor===Array)for(b=b[d]=Array(a.length),d=0;d<a.length;d++)V(a,b,c,e,d);else b=b[d]||(b[d]=z()),d=c[++e],V(a,b,c,e,d)}function W(a,b,c,e,d,f,g,h){a=a[g];if(e===b.length-1){if(a.constructor===Array){if(c[e]){for(b=0;b<a.length;b++)d.add(f,a[b],!0,!0);return}a=a.join(" ")}d.add(f,a,h,!0)}else if(a)if(a.constructor===Array)for(g=0;g<a.length;g++)W(a,b,c,e,d,f,g,h);else g=b[++e],W(a,b,c,e,d,f,g,h)}v=T.prototype;
v.add=function(a,b,c){B(a)&&(b=a,a=pa(b,this.key));if(b&&(a||0===a)){if(this.register[a])return this.update(a,b);for(let e=0,d,f;e<this.h.length;e++)f=this.h[e],d=this.K[e],A(d)&&(d=[d]),W(b,d,this.F,0,this.m[f],a,d[0],c);if(this.store&&!this.B){let e;if(this.l){e=z();for(let d=0,f;d<this.l.length;d++)f=this.l[d],A(f)?e[f]=b[f]:V(b,e,f,0,f[0])}this.store[a]=e||b}}return this};v.append=function(a,b){return this.add(a,b,!0)};v.update=function(a,b){return this.remove(a).add(a,b)};
v.remove=function(a){B(a)&&(a=pa(a,this.key));if(this.register[a]){const b=this.D&&!this.L;for(let c=0;c<this.h.length&&(this.m[this.h[c]].remove(a,b),!b);c++);this.store&&!this.B&&delete this.store[a];delete this.register[a]}return this};
v.search=function(a,b,c,e){B(a)?(c=a,a=c.query):B(b)&&(c=b,b=0);let d=[],f=[],g,h,k,m,l,q,r,u=0;if(c)if(c.constructor===Array)k=c,c=null;else if(k=(g=c.pluck)||c.field||c.doc,l=!1,h=this.store&&c.enrich,q="and"===c.bool,b=c.limit||100,r=c.offset||0,k&&(A(k)?k=[k]:k.constructor!==Array&&(m=k,k=Object.keys(k))),l&&(A(l)&&(l=[l]),!a)){for(let n=0,t;n<l.length;n++)if(t=qa.call(this,l[n],b,r,h))d[d.length]=t,u++;return u?d:[]}k||(k=this.h);q=q&&(1<k.length||l&&1<l.length);const p=!e&&(this.L||this.async)&&
[];for(let n=0,t,x,G;n<k.length;n++){let L;x=k[n];A(x)?m&&(L=m[x]):(L=x,x=x.field);if(p)p[n]=this.m[x].searchAsync(a,b,L||c);else{e?t=e[n]:t=this.m[x].search(a,b,L||c);G=t.length;if(l&&G){const H=[];let ia=0;q&&(H[0]=[t]);for(let R=0,ja,M;R<l.length;R++)if(ja=l[R],G=(M=this.M[ja])&&M.length)ia++,H[H.length]=q?[M]:M;ia&&(t=q?ha(H,b||100,r||0):ka(t,H),G=t.length)}if(G)f[u]=x,d[u++]=t;else if(q)return[]}}if(p){const n=this;return new Promise(function(t){Promise.all(p).then(function(x){t(n.search(a,b,
c,x))})})}if(!u)return[];if(g&&(!h||!this.store))return d[0];for(let n=0,t;n<f.length;n++){t=d[n];t.length&&h&&(t=ra.call(this,t));if(g)return t;d[n]={field:f[n],result:t}}return d};function qa(a,b,c,e){let d=this.M[a],f=d&&d.length-c;if(f&&0<f){if(f>b||c)d=d.slice(c,c+b);e&&(d=ra.call(this,d));return{tag:a,result:d}}}function ra(a){const b=Array(a.length);for(let c=0,e;c<a.length;c++)e=a[c],b[c]={key:e,doc:this.store[e]};return b}v.contain=function(a){return!!this.register[a]};v.get=function(a){return this.store[a]};
v.set=function(a,b){this.store[a]=b;return this};fa(T.prototype);const sa=/[\W_]+/,ta=[E("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),"a",E("[\u00e8\u00e9\u00ea\u00eb]"),"e",E("[\u00ec\u00ed\u00ee\u00ef]"),"i",E("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),"o",E("[\u00f9\u00fa\u00fb\u00fc\u0171]"),"u",E("[\u00fd\u0177\u00ff]"),"y",E("\u00f1"),"n",E("[\u00e7c]"),"k",E("\u00df"),"s",E(" & ")," and "];function ua(a){return K(this,C(a).toLowerCase(),!a.normalize&&ta,sa)};var wa={encode:va,C:!1,H:"strict"};const xa=/[^a-z0-9]+/,ya={b:"p",v:"f",w:"f",z:"s",x:"s","\u00df":"s",d:"t",n:"m",c:"k",g:"k",j:"k",q:"k",i:"e",y:"e",u:"o"};function va(a){a=ua.call(this,a).join(" ");const b=[];if(a){const c=a.split(xa),e=c.length;for(let d=0,f,g=0;d<e;d++)if((a=c[d])&&(!this.filter||!this.filter[a])){f=a[0];let h=ya[f]||f,k=h;for(let m=1;m<a.length;m++){f=a[m];const l=ya[f]||f;l&&l!==k&&(h+=l,k=l)}b[g++]=h}}return b};var Aa={encode:za,C:!1,H:""};const Ba=[E("ae"),"a",E("oe"),"o",E("sh"),"s",E("th"),"t",E("ph"),"f",E("pf"),"f"];function za(a,b){a&&(a=va.call(this,a).join(" "),2<a.length&&(a=F(a,Ba)),b||(1<a.length&&(a=I(a)),a&&(a=a.split(" "))));return a};var Da={encode:Ca,C:!1,H:""};const Ea=E("(?!\\b)[aeiouy]");function Ca(a){a&&(a=za.call(this,a,!0),1<a.length&&(a=a.replace(Ea,"")),1<a.length&&(a=I(a)),a&&(a=a.split(" ")));return a};N["latin:simple"]={encode:ua,C:!1,H:""};N["latin:balance"]=wa;N["latin:advanced"]=Aa;N["latin:extra"]=Da;const X=self;let Y;const Z={Index:P,Document:T,Worker:null,registerCharset:function(a,b){N[a]=b},registerLanguage:function(a,b){da[a]=b}};(Y=X.define)&&Y.amd?Y([],function(){return Z}):X.exports?X.exports=Z:X.FlexSearch=Z;}(this));
