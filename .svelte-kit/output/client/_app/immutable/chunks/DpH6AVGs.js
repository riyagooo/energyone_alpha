import{x as w,o as g,k as n,y as i,q as k,h as b,z as q}from"./xC3-kGY6.js";import{l as y}from"./CZDIIiPP.js";function V(e,v,a=v){var s=w();y(e,"input",c=>{var f=c?e.defaultValue:e.value;if(f=u(e)?t(f):f,a(f),s&&f!==(f=v())){var l=e.selectionStart,o=e.selectionEnd;e.value=f??"",o!==null&&(e.selectionStart=l,e.selectionEnd=Math.min(o,e.value.length))}}),(b&&e.defaultValue!==e.value||g(v)==null&&e.value)&&a(u(e)?t(e.value):e.value),n(()=>{var c=v();u(e)&&c===t(e.value)||e.type==="date"&&!c&&!e.value||c!==e.value&&(e.value=c??"")})}const h=new Set;function x(e,v,a,s,c=s){var f=a.getAttribute("type")==="checkbox",l=e;let o=!1;if(v!==null)for(var d of v)l=l[d]??(l[d]=[]);l.push(a),y(a,"change",()=>{var r=a.__value;f&&(r=m(l,r,a.checked)),c(r)},()=>c(f?[]:null)),n(()=>{var r=s();if(b&&a.defaultChecked!==a.checked){o=!0;return}f?(r=r||[],a.checked=r.includes(a.__value)):a.checked=q(a.__value,r)}),i(()=>{var r=l.indexOf(a);r!==-1&&l.splice(r,1)}),h.has(l)||(h.add(l),k(()=>{l.sort((r,_)=>r.compareDocumentPosition(_)===4?-1:1),h.delete(l)})),k(()=>{if(o){var r;if(f)r=m(l,r,a.checked);else{var _=l.find(S=>S.checked);r=_==null?void 0:_.__value}c(r)}})}function m(e,v,a){for(var s=new Set,c=0;c<e.length;c+=1)e[c].checked&&s.add(e[c].__value);return a||s.delete(v),Array.from(s)}function u(e){var v=e.type;return v==="number"||v==="range"}function t(e){return e===""?null:+e}export{V as a,x as b};
