import{L as i,N as d,A as n,h as c,B as v,C as h}from"./xC3-kGY6.js";import{a as u}from"./CZDIIiPP.js";const g=Symbol("is custom element"),A=Symbol("is html");function M(r){if(c){var s=!1,o=()=>{if(!s){if(s=!0,r.hasAttribute("value")){var e=r.value;t(r,"value",null),r.value=e}if(r.hasAttribute("checked")){var a=r.checked;t(r,"checked",null),r.checked=a}}};r.__on_r=o,h(o),u()}}function t(r,s,o,e){var a=p(r);c&&(a[s]=r.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&r.nodeName==="LINK")||a[s]!==(a[s]=o)&&(s==="loading"&&(r[i]=o),o==null?r.removeAttribute(s):typeof o!="string"&&N(r).includes(s)?r[s]=o:r.setAttribute(s,o))}function p(r){return r.__attributes??(r.__attributes={[g]:r.nodeName.includes("-"),[A]:r.namespaceURI===d})}var f=new Map;function N(r){var s=f.get(r.nodeName);if(s)return s;f.set(r.nodeName,s=[]);for(var o,e=r,a=Element.prototype;a!==e;){o=v(e);for(var _ in o)o[_].set&&s.push(_);e=n(e)}return s}export{M as r,t as s};
