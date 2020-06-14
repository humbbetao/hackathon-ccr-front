import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header";
import Charts from "../../components/Charts";
import Events from "../../components/Events";
import Cards from "../../components/Cards";
import Request from "../../config/Request";
export default function Home() {
  const [data, setData] = useState({});
  // useEffect(
  //   () =>
  //     Request.get("").then((response) => {
  //       if (response.ok) {
  //         setData(response.data);
  //       }
  //     }),
  //   []
  // );
  console.log(data);
  return (
    <React.Fragment>
      <Header></Header>
      <Cards></Cards>
      <Grid container direction="row">
        <Charts />
        <Events />
      </Grid>
    </React.Fragment>
  );
}
