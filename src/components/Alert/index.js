import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = ({
  children, severity, alertState, setAlertState,
}) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={alertState}
      autoHideDuration={3000}
      onClose={() => setAlertState(false)}
    >
      <MuiAlert
        onClose={() => setAlertState(false)}
        variant="filled"
        severity={severity}
      >
        {children}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
