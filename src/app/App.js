import React, { Component } from 'react'
import {Line, Bar} from 'react-chartjs-2'



import returnsData from  '../assets/data/returns.json';
import indexData from  '../assets/data/index.json';
import performanceData from  '../assets/data/performance.json';
import cashData from  '../assets/data/cash.json';
import portfolioData from  '../assets/data/portfolio.json';
import tobuyData from  '../assets/data/to_buy.json';

const indexColours = indexData.data.map((value) => value > 0 ? 'rgb(0, 204, 212)' : 'rgb(185, 153, 15)');

const datasetKeyProvider=()=>{ 
     return btoa(Math.random()).substring(0,12)
 } 

const horz_ln_upper = [0.007,0.023,0.075,.7]
const horz_ln_median = [NaN,0.006,0.03,0.5]
const horz_ln_lower = [-0.004,-0.007,-0.005,0.3]

export class Dashboard extends Component { 
  
  state = {
        labels: returnsData[0].labels,
        datasets: [{
          label: 'Portfolio',
          data: returnsData[0].dataPortfolio,
          borderWidth: 2,
          fill: false,
          borderColor: ['rgb(0, 204, 212)'],
          backgroundColor: ['rgb(0, 204, 212)'],
          pointHitRadius: 20
        },
        {
          label: 'S&P 500',
          data: returnsData[0].dataSP500,
          borderColor: ['rgb(185, 153, 15)'],
          backgroundColor: ['rgb(185, 153, 15)'],
          borderWidth: 1,
          fill: false,
          pointHitRadius: 20
        },
        {
          label: 'Upper quartile',
          data: Array(returnsData[0].dataSP500.length).fill(horz_ln_upper[0]),
          fill: true, 
          borderWidth: 1,
          borderColor: ['rgba(148, 151, 193,.3)'],
          backgroundColor: ['rgba(0, 0, 0, 0.3)'],
          pointHitRadius: 0
        },
        {
          label: 'Median Return',
          data: Array(returnsData[0].dataSP500.length).fill(horz_ln_median[0]),
          fill: false, 
          borderWidth: 1,
          borderColor: ['rgba(148, 151, 193,.5)'],
          borderDash: [2,3],
          pointHitRadius: 0
        },
        {
          label: 'Lower quartile',
          data: Array(returnsData[0].dataSP500.length).fill(horz_ln_lower[0]),
          fill: true, 
          borderWidth: 1,
          borderColor: ['rgba(148, 151, 193,.3)'],
          backgroundColor: ['rgba(0, 0, 0, 0.3)'],
          pointHitRadius: 0
        },
        {
          label: 'Zero Line',
          data: Array(returnsData[0].dataSP500.length).fill(0),
          fill: true, 
          borderWidth: 2,
          borderColor: ['rgba(252, 252, 252,.6)'],
          backgroundColor: ['rgba(0, 0, 0, 0.3)'],
          pointHitRadius: 0
        }],
        subtitle: returnsData[0].subtitle    
       };

  
  periodChange = (x) => {
    console.log(x);
    var ChartData = {
        labels: returnsData[x].labels,
        datasets: [{
          label: 'Portfolio',
          data: returnsData[x].dataPortfolio,
          borderWidth: 2,
          fill: false,
          borderColor: ['rgb(0, 204, 212)'],
          backgroundColor: ['rgb(0, 204, 212)'],
          pointHitRadius: 20
        },
        {
          label: 'S&P 500',
          data: returnsData[x].dataSP500,
          borderColor: ['rgb(185, 153, 15)'],
          backgroundColor: ['rgb(185, 153, 15)'],
          borderWidth: 1,
          fill: false,
          pointHitRadius: 20

        },
        {
          label: 'Upper quartile',
          data: Array(returnsData[0].dataSP500.length).fill(horz_ln_upper[x]),
          fill: true, 
          borderWidth: 1,
          borderColor: ['rgba(148, 151, 193,.3)'],
          backgroundColor: ['rgba(0, 0, 0, 0.3)'],
          pointHitRadius: 0
        },
        {
          label: 'Median Return',
          data: Array(returnsData[0].dataSP500.length).fill(horz_ln_median[x]),
          fill: false, 
          borderWidth: 1,
          borderColor: ['rgba(148, 151, 193,.5)'],
          borderDash: [2,3],
          pointHitRadius: 0
        },
        {
          label: 'Lower quartile',
          data: Array(returnsData[0].dataSP500.length).fill(horz_ln_lower[x]),
          fill: true, 
          borderWidth: 1,
          borderColor: ['rgba(148, 151, 193,.3)'],
          backgroundColor: ['rgba(0, 0, 0, 0.3)'],
          pointHitRadius: 0
        },
        {
          label: 'Zero Line',
          data: Array(returnsData[0].dataSP500.length).fill(0),
          fill: true, 
          borderWidth: 2,
          borderColor: ['rgba(252, 252, 252,.6)'],
          backgroundColor: ['rgba(0, 0, 0, 0.1)'],
          pointHitRadius: 0
        }],
        subtitle: returnsData[x].subtitle    
       };
    this.setState(ChartData);
  }

  returnsChartOptions = {
   responsive: true,
   maintainAspectRatio: false,
   scales: {
      x: {
          grid: {
              display: false
          },
          ticks: {
              color: 'rgba(148, 151, 193)'
          }
      },
      y: {
          grid: {
              display: false
          },
          ticks: {
              callback: function(value, index, values) {
                return Math.round(value * 1000) / 10 + "%"
              },
              color: 'rgba(148, 151, 193)'
          },
      }
    },
    plugins: {
        
        legend: {
          display: true,
          position: 'top',
          labels: {
                filter: function(item, chart) {
                    // Logic to remove a particular legend item goes here
                    return !item.text.includes('Median Return') & !item.text.includes('Upper quartile') & !item.text.includes('Lower quartile')& !item.text.includes('Zero Line');
                }
            }
        },
        tooltip: {
            callbacks: {
                label: function(context) {
                    var label = context.dataset.label || '';
                    if (label) { label += ': '; }
                    if (context.parsed.y !== null) { label += Math.round(context.parsed.y * 10000)/100 + "%";}
                    return label;    
                }
            },
        },     
    },
    elements: {
      point: {
        radius: 0
      }
    },
  };


  indexChartData = {
    labels: indexData.labels,
    datasets: [{
      label: 'Portfolio',
      data: indexData.data,
      borderWidth: 1,
      fill: false,
      borderColor: 'rgba(0, 0, 0, 0)',
      backgroundColor: indexColours,
      barPercentage: 1.2
    }]
  };

  indexChartOptions = {
   scales: {
      x: {
          grid: {
              display: false
          },
          ticks: {
              color: 'rgba(148, 151, 193)'
          }
      },
      y: {
          grid: {
              display: false
          },
          ticks: {
              callback: function(value, index, values) {
                return Math.round((value + 1) * 1000)/10
              },
              color: 'rgba(148, 151, 193)'
          },
      }
    },
    plugins: {
        legend: {
          display: false
        },
        tooltip: {
            callbacks: {
                label: function(context) {
                    var label = Math.round((context.parsed.y + 1)*10000 )/100;
                    return label;    
                }
            },
        },     
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };


  PerformanceChartData = {
    labels: performanceData.labels,
    datasets: [{
      label: 'Portfolio',
      data: performanceData.portfolio,
      borderWidth: 2,
      fill: false,
      backgroundColor: ['rgba(0, 204, 212, .2)'],
      borderColor: ['rgb(0, 204, 212)'],
      pointHitRadius: 20
    },{
      label: 'S&P500',
      data: performanceData.sp500,
      fill: true,
      backgroundColor: ['rgba(20, 22, 49, 1)'],
      borderColor: ['rgb(163, 134, 13)'],
      borderWidth: 1,
      pointHitRadius: 20
    },{
      label: 'Portfolio',
      data: performanceData.portfolio,
      borderWidth: 0,
      fill: true,
      backgroundColor: ['rgba(0, 204, 212, .2)'],
      borderColor: ['rgb(0, 204, 212)'],
      pointHitRadius: 0
    }]
  };

  PerformanceChartOptions = {
    scales: {
      y: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false
        }
      },
      x: {
        display: false,
        grid: {
          display: false,
        },
        ticks:  {
          stepSize: 10
        }
      },
    },
    plugins: {
        legend: { display: false},
        tooltip: {
            callbacks: {
                label: function(context) {
                    var label = context.dataset.label || '';
                    if (label) { label += ': '; }
                    if (context.parsed.y !== null) { label += Math.round(context.parsed.y * 1000)/1000}
                    return label;    
                }
            },
        },     
    },
    elements: {
      point: {
        radius: 0
      }
    },
  };

  feesChartData = {
    labels: cashData.fees_labels,
    datasets: [{
      data: cashData.fees_data.slice(0, cashData.fees_data.length - 1).concat([undefined]),
      borderWidth: 2,
      fill: true,
      backgroundColor: 'rgba(0, 204, 212, .2)',
      borderColor: 'rgb(0, 204, 212)',
      pointHitRadius: 20
    },
    {
      data: Array(cashData.fees_data.length - 2 ).fill(undefined).concat( cashData.fees_data.slice(cashData.fees_data.length - 2, cashData.fees_data.length)),
      borderWidth: 2,
      fill: true,
      backgroundColor: 'rgba(0, 204, 212, .2)',
      borderColor: 'rgb(0, 204, 212)',
      borderDash: [1,3],
      pointHitRadius: 20
    }],
    
  };

  feesChartOptions = {
    scales: {
      y: {
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          min: 0,          
        }
      },
      x: {
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          fontColor: "#a7afb7",
          padding: 10,
        }
      },
    },
    plugins: {
        legend: {
            display: false
        }
    },
    elements: {
      point: {
        radius: 0
      }
    },

  };

  tradesChartData = {
    labels: cashData.trades_labels,
    datasets: [{
      data: cashData.trades_data,
      borderWidth: 2,
      fill: true,
      backgroundColor: Array(cashData.trades_labels.length - 1 ).fill('rgb(0, 204, 212)').concat(['rgba(0, 204, 212,0)']) ,
      borderColor: Array(cashData.trades_labels.length - 1 ).fill('rgb(0, 204, 212)').concat(['rgba(0, 204, 212,0.5)'])
    }]
  };

  tradesChartOptions = {
    scales: {
      y: {
        display: false,
        ticks: {
          display: false,
          min: 0,
        },
        grid: {
          drawBorder: false,
          display: false
        }
      },
      x: {
        display: false,
        
        ticks: {
          display: false,
          
        },
        grid: {
          drawBorder: false,
          display: false
        }
      },
      barThickness: 8,
    },
    plugins: {
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          }
        }
    }
  };
  
  

  render() {
    console.log(tobuyData)
    return (
      <div>
        <div className="container p-md-0">
          <div className="az-content-body">
            <div className="az-dashboard-one-title">
              <div>
                <h2 className="az-dashboard-title">Portfolio Performance</h2> 
              </div>
              <div className="az-content-header-right">
                <div className="media">
                  <div className="media-body">
                    <label className="sp500_lastupdate">Last update</label>
                    <p>{performanceData.last_update}</p>
                  </div>{/* media-body */}
                </div>{/* media */}
              </div>
            </div>{/* az-dashboard-one-title */}


            <div className="row row-sm mg-b-20">
              <div className="col-lg-7 ht-lg-100p">
                <div>
                  <div className="card card-dashboard-one sp500_card">
                    <div className="card-header">
                      <h6 className="card-title">Portfolio Value</h6>
                    </div>{/* card-header */}
                    <div className="card-body">
                      <div className="card-body-top">
                        <div>
                          <label className="mg-b-0 sp500_titles">Value</label>
                          <h2>{performanceData.value.toLocaleString('en-UK',{minimumFractionDigits: 0, maximumFractionDigits: 0})}</h2>
                        </div>
                        <div>
                          <label className="mg-b-0 sp500_titles">Invested</label>
                          <h2>{performanceData.invested.toLocaleString('en-UK',{minimumFractionDigits: 0, maximumFractionDigits: 0})}</h2>
                        </div>
                        <div>
                          <label className="mg-b-0 sp500_titles">Gain</label>
                          <h2>{(performanceData.gain<0?"":"+") + performanceData.gain.toLocaleString('en-UK',{minimumFractionDigits: 0, maximumFractionDigits: 0})}</h2>
                        </div>
                        <div>
                          <label className="mg-b-0 sp500_titles">Gain vs. Invested</label>
                          <h2>{(performanceData.gain_pct<0?"":"+") + (Math.round(performanceData.gain_pct * 1000)/10).toLocaleString('en-UK', { minimumFractionDigits: 1}) + "%"}</h2>
                        </div>
                      </div>{/* card-body-top */}
                      <div className="performance-chart-wrapper" style={{height:'263px'}}>
                        <Line data={this.PerformanceChartData} options={this.PerformanceChartOptions} />
                      </div>{/* flot-chart-wrapper */}
                    </div>{/* card-body */}
                  </div>{/* card */}
                </div>{/* row */}
              </div>{/* col */}
              <div className="col-lg-5 mg-t-20 mg-lg-t-0">
                <div className="row row-sm">
                  <div className="col-sm-6">

                    <div className="card card-dashboard-five sp500_card">
                      <div className="card-header">
                            <h6 className="card-title " > <i className="fa fa-line-chart"/> Performance</h6>
                            <p className="card-text">since 13 Oct 2021</p>
                      </div>{/* card-header */}
                      <div className="card-body row row-sm">
                        <div className="col-6 d-sm-flex align-items-center">
                          <div>
                            <label className="sp500_titles">Annual Return</label>
                            <h4>{(performanceData.cagr<0?"":"+") + (Math.round(performanceData.cagr * 1000)/10).toLocaleString('en-UK', { minimumFractionDigits: 1}) + "%"}</h4>
                          </div>
                        </div>{/* col */}
                        <div className="col-6 d-sm-flex align-items-center">
                          <div>
                            <label className="sp500_titles">Index vs SPX</label>
                            <h4>{Math.round(performanceData.index_spx*10)/10}</h4>
                          </div>
                        </div>{/* col */}
                      </div>{/* card-body */}
                    </div>{/* card-dashboard-five */}
                  </div>{/* col */}

                  <div className="col-sm-6">
                    <div className="card card-dashboard-five sp500_card">
                      <div className="card-header">
                        <h6 className="card-title"><i className="fa fa-money"/> Cash</h6>
                        <p className="card-text">&ensp;</p>
                      </div>{/* card-header */}
                      <div className="card-body row row-sm">
                        <div className="col-6 d-sm-flex align-items-center">
                          <div>
                            <label className="sp500_titles">Dollar</label>
                            <h4><small>&#36;</small>{cashData.cash_usd.toLocaleString('en-UK',{minimumFractionDigits: 2, maximumFractionDigits: 2})}</h4>
                          </div>
                        </div>{/* col */}
                        <div className="col-6 d-sm-flex align-items-center">
                          <div>
                            <label className="sp500_titles">Euro </label>
                            <h4><small>&euro;</small>{cashData.cash_eur.toLocaleString('en-UK',{minimumFractionDigits: 2, maximumFractionDigits: 2})}</h4>
                          </div>
                        </div>{/* col */}
                      </div>{/* card-body */}
                    </div>{/* card-dashboard-five */}
                  </div>{/* col */}

                </div>{/* row */}
                <div className="row row-sm">
                  <div className="col-sm-6 mg-t-20 mg-sm-t-20 ">
                    <div className="card card-dashboard-two sp500_card">
                      <div className="card-header">
                        <h6>{cashData.monthly_trades}</h6>
                        <p>trades opened last month</p>
                      </div>{/* card-header */}
                      <div className="card-body">
                        <div className="chart-wrapper" style={{top:'20px',height:'100px',width:'200px'}}>
                          <Bar data={this.tradesChartData} options={this.tradesChartOptions} top={"200%"}/>
                        </div>{/* chart-wrapper */}
                      </div>{/* card-body */}
                    </div>{/* card */}
                  </div>{/* col */}
                  <div className="col-sm-6 mg-t-20 mg-sm-t-20" >
                    <div className="card card-dashboard-two sp500_card">
                      <div className="card-header">
                        <h6>{cashData.monthly_fees.toLocaleString('en-UK',{minimumFractionDigits: 2, maximumFractionDigits: 2})} <small>&euro;</small></h6>
                        <p>last month EUR fees</p>
                      </div>{/* card-header */}
                      <div className="card-body">
                        <div className="chart-wrapper" style={{top:'20px',height:'100px',width:'200px'}}>
                          <Line data={this.feesChartData} options={this.feesChartOptions} datasetKeyProvider={datasetKeyProvider} height={"100%"}/>
                        </div>{/* chart-wrapper */}
                      </div>{/* card-body */}
                    </div>{/* card */}
                  </div>{/* col */}
                </div>{/* row */}
                
              </div>{/*col */}
            </div>{/* row */}

            <div className="row row-sm mg-b-20">
              <div className="col-lg-6 mg-t-20 mg-lg-t-0">
                
                 <div className="card card-dashboard-one sp500_card">
                    <div className="card-header">
                      <div>
                        <h6 className="card-title sp500_title">Rate of return</h6>
                        <p className="card-text sp500_returnsTitle">{this.state.subtitle}</p>
                      </div>
                      <div className="btn-group">
                        <button className="btn" id="btnDay" onClick={() => {this.periodChange(0)}}>Day</button>
                        <button className="btn" id="btnWeek" onClick={() => {this.periodChange(1)}}>Week</button>
                        <button className="btn" id="btnMonth" onClick={() => {this.periodChange(2)}}>Month</button>
                        <button className="btn" id="btnYear"  onClick={() => {this.periodChange(3)}}>Year</button>
                      </div>
                    </div>{/* card-header */}
                    <div className="card-body">
                      <div className="returns-chart-wrapper" style={{height:'300px'}}>
                        <Line data={this.state} options={this.returnsChartOptions} datasetKeyProvider={datasetKeyProvider} />
                      </div>{/* flot-chart-wrapper */}
                    </div>{/* card-body */}
                  </div>{/* card */}
              </div>{/* col */}
              <div className="col-lg-6 mg-t-20 mg-lg-t-0">
                
                 <div className="card card-dashboard-one sp500_card">
                    <div className="card-header">
                      <div>
                        <h6 className="card-title sp500_title">Index vs S&P500</h6>
                      </div>
                    </div>{/* card-header */}
                    <div className="card-body">
                      <div className="returns-chart-wrapper" style={{height:'300px'}}>
                        <Bar data={this.indexChartData} options={this.indexChartOptions} />
                      </div>{/* flot-chart-wrapper */}
                    </div>{/* card-body */}
                  </div>{/* card */}
              </div>{/* col */}
            </div>{/* row */}
            <div className="row row-sm mg-b-20">
              <div className="col-lg-12 mg-t-20 mg-lg-t-0">
                <div className="card card-dashboard-one sp500_card">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="wd-45p">Stock</th>
                            <td align="right">Position</td>
                            <td align="right">Return</td>
                            <td align= "center">Sell / Buy</td>
                          </tr>
                        </thead>
                        <tbody>

                          {
                            portfolioData.map((row, i) => {
                              return (
                                <tr>
                                  <td><strong>{row.name}</strong></td>
                                  <td align= "right">€{row.value.toLocaleString('en-UK',{minimumFractionDigits: 0, maximumFractionDigits: 0})} </td>
                                  <td  align= "right"><strong>{(row.return_ttl<0?"":"+") + row.return_ttl.toLocaleString('en-UK',{minimumFractionDigits: 0, maximumFractionDigits: 0})}</strong> ({(row.return_pct<0?"":"+") + Math.round(row.return_pct * 1000)/10 }%)</td>
                                  <td  align= "center"><small>{row.buy_sell}</small></td>
                                </tr>
                               );
                             })
                           }
                           
                        </tbody>
                      </table>
                    </div>{/* table */}
                  </div>{/* card-body */}
                </div>{/* card */}
              </div>{/* col */}
            </div>{/* row */}
            <div className="row row-sm mg-b-20">{/* row */}
              <div  className="col-lg-12 mg-t-20 mg-lg-t-0">{/* col */}
                <div className="card card-dashboard-one sp500_card">{/* card */}
                  <div className="card-header">{/* card header */}
                    <h6 className="card-title sp500_title">Today's buys</h6>
                  </div>{/* card header*/}
                  <div className="card-body">
                      {tobuyData.map(stock =>
                        <div> {stock} </div>
                       )}
                  </div>{/* card body*/}
                </div>{/* card */}
              </div>{/* col */}
            </div>{/* row */}

          </div>{/* az-content-body */}
        </div>
      </div>
    )
  }
}

export default Dashboard
