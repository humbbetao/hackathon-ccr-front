import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import Health from "../../assets/health.jpg";
import Info from "../../assets/Info.jpg";
import LifeStyle from "../../assets/lifeStyle.jpg";
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
    Request.get(`http://34.229.190.77:80/event/type/${type}`).then(
      (response) => {
        if (response.ok) {
          setData(response.data);
        }
      }
    );
  }, [type]);

  const getImage = () => {
    if (type === "eventos-saude") return Health;
    if (type === "eventos-bem-estar") return LifeStyle;
    if (type === "eventos-informativo") return Info;
  };

  const getText = () => {
    if (type === "eventos-saude") return "Saúde";
    if (type === "eventos-bem-estar") return "Bem estar";
    if (type === "eventos-informativo") return "Informativos";
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
