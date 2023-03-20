import { useEffect, useState } from 'react';
import CanvasJSReact from './canvasjs.react';
import { APIUser } from '../services/HttpUser';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function Chart() {
  var dataChart = [];
  var setData;
  [dataChart, setData] = useState([]);
  const [options, setOptions] = useState({});

  useEffect(() => {
    const getData = async () => {
      const { getDataForChart } = APIUser();
      var newData = getDataForChart();
      console.log(newData);
      setOptions({
        animationEnabled: true,
        exportEnabled: true,
        colorSet: "greenShades",
        backgroundColor: "transparent",
        theme: "theme2",
        axisX: {
          labelFontSize: 10,
          lineColor: "transparent",
          tickColor: "transparent",
          labelFontColor: "white",
          labelFontFamily: "tahoma",
          reversed: true,
          interval: 1
        },
        axisY: {
          interval: 0.5,
          includeZero: true,
          title: "ממוצע התנהגות",
          titleFontFamily: "tahoma",
          titleFontSize: 20,
          labelFontSize: 15,
          tickColor: "#343435",
          gridColor: "#343435",
          titleFontColor: "white"
        },
        title: {
          text: ""
        },
        // toolTip:{
        //   enabled: false   
        // },
        data: [{
          type: "bar",//column
          indexLabelFontSize: 12,
          indexLabelPlacement: "inside",
          indexLabelFontColor: "black",
          indexLabelFontFamily: "tahoma",
          // indexLabelTextAlign: "left",
          indexLabel: "{y}",
          dataPoints: newData,
        }]
      });
      setData(newData);

    };
    getData();
  }, [])



  var colorSet = [
    "#005248",
    "#007265",
    "#009382",
    "#00e9cd",
    "#74ffef",

    // "#343495",
    // "#2F4F4F",
    // "#008080",
    // "#2E8B57",
    // "#3CB371",
    // "#90EE90"
  ];
  CanvasJS.addColorSet("greenShades", colorSet);



  return (<>
    {dataChart && options && <div>
      <CanvasJSChart options={options} containerProps={{ width: "70vw", height: "85vh", background: "black !important" }} />
    </div>}</>
  );
}