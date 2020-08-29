import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  imagesWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  image: {
    margin: theme.spacing(1),
    width: "250px",
    height: "250px",
    cursor: "pointer",
  },
  loadButtonWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  loadButton: {
    height: "auto",
    backgroundColor: "#57bd84",
    padding: "1rem",
    margin: "1rem",
    borderRadius: "2rem",
    width: "auto",
    cursor:"pointer",
    color: "#fff",
    border: "none",
    outline: "none",

  },
}));

export default useStyles;
