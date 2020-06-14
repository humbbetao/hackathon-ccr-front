import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "../../components/Card";
import Health from "../../assets/health.jpg";
import Info from "../../assets/Info.jpg";
import LifeStyle from "../../assets/lifeStyle.jpg";
import Form from "../Form";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100px",
  },
});

export default function Cards() {
  const classes = useStyles();
  const [openHealth, setOpenHealth] = useState(false);
  const handleOnClickAdd = useCallback(() => setOpenHealth(true), []);

  return (
    <React.Fragment>
      <Grid container classes={{ root: classes.root }}>
        <Card
          title="Saúde"
          imageTitle="saude"
          image={Health}
          handleOnClickAdd={handleOnClickAdd}
          link="/categoria/health"
        ></Card>
        <Card
          title="Bem Estar"
          imageTitle="Bem Estar"
          image={LifeStyle}
          handleOnClickAdd={() => {}}
          link="/categoria/lifestyle"
        ></Card>
        <Card
          title="Informativos"
          imageTitle="Informativos"
          image={Info}
          handleOnClickAdd={() => {}}
          link="/categoria/info"
        ></Card>
      </Grid>
      {openHealth && <Form></Form>}
    </React.Fragment>
  );
}
