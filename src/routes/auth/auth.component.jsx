import './auth.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const Auth = () => {
  return(
    <div className='authentication-container'>
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  )
}

export default Auth;
