(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{21:function(t,e,a){"use strict";a.r(e);var n,c,r,s=a(0),i=a.n(s),o=a(9),b=a.n(o),l=a(10),d=a(2),j=a(3),u=a(5),h=a(4),p=a(6),O=a(7),f=O.a.li(n||(n=Object(p.a)(["\n  list-style: none;\n  font-size: 15px;\n  line-height: 1.3;\n"]))),v=a(1),k=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){return Object(d.a)(this,a),e.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var t=this.props,e=t.good,a=t.neutral,n=t.bad,c=t.total,r=t.positivePercentage;return Object(v.jsxs)("ul",{className:"statisticSection",children:[Object(v.jsxs)(f,{className:"goodStat",children:["Good: ",e]}),Object(v.jsxs)(f,{className:"goodStat",children:["Neutral: ",a]}),Object(v.jsxs)(f,{className:"goodStat",children:["Bad: ",n]}),Object(v.jsxs)(f,{className:"totalStat",children:["Total: ",c]}),Object(v.jsxs)(f,{className:"badStat",children:["Positive feedback: ",r]})]})}}]),a}(s.Component),g=O.a.button(c||(c=Object(p.a)(["\n  font-size: 20px;\n  margin: 10px;\n  border-radius: 25%;\n"]))),x=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){return Object(d.a)(this,a),e.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var t=this;return this.props.options.map((function(e){return Object(v.jsx)(g,{type:"button",name:e,onClick:t.props.onLeaveFeedback,children:e},e)}))}}]),a}(s.Component),m=O.a.h2(r||(r=Object(p.a)(["\n  font-size: 20px;\n"]))),y=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){return Object(d.a)(this,a),e.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var t=this.props,e=t.title,a=t.children;return Object(v.jsxs)("div",{children:[Object(v.jsx)(m,{children:e}),a]})}}]),a}(s.Component),N=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.feedbackBtnClick=function(e){var a=e.target.name;t.setState((function(t){return Object(l.a)({},a,t[a]+1)}))},t.totalFeedbacks=function(){var e=t.state;return e.good+e.neutral+e.bad},t.positivePercentage=function(){var e=t.state,a=e.good,n=e.neutral,c=e.bad,r=Number.parseInt(a/(a+n+c)*100);return Number.isNaN(r)?"0":"".concat(r," %")},t}return Object(j.a)(a,[{key:"render",value:function(){var t=Object.keys(this.state);return Object(v.jsxs)("div",{className:"feedbackCounter",children:[Object(v.jsxs)(y,{title:"Please leave feedback",children:[" ",Object(v.jsx)(x,{options:t,onLeaveFeedback:this.feedbackBtnClick})]}),Object(v.jsx)(y,{title:"Statistics",children:0===this.totalFeedbacks()?Object(v.jsx)("span",{children:" No feedback given"}):Object(v.jsx)(k,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.totalFeedbacks(),positivePercentage:this.positivePercentage()})})]})}}]),a}(s.Component);b.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(N,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.4c29ed0b.chunk.js.map