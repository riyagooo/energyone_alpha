function e(r){var t,f,n="";if(typeof r=="string"||typeof r=="number")n+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(t=0;t<s;t++)r[t]&&(f=e(r[t]))&&(n&&(n+=" "),n+=f)}else for(f in r)r[f]&&(n&&(n+=" "),n+=f);return n}function c(){for(var r,t,f=0,n="",s=arguments.length;f<s;f++)(r=arguments[f])&&(t=e(r))&&(n&&(n+=" "),n+=t);return n}function g(r){return typeof r=="object"?c(r):r??""}const u=[...` 	
\r\f \v\uFEFF`];function a(r,t,f){var n=r==null?"":""+r;if(t&&(n=n?n+" "+t:t),f){for(var s in f)if(f[s])n=n?n+" "+s:s;else if(n.length)for(var o=s.length,l=0;(l=n.indexOf(s,l))>=0;){var i=l+o;(l===0||u.includes(n[l-1]))&&(i===n.length||u.includes(n[i]))?n=(l===0?"":n.substring(0,l))+n.substring(i+1):l=i}}return n===""?null:n}function p(r,t){return r==null?null:String(r)}export{a,g as c,p as t};
