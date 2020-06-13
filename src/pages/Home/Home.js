import React from "react";
import Chart from "react-apexcharts";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Add from "@material-ui/icons/Add";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import styled from "styled-components";

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
          <Chart options={options} series={series} type="area" height={350} />
        </Container>
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
        <Chart options={options} series={series} type="area" height={350} />
      </Container>
    </React.Fragment>
  );
}
