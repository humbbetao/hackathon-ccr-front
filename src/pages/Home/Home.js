import React, { useCallback, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Add from "@material-ui/icons/Add";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Card from "../../components/Card";
import Health from "../../assets/health.jpg";
import Info from "../../assets/Info.jpg";
import LifeStyle from "../../assets/lifeStyle.jpg";
import Form from "../../components/Form";
const Container = styled.div`
  margin-top: 120px;
`;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBarTop: {
    bottom: "auto",
    top: 0,
  },

  title: {
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-around",
    },
  },
  titleHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Home({}) {
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

  const classes = useStyles();
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const [openHealth, setOpenHealth] = useState(false);
  const handleOnClickAdd = useCallback(() => setOpenHealth(true), []);
  if (matches) {
    return (
      <React.Fragment>
        <div className={classes.grow}>
          <AppBar position="fixed" classes={{ root: classes.appBarTop }}>
            <Toolbar>
              <Typography className={classes.title} variant="h6" noWrap>
                CCR
              </Typography>

              <div className={classes.grow} />

              <div className={classes.sectionDesktop}>
                <MenuItem onClick={() => {}}>
                  <IconButton aria-label="show 4 new mails" color="inherit">
                    <Add />
                  </IconButton>
                  <p>Add</p>
                </MenuItem>
                <MenuItem onClick={() => {}} data-test="logout-button">
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <p>Sair</p>
                </MenuItem>
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <Container>
          <Grid container classes={{ root: classes.root }}>
            <Grid item xs={12} lg={6}>
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
          </Grid>
        </Container>
        {openHealth && <Form></Form>}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <div className={classes.grow}>
        <AppBar position="fixed" classes={{ root: classes.appBarTop }}>
          <div className={classes.grow}>
            <Toolbar classes={{ root: classes.titleHeader }}>
              <Typography className={classes.title} variant="h6">
                CCR
              </Typography>
              <MenuItem onClick={() => {}} data-test="logout-button">
                <IconButton
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <p>Sair</p>
              </MenuItem>
            </Toolbar>
          </div>
        </AppBar>
      </div>
      <Container>
        <Grid container classes={{ root: classes.root }}>
          <Grid item xs={12} lg={6}>
            <Card
              title="Saúde"
              imageTitle="saude"
              image={Health}
              handleOnClickAdd={() => {}}
              handleOnClickSee={() => {}}
            ></Card>
            <Card
              title="Bem Estar"
              imageTitle="Bem Estar"
              image={LifeStyle}
              handleOnClickAdd={() => {}}
              handleOnClickSee={() => {}}
            ></Card>
            <Card
              title="Informativos"
              imageTitle="Informativos"
              image={Info}
              handleOnClickAdd={() => {}}
              handleOnClickSee={() => {}}
            ></Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
