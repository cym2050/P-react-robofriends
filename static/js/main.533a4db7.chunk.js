(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(e,t,n){e.exports=n(32)},26:function(e,t,n){},28:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),s=n(5),i=n(1),l=n(15),u=n(16),h=(n(26),n(27),n(3)),d=n(4),b=n(7),m=n(6);var E=function(e){e.id;var t=e.name,n=e.email;return a.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 graw bw2 shadow-5"},a.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200*200"),alt:"photo"}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))};var p=function(e){var t=e.robots;return t.map((function(e,n){return a.a.createElement(E,{key:t[n].name,id:t[n].id,name:t[n].name,email:t[n].email})})),a.a.createElement("div",null,t.map((function(e,n){return a.a.createElement(E,{key:t[n].name,id:t[n].id,name:t[n].name,email:t[n].email})})))};var f=function(e){var t=e.searchChange;return a.a.createElement("div",null,a.a.createElement("input",{className:"pa3 ba b--green bg-light-blue",type:"search",placeholder:"search robots",onChange:t}))};var g=function(e){return a.a.createElement("div",{style:{overflow:"auto",border:"5px solid black",height:"800px"}},e.children)},v=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),n}(a.a.Component),O=(n(28),function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?a.a.createElement("h1",{className:"tc"},"Loading..."):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"robot-search"),a.a.createElement(f,{searchChange:n}),a.a.createElement(g,null,a.a.createElement(v,null,a.a.createElement(p,{robots:c}))))}}]),n}(r.PureComponent)),R=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requsetRobots.robots,isPending:e.requsetRobots.isPending,error:e.requsetRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(O),y=(n(29),{searchField:""}),S={isPending:!1,error:"",robots:[]},j=Object(l.createLogger)(),C=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requsetRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),_=Object(i.d)(C,Object(i.a)(j,u.a));c.a.render(a.a.createElement(s.a,{store:_},a.a.createElement(R,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.533a4db7.chunk.js.map