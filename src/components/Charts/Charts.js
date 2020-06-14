import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import ApexCharts from "react-apexcharts";
import Request from "../../config/Request";
export default function Cards() {
  const [data, setData] = useState({});
  useEffect(() => {
    Request.get("http://34.229.190.77:80/event/date").then((response) => {
      if (response.ok) {
        console.log(response);
        setData(response.data);
      }
    });
  }, []);

  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <Grid item xs={8}>
      <ApexCharts options={options} series={series} type="area" height={200} />
      <ApexCharts options={options} series={series} type="area" height={200} />
      <ApexCharts options={options} series={series} type="area" height={200} />
    </Grid>
  );
}
