import React, { useState } from 'react';
import Input from './ui/input';
import Button from './ui/button';
import { HiMiniUserCircle } from "react-icons/hi2";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        
        <div className='flex items-center justify-center mb-4'>
        <HiMiniUserCircle  size={100}/>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              E-mail 
            </label>
            <Input
                placeholder={"Enter email address"}
                onChange={(e) => setEmail(e.target.value)}
                id={"email"}
                type={"email"}
                value={email}
                required
                name="email"
             />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            value={password}
            placeholder={"Enter you password"}
            required
            />
          </div>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                // className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <a href="#forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
              Forgot Password?
            </a>
          </div>
          <Button> Login</Button>
          <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center">
            <p className="ml-2 block text-sm text-gray-900">Don't have account?</p>

          </div>
          <a href="/register" className="text-sm text-blue-600 hover:text-blue-500">Create one!</a>
          </div>
        </form>


        
      </div>
    </div>
  );
};

export default Login;