import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, Navigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

const LogIn = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const [age, setAge] = React.useState('');
  // const dispatch = useDispatch();
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <Navigate to={'/'} replace />;
  }

  return (
    <div className="d-flex h-100 flex-column justify-center align-center">
      <TextField
        required
        id="outlined-required"
        label="Email"
        placeholder="email"
        sx={{
          margin: '10px 0'
        }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        placeholder="password"
        sx={{
          margin: '10px 0'
        }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="outlined"
        className="my-3"
        onClick={() => console.log('test')}>
        Log in
      </Button>
      <p className="my-3">Don't have an account?</p>
      <Link to={'/register'} className="my-3">
        <Button variant="outlined">Go to register</Button>
      </Link>
    </div>
  );
}
export default LogIn;
