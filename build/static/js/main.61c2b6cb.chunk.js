(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,o){},137:function(e,t,o){"use strict";o.r(t);var n=o(1),a=o.n(n),c=o(2),r=o.n(c),l=(o(76),o(67)),s=o(58),i=o(59),u=o(69),d=o(60),p=o(68),h=o(7),m=o(61),v=o.n(m),b=(o(134),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={selectors:[],openColor:!1},e.addSelectors=e.addSelectors.bind(Object(h.a)(Object(h.a)(e))),e.changeColor=e.changeColor.bind(Object(h.a)(Object(h.a)(e))),e.changePopupColor=e.changePopupColor.bind(Object(h.a)(Object(h.a)(e))),e.removeSelector=e.removeSelector.bind(Object(h.a)(Object(h.a)(e))),e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"addSelectors",value:function(){this.setState({selectors:[].concat(Object(l.a)(this.state.selectors),[{number:this.state.selectors++,color:"#"+(16777215*Math.random()<<0).toString(16)}])})}},{key:"changeColor",value:function(){this.setState({openColor:!this.state.OpenColor})}},{key:"changePopupColor",value:function(e){console.log(e)}},{key:"removeSelector",value:function(e){var t=this.state.selectors,o=t.indexOf(e);o>-1&&t.splice(o,1),this.setState({selectors:t})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement("p",null,"Your CSS Selectors!"),this.state.selectors.map(function(t){return a.a.createElement("div",{className:"selector-container"},a.a.createElement("input",{type:"color",value:t.color,onClick:function(){return e.changeColor}}),e.state.openColor?a.a.createElement(v.a,{defaultColor:t.color}):null,a.a.createElement("input",{type:"text",placeholder:"put css selector here"}),a.a.createElement("span",{onClick:function(){return e.removeSelector(t)},className:"remove"},"\xd7"))}),a.a.createElement("div",null,a.a.createElement("span",{onClick:function(){return e.addSelectors()},className:"add-selector"},"+ Add Selector")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},70:function(e,t,o){e.exports=o(137)},76:function(e,t,o){}},[[70,2,1]]]);
//# sourceMappingURL=main.61c2b6cb.chunk.js.map