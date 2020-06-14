import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Grid from "@material-ui/core/Grid";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Card from "../../components/Card";
import Health from "../../assets/health.jpg";
import Info from "../../assets/Info.jpg";
import LifeStyle from "../../assets/lifeStyle.jpg";
// import Form from "../Form";
import Request from "../../config/Request";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    marginTop: "100px",
  },
}));

export default function ListEvents() {
  let { type } = useParams();
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    Request.get(`http://34.229.190.77:80/event/${type}`).then((response) => {
      if (response.ok) {
        setData(response.data);
      }
    });
  }, []);

  const getImage = () => {
    if (type === "health") return Health;
    if (type === "lifestyle") return LifeStyle;
    if (type === "info") return Info;
  };

  const getText = () => {
    if (type === "health") return "Saúde";
    if (type === "lifestyle") return "Bem estar";
    if (type === "info") return "Informativos";
  };
  return (
    <React.Fragment>
      <Header></Header>
      <Grid container classes={{ root: classes.card }}>
        <Card
          title={getText()}
          imageTitle={getText()}
          image={getImage()}
          link={`/events/${type}`}
        ></Card>
        <List className={classes.root}>
          {data.map((item) => {
            return (
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.name} secondary={item.date} />
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </React.Fragment>
  );
}
