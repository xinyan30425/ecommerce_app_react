"use strict";(self.webpackChunkfrotend=self.webpackChunkfrotend||[]).push([[693],{6627:(e,n,t)=>{t.d(n,{Z:()=>l});t(2791);var r=t(8596),i=t(8008),o=t(7025),a=t(1523),s=t(184);const d=(0,r.Z)((e=>({navbar:{display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:999,background:"#ffffff",width:"100%",padding:"1.5rem 1rem 1rem 1rem",boxShadow:"1px 1px 2px rgba(0, 0, 0, 0.1), 2px 2px 4px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.3)",[e.breakpoints.between("999")]:{flexDirection:"row",alignItems:"center",padding:"1rem"}},menuIcon:{display:"none",[e.breakpoints.down("999")]:{display:"block",fontSize:"2rem","& svg":{fontSize:"2rem","&:hover":{color:"#ed1c24"}},"&:hover":{transform:"scale(1.1)"}}},dashboardHead:{fontSize:"2rem",fontWeight:900,color:"black",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.1)",[e.breakpoints.down("sm")]:{fontSize:"1.5rem",marginBottom:"0.5rem"},[e.breakpoints.down("999")]:{fontSize:"1.8rem",marginBottom:0},[e.breakpoints.down("xs")]:{marginRight:"1.5rem",fontSize:"1.8rem"}}}))),l=e=>{let{toggleHandler:n}=e;const t=d();return(0,s.jsxs)("nav",{className:t.navbar,children:[(0,s.jsx)(o.Z,{className:t.menuIcon,onClick:n,children:(0,s.jsx)(i.Z,{fontSize:"2rem"})}),(0,s.jsx)("div",{className:t.dashboardHead,children:(0,s.jsx)(a.rU,{to:"/admin/dashboard",style:{textDecoration:"none",color:"none",width:"100%",height:"100%"}})})]})}},693:(e,n,t)=>{t.r(n),t.d(n,{default:()=>C});var r=t(2791),i=(t(661),t(5151)),o=t(9434),a=t(6534),s=t(7487),d=t(4880),l=t(6549),c=t(6291),m=t(7407),p=t(3959),x=t(272),h=t(8302),g=t(3188),u=t(4279),f=t(6513),b=t(6627),v=t(7736),w=t(8021),j=t(8596),S=t(340),N=t(184);const k=(0,j.Z)((e=>({updateUser1:{display:"flex",alignItems:"flex-start",backgroundColor:"#f1f1f1",justifyContent:"center",width:"100%",gap:"1rem",overflow:"hidden",margin:"-1.1rem 0 0 0",padding:0},firstBox_01:{width:"20%",margin:"0rem",height:"fit-content",backgroundColor:"white",borderRadius:"5px",boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.5)",display:"block",[e.breakpoints.down("999")]:{display:"none"}},toggleBox_01:{width:"16rem",margin:"0rem",height:"fit-content",backgroundColor:"white",borderRadius:"5px",boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.5)",display:"block",zIndex:"100",position:"absolute",top:"58px",left:"17px"},secondBox_01:{width:"75%",height:"fit-content",display:"flex",flexDirection:"column",margin:"-0.5rem 0 0 0",gap:"10px",justifyContent:"center",[e.breakpoints.down("999")]:{width:"100%"}},navBar_01:{margin:"0rem"},formSection:{width:"100%",margin:"auto",borderRadius:"5px",height:"100vh",backgroundColor:"white",padding:"1rem 2rem"},form:{width:"350px",margin:"-1rem auto 0 auto",borderRadius:"5px",padding:"2rem"},avatar:{margin:" 8px auto",backgroundColor:"black"},textField:{marginBottom:e.spacing(2),"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":{color:"black",padding:"12px 14px"},"& .MuiInputLabel-root":{color:"black",fontSize:"14px",textAlign:"center"},"& .MuiInputLabel-root.Mui-focused":{color:"black",fontSize:"14px",textAlign:"center"},"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:"black",color:"black"},"& .MuiOutlinedInput-input":{padding:"13px 8px"},"&.Mui-focused fieldset":{borderColor:"black",color:"black",outline:"none"}}},heading:{textAlign:"center",marginBottom:e.spacing(3),color:"#414141",fontWeight:"bold"},heading_02:{textAlign:"center",textShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.5)",color:"#414141",fontWeight:"900"},nameInput:{position:"relative","& > label":{left:".2rem"},padding:"4px 0px",fontSize:"1rem",width:"100%",marginBottom:e.spacing(5.5),height:".7rem"},loginButton:{color:"#fff",backgroundColor:"#000",border:"2px solid #000",margin:"".concat(e.spacing(3),"px 0"),marginTop:"1rem","&:disabled":{backgroundColor:"#444444",color:"#FFFFFF",borderColor:"#444444"},"&:hover":{backgroundColor:"#ed1c24",color:"#fff",borderColor:"#ed1c24"}}})));const C=function(){const e=k(),n=(0,o.I0)(),t=(0,d.useHistory)(),j=(0,a.VY)(),[C,y]=(0,r.useState)(!1),{error:Z,reviews:I,loading:B}=(0,o.v9)((e=>e.getAllReview)),{error:z,isDeleted:L}=(0,o.v9)((e=>e.deleteReview)),[M,R]=(0,r.useState)("");(0,r.useEffect)((()=>{24===M.length&&n((0,s.B6)(M)),Z&&(j.error(Z),n((0,s.b9)())),z&&(j.error(z),n((0,s.b9)())),L&&(j.success("Review Deleted Successfully"),t.push("/admin/reviews"),n({type:w.qD}))}),[n,Z,j,z,L,M,t]),(0,r.useEffect)((()=>{const e=()=>{window.innerWidth>999&&C&&y(!1)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[C]);const D=[{field:"id",headerName:"Review ID",minWidth:230,flex:.5,headerClassName:"column-header"},{field:"user",headerName:"User",flex:.8,magin:"0 auto",headerClassName:"column-header hide-on-mobile"},{field:"comment",headerName:"Comment",minWidth:350,flex:.8},{field:"rating",headerName:"Rating",type:"number",minWidth:200,flex:.5,headerClassName:"column-header hide-on-mobile",cellClassName:e=>e.getValue(e.id,"rating")>=3?"greenColor":"redColor"},{field:"actions",flex:1,headerName:"Actions",minWidth:230,headerClassName:"column-header1",sortable:!1,renderCell:e=>(0,N.jsx)(N.Fragment,{children:(0,N.jsx)("div",{onClick:()=>{return t=e.getValue(e.id,"id"),void n((0,s.A$)(t,M));var t},children:(0,N.jsx)(m.Z,{className:"iconbtn",style:{marginLeft:"1rem"}})})})}],E=[];return I&&I.forEach((e=>{E.push({id:e._id,user:e.name,comment:e.comment,rating:e.ratings})})),(0,N.jsx)(N.Fragment,{children:B?(0,N.jsx)(c.Z,{}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(l.Z,{title:"All Reviews"}),(0,N.jsxs)("div",{className:e.updateUser1,children:[(0,N.jsx)("div",{className:"".concat(C?e.toggleBox_01:e.firstBox_01),children:(0,N.jsx)(v.Z,{})}),(0,N.jsxs)("div",{className:e.secondBox_01,children:[(0,N.jsx)("div",{className:e.navBar_01,children:(0,N.jsx)(b.Z,{toggleHandler:()=>{console.log("toggle"),y(!C)}})}),(0,N.jsxs)("div",{className:e.formSection,children:[(0,N.jsxs)("form",{className:"".concat(e.form),onSubmit:e=>{e.preventDefault(),n((0,s.B6)(M))},children:[(0,N.jsx)(x.Z,{className:e.avatar,children:(0,N.jsx)(S.Z,{})}),(0,N.jsx)(h.Z,{variant:"h5",component:"h1",className:e.heading,children:"All Reviews"}),(0,N.jsx)(g.Z,{variant:"outlined",fullWidth:!0,className:"".concat(e.nameInput," ").concat(e.textField),label:"Product Id",required:!0,value:M,onChange:e=>R(e.target.value),InputProps:{endAdornment:(0,N.jsx)(u.Z,{position:"end",children:(0,N.jsx)(p.Z,{style:{fontSize:20,color:"#414141"}})})}}),(0,N.jsx)(f.Z,{id:"createProductBtn",type:"submit",fullWidth:!0,variant:"contained",className:e.loginButton,disabled:!!B||""===M,children:"Search"})]}),I&&I.length>0?(0,N.jsxs)("div",{className:"productListContainer",children:[(0,N.jsx)("h4",{id:"productListHeading",children:"ALL PRODUCTS"}),(0,N.jsx)(i._$r,{rows:E,columns:D,pageSize:10,autoHeight:!0,disableSelectionOnClick:!0,className:"productListTable"})]}):(0,N.jsx)("h1",{className:e.heading_02,children:"No Reviews Found"})]}),";"]})]})]})})}},7736:(e,n,t)=>{t.d(n,{Z:()=>x});t(2791);var r=t(4880),i=t(1523),o=t(4567),a=t(7235),s=t(9140),d=t(2419),l=t(7541),c=t(9434),m=t(184);const p=(0,a.Z)((e=>({sidebar:{backgroundColor:"#fff",padding:"2rem 0",boxShadow:"2px 10px 6px rgba(0, 0, 0, 0.4)",borderRadius:"5px",margin:"0 auto",width:"100%"},avatar11:{width:"80px",height:"80px",border:"5px solid #414141",margin:"0 auto",marginBottom:"1rem",display:"flex",justifyContent:"center",alignItems:"center"},name:{fontWeight:"500",textAlign:"center",fontSize:"1rem"},email:{color:"#414141",marginBottom:"1.5rem",textAlign:"center",fontSize:"0.9rem"},divider:{height:"2px",width:"75%",backgroundColor:"#414141",margin:"2rem"},button:{marginLeft:"2rem !important",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",backgroundColor:"#292929 !important",color:"white   !important",width:"70%     !important",padding:"0.8rem 2rem   !important",borderRadius:"4px !important","&:hover":{backgroundColor:"#ed1c24 !important",color:"white !important"}},sideBarMenu:{listStyleType:"none",padding:0,margin:"3rem  10px",width:"100%"},sideBarMenuItem:{display:"flex",alignItems:"center",padding:"0.9rem 1rem",borderRadius:"2px",marginTop:"1.3rem",width:"75%",boxShadow:" 4px 4px 8px rgba(0, 0, 0, 0.3)","&:hover":{backgroundColor:"#ed1c24",boxShadow:"2px 2px 6px rgba(0, 0, 0, 0.4)","& svg":{color:"white"},"& span":{color:"white !important"}},"& svg":{color:"#414141",fontSize:"26px",margin:"0 20px  0 "},"& span":{color:"#414141",fontSize:"1rem",fontWeight:"500",marginLeft:"1rem",textDecoration:"none",textDecorationLine:"none",transition:"color 0.3s ease"}}})));const x=function(){const e=p(),{user:n,loading:t}=(0,c.v9)((e=>e.userData));return(0,r.useHistory)(),(0,m.jsx)(m.Fragment,{children:!t&&(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:e.sidebar,children:[(0,m.jsx)(o.Z,{variant:"subtitle1",className:e.name,children:n&&n.name}),(0,m.jsx)(o.Z,{variant:"subtitle2",className:e.email,children:n&&n.email}),(0,m.jsx)("div",{className:e.divider}),(0,m.jsxs)("ul",{className:e.sideBarMenu,children:[(0,m.jsx)(i.rU,{to:"/",style:{color:"inherit",textDecoration:"none"},children:(0,m.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,m.jsx)(l.Z,{fontSize:"large"}),(0,m.jsx)("span",{className:e.sideBarMenuItem_text,children:"Home"})]})}),(0,m.jsx)(i.rU,{to:"/admin/products",style:{color:"inherit",textDecoration:"none"},children:(0,m.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,m.jsx)(s.Z,{fontSize:"large"}),(0,m.jsxs)("span",{className:e.sideBarMenuItem_text,children:[" ","Products"]})]})}),(0,m.jsx)(i.rU,{to:"/admin/new/product",style:{color:"inherit",textDecoration:"none"},children:(0,m.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,m.jsx)(d.Z,{fontSize:"large"}),(0,m.jsx)("span",{className:e.sideBarMenuItem_text,children:"Add Product"})]})})]})]})})})}},4279:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(7462),i=t(5987),o=t(2791),a=t(8182),s=t(8302),d=t(8317),l=t(9856),c=o.forwardRef((function(e,n){var t=e.children,d=e.classes,c=e.className,m=e.component,p=void 0===m?"div":m,x=e.disablePointerEvents,h=void 0!==x&&x,g=e.disableTypography,u=void 0!==g&&g,f=e.position,b=e.variant,v=(0,i.Z)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),w=(0,l.Y)()||{},j=b;return b&&w.variant,w&&!j&&(j=w.variant),o.createElement(l.Z.Provider,{value:null},o.createElement(p,(0,r.Z)({className:(0,a.Z)(d.root,c,"end"===f?d.positionEnd:d.positionStart,h&&d.disablePointerEvents,w.hiddenLabel&&d.hiddenLabel,"filled"===j&&d.filled,"dense"===w.margin&&d.marginDense),ref:n},v),"string"!==typeof t||u?t:o.createElement(s.Z,{color:"textSecondary"},t)))}));const m=(0,d.Z)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(c)},3959:(e,n,t)=>{var r=t(4836),i=t(5263);n.Z=void 0;var o=i(t(2791)),a=(0,r(t(4894)).default)(o.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");n.Z=a},340:(e,n,t)=>{var r=t(4836);n.Z=void 0;var i=r(t(5649)),o=t(184),a=(0,i.default)((0,o.jsx)("path",{d:"M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z"}),"StarRate");n.Z=a},661:()=>{}}]);
//# sourceMappingURL=693.1c2f984c.chunk.js.map