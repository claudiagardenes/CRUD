import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Navigation from "./Navigation";


export default function Contactanos() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlin 0" onClick={handleClickOpen}>
        Contacto
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contacto</DialogTitle>
        <DialogContent>
          <DialogContentText>Nombre y Apellido</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="Fullname"
            name="Fullname"
            label="Fullname"
            type="Fullname"
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogContent>
          <DialogContentText>Correo electronico</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="email"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <MultilineTextFields />
        <DialogActions>
          <Button onClick={handleClose}>Enviar</Button>

          <DialogContentText></DialogContentText>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

function MultilineTextFields() {
  return (
    <>
      <Navigation />
    </>
  );
}