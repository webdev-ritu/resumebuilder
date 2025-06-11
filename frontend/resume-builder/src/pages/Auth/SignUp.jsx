import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../../components/Inputs/Input";
import { validateEmail } from '../../utils/helper';
import ProfilePhotoSelector from '../../components/Inputs/profilePhotoSelector';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { UserContext } from '../../context/userContext';
import uploadImage from '../../utils/uploadImage'; 


const SignUp = ({setCurrentPage}) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

 // handle from submit 

 const handleSignUp = async (e) => {
  e.preventDefault();

  let profileImageUrl = "";

  if (!fullName){
    setError("Please enter your full name");
    return;
  }

  if (!validateEmail(email)){
    setError("Please enter a valid email");
    return;
  }
  if (!password){
    setError("Please enter a password");
    return;
  }
  setError("");

  //signup api call
  try{

    if (profilePic) {
      const imageUploadRes = await uploadImage(profilePic);
      profileImageUrl = imageUploadRes.imageUrl || "";
    }
    const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER,{
      name: fullName,
      email,
      password,
      profileImageUrl,
    });

    const { token } = response.data;
    if (token) {
      localStorage.setItem("token", token);
      updateUser(response.data);
      navigate("/dashboard");
    }
  } catch (error){
     if (error.response && error.response.data.message){
          setError(error.response.data.message);
       }else {
        setError("An error occurred while logging in. Please try again later.");
       }
  }
  };

  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black flex justify-center underline">
        Create an account
      </h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6 flex justify-center">
        Join us to build your resume
          </p>

      <form onSubmit={handleSignUp}>

        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />


        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
          <Input
            type="text"
            placeholder="Full Name"
            value={fullName}
            label="Full Name"
            onChange={({target}) => setFullName(target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            label="Email"
            onChange={({target}) => setEmail(target.value)}
          />
          <Input
            type="password"
            placeholder="Min 8 characters"
            value={password}
            label="Password"
            onChange={({target}) => setPassword(target.value)}
          />

        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button type="submit" className="bg-teal-600 text-sm font-semibold text-black py-3.5  w-full rounded-lg hover:bg-green-200 hover:text-white transition-colors cursor-pointer">
          Sign Up
        </button>

        <p className="text-[13px] text-slate-800 mt-3">
          Already have an account?{" "}
          <button
            className="font-semibold text-teal-600 hover:text-teal-700"
            onClick={() => {
              setCurrentPage("login");
             
            }}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  )
 
}

export default SignUp;