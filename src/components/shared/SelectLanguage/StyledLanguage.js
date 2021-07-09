import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: "0 35px  0 0",
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: 0,
  },
  selectRoot: {
    padding: 0,
    display: "flex",
    justifyContent: "center",
    margin: 0,
    fontSize: "14px",
    color: " #4F535E",
    "&:focus": {
      backgroundColor: "#fff",
    },
  },
  selectValue: {
    display: "flex",
    justifyContent: "center",
  },
}));
