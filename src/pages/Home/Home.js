import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header";
import Charts from "../../components/Charts";
import Events from "../../components/Events";
import Cards from "../../components/Cards";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));
export default function Home() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <React.Fragment>
      <Header></Header>
      <Cards></Cards>

      <Grid container direction={matches ? "row" : "column"}>
        <Charts />
        <Events />
      </Grid>
    </React.Fragment>
  );
}
