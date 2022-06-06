(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(3),r=a(5),o=a(4),c=a(6),s=a(1),i=a(0),u=a.n(i),m=a(8),h=a.n(m),d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).calculate=function(e,t){a.props.handleCalculate(a.props.formId,a.props.rowId,e,t,a.props.opportunity)},a.myRef=u.a.createRef(),a.state={},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("tr",{className:"calculationRow"},u.a.createElement("td",null,this.props.channelData.channelName),u.a.createElement("td",null,this.props.opportunity?u.a.createElement("input",{type:"text",size:"1",value:this.props.channelData.clicks,className:"clicksInput",onChange:function(t){return e.calculate("clicks",parseInt(t.target.value))}}):this.props.channelData.clicks),u.a.createElement("td",null,u.a.createElement("input",{type:"text",size:"1",value:this.props.channelData.clickPrice,className:"clickPriceInput",onChange:function(t){return e.calculate("clickPrice",parseInt(t.target.value))}})),u.a.createElement("td",null,u.a.createElement("input",{type:"text",size:"1",value:this.props.channelData.conversion,className:"conversionInput",onChange:function(t){return e.calculate("conversion",parseInt(t.target.value))}})),u.a.createElement("td",{className:"leadCell"},this.props.channelData.leads),u.a.createElement("td",{className:"leadPriceCell"},this.props.channelData.leadPrice),u.a.createElement("td",{className:"channelCostCell"},this.props.opportunity?this.props.channelData.channelCost:u.a.createElement("input",{type:"text",size:"1",value:this.props.channelData.channelCost,className:"clicksInput",onChange:function(t){return e.calculate("channelCost",parseInt(t.target.value))}})),u.a.createElement("td",{className:"closeCell"},u.a.createElement("button",{type:"button",onClick:function(){return e.props.handleDeleteRow(e.props.formId,e.props.rowId)},className:"crossButton"},u.a.createElement("svg",{version:"1.1",meta:"vk-icons-close",width:"20",height:"20",viewBox:"0 0 20 20"},u.a.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"1.06",d:"M16,16 L4,4"}),u.a.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"1.06",d:"M16,4 L4,16"})))))}}]),t}(u.a.Component),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.channelData.length;t++)e.push(u.a.createElement(d,{opportunity:this.props.opportunity,handleCalculate:this.props.handleCalculate,handleDeleteRow:this.props.handleDeleteRow,formId:this.props.formId,rowId:t,onDataChange:this.props.onDataChange,key:"row"+t,channelData:this.props.channelData[t]}));return e}}]),t}(u.a.Component);function f(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return v(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,l=function(){};return{s:l,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,c=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){c=!0,r=e},f:function(){try{o||null==a.return||a.return()}finally{if(c)throw r}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).change=function(e){a.setState({opportunity:e}),console.log(a.state.opportunity)},a.newChannelClick=function(){a.props.handleSetCurrentForm(a.state.formId)},a.state={formId:a.props.formId,opportunity:!0,channelType:"\u042f\u043d\u0434\u0435\u043a\u0441.\u0414\u0438\u0440\u0435\u043a\u0442",rows:[],channelData:a.props.channelData,rowData:[[]],leadSum:60,leadPriceSum:1500,channelCostSum:9e4,sales:5,conversionInSales:80},a.handleData=a.handleData.bind(Object(s.a)(Object(s.a)(a))),a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"handleData",value:function(e){this.setState(function(e,t){return{rowData:e.rowData}}),this.setState(function(t,a){var n=t.channelData;return n[e.rowId].leads=e.leads,n[e.rowId].leadPrice=e.leadPrice,n[e.rowId].channelCost=e.channelCost,{channelData:n}},function(){var e,t=0,a=0,n=0,l=f(this.state.channelData);try{for(l.s();!(e=l.n()).done;){var r=e.value;t+=r.leads,a+=r.leadPrice,n+=r.channelCost}}catch(o){l.e(o)}finally{l.f()}console.log(t),this.setState({leadSum:t,leadPriceSum:a,channelCostSum:n})})}},{key:"componentDidMount",value:function(){var e=this;this.setState(function(t,a){return{rows:[u.a.createElement(d,{key:"row0",name:"\u042f\u043d\u0434\u0435\u043a\u0441.\u0414\u0438\u0440\u0435\u043a\u0442",opportunity:e.state.opportunity})]}})}},{key:"render",value:function(){var e,t=this,a=0,n=0,l=0,r=f(this.props.channelData);try{for(r.s();!(e=r.n()).done;){var o=e.value;a+=parseInt(o.leads),n+=parseInt(o.leadPrice),l+=parseInt(o.channelCost)}}catch(i){r.e(i)}finally{r.f()}var c=a/100*this.props.conversions,s=l/c;return u.a.createElement("div",{className:"calcForm"},u.a.createElement("button",{type:"button",onClick:function(){return t.props.handleDeleteForm(t.props.formId)},className:"deleteFormButton crossButton"},u.a.createElement("svg",{version:"1.1",meta:"vk-icons-close",width:"20",height:"20",viewBox:"0 0 20 20"},u.a.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"1.06",d:"M16,16 L4,4"}),u.a.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"1.06",d:"M16,4 L4,16"}))),u.a.createElement("input",{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430 \u0440\u0430\u0441\u0447\u0451\u0442\u0430",className:"descriptionInput"}),u.a.createElement("input",{type:"text",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0440\u0430\u0441\u0447\u0451\u0442\u0430",className:"descriptionInput"}),u.a.createElement("button",{type:"button",onClick:function(){return t.change(!0)},className:"tableButton"},"\u041e\u0422 \u0412\u041e\u0417\u041c\u041e\u0416\u041d\u041e\u0421\u0422\u0415\u0419"),u.a.createElement("button",{type:"button",onClick:function(){return t.change(!1)},className:"tableButton"},"\u041e\u0422 \u0411\u042e\u0414\u0416\u0415\u0422\u0410"),u.a.createElement("p",{className:"info"},"\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0439\u0442\u0435, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043b\u0438\u0434\u043e\u0432 \u0438 \u043f\u0440\u043e\u0434\u0430\u0436 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439 \u043f\u043e \u0431\u044e\u0434\u0436\u0435\u0442\u0443. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0435\u0434\u0435\u043b\u044c\u043d\u043e\u0435 \u0434\u043b\u044f \u0434\u0430\u043d\u043d\u043e\u0439 \u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043b\u0438\u043a\u043e\u0432 \u043f\u043e \u043a\u0430\u043d\u0430\u043b\u0430\u043c, \u0441\u0440\u0435\u0434\u043d\u044e\u044e \u0446\u0435\u043d\u0443 \u043a\u043b\u0438\u043a\u0430, \u0442\u0435\u043a\u0443\u0449\u0443\u044e (\u0438\u043b\u0438 \u0441\u0440\u0435\u0434\u043d\u044e\u044e \u0434\u043b\u044f \u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0438) \u043a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u044e \u0441\u0430\u0439\u0442\u0430 \u0438 \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u043a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u044e \u0438\u0437 \u043b\u0438\u0434\u043e\u0432 \u0432 \u043f\u0440\u043e\u0434\u0430\u0436\u0438."),u.a.createElement("table",{className:"opportunityTable"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"\u041a\u0410\u041d\u0410\u041b"),u.a.createElement("th",null,"\u041a\u041b\u0418\u041a\u041e\u0412"),u.a.createElement("th",null,"\u0426\u0415\u041d\u0410 \u041a\u041b\u0418\u041a\u0410"),u.a.createElement("th",null,"\u041a\u041e\u041d\u0412\u0415\u0420\u0421\u0418\u042f"),u.a.createElement("th",null,"\u041b\u0418\u0414\u042b"),u.a.createElement("th",null,"\u0426\u0415\u041d\u0410 \u041b\u0418\u0414\u0410"),u.a.createElement("th",null,"\u0420\u0410\u0421\u0425\u041e\u0414\u042b \u041d\u0410 \u041a\u0410\u041d\u0410\u041b, \u0420\u0423\u0411"),u.a.createElement("th",null))),u.a.createElement("tbody",{className:"calculationRows"},u.a.createElement(p,{handleCalculate:this.props.handleCalculate,handleDeleteRow:this.props.handleDeleteRow,channelData:this.props.channelData,opportunity:this.state.opportunity,onDataChange:this.handleData,formId:this.props.formId})),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("button",{onClick:this.newChannelClick,className:"tableButton",type:"button"},"\u041d\u041e\u0412\u042b\u0419 \u041a\u0410\u041d\u0410\u041b")),u.a.createElement("td",{colSpan:"3"},"\u041b\u0438\u0434\u044b (\u0437\u0432\u043e\u043d\u043a\u0438 \u0438 \u0437\u0430\u044f\u0432\u043a\u0438)"),u.a.createElement("td",{className:"leadSumCell"},a),u.a.createElement("td",{className:"leadPriceSumCell"},n),u.a.createElement("td",{className:"channelCostSumCell"},l),u.a.createElement("td",null)),u.a.createElement("tr",null,u.a.createElement("td",{colSpan:"4"},"\u041a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u044f \u043b\u0438\u0434\u043e\u0432 \u0432 \u043f\u0440\u043e\u0434\u0430\u0436\u0438, %"),u.a.createElement("td",null,u.a.createElement("input",{type:"text",size:"1",value:this.props.conversions,className:"resultLeadsInput",onChange:function(e){return t.props.handleConversion(t.props.formId,e.target.value)}})),u.a.createElement("td",null),u.a.createElement("td",null),u.a.createElement("td",null)),u.a.createElement("tr",null,u.a.createElement("td",{colSpan:"4"},"\u041f\u0440\u043e\u0434\u0430\u0436\u0438"),u.a.createElement("td",{className:"resultLeadsCell"},c),u.a.createElement("td",{className:"resultLeadPriceCell"},s),u.a.createElement("td",null),u.a.createElement("td",null)))))}}]),t}(u.a.Component),y=h.a.createRoot(document.getElementById("root")),C=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).addRow=function(){a.setState(function(e,t){var a=e.formData;return a[this.state.currentForm].push({channelName:document.querySelector('input[name="channelType"]:checked').value,clicks:13e3,clickPrice:130,conversion:12,leads:15,leadPrice:1300,channelCost:9e4}),{formData:a}},function(){console.log(this.state.formData)})},a.state={currentForm:0,formData:[[{channelName:"\u042f\u043d\u0434\u0435\u043a\u0441.\u0414\u0438\u0440\u0435\u043a\u0442",clicks:13e3,clickPrice:130,conversion:12,leads:115,leadPrice:11300,channelCost:19e4}]],formSums:[{leadSum:70,leadPriceSum:1500,channelCostSum:9e4,conversionInSales:90}],conversions:[70],modalClass:"modal"},a.handleSetCurrentForm=a.handleSetCurrentForm.bind(Object(s.a)(Object(s.a)(a))),a.handleDeleteRow=a.handleDeleteRow.bind(Object(s.a)(Object(s.a)(a))),a.handleCalculate=a.handleCalculate.bind(Object(s.a)(Object(s.a)(a))),a.handleDeleteForm=a.handleDeleteForm.bind(Object(s.a)(Object(s.a)(a))),a.handleConversion=a.handleConversion.bind(Object(s.a)(Object(s.a)(a))),a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"handleSetCurrentForm",value:function(e){this.setState({currentForm:e,modalClass:"modal modalShow"},function(){console.log(this.state.modalClass)}),console.log(e)}},{key:"handleConversion",value:function(e,t){this.setState(function(a){var n=a.conversions;return n[e]=t,{conversions:n}},function(){console.log(this.state.conversions)})}},{key:"handleDeleteForm",value:function(e){this.setState(function(t){var a=t.formData;a.splice(e,1);var n=t.conversions;return n.splice(e,1),{formData:a,conversions:n}},function(){})}},{key:"handleCalculate",value:function(e,t,a,n,l){this.setState(function(r){var o=r.formData,c=r.formSums,s=o[e][t];s[a]=n,l?s.channelCost=s.clicks*s.clickPrice:s.clicks=(s.channelCost/s.clickPrice).toFixed(2),s.leadPrice=100*s.clickPrice/s.conversion,s.leads=(s.channelCost/Math.round(100*s.clickPrice/s.conversion)).toFixed(2);for(var i=0,u=0,m=0,h=o[e],d=c[e],p=0;p<h.length;p++)i+=parseInt(h[p].leads),u+=parseInt(h[p].leadPrice),m+=parseInt(h[p].channelCost);return d.leadSum=i,d.leadPriceSum=u,d.channelCostSum=m,{formData:o,formSums:c}},function(){console.log(this.state.formData)})}},{key:"handleDeleteRow",value:function(e,t){this.setState(function(a){var n=a.formData;return n[e].splice(t,1),{formData:n}},function(){})}},{key:"handleAnalysis",value:function(e){document.getElementsByClassName("analysisModal")[0].style.transform=e?"translateY(0)":"translateY(-100%"}},{key:"render",value:function(){for(var e=this,t=[],a=0;a<this.state.formData.length;a++)t.push(u.a.createElement(E,{conversions:this.state.conversions[a],handleConversion:this.handleConversion,handleDeleteForm:this.handleDeleteForm,handleCalculate:this.handleCalculate,handleDeleteRow:this.handleDeleteRow,handleSetCurrentForm:this.handleSetCurrentForm,key:a,channelData:this.state.formData[a],formId:a}));return u.a.createElement("main",null,u.a.createElement("aside",null,u.a.createElement("a",{href:"",className:"tableButton"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),u.a.createElement("a",{href:"",className:"tableButton"},"\u0412\u0445\u043e\u0434")),u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"analysisModal",onClick:function(){return e.handleAnalysis(!1)}},u.a.createElement("h2",null,"\u0410\u043d\u0430\u043b\u0438\u0437"),u.a.createElement("img",{src:"Component 5.png",alt:""})),u.a.createElement("div",{className:this.state.modalClass},u.a.createElement("form",{action:""},u.a.createElement("button",{className:"close",type:"button",onClick:function(){return e.setState({modalClass:"modal"})}},"\u2573"),u.a.createElement("h2",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u043d\u0430\u043b"),u.a.createElement("input",{type:"radio",id:"yandex",name:"channelType",value:"\u042f\u043d\u0434\u0435\u043a\u0441.\u0414\u0438\u0440\u0435\u043a\u0442",defaultChecked:!0,onChange:function(t){return e.setState({channelType:t.target.value})}}),u.a.createElement("label",{htmlFor:"yandex"},"\u042f\u043d\u0434\u0435\u043a\u0441.\u0414\u0438\u0440\u0435\u043a\u0442"),u.a.createElement("br",null),u.a.createElement("input",{type:"radio",id:"google",name:"channelType",value:"Google.Adwords",onChange:function(t){return e.setState({channelType:t.target.value})}}),u.a.createElement("label",{htmlFor:"google"},"Google.Adwords"),u.a.createElement("br",null),u.a.createElement("input",{type:"radio",id:"seo",name:"channelType",value:"SEO",onChange:function(t){return e.setState({channelType:t.target.value})}}),u.a.createElement("label",{htmlFor:"seo"},"SEO"),u.a.createElement("br",null),u.a.createElement("input",{type:"radio",id:"vk",name:"channelType",value:"\u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435",onChange:function(t){return e.setState({channelType:t.target.value})}}),u.a.createElement("label",{htmlFor:"vk"},"\u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435"),u.a.createElement("br",null),u.a.createElement("input",{type:"radio",id:"ok",name:"channelType",value:"\u041e\u0434\u043d\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u0438\u043a\u0438",onChange:function(t){return e.setState({channelType:t.target.value})}}),u.a.createElement("label",{htmlFor:"ok"},"\u041e\u0434\u043d\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u0438\u043a\u0438"),u.a.createElement("br",null),u.a.createElement("input",{type:"radio",id:"email",name:"channelType",value:"Email \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0430",onChange:function(t){return e.setState({channelType:t.target.value})}}),u.a.createElement("label",{htmlFor:"email"},"Email \u0440\u0430\u0441\u0441\u044b\u043b\u043a\u0430"),u.a.createElement("br",null),u.a.createElement("button",{id:"buttonAdd",type:"button",onClick:this.addRow},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))),u.a.createElement("h1",null,"Calculator"),t,u.a.createElement("button",{className:"tableButton",onClick:function(){return e.setState(function(e){var t=e.formData;t.push([{channelName:"\u042f\u043d\u0434\u0435\u043a\u0441.\u0414\u0438\u0440\u0435\u043a\u0442",clicks:13e3,clickPrice:130,conversion:12,leads:15,leadPrice:1300,channelCost:9e4}]);var a=e.formSums;a.push({leadSum:60,leadPriceSum:1500,channelCostSum:9e4,sales:50,customerPrice:15e3,conversionInSales:80});var n=e.conversions;return n.push(81),{formData:t,formSums:a,conversions:n}})}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u0430\u0441\u0447\u0451\u0442"),u.a.createElement("button",{id:"analysis",onClick:function(){return e.handleAnalysis(!0)}},"\u0410\u043d\u0430\u043b\u0438\u0437")))}}]),t}(u.a.Component);y.render(u.a.createElement(C,null))},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.1a233aa5.chunk.js.map