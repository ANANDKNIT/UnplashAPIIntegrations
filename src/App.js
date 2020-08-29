import React from "react";
import useStyles from "./components/style";
import Header from "./components/header";
import ContentDiv from "./components/contentDiv"
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Header />
        <ContentDiv/>
    </div>
  );
}
export default App;
