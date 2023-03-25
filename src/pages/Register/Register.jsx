import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
// import { registerUser } from '../../redux/actions/userActions';
export default function Register() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const isLoggedIn = false;
  if (isLoggedIn) {
    return <Navigate to={'/'} replace />;
  }
  return (
    <div className="d-flex h-100 flex-column justify-center align-center">
      <TextField
        required
        id="outlined-required"
        label="email"
        placeholder="email"
        sx={{
          margin: '10px 0'
        }}
        value={email}
        onChange={(e) => setEmail(e?.target?.value)}
      />
      <TextField
        value={password}
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        placeholder="password"
        sx={{
          margin: '10px 0'
        }}
        onChange={(e) => setPassword(e?.target?.value)}
      />
      <Button
        variant="outlined"
        className="my-3"
        onClick={() => console.log("test")}>
        Register
      </Button>
      <p className="my-3">Already have an account??</p>
      <Link to={'/login'} className="my-3">
        <Button variant="outlined">Go to login</Button>
      </Link>
    </div>
  );
}