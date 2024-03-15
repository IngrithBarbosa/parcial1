import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {

 const [formValues, setFormValues] = useState({email:"", password:""})
 const [validationStates, setValidationStates] = useState({userState: true, passwordState: true});

const handleUserChange = ((e) => {
  if (!validationStates.userState) {
    validateUser();
  }
  setFormValues({...formValues, user: e.target.value})
});

const handlePasswordChange = ((e) => {
  if (!validationStates.passwordState) {
    validatePassword();
  }
  setFormValues({...formValues, password: e.target.value})
});

const validatePassword = () => {
  if (formValues.password !== "pass") {
    setValidationStates({...validationStates, passwordState: false});
    return false;
  } else {
    setValidationStates({...validationStates, passwordState: true});
    return true;
  }
}


const validateUser = () => {
    if (formValues.user !== "admin") {
        setValidationStates({...validationStates, userState: false});
        return false;
      } else {
        setValidationStates({...validationStates, userState: true});
        return true;
      }
}

const clickSubmit = (() => {
  const userValid = validateUser();
  const passwordValid = validatePassword();
  if (userValid && passwordValid) {
    alert(JSON.stringify(formValues));
  }
})


    


return (


  <div>
    <h1>Inicio de sesión</h1>
  
    <Form>
    <Form.Group className="logInBox" controlId="formBasicUser">
      <Form.Label>Nombre de usuario</Form.Label>
      <Form.Control type="user" placeholder="Enter email" onChange={handleUserChange} value={formValues.user} isInvalid = {!validationStates.userState} onBlur={validateUser}/>
      { !validationStates.userState && <Form.Text className="text-muted">Your email should follow an established format</Form.Text>}
    </Form.Group>

    <Form.Group className="logInBox" controlId="formBasicPassword"> 
      <Form.Label>Contraseña</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} isInvalid={!validationStates.passwordState} onBlur={validatePassword}/>
      { !validationStates.passwordState && <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 9 char long</Form.Text>}
    </Form.Group>
    <Button variant="primary" onClick={clickSubmit} >
      Ingresar
    </Button>
    <Button variant="primary" onClick={clickSubmit} >
      Cancelar
    </Button>
  </Form>
  </div>
 );
}

export default App;
