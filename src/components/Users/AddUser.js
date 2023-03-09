import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
import Wrapper from '../Helpers/Wrapper';




const AddUser = (props) => {

  const inputUser = useRef()
  const inputAge = useRef()
  const collegeName =useRef()

  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = inputUser.current.value;
    const enteredAge =  inputAge.current.value;
    const enterCollege = collegeName.current.value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
if(enterCollege.trim().length===0) {
  setError({
    title: "Form is not valid"
    message: "Please enter a college name"
  })
}

    props.onAddUser(enteredUsername, enteredAge,enterCollege);
    inputUser.current.value='';
    inputAge.current.value='';
    collegeName.current.value= '';
    // setEnteredUsername('');
    // setEnteredAge('');
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={inputUser}
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={inputAge}
            // value={enteredAge}
            // onChange={ageChangeHandler}
          />
           <label htmlFor="name">College Name</label>
          <input
            id="name"
            type="college"
            ref={collegeName}
            // value={enteredAge}
            // onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
