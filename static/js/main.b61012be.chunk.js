(this.webpackJsonpsp500_trader=this.webpackJsonpsp500_trader||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"cash_usd":157.2,"cash_eur":17542.3,"monthly_trades":45,"monthly_trades_change":-0.6888888888888889,"monthly_fees":61.08,"monthly_fees_change":1.4422231107556978,"fees_labels":["09-2021","10-2021"],"fees_data":[61.08,25.009999999999998],"trades_labels":["09-2021","10-2021"],"trades_data":[45,14]}')},154:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(42),i=t.n(n),s=(t(53),t(54),t(43)),c=t(44),o=t(47),d=t(46),m=t(7),p=t(5),u=t(16),b=t(2),h=t(1),g=t(45),v=u.data.map((function(e){return e>0?"rgb(0, 204, 212)":"rgb(185, 153, 15)"})),E=function(){return btoa(Math.random()).substring(0,12)},f=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,l=new Array(r),n=0;n<r;n++)l[n]=arguments[n];return(e=a.call.apply(a,[this].concat(l))).state={labels:p[0].labels,datasets:[{label:"Portfolio",data:p[0].dataPortfolio,borderWidth:2,fill:!1,borderColor:["rgb(0, 204, 212)"],pointHitRadius:20},{label:"S&P 500",data:p[0].dataSP500,borderColor:["rgb(185, 153, 15)"],backgroundColor:["rgb(163, 134, 13)"],borderWidth:1,fill:!1,pointHitRadius:20}],subtitle:p[0].subtitle},e.periodChange=function(a){console.log(a);var t={labels:p[a].labels,datasets:[{label:"Portfolio",data:p[a].dataPortfolio,borderWidth:2,fill:!1,borderColor:["rgb(0, 204, 212)"],pointHitRadius:20},{label:"S&P 500",data:p[a].dataSP500,borderColor:["rgb(185, 153, 15)"],backgroundColor:["rgb(163, 134, 13)"],borderWidth:1,fill:!1,pointHitRadius:20}],subtitle:p[a].subtitle};e.setState(t)},e.returnsChartOptions={scales:{xAxes:[{gridLines:{display:!1,lineWidth:100,borderColor:["rgb(148, 151, 193)"]}}],yAxes:[{ticks:{callback:function(e,a,t){return Math.round(1e3*e)/10+"%"},fontColor:"rgb(148, 151, 193)"},gridLines:{drawBorder:!0,borderDash:[1,3],zeroLineColor:"rgba(148, 151, 193,.3)"}}]},legend:{display:!0,position:"top"},elements:{point:{radius:0},line:{tension:0}},tooltips:{callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].data[e.index];return parseFloat((100*t).toFixed(1))+"%"},title:function(e,a){return a.labels[e[0].index]}}},maintainAspectRatio:!1,responsive:!0},e.indexChartData={labels:u.labels,datasets:[{label:"Portfolio",data:u.data,borderWidth:1,fill:!1,borderColor:v,backgroundColor:v}]},e.indexChartOptions={scales:{xAxes:[{gridLines:{display:!1,lineWidth:100,borderColor:["rgb(148, 151, 193)"]}}],yAxes:[{ticks:{callback:function(e,a,t){return Math.round(100*(e+1))},fontColor:"rgb(148, 151, 193)"},gridLines:{drawBorder:!0,borderDash:[1,3],zeroLineColor:"rgba(148, 151, 193,.3)"}}]},legend:{display:!1},elements:{point:{radius:0},line:{tension:0}},tooltips:{callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].data[e.index];return parseFloat((100*(t+1)).toFixed(1))},title:function(e,a){return a.labels[e[0].index]}}},maintainAspectRatio:!1},e.PerformanceChartData={labels:b.labels,datasets:[{label:"S&P500",data:b.sp500,fill:!0,backgroundColor:["rgba(20, 22, 49, 1)"],borderColor:["rgb(163, 134, 13)"],borderWidth:1,pointHitRadius:20},{label:"Portfolio",data:b.portfolio,borderWidth:2,fill:!0,backgroundColor:["rgba(0, 204, 212, .2)"],borderColor:["rgb(0, 204, 212)"],pointHitRadius:20}]},e.PerformanceChartOptions={scales:{yAxes:[{display:!0,gridLines:{drawBorder:!1,display:!1,drawTicks:!1},ticks:{display:!1}}],xAxes:[{display:!1,position:"bottom",gridLines:{drawBorder:!1,display:!1,drawTicks:!1},ticks:{beginAtZero:!1,stepSize:10,fontColor:"#a7afb7",padding:10}}]},legend:{display:!1,position:"top"},elements:{point:{radius:0},line:{tension:0}},tooltips:{callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].data[e.index];return parseFloat(t.toFixed(2))},title:function(e,a){return a.labels[e[0].index]}}},maintainAspectRatio:!1},e.feesChartData={labels:h.fees_labels,datasets:[{data:h.fees_data.slice(0,h.fees_data.length-1).concat([void 0]),borderWidth:2,fill:!0,backgroundColor:"rgba(0, 204, 212, .2)",borderColor:"rgb(0, 204, 212)",pointHitRadius:20},{data:Array(h.fees_data.length-2).fill(void 0).concat(h.fees_data.slice(h.fees_data.length-2,h.fees_data.length)),borderWidth:2,fill:!0,backgroundColor:"rgba(0, 204, 212, .2)",borderColor:"rgb(0, 204, 212)",borderDash:[1,3],pointHitRadius:20}]},e.feesChartOptions={scales:{yAxes:[{display:!1,gridLines:{drawBorder:!1,display:!1,drawTicks:!1},ticks:{display:!1,beginAtZero:!0,min:0}}],xAxes:[{display:!1,position:"bottom",gridLines:{drawBorder:!1,display:!1,drawTicks:!1},ticks:{beginAtZero:!0,stepSize:10,fontColor:"#a7afb7",padding:10}}]},legend:{display:!1},elements:{point:{radius:0},line:{tension:0}},tooltips:{callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].data[e.index];return"\u20ac "+parseFloat(t.toFixed(2))},title:function(e,a){return a.labels[e[0].index]}}}},e.tradesChartData={labels:h.trades_labels,datasets:[{data:h.trades_data,borderWidth:2,fill:!0,backgroundColor:Array(h.trades_labels.length-1).fill("rgb(0, 204, 212)").concat(["rgba(0, 204, 212,0)"]),borderColor:Array(h.trades_labels.length-1).fill("rgb(0, 204, 212)").concat(["rgba(0, 204, 212,0.5)"])}]},e.tradesChartOptions={scales:{yAxes:[{display:!1,ticks:{display:!1},gridLines:{drawBorder:!1,display:!1}}],xAxes:[{display:!1,ticks:{display:!1},gridLines:{drawBorder:!1,display:!1}}],barThickness:8},legend:{display:!1},elements:{point:{radius:0}}},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"container p-md-0"},l.a.createElement("div",{className:"az-content-body"},l.a.createElement("div",{className:"az-dashboard-one-title"},l.a.createElement("div",null,l.a.createElement("h2",{className:"az-dashboard-title"},"Portfolio Performance")),l.a.createElement("div",{className:"az-content-header-right"},l.a.createElement("div",{className:"media"},l.a.createElement("div",{className:"media-body"},l.a.createElement("label",{className:"sp500_lastupdate"},"Last update"),l.a.createElement("p",null,b.last_update))))),l.a.createElement("div",{className:"row row-sm mg-b-20"},l.a.createElement("div",{className:"col-lg-7 ht-lg-100p"},l.a.createElement("div",null,l.a.createElement("div",{className:"card card-dashboard-one sp500_card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h6",{className:"card-title"},"Portfolio Value")),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"card-body-top"},l.a.createElement("div",null,l.a.createElement("label",{className:"mg-b-0 sp500_titles"},"Value"),l.a.createElement("h2",null,b.value.toLocaleString("en-UK",{minimumFractionDigits:0,maximumFractionDigits:0}))),l.a.createElement("div",null,l.a.createElement("label",{className:"mg-b-0 sp500_titles"},"Invested"),l.a.createElement("h2",null,b.invested.toLocaleString("en-UK",{minimumFractionDigits:0,maximumFractionDigits:0}))),l.a.createElement("div",null,l.a.createElement("label",{className:"mg-b-0 sp500_titles"},"Gain"),l.a.createElement("h2",null,(b.gain<0?"":"+")+b.gain.toLocaleString("en-UK",{minimumFractionDigits:0,maximumFractionDigits:0}))),l.a.createElement("div",null,l.a.createElement("label",{className:"mg-b-0 sp500_titles"},"Gain vs. Invested"),l.a.createElement("h2",null,(b.gain_pct<0?"":"+")+(Math.round(1e3*b.gain_pct)/10).toLocaleString("en-UK",{minimumFractionDigits:1})+"%"))),l.a.createElement("div",{className:"performance-chart-wrapper",style:{height:"263px"}},l.a.createElement(m.Line,{data:this.PerformanceChartData,options:this.PerformanceChartOptions})))))),l.a.createElement("div",{className:"col-lg-5 mg-t-20 mg-lg-t-0"},l.a.createElement("div",{className:"row row-sm"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("div",{className:"card card-dashboard-five sp500_card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h6",{className:"card-title "}," ",l.a.createElement("i",{className:"fa fa-line-chart"})," Performance"),l.a.createElement("p",{className:"card-text"},"since 13 Oct 2021")),l.a.createElement("div",{className:"card-body row row-sm"},l.a.createElement("div",{className:"col-6 d-sm-flex align-items-center"},l.a.createElement("div",null,l.a.createElement("label",{className:"sp500_titles"},"Annual Return"),l.a.createElement("h4",null,(b.cagr<0?"":"+")+(Math.round(1e3*b.cagr)/10).toLocaleString("en-UK",{minimumFractionDigits:1})+"%"))),l.a.createElement("div",{className:"col-6 d-sm-flex align-items-center"},l.a.createElement("div",null,l.a.createElement("label",{className:"sp500_titles"},"Index vs SPX"),l.a.createElement("h4",null,Math.round(b.index_spx))))))),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("div",{className:"card card-dashboard-five sp500_card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h6",{className:"card-title"},l.a.createElement("i",{className:"fa fa-money"})," Cash"),l.a.createElement("p",{className:"card-text"},"\u2002")),l.a.createElement("div",{className:"card-body row row-sm"},l.a.createElement("div",{className:"col-6 d-sm-flex align-items-center"},l.a.createElement("div",null,l.a.createElement("label",{className:"sp500_titles"},"$ Dollar"),l.a.createElement("h4",null,h.cash_usd.toLocaleString("en-UK",{minimumFractionDigits:0,maximumFractionDigits:0})))),l.a.createElement("div",{className:"col-6 d-sm-flex align-items-center"},l.a.createElement("div",null,l.a.createElement("label",{className:"sp500_titles"},"\u20ac Euro "),l.a.createElement("h4",null,h.cash_eur.toLocaleString("en-UK",{minimumFractionDigits:0,maximumFractionDigits:0})))))))),l.a.createElement("div",{className:"row row-sm"},l.a.createElement("div",{className:"col-sm-6 mg-t-20 mg-sm-t-20 "},l.a.createElement("div",{className:"card card-dashboard-two sp500_card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h6",null,h.monthly_trades),l.a.createElement("p",null,"trades opened last month")),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"chart-wrapper"},l.a.createElement(m.Bar,{data:this.tradesChartData,options:this.tradesChartOptions}))))),l.a.createElement("div",{className:"col-sm-6 mg-t-20 mg-sm-t-20"},l.a.createElement("div",{className:"card card-dashboard-two sp500_card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h6",null,h.monthly_fees.toLocaleString("en-UK",{minimumFractionDigits:2,maximumFractionDigits:2})," ",l.a.createElement("small",null,"\u20ac")),l.a.createElement("p",null,"last month EUR fees")),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"chart-wrapper"},l.a.createElement(m.Line,{data:this.feesChartData,options:this.feesChartOptions,datasetKeyProvider:E})))))))),l.a.createElement("div",{className:"row row-sm mg-b-20"},l.a.createElement("div",{className:"col-lg-6 mg-t-20 mg-lg-t-0"},l.a.createElement("div",{className:"card card-dashboard-one sp500_card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",null,l.a.createElement("h6",{className:"card-title sp500_title"},"Rate of return"),l.a.createElement("p",{className:"card-text sp500_returnsTitle"},this.state.subtitle)),l.a.createElement("div",{className:"btn-group"},l.a.createElement("button",{className:"btn",id:"btnDay",onClick:function(){e.periodChange(0)}},"Day"),l.a.createElement("button",{className:"btn",id:"btnWeek",onClick:function(){e.periodChange(1)}},"Week"),l.a.createElement("button",{className:"btn",id:"btnMonth",onClick:function(){e.periodChange(2)}},"Month"),l.a.createElement("button",{className:"btn",id:"btnYear",onClick:function(){e.periodChange(3)}},"Year"))),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"returns-chart-wrapper",style:{height:"300px"}},l.a.createElement(m.Line,{data:this.state,options:this.returnsChartOptions,datasetKeyProvider:E}))))),l.a.createElement("div",{className:"col-lg-6 mg-t-20 mg-lg-t-0"},l.a.createElement("div",{className:"card card-dashboard-one sp500_card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",null,l.a.createElement("h6",{className:"card-title sp500_title"},"Index vs S&P500"))),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"returns-chart-wrapper",style:{height:"300px"}},l.a.createElement(m.Bar,{data:this.indexChartData,options:this.indexChartOptions})))))),l.a.createElement("div",{className:"row row-sm mg-b-20"},l.a.createElement("div",{className:"col-lg-12 mg-t-20 mg-lg-t-0"},l.a.createElement("div",{className:"card card-dashboard-one sp500_card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"wd-5p"},"\xa0"),l.a.createElement("th",{className:"wd-45p"},"Stock"),l.a.createElement("th",null,"Position (% total)"),l.a.createElement("th",null,"Expiry"))),l.a.createElement("tbody",null,g.map((function(e,a){return l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("small",null,e.ticker)),l.a.createElement("th",null,l.a.createElement("strong",null,e.name)),l.a.createElement("th",null,l.a.createElement("strong",null,e.value.toLocaleString("en-UK",{minimumFractionDigits:0,maximumFractionDigits:0}))," (",Math.round(100*e.ttl_perc),"%)"),l.a.createElement("th",null,e.expiry))}))))))))))))}}]),t}(r.Component);i.a.render(l.a.createElement("div",{className:"az-content-wrapper"},l.a.createElement(f,null)),document.getElementById("root"))},16:function(e){e.exports=JSON.parse('{"labels":["16-09-2021","17-09-2021","20-09-2021","21-09-2021","22-09-2021","23-09-2021","24-09-2021","27-09-2021","28-09-2021","29-09-2021","30-09-2021","01-10-2021","04-10-2021","05-10-2021","06-10-2021","07-10-2021","08-10-2021","11-10-2021","12-10-2021","13-10-2021","14-10-2021","15-10-2021","18-10-2021","19-10-2021","20-10-2021","21-10-2021","22-10-2021","25-10-2021","26-10-2021"],"data":[0.00630938222142996,0.009841225477893456,0.013656599882576392,0.006840626556237517,0.018939342343391896,0.02200289044419179,0.0022710374619212548,-0.0021407028550242124,-0.009363660083839709,0.002034812475914194,-0.009142093809631602,0.0023155826876521957,-0.0010236382876783745,-0.011576049204793937,0.005554594716150385,-0.007540978841683699,-0.006864433342352871,-0.013722887975353482,-0.0016159504356972887,-0.0003787398127030883,-0.007181809954102114,-0.005125654674900004,-0.002997772992837655,-0.006633963145049271,-0.01037941115924379,0.0009251160305456807,0.003991465821145512,0.0007849513146696019,-0.00246514087850902]}')},2:function(e){e.exports=JSON.parse('{"last_update":"27-10-2021","value":76664.12225284189,"invested":74689.23000000001,"gain":1974.892252841877,"gain_pct":0.03,"cagr":0.019311582772195024,"index_spx":99.7534859121491,"labels":["16/09/2021","17/09/2021","20/09/2021","21/09/2021","22/09/2021","23/09/2021","24/09/2021","27/09/2021","28/09/2021","29/09/2021","30/09/2021","01/10/2021","04/10/2021","05/10/2021","06/10/2021","07/10/2021","08/10/2021","11/10/2021","12/10/2021","13/10/2021","14/10/2021","15/10/2021","18/10/2021","19/10/2021","20/10/2021","21/10/2021","22/10/2021","25/10/2021","26/10/2021"],"sp500":[1.001046360757286,0.9997907278485427,0.9820304979282055,0.9870530295631791,0.9916849198487659,1.002650780585125,0.9799421994888576,0.9821919624346718,0.9650119544848185,0.9681212807139418,0.9656793391970492,0.959343857594888,0.9482601563765465,0.9658828343234568,0.9604980309649108,0.9834348519890546,0.9782262539563691,0.9804778874809154,0.9714577893253532,0.9647435809238446,0.9824582398579261,0.9906916226856345,0.9929975124396881,0.997609291947795,1.0015699967018163,1.0009189219477308,1.003034914898509,1.009857635759032,1.0046785586663554],"portfolio":[1.007362344868675,1.0096298938320074,0.9954416955108983,0.9938050907296238,1.0104667800425609,1.0247119958641229,0.9821676849344144,0.980089381296506,0.9559759105661808,0.9700912259741364,0.9568510080880867,0.9615652976230403,0.9472894809737996,0.9547017271072626,0.9658332082525815,0.9760187905780308,0.9715112850423461,0.9670228992687036,0.9698879616874314,0.964378194120699,0.9754024114914248,0.9856136795384316,0.9900207313149415,0.9909911886718547,0.9911742899012858,1.0018448880877011,1.0070384944787418,1.0106503248378502,1.0022018844816254]}')},45:function(e){e.exports=JSON.parse('[{"ticker":"M","name":"Macy\'s Inc","value":4483.083726,"ttl_perc":0.07594788579699739,"expiry":"2021-11-09"},{"ticker":"MCHP","name":"Microchip Technology","value":783.43848,"ttl_perc":0.01327222506752113,"expiry":"2021-11-09"},{"ticker":"TMO","name":"Thermo Fisher Scientific Inc","value":523.455075,"ttl_perc":0.00886784826823435,"expiry":"2021-11-09"},{"ticker":"SIVB","name":"SVB Financial Group","value":1285.076826,"ttl_perc":0.021770476303037464,"expiry":"2021-11-09"},{"ticker":"MAR","name":"Marriott International Inc","value":4266.260064,"ttl_perc":0.07227467786109396,"expiry":"2021-11-09"},{"ticker":"AON","name":"Aon PLC","value":4411.371888,"ttl_perc":0.07473301611898309,"expiry":"2021-11-09"},{"ticker":"ORLY","name":"O\'Reilly Automotive","value":569.612142,"ttl_perc":0.009649794773696596,"expiry":"2021-11-09"},{"ticker":"SBUX","name":"Starbucks","value":4841.186427,"ttl_perc":0.08201450081054538,"expiry":"2021-11-08"},{"ticker":"DXCM","name":"DexCom Inc","value":979.022484,"ttl_perc":0.016585612125934387,"expiry":"2021-11-09"},{"ticker":"HIG","name":"Hartford Financial Services Group Inc","value":4513.03974,"ttl_perc":0.07645537039225728,"expiry":"2021-11-09"},{"ticker":"CRL","name":"Charles River Laboratories International Inc","value":730.072332,"ttl_perc":0.012368149578093238,"expiry":"2021-11-09"},{"ticker":"HD","name":"Home Depot","value":959.298714,"ttl_perc":0.016251471895012845,"expiry":"2021-11-09"},{"ticker":"ETSY","name":"ETSY Inc","value":870.154164,"ttl_perc":0.014741274781459155,"expiry":"2021-11-09"},{"ticker":"LYV","name":"Live Nation Entertainment Inc","value":952.356636,"ttl_perc":0.01613386620674963,"expiry":"2021-11-09"},{"ticker":"JBHT","name":"J.B. Hunt Transport Services","value":4427.926074,"ttl_perc":0.07501346045253383,"expiry":"2021-11-09"},{"ticker":"MAA","name":"Mid-America Apartment Communities Inc","value":5027.511456,"ttl_perc":0.0851710316470195,"expiry":"2021-11-09"},{"ticker":"INTU","name":"Intuit Inc","value":518.984928,"ttl_perc":0.008792119543409775,"expiry":"2021-11-09"},{"ticker":"NTAP","name":"NetApp Inc","value":882.05733,"ttl_perc":0.014942926222128835,"expiry":"2021-11-09"},{"ticker":"PKI","name":"PerkinElmer Inc","value":763.068735,"ttl_perc":0.012927141379254995,"expiry":"2021-11-09"},{"ticker":"ACN","name":"Accenture Plc","value":921.005316,"ttl_perc":0.015602743743625434,"expiry":"2021-11-09"},{"ticker":"NOW","name":"ServiceNow Inc","value":593.306505,"ttl_perc":0.010051200789096229,"expiry":"2021-11-09"},{"ticker":"ISRG","name":"Intuitive Surgical","value":887.802201,"ttl_perc":0.015040250036113407,"expiry":"2021-11-09"},{"ticker":"PAYC","name":"Paycom Software Inc","value":928.360818,"ttl_perc":0.01572735324458919,"expiry":"2021-11-09"},{"ticker":"ROP","name":"Roper Technologies Inc","value":5042.945952,"ttl_perc":0.08543250732117295,"expiry":"2021-11-09"},{"ticker":"MSCI","name":"MSCI Inc","value":561.593439,"ttl_perc":0.009513949989859062,"expiry":"2021-11-09"},{"ticker":"CNC","name":"Centene Corp","value":1112.308659,"ttl_perc":0.018843612158035195,"expiry":"2021-11-09"},{"ticker":"DHR","name":"Danaher Corp","value":790.93179,"ttl_perc":0.013399169172718396,"expiry":"2021-11-09"},{"ticker":"IT","name":"Gartner Inc","value":835.090641,"ttl_perc":0.014147263916794703,"expiry":"2021-11-09"},{"ticker":"BKNG","name":"Booking Holdings Inc","value":4156.599348,"ttl_perc":0.07041691654227603,"expiry":"2021-11-09"},{"ticker":"RMD","name":"Resmed Inc","value":692.433522,"ttl_perc":0.011730510796815015,"expiry":"2021-11-09"},{"ticker":"WST","name":"West Pharmaceutical Services Inc","value":719.064918,"ttl_perc":0.012181673064941393,"expiry":"2021-11-09"}]')},48:function(e,a,t){e.exports=t(154)},5:function(e){e.exports=JSON.parse('[{"id":1,"subtitle":"Daily returns","labels":["17-09-2021","20-09-2021","21-09-2021","22-09-2021","23-09-2021","24-09-2021","27-09-2021","28-09-2021","29-09-2021","30-09-2021","01-10-2021","04-10-2021","05-10-2021","06-10-2021","07-10-2021","08-10-2021","11-10-2021","12-10-2021","13-10-2021","14-10-2021","15-10-2021","18-10-2021","19-10-2021","20-10-2021","21-10-2021","22-10-2021","25-10-2021","26-10-2021"],"dataPortfolio":[0.0022509764980622737,-0.01405287066853611,-0.0016440990855166593,0.01676555037638683,0.0140976587285353,-0.04151831060963773,-0.002116037485032085,-0.024603338420447818,0.014765346335553264,-0.013648425561992195,0.004926879414981711,-0.01484643495821869,0.007824689582579758,0.01165964282797205,0.01054590196155858,-0.004618256922097941,-0.004620003743391332,0.0029627658464908,-0.005680828904347179,0.011431425386777327,0.010468774658239255,0.004471378459939501,0.0009802394295563843,0.0001847657492055621,0.010765612360141175,0.00518404241294701,0.0035865861919985864,-0.008359409925070116],"dataSP500":[-0.001254320437060752,-0.017763947419832116,0.0051144354941823345,0.004692645832450104,0.011057807290274502,-0.022648544773500423,0.002295811882565779,-0.017491497188866445,0.003222059804205424,-0.002522350830974185,-0.006560647354668436,-0.011553418652336833,0.01858422272454141,-0.005575006788807513,0.02388013331073835,-0.005296332565548956,0.002301751272202779,-0.009199695649166562,-0.006911477240994057,0.01836203866432351,0.008380389612182348,0.002327555519044955,0.004644301169270948,0.003970196334366793,-0.0006500541711808028,0.0021140503035554925,0.006802077135284579,-0.005128521990908186]},{"id":2,"subtitle":"Weekly returns","labels":["23-09-2021","24-09-2021","27-09-2021","28-09-2021","29-09-2021","30-09-2021","01-10-2021","04-10-2021","05-10-2021","06-10-2021","07-10-2021","08-10-2021","11-10-2021","12-10-2021","13-10-2021","14-10-2021","15-10-2021","18-10-2021","19-10-2021","20-10-2021","21-10-2021","22-10-2021","25-10-2021","26-10-2021"],"dataPortfolio":[0.017222850430953507,-0.027200273154909582,-0.01542261519044863,-0.03806498931864977,-0.03995732948956898,-0.06622444945500039,-0.02097644590368486,-0.033466233742189155,-0.001332861471544322,-0.004389296189416858,0.020032149548803613,0.010343538232808536,0.02083145510559059,0.015906784442700106,-0.0015064859226727734,-0.0006315237908902649,0.014515934825678256,0.02378209664282993,0.021758417279154063,0.0277858789673473,0.02710930000249312,0.02173753812989232,0.02083753690239254,0.011312608969606952],"dataSP500":[0.0016027427806892813,-0.019852682973363178,0.00016441903465014285,-0.022330183301412787,-0.023761215546584724,-0.03687369730715229,-0.02101995597772377,-0.034547020700530506,0.0009024549743565924,-0.00787427143777808,0.018386551385441097,0.019682615583551,0.03397562460862846,0.005771875018155015,0.004420154776026752,-0.0009930623560403529,0.012742827826231373,0.01276890087846727,0.026919854789165143,0.03817223198594033,0.018790296972290843,0.012459267778416772,0.01697901868648244,0.007086207772541764]},{"id":3,"subtitle":"Monthly returns","labels":["18-10-2021","19-10-2021","20-10-2021","21-10-2021","22-10-2021","25-10-2021","26-10-2021"],"dataPortfolio":[-0.017214871731178638,-0.018460928379814834,-0.004286946818540027,0.008089913639076629,-0.003392774143128774,-0.013722559200075257,0.02039794207701795],"dataSP500":[-0.008040435121814848,-0.002181892510087491,0.019897038650870114,0.014047768427080332,0.01144516249321792,0.007187801888212109,0.02524267164981797]},{"id":4,"subtitle":"Annual returns","labels":[],"dataPortfolio":[],"dataSP500":[]}]')},53:function(e,a,t){}},[[48,1,2]]]);
//# sourceMappingURL=main.b61012be.chunk.js.map