Object.assign||(Object.assign=function(){const a=arguments,b=a.length,c=a[0];for(let d,e,f,g=1;g<b;g++){d=a[g],e=Object.keys(d),f=e.length;for(let a,b=0;b<f;b++)a=e[b],c[a]=d[a]}return c}),window.requestAnimationFrame||(window.requestAnimationFrame=window.setTimeout),window.cancelAnimationFrame||(window.cancelAnimationFrame=window.clearTimeout),window.Promise||(window.Promise=function(){function a(a){this.callback=null;const b=this;a(function(a){b.callback&&(b.callback(a),b.callback=null)})}return a.prototype.then=function(a){this.callback=a},a}());