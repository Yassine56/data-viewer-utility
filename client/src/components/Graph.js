import React, { Component } from "react";
import Chart from "react-apexcharts";
import axios from 'axios';
class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: []
        }
      },
      series: [
        {
          name: "Bill",
          data: []
        }
      ]
    };

  }
  async fetchState(){
    const data = await axios.get('/api/data');
        console.log(data);
    data.data.sort((a,b)=>{
      return (a.year - b.year)* 12 + a.month - b.month;
    })
    const categories = data.data.map((el)=>{
      console.log(el);
      return el.month + "/" + el.year

    })
    const series = data.data.map((el)=>{
      return el.bill;
    });
    this.setState({
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: categories
        }
      },
      series: [
        {
          name: "Bill",
          data: series
        }
      ]
    })
    }


  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }

  async componentWillMount() {
    this.fetchState.bind(this);
    this.fetchState();

}
}
export default Graph;
