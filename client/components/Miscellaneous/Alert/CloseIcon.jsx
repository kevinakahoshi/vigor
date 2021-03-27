import React from 'react';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const CloseIconButton = ({ handleClose }) => (
  <IconButton
    size="small"
    aria-label="close"
    color="inherit"
    onClick={handleClose}
  >
    <CloseIcon />
  </IconButton>
);

export default CloseIconButton;
