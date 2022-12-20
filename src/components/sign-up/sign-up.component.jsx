import './sign-up.scss';
import { useState , useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
// import { UserContext } from '../../contexts/user.context';
// import { useContext } from 'react';
import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
    signInAuthUserWithEmailAndPassword,
    createAuthUserWithEmailAndPassword
  } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUp = () => {

  // const {setCurrentUser} = useContext(UserContext);

  const [formFields, setFormFields] = useState(defaultFormFields);

  const {displayName, email, password, confirmPassword} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name] : value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert(`Your confirm password is't match`);
      return;
    }
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user , {displayName});
      resetFormFields();
      alert('Success create account')
    } catch(error){
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  }

  return(
    <div className='sign-up-container'>
      <h2>Don't have an account ?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
      <FormInput
        label='Display name'
        type='text'
        required
        onChange={handleChange}
        name='displayName'
        value={displayName}
      />
      <FormInput
        label='Email'
        type='email'
        required
        onChange={handleChange}
        name='email'
        value={email}
      />

      <FormInput
        label='Password'
        type='password'
        required
        onChange={handleChange}
        name='password'
        value={password}
      />
      <FormInput
        label='Confirm password'
        type='password'
        required
        onChange={handleChange}
        name='confirmPassword'
        value={confirmPassword}
      />
      <div className='buttons-container'>
        <Button type='submit'>Sign up</Button>
      </div>
      </form>
    </div>
  )
}

export default SignUp;
