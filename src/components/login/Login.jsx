import React from 'react';
import { ReactComponent as LogoIcon } from '../../public/icons/gennodes.svg'; 
import Typography from '../shared/components/typography/Typography'
import CheckBox from '../shared/components/checkbox/CheckBox';
import './Login.scss';
import Button from '../shared/components/button/Button';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className='header'>
          <LogoIcon className="logo" />
          <h2 className='header-text'>GenNodes</h2>
        </div>

        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter Username" required />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter Password" required />
          </div>

          <div className="form-options">
            <CheckBox  >
              <Typography type={'btn-list-text'}>Remember Me</Typography>
            </CheckBox>
            <Typography type={'action-text'}>Forgot Password?</Typography>
          </div>

          <Button type="primary" style={{width:"100%"}}>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
