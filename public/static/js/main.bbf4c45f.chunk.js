(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,a,t){e.exports=t(263)},263:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(17),o=t.n(i),l=t(115),c=t(266),s=t(264),m=t(265),u={isLoggedIn:function(){return localStorage.getItem("isLoggedIn")},login:function(){localStorage.setItem("isLoggedIn",!0)},logout:function(){localStorage.removeItem("isLoggedIn")}},p=t(33),d=t(34),h=t(37),g=t(35),E=t(38),f=t(22),b=t(19),v=t(56),w=t.n(v),O=t(36),y=t.n(O),C=t(55),j=t.n(C),k=t(25),M=t.n(k),S=t(57),R=t.n(S),N=t(58),x=t.n(N),T=t(27),I=t.n(T),L=t(26),F=t.n(L),D=t(23),P=t.n(D),A=t(24),W=t.n(A),B=t(5),q=t.n(B),z=t(116);function G(e){return e.json().then(function(a){if(e.ok)return a;throw new Error(a.errors)})}var J=function(e){return fetch("/api/login",{method:"POST",body:e}).then(G)},U=function(){return fetch("/api/logout",{method:"DELETE"}).then(G)},Y=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(h.a)(this,Object(g.a)(a).call(this,e))).state={redirectToReferrer:!1},t.handleSubmit=t.handleSubmit.bind(Object(f.a)(Object(f.a)(t))),t}return Object(E.a)(a,e),Object(d.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault();var a=new FormData(e.target),t=this;J(a).then(function(e){u.login(),t.setState({redirectToReferrer:!0})}).catch(function(e){alert("login failed!\n"+e.message)})}},{key:"render",value:function(){var e=this.props.classes;return this.state.redirectToReferrer?r.a.createElement(z.a,{to:"/"}):r.a.createElement("main",{className:e.main},r.a.createElement(j.a,null),r.a.createElement(P.a,{className:e.paper},r.a.createElement(w.a,{className:e.avatar}),r.a.createElement(W.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,onSubmit:this.handleSubmit},r.a.createElement(M.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(F.a,{htmlFor:"email"},"Email Address"),r.a.createElement(I.a,{id:"email",name:"email",autoComplete:"email",autoFocus:!0})),r.a.createElement(M.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(F.a,{htmlFor:"password"},"Password"),r.a.createElement(I.a,{name:"password",type:"password",id:"password",autoComplete:"current-password"})),r.a.createElement(R.a,{control:r.a.createElement(x.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign in"))))}}]),a}(r.a.Component),H=q()(function(e){return{main:Object(b.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(Y),K=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(h.a)(this,Object(g.a)(a).call(this,e))).state={redirectToReferrer:!1},t.handleSubmit=t.handleSubmit.bind(Object(f.a)(Object(f.a)(t))),t}return Object(E.a)(a,e),Object(d.a)(a,[{key:"handleSubmit",value:function(e){var a=this;e.preventDefault();var t=new FormData(e.target);fetch("/api/register",{method:"POST",body:t}).then(function(e){return e.status}).then(function(e){204===e?a.setState({redirectToReferrer:!0}):alert("Register Fail!")})}},{key:"render",value:function(){var e=this.props.classes;return this.state.redirectToReferrer?r.a.createElement(z.a,{to:"/"}):r.a.createElement("main",{className:e.main},r.a.createElement(j.a,null),r.a.createElement(P.a,{className:e.paper},r.a.createElement(w.a,{className:e.avatar}),r.a.createElement(W.a,{component:"h1",variant:"h5"},"Register"),r.a.createElement("form",{className:e.form,onSubmit:this.handleSubmit},r.a.createElement(M.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(F.a,{htmlFor:"email"},"Email Address"),r.a.createElement(I.a,{id:"email",name:"email",autoComplete:"email",autoFocus:!0})),r.a.createElement(M.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(F.a,{htmlFor:"username"},"Your Username"),r.a.createElement(I.a,{id:"username",name:"username",autoComplete:"username",autoFocus:!0})),r.a.createElement(M.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(F.a,{htmlFor:"password"},"Password"),r.a.createElement(I.a,{name:"password",type:"password",id:"password",autoComplete:"current-password"})),r.a.createElement(R.a,{control:r.a.createElement(x.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Register"))))}}]),a}(r.a.Component),Q=q()(function(e){return{main:Object(b.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(K),V=t(108),X=t.n(V),Z=t(109),$=t.n(Z),_=t(20),ee=t.n(_),ae=t(72),te=t.n(ae),ne=t(45),re=t.n(ne),ie=t(28),oe=t.n(ie),le=t(73),ce=t.n(le),se=t(32),me=t(44),ue=t(110),pe=t.n(ue),de=t(111),he=t.n(de),ge=t(76),Ee=t.n(ge),fe=t(74),be=t.n(fe),ve=t(75),we=t.n(ve),Oe=t(112),ye=t.n(Oe),Ce=t(267),je=function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(h.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(r)))).state={anchorEl:null,mobileMoreAnchorEl:null},t.handleProfileMenuOpen=function(e){t.setState({anchorEl:e.currentTarget})},t.handleMenuClose=function(){t.setState({anchorEl:null}),t.handleMobileMenuClose()},t.handleMobileMenuOpen=function(e){t.setState({mobileMoreAnchorEl:e.currentTarget})},t.handleMobileMenuClose=function(){t.setState({mobileMoreAnchorEl:null})},t}return Object(E.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.state,a=e.anchorEl,t=e.mobileMoreAnchorEl,n=this.props.classes,i=Boolean(a),o=Boolean(t),l=r.a.createElement(ce.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:this.handleMenuClose},r.a.createElement(oe.a,{onClick:this.handleMenuClose},"Profile"),r.a.createElement(oe.a,{onClick:this.handleMenuClose},"My account"),r.a.createElement(oe.a,{onClick:this.handleMenuClose},r.a.createElement(Me,null))),c=r.a.createElement(ce.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:this.handleMenuClose},r.a.createElement(oe.a,{onClick:this.handleMobileMenuClose},r.a.createElement(ee.a,{color:"inherit"},r.a.createElement(re.a,{badgeContent:4,color:"secondary"},r.a.createElement(be.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(oe.a,{onClick:this.handleMobileMenuClose},r.a.createElement(ee.a,{color:"inherit"},r.a.createElement(re.a,{badgeContent:11,color:"secondary"},r.a.createElement(we.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(oe.a,{onClick:this.handleProfileMenuOpen},r.a.createElement(ee.a,{color:"inherit"},r.a.createElement(Ee.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:n.root},r.a.createElement(X.a,{position:"static"},r.a.createElement($.a,null,r.a.createElement(ee.a,{className:n.menuButton,color:"inherit","aria-label":"Open drawer"},r.a.createElement(pe.a,null)),r.a.createElement(W.a,{className:n.title,variant:"h6",color:"inherit",noWrap:!0},"Material-UI"),r.a.createElement("div",{className:n.search},r.a.createElement("div",{className:n.searchIcon},r.a.createElement(he.a,null)),r.a.createElement(te.a,{placeholder:"Search\u2026",classes:{root:n.inputRoot,input:n.inputInput}})),r.a.createElement("div",{className:n.grow}),r.a.createElement("div",{className:n.sectionDesktop},r.a.createElement(ee.a,{color:"inherit"},r.a.createElement(re.a,{badgeContent:4,color:"secondary"},r.a.createElement(be.a,null))),r.a.createElement(ee.a,{color:"inherit"},r.a.createElement(re.a,{badgeContent:17,color:"secondary"},r.a.createElement(we.a,null))),r.a.createElement(ee.a,{"aria-owns":i?"material-appbar":void 0,"aria-haspopup":"true",onClick:this.handleProfileMenuOpen,color:"inherit"},r.a.createElement(Ee.a,null))),r.a.createElement("div",{className:n.sectionMobile},r.a.createElement(ee.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},r.a.createElement(ye.a,null))))),l,c)}}]),a}(r.a.Component),ke=Object(me.withStyles)(function(e){return{root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(b.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(b.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(se.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(se.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(b.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(b.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(b.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})(je),Me=Object(Ce.a)(function(e){var a=e.history;return r.a.createElement(y.a,{type:"submit",variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),U().then(function(e){u.logout(),a.push("/login")}).catch(function(e){alert("Fail!")})}},"Sign out")}),Se=t(114),Re=t.n(Se);var Ne=Object(me.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary}}})(function(e){var a=e.classes;return r.a.createElement("div",{className:a.root},r.a.createElement(Re.a,{container:!0,spacing:24}))});var xe=function(e){return r.a.createElement("div",null,r.a.createElement(ke,null),r.a.createElement(Ne,null))};function Te(e){var a=e.component,t=Object(l.a)(e,["component"]);return r.a.createElement(s.a,Object.assign({},t,{render:function(e){return u.isLoggedIn()?r.a.createElement(a,e):r.a.createElement(m.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}var Ie=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(Te,{exact:!0,path:"/",component:xe}),r.a.createElement(s.a,{path:"/login",component:H}),r.a.createElement(s.a,{path:"/register",component:Q})))};o.a.render(r.a.createElement(Ie,null),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.bbf4c45f.chunk.js.map