(this.webpackJsonpsp500_trader=this.webpackJsonpsp500_trader||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"cash_usd":2243.97,"cash_eur":91.3,"monthly_trades":34,"monthly_trades_change":-0.9411764705882353,"monthly_fees":50.51,"monthly_fees_change":-0.1730517354289457,"fees_labels":["09-2021","10-2021","11-2021"],"fees_data":[61.08,50.51,3.5],"trades_labels":["09-2021","10-2021","11-2021"],"trades_data":[45,34,2]}')},154:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(42),i=t.n(n),s=(t(53),t(54),t(43)),c=t(44),o=t(47),d=t(46),m=t(7),p=t(5),u=t(16),b=t(2),h=t(1),g=t(45),E=u.data.map((function(e){return e>0?"rgb(0, 204, 212)":"rgb(185, 153, 15)"})),v=function(){return btoa(Math.random()).substring(0,12)},f=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,l=new Array(r),n=0;n<r;n++)l[n]=arguments[n];return(e=a.call.apply(a,[this].concat(l))).state={labels:p[0].labels,datasets:[{label:"Portfolio",data:p[0].dataPortfolio,borderWidth:2,fill:!1,borderColor:["rgb(0, 204, 212)"],pointHitRadius:20},{label:"S&P 500",data:p[0].dataSP500,borderColor:["rgb(185, 153, 15)"],backgroundColor:["rgb(163, 134, 13)"],borderWidth:1,fill:!1,pointHitRadius:20}],subtitle:p[0].subtitle},e.periodChange=function(a){console.log(a);var t={labels:p[a].labels,datasets:[{label:"Portfolio",data:p[a].dataPortfolio,borderWidth:2,fill:!1,borderColor:["rgb(0, 204, 212)"],pointHitRadius:20},{label:"S&P 500",data:p[a].dataSP500,borderColor:["rgb(185, 153, 15)"],backgroundColor:["rgb(163, 134, 13)"],borderWidth:1,fill:!1,pointHitRadius:20}],subtitle:p[a].subtitle};e.setState(t)},e.returnsChartOptions={scales:{xAxes:[{gridLines:{display:!1,lineWidth:100,borderColor:["rgb(148, 151, 193)"]}}],yAxes:[{ticks:{callback:function(e,a,t){return Math.round(1e3*e)/10+"%"},fontColor:"rgb(148, 151, 193)"},gridLines:{drawBorder:!0,borderDash:[1,3],zeroLineColor:"rgba(148, 151, 193,.3)"}}]},legend:{display:!0,position:"top"},elements:{point:{radius:0},line:{tension:0}},tooltips:{callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].data[e.index];return parseFloat((100*t).toFixed(1))+"%"},title:function(e,a){return a.labels[e[0].index]}}},maintainAspectRatio:!1,responsive:!0},e.indexChartData={labels:u.labels,datasets:[{label:"Portfolio",data:u.data,borderWidth:1,fill:!1,borderColor:E,backgroundColor:E}]},e.indexChartOptions={scales:{xAxes:[{gridLines:{display:!1,lineWidth:100,borderColor:["rgb(148, 151, 193)"]}}],yAxes:[{ticks:{callback:function(e,a,t){return Math.round(100*(e+1))},fontColor:"rgb(148, 151, 193)"},gridLines:{drawBorder:!0,borderDash:[1,3],zeroLineColor:"rgba(148, 151, 193,.3)"}}]},legend:{display:!1},elements:{point:{radius:0},line:{tension:0}},tooltips:{callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].data[e.index];return parseFloat((100*(t+1)).toFixed(1))},title:function(e,a){return a.labels[e[0].index]}}},maintainAspectRatio:!1},e.PerformanceChartData={labels:b.labels,datasets:[{label:"S&P500",data:b.sp500,fill:!0,backgroundColor:["rgba(20, 22, 49, 1)"],borderColor:["rgb(163, 134, 13)"],borderWidth:1,pointHitRadius:20},{label:"Portfolio",data:b.portfolio,borderWidth:2,fill:!0,backgroundColor:["rgba(0, 204, 212, .2)"],borderColor:["rgb(0, 204, 212)"],pointHitRadius:20}]},e.PerformanceChartOptions={scales:{yAxes:[{display:!0,gridLines:{drawBorder:!1,display:!1,drawTicks:!1},ticks:{display:!1}}],xAxes:[{display:!1,position:"bottom",gridLines:{drawBorder:!1,display:!1,drawTicks:!1},ticks:{beginAtZero:!1,stepSize:10,fontColor:"#a7afb7",padding:10}}]},legend:{display:!1,position:"top"},elements:{point:{radius:0},line:{tension:0}},tooltips:{callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].data[e.index];return parseFloat(t.toFixed(2))},title:function(e,a){return a.labels[e[0].index]}}},maintainAspectRatio:!1},e.feesChartData={labels:h.fees_labels,datasets:[{data:h.fees_data.slice(0,h.fees_data.length-1).concat([void 0]),borderWidth:2,fill:!0,backgroundColor:"rgba(0, 204, 212, .2)",borderColor:"rgb(0, 204, 212)",pointHitRadius:20},{data:Array(h.fees_data.length-2).fill(void 0).concat(h.fees_data.slice(h.fees_data.length-2,h.fees_data.length)),borderWidth:2,fill:!0,backgroundColor:"rgba(0, 204, 212, .2)",borderColor:"rgb(0, 204, 212)",borderDash:[1,3],pointHitRadius:20}]},e.feesChartOptions={scales:{yAxes:[{display:!1,gridLines:{drawBorder:!1,display:!1,drawTicks:!1},ticks:{display:!1,beginAtZero:!0,min:0}}],xAxes:[{display:!1,position:"bottom",gridLines:{drawBorder:!1,display:!1,drawTicks:!1},ticks:{beginAtZero:!0,stepSize:10,fontColor:"#a7afb7",padding:10}}]},legend:{display:!1},elements:{point:{radius:0},line:{tension:0}},tooltips:{callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].data[e.index];return"\u20ac "+parseFloat(t.toFixed(2))},title:function(e,a){return a.labels[e[0].index]}}}},e.tradesChartData={labels:h.trades_labels,datasets:[{data:h.trades_data,borderWidth:2,fill:!0,backgroundColor:Array(h.trades_labels.length-1).fill("rgb(0, 204, 212)").concat(["rgba(0, 204, 212,0)"]),borderColor:Array(h.trades_labels.length-1).fill("rgb(0, 204, 212)").concat(["rgba(0, 204, 212,0.5)"])}]},e.tradesChartOptions={scales:{yAxes:[{display:!1,ticks:{display:!1},gridLines:{drawBorder:!1,display:!1}}],xAxes:[{display:!1,ticks:{display:!1},gridLines:{drawBorder:!1,display:!1}}],barThickness:8},legend:{display:!1},elements:{point:{radius:0}}},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"container p-md-0"},l.a.createElement("div",{className:"az-content-body"},l.a.createElement("div",{className:"az-dashboard-one-title"},l.a.createElement("div",null,l.a.createElement("h2",{className:"az-dashboard-title"},"Portfolio Performance")),l.a.createElement("div",{className:"az-content-header-right"},l.a.createElement("div",{className:"media"},l.a.createElement("div",{className:"media-body"},l.a.createElement("label",{className:"sp500_lastupdate"},"Last update"),l.a.createElement("p",null,b.last_update))))),l.a.createElement("div",{className:"row row-sm mg-b-20"},l.a.createElement("div",{className:"col-lg-7 ht-lg-100p"},l.a.createElement("div",null,l.a.createElement("div",{className:"card card-dashboard-one sp500_card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h6",{className:"card-title"},"Portfolio Value")),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"card-body-top"},l.a.createElement("div",null,l.a.createElement("label",{className:"mg-b-0 sp500_titles"},"Value"),l.a.createElement("h2",null,b.value.toLocaleString("en-UK",{minimumFractionDigits:0,maximumFractionDigits:0}))),l.a.createElement("div",null,l.a.createElement("label",{className:"mg-b-0 sp500_titles"},"Invested"),l.a.createElement("h2",null,b.invested.toLocaleString("en-UK",{minimumFractionDigits:0,maximumFractionDigits:0}))),l.a.createElement("div",null,l.a.createElement("label",{className:"mg-b-0 sp500_titles"},"Gain"),l.a.createElement("h2",null,(b.gain<0?"":"+")+b.gain.toLocaleString("en-UK",{minimumFractionDigits:0,maximumFractionDigits:0}))),l.a.createElement("div",null,l.a.createElement("label",{className:"mg-b-0 sp500_titles"},"Gain vs. Invested"),l.a.createElement("h2",null,(b.gain_pct<0?"":"+")+(Math.round(1e3*b.gain_pct)/10).toLocaleString("en-UK",{minimumFractionDigits:1})+"%"))),l.a.createElement("div",{className:"performance-chart-wrapper",style:{height:"263px"}},l.a.createElement(m.Line,{data:this.PerformanceChartData,options:this.PerformanceChartOptions})))))),l.a.createElement("div",{className:"col-lg-5 mg-t-20 mg-lg-t-0"},l.a.createElement("div",{className:"row row-sm"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("div",{className:"card card-dashboard-five sp500_card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h6",{className:"card-title "}," ",l.a.createElement("i",{className:"fa fa-line-chart"})," Performance"),l.a.createElement("p",{className:"card-text"},"since 13 Oct 2021")),l.a.createElement("div",{className:"card-body row row-sm"},l.a.createElement("div",{className:"col-6 d-sm-flex align-items-center"},l.a.createElement("div",null,l.a.createElement("label",{className:"sp500_titles"},"Annual Return"),l.a.createElement("h4",null,(b.cagr<0?"":"+")+(Math.round(1e3*b.cagr)/10).toLocaleString("en-UK",{minimumFractionDigits:1})+"%"))),l.a.createElement("div",{className:"col-6 d-sm-flex align-items-center"},l.a.createElement("div",null,l.a.createElement("label",{className:"sp500_titles"},"Index vs SPX"),l.a.createElement("h4",null,Math.round(b.index_spx))))))),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("div",{className:"card card-dashboard-five sp500_card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h6",{className:"card-title"},l.a.createElement("i",{className:"fa fa-money"})," Cash"),l.a.createElement("p",{className:"card-text"},"\u2002")),l.a.createElement("div",{className:"card-body row row-sm"},l.a.createElement("div",{className:"col-6 d-sm-flex align-items-center"},l.a.createElement("div",null,l.a.createElement("label",{className:"sp500_titles"},"$ Dollar"),l.a.createElement("h4",null,h.cash_usd.toLocaleString("en-UK",{minimumFractionDigits:0,maximumFractionDigits:0})))),l.a.createElement("div",{className:"col-6 d-sm-flex align-items-center"},l.a.createElement("div",null,l.a.createElement("label",{className:"sp500_titles"},"\u20ac Euro "),l.a.createElement("h4",null,h.cash_eur.toLocaleString("en-UK",{minimumFractionDigits:0,maximumFractionDigits:0})))))))),l.a.createElement("div",{className:"row row-sm"},l.a.createElement("div",{className:"col-sm-6 mg-t-20 mg-sm-t-20 "},l.a.createElement("div",{className:"card card-dashboard-two sp500_card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h6",null,h.monthly_trades),l.a.createElement("p",null,"trades opened last month")),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"chart-wrapper"},l.a.createElement(m.Bar,{data:this.tradesChartData,options:this.tradesChartOptions}))))),l.a.createElement("div",{className:"col-sm-6 mg-t-20 mg-sm-t-20"},l.a.createElement("div",{className:"card card-dashboard-two sp500_card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h6",null,h.monthly_fees.toLocaleString("en-UK",{minimumFractionDigits:2,maximumFractionDigits:2})," ",l.a.createElement("small",null,"\u20ac")),l.a.createElement("p",null,"last month EUR fees")),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"chart-wrapper"},l.a.createElement(m.Line,{data:this.feesChartData,options:this.feesChartOptions,datasetKeyProvider:v})))))))),l.a.createElement("div",{className:"row row-sm mg-b-20"},l.a.createElement("div",{className:"col-lg-6 mg-t-20 mg-lg-t-0"},l.a.createElement("div",{className:"card card-dashboard-one sp500_card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",null,l.a.createElement("h6",{className:"card-title sp500_title"},"Rate of return"),l.a.createElement("p",{className:"card-text sp500_returnsTitle"},this.state.subtitle)),l.a.createElement("div",{className:"btn-group"},l.a.createElement("button",{className:"btn",id:"btnDay",onClick:function(){e.periodChange(0)}},"Day"),l.a.createElement("button",{className:"btn",id:"btnWeek",onClick:function(){e.periodChange(1)}},"Week"),l.a.createElement("button",{className:"btn",id:"btnMonth",onClick:function(){e.periodChange(2)}},"Month"),l.a.createElement("button",{className:"btn",id:"btnYear",onClick:function(){e.periodChange(3)}},"Year"))),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"returns-chart-wrapper",style:{height:"300px"}},l.a.createElement(m.Line,{data:this.state,options:this.returnsChartOptions,datasetKeyProvider:v}))))),l.a.createElement("div",{className:"col-lg-6 mg-t-20 mg-lg-t-0"},l.a.createElement("div",{className:"card card-dashboard-one sp500_card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",null,l.a.createElement("h6",{className:"card-title sp500_title"},"Index vs S&P500"))),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"returns-chart-wrapper",style:{height:"300px"}},l.a.createElement(m.Bar,{data:this.indexChartData,options:this.indexChartOptions})))))),l.a.createElement("div",{className:"row row-sm mg-b-20"},l.a.createElement("div",{className:"col-lg-12 mg-t-20 mg-lg-t-0"},l.a.createElement("div",{className:"card card-dashboard-one sp500_card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"wd-5p"},"\xa0"),l.a.createElement("th",{className:"wd-45p"},"Stock"),l.a.createElement("th",null,"Position (% total)"),l.a.createElement("th",null,"Expiry"))),l.a.createElement("tbody",null,g.map((function(e,a){return l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("small",null,e.ticker)),l.a.createElement("th",null,l.a.createElement("strong",null,e.name)),l.a.createElement("th",null,l.a.createElement("strong",null,e.value.toLocaleString("en-UK",{minimumFractionDigits:0,maximumFractionDigits:0}))," (",Math.round(100*e.ttl_perc),"%)"),l.a.createElement("th",null,e.expiry))}))))))))))))}}]),t}(r.Component);i.a.render(l.a.createElement("div",{className:"az-content-wrapper"},l.a.createElement(f,null)),document.getElementById("root"))},16:function(e){e.exports=JSON.parse('{"labels":["13-09-2021","14-09-2021","15-09-2021","16-09-2021","17-09-2021","20-09-2021","21-09-2021","22-09-2021","23-09-2021","24-09-2021","27-09-2021","28-09-2021","29-09-2021","30-09-2021","01-10-2021","04-10-2021","05-10-2021","06-10-2021","07-10-2021","08-10-2021","11-10-2021","12-10-2021","13-10-2021","14-10-2021","15-10-2021","18-10-2021","19-10-2021","20-10-2021","21-10-2021","22-10-2021","25-10-2021","26-10-2021","27-10-2021","28-10-2021","29-10-2021","01-11-2021","02-11-2021"],"data":[-3.3306690738754696e-16,-0.0022944001838970385,0.0036216074253125896,0.004000505789803599,0.007524245584449751,0.011330865993397277,0.004530531237511903,0.0166014877289391,0.01965800682441321,-0.007647094699615109,-0.012015177939891486,-0.019166659248806672,-0.01045751197781164,-0.021495076258499446,-0.010180242116099802,-0.013477833168670128,-0.023898687637542215,-0.00810617956583759,-0.02102384565310067,-0.020356491236388385,-0.027121771613951684,-0.015179310614748531,-0.013958907885774807,-0.02066955618741062,-0.01864133442201854,-0.01654236067942505,-0.020129152048938725,-0.02382371697814145,-0.012672765332748304,-0.009648072864962831,-0.012811025867035863,-0.015609841526889379,-0.02775455967182716,-0.01962065500320176,-0.025966080438851735,-0.016479863161953046,-0.011104383217188207]}')},2:function(e){e.exports=JSON.parse('{"last_update":"03-11-2021","value":77890.84227480784,"invested":75039.745,"gain":2851.0972748078493,"gain_pct":0.03799449578097369,"cagr":0.3626429609465456,"index_spx":98.88956167828118,"labels":["13/09/2021","14/09/2021","15/09/2021","16/09/2021","17/09/2021","20/09/2021","21/09/2021","22/09/2021","23/09/2021","24/09/2021","27/09/2021","28/09/2021","29/09/2021","30/09/2021","01/10/2021","04/10/2021","05/10/2021","06/10/2021","07/10/2021","08/10/2021","11/10/2021","12/10/2021","13/10/2021","14/10/2021","15/10/2021","18/10/2021","19/10/2021","20/10/2021","21/10/2021","22/10/2021","25/10/2021","26/10/2021","27/10/2021","28/10/2021","29/10/2021","01/11/2021","02/11/2021"],"sp500":[1.0000000000000002,0.9980783958782986,0.9974657105061617,0.9991227459444406,0.9978695258650703,0.9801434240757503,0.9851563043932325,0.9897792940193555,1.0007240827125254,1.0003627216047004,1.0026593662278362,0.9851213527420716,0.9958013429329341,0.9932895825881017,0.9867729599156755,0.975372358794964,0.993498895950171,0.9912066614579496,1.0148768086720574,1.009501683580267,1.0118253053647388,1.0025168205052584,0.9955879483166225,1.0138689727173467,1.0223655897244213,1.0247452023952661,1.0295044277369554,1.0335917624421709,1.032919871805697,1.0351035163742368,1.0421443703356184,1.0390209848988756,1.0358377522249882,1.0310352229300366,1.044100317035035,1.044031116324733,1.0496502140012471],"portfolio":[0.9999999999999999,0.9957884046232518,1.0010781397298256,1.0031197422743159,1.0053777412389175,0.9912492978682622,0.9896195858041178,1.0062111028233758,1.020396323559843,0.9927128531386246,0.9906122355295099,0.9662398674553409,0.985387738461692,0.9719387472635974,0.9767273722701134,0.9622264528657932,0.9697555761676149,0.983171762273317,0.9935401952896247,0.988951771405346,0.9843828105194194,0.9872993062902989,0.9816906278538832,0.9929127510190932,1.0033073308648042,1.0077934976527332,1.0087813765759825,1.0089677648228101,1.019829920662771,1.0251167622254789,1.028793431850063,1.0228020319814917,1.0070885315205285,1.010805636524777,1.0169891242166726,1.0268256263908804,1.0379944957809737]}')},45:function(e){e.exports=JSON.parse('[{"ticker":"MCHP","name":"Microchip Technology","value":5063.525461,"ttl_perc":0.0673072290147237,"expiry":"2021-11-11"},{"ticker":"XOM","name":"ExxonMobil Corp","value":5186.888721,"ttl_perc":0.06894704286710297,"expiry":"2021-11-11"},{"ticker":"AON","name":"Aon PLC","value":4981.730256,"ttl_perc":0.0662199611343418,"expiry":"2021-11-11"},{"ticker":"STT","name":"State Street","value":5882.636745,"ttl_perc":0.07819531700902091,"expiry":"2021-11-11"},{"ticker":"ORLY","name":"O\'Reilly Automotive","value":538.369032,"ttl_perc":0.00715630404356707,"expiry":"2021-11-09"},{"ticker":"BBBY","name":"Bed Bath & Beyond","value":4542.605496,"ttl_perc":0.06038286778604085,"expiry":"2021-11-12"},{"ticker":"BK","name":"Bank of New York Mellon Corp/The","value":5121.392,"ttl_perc":0.0680764236050859,"expiry":"2021-11-11"},{"ticker":"BHF","name":"Brighthouse Financial Inc","value":5040.660868,"ttl_perc":0.06700329998163546,"expiry":"2021-11-11"},{"ticker":"JBHT","name":"J.B. Hunt Transport Services","value":4435.315794,"ttl_perc":0.05895671270909782,"expiry":"2021-11-10"},{"ticker":"ALB","name":"Albemarle Corp","value":5200.358328,"ttl_perc":0.0691260884609427,"expiry":"2021-11-11"},{"ticker":"MAA","name":"Mid-America Apartment Communities Inc","value":5123.200059,"ttl_perc":0.0681004573424735,"expiry":"2021-11-09"},{"ticker":"INTU","name":"Intuit Inc","value":541.543949,"ttl_perc":0.007198506826443871,"expiry":"2021-11-09"},{"ticker":"NTAP","name":"NetApp Inc","value":849.78773,"ttl_perc":0.01129585657217498,"expiry":"2021-11-09"},{"ticker":"PKI","name":"PerkinElmer Inc","value":765.137695,"ttl_perc":0.01017064068539159,"expiry":"2021-11-09"},{"ticker":"JEF","name":"Jefferies Financial Group Inc","value":5877.4894,"ttl_perc":0.07812689560353946,"expiry":"2021-11-11"},{"ticker":"NOW","name":"ServiceNow Inc","value":603.632176,"ttl_perc":0.008023818468696745,"expiry":"2021-11-10"},{"ticker":"PAYC","name":"Paycom Software Inc","value":947.89007,"ttl_perc":0.01259988806488051,"expiry":"2021-11-10"},{"ticker":"MSCI","name":"MSCI Inc","value":575.187688,"ttl_perc":0.007645718332187417,"expiry":"2021-11-09"},{"ticker":"CNC","name":"Centene Corp","value":1170.964756,"ttl_perc":0.015565122286300687,"expiry":"2021-11-09"},{"ticker":"DRE","name":"Duke Realty Corp","value":5108.58852,"ttl_perc":0.06790623254607318,"expiry":"2021-11-11"},{"ticker":"DHR","name":"Danaher Corp","value":809.136681,"ttl_perc":0.010755499959809608,"expiry":"2021-11-09"},{"ticker":"IT","name":"Gartner Inc","value":861.406023,"ttl_perc":0.011450293458833138,"expiry":"2021-11-09"},{"ticker":"AMD","name":"Advanced Micro Devices Inc","value":4576.482812,"ttl_perc":0.060833184128671794,"expiry":"2021-11-12"},{"ticker":"RMD","name":"Resmed Inc","value":682.330323,"ttl_perc":0.00906991851183098,"expiry":"2021-11-09"},{"ticker":"WST","name":"West Pharmaceutical Services Inc","value":743.778376,"ttl_perc":0.009886720601133218,"expiry":"2021-11-09"}]')},48:function(e,a,t){e.exports=t(154)},5:function(e){e.exports=JSON.parse('[{"id":1,"subtitle":"Daily returns","labels":["14-09-2021","15-09-2021","16-09-2021","17-09-2021","20-09-2021","21-09-2021","22-09-2021","23-09-2021","24-09-2021","27-09-2021","28-09-2021","29-09-2021","30-09-2021","01-10-2021","04-10-2021","05-10-2021","06-10-2021","07-10-2021","08-10-2021","11-10-2021","12-10-2021","13-10-2021","14-10-2021","15-10-2021","18-10-2021","19-10-2021","20-10-2021","21-10-2021","22-10-2021","25-10-2021","26-10-2021","27-10-2021","28-10-2021","29-10-2021","01-11-2021","02-11-2021"],"dataPortfolio":[-0.00421159537674809,0.00531210755418976,0.0020394037822475397,0.0022509764980622737,-0.014052870668536,-0.0016440990855168813,0.01676555037638683,0.014097658728535523,-0.02713011580112268,-0.002116037485032196,-0.02460333842044804,0.01981689190364122,-0.013648425561992528,0.004926879414981489,-0.014846434958218802,0.007824689582579758,0.013834605786668064,0.010545901961559023,-0.00461825692209783,-0.004620003743391665,0.0029627658464908,-0.005680828904347068,0.011431425386777105,0.010468774658239033,0.004471378459940167,0.0009802394295559402,0.0001847657492055621,0.010765612360141619,0.005184042412946788,0.0035865861919983644,-0.005823715124033235,-0.015363188544435302,0.0036909416480359614,0.006117385448259682,0.009672180301617539,0.010877084777626722],"dataSP500":[-0.0019216041217016144,-0.0006138649776080696,0.0016612455153350858,-0.001254320437060752,-0.017763947419832227,0.005114435494182112,0.004692645832450104,0.011057807290274502,-0.0003610996418168533,0.002295811882565779,-0.017491497188866334,0.010841293979807487,-0.002522350830974407,-0.006560647354668325,-0.011553418652336944,0.018584222724541632,-0.002307234060918817,0.02388013331073857,-0.005296332565549178,0.002301751272202779,-0.00919969564916634,-0.006911477240994168,0.018362038664323288,0.00838038961218257,0.002327555519045177,0.00464430116927117,0.003970196334366571,-0.0006500541711809138,0.0021140503035559366,0.006802077135284357,-0.0029970755738352173,-0.0030636846802446493,-0.004636372139010914,0.01267182130584188,-0.0000662778366913308,0.005382117054417712]},{"id":2,"subtitle":"Weekly returns","labels":["20-09-2021","21-09-2021","22-09-2021","23-09-2021","24-09-2021","27-09-2021","28-09-2021","29-09-2021","30-09-2021","01-10-2021","04-10-2021","05-10-2021","06-10-2021","07-10-2021","08-10-2021","11-10-2021","12-10-2021","13-10-2021","14-10-2021","15-10-2021","18-10-2021","19-10-2021","20-10-2021","21-10-2021","22-10-2021","25-10-2021","26-10-2021","27-10-2021","28-10-2021","29-10-2021","01-11-2021","02-11-2021"],"dataPortfolio":[-0.008750702131737675,-0.00619490927037647,0.005127435002162173,0.017222850430953507,-0.012597143919942155,-0.0006426862950846823,-0.023624955168788153,-0.020694826665353272,-0.047488975780696996,-0.016102824515639602,-0.02865478705554625,0.003638546525235986,-0.002248836779554786,0.022225112525706026,0.012515671703579478,0.023026136506264283,0.018090878313909986,-0.0015064859226725513,-0.000631523790890598,0.014515934825677368,0.023782096642830375,0.021758417279154063,0.027785878967347077,0.027109300002493564,0.021737538129892764,0.020837536902392095,0.013898606507882105,-0.0018625305661887914,-0.008848812880611678,-0.007928499765394004,-0.001912731359145492,0.014853767713043586],"dataSP500":[-0.019856575924249942,-0.012946970436821026,-0.00770594558373916,0.0016027427806892813,0.002498518769243674,0.022972089185129052,-0.00003547827994920816,0.0060842340812403695,-0.007429120826463964,-0.013584834176172955,-0.02721463375496136,0.008504072300108634,-0.004614054306707249,0.02173306401513675,0.023033387200368516,0.03737336437830896,0.009076934651711666,0.004420154776026752,-0.000993062356040575,0.012742827826231595,0.01276890087846727,0.026919854789165143,0.03817223198594033,0.018790296972290843,0.012459267778416772,0.016979018686482217,0.009243823441186683,0.002172995049332105,-0.0018245838105195311,0.008691691718246908,0.001810445887173051,0.010230042758381908]},{"id":3,"subtitle":"Monthly returns","labels":["13-10-2021","14-10-2021","15-10-2021","18-10-2021","19-10-2021","20-10-2021","21-10-2021","22-10-2021","25-10-2021","26-10-2021","27-10-2021","28-10-2021","29-10-2021","01-11-2021","02-11-2021"],"dataPortfolio":[-0.01830937214611672,-0.0028878159163207018,0.0022267903438388803,0.004659219813400117,0.00338542937390951,0.01787488474660459,0.03052722004698971,0.01878895924429247,0.008229261607808347,0.03031005264788833,0.016632437395861066,0.046122883737764964,0.03207000099708379,0.056471541320697316,0.06272694433500203],"dataSP500":[-0.004412051683377771,0.01582097849653641,0.02496314304942282,0.025644953590367336,0.031702443106938594,0.054531140089850716,0.048483237836946635,0.04579225149358912,0.04139031760964573,0.03864424619118423,0.033090386540719496,0.04660732412323054,0.04850261997020988,0.05108433092031417,0.06372008216656533]},{"id":4,"subtitle":"Annual returns","labels":[],"dataPortfolio":[],"dataSP500":[]}]')},53:function(e,a,t){}},[[48,1,2]]]);
//# sourceMappingURL=main.a4154478.chunk.js.map