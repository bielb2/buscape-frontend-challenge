import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Dialogs = ({
  dialogState, setDialogState, handleFunction, product,
}) => {
  const handleDialog = () => {
    handleFunction(product);
    setDialogState(false);
  };

  return (
    <Dialog
      open={dialogState}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Remover produto</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Ter certeza que deseja remover o produto
          {' '}
          <strong>{product.name}</strong>
          ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="secondary" onClick={() => setDialogState(false)}>
          Não
        </Button>
        <Button variant="contained" color="primary" onClick={handleDialog} autoFocus>
          Sim
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Dialogs;
