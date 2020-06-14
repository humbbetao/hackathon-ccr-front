import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header";
import Charts from "../../components/Charts";
import Events from "../../components/Events";
import Cards from "../../components/Cards";

export default function Home() {
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
