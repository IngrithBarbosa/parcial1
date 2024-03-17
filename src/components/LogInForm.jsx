import React, { useState } from 'react';
import { Form, Button, Card, FormLabel } from 'react-bootstrap';
import {FormattedMessage} from "react-intl";

function LogInForm ({ onLogin }){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'pass') {
      onLogin();
    } else {
      setError('Error de autenticación. Revise sus credenciales');
    }
  };

  return (
    <div className="loginContainer">
      <Card className="logInForm">
        <Form onSubmit={handleSubmit}>
          <FormLabel>
            <h1 className= "inicio"><FormattedMessage id="Login"/></h1>
          </FormLabel>
          <div>
            <label className="texto" htmlFor="user"><FormattedMessage id="Username"/></label>
            <br></br>
            <input className={`logInBox ${error && 'errorBorder'}`}
              type="user"
              id="user"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="texto" htmlFor="password"><FormattedMessage id="Password"/></label>
            <br></br>
            <input className={`logInBox ${error && 'errorBorder'}`}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button className="loginButton" type="submit">
            <label className="textButton"><FormattedMessage id="LoginButton"/></label>
          </Button>
          <Button className="cancelButton">
            <label className="textButton"><FormattedMessage id="Cancel"/></label>
          </Button>
        </Form>
        {error && <p className="error">{error}</p>}
      </Card>
    </div>
  );
}

export default LogInForm;

