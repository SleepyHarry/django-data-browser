(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{15:function(e,t,n){},20:function(e,t,n){e.exports=n(28)},25:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(17),i=n.n(l),o=n(32),s=(n(25),n(6)),u=n(7),c=n(8),d=n(11),m=n(12);n(15);function f(e){return a.a.createElement("button",{type:"button",className:"Link "+(e.className||""),onClick:e.onClick},e.children)}function h(e){return"boolean"===e.lookup.type?a.a.createElement("select",{className:"FilterValue",onChange:e.onChange,value:e.value},a.a.createElement("option",{value:!0},"true"),a.a.createElement("option",{value:!1},"false")):"number"===e.lookup.type?a.a.createElement("input",{className:"FilterValue",type:"number",step:"0",name:e.path,value:e.value,onChange:e.onChange}):a.a.createElement("input",{className:"FilterValue",type:"text",name:e.path,value:e.value,onChange:e.onChange})}var p=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.path,t=this.props.index,n=this.props.lookup,r=this.props.query,l=r.getFieldType(r.getField(e));return a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement(f,{onClick:function(){return r.removeFilter(t)}},"\u2718")," ",a.a.createElement(f,{onClick:function(){return r.addField(e)}},e)," "),a.a.createElement("td",null,a.a.createElement("select",{className:"Lookup",value:n,onChange:function(e){return r.setFilterLookup(t,e.target.value)}},l.sortedLookups.map((function(e){return a.a.createElement("option",{key:e,value:e},e.replace("_"," "))})))),a.a.createElement("td",null,"="),a.a.createElement("td",null,a.a.createElement(h,{name:"".concat(e,"__").concat(n),value:this.props.value,onChange:function(e){return r.setFilterValue(t,e.target.value)},lookup:l.lookups[n]}),this.props.errorMessage))}}]),n}(a.a.Component);function y(e){return a.a.createElement("form",{className:"Filters"},a.a.createElement("table",{className:"Flat"},a.a.createElement("tbody",null,e.filters.map((function(t,n){return a.a.createElement(p,Object.assign({query:e.query,key:n,index:n},t))})))))}var v=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={isToggleOn:!1},r}return Object(c.a)(n,[{key:"handleClick",value:function(){this.setState((function(e){return{isToggleOn:!e.isToggleOn}}))}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("td",null,a.a.createElement(f,{className:"ToggleLink",onClick:this.handleClick.bind(this)},this.state.isToggleOn?">":"+")),a.a.createElement("td",null,this.props.title,this.state.isToggleOn&&this.props.children))}}]),n}(a.a.Component);function E(e){var t=e.modelFields.fks[e.fkName];return a.a.createElement("tr",{key:e.fkName},a.a.createElement("td",null),a.a.createElement(v,{title:e.fkName},a.a.createElement(k,{query:e.query,model:t.model,path:"".concat(e.path,"__")})))}function g(e){var t=e.modelFields.fields[e.fieldName];return a.a.createElement("tr",{key:e.fieldName},a.a.createElement("td",null,t.concrete&&a.a.createElement(f,{onClick:function(){return e.query.addFilter(e.path)}},"Y")),a.a.createElement("td",null),a.a.createElement("td",null,a.a.createElement(f,{onClick:function(){return e.query.addField(e.path)}},e.fieldName)))}function k(e){var t=e.query.getModelFields(e.model);return a.a.createElement("table",null,a.a.createElement("tbody",null,t.sortedFks.map((function(n){return a.a.createElement(E,{query:e.query,path:"".concat(e.path).concat(n),fkName:n,modelFields:t})})),t.sortedFields.map((function(n){return a.a.createElement(g,{query:e.query,path:"".concat(e.path).concat(n),fieldName:n,modelFields:t})}))))}function q(e){return a.a.createElement("thead",null,a.a.createElement("tr",null,e.fields.map((function(t,n){var r=e.query.getField(t.path);return a.a.createElement("th",{key:n},a.a.createElement(f,{onClick:function(){return e.query.removeField(n)}},"\u2718")," ",r.concrete?a.a.createElement(a.a.Fragment,null,a.a.createElement(f,{onClick:function(){return e.query.addFilter(t.path)}},"Y")," ",a.a.createElement(f,{onClick:function(){return e.query.toggleSort(n)}},t.path)," ",{dsc:"\u2191".concat(t.priority),asc:"\u2193".concat(t.priority),null:""}[t.sort]):t.path)})),!e.fields.length&&a.a.createElement("th",null,"No fields selected")))}function b(e){return"html"===e.modelField.type?a.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.value}}):String(e.value)}function F(e){return a.a.createElement("tbody",null,e.results.map((function(t,n){return a.a.createElement("tr",{key:n},t.map((function(t,n){return a.a.createElement("td",{key:n},a.a.createElement(b,{query:e.query,value:t,modelField:e.query.getField(e.fields[n].path)}))})))})))}function C(e){return a.a.createElement("table",null,a.a.createElement(q,{query:e.query,fields:e.fields}),a.a.createElement(F,{query:e.query,results:e.results,fields:e.fields}))}function O(e){return a.a.createElement("select",{className:"ModelSelector",onChange:function(t){return e.query.setModel(t.target.value)},value:e.model},e.sortedModels.map((function(e){return a.a.createElement("option",{key:e},e)})))}function j(e){return a.a.createElement("div",{className:"Logo",onClick:function(){return e.query.setModel("")}},a.a.createElement("span",null,"DDB"),a.a.createElement("span",{className:"Version"},"v",e.version))}function w(e){var t=e.query.getUrlForSave();return a.a.createElement("div",{id:"body"},a.a.createElement(j,{query:e.query,version:e.version}),a.a.createElement(O,{query:e.query,sortedModels:e.sortedModels,model:e.model}),a.a.createElement(y,{query:e.query,filters:e.filters}),a.a.createElement("p",null,"Showing ",e.results.length," results -"," ",a.a.createElement("a",{href:e.query.getUrlForMedia("csv")},"Download as CSV")," -"," ",a.a.createElement("a",{href:e.query.getUrlForMedia("json")},"View as JSON"),t&&a.a.createElement(a.a.Fragment,null," ","- ",a.a.createElement("a",{href:t},"Save View")," ")),a.a.createElement("div",{className:"MainSpace"},a.a.createElement("div",{className:"FieldsList"},a.a.createElement(k,{query:e.query,model:e.model,path:""})),a.a.createElement(C,{query:e.query,fields:e.fields,results:e.results})))}function M(e){return a.a.createElement("div",{id:"body"},a.a.createElement(j,{query:e.query,version:e.version}),a.a.createElement("div",{className:"Index"},a.a.createElement("div",null,a.a.createElement("h1",null,"Models"),a.a.createElement("div",null,e.sortedModels.map((function(t){return a.a.createElement("div",{key:t},a.a.createElement("button",{className:"Link",onClick:function(){return e.query.setModel(t)}},t))})))),a.a.createElement("div",null,a.a.createElement("h1",null,"Saved Views"),a.a.createElement("div",null,e.savedViews.map((function(t,n){return a.a.createElement("div",{key:n},a.a.createElement("button",{className:"Link",onClick:function(){return e.query.setQuery(t.query)}},t.model," - ",t.name),a.a.createElement("p",null,t.description))}))))))}var N=n(19);function S(e){return{model:e.model,fields:e.fields.map((function(e){return e.path+{asc:"+".concat(e.priority),dsc:"-".concat(e.priority),null:""}[e.sort]})).join(","),query:e.filters.map((function(e){return"".concat(e.path,"__").concat(e.lookup,"=").concat(e.value)})).join("&")}}function L(e,t,n){var r=S(t),a="".concat(e,"query/").concat(r.model);return"".concat(window.location.origin).concat(a,"/").concat(r.fields,".").concat(n,"?").concat(r.query)}var V,Q=function(){function e(t,n,r){Object(u.a)(this,e),this.config=t,this.query=n,this.setQuery=r}return Object(c.a)(e,[{key:"getField",value:function(e){var t,n=e.split("__"),r=n.slice(-1),a=this.query.model,l=Object(N.a)(n.slice(0,-1));try{for(l.s();!(t=l.n()).done;){var i=t.value;a=this.config.allModelFields[a].fks[i].model}}catch(o){l.e(o)}finally{l.f()}return this.config.allModelFields[a].fields[r]}},{key:"getFieldType",value:function(e){return this.config.types[e.type]}},{key:"getModelFields",value:function(e){return this.config.allModelFields[e]}},{key:"getDefaultLookValue",value:function(e){return this.config.types[e.lookups[e.defaultLookup].type].defaultValue}},{key:"addField",value:function(e){var t=this.query.fields.slice();t.push({path:e,sort:null});var n=this.query.results.map((function(e){return e.concat([""])}));this.setQuery({fields:t,results:n})}},{key:"removeField",value:function(e){var t=this.query.fields.slice();t.splice(e,1);var n=this.query.results.map((function(t){return t.slice(0,e).concat(t.slice(e+1))}));this.setQuery({fields:t,results:n})}},{key:"toggleSort",value:function(e){var t=this.query.fields[e],n={asc:"dsc",dsc:null,null:"asc"}[t.sort],r=this.query.fields.slice();t.sort&&(r=r.map((function(e){return Object(s.a)({},e,{priority:null!=e.priority&&e.priority>t.priority?e.priority-1:e.priority})}))),n?(r=r.map((function(e){return Object(s.a)({},e,{priority:null!=e.priority?e.priority+1:e.priority})})))[e]=Object(s.a)({},t,{sort:n,priority:0}):r[e]=Object(s.a)({},t,{sort:null,priority:null}),this.setQuery({fields:r})}},{key:"addFilter",value:function(e){var t=this.getFieldType(this.getField(e)),n=this.query.filters.slice();n.push({errorMessage:null,path:e,lookup:t.defaultLookup,value:this.getDefaultLookValue(t)}),this.setQuery({filters:n})}},{key:"removeFilter",value:function(e){var t=this.query.filters.slice();t.splice(e,1),this.setQuery({filters:t})}},{key:"setFilterValue",value:function(e,t){var n=this.query.filters.slice();n[e]=Object(s.a)({},n[e],{value:t}),this.setQuery({filters:n})}},{key:"setFilterLookup",value:function(e,t){var n=this.query.filters.slice();n[e]=Object(s.a)({},n[e],{lookup:t}),this.setQuery({filters:n})}},{key:"setModel",value:function(e){this.setQuery({model:e,fields:[],filters:[],results:[]})}},{key:"getUrlForSave",value:function(){if(null===this.config.adminUrl)return null;var e=S(this.query);e.model_name=e.model;var t=new URLSearchParams(e).toString();return"".concat(window.location.origin).concat(this.config.adminUrl,"?").concat(t)}},{key:"getUrlForMedia",value:function(e){return L(this.config.baseUrl,this.query,e)}}]),e}(),U=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state=e.initialState,r}return Object(c.a)(n,[{key:"fetchResults",value:function(e){var t=this,n=L(this.props.config.baseUrl,e,"json");V&&V.abort(),V=new AbortController,fetch(n,{signal:V.signal}).then((function(e){return e.json()})).then((function(e){t.setState(e)}),(function(e){t.setState({error:e})}))}},{key:"componentDidMount",value:function(){var e=this,t={model:this.state.model,fields:this.state.fields,filters:this.state.filters,results:[]};window.history.replaceState(t,null,L(this.props.config.baseUrl,this.state,"html")),this.fetchResults(this.state),window.onpopstate=function(t){e.fetchResults(t.state),e.setState(t.state)}}},{key:"handleQueryChange",value:function(e){var t=Object(s.a)({},this.state,{},e);this.setState(e);var n={model:t.model,fields:t.fields,filters:t.filters,results:[]};window.history.pushState(n,null,L(this.props.config.baseUrl,t,"html")),this.fetchResults(t)}},{key:"render",value:function(){var e=new Q(this.props.config,this.state,this.handleQueryChange.bind(this));return this.state.model?a.a.createElement(w,Object.assign({query:e,sortedModels:this.props.config.sortedModels,version:this.props.config.version},this.state)):a.a.createElement(M,{query:e,sortedModels:this.props.config.sortedModels,savedViews:this.props.config.savedViews,version:this.props.config.version})}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=JSON.parse(document.getElementById("django-data").textContent);_.sentryDsn&&o.a({dsn:_.sentryDsn}),i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(U,_)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.f1a95030.chunk.js.map