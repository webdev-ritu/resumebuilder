import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ 
  value, 
  onChange, 
  label, 
  placeholder, 
  type,
  required,
  minLength
}) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-800 mb-1 bg-teal-100">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      
      <div className="relative input-box border-1 border-gray-300 rounded-md bg-white shadow-sm focus-within:border-teal-600 focus-within:ring-1 focus-within:ring-teal-600">
        <input
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="w-full bg-transparent outline-none py-2 px-3"
          required={required}
          minLength={minLength}
        />
        
        {type === "password" && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onClick={toggleShowPassword}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <FaRegEye 
                size={18}
                className="text-gray-500 hover:text-primary transition-colors"
              />
            ) : (
              <FaRegEyeSlash
                size={18}
                className="text-gray-400 hover:text-primary transition-colors"
              />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;