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
  const [open, setOpen] = useState(null);
  const handleOnClickAdd = useCallback((type) => () => setOpen(type), []);
  const handleOnClose = useCallback(() => setOpen(null), []);

  return (
    <React.Fragment>
      <Grid container classes={{ root: classes.root }}>
        <Card
          title="Saúde"
          imageTitle="saude"
          image={Health}
          handleOnClickAdd={handleOnClickAdd("eventos-saude")}
          link="/events/health"
        ></Card>
        <Card
          title="Bem Estar"
          imageTitle="Bem Estar"
          image={LifeStyle}
          handleOnClickAdd={handleOnClickAdd("eventos-bem-estar")}
          link="/events/lifestyle"
        ></Card>
        <Card
          title="Informativos"
          imageTitle="Informativos"
          image={Info}
          handleOnClickAdd={handleOnClickAdd("eventos-informativo")}
          link="/events/info"
        ></Card>
      </Grid>

      {open && <Form handleOnClose={handleOnClose} type={open}></Form>}
    </React.Fragment>
  );
}
