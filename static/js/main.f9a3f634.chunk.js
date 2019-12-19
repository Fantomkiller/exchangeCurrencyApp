(this.webpackJsonpbudgetapp=this.webpackJsonpbudgetapp||[]).push([[0],{24:function(e,t,n){e.exports=n(42)},29:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),u=n.n(c),i=(n(29),n(30),n(2)),l=n(5),o="ADD_TRANSACTION",s="REMOVE_TRANSACTION",m="CHANGE_EXCHANGE_RATE",d=function(e){return{type:o,item:e}},E=function(e){return{type:s,item:e}},f=function(e){return{type:m,item:e}},v=(n(36),Object(l.a)(null,(function(e){return{changeRates:function(t){return e(f(t))}}}))((function(e){var t=r.a.createRef(),n=Object(i.c)((function(e){return e.transactions.exchangeRate}));return r.a.createElement("div",{className:"CurrencyRatioExchangeContainer"},r.a.createElement("div",{className:"section-header"},r.a.createElement("h2",null,"Exchange rate")),r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("div",null,"1 \u20ac = "),r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),e.changeRates(t.current.value)}},r.a.createElement("input",{type:"number",pattern:"[0-9]+([,\\.][0-9]+)?",step:"0.01",min:"0",title:"The number input must start with a number and use either comma or a dot as a decimal character.",ref:t,className:"exchangeValueInput",defaultValue:n}),r.a.createElement("div",null,"z\u0142"),r.a.createElement("button",{type:"submit",className:"button changeButton"}," Change"))))}))),h=function(e){var t=e.exchangeRate?e.exchangeRate:1,n=Math.round(e.value*t*100)/100,a=e.exchangeRate?n+" z\u0142":n+" \u20ac";return r.a.createElement("div",{className:"CurrencyContainer"},r.a.createElement("span",{className:"currencyValue"},a))},p=(n(37),Object(l.a)(null,(function(e){return{remove:function(t){return e(E(t))}}}))((function(e){return r.a.createElement("div",{className:"TransactionView"},r.a.createElement("span",{className:"transactionName-container"},e.name),r.a.createElement(h,{value:e.valueEuro}),r.a.createElement(h,{value:e.valueEuro,exchangeRate:e.exchangeRate}),r.a.createElement("button",{className:"Button removeButton",onClick:function(){return t=e.id,void e.remove(t);var t}},"X"))}))),b=(n(38),function(){var e=Object(i.c)((function(e){return e.transactions.list})),t=Object(i.c)((function(e){return e.transactions.exchangeRate})),n=e.slice().sort((function(e,t){return e.valueEuro<t.valueEuro?1:-1})).slice(0,3);return r.a.createElement("div",{className:"TopTransactionList"},r.a.createElement("div",{className:"section-header"},r.a.createElement("h2",null,"Top transactions")),n.map((function(e){return r.a.createElement(p,{key:e.id,id:e.id,name:e.name,valueEuro:e.valueEuro,exchangeRate:t})})))}),N=n(23),g=(n(39),Object(i.b)(null,(function(e){return{add:function(t){return e(d(t))}}}))((function(e){var t=r.a.createRef(),n=r.a.createRef(),c=Object(i.c)((function(e){return e.transactions.list})),u=Object(a.useState)(""),l=Object(N.a)(u,2),o=l[0],s=l[1],m=o?"":" is-disabled";return r.a.createElement("div",{className:"TransactionForm"},r.a.createElement("div",{className:"section-title"},r.a.createElement("h2",null,"Add new transaction")),r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),e.add({id:c.length,name:t.current.value,valueEuro:parseInt(n.current.value)}),s(""),t.current.value="",n.current.value=1}},r.a.createElement("input",{ref:t,name:"transactionNameInput",className:"transactionNameInput",placeholder:"Transaction name",onChange:function(){s(t.current.value)},required:!0}),r.a.createElement("input",{type:"number",pattern:"[0-9]+([,\\.][0-9]+)?",step:"any",min:"0.01",title:"The number input must start with a number and use either comma or a dot as a decimal character.",name:"transactionValueInput",ref:n,defaultValue:1,className:"transactionValueInput"}),r.a.createElement("button",{className:"button addButton"+m,type:"submit"},"+")))}))),R=Object(l.a)(null,(function(e){return{remove:function(t){return e(E(t))}}}))((function(){var e=Object(i.c)((function(e){return e.transactions.list})),t=Object(i.c)((function(e){return e.transactions.exchangeRate}));return r.a.createElement("div",{className:"TransactionListContainer"},r.a.createElement("div",{className:"section-header"},r.a.createElement("h2",null,"Transaction List")),e.map((function(e){return r.a.createElement(p,{key:e.id,id:e.id,name:e.name,valueEuro:e.valueEuro,exchangeRate:t})})))})),O=(n(40),function(){var e=Object(i.c)((function(e){return e.transactions.list})),t=Object(i.c)((function(e){return e.transactions.exchangeRate})),n=function(e){return e.reduce((function(e,t){return e+t.valueEuro}),0)};return r.a.createElement("div",{className:"TransactionSum"},r.a.createElement("div",{className:"section-header"},r.a.createElement("h2",null,"Sum of transactions")),r.a.createElement("div",{className:"information-wrapper"},r.a.createElement(h,{value:n(e.slice())}),r.a.createElement(h,{value:n(e.slice()),exchangeRate:t})))});var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"left-column"},r.a.createElement(g,null),r.a.createElement(R,null)),r.a.createElement("div",{className:"right-column"},r.a.createElement(v,null),r.a.createElement(b,null),r.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=n(6),T=n(21),y=n(15),w={exchangeRate:4.27,list:[{id:0,name:"PC parts",valueEuro:112.6},{id:1,name:"Truck Fuel",valueEuro:125.4},{id:2,name:"Internet Bills",valueEuro:20.22},{id:3,name:"Christmas Presents",valueEuro:85.32}]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(y.a)(e,(function(e){e.list.push(t.item)}));case s:return Object(y.a)(e,(function(e){e.list=e.list.filter((function(e){return e.id!==t.item}))}));case m:return Object(y.a)(e,(function(e){e.exchangeRate=t.item}));default:return e}},A=Object(x.combineReducers)({transactions:C}),I=n(22),k=Object(x.createStore)(A,Object(T.composeWithDevTools)(Object(x.applyMiddleware)(I.a)));u.a.render(r.a.createElement(i.a,{store:k},r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.f9a3f634.chunk.js.map