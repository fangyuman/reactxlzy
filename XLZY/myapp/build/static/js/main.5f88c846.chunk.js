(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{7:function(t,e,n){t.exports=n(8)},8:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n(3),c=n(6),o=n(5),u=n(0),i=n.n(u),s=n(4),p=n.n(s),l=function(t){return i.a.createElement("ul",null,t.data.map((function(t){return i.a.createElement("li",{key:t.id},t.title)})))},d=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).getData=function(t){fetch("https://cnodejs.org/api/v1/topics?page="+t).then((function(t){return t.json()})).then((function(t){var e=t.data;r.setState({data:e})}))},r.state={data:[]},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://cnodejs.org/api/v1/topics").then((function(t){return t.json()})).then((function(e){var n=e.data;t.setState({data:n})}))}},{key:"render",value:function(){var t=this,e=this.state.data;return i.a.createElement("div",null,[1,2,3,4,5].map((function(e){return i.a.createElement("button",{key:e,onClick:function(){return t.getData(e)}},e)})),i.a.createElement(l,{data:e}))}}]),n}(i.a.Component);p.a.render(i.a.createElement(d,{data:"abc"}),document.getElementById("root"))}},[[7,1,2]]]);
//# sourceMappingURL=main.5f88c846.chunk.js.map