import React, { useContext, useState } from 'react';
import HERO_IMG from '../assets/hero-img.jpg';
import { useNavigate } from 'react-router-dom';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import Modal from '../components/Modal';
import { UserContext } from '../context/userContext';
import ProfileInfoCard from '../components/Cards/ProfileInfoCard';


const LandingPage = () => {
  const {user} = useContext(UserContext);
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(true);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user){
      setOpenAuthModal(true);
    }else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="w-full min-h-full bg-gray-200">
      <div className="container mx-auto px-4 py-6">

        {/*header*/}

      <header className="flex justify-between items-center mb-16">
       <div className="text-xl font-bold">
       ResuMeUp
       </div>
       { user ? (
        <ProfileInfoCard/>
      ) : ( 
      <button
       className="bg-teal-600 text-sm font-semibold text-black px-7 py-2.5 rounded-lg hover:bg-green-200 hover:text-white transition-colors cursor-pointer"
               onClick={() => setOpenAuthModal(true)}>
          Login / Sign Up </button>
        )}
      </header>

      {/*hero section*/}

      <div className='flex flex-col md:flex-row items-center'>
        <div className='w-full md:w-1/2 pr-4 mb-8 md:mb-0'>
          <h1 className='text-5xl font-bold mb-6 leading-tight'>
            Your Dream Job Starts With a {""}
            <span className=' text-transparent bg-clip-text bg-[radial-gradient(circle,_#7182ff_0%,_#3cff52)] bg-[length:200%_200%_200%] animate-text-shine'> Stunning Resume</span>
          </h1>
          <p className='text-gray-700 text-lg mb-8'>
           Professional, ATS-friendly resumes built effortlessly. No design skills needed. Just pick a template, fill in your details, and get hired faster.
           </p>
          <button className='bg-teal-600 text-sm font-semibold text-black px-7 py-2.5 rounded-lg hover:bg-green-200 hover:text-white transition-colors cursor-pointer'
            onClick={handleCTA}>
            Get Started
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img src={HERO_IMG} alt="Hero" className='w-full rounded-lg' />
        </div>

      </div>
      
      {/*features section*/}

    <section className="mt-5">
      <h2 className="text-2xl font-bold text-center mb-12">
          Why Choose ResuMeUp?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 shadow-sm rounded-xl hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-3">Easy Drag & Drop Editor</h3>
            <p className="text-gray-600">Build your resume effortlessly with our intuitive and beginner-friendly editor. No design skills required.</p>
          </div>
          <div className="bg-gray-50 p-6 shadow-sm rounded-xl hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-3">Customizable Templates</h3>
            <p className="text-gray-600">Choose from a variety of templates to match your personal style.</p>
          </div>
          <div className="bg-gray-50 p-6 shadow-sm rounded-xl hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-3"> Modern, ATS-Friendly Templates</h3>
            <p className="text-gray-600">Choose from professionally designed templates that pass Applicant Tracking Systems with ease.</p>
        
        </div>
      </div>
    </section>
    
    {/*testimonials section*/}

    <section className="mt-16">
      <h2 className="text-2xl font-bold text-center mb-12">
          What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 shadow-sm rounded-xl hover:shadow-md transition">
            <p className="text-gray-600">"ResuMeUp made my job search so much easier! The templates are beautiful and easy to customize."</p>
            <p className="mt-4 font-semibold">- Jane Doe</p>
          </div>
          <div className="bg-gray-50 p-6 shadow-sm rounded-xl hover:shadow-md transition">
            <p className="text-gray-600">"I landed my dream job thanks to the stunning resume I created with ResuMeUp!"</p>
            <p className="mt-4 font-semibold">- John Smith</p>
          </div>
          <div className="bg-gray-50 p-6 shadow-sm rounded-xl hover:shadow-md transition">
            <p className="text-gray-600">"The drag-and-drop editor is a game-changer. I love how easy it is to use!"</p>
            <p className="mt-4 font-semibold">- Sarah Johnson</p>
          </div>
      </div>
    </section>
     </div>


     {/*footer*/}

      <div>
        
        <footer className="bg-teal-900 text-white py-6 mt-16">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 ResuMeUp. All rights reserved.</p>
            <p>Follow us on social media</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="https://www.linkedin.com/in/ritu-saxena-78325334b/" className="text-gray-400 hover:text-white">Linkdin</a>
              <a href="https://github.com/webdev-ritu" className="text-gray-400 hover:text-white">Github</a>
              
            </div>
          </div>
        </footer>
      </div>
    
    <Modal 
     isOpen={openAuthModal}
     onClose={() => {
      setOpenAuthModal(false);
      setCurrentPage("login");
  }}
    hideHeader
  >
    <div>
      {currentPage ==="login" && <Login setCurrentPage={setCurrentPage} />}
      {currentPage ==="signup" && (
        <SignUp setCurrentPage={setCurrentPage} />
      )}
    </div>
  </Modal>
    </div>
  );
};

export default LandingPage;