import{IndexInterface,DocumentInterface}from"./type.js";import{create_object,is_string}from"./common.js";function async(a,b,c,d,e,f){setTimeout(function(){const g=a(c,JSON.stringify(f));g&&g.then?g.then(function(){b.export(a,b,c,d,e+1)}):b.export(a,b,c,d,e+1)})}export function exportIndex(a,b,c,d,e){let f,g;switch(e||(e=0)){case 0:if(f="reg",this.fastupdate)for(let a in g=create_object(),this.register)g[a]=1;else g=this.register;break;case 1:f="cfg",g={doc:0,opt:this.optimize?1:0};break;case 2:f="map",g=this.map;break;case 3:f="ctx",g=this.ctx;break;default:return;}return async(a,b||this,c?c+"."+f:f,d,e,g),!0}export function importIndex(a,b){b&&(is_string(b)&&(b=JSON.parse(b)),"cfg"===a?this.optimize=!!b.opt:"reg"===a?(this.fastupdate=!1,this.register=b):"map"===a?this.map=b:"ctx"===a?this.ctx=b:void 0)}export function exportDocument(a,b,c,d,e){if(e||(e=0),d||(d=0),d<this.field.length){const c=this.field[d],f=this.index[c];b=this,setTimeout(function(){f.export(a,b,e?c:"",d,e++)||(d++,e=1,b.export(a,b,c,d,e))})}else{let b,c;switch(e){case 1:b="tag",c=this.tagindex;break;case 2:b="store",c=this.store;break;default:return;}async(a,this,b,d,e,c)}}export function importDocument(a,b){if(b)switch(is_string(b)&&(b=JSON.parse(b)),a){case"tag":this.tagindex=b;break;case"reg":this.fastupdate=!1,this.register=b;for(let a,c=0;c<this.field.length;c++)a=this.index[this.field[c]],a.register=b,a.fastupdate=!1;break;case"store":this.store=b;break;default:a=a.split(".");const c=a[0];a=a[1],c&&a&&this.index[c].import(a,b);}}