(this.webpackJsonpsp500_trader_dashboard=this.webpackJsonpsp500_trader_dashboard||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"cash_usd":3491.87,"cash_eur":140.88,"monthly_trades":45,"monthly_trades_change":-1,"monthly_fees":61.08,"monthly_fees_change":0.21794616151545365,"fees_labels":["05-2021","06-2021","07-2021","08-2021","09-2021","10-2021"],"fees_data":[0,0,7.12,50.15,61.08,1.5],"trades_labels":["05-2021","06-2021","07-2021","08-2021","09-2021","10-2021"],"trades_data":[1,1,2,9,45,0]}')},153:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),s=t(42),n=t.n(s),i=(t(52),t(53),t(43)),d=t(44),c=t(46),o=t(45),m=t(7),b=t(5),p=t(16),u=t(2),h=t(1),g=p.data.map((function(e){return e>0?"rgb(0, 204, 212)":"rgb(185, 153, 15)"})),E=function(){return btoa(Math.random()).substring(0,12)},f=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var l=arguments.length,r=new Array(l),s=0;s<l;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={labels:b[0].labels,datasets:[{label:"Portfolio",data:b[0].dataPortfolio,borderWidth:2,fill:!1,borderColor:["rgb(0, 204, 212)"]},{label:"S&P 500",data:b[0].dataSP500,borderColor:["rgb(185, 153, 15)"],backgroundColor:["rgb(163, 134, 13)"],borderWidth:1,fill:!1}],subtitle:b[0].subtitle},e.periodChange=function(a){console.log(a);var t={labels:b[a].labels,datasets:[{label:"Portfolio",data:b[a].dataPortfolio,borderWidth:2,fill:!1,borderColor:["rgb(0, 204, 212)"]},{label:"S&P 500",data:b[a].dataSP500,borderColor:["rgb(185, 153, 15)"],backgroundColor:["rgb(163, 134, 13)"],borderWidth:1,fill:!1}],subtitle:b[a].subtitle};e.setState(t)},e.returnsChartOptions={scales:{xAxes:[{gridLines:{display:!1,lineWidth:100,borderColor:["rgb(148, 151, 193)"]}}],yAxes:[{ticks:{callback:function(e,a,t){return Math.round(1e3*e)/10+"%"},fontColor:"rgb(148, 151, 193)"},gridLines:{drawBorder:!0,borderDash:[1,3],zeroLineColor:"rgba(148, 151, 193,.3)"}}]},legend:{display:!0,position:"top"},elements:{point:{radius:0},line:{tension:0}},tooltips:{callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].data[e.index];return parseFloat((100*t).toFixed(1))+"%"},title:function(e,a){return a.labels[e[0].index]}}},maintainAspectRatio:!1},e.indexChartData={labels:p.labels,datasets:[{label:"Portfolio",data:p.data,borderWidth:1,fill:!1,borderColor:g,backgroundColor:g}]},e.indexChartOptions={scales:{xAxes:[{gridLines:{display:!1,lineWidth:100,borderColor:["rgb(148, 151, 193)"]}}],yAxes:[{ticks:{callback:function(e,a,t){return Math.round(100*(e+1))},fontColor:"rgb(148, 151, 193)"},gridLines:{drawBorder:!0,borderDash:[1,3],zeroLineColor:"rgba(148, 151, 193,.3)"}}]},legend:{display:!1},elements:{point:{radius:0},line:{tension:0}},tooltips:{callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].data[e.index];return parseFloat((100*(t+1)).toFixed(1))},title:function(e,a){return a.labels[e[0].index]}}},maintainAspectRatio:!1},e.PerformanceChartData={labels:u.labels,datasets:[{label:"S&P500",data:u.sp500,fill:!0,backgroundColor:["rgba(20, 22, 49, 1)"],borderColor:["rgb(163, 134, 13)"],borderWidth:1},{label:"Portfolio",data:u.portfolio,borderWidth:2,fill:!0,backgroundColor:["rgba(0, 204, 212, .2)"],borderColor:["rgb(0, 204, 212)"]}]},e.PerformanceChartOptions={scales:{yAxes:[{display:!0,gridLines:{drawBorder:!1,display:!1,drawTicks:!1},ticks:{display:!1}}],xAxes:[{display:!1,position:"bottom",gridLines:{drawBorder:!1,display:!1,drawTicks:!1},ticks:{beginAtZero:!1,stepSize:10,fontColor:"#a7afb7",padding:10}}]},legend:{display:!1,position:"top"},elements:{point:{radius:0},line:{tension:0}},tooltips:{backgroundColor:"rgba(2, 171, 254, 1)"},maintainAspectRatio:!1},e.feesChartData={labels:h.fees_labels,datasets:[{data:h.fees_data.slice(0,h.fees_data.length-1).concat([void 0]),borderWidth:2,fill:!0,backgroundColor:"rgba(0, 204, 212, .2)",borderColor:"rgb(0, 204, 212)"},{data:Array(h.fees_data.length-2).fill(void 0).concat(h.fees_data.slice(h.fees_data.length-2,h.fees_data.length)),borderWidth:2,fill:!1,borderColor:"rgb(0, 204, 212)",borderDash:[1,3]}]},e.feesChartOptions={scales:{yAxes:[{display:!1,gridLines:{drawBorder:!1,display:!1,drawTicks:!1},ticks:{display:!1,beginAtZero:!0,min:0}}],xAxes:[{display:!1,position:"bottom",gridLines:{drawBorder:!1,display:!1,drawTicks:!1},ticks:{beginAtZero:!0,stepSize:10,fontColor:"#a7afb7",padding:10}}]},legend:{display:!1},elements:{point:{radius:0},line:{tension:0}},tooltips:{backgroundColor:"rgba(2, 171, 254, 1)"}},e.tradesChartData={labels:h.trades_labels,datasets:[{data:h.trades_data,borderWidth:2,fill:!0,backgroundColor:Array(h.trades_labels.length-1).fill("rgb(0, 204, 212)").concat(["rgba(0, 204, 212,0)"]),borderColor:Array(h.trades_labels.length-1).fill("rgb(0, 204, 212)").concat(["rgba(0, 204, 212,0.5)"])}]},e.tradesChartOptions={scales:{yAxes:[{display:!1,ticks:{display:!1},gridLines:{drawBorder:!1,display:!1}}],xAxes:[{display:!1,ticks:{display:!1},gridLines:{drawBorder:!1,display:!1}}],barThickness:8},legend:{display:!1},elements:{point:{radius:0}}},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"container p-md-0"},r.a.createElement("div",{className:"az-content-body"},r.a.createElement("div",{className:"az-dashboard-one-title"},r.a.createElement("div",null,r.a.createElement("h2",{className:"az-dashboard-title"},"Portfolio Performance")),r.a.createElement("div",{className:"az-content-header-right"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-body"},r.a.createElement("label",{className:"sp500_lastupdate"},"Last update"),r.a.createElement("p",null,u.last_update))))),r.a.createElement("div",{className:"row row-sm mg-b-20"},r.a.createElement("div",{className:"col-lg-7 ht-lg-100p"},r.a.createElement("div",null,r.a.createElement("div",{className:"card card-dashboard-one sp500_card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h6",{className:"card-title"},"Portfolio Value")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-body-top"},r.a.createElement("div",null,r.a.createElement("label",{className:"mg-b-0 sp500_titles"},"Value"),r.a.createElement("h2",null,u.value.toLocaleString("en-UK",{minimumFractionDigits:0,maximumFractionDigits:0}))),r.a.createElement("div",null,r.a.createElement("label",{className:"mg-b-0 sp500_titles"},"Invested"),r.a.createElement("h2",null,u.invested.toLocaleString("en-UK",{minimumFractionDigits:0,maximumFractionDigits:0}))),r.a.createElement("div",null,r.a.createElement("label",{className:"mg-b-0 sp500_titles"},"Gain"),r.a.createElement("h2",null,(u.gain<0?"":"+")+u.gain.toLocaleString("en-UK",{minimumFractionDigits:0,maximumFractionDigits:0}))),r.a.createElement("div",null,r.a.createElement("label",{className:"mg-b-0 sp500_titles"},"Gain vs. Invested"),r.a.createElement("h2",null,(u.gain_pct<0?"":"+")+Math.round(100*u.gain_pct)+"%"))),r.a.createElement("div",{className:"performance-chart-wrapper",style:{height:"263px"}},r.a.createElement(m.Line,{data:this.PerformanceChartData,options:this.PerformanceChartOptions})))))),r.a.createElement("div",{className:"col-lg-5 mg-t-20 mg-lg-t-0"},r.a.createElement("div",{className:"row row-sm"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"card card-dashboard-five sp500_card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h6",{className:"card-title "}," ",r.a.createElement("i",{className:"fa fa-line-chart"})," Performance"),r.a.createElement("p",{className:"card-text"},"since 21 Sep 2021")),r.a.createElement("div",{className:"card-body row row-sm"},r.a.createElement("div",{className:"col-6 d-sm-flex align-items-center"},r.a.createElement("div",null,r.a.createElement("label",{className:"sp500_titles"},"Annual Return"),r.a.createElement("h4",null,(u.cagr<0?"":"+")+Math.round(1e3*u.cagr)/10+"%"))),r.a.createElement("div",{className:"col-6 d-sm-flex align-items-center"},r.a.createElement("div",null,r.a.createElement("label",{className:"sp500_titles"},"Index vs SPX"),r.a.createElement("h4",null,Math.round(u.index_spx))))))),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"card card-dashboard-five sp500_card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h6",{className:"card-title"},r.a.createElement("i",{className:"fa fa-money"})," Cash"),r.a.createElement("p",{className:"card-text"},"\u2002")),r.a.createElement("div",{className:"card-body row row-sm"},r.a.createElement("div",{className:"col-6 d-sm-flex align-items-center"},r.a.createElement("div",null,r.a.createElement("label",{className:"sp500_titles"},"$ Dollar"),r.a.createElement("h4",null,h.cash_usd.toLocaleString("en-UK",{minimumFractionDigits:0,maximumFractionDigits:0})))),r.a.createElement("div",{className:"col-6 d-sm-flex align-items-center"},r.a.createElement("div",null,r.a.createElement("label",{className:"sp500_titles"},"\u20ac Euro "),r.a.createElement("h4",null,h.cash_eur.toLocaleString("en-UK",{minimumFractionDigits:0,maximumFractionDigits:0})))))))),r.a.createElement("div",{className:"row row-sm"},r.a.createElement("div",{className:"col-sm-6 mg-t-20 mg-sm-t-20 "},r.a.createElement("div",{className:"card card-dashboard-two sp500_card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h6",null,h.monthly_trades),r.a.createElement("p",null,"trades opened last month")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"chart-wrapper"},r.a.createElement(m.Bar,{data:this.tradesChartData,options:this.tradesChartOptions}))))),r.a.createElement("div",{className:"col-sm-6 mg-t-20 mg-sm-t-20"},r.a.createElement("div",{className:"card card-dashboard-two sp500_card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h6",null,h.monthly_fees.toLocaleString("en-UK",{minimumFractionDigits:2,maximumFractionDigits:2})," ",r.a.createElement("small",null,"\u20ac")),r.a.createElement("p",null,"last month EUR fees")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"chart-wrapper"},r.a.createElement(m.Line,{data:this.feesChartData,options:this.feesChartOptions,datasetKeyProvider:E})))))))),r.a.createElement("div",{className:"row row-sm mg-b-20"},r.a.createElement("div",{className:"col-lg-6 mg-t-20 mg-lg-t-0"},r.a.createElement("div",{className:"card card-dashboard-one sp500_card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",null,r.a.createElement("h6",{className:"card-title sp500_title"},"Rate of return"),r.a.createElement("p",{className:"card-text sp500_returnsTitle"},this.state.subtitle)),r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{className:"btn",id:"btnDay",onClick:function(){e.periodChange(0)}},"Day"),r.a.createElement("button",{className:"btn",id:"btnWeek",onClick:function(){e.periodChange(1)}},"Week"),r.a.createElement("button",{className:"btn",id:"btnMonth",onClick:function(){e.periodChange(2)}},"Month"),r.a.createElement("button",{className:"btn",id:"btnYear",onClick:function(){e.periodChange(3)}},"Year"))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"returns-chart-wrapper",style:{height:"300px"}},r.a.createElement(m.Line,{data:this.state,options:this.returnsChartOptions,datasetKeyProvider:E}))))),r.a.createElement("div",{className:"col-lg-6 mg-t-20 mg-lg-t-0"},r.a.createElement("div",{className:"card card-dashboard-one sp500_card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",null,r.a.createElement("h6",{className:"card-title sp500_title"},"Index vs S&P500"))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"returns-chart-wrapper",style:{height:"300px"}},r.a.createElement(m.Bar,{data:this.indexChartData,options:this.indexChartOptions})))))))))}}]),t}(l.Component);n.a.render(r.a.createElement("div",{className:"az-content-wrapper"},r.a.createElement(f,null)),document.getElementById("root"))},16:function(e){e.exports=JSON.parse('{"labels":["17-05-2021","18-05-2021","19-05-2021","20-05-2021","21-05-2021","24-05-2021","25-05-2021","26-05-2021","27-05-2021","28-05-2021","01-06-2021","02-06-2021","03-06-2021","04-06-2021","07-06-2021","08-06-2021","09-06-2021","10-06-2021","11-06-2021","14-06-2021","15-06-2021","16-06-2021","17-06-2021","18-06-2021","21-06-2021","22-06-2021","23-06-2021","24-06-2021","25-06-2021","28-06-2021","29-06-2021","30-06-2021","01-07-2021","02-07-2021","06-07-2021","07-07-2021","08-07-2021","09-07-2021","12-07-2021","13-07-2021","14-07-2021","15-07-2021","16-07-2021","19-07-2021","20-07-2021","21-07-2021","22-07-2021","23-07-2021","26-07-2021","27-07-2021","28-07-2021","29-07-2021","30-07-2021","02-08-2021","03-08-2021","04-08-2021","05-08-2021","06-08-2021","09-08-2021","10-08-2021","11-08-2021","12-08-2021","13-08-2021","16-08-2021","17-08-2021","18-08-2021","19-08-2021","20-08-2021","23-08-2021","24-08-2021","25-08-2021","26-08-2021","27-08-2021","30-08-2021","31-08-2021","01-09-2021","02-09-2021","03-09-2021","07-09-2021","08-09-2021","09-09-2021","10-09-2021","13-09-2021","14-09-2021","15-09-2021","16-09-2021","17-09-2021","20-09-2021","21-09-2021","22-09-2021","23-09-2021","24-09-2021","27-09-2021","28-09-2021","29-09-2021","30-09-2021","01-10-2021"],"data":[0.017045487824974614,0.013966910463570459,0.014184047765480878,0.013970938363182528,0.013908739469544296,0.013854422494818275,0.013912552702098235,0.013861806308315128,0.013826008481244267,0.013806578500758171,0.013865587834978932,0.013831430642913922,0.013805329557983415,0.013731728132002852,0.013762801887504228,0.013759871475601315,0.013778595646636527,0.013714813240325308,0.013646257943418671,0.013627954557636768,0.01366264615911672,0.013703280312633792,0.013540992190024026,0.013610998914963979,0.013559345361641606,0.013492082881249923,0.013516563254905467,0.013451419925979646,0.013431520318683887,0.013595315308286171,0.007637348986398118,0.001175136845485536,0.0019504643054470971,-0.004461332613662217,-0.012506152925756298,-0.013405631653989003,-0.02181942089414335,-0.012967073903215165,-0.010015164776051133,-0.017553644091289566,-0.010761216103666094,-0.021597739048565545,-0.021995633615708332,-0.02976678271766653,-0.037700881473518466,-0.025618826277375994,-0.027758340363248868,-0.03371553902999613,-0.03126229307235884,-0.02906346138717275,-0.03287235822675527,-0.02303004789777241,-0.023025315260015278,-0.022146037259818452,-0.018595191455883398,-0.01790501917657994,-0.01652901477157409,-0.02261526788087631,-0.02230568921258025,-0.02430641638816189,-0.01995905941486309,-0.01683287277563894,-0.013117812943918672,-0.01732652450258665,-0.01950519114253413,-0.019257952000923062,-0.024314174180008696,-0.027370311751153897,-0.02698935331836949,-0.025781194740477575,-0.026558676657364555,-0.026532686581009157,-0.02628027448033121,-0.028184080589851224,-0.03034643108140278,-0.019304753855777124,-0.01953732520893514,-0.02379670974516812,-0.01863224042870304,-0.027656004894758057,-0.029601491068522834,-0.029226811423456622,0.002299676562223407,0,0.005929612513250193,0.006309382221429738,0.009841225477893234,0.01365659988257617,0.006840626556237295,0.018939342343391674,0.02200289044419157,0.018281469677635442,0.013933127083358032,0.006252578115405916,0.011476239786640141,0.00036311205900507737,0.011822624719048047]}')},2:function(e){e.exports=JSON.parse('{"last_update":"03-10-2021","value":42047.43398413246,"invested":42294.3,"gain":-246.86601586754114,"gain_pct":-0.01,"cagr":-0.4723064869977345,"index_spx":101.1822624719048,"labels":["17/05/2021","18/05/2021","19/05/2021","20/05/2021","21/05/2021","24/05/2021","25/05/2021","26/05/2021","27/05/2021","28/05/2021","01/06/2021","02/06/2021","03/06/2021","04/06/2021","07/06/2021","08/06/2021","09/06/2021","10/06/2021","11/06/2021","14/06/2021","15/06/2021","16/06/2021","17/06/2021","18/06/2021","21/06/2021","22/06/2021","23/06/2021","24/06/2021","25/06/2021","28/06/2021","29/06/2021","30/06/2021","01/07/2021","02/07/2021","06/07/2021","07/07/2021","08/07/2021","09/07/2021","12/07/2021","13/07/2021","14/07/2021","15/07/2021","16/07/2021","19/07/2021","20/07/2021","21/07/2021","22/07/2021","23/07/2021","26/07/2021","27/07/2021","28/07/2021","29/07/2021","30/07/2021","02/08/2021","03/08/2021","04/08/2021","05/08/2021","06/08/2021","09/08/2021","10/08/2021","11/08/2021","12/08/2021","13/08/2021","16/08/2021","17/08/2021","18/08/2021","19/08/2021","20/08/2021","23/08/2021","24/08/2021","25/08/2021","26/08/2021","27/08/2021","30/08/2021","31/08/2021","01/09/2021","02/09/2021","03/09/2021","07/09/2021","08/09/2021","09/09/2021","10/09/2021","13/09/2021","14/09/2021","15/09/2021","16/09/2021","17/09/2021","20/09/2021","21/09/2021","22/09/2021","23/09/2021","24/09/2021","27/09/2021","28/09/2021","29/09/2021","30/09/2021","01/10/2021"],"sp500":[0.9600400213353394,0.9576125006597355,0.9395985210121136,0.9572720556869374,0.9625563537429777,0.9672189696747778,0.9622307107255188,0.9665824855951989,0.9696760942610599,0.9713635171697115,0.9662568425777398,0.9692645999026345,0.9714123636223304,0.9778630557590877,0.975214985948932,0.9754399756700854,0.9737747556944424,0.979429102633959,0.9855141864738416,0.9871897678182221,0.9840487928952758,0.9803764277756581,0.9950318437568497,0.9886818049163981,0.9933592228035375,0.9995168362245814,0.997266939013046,1.0032765328806998,1.0051267772980808,1.006355339591222,1.0123057256375194,1.0164650750877922,1.0200175443691635,1.027181690753263,1.0270040672891942,1.034834301663551,1.0224894709107848,1.0323327712112518,1.0358704385372843,1.0434342377155381,1.0381795435701762,1.0377058809993263,1.0336205413257489,1.014377999384986,1.0294167860094594,1.0348787075295685,1.039097264801197,1.0514716994646414,1.0502727410821786,1.0404738466477286,1.0472383402376735,1.045284482132919,1.0407402818438314,1.0432862181621478,1.0407550837991704,1.045491709507666,1.0484965064414924,1.058147381322552,1.0594351514370495,1.0634168774232535,1.0627803933436744,1.0649266768678363,1.0633872735125753,1.0615518310505332,1.0674726131861527,1.0670581584366592,1.0578513422157712,1.0671321682133545,1.0742223048207586,1.0728901288402444,1.0750660162750842,1.0710102805121853,1.0737338402945704,1.0808979866786694,1.0791809598593398,1.075184431917797,1.07669423136238,1.0734526031431284,1.0733193855450767,1.071513546993713,1.0734081972771112,1.065770388322162,1.0019253037934064,1,0.9993861350223919,1.001046360757286,0.9997907278485427,0.9820304979282055,0.9870530295631791,0.9916849198487659,1.002650780585125,0.9799421994888576,0.9821919624346718,0.9650119544848185,0.9681212807139418,0.9656793391970492,0.959343857594888],"portfolio":[0.9764043718304992,0.9709873887152457,0.9529258313145246,0.9706460445737366,0.9759442992919432,0.980619229925655,0.9756177962000651,0.9799810647915294,0.9830828441643731,0.9847747238222877,0.9796545616996509,0.9826709159908195,0.9848230314388363,0.9912908053911011,0.9886366765982723,0.9888619043674696,0.9871920043040583,0.9928617898587231,0.9989627672693621,1.000643145113813,0.9974935033559098,0.9938108007773665,1.0085055621819865,1.00213875189036,1.0068285235737024,1.013002400220128,1.0107465606762418,1.0167720268263591,1.018627158030213,1.020037057745142,1.020037057745142,1.017659560649677,1.0220070521803852,1.0225990915761487,1.0141601973683019,1.0209616941925366,1.0001793427851524,1.0189464358742446,1.0254960254086931,1.0251181644740135,1.027007469147412,1.015293780172341,1.0108854026010776,0.9841832298837118,0.9906068657732665,1.008366329703213,1.0102536492543244,1.0160207643424048,1.017438806844558,1.0102340751813192,1.012813146368588,1.0212115304425997,1.01677690875058,1.0201815627020738,1.0214020437572409,1.0267721603999758,1.0311658921985771,1.0342170948364946,1.0358037202082118,1.037569024006405,1.0415682963279764,1.047000901600736,1.0494379581716937,1.0431588272390704,1.0466513558265365,1.0465088036392927,1.032130560424581,1.0379244280896702,1.045229739493478,1.045229739493478,1.0465136855635133,1.0425935004143168,1.045515820252809,1.0504338707127099,1.0464316692366062,1.0544282611100604,1.0556585060136687,1.0479079631209363,1.053321040696813,1.0418797630932553,1.0416337141125336,1.0346213181619661,1.0042294079316387,1,1.0053121075541895,1.0073623448686748,1.0096298938320072,0.9954416955108981,0.9938050907296235,1.0104667800425606,1.0247119958641226,0.9978569830946487,0.9958769678675269,0.9710457671125353,0.9792316726739642,0.9660299890102437,0.9706858199997563]}')},47:function(e,a,t){e.exports=t(153)},5:function(e){e.exports=JSON.parse('[{"id":1,"subtitle":"Daily returns","labels":["18-05-2021","19-05-2021","20-05-2021","21-05-2021","24-05-2021","25-05-2021","26-05-2021","27-05-2021","28-05-2021","01-06-2021","02-06-2021","03-06-2021","04-06-2021","07-06-2021","08-06-2021","09-06-2021","10-06-2021","11-06-2021","14-06-2021","15-06-2021","16-06-2021","17-06-2021","18-06-2021","21-06-2021","22-06-2021","23-06-2021","24-06-2021","25-06-2021","28-06-2021","29-06-2021","30-06-2021","01-07-2021","02-07-2021","06-07-2021","07-07-2021","08-07-2021","09-07-2021","12-07-2021","13-07-2021","14-07-2021","15-07-2021","16-07-2021","19-07-2021","20-07-2021","21-07-2021","22-07-2021","23-07-2021","26-07-2021","27-07-2021","28-07-2021","29-07-2021","30-07-2021","02-08-2021","03-08-2021","04-08-2021","05-08-2021","06-08-2021","09-08-2021","10-08-2021","11-08-2021","12-08-2021","13-08-2021","16-08-2021","17-08-2021","18-08-2021","19-08-2021","20-08-2021","23-08-2021","24-08-2021","25-08-2021","26-08-2021","27-08-2021","30-08-2021","31-08-2021","01-09-2021","02-09-2021","03-09-2021","07-09-2021","08-09-2021","09-09-2021","10-09-2021","13-09-2021","14-09-2021","15-09-2021","16-09-2021","17-09-2021","20-09-2021","21-09-2021","22-09-2021","23-09-2021","24-09-2021","27-09-2021","28-09-2021","29-09-2021","30-09-2021","01-10-2021"],"dataPortfolio":[0.005578839826561488,0.018953791373045092,-0.01825610206549999,-0.005428849496892929,-0.004767325064659711,0.005126427321303417,-0.004452400916942656,-0.0031551556323620167,-0.0017180372495222418,0.0052264975051548035,-0.0030695467242226604,-0.002185281395046812,-0.006524597945517185,0.002684635170486782,-0.00022776463346652065,0.0016915656287030956,-0.0057105486509573256,-0.006107312114660535,-0.0016792978122682767,0.003157556161826225,0.003705637507323001,-0.014570828318315576,0.006353222325368391,-0.00465796466184365,-0.0060946318045090875,0.0022318547810611378,-0.005926073880026528,-0.0018212072878964758,-0.0013822044054415672,0,0.0023362401213498085,-0.004253876254017186,-0.0005789555267948776,0.008321066267188648,-0.006661853096862624,0.020778624910920973,-0.018418135073989705,-0.006386752724700462,0.00036860232095636825,-0.0018396211616328317,0.011537240948213734,0.004360907339170383,0.027131302288620596,-0.006484546101485411,-0.017612115167682796,-0.0018681640521708287,-0.005676178372016949,-0.0013937373851021784,0.007131744850267019,-0.0025464432373494272,-0.00822394168461038,0.004361450042634107,-0.003337301982282659,-0.0011949075906265705,-0.0052300956822232125,-0.004260935928779963,-0.0029502535329875013,-0.001531781881801142,-0.0017013844451300164,-0.003839664029397505,-0.005188730271820985,-0.0023222493068608685,0.006019343141870692,-0.003336859564575856,0.000136216902091979,0.013930643821646882,-0.005582167167751395,-0.006989192067332395,0,-0.0012268793879594009,0.0037600322154691668,-0.002795098631588,-0.004681922962522234,0.0038246180747028014,-0.007583817855029484,-0.0011653815098350284,0.007396205740864303,-0.0051390576725741655,0.01098138001028981,0.0002362144940089017,0.006777741602140175,0.03026391180171073,0.004229407931638729,-0.00528403817508305,-0.002035253079419541,-0.0022459209827137006,0.014253168603538535,0.001646806598739614,-0.01648910151428762,-0.013901677621670938,0.026912687112925493,0.0019882126919368304,0.02557160701995409,-0.008359518783819353,0.013665914944572588,-0.004796434534825922],"dataSP500":[0.002534971790710161,0.019171996597246332,-0.01846239485403267,-0.005489858370880674,-0.004820641527913727,0.005184057101542683,-0.00450222814351986,-0.0031903526179208885,-0.0017371693282945966,0.005285007429647992,-0.0031031333705954234,-0.0022109701298087536,-0.006596723435624452,0.0027153703012254837,-0.00023065460383553393,0.001710066897817164,-0.00577310488764371,-0.006174526884950238,-0.001697324464863259,0.0031918894120126495,0.0037458725195482767,-0.01472858991714121,0.00642273258077064,-0.004708687229921127,-0.006160589994964716,0.002256063169768785,-0.005989967542048058,-0.001840807009792944,-0.0012208036712362258,-0.0058780523468343615,-0.004091974778290819,-0.0034827531163381664,-0.006974565890914386,0.0001729530288401282,-0.007566655223710028,0.012073308433944163,-0.009535007097486337,-0.0034151638992884203,-0.007248946703928061,0.0050614502837260655,0.0004564516589169454,0.003952455964485235,0.018969794250693228,-0.014609035746125154,-0.005277837373954264,-0.004059829059828712,-0.011768680668956533,0.0011415685998166225,0.009417722959611963,-0.006459363957596942,0.0018692118156844462,0.0043663153702833135,-0.0024403047543380962,0.002432017294345501,-0.004530524408200343,-0.0028658149220015527,-0.009120539398771776,-0.0012155251907119968,-0.003744275712317169,0.0005988857938719061,-0.002015428452289858,0.0014476413190238624,0.0017290182244100727,-0.005546542424116563,0.0003884087724896901,0.008703317615122996,-0.00869697894415633,-0.006600250781971129,0.001241670460659705,-0.002023957042544211,0.003786831776217303,-0.002536531568789857,-0.006627957931638506,0.0015910462500685618,0.0037170626944571517,-0.0014022546054440754,0.0030198149501523552,0.0001241173874670931,0.001685315651333008,-0.001765079014865334,0.00716646759812245,0.06372239955117487,0.0019253037934063855,0.000614242039283841,-0.0016584903556694508,0.0012558957327450937,0.018085212178039267,-0.005088411143620464,-0.0046707277612865195,-0.01093686949503958,0.023173388295873343,-0.0022905532033039577,0.017802896503002374,-0.0032117114777503453,0.002528729173105315,0.006603973697235643]},{"id":2,"subtitle":"Weekly returns","labels":["24-05-2021","25-05-2021","26-05-2021","27-05-2021","28-05-2021","01-06-2021","02-06-2021","03-06-2021","04-06-2021","07-06-2021","08-06-2021","09-06-2021","10-06-2021","11-06-2021","14-06-2021","15-06-2021","16-06-2021","17-06-2021","18-06-2021","21-06-2021","22-06-2021","23-06-2021","24-06-2021","25-06-2021","28-06-2021","29-06-2021","30-06-2021","01-07-2021","02-07-2021","06-07-2021","07-07-2021","08-07-2021","09-07-2021","12-07-2021","13-07-2021","14-07-2021","15-07-2021","16-07-2021","19-07-2021","20-07-2021","21-07-2021","22-07-2021","23-07-2021","26-07-2021","27-07-2021","28-07-2021","29-07-2021","30-07-2021","02-08-2021","03-08-2021","04-08-2021","05-08-2021","06-08-2021","09-08-2021","10-08-2021","11-08-2021","12-08-2021","13-08-2021","16-08-2021","17-08-2021","18-08-2021","19-08-2021","20-08-2021","23-08-2021","24-08-2021","25-08-2021","26-08-2021","27-08-2021","30-08-2021","31-08-2021","01-09-2021","02-09-2021","03-09-2021","07-09-2021","08-09-2021","09-09-2021","10-09-2021","13-09-2021","14-09-2021","15-09-2021","16-09-2021","17-09-2021","20-09-2021","21-09-2021","22-09-2021","23-09-2021","24-09-2021","27-09-2021","28-09-2021","29-09-2021","30-09-2021","01-10-2021"],"dataPortfolio":[-0.004298159740835694,-0.004746128558595686,-0.027607914529205968,-0.012650815406312854,-0.008966948802331398,0.0009847024285074557,-0.007177499278731347,-0.004916585511036242,-0.008280074002592785,-0.003906341801189206,-0.009311050033531387,-0.004579745676147384,-0.008096553318897137,-0.0076799277506928165,-0.01199875157709196,-0.008653288426842431,-0.006660016643138644,-0.015511835442351796,-0.0031692064746592363,-0.006143427917531308,-0.015309832297384696,-0.01675569381858144,-0.008130106283681604,-0.01618689037482357,-0.012949072850978571,-0.00689647250715042,-0.006793037908494615,-0.005122298660129143,-0.003884155167606873,0.005794804797200959,-0.0009056524379456032,0.017477083475697652,0.0030037067684667296,-0.0028249098590020782,-0.010689467307736344,-0.005886787717225173,-0.014886762513824259,0.007974230563054352,0.04197673184277151,0.034838541800139344,0.01848647549515614,0.004988975710938259,-0.005054386604638861,-0.032685579454142855,-0.0194283779276897,-0.004390559780270364,-0.010730275620297935,-0.0007436679586915185,-0.0026884977711726377,-0.010933959496341017,-0.013595045298024022,-0.00965350176076274,-0.016863177153991882,-0.015082160066964834,-0.015581594934993337,-0.014205632007199265,-0.015124160235152728,-0.014503823896094392,-0.007050802657084687,-0.008677514025631883,-0.004720941949208024,0.014407422613315513,0.011092840451991659,-0.0019812986333618277,0.0013600993918785331,-0.000004664940638665627,-0.010035493205720059,-0.0072609060676892545,-0.00495426829268264,-0.0011485984020390694,-0.00750603510779857,-0.012376166653255583,-0.002282779549649394,-0.002741016150397124,0.004368936133126056,0.012283153688461113,0.020333224806420747,0.04349459878819917,0.05332104069681298,0.03637443065122392,0.03402089567714239,0.024753055037925797,0.008827952918156967,0.0062335253946308455,-0.005101278528081843,-0.01693124611156438,0.011798194467555145,-0.0004370744285419059,0.0234379515239167,0.031897566469948346,0.06074553328722465,0.02799171733537742],"dataSP500":[-0.0074222575905974475,-0.0047994831325859355,-0.027916877230057757,-0.012791940161807291,-0.009066804827502217,0.0009957260374697796,-0.00725693394540794,-0.004972016218860231,-0.008372298605424322,-0.003949353562766267,-0.009414349751287632,-0.004631621189020829,-0.008185114154837025,-0.007763592670471331,-0.012130172191467725,-0.008748364194280933,-0.006733813557914803,-0.01568064501733024,-0.0032038805880769683,-0.006210698852630037,-0.015475520540236376,-0.0169368005462045,-0.008217763352021401,-0.01636109270304087,-0.012914043654762564,-0.012633425939465037,-0.018887157606559235,-0.016412474060744975,-0.021471287556740437,-0.0201057896026402,-0.021770225426250178,-0.005891890326876759,-0.011929512639261342,-0.008387871166871452,-0.01574624430794558,-0.0032222190538654383,-0.014663509542692243,-0.0012458828583702397,0.021187800963081926,0.013616886664941097,0.0031895873560752186,-0.00133903133903146,-0.01697730728081548,-0.03417659079698432,-0.010626947206691995,-0.01180212014134241,-0.00591917074966708,0.010311331086174214,0.00669665025609012,-0.00027022414381605575,0.0016706308755236599,-0.0030634573304155754,-0.01645054345545305,-0.015242965322603053,-0.021310357306905447,-0.016267409470752003,-0.015428452289943828,-0.004927548335908694,-0.0019939484362143656,-0.0037993815605196213,-0.004008933401767112,0.006688401639917796,-0.0035093072932560476,-0.011795020186570748,-0.005049459873349593,-0.007448712653173484,-0.012286472441815577,-0.0061483319547838144,-0.0061760517090271305,-0.0058292642782683535,-0.0001101351909472692,-0.005279076161671781,0.00026199307786711756,0.007060900264783676,0.007155684486807479,0.0016547615764361812,0.010249715285686634,0.07138985219647731,0.07331938554507667,0.07217171565993863,0.07228619907781697,0.06599347106929221,0.020258847263066704,0.01311679317022163,0.007765788325994061,-0.001600178106780925,0.020254794997131675,-0.00016439200547524457,0.022840209363134134,0.02433955290957668,0.03828542238339394,0.021471281366840067]},{"id":3,"subtitle":"Monthly returns","labels":["17-06-2021","18-06-2021","21-06-2021","22-06-2021","23-06-2021","24-06-2021","25-06-2021","28-06-2021","29-06-2021","30-06-2021","01-07-2021","02-07-2021","06-07-2021","07-07-2021","08-07-2021","09-07-2021","12-07-2021","13-07-2021","14-07-2021","15-07-2021","16-07-2021","19-07-2021","20-07-2021","21-07-2021","22-07-2021","23-07-2021","26-07-2021","27-07-2021","28-07-2021","29-07-2021","30-07-2021","02-08-2021","03-08-2021","04-08-2021","05-08-2021","06-08-2021","09-08-2021","10-08-2021","11-08-2021","12-08-2021","13-08-2021","16-08-2021","17-08-2021","18-08-2021","19-08-2021","20-08-2021","23-08-2021","24-08-2021","25-08-2021","26-08-2021","27-08-2021","30-08-2021","31-08-2021","01-09-2021","02-09-2021","03-09-2021","07-09-2021","08-09-2021","09-09-2021","10-09-2021","13-09-2021","14-09-2021","15-09-2021","16-09-2021","17-09-2021","20-09-2021","21-09-2021","22-09-2021","23-09-2021","24-09-2021","27-09-2021","28-09-2021","29-09-2021","30-09-2021","01-10-2021"],"dataPortfolio":[-0.03183045444195043,-0.031084880328549946,-0.053537112822203525,-0.04181269031266599,-0.03443223329992251,-0.03555644328015939,-0.04222286976259115,-0.03926915463459646,-0.03622830494262497,-0.03231418256061536,-0.04144050707906377,-0.03904577650639929,-0.028927546166369056,-0.02906170620328874,-0.01154059646416794,-0.029525135421826998,-0.03735170118223463,-0.03146600629386087,-0.027307203424072224,-0.014429946626917323,-0.013247692775768205,0.009782295208172087,0.018068415460404053,-0.006175908129227192,-0.0033903620968358528,-0.0029707701143590892,-0.006577541689284594,0.006471719580302571,0.005740458328834741,-0.0011500777874575707,0.0032063562483615193,-0.002472110989456655,0.0005923313222664373,-0.00406425980833125,-0.016491715793679806,-0.012816845428428758,-0.03439298076270503,-0.017948288452417693,-0.015430837301736,-0.020900399506119327,-0.0213738114288905,-0.026712180675765196,-0.03417179276208415,-0.05955570898098539,-0.04023104851602599,-0.02847808336186841,-0.033462586183304666,-0.02794502877924987,-0.027782607260696812,-0.031037432345528915,-0.03127898521546357,-0.027819305036577924,-0.028338936366155698,-0.03247892689440335,-0.032450325613143205,-0.020169522004597318,-0.02103361429444095,-0.007354656965416817,-0.0055969712052656995,0.0028490673763379437,0.03718163210659475,0.047000901600736,0.04389268793833323,0.03553486245811799,0.03666834968011479,0.05130095349500596,0.03856437248356204,0.027173231806742804,0.020022936895603527,0.04747449504428225,0.05084635886741595,0.07368111341912642,0.06768995471505157,0.08737190632036484,0.0780333323885054],"dataSP500":[-0.03516653526322833,-0.0314249782914634,-0.05412010132618106,-0.04226520155199476,-0.034805711402024375,-0.035939805252286905,-0.04267726971504282,-0.03952168029652292,-0.0421114197982162,-0.04437098629698144,-0.05270566382725539,-0.05638446573960654,-0.05412997420117305,-0.05505349582332075,-0.04623469121862245,-0.05511090718781808,-0.05994541453516622,-0.06134084235314141,-0.050728563688728356,-0.04868056942344434,-0.047959329800945194,-0.033519626440974504,-0.03340235239985068,-0.0446399199027393,-0.04401709401709386,-0.04941156596655227,-0.050468606863505405,-0.03575035921073233,-0.040212014134275664,-0.03724262935795386,-0.027321471746952875,-0.025708326830583217,-0.01992547502560027,-0.01751330841544918,-0.02049834121550076,-0.02203197784212485,-0.03487299857490145,-0.029230405189093034,-0.02532033426183844,-0.020182083536034345,-0.023705126599017023,-0.022463293221969716,-0.03171235630988545,-0.04936952933179817,-0.026879538808120995,-0.03022442921741031,-0.03269811086767793,-0.019963301739718275,-0.023062095552801476,-0.028511802753054205,-0.02467604080507335,-0.0329480718667835,-0.03562023371920753,-0.029667667061317626,-0.03337915864723684,-0.026047627583734467,-0.023127206531332822,-0.012474098632408115,-0.013017457734631477,-0.002208271992444555,0.06073815015936157,0.06492667686783626,0.06404045068000608,0.06044222591996151,0.06769605223610653,0.08658352330995522,0.07172695947645691,0.07607985848579246,0.07138230540634094,0.09485042015729994,0.09455794528209638,0.10984146417538954,0.1090902159518119,0.11931356797736115,0.12491569244513423]},{"id":4,"subtitle":"Annual returns","labels":[],"dataPortfolio":[],"dataSP500":[]}]')},52:function(e,a,t){}},[[47,1,2]]]);
//# sourceMappingURL=main.687dd633.chunk.js.map