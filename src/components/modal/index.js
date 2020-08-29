import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

export default function MaxWidthDialog(props) {
  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth="lg"
        fullScreen={true}
        open={props.open}
        onClose={props.clicked}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogContent>
          <DialogContentText>{props.data?.description || ""}</DialogContentText>
          <img
            src={props.data?.urls?.full || ""}
            alt={props.data?.alt_description || ""}
            width="100%"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="primary" href={props.data?.urls.full}
          rel="nofollow" download={props.data?.urls.full} target="_blank"
          >
            Download
          </Button>
          <Button onClick={props.clicked} variant="outlined" color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
