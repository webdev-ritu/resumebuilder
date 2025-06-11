import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'; 
import Input from '../../components/Inputs/Input';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';

const CreateResumeForm =() => {
const [title, setTitle] = useState("");
const [error, setError] = useState(null);

const navigate = useNavigate();

const handleCreateResume = async (e) => {
  e.preventDefault();
  if (!title) {
    setError("Title is required");
    return;
  }
  setError("");
  try{
   const response = await axiosInstance.post(API_PATHS.RESUME.CREATE, { title });
   if (response.data?._id){
    navigate(`/resumes/${response.data?._id}`);
   }
  } catch (error){
    if (error.response && error.response.data) {
      setError(error.response.data.message);
    }else {
      setError("An unexpected error occurred. Please try again later.");
    }
  }
};
  return (
    <div className='w-[90vw] md:w-[70vw] p-7 flex flex-col justify-center'>
      <h3 className='text-lg font-semibold text-black'>Create New Resume </h3>
      <p  className='text-xs text-slate-700 mt-[5px] mb-3'>
        Please enter a title for your new resume. This will help you identify it later.
      </p>
      <form onSubmit={handleCreateResume}>
        <Input 
           value={title}
           onChange={({target}) => setTitle(target.value)}
            placeholder="Enter resume title"
            label="Resume Title"
            type="text"
            />
        {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
        <button 
          type="submit"
          className='mt-4 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors'
        >
          Create Resume
        </button>
      </form>
    </div>
  )
};

export default CreateResumeForm;
