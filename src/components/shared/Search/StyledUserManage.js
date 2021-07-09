import { makeStyles } from "@material-ui/core/styles";

export const SearchBar = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: "4px",
    marginLeft: 0,
  },
  searchIcon: {
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    zIndex: "10",
    top: "14px",
    left: "20px",
  },

  inputInput: {
    backgroundColor: "#F1F2F5",
    padding: "14px 14px 14px 48px",
    transition: theme.transitions.create("width"),
    width: "442px",
  },
  inputSearch: {
    border: "2px solid #F1F2F5",
    padding: "12px 12px 12px 48px",
    transition: theme.transitions.create("width"),
    width: "264px",
  },
}));
