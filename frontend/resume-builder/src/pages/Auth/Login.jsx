import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../../components/Inputs/Input";
import { validateEmail } from '../../utils/helper';
import { UserContext } from '../../context/userContext';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';

const Login = ({setCurrentPage}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const { updateUser } = useContext(UserContext);
    const navigate = useNavigate();

    //login form submit 

    const handleLogin = async (e) => {
      e.preventDefault();
      if (!validateEmail(email)) {
        setError("Please enter a valid email address");
        return;
      }
      if (password.length < 8) {
        setError("Password must be at least 8 characters long");
        return;
      }
      setError("");

      //login api call

      try {
        const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
          email,
          password
        }); 
        const {token}= response.data;
        if (token) {
          localStorage.setItem('Token', token);
          updateUser(response.data);
          navigate("/dashboard");
        }
        
      }catch(error){
       if (error.response && error.response.data.message){
          setError(error.response.data.message);
       }else {
        setError("An error occurred while logging in. Please try again later.");
       }
      }
    };

    return (
    <div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center'>
    <h3 className="text-lg font-bold underline text-black flex justify-center">Welcome🎉</h3>
    <p className="text-xs text-slate-700 mt-[5px] mb-6 ">
      Please enter your details
    </p>
    
    <form onSubmit={handleLogin}>
     
     <Input
        value={email}
        onChange={({target}) => setEmail(target.value)}
        label="Email Address"
        placeholder="Enter your email"
        type="email" 
        />

        <Input
        value={password}
        onChange={({target}) => setPassword(target.value)}
        label="Password"
        placeholder="min 6 characters"
        type="password" 
        />


      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button className="bg-teal-600 text-sm font-semibold text-black py-3.5  w-full rounded-lg hover:bg-green-200 hover:text-white transition-colors cursor-pointer"
      type='submit'>Login</button>

      <p className="text-[13px] text-slate-800 mt-3">Don't have an account?{""}
        <button className='font-semibold text-teal-600 hover:text-teal-700'
        onClick={() => {setCurrentPage("signup");

        }}>
          Sign Up
        </button>
      </p>
    </form>
    </div>
)
}
export default Login;