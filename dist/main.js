!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Float=e():t.Float=e()}(this,(()=>(()=>{"use strict";var t={d:(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};function o(t,e){return Math.round(Math.random()*(e-t)+t)}function n(t){return"number"==typeof t&&t%1!=0}function r(t){return t=t??r.random(),this instanceof r&&(this.value=t),t}t.d(e,{default:()=>i}),r.is=t=>"object"==typeof t?t instanceof r:n(t),r.random=(t,e)=>function(t,e){let r;for(t=t||Math.random(),e=e||Math.random();!n(r);){r=Math.random()*(e-t)+t;let n=o(1,16);r=r.toFixed(n),r=Number.parseFloat(r)}return r}(t,e),r.like=t=>!!r.is(t)||function(t){if("number"==typeof t&&(t+=""),"string"==typeof t){let e=/^-?\d*\.\d+$/g;return!!t.match(e)}return!1}(t),r.prototype.toFixed=function(){return this instanceof Number?this.toFixed():this instanceof r?new r(this.value.toFixed()):void 0},r.prototype.toString=function(){return`${this.value}`},r.prototype.valueOf=function(){return this.value},r.prototype.equals=function(t){return"number"==typeof t?this.valueOf()===t:new r(t).valueOf===this.valueOf()};const i=r;return e.default})()));