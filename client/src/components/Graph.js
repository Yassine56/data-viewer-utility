import React, { Component } from "react";
import Chart from "react-apexcharts";
import axios from 'axios';
class Graph extends Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
    this.tweakChart.bind(this);
    console.log(this.props.metric);

}

state = {
  chartOptions :{
  options: {
    chart: {
      id: ""
    },
    xaxis: {
      categories: []
    }
  },
  series: [
    {
      name: "",
      data: []
    }
  ]
},
type: "bar",
tweak : false

}


  async fetchState(props){
    const metric = this.props.metric;
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
      return el[metric];
    });
    this.setState({
      chartOptions :{
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
          name: metric,
          data: series
        }
      ]
    }})
    }


  render() {
    const type = this.state.type;
    console.log(this.state);
    let mixedCh;
    if(this.state.tweak){
      mixedCh = this.renderTweakChart();
    }
    // the this.state.type property updates well, but when passed as prop to the chart component, the chart component
    // doesn't update.
    // had to force rerendering this component using a tweak. in line 128
    else {
      mixedCh = <div className="row">
        <div className="mixed-chart">
          <Chart
            options={this.state.chartOptions.options}
            series={this.state.chartOptions.series}
            type={this.state.type}
            width={this.props.width || "800"}
          />

        </div>
      </div>
    }
    return (
      <div>
        <h1>Graph Type :{this.state.type}</h1>
          {mixedCh}
        <div className="row">
          <li key="1" className="waves-effect waves-light btn" onClick={()=>this.handleClick("line")}>Line</li>
          <li className="waves-effect waves-light btn" onClick={()=>this.handleClick("bar")}>Bar</li>
          <li className="waves-effect waves-light btn" onClick={()=>this.handleClick("histogram")}>Histogram</li>
          <li className="waves-effect waves-light btn" onClick={()=>this.handleClick("scatter")}>scatter</li>
          <li className="waves-effect waves-light btn" onClick={()=>this.handleClick("heatmap")}>heatmap</li>
        </div>

      </div>
    );
  }

  tweakChart(){
    const tweak = !this.state.tweak;
    this.setState({
      tweak : tweak
    })



  }
  renderTweakChart(){
    return(<h1>hello</h1>)
  }

  async handleClick(type){
  this.setState({
    type : type
  })

  await this.tweakChart();
  //don't delete this line
  //there should be a better way to solve this, will dig into it 
  await this.tweakChart();

  }

   componentDidMount() {
    this.fetchState.bind(this);
    this.fetchState();

}
}
export default Graph;
