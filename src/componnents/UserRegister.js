import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch  } from 'react-redux';
import useInput from '../Hooks/userInputs.js';
import { sendUserRegister } from '../state/User.js';


export const UserRegister = () => {

  const dispatch = useDispatch();
  const inputFirstName = useInput();
  const inputLastName = useInput();
  const inputEmail = useInput();
  const inputPsw = useInput();


 const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      firstName: inputFirstName.value,
      lastName: inputLastName.value,
      email: inputEmail.value,
      psw: inputPsw.value,
    };

    dispatch(sendUserRegister(form));
 }


  return (
    <div>
      <div >
        <div className="color-overlay d-flex justify-content-center align-items-center">
          <div className="containerForm">
            <Form onSubmit={handleSubmit}  className="rounded p-4 p-sm-3 ">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
            	{...inputFirstName}
                  type="text"
                  placeholder="Enter Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
            	{...inputLastName}
                  type="text"
                  placeholder="Enter Last Name "
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Adress</Form.Label>
                <Form.Control
           	{...inputEmail}
                  type="email"
                  placeholder="Enter Email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                {...inputPsw}
                  type="password"
                  placeholder="Enter Password"
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" size="lg" type="submit">
                  Submit
                </Button>
              </div>
              <br />
              <p>Already have an account?</p>

            </Form>
          </div>
        </div>
      </div>
    </div>
  );
              };