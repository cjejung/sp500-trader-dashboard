import React, { Component } from 'react'
import {Line, Bar} from 'react-chartjs-2';

import returnsData from  '../assets/data/returns.json';
import indexData from  '../assets/data/index.json';
import performanceData from  '../assets/data/performance.json';
import cashData from  '../assets/data/cash.json';


const indexColours = indexData.data.map((value) => value > 0 ? 'rgb(0, 204, 212)' : 'rgb(185, 153, 15)');

const datasetKeyProvider=()=>{ 
     return btoa(Math.random()).substring(0,12)
 } 

export class Dashboard extends Component { 
 
  state = {
        labels: returnsData[0].labels,
        datasets: [{
          label: 'Portfolio',
          data: returnsData[0].dataPortfolio,
          borderWidth: 2,
          fill: false,
          borderColor: ['rgb(0, 204, 212)'],
          pointHitRadius: 20
        },
        {
          label: 'S&P 500',
          data: returnsData[0].dataSP500,
          borderColor: ['rgb(185, 153, 15)'],
          backgroundColor: ['rgb(163, 134, 13)'],
          borderWidth: 1,
          fill: false,
          pointHitRadius: 20
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
          borderColor: ['rgb(0, 204, 212)']
        },
        {
          label: 'S&P 500',
          data: returnsData[x].dataSP500,
          borderColor: ['rgb(185, 153, 15)'],
          backgroundColor: ['rgb(163, 134, 13)'],
          borderWidth: 1,
          fill: false
        }],
        subtitle: returnsData[x].subtitle    
       };
    this.setState(ChartData);
  }

  returnsChartOptions = {
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          lineWidth: 100,
          borderColor: ['rgb(148, 151, 193)'],
        }
      }],
      yAxes: [{
        ticks: {
          callback: function(value, index, values) {
            return Math.round(value * 1000) / 10 + "%"
          },
        fontColor: 'rgb(148, 151, 193)'
        },
        gridLines: {
          drawBorder: true,
          borderDash: [1,3],
          
          zeroLineColor: 'rgba(148, 151, 193,.3)'
        }
      }]
    },
    legend: {
      display: true,
      position: 'top'
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = parseFloat((currentValue*100).toFixed(1));
          return percentage + '%';
        },
        title: function(tooltipItem, data) {
          return data.labels[tooltipItem[0].index];
        }
      },
      
    },
    maintainAspectRatio: false
  };


  indexChartData = {
    labels: indexData.labels,
    datasets: [{
      label: 'Portfolio',
      data: indexData.data,
      borderWidth: 1,
      fill: false,
      borderColor: indexColours,
      backgroundColor: indexColours,
    }]
  };
  indexChartOptions = {
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          lineWidth: 100,
          borderColor: ['rgb(148, 151, 193)'],
        }
      }],
      yAxes: [{
        ticks: {
          callback: function(value, index, values) {
            return Math.round((value +1) *100)
          },
        fontColor: 'rgb(148, 151, 193)'
        },
        gridLines: {
          drawBorder: true,
          borderDash: [1,3],
          
          zeroLineColor: 'rgba(148, 151, 193,.3)'
        }
      }]
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var currentValue = dataset.data[tooltipItem.index];
          var index = parseFloat(((currentValue +1)*100 ).toFixed(1));
          return index;
        },
        title: function(tooltipItem, data) {
          return data.labels[tooltipItem[0].index];
        }
      },
      
    },
    maintainAspectRatio: false
  };


  PerformanceChartData = {
    labels: performanceData.labels,
    datasets: [{
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
      borderWidth: 2,
      fill: true,
      backgroundColor: ['rgba(0, 204, 212, .2)'],
      borderColor: ['rgb(0, 204, 212)'],
      pointHitRadius: 20

    }]
  };

  PerformanceChartOptions = {
    scales: {
      yAxes: [{
        display: true,
        gridLines: {
          drawBorder: false,
          display: false,
          drawTicks: false
        },
        ticks: {
          display: false
        }
      }],
      xAxes: [{
        display: false,
        position: 'bottom',
        gridLines: {
          drawBorder: false,
          display: false,
          drawTicks: false,
        },
        ticks: {
          beginAtZero: false,
          stepSize: 10,
          fontColor: "#a7afb7",
          padding: 10,
        }
      }],
    },
    legend: {
      display: false,
      position: 'top'
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
    tooltips: {
      
    },
    maintainAspectRatio: false
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
      fill: false,
      borderColor: 'rgb(0, 204, 212)',
      borderDash: [1,3],
      pointHitRadius: 20
    }],
    
  };

  feesChartOptions = {
    scales: {
      yAxes: [{
        display: false,
        gridLines: {
          drawBorder: false,
          display: false,
          drawTicks: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          min: 0,
          
        }
      }],
      xAxes: [{
        display: false,
        position: 'bottom',
        gridLines: {
          drawBorder: false,
          display: false,
          drawTicks: false,
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          fontColor: "#a7afb7",
          padding: 10,
        }
      }],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      },
      line: {
        tension: 0
      }
    },
    tooltips: {
      
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
      yAxes: [{
        display: false,
        ticks: {
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false
        }
      }],
      xAxes: [{
        display: false,
        
        ticks: {
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false
        }
      }],
      barThickness: 8,
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };


  
  render() {
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
                          <h2>{(performanceData.gain_pct<0?"":"+") + Math.round(performanceData.gain_pct * 100) + "%"}</h2>
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
                            <p className="card-text">since 21 Sep 2021</p>
                      </div>{/* card-header */}
                      <div className="card-body row row-sm">
                        <div className="col-6 d-sm-flex align-items-center">
                          <div>
                            <label className="sp500_titles">Annual Return</label>
                            <h4>{(performanceData.cagr<0?"":"+") + Math.round(performanceData.cagr * 1000)/10 + "%"}</h4>
                          </div>
                        </div>{/* col */}
                        <div className="col-6 d-sm-flex align-items-center">
                          <div>
                            <label className="sp500_titles">Index vs SPX</label>
                            <h4>{Math.round(performanceData.index_spx)}</h4>
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
                            <label className="sp500_titles">&#36; Dollar</label>
                            <h4>{cashData.cash_usd.toLocaleString('en-UK',{minimumFractionDigits: 0, maximumFractionDigits: 0})}</h4>
                          </div>
                        </div>{/* col */}
                        <div className="col-6 d-sm-flex align-items-center">
                          <div>
                            <label className="sp500_titles">&euro; Euro </label>
                            <h4>{cashData.cash_eur.toLocaleString('en-UK',{minimumFractionDigits: 0, maximumFractionDigits: 0})}</h4>
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
                        <div className="chart-wrapper">
                          <Bar data={this.tradesChartData} options={this.tradesChartOptions} />
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
                        <div className="chart-wrapper">
                          <Line data={this.feesChartData} options={this.feesChartOptions} datasetKeyProvider={datasetKeyProvider}  />
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

          </div>{/* az-content-body */}
        </div>
      </div>
    )
  }
}

export default Dashboard
