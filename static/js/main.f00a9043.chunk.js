(this["webpackJsonpclothe-shop"]=this["webpackJsonpclothe-shop"]||[]).push([[0],{65:function(e,t,n){},67:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(1),a=n.n(c),i=n(34),s=n.n(i),l=n(19),o=n(7),u=n(46),d=(n(65),n(13)),b=n.n(d),p=n(4),m=n(20),h=n(27),j=n(28),O=n(30),f=n(29),g=n(8),v=n(5),x=(n(67),n(31)),y=(n(68),n(70),function(){var e=Object(m.a)(b.a.mark((function e(t,n){var r,c,a,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=k.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return c=t.displayName,a=t.email,i=new Date,e.prev=9,e.next=12,r.set(Object(p.a)({displayName:c,email:a,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());x.a.initializeApp({apiKey:"AIzaSyDmOskRzYLqQTEnmO8KBKYp7zRUw5woUas",authDomain:"clothe-shop-db.firebaseapp.com",databaseURL:"https://clothe-shop-db.firebaseio.com",projectId:"clothe-shop-db",storageBucket:"clothe-shop-db.appspot.com",messagingSenderId:"188346826206",appId:"1:188346826206:web:9b78eda4d0e5a61fdc714f",measurementId:"G-TG9S5ECL8T"});var w=x.a.auth(),k=x.a.firestore(),N=new x.a.auth.GoogleAuthProvider;N.setCustomParameters({prompt:"select_account"});var E=function(){return w.signInWithPopup(N)};x.a;function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var I=c.createElement("desc",null,"Created with Sketch."),T=c.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},c.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},c.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),c.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))));function S(e,t){var n=e.title,r=e.titleId,a=U(e,["title","titleId"]);return c.createElement("svg",C({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},a),void 0===n?c.createElement("title",{id:r},"Group"):n?c.createElement("title",{id:r},n):null,I,T)}var A=c.forwardRef(S),_=(n.p,n(72),{TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"}),R=function(){return{type:_.TOGGLE_CART_HIDDEN}},D=function(e){return{type:_.ADD_ITEM,payload:e}};function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var B=c.createElement("g",null),G=c.createElement("g",null),H=c.createElement("g",null),L=c.createElement("g",null),W=c.createElement("g",null),q=c.createElement("g",null),V=c.createElement("g",null),z=c.createElement("g",null),F=c.createElement("g",null),J=c.createElement("g",null),K=c.createElement("g",null),Y=c.createElement("g",null),Q=c.createElement("g",null),X=c.createElement("g",null),Z=c.createElement("g",null);function $(e,t){var n=e.title,r=e.titleId,a=P(e,["title","titleId"]);return c.createElement("svg",M({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),B,G,H,L,W,q,V,z,F,J,K,Y,Q,X,Z)}var ee=c.forwardRef($),te=(n.p,n(73),function(e){return e.cart}),ne=Object(v.a)([te],(function(e){return e.cartItems})),re=Object(v.a)([ne],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),ce=Object(v.a)([ne],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),ae=Object(v.a)([te],(function(e){return e.hidden})),ie=Object(v.b)({itemCount:re}),se=Object(o.b)(ie,(function(e){return{toggleCartHidden:function(){return e(R())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(r.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(r.jsx)(ee,{className:"shopping-icon"}),Object(r.jsx)("span",{className:"item-count",children:n})]})})),le=(n(74),function(e){var t=e.item,n=t.imageUrl,c=t.price,a=t.name,i=t.quantity;return Object(r.jsxs)("div",{className:"cart-item",children:[Object(r.jsx)("img",{src:n,alt:"item"}),Object(r.jsxs)("div",{className:"item-details",children:[Object(r.jsx)("span",{className:"name",children:a}),Object(r.jsxs)("span",{className:"price",children:[i," x $",c]})]})]})}),oe=n(21),ue=n(14),de=n(15);function be(){var e=Object(ue.a)(["\n    min-width: 165px;\n    width: auto;\n    height: 50px;\n    letter-spacing: 0.5px;\n    line-height: 50px;\n    padding: 0 35px 0 35px;\n    font-size: 15px;\n    text-transform: uppercase;\n    font-family: 'Open Sans Condensed';\n    font-weight: bolder;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n\n    ","\n"]);return be=function(){return e},e}function pe(){var e=Object(ue.a)(["\n    background-color: #4285f4;\n    color: white;\n    border: none;\n\n    &:hover {\n        background-color: #357ae8;\n        border: none;\n    }\n"]);return pe=function(){return e},e}function me(){var e=Object(ue.a)(["\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n\n    &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n    }\n"]);return me=function(){return e},e}function he(){var e=Object(ue.a)(["\n    background-color: black;\n    color: white;\n    border: none;\n\n    &:hover {\n        background-color: white;\n        color: black;\n        border: 1px solid black;\n    }\n"]);return he=function(){return e},e}var je=Object(de.a)(he()),Oe=Object(de.a)(me()),fe=Object(de.a)(pe()),ge=de.b.button(be(),(function(e){return e.isGoogleSignIn?fe:e.inverted?Oe:je})),ve=function(e){var t=e.children,n=Object(oe.a)(e,["children"]);return Object(r.jsx)(ge,Object(p.a)(Object(p.a)({},n),{},{children:t}))},xe=(n(76),Object(v.b)({cartItems:ne})),ye=Object(g.g)(Object(o.b)(xe)((function(e){var t=e.cartItems,n=e.history,c=e.dispatch;return Object(r.jsxs)("div",{className:"cart-dropdown",children:[Object(r.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(r.jsx)(le,{item:e},e.id)})):Object(r.jsx)("span",{className:"empty-message",children:"Your Cart is empty"})}),Object(r.jsx)(ve,{onClick:function(){n.push("/checkout"),c(R())},children:"GO TO CHECKOUT"})]})}))),we=Object(v.a)([function(e){return e.user}],(function(e){return e.currentUser}));function ke(){var e=Object(ue.a)(["\n    padding: 10px 15px;\n    cursor: pointer;\n"]);return ke=function(){return e},e}function Ne(){var e=Object(ue.a)(["\n    width: 50%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n"]);return Ne=function(){return e},e}function Ee(){var e=Object(ue.a)(["\n    height: 100%;\n    width: 70px;\n    padding: 25px;\n"]);return Ee=function(){return e},e}function Ce(){var e=Object(ue.a)(["\n    height: 70px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 25px;\n"]);return Ce=function(){return e},e}var Ue=de.b.div(Ce()),Ie=Object(de.b)(l.b)(Ee()),Te=de.b.div(Ne()),Se=Object(de.b)(l.b)(ke()),Ae=Object(v.b)({currentUser:we,hidden:ae}),_e=Object(o.b)(Ae)((function(e){var t=e.currentUser,n=e.hidden;return Object(r.jsxs)(Ue,{children:[Object(r.jsx)(Ie,{to:"/",children:Object(r.jsx)(A,{className:"logo"})}),Object(r.jsxs)(Te,{children:[Object(r.jsx)(Se,{to:"/shop",children:"SHOP"}),Object(r.jsx)(Se,{to:"/contact",children:"CONTACT"}),t?Object(r.jsx)(Se,{as:"div",onClick:function(){return w.signOut()},children:"SIGN OUT"}):Object(r.jsx)(Se,{className:"option",to:"/signin",children:"SIGN IN"}),Object(r.jsx)(se,{})]}),n?null:Object(r.jsx)(ye,{})]})})),Re=Object(v.a)([function(e){return e.directory}],(function(e){return e.sections})),De=(n(80),Object(g.g)((function(e){var t=e.title,n=e.imageUrl,c=e.size,a=e.history,i=e.linkUrl,s=e.match;return Object(r.jsxs)("div",{className:"".concat(c," menu-item"),onClick:function(){return a.push("".concat(s.url).concat(i))},children:[Object(r.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(r.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})}))),Me=(n(81),Object(v.b)({sections:Re})),Pe=Object(o.b)(Me)((function(e){var t=e.sections;return Object(r.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(oe.a)(e,["id"]);return Object(r.jsx)(De,Object(p.a)({},n),t)}))})}));function Be(){var e=Object(ue.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 80px;\n\n"]);return Be=function(){return e},e}var Ge=de.b.div(Be()),He=function(){return Object(r.jsx)(Ge,{children:Object(r.jsx)(Pe,{})})},Le=n(50),We=n.n(Le),qe=Object(v.a)([function(e){return e.shop}],(function(e){return e.collections})),Ve=Object(v.a)([qe],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),ze=We()((function(e){return Object(v.a)([qe],(function(t){return t[e]}))})),Fe=(n(82),Object(o.b)(null,(function(e){return{addItem:function(t){return e(D(t))}}}))((function(e){var t=e.item,n=e.addItem,c=t.name,a=t.price,i=t.imageUrl;return Object(r.jsxs)("div",{className:"collection-item",children:[Object(r.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),Object(r.jsxs)("div",{className:"collection-footer",children:[Object(r.jsx)("span",{className:"name",children:c}),Object(r.jsx)("span",{className:"price",children:a+"$"})]}),Object(r.jsx)(ve,{onClick:function(){return n(t)},inverted:!0,children:"ADD TO CART"})]})}))),Je=(n(83),function(e){var t=e.title,n=e.items;return Object(r.jsxs)("div",{className:"collection-preview",children:[Object(r.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(r.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(r.jsx)(Fe,{item:e},e.id)}))})]})}),Ke=(n(84),Object(v.b)({collections:Ve})),Ye=Object(o.b)(Ke)((function(e){var t=e.collections;return Object(r.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(oe.a)(e,["id"]);return Object(r.jsx)(Je,Object(p.a)({},n),t)}))})})),Qe=(n(85),Object(o.b)((function(e,t){return{collection:ze(t.match.params.collectionId)(e)}}))((function(e){var t=e.collection,n=t.title,c=t.items;return Object(r.jsxs)("div",{className:"collection-page",children:[Object(r.jsx)("h2",{className:"title",children:n}),Object(r.jsx)("div",{className:"items",children:c.map((function(e){return Object(r.jsx)(Fe,{item:e},e.id)}))})]})}))),Xe=function(e){var t=e.match;return Object(r.jsxs)("div",{className:"shop-page",children:[Object(r.jsx)(g.b,{exact:!0,path:"".concat(t.path),component:Ye}),Object(r.jsx)(g.b,{path:"".concat(t.path,"/:collectionId"),component:Qe})]})},Ze=n(26),$e=(n(86),function(e){var t=e.handleChange,n=e.label,c=Object(oe.a)(e,["handleChange","label"]);return Object(r.jsxs)("div",{className:"group",children:[Object(r.jsx)("input",Object(p.a)({className:"form-input",onChange:t},c)),n?Object(r.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-input-label"),children:n}):null]})}),et=(n(87),function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).handleSubmit=function(){var e=Object(m.a)(b.a.mark((function e(t){var n,c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.state,c=n.email,a=n.password,e.prev=2,e.next=5,w.signInWithEmailAndPassword(c,a);case 5:r.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),r.handleChange=function(e){var t=e.target,n=t.value,c=t.name;r.setState(Object(Ze.a)({},c,n))},r.state={email:"",password:""},r}return Object(j.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"sign-in",children:[Object(r.jsx)("h2",{children:"I already have an account"}),Object(r.jsx)("span",{children:"Sign in with your email and password"}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(r.jsx)($e,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),Object(r.jsx)($e,{name:"password",type:"password",value:this.state.password,onChange:this.handleChange,label:"password",required:!0}),Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)(ve,{type:"submit",children:" Sign in"}),Object(r.jsx)(ve,{type:"button",onClick:E,isGoogleSignIn:!0,children:" Sign in with Google"})]})]})]})}}]),n}(a.a.Component)),tt=(n(88),function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(m.a)(b.a.mark((function t(n){var r,c,a,i,s,l,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.displayName,a=r.email,i=r.password,s=r.confirmPassword,i===s){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,w.createUserWithEmailAndPassword(a,i);case 8:return l=t.sent,o=l.user,t.next=12,y(o,{displayName:c});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,r=n.name,c=n.value;e.setState(Object(Ze.a)({},r,c))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,c=e.password,a=e.confirmPassword;return Object(r.jsxs)("div",{className:"sign-up",children:[Object(r.jsx)("h2",{className:"title",children:"I do not have an account"}),Object(r.jsx)("span",{children:"Sign up with your email and password"}),Object(r.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(r.jsx)($e,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"DisplayName",required:!0}),Object(r.jsx)($e,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(r.jsx)($e,{type:"password",name:"password",value:c,onChange:this.handleChange,label:"Password",required:!0}),Object(r.jsx)($e,{type:"password",name:"confirmPassword",value:a,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(r.jsx)(ve,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(a.a.Component)),nt=(n(89),function(){return Object(r.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(r.jsx)(et,{}),Object(r.jsx)(tt,{})]})}),rt="SET_CURRENT_USER",ct=(n(90),Object(o.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:_.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(D(t))},removeItem:function(t){return e(function(e){return{type:_.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,c=e.addItem,a=e.removeItem,i=t.name,s=t.imageUrl,l=t.price,o=t.quantity;return Object(r.jsxs)("div",{className:"checkout-item",children:[Object(r.jsx)("div",{className:"image-container",children:Object(r.jsx)("img",{src:s,alt:"item"})}),Object(r.jsx)("span",{className:"name",children:i}),Object(r.jsxs)("span",{className:"quantity",children:[Object(r.jsx)("div",{className:"arrow",onClick:function(){return a(t)},children:"   \u276e"}),Object(r.jsx)("span",{className:"value",children:o}),Object(r.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:"   \u276f"})]}),Object(r.jsxs)("span",{className:"price",children:["$",l]}),Object(r.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),at=n(51),it=n.n(at),st=(n(91),function(e){var t=e.price,n=100*t;return Object(r.jsx)(it.a,{label:"Pay Now",name:"MINKI's WEBSITE",billingAdress:!0,shippingAddress:!0,image:"https://sendeyo.com/up/d/f3eb2117da",descripttion:"Your total is ".concat(t),amout:n,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_51Ht3xIIQhmXHnA8ZixHjDOVGKsAbrvEs2sPwNzwfuK0vz1NGf691rn11euuFMGIYpSAQhKomqFAtANqwbyTej69J00F6cYQ2ck"})}),lt=(n(92),Object(v.b)({cartItems:ne,total:ce})),ot=Object(o.b)(lt)((function(e){var t=e.cartItems,n=e.total;return Object(r.jsxs)("div",{className:"checkout-page",children:[Object(r.jsxs)("div",{className:"checkout-header",children:[Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Product"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Description"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Quantity"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Price"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(r.jsx)(ct,{cartItem:e},e.id)})),Object(r.jsx)("div",{className:"total",children:Object(r.jsxs)("span",{children:["TOTAL: $",n]})}),Object(r.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit cart for payments*",Object(r.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/25 - CVV: 123"]}),Object(r.jsx)(st,{price:n})]})})),ut=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).unsubscribeFromAuth=null,e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=w.onAuthStateChanged(function(){var t=Object(m.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,y(n);case 3:t.sent.onSnapshot((function(t){e(Object(p.a)({id:t.id},t.data()))})),t.next=8;break;case 7:e(n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(_e,{}),Object(r.jsxs)(g.d,{children:[Object(r.jsx)(g.b,{exact:!0,path:"/",component:He}),Object(r.jsx)(g.b,{path:"/shop",component:Xe}),Object(r.jsx)(g.b,{exact:!0,path:"/checkout",component:ot}),Object(r.jsx)(g.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(r.jsx)(g.a,{to:"/"}):Object(r.jsx)(nt,{})}})]})]})}}]),n}(a.a.Component),dt=Object(v.b)({currentUser:we}),bt=Object(o.b)(dt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:rt,payload:e}}(t))}}}))(ut),pt=n(18),mt=n(35),ht=n(52),jt=n.n(ht),Ot=n(53),ft=n.n(Ot),gt={currentUser:null},vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case rt:return Object(p.a)(Object(p.a)({},e),{},{currentUser:t.payload});default:return e}},xt=n(54),yt=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(xt.a)(e),[Object(p.a)(Object(p.a)({},t),{},{quantity:1})])},wt=function(e,t){return t.quantity>1?e.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{quantity:e.quantity-1}):e})):e},kt={hidden:!0,cartItems:[]},Nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.TOGGLE_CART_HIDDEN:return Object(p.a)(Object(p.a)({},e),{},{hidden:!e.hidden});case _.ADD_ITEM:return Object(p.a)(Object(p.a)({},e),{},{cartItems:yt(e.cartItems,t.payload)});case _.REMOVE_ITEM:return Object(p.a)(Object(p.a)({},e),{},{cartItems:wt(e.cartItems,t.payload)});case _.CLEAR_ITEM_FROM_CART:return Object(p.a)(Object(p.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},Et={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},Ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Et,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Ut={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},It=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ut,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Tt={key:"root",storage:ft.a,whiteList:["cart"]},St=Object(pt.c)({user:vt,cart:Nt,directory:Ct,shop:It}),At=Object(mt.a)(Tt,St),_t=[];"development"===Object({NODE_ENV:"production",PUBLIC_URL:"/clothe-shop",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).NODE_ENVV&&_t.push(jt.a);var Rt=Object(pt.d)(At,pt.a.apply(void 0,_t)),Dt=Object(mt.b)(Rt);s.a.render(Object(r.jsx)(o.a,{store:Rt,children:Object(r.jsx)(l.a,{basename:"/clothe-shop",children:Object(r.jsx)(u.a,{persistor:Dt,children:Object(r.jsx)(bt,{})})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.f00a9043.chunk.js.map