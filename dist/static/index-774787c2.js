import{p as f,r as l,aW as P,j as e,az as h,aX as j,aY as I,a8 as B,aA as E,aZ as H,ax as k,ao as y,a_ as C,y as b}from"./sanity.config-48ee1310.js";const v=f(b)`
  position: relative;
`;function A(s){const{children:o}=s,{collapsed:t}=I();return e.jsx(v,{hidden:t,height:"fill",overflow:"auto",children:o})}function R(s){const{actionHandlers:o,index:t,menuItems:n,menuItemGroups:r,title:i}=s,{features:a}=B();return!(n!=null&&n.length)&&!i?null:e.jsx(E,{actions:e.jsx(H,{menuItems:n,menuItemGroups:r,actionHandlers:o}),backButton:a.backButton&&t>0&&e.jsx(k,{as:y,"data-as":"a",icon:C,mode:"bleed",tooltipProps:{content:"Back"}}),title:i})}function U(s){const{index:o,pane:t,paneKey:n,...r}=s,{child:i,component:a,menuItems:u,menuItemGroups:d,type:S,...p}=t,[c,m]=l.useState(null),{title:x=""}=P(t);return e.jsxs(h,{id:n,minWidth:320,selected:r.isSelected,children:[e.jsx(R,{actionHandlers:c==null?void 0:c.actionHandlers,index:o,menuItems:u,menuItemGroups:d,title:x}),e.jsxs(A,{children:[j.isValidElementType(a)&&l.createElement(a,{...r,...p,ref:m,child:i,paneKey:n}),l.isValidElement(a)&&a]})]})}export{U as default};