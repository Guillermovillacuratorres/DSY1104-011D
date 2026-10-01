import Alert from 'react-bootstrap/Alert';
function App_alert({mostrarAlert,cerrarAlert, variant="primary", msgAlert}) {
  return (
        <Alert  
        dismissible
        variant={variant}
        show={mostrarAlert}
        onClose={cerrarAlert}
        >
          {msgAlert}
        </Alert>
  );
}
export default App_alert;