(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={form:"ContactForm_form__2Quny",inputName:"ContactForm_inputName__2kzYx",label:"ContactForm_label__1R5oq",inputNumber:"ContactForm_inputNumber__14doA",button:"ContactForm_button__1YoGN"}},20:function(e,t,n){e.exports={listItem:"ContactListItem_listItem__1Uzn0",buttonDel:"ContactListItem_buttonDel__2tO_a"}},21:function(e,t,n){e.exports={filterLabel:"FilterForm_filterLabel__3n_eq",filterInput:"FilterForm_filterInput__wOJjJ"}},25:function(e,t,n){e.exports={wrap:"Spinner_wrap__3ZSYt"}},26:function(e,t,n){e.exports={listItem:"ContactList_listItem__2NSOq",button:"ContactList_button__4Y9S0"}},27:function(e,t,n){e.exports={PhonebookContainer:"Phonebook_PhonebookContainer__2oeBd"}},69:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(14),r=n.n(o),s=n(5),i=n(9),u=n(10),l=n(23),b=n(7),j=Object(l.a)({reducerPath:"contactsApi",baseQuery:Object(b.d)({baseUrl:"https://616ae77c16e7120017fa112f.mockapi.io/api/phonebook/"}),tagTypes:["Contact"],endpoints:function(e){return{fetchContacts:e.query({query:function(){return"/contacts"},providesTags:["Contact"]}),deleteContact:e.mutation({query:function(e){return{url:"/contacts/".concat(e),method:"DELETE"}},invalidatesTags:["Contact"]}),createContact:e.mutation({query:function(e){return{url:"/contacts",method:"POST",body:e}},invalidatesTags:["Contact"]})}}}),d=j.useFetchContactsQuery,h=j.useDeleteContactMutation,m=j.useCreateContactMutation,p=n(19),O=n.n(p),f=n(24),x=n.n(f),_=n(25),C=n.n(_),g=n(2),v=function(){return Object(g.jsx)("div",{className:C.a.wrap,children:Object(g.jsx)(x.a,{type:"Circles",color:"#00BFFF",height:80,width:80,timeout:3e3})})},N=n(11),y=n.n(N);function F(e){var t=e.contacts,n=m(),c=Object(i.a)(n,2),o=c[0],r=c[1].isLoading,s=Object(a.useState)(""),l=Object(i.a)(s,2),b=l[0],j=l[1],d=Object(a.useState)(""),h=Object(i.a)(d,2),p=h[0],f=h[1],x=Object(a.useRef)(O.a.generate()),_=Object(a.useRef)(O.a.generate()),C=function(e){switch(e.target.name){case"name":j(e.target.value);break;case"phone":f(e.target.value);break;default:return}};return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("form",{className:y.a.form,onSubmit:function(e){e.preventDefault();var n={style:{borderRadius:"10px",background:"#e8f2f2",color:"#000"}};t.find((function(e){return e.name.toLowerCase()===b.toLowerCase()}))?Object(u.c)("'".concat(b,"' is already in contacts"),n):t.find((function(e){return e.phone===p}))?Object(u.c)("'".concat(p,"' is already in contacts"),n):(o({name:b,phone:p}),u.c.success("New contact '".concat(b,"' is added")),j(""),f(""))},children:[Object(g.jsxs)("label",{className:y.a.label,htmlFor:x.current,children:["Name",Object(g.jsx)("input",{className:y.a.inputName,type:"text",name:"name",value:b,id:x.current,onChange:C,placeholder:" John Smith",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0})]}),Object(g.jsxs)("label",{className:y.a.label,htmlFor:_.current,children:["Phone",Object(g.jsx)("input",{className:y.a.inputNumber,type:"tel",name:"phone",value:p,onChange:C,placeholder:" 111-11-11",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",required:!0})]}),!r&&Object(g.jsx)("button",{className:y.a.button,type:"submit",children:r?Object(g.jsx)(v,{}):"Add contact"})]})})}var w=n(20),k=n.n(w);function L(e){var t=e.id,n=e.name,a=e.phone,c=h(),o=Object(i.a)(c,2),r=o[0],s=o[1].isLoading;return Object(g.jsxs)("li",{className:k.a.listItem,children:[Object(g.jsxs)("div",{children:[Object(g.jsxs)("span",{children:[n,": "]}),Object(g.jsx)("span",{children:a})]}),Object(g.jsxs)("button",{className:k.a.buttonDel,onClick:function(){r(t),u.b.success("Contact '".concat(n,"' deleted"))},disabled:s,children:[s&&Object(g.jsx)(v,{}),"Delete"]})]},t)}var S=n(26),I=n.n(S);function q(e){var t=e.contacts;return t.sort((function(e,t){return e.name.localeCompare(t.name)})),Object(g.jsx)("ul",{className:I.a.list,children:t.map((function(e){var t=e.id,n=e.name,a=e.phone;return Object(g.jsx)(L,{name:n,phone:a},t)}))})}var P=n(21),D=n.n(P);function T(e){var t=e.value,n=e.onChange;return Object(g.jsxs)("label",{className:D.a.filterLabel,children:["Find contacts by name",Object(g.jsx)("input",{className:D.a.filterInput,type:"text",value:t,onChange:n,placeholder:"Enter contact's name"})]})}var A=n(27),z=n.n(A);function E(){var e=d(),t=e.data,n=e.isFetching,c=Object(a.useState)(""),o=Object(i.a)(c,2),r=o[0],s=o[1];return Object(g.jsxs)("div",{className:z.a.PhonebookContainer,children:[Object(g.jsx)("h1",{children:"Phonebook"}),Object(g.jsx)(F,{contacts:t}),Object(g.jsx)("h2",{children:"Contacts"}),t&&0!==t.length?Object(g.jsx)(T,{value:r,onChange:function(e){return s(e.target.value)}}):Object(g.jsx)("h3",{children:"There is no contacts in your phonebook"}),n&&Object(g.jsx)(v,{}),t&&Object(g.jsx)(q,{contacts:t.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}))}),Object(g.jsx)(u.a,{position:"top-right"})]})}function J(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(E,{})})}var M=n(16),R=n(29),Y=n(1),Z=n(28),B=[].concat(Object(R.a)(Object(Y.getDefaultMiddleware)()),[j.middleware]),Q=Object(Y.configureStore)({reducer:Object(M.a)({},j.reducerPath,j.reducer),middleware:B,devTools:!1});Object(Z.setupListeners)(Q.dispatch);n(68);r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(s.a,{store:Q,children:Object(g.jsx)(J,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.2ba2c435.chunk.js.map