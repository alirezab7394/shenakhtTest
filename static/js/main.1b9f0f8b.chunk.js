(this.webpackJsonpshenakht=this.webpackJsonpshenakht||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(19),i=n.n(c),o=(n(25),n(10)),s=n(1);function l(e){var t=e.children;return Object(s.jsx)(s.Fragment,{children:t})}var u=n(2),d=n(7);n(27);function j(e){var t=e.title,n=e.style,a=void 0===n?{}:n,c=e.onClick,i=void 0===c?function(){}:c,o=e.type,l=void 0===o?"white":o,u=e.className,j=void 0===u?"":u,f=e.children,b=e.shape,v=void 0===b?"normal":b,O=Object(r.useRef)("1"),h=Object(r.useState)({}),p=Object(d.a)(h,2),g=p[0],m=p[1],k=function(e){i(e);var t=Math.max(e.currentTarget.getBoundingClientRect().width,e.currentTarget.getBoundingClientRect().height),n=e.pageX-e.currentTarget.getBoundingClientRect().left-t/2,r=e.pageY-e.currentTarget.getBoundingClientRect().top-t/2;O.current="1"===O.current?"2":"1",m({left:n,top:r,width:t,height:t,animation:"rippleAnimation".concat(O.current," 0.65s linear")})};return Object(s.jsxs)("button",{className:"myCustomButtonClass ".concat(l," ").concat(j," ").concat(v),style:a,onClick:function(e){return k(e)},children:[f||t,Object(s.jsx)("div",{className:"myCustomButtonClass--ripple",style:g})]})}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v=r.createElement("path",{d:"M11.672 3.891l-8.109 8.109 8.109 8.109-1.781 1.781-9.891-9.891 9.891-9.891z"});function O(e,t){var n=e.title,a=e.titleId,c=b(e,["title","titleId"]);return r.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:t,"aria-labelledby":a},c),void 0===n?r.createElement("title",{id:a},"arrow_back_ios"):n?r.createElement("title",{id:a},n):null,v)}var h=r.forwardRef(O);n.p;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createElement("path",{d:"M9.984 20.016h-4.969v-8.016h-3l9.984-9 9.984 9h-3v8.016h-4.969v-6h-4.031v6z"});function k(e,t){var n=e.title,a=e.titleId,c=g(e,["title","titleId"]);return r.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:t,"aria-labelledby":a},c),void 0===n?r.createElement("title",{id:a},"home"):n?r.createElement("title",{id:a},n):null,m)}var x=r.forwardRef(k);n.p,n(28);function w(){var e=Object(u.f)();return Object(s.jsxs)("div",{className:"Header",children:[Object(s.jsx)(j,{shape:"iconButton",onClick:function(){return null===e||void 0===e?void 0:e.goBack()},children:Object(s.jsx)(h,{})}),Object(s.jsx)(j,{shape:"iconButton",style:{marginLeft:"1rem"},onClick:function(){return null===e||void 0===e?void 0:e.push("/")},children:Object(s.jsx)(x,{})})]})}n(37);function y(e){var t=e.children;return Object(s.jsxs)("div",{className:"layout",children:[Object(s.jsx)(w,{}),Object(s.jsx)(l,{children:t})]})}var T=n(8),C=n(9),N=Object(r.createContext)({tasks:[],editTask:function(){},addNewTask:function(){},removeTask:function(){},changeParent:function(){}});function I(e){var t=e.children,n=Object(r.useState)([]),a=Object(d.a)(n,2),c=a[0],i=a[1];Object(r.useEffect)((function(){var e,t=null!==(e=JSON.parse(localStorage.getItem("tasksList")))&&void 0!==e?e:[];t&&i(t)}),[]),Object(r.useEffect)((function(){c.length&&localStorage.setItem("tasksList",JSON.stringify(c))}),[c]);var o=function e(t,n){for(var r=Object(C.a)(n),a=0;a<c.length;a++){var i=c[a];i.parent===t&&(r=Object(C.a)(e(i.id,r)),r=Object(C.a)(r.filter((function(e){return e.parent!==t}))))}return r};return Object(s.jsx)(N.Provider,{value:{tasks:c,editTask:function(e,t){var n=Object(C.a)(c),r=c.findIndex((function(t){return t.id===e}));r>=0&&(n[r]=Object(T.a)(Object(T.a)({},n[r]),{},{title:t}),i(n))},addNewTask:function(e){i([].concat(Object(C.a)(c),[{id:(new Date).getTime(),parent:e,title:""}]))},removeTask:function(e){var t=Object(C.a)(o(e,c).filter((function(t){return t.id!==e})));i(t)},changeParent:function(e,t){var n=Object(C.a)(c),r=c.findIndex((function(t){return t.id===e}));r>=0&&(n[r]=Object(T.a)(Object(T.a)({},n[r]),{},{parent:t}),i(n))}},children:t})}n(38);function P(e){var t=e.hasChildren,n=e.isOpen,r=e.id;return Object(s.jsx)(o.b,{to:"/".concat(r),children:Object(s.jsx)("div",{className:"LinkDot ".concat(t&&!n&&"light"),children:Object(s.jsx)("span",{className:"LinkDot--main",children:"\u25cf"})})})}var S=Object(r.memo)(P);n(39);function B(e){var t=e.open,n=e.onChange,r=e.isHovered;return Object(s.jsx)("span",{className:"OpenCloseTriangle ".concat(t&&"open"," ").concat(r&&"hovered"),onClick:function(){return n()},children:"\u25b6"})}var E=Object(r.memo)(B);n(40);function D(e){var t=e.value,n=void 0===t?"":t,a=e.onBlur,c=e.isTitle,i=e.addNewTask,o=e.parentID,l=e.removeTask,u=e.id,j=e.beforeSibling,f=e.changeParent,b=e.rootParentID,v=Object(r.useState)(n),O=Object(d.a)(v,2),h=O[0],p=O[1];Object(r.useEffect)((function(){n!==h&&p(n)}),[n]);return Object(s.jsx)("input",{className:"TaskInput ".concat(c&&"title"),value:h,onKeyDown:function(e){i&&"Enter"===e.key&&i(o),l&&e.ctrlKey&&"Delete"===e.key&&l(u),f&&(e.shiftKey&&"Tab"===e.key?(f(u,b),e.preventDefault()):"Tab"===e.key&&(j&&f(u,j.id),e.preventDefault()))},onChange:function(e){p(e.target.value)},onBlur:function(){return a(h)},autoFocus:!0})}var L=Object(r.memo)(D),F=function(){var e=Object(r.useContext)(N);return{tasks:e.tasks,editTask:e.editTask,addNewTask:e.addNewTask,removeTask:e.removeTask,changeParent:e.changeParent}};function M(e){var t=e.showChildren,n=e.childrenList,a=e.rootParentID,c=void 0===a?null:a;return t?Object(s.jsx)("div",{className:"Task--container",children:n.map((function(e,t,n){var a;return Object(r.createElement)(J,Object(T.a)(Object(T.a)({},e),{},{beforeSibling:null!==(a=n[t-1])&&void 0!==a?a:null,key:e.id,rootParentID:c}))}))}):Object(s.jsx)(s.Fragment,{})}var R=Object(r.memo)(M);n(41);function A(e){var t=e.title,n=void 0===t?"":t,a=e.id,c=e.parent,i=e.beforeSibling,o=e.rootParentID,l=void 0===o?null:o,u=F(),j=u.tasks,f=u.editTask,b=u.addNewTask,v=u.removeTask,O=u.changeParent,h=Object(r.useState)(!1),p=Object(d.a)(h,2),g=p[0],m=p[1],k=Object(r.useState)(!1),x=Object(d.a)(k,2),w=x[0],y=x[1],T=Object(r.useMemo)((function(){return j.filter((function(e){return e.parent===a}))}),[j,a]),C=T.length>0;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"Task",onMouseEnter:function(){return y(!0)},onMouseLeave:function(){return y(!1)},children:[C&&Object(s.jsx)(E,{isHovered:w,open:g,onChange:function(){return m(!g)}}),Object(s.jsx)(S,{hasChildren:C,isOpen:g,id:a}),Object(s.jsx)(L,{value:n,onBlur:function(e){f(a,e)},addNewTask:b,removeTask:v,id:a,parentID:c,beforeSibling:i,changeParent:O,rootParentID:l})]}),Object(s.jsx)(R,{showChildren:g,childrenList:T,rootParentID:c})]})}var J=Object(r.memo)(A);n(42);function H(e){var t=e.parent,n=F().addNewTask;return Object(s.jsx)("div",{className:"AddNew",onClick:function(){return n(t)},children:Object(s.jsx)("span",{className:"AddNew--main",children:"+"})})}n(43);function K(){var e=F(),t=e.tasks,n=e.editTask,r=Object(u.g)().id,a=parseInt(r)?parseInt(r):null,c=t.find((function(e){return e.id===a}));return Object(s.jsxs)("div",{className:"TaskContainer",children:[c&&Object(s.jsx)(L,{value:c.title,onBlur:function(e){n(a,e)},isTitle:!0}),t.filter((function(e){return e.parent===a})).map((function(e,t,n){var r;return Object(s.jsx)(J,{title:e.title,id:e.id,parent:e.parent,beforeSibling:null!==(r=n[t-1])&&void 0!==r?r:null},e.id)})),Object(s.jsx)(H,{parent:a})]})}function z(){return Object(s.jsx)(u.c,{children:Object(s.jsx)(u.a,{exact:!0,path:"/:id?",children:Object(s.jsx)(I,{children:Object(s.jsx)(K,{})})})})}n(44);var _=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(o.a,{basename:"/shenakht/",children:Object(s.jsx)(y,{children:Object(s.jsx)(z,{})})})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(_,{})}),document.getElementById("root")),X()}},[[45,1,2]]]);
//# sourceMappingURL=main.1b9f0f8b.chunk.js.map