import React, { useState, useCallback, useMemo } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useTheme } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import { KeyboardDatePicker } from "@material-ui/pickers";
import InputAdornment from "@material-ui/core/InputAdornment";
import Transition from "../../components/Transition";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import { DateTimePicker } from "@material-ui/pickers";
// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

const useStyles = makeStyles((theme) => {
  return {
    form: {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      width: "calc(100% - 16px)",
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 120,
    },
    actions: {
      flexDirection: "column",
      display: "flex",
      justifyContent: "center",
      "& > *": {
        margin: theme.spacing(1, 0),
      },

      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        margin: theme.spacing(3),
        "& > *": {
          width: "200px",
          margin: theme.spacing(1),
        },
      },
    },
    dialog: {
      [theme.breakpoints.down("md")]: {
        marginTop: "32px",
        boxSizing: "border-box",
        height: "calc(100% - 32px)",
        borderRadius: "16px 16px 0 0",
      },
      borderRadius: "16px 16px",
      marginTop: "0",
    },
  };
});

export default function Form({ open = true, handleOnClose, purchase = {} }) {
  const classes = useStyles();
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const actionButtonsInFullWidth = useMemo(() => !matches, [matches]);
  const [age, setAge] = useState("");
  const [selectedDate, handleDateChange] = useState(new Date());
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [code, setCode] = useState(purchase.code || "");
  const [value, setValue] = useState(purchase.value || "");
  const hasDate = Boolean(purchase.date);
  const [date, setDate] = useState(
    hasDate
      ? new Date(
          purchase.date.substring(6, 10),
          parseInt(purchase.date.substring(3, 5)),
          purchase.date.substring(0, 2)
        )
      : new Date()
  );
  const handleOnSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const isFormValidated = true;
      if (!isFormValidated) {
        console.log("ops deu erro");
      }

      handleOnClose();
    },
    [code, date, value, handleOnClose, purchase.code]
  );

  const handleOnChangeCode = useCallback((event) => {
    const code = event.target.value;
    setCode(code);
  }, []);
  const handleOnChangeValue = useCallback((event) => {
    const value = event.target.value;
    setValue(value);
  }, []);
  const handleOnChangeDate = useCallback((date) => {
    setDate(date);
  }, []);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      fullScreen={fullScreen}
      onClose={handleOnClose}
      classes={{ paper: classes.dialog }}
    >
      <DialogTitle id="max-width-dialog-title">Novo Evento</DialogTitle>
      <DialogContent>
        <form className={classes.form} noValidate onSubmit={handleOnSubmit}>
          <FormControl className={classes.formControl}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Nome"
              label="Nome"
              name="Nome"
              autoComplete="Nome"
              autoFocus
              type="text"
              value={code}
              onChange={handleOnChangeCode}
              data-test="code-purchase"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Descrição"
              label="Descrição"
              name="Descrição"
              autoComplete="Descrição"
              autoFocus
              type="text"
              value={code}
              onChange={handleOnChangeCode}
              data-test="code-purchase"
            />
            <DateTimePicker
              label="DateTimePicker"
              inputVariant="outlined"
              value={selectedDate}
              onChange={handleDateChange}
            />

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={10}>Novo</MenuItem>
                <MenuItem value={20}>Velho</MenuItem>
              </Select>
            </FormControl>
          </FormControl>
        </form>
      </DialogContent>

      <DialogActions>
        <Grid
          container
          direction="column"
          justify="flex-end"
          alignItems="center"
          className={classes.actions}
        >
          <Button
            variant="outlined"
            fullWidth={actionButtonsInFullWidth}
            color="primary"
            size="large"
            type="button"
            onClick={handleOnClose}
            data-test="cancel-button"
          >
            Cancelar
          </Button>
          <Button
            fullWidth={actionButtonsInFullWidth}
            variant="contained"
            color="primary"
            size="large"
            onClick={handleOnSubmit}
            data-test="add-button"
          >
            Adicionar
          </Button>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
