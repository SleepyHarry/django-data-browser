(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{18:function(e,t,n){},50:function(e,t,n){e.exports=n(64)},55:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(41),i=n.n(l),o=n(67),c=(n(55),n(6)),u=n(8),s=n(9),m=n(5),d=n(14),f=(n(18),n(25)),p=n(30),h=n(46),y=n(42),v=n(47),E=n(27),g=n.n(E),b=n(38),k=!1,F=void 0,w=document.getElementById("backend-version").textContent.trim();function S(e){var t=e.text,n=Object(a.useRef)(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{ref:n},t)," ",r.a.createElement(O,{className:"CopyToClipboard",onClick:function(e){var t=document.createRange();t.selectNodeContents(n.current),window.getSelection().removeAllRanges(),window.getSelection().addRange(t),document.execCommand("copy"),window.getSelection().removeAllRanges(),e.target.blur()}},"(copy to clipboard)"))}function O(e){var t=e.className,n=e.onClick,a=e.children;return r.a.createElement("button",Object.assign({onClick:n},{type:"button",className:"TLink ".concat(t)}),a)}function j(e){var t=e.className,n=e.onClick,a=e.children;return r.a.createElement("button",Object.assign({onClick:n},{type:"button",className:"SLink material-icons ".concat(t)}),a)}var N=function(e){Object(y.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).name="AbortError",e}return n}(Object(v.a)(Error));function C(e,t,n){return k?(F&&F.reject(new N("skipped")),new Promise((function(a,r){F={resolve:a,reject:r,url:e,options:t,process:n}}))):(k=!0,fetch(e,t).then((function(e){var t=F;if(F=void 0,k=!1,t)throw C(t.url,t.options,t.process).then((function(e){return t.resolve(e)}),(function(e){return t.reject(e)})),new N("superceeded");return e})).then((function(e){return b.ok(e.status>=200),b.ok(e.status<300),e})).then((function(e){var t=e.headers.get("x-version");return t!==w&&(console.log("Version mismatch, hard reload",w,t),window.location.reload(!0)),e})).then((function(e){return n(e)})))}function q(e){return C(e,{method:"GET"},(function(e){return e.json()}))}function x(e,t){return C(e,{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(t)},(function(e){return e.json()}))}function L(e){var t=Object(a.useState)(),n=Object(u.a)(t,2),r=n[0],l=n[1];return Object(a.useEffect)((function(){q(e).then((function(e){return l(e)}))}),[e]),[r,function(t){l((function(e){return Object(c.a)({},e,{},t)})),function(e,t){return C(e,{method:"PATCH",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(t)},(function(e){return e.json()}))}(e,t).then((function(e){return l((function(t){return Object(c.a)({},t,{},e)}))})).catch((function(e){if("AbortError"!==e.name)throw e}))}]}function M(e){var t=e.name,n=e.apiUrl,l=e.data,i=e.redirectUrl,o=Object(a.useState)("save"),c=Object(u.a)(o,2),s=c[0],d=c[1];if("save"===s)return r.a.createElement(O,{onClick:function(e){d("saving"),x(n,l).then((function(e){return d(e)}))}},"Save ",t||"");if("saving"===s)return r.a.createElement(r.a.Fragment,null,"Saving ",t||"");var f="function"===typeof i?i(s):i;return r.a.createElement(m.a,{to:f})}function V(e){var t=e.name,n=e.apiUrl,l=e.redirectUrl,i=Object(a.useState)("normal"),o=Object(u.a)(i,2),c=o[0],s=o[1];if("normal"===c)return r.a.createElement(O,{onClick:function(e){s("confirm")}},"Delete ",t||"");if("confirm"===c)return r.a.createElement(O,{onClick:function(e){var t;s("deleting"),(t=n,C(t,{method:"DELETE",headers:{"X-CSRFToken":g.a.get("csrftoken")}},(function(e){return e}))).then((function(e){return s("deleted")}))}},"Are you sure?");if("deleting"===c)return"Deleting";if("deleted"===c)return r.a.createElement(m.a,{to:l});throw new Error("unknown delete state: ".concat(c))}function P(e){return e.message?r.a.createElement("div",{className:"Overlay"},r.a.createElement("h1",null,e.message)):null}Object.prototype.hasOwnProperty;var T=r.a.createContext();function U(e){var t=Object(a.useRef)(),n=Object(a.useState)(),l=Object(u.a)(n,2),i=l[0],o=l[1];function c(e){t.current&&t.current.contains(e.target)||o(null)}Object(a.useEffect)((function(){return document.addEventListener("mousedown",c),function(){document.removeEventListener("mousedown",c)}}),[]);var s=i?{left:i.x,top:i.y}:{};return r.a.createElement(T.Provider,{value:function(e,t){(t=t.filter((function(e){return e}))).length&&0===window.getSelection().toString().length&&(o({entries:t,x:e.clientX,y:e.clientY}),e.preventDefault())}},e.children,i&&r.a.createElement("div",{ref:t,className:"ContextMenu",style:s},i.entries.map((function(e){return r.a.createElement("p",{key:e.name},r.a.createElement(O,{onClick:function(){e.fn(),o()}},e.name))}))))}var A=r.a.createContext(),R=r.a.createContext();function _(e){var t=Object(a.useRef)(),n=Object(a.useState)(),l=Object(u.a)(n,2),i=l[0],o=l[1],c=i?{left:i.x,top:i.y}:{};return r.a.createElement(A.Provider,{value:function(e,t){t&&o({messages:t,x:e.target.getBoundingClientRect().right-10,y:e.target.getBoundingClientRect().top-10}),e.preventDefault()}},r.a.createElement(R.Provider,{value:function(e){o(null),e.preventDefault()}},e.children,i&&r.a.createElement("div",{ref:t,className:"Tooltip",style:c},i.messages.map((function(e){return r.a.createElement("p",null,e)})))))}var D=n(32);function H(e){var t=e.spaces;return t>0?Object(D.a)(Array(t)).map((function(e,t){return r.a.createElement("td",{className:"Empty",key:t})})):null}function Q(e){var t=e.query,n=e.field,l=e.className,i=e.leftArrow,o=e.rightArrow,c=e.verticalArrows,s=t.getField(n.pathStr),m=t.getType(s),d=t.getFieldClass(s),p=Object(a.useContext)(T);return r.a.createElement("th",{className:"HeadCell ContextCursor ".concat(l," ").concat(d),onContextMenu:function(e){p(e,s.actions.map((function(e){return{name:e.prettyName,fn:function(){return x("",{action:e.name,field:n.pathStr}).then((function(e){return function(e,t){var n=document.createElement("form");n.method="post",n.action=e,t.push(["csrfmiddlewaretoken",g.a.get("csrftoken")]);var a,r=Object(f.a)(t);try{for(r.s();!(a=r.n()).done;){var l=Object(u.a)(a.value,2),i=l[0],o=l[1],c=document.createElement("input");c.type="hidden",c.name=i,c.value=o,n.appendChild(c)}}catch(s){r.e(s)}finally{r.f()}document.body.appendChild(n),n.submit()}(e.url,e.data)}))}}})))}},r.a.createElement(j,{onClick:function(){return t.removeField(n)}},"close"),i&&r.a.createElement(j,{onClick:function(){return t.moveField(n,!0)}},c?"expand_less":"chevron_left"),o&&r.a.createElement(j,{onClick:function(){return t.moveField(n,!1)}},c?"expand_more":"chevron_right"),s.canPivot&&r.a.createElement(j,{onClick:function(){return t.togglePivot(n)}},"pivot_table_chart"),s.concrete&&m.defaultLookup?r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{onClick:function(){return t.addFilter(n.pathStr)}},"filter_alt")," ",r.a.createElement(O,{onClick:function(){return t.toggleSort(n)}},t.prettyPathStr(n.pathStr),{dsc:"\u2191".concat(n.priority),asc:"\u2193".concat(n.priority),null:""}[n.sort])):" "+t.prettyPathStr(n.pathStr))}function I(e){var t,n,l=e.modelField,i=e.className,o=e.span,c=e.value,u=e.formatHint,s=e.query,m=e.pathStr,d=e.fullRow;t=void 0===c?"":null===c?"null":"html"===l.type?c:"url"===l.type?r.a.createElement("a",{href:c},c):"number"===l.type?c>u.highCutOff||c<-u.highCutOff||c&&c<u.lowCutOff&&c>-u.lowCutOff?c.toExponential(u.significantFigures-1):c.toLocaleString(void 0,u):String(c),n=null===c?r.a.createElement("span",{className:"Null"},t):""===t?"\xa0":"html"===l.type?r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}}):t;var f=Object(a.useContext)(T);return r.a.createElement("td",{className:"DataCell ContextCursor ".concat(l.type," ").concat(i),colSpan:o||1,onContextMenu:function(e){f(e,[navigator.clipboard&&{name:"Copy",fn:function(){return navigator.clipboard.writeText(t)}},l.concrete&&s.filterForValue(m,c)&&{name:"Filter",fn:function(){return s.addExactFilter(m,c)}},d&&{name:"Drill down",fn:function(){return s.drillDown(d)}}])}},n)}function B(e){var t=e.fields,n=e.query,a=e.classNameFirst,l=e.className;return t.map((function(e,i){return r.a.createElement(Q,Object.assign({query:n,field:e},{key:e.pathStr,className:"HoriBorder ".concat(l," ")+(i?"":a),verticalArrows:!1,leftArrow:0!==i,rightArrow:i!==t.length-1}))}))}function J(e){var t=e.fields,n=e.query,a=e.classNameFirst,l=e.className,i=e.row,o=e.formatHints,c=e.fullRow;return t.map((function(e,t){return i?r.a.createElement(I,Object.assign({query:n},{pathStr:e.pathStr,key:e.pathStr,value:i[e.pathStr],className:"".concat(t?"":a," ").concat(l),modelField:n.getField(e.pathStr),formatHint:o[e.pathStr],fullRow:c})):r.a.createElement("td",{key:e.pathStr,className:"".concat(t?"":a," Empty")})}))}function X(e){var t=e.query,n=e.field,a=e.data,l=e.span,i=e.className,o=e.formatHints,c=e.leftArrow,u=e.rightArrow;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,Object.assign({query:t,field:n,leftArrow:c,rightArrow:u},{verticalArrows:!0})),a.map((function(e,a){return r.a.createElement(I,Object.assign({key:a,span:l,className:i,query:t},{value:e[n.pathStr],modelField:t.getField(n.pathStr),formatHint:o[n.pathStr],fullRow:e,pathStr:n.pathStr}))})))}function z(e){var t=e.query,n=e.cols,a=e.rows,l=e.body,i=e.overlay,o=e.formatHints,u=t.colFields(),s=t.rowFields().length-1,m=t.colFields().length?1-t.rowFields().length:0,d=t.rowFields().length||t.bodyFields().length||null;return r.a.createElement("div",{className:"Results"},r.a.createElement(P,{message:i}),r.a.createElement("div",{className:"Scroller"},r.a.createElement("table",null,r.a.createElement("thead",null,u.map((function(e,a){return r.a.createElement("tr",{key:e.pathStr},r.a.createElement(H,{spaces:s}),r.a.createElement(X,Object.assign({query:t,field:e,formatHints:o},{span:t.bodyFields().length,data:n,className:i&&"Fade",leftArrow:0!==a,rightArrow:a!==u.length-1})))})),d&&r.a.createElement("tr",null,r.a.createElement(H,{spaces:m}),r.a.createElement(B,Object.assign({query:t},{fields:t.rowFields(),className:"Freeze"})),(n.length?n:[null]).map((function(e,n){return r.a.createElement(B,Object.assign({key:n,query:t},{fields:t.bodyFields(),classNameFirst:"LeftBorder",className:"Freeze"}))})))),r.a.createElement("tbody",{className:i&&"Fade"},d&&a.map((function(e,a){return e&&r.a.createElement("tr",{key:a},r.a.createElement(H,{spaces:m}),r.a.createElement(J,Object.assign({query:t,row:e,formatHints:o},{fields:t.rowFields(),fullRow:e})),l.map((function(l,i){return r.a.createElement(J,Object.assign({key:i,query:t,formatHints:o},{fields:t.bodyFields(),row:l[a],fullRow:Object(c.a)({},e,{},n[i]),classNameFirst:"LeftBorder"}))})))}))))))}var Y=n(44),G={rows:[{}],cols:[{}],body:[[{}]],length:0,filterErrors:[],parsedFilterValues:[],formatHints:{}};function W(e){return{model:e.model,fields:e.fields.map((function(e){return(e.pivoted?"&":"")+e.pathStr+{asc:"+".concat(e.priority),dsc:"-".concat(e.priority),null:""}[e.sort]})).join(","),query:e.filters.map((function(e){return"".concat(e.pathStr,"__").concat(e.lookup,"=").concat(encodeURIComponent(e.value))})).join("&"),limit:e.limit}}function K(e,t){var n=W(e),a=n.model,r=n.fields,l=n.query,i=n.limit;return"query/".concat(a,"/").concat(r,".").concat(t,"?").concat(l,"&limit=").concat(i)}function Z(e,t,n){var a=K(t,n);return"".concat(window.location.origin).concat(e).concat(a)}var $=function(){function e(t,n,a){Object(p.a)(this,e),this.config=t,this.query=n,this.setQuery=a}return Object(Y.a)(e,[{key:"getField",value:function(e){var t,n=e.split("__"),a=this.query.model,r=Object(f.a)(n.slice(0,-1));try{for(r.s();!(t=r.n()).done;){var l=t.value,i=this.config.allModelFields[a].fields[l];if(void 0===i)return null;a=i.model}}catch(o){r.e(o)}finally{r.f()}return this.config.allModelFields[a].fields[n.slice(-1)]}},{key:"getType",value:function(e){return this.config.types[e.type]}},{key:"getModelFields",value:function(e){return this.config.allModelFields[e]}},{key:"getDefaultLookupValue",value:function(e,t,n){var a=t.lookups[n].type;return a.endsWith("choice")?String(e.choices[0]):String(this.config.types[a].defaultValue)}},{key:"_getFieldIndex",value:function(e,t){return t.findIndex((function(t){return t.pathStr===e.pathStr}))}},{key:"addField",value:function(e,t){var n=this.query.fields.filter((function(t){return t.pathStr!==e})),a=n.map((function(e){return e.priority})).filter((function(e){return null!==e})),r=a.length?Math.max.apply(Math,Object(D.a)(a))+1:0;n.push({pathStr:e,sort:t,priority:t?r:null,pivoted:!1}),this.setQuery({fields:n})}},{key:"removeField",value:function(e){var t=this.getField(e.pathStr);this.setQuery({fields:this.query.fields.filter((function(t){return t.pathStr!==e.pathStr}))},t.canPivot)}},{key:"moveField",value:function(e,t){var n=this.getField(e.pathStr),a=this.colFields().slice(),r=this.rowFields().slice(),l=this.bodyFields().slice(),i=null;i=e.pivoted?a:n.canPivot?r:l;var o=this._getFieldIndex(e,i),c=o+(t?-1:1);0<=c&&c<i.length&&(i.splice(o,1),i.splice(c,0,e),this.setQuery({fields:[].concat(r,a,l)},!1))}},{key:"toggleSort",value:function(e){var t=this._getFieldIndex(e,this.query.fields),n={asc:"dsc",dsc:null,null:"asc"}[e.sort],a=this.query.fields.slice();e.sort&&(a=a.map((function(t){return Object(c.a)({},t,{priority:null!=t.priority&&t.priority>e.priority?t.priority-1:t.priority})}))),n?(a=a.map((function(e){return Object(c.a)({},e,{priority:null!=e.priority?e.priority+1:e.priority})})))[t]=Object(c.a)({},e,{sort:n,priority:0}):a[t]=Object(c.a)({},e,{sort:null,priority:null}),this.setQuery({fields:a})}},{key:"togglePivot",value:function(e){var t=this._getFieldIndex(e,this.query.fields),n=this.query.fields.slice();n[t].pivoted=!n[t].pivoted,this.setQuery({fields:n})}},{key:"addFilter",value:function(e){var t=this.getField(e),n=this.getType(t),a=this.query.filters.slice();a.push({pathStr:e,lookup:n.defaultLookup,value:this.getDefaultLookupValue(t,n,n.defaultLookup)}),this.setQuery({filters:a})}},{key:"filterForValue",value:function(e,t){var n=this.getType(this.getField(e)).lookups;return null===t&&n.hasOwnProperty("is_null")?{pathStr:e,lookup:"is_null",value:"IsNull"}:n.hasOwnProperty("equals")?{pathStr:e,lookup:"equals",value:String(t)}:null}},{key:"addExactFilter",value:function(e,t){var n=this.query.filters.slice();n.push(this.filterForValue(e,t)),this.setQuery({filters:n})}},{key:"drillDown",value:function(e){var t=this,n=this.query.filters.concat(this.query.fields.filter((function(e){return t.getField(e.pathStr).canPivot})).filter((function(e){return t.getField(e.pathStr).concrete})).filter((function(t){return e.hasOwnProperty(t.pathStr)})).filter((function(e){var n=(e.pivoted?t.query.cols:t.query.rows).map((function(t){return t[e.pathStr]}));return new Set(n).size>1})).map((function(n){return t.filterForValue(n.pathStr,e[n.pathStr])})).filter((function(e){return null!==e})));this.setQuery({filters:n})}},{key:"removeFilter",value:function(e){var t=this.query.filters.slice();t.splice(e,1),this.setQuery({filters:t})}},{key:"setFilterValue",value:function(e,t){var n=this.query.filters.slice();n[e]=Object(c.a)({},n[e],{value:t}),this.setQuery({filters:n})}},{key:"setFilterLookup",value:function(e,t){var n=this.query.filters.slice(),a=n[e],r=this.getField(n[e].pathStr),l=this.getType(r);l.lookups[a.lookup].type!==l.lookups[t].type&&(a.value=this.getDefaultLookupValue(r,l,t)),a.lookup=t,this.setQuery({filters:n})}},{key:"setLimit",value:function(e){e=Number(e),this.setQuery({limit:e>0?e:1})}},{key:"setModel",value:function(e){this.setQuery(Object(c.a)({model:e,fields:[],filters:this.config.allModelFields[e].defaultFilters,limit:this.config.defaultRowLimit},G))}},{key:"getUrlForMedia",value:function(e){return Z(this.config.baseUrl,this.query,e)}},{key:"colFields",value:function(){return this.query.fields.filter((function(e){return e.pivoted}))}},{key:"rowFields",value:function(){var e=this;return this.query.fields.filter((function(t){return e.getField(t.pathStr).canPivot&&!t.pivoted}))}},{key:"bodyFields",value:function(){var e=this;return this.query.fields.filter((function(t){return!e.getField(t.pathStr).canPivot}))}},{key:"prettyPathStr",value:function(e){var t,n=e.split("__"),a=[],r=this.query.model,l=null,i=Object(f.a)(n);try{for(i.s();!(t=i.n()).done;){var o=t.value;r=(l=this.config.allModelFields[r].fields[o]).model,a.push(l.prettyName),a.push(l.toMany?"\u21f6":"\u21d2")}}catch(c){i.e(c)}finally{i.f()}return a.slice(0,-1).join(" ")}},{key:"getFieldClass",value:function(e){return e.type?e.concrete?e.canPivot?e.model?"ConcreteField":"FunctionField":"AggregateField":"CalculatedField":"RelatedField"}}]),e}();function ee(e){var t=e.lookupType,n=e.onChange,l=e.value,i=e.field,o=function(e){return n(e.target.value)},c=Object(a.useContext)(A),u=Object(a.useContext)(R),s={date:["Date filter values can be a literal value e.g. '2020-12-21' or 'today' or a series of clauses applied in order from today.","e.g. 'day=1 month+1 tuesday+2' which means move to the 1st of this month, then move forward a month, then move forward to the second Tuesday.","You can use 'year', 'month' or 'day' with '+', '-', or '=' to add remove or replace the given quantity.","Or you can use a weekday name with '+' or '-' to get the n-th next or previous (including today) instance of that day.","Bear in mind that 'day=1 month+1' may produce a different result from 'month+1 day=1', for example on Jan 31st."],datetime:["Datetime filter values can be a literal value e.g. '2020-12-21 14:56' or 'now' or a series of clauses applied in order from now.","e.g. 'day=1 month+1 tuesday+2' which means move to the 1st of this month, then move forward a month, then move forward to the second Tuesday.","You can use 'year', 'month', 'day', 'hour', 'minute' or 'second' with '+', '-', or '=' to add remove or replace the given quantity.","Or you can use a weekday name with '+' or '-' to get the n-th next or previous (including today) instance of that day.","Bear in mind that 'day=1 month+1' may produce a different result from 'month+1 day=1', for example on Jan 31st."]};if("boolean"===e.lookupType)return r.a.createElement("select",Object.assign({value:l},{onChange:o,className:"FilterValue"}),r.a.createElement("option",{value:!0},"true"),r.a.createElement("option",{value:!1},"false"));if("isnull"===e.lookupType)return r.a.createElement("select",Object.assign({value:l},{onChange:o,className:"FilterValue"}),r.a.createElement("option",{value:"IsNull"},"IsNull"),r.a.createElement("option",{value:"NotNull"},"NotNull"));if(t.endsWith("choice"))return r.a.createElement("select",Object.assign({value:l},{onChange:o,className:"FilterValue"}),i.choices.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})));if("number"===t)return r.a.createElement("input",Object.assign({value:l},{onChange:o,className:"FilterValue",type:"number",step:"0"}));if("jsonfield"===t){var m=l.split(/\|(.*)/);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{value:m[0],onChange:function(e){return n("".concat(e.target.value,"|").concat(m[1]))},className:"FilterValue Half",type:"text"}),r.a.createElement("input",{value:m[1],onChange:function(e){return n("".concat(m[0],"|").concat(e.target.value))},className:"FilterValue Half",type:"text"}))}return r.a.createElement("input",Object.assign({value:l},{onChange:o,className:"FilterValue",type:"text",onMouseEnter:function(e){return c(e,s[t])},onMouseLeave:function(e){return u(e)}}))}function te(e){var t=e.pathStr,n=e.index,a=e.lookup,l=e.query,i=e.value,o=e.errorMessage,c=e.parsed,u=l.getField(t),s=null,m=null;return null!==u&&(s=l.getType(u)).lookups.hasOwnProperty(a)&&(m=s.lookups[a].type),null===m?r.a.createElement("tr",{className:"Filter"},r.a.createElement("td",null," ",r.a.createElement(j,{onClick:function(){return l.removeFilter(n)}},"close")," ",t),r.a.createElement("td",null,a),r.a.createElement("td",null,i,r.a.createElement("p",{className:"Error"},o))):r.a.createElement("tr",{className:"Filter"},r.a.createElement("td",null,r.a.createElement(j,{onClick:function(){return l.removeFilter(n)}},"close")," ",r.a.createElement(O,{onClick:function(){return l.addField(t,u.defaultSort)}},l.prettyPathStr(t))," "),r.a.createElement("td",null,r.a.createElement("select",{className:"Lookup",value:a,onChange:function(e){return l.setFilterLookup(n,e.target.value)}},s.sortedLookups.map((function(e){return r.a.createElement("option",{key:e,value:e},s.lookups[e].prettyName)})))),r.a.createElement("td",null,"="),r.a.createElement("td",null,r.a.createElement(ee,Object.assign({value:i,field:u,lookupType:m},{onChange:function(e){return l.setFilterValue(n,e)}})),o&&r.a.createElement("p",{className:"Error"},o),null!==c&&("date"===m||"datetime"===m)&&r.a.createElement("p",{className:"Success"},c)))}function ne(e){var t=e.query,n=e.filterErrors,a=e.parsedFilterValues;return r.a.createElement("form",{className:"Filters"},r.a.createElement("table",null,r.a.createElement("tbody",null,e.filters.map((function(e,l){return r.a.createElement(te,Object.assign({query:t,index:l},e,{key:l,errorMessage:n[l],parsed:a[l]}))})))))}function ae(e){var t=e.query,n=e.path,l=e.modelField,i=t.getType(l),o=Object(a.useState)(!1),c=Object(u.a)(o,2),s=c[0],m=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{className:"Field"},r.a.createElement("td",null,l.concrete&&i.defaultLookup&&r.a.createElement(j,{onClick:function(){return t.addFilter(n.join("__"))}},"filter_alt")),r.a.createElement("td",null,l.model&&r.a.createElement(j,{className:"ToggleLink",onClick:function(){return m((function(e){return!e}))}},s?"remove":"add")),r.a.createElement("td",{className:"FieldName ".concat(t.getFieldClass(l))},l.type?r.a.createElement(O,{onClick:function(){return t.addField(n.join("__"),l.defaultSort)}},l.prettyName):l.prettyName+(l.toMany?" \u21f6":""))),s&&r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",{colSpan:"2"},r.a.createElement(re,Object.assign({query:t,path:n},{model:l.model})))))}function re(e){var t=e.query,n=e.model,a=e.path,l=t.getModelFields(n);return r.a.createElement("table",{className:"AllFields"},r.a.createElement("tbody",null,l.sortedFields.map((function(e){var n=l.fields[e];return r.a.createElement(ae,Object.assign({key:e},{query:t,modelField:n},{path:a.concat([e])}))}))))}function le(e){var t=e.query,n=e.sortedModels,a=e.model;return r.a.createElement("select",{className:"ModelSelector",onChange:function(e){return t.setModel(e.target.value)},value:a},n.map((function(e){return r.a.createElement("option",{key:e},e)})))}function ie(e){return r.a.createElement(d.b,{to:"/",className:"Logo"},r.a.createElement("span",null,"DDB"),r.a.createElement("span",{className:"Version"},"v",w))}function oe(e){var t,n=e.query,a=e.rows,l=e.cols,i=e.body,o=e.length,c=e.sortedModels,u=e.model,s=e.filters,m=e.filterErrors,d=e.parsedFilterValues,f=e.baseUrl,p=e.overlay,h=e.formatHints;return t=n.query.fields.length?r.a.createElement(z,{query:n,rows:a,cols:l,body:i,overlay:p,formatHints:h}):r.a.createElement("h2",null,"No fields selected"),r.a.createElement("div",{className:"QueryPage"},r.a.createElement(le,{query:n,sortedModels:c,model:u}),r.a.createElement(ne,{query:n,filters:s,filterErrors:m,parsedFilterValues:d}),r.a.createElement("p",null,r.a.createElement("span",{className:o>=n.query.limit?"Error":""},"Limit:"," ",r.a.createElement("input",{className:"RowLimit",type:"number",value:n.query.limit,onChange:function(e){n.setLimit(e.target.value)},min:"1"})," ","- Showing ",o," results -"," "),r.a.createElement("a",{href:n.getUrlForMedia("csv")},"Download as CSV")," -"," ",r.a.createElement("a",{href:n.getUrlForMedia("json")},"View as JSON")," -"," ",r.a.createElement("a",{href:n.getUrlForMedia("sql")},"View SQL Query")," -"," ",r.a.createElement(M,{name:"View",apiUrl:"".concat(f,"api/views/"),data:W(n.query),redirectUrl:function(e){return"/views/".concat(e.pk,".html")}})),r.a.createElement("div",{className:"MainSpace"},r.a.createElement("div",{className:"FieldsList"},r.a.createElement("div",{className:"Scroller"},r.a.createElement(re,Object.assign({query:n,model:u},{path:[]})))),t,r.a.createElement("div",null)))}function ce(e){var t=e.canMakePublic,n=e.baseUrl,a=Object(m.h)().pk,l="".concat(n,"api/views/").concat(a,"/"),i=L(l),o=Object(u.a)(i,2),c=o[0],s=o[1];return c?r.a.createElement("div",{className:"EditSavedView"},r.a.createElement("div",null,r.a.createElement("div",{className:"SavedViewActions"},r.a.createElement("span",{className:"SavedViewTitle"},"Saved View"),r.a.createElement(d.b,{to:c.link},"Open")),r.a.createElement("form",null,r.a.createElement("input",{type:"text",value:c.name,onChange:function(e){s({name:e.target.value})},className:"SavedViewName",placeholder:"enter a name"}),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Model:"),r.a.createElement("td",null,c.model)),r.a.createElement("tr",null,r.a.createElement("th",null,"Fields:"),r.a.createElement("td",null,c.fields.replace(/,/g,"\u200b,"))),r.a.createElement("tr",null,r.a.createElement("th",null,"Filters:"),r.a.createElement("td",null,c.query.replace(/&/g,"\u200b&"))),r.a.createElement("tr",null,r.a.createElement("th",null,"Limit:"),r.a.createElement("td",{className:"SavedViewLimit"},r.a.createElement("input",{className:"RowLimit",type:"number",value:c.limit,onChange:function(e){s({limit:e.target.value})}}))),r.a.createElement("tr",null,r.a.createElement("th",null,"Created Time:"),r.a.createElement("td",null,c.createdTime)))),r.a.createElement("textarea",{value:c.description,onChange:function(e){s({description:e.target.value})},placeholder:"enter a description"}),t&&r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Is Public:"),r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",checked:c.public,onChange:function(e){s({public:e.target.checked})}}))),r.a.createElement("tr",null,r.a.createElement("th",null,"Public link:"),r.a.createElement("td",null,c.public&&r.a.createElement(S,{text:c.publicLink}))),r.a.createElement("tr",null,r.a.createElement("th",null,"Google Sheets:"),r.a.createElement("td",null,c.public&&r.a.createElement(S,{text:c.googleSheetsFormula})))))),r.a.createElement("div",{className:"SavedViewActions"},r.a.createElement(V,{apiUrl:l,redirectUrl:"/"}),r.a.createElement(d.b,{to:"/"},"Done")))):""}function ue(e){var t=e.baseUrl,n=L("".concat(t,"api/views/")),a=Object(u.a)(n,1)[0];return a?r.a.createElement("div",{className:"SavedViewList"},r.a.createElement("h1",null,"Saved Views"),a.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("h2",null,r.a.createElement(d.b,{className:"Link",to:e.link},e.name||"<unnamed>")),r.a.createElement("p",null,"on ",e.model," - ",r.a.createElement(d.b,{to:"/views/".concat(e.pk,".html")},"edit")),r.a.createElement("p",null,e.description))}))):""}function se(e){var t=e.sortedModels,n=e.baseUrl,a=e.defaultRowLimit,l=e.allModelFields;return r.a.createElement("div",{className:"HomePage"},r.a.createElement("div",null,r.a.createElement("h1",null,"Models"),r.a.createElement("div",null,t.map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("h2",null,r.a.createElement(d.b,{to:K({model:e,fields:[],filters:l[e].defaultFilters,limit:a},"html"),className:"Link"},e)))})))),r.a.createElement(ue,{baseUrl:n}))}var me=n(38);function de(e){var t=e.config,n=Object(m.h)(),l=n.model,i=n.fieldStr,o=Object(a.useState)("Booting..."),d=Object(u.a)(o,2),f=d[0],p=d[1],h=Object(a.useState)(Object(c.a)({model:"",fields:[],filters:[],limit:t.defaultRowLimit},G)),y=Object(u.a)(h,2),v=y[0],E=y[1],g=Object(m.g)().search,b=function(e){"AbortError"!==e.name&&(p("Error"),console.log(e),s.a(e))},F=function(e){return p("Loading..."),q(Z(t.baseUrl,e,"json")).then((function(e){return E((function(t){return Object(c.a)({},t,{body:e.body,cols:e.cols,rows:e.rows,length:e.length,formatHints:e.formatHints,filterErrors:e.filterErrors,parsedFilterValues:e.parsedFilterValues})})),p(k?"Loading...":void 0),e}))};Object(a.useEffect)((function(){var e=function(e){E(e.state),F(e.state).catch(b)};return q("".concat(t.baseUrl,"query/").concat(l,"/").concat(i||"",".query").concat(g)).then((function(n){var a=Object(c.a)({model:n.model,fields:n.fields,filters:n.filters,limit:n.limit},G);E(a),p("Loading..."),window.history.replaceState(a,null,Z(t.baseUrl,a,"html")),window.addEventListener("popstate",e),F(a).catch(b)})),function(){window.removeEventListener("popstate",e)}}),[]);if("Booting..."===f)return"";var w=new $(t,v,(function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=Object(c.a)({},v,{},e);E(a);var r=Object(c.a)({model:a.model,fields:a.fields,filters:a.filters,limit:a.limit},G);window.history.pushState(r,null,Z(t.baseUrl,a,"html")),n&&F(a).then((function(e){var t=Object(c.a)({},e,{},G),n=Object(c.a)({},r);me.deepStrictEqual(t,n)})).catch(b)}));return r.a.createElement(oe,Object.assign({overlay:f,query:w,sortedModels:t.sortedModels,baseUrl:t.baseUrl},v))}var fe=function(e){var t=e.baseUrl,n=e.canMakePublic;return r.a.createElement(d.a,{basename:t},r.a.createElement(U,null,r.a.createElement(_,null,r.a.createElement(ie,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/query/:model/:fieldStr?.html"},r.a.createElement(de,{config:e})),r.a.createElement(m.b,{path:"/views/:pk.html"},r.a.createElement(ce,{baseUrl:t,canMakePublic:n})),r.a.createElement(m.b,{path:"/"},r.a.createElement(se,e))))))},pe=JSON.parse(document.getElementById("backend-config").textContent),he=document.getElementById("backend-version").textContent.trim();pe.sentryDsn&&o.a({dsn:pe.sentryDsn,release:he,attachStacktrace:!0,maxValueLength:1e4}),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(fe,pe)),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.07949942.chunk.js.map