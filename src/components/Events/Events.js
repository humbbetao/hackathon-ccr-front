import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Item from "../Item";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "90%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <Grid item xs={4}>
      <List className={classes.root}>
        <Item />
        <Divider variant="inset" component="li" />
        <Item />
        <Divider variant="inset" component="li" />
        <Item />
        <Divider variant="inset" component="li" />
        <Item />
        <Divider variant="inset" component="li" />
        <Item />
        <Divider variant="inset" component="li" />
        <Item />
        <Divider variant="inset" component="li" />
        <Item />
      </List>
    </Grid>
  );
}
