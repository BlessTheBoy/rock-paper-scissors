import React, { useState } from "react";
import "./scss/Rules.scss";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Rules() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="rules">
      <button className="rules__button" onClick={handleOpen}>
        RULES
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        <div style={modalStyle} className={`${classes.paper} modal`}>
          <div className="modal__head">
            <h1>RULES</h1>
            <img src="images/icon-close.svg" alt="" onClick={handleClose} />
          </div>
          <div className="modal__image">
            <img src="images/image-rules.svg" alt="" />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Rules;
