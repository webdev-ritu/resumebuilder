import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const ProfileInfoCard = () => {
    const { user, clearUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        clearUser();
        navigate("/");
    };

    // Improved image URL handling
    const getProfileImageUrl = () => {
        if (!user?.profileImageUrl) return "/default-avatar.png";
        
        // Check if URL is absolute or relative
        if (user.profileImageUrl.startsWith('http')) {
            return user.profileImageUrl;
        }
        
        // Assuming your API serves images from /uploads
        return `${process.env.REACT_APP_API_BASE_URL || ''}${user.profileImageUrl}`;
    };

    if (!user) return null;

    return (
        <div className="flex items-center">
            <div className="relative">
                <img
                    src={getProfileImageUrl()}
                    alt={`${user.name}'s profile`}
                    className="w-11 h-11 rounded-full bg-gray-300 mr-3 object-cover"
                    onError={(e) => {
                        e.target.src = "/default-avatar.png";
                        e.target.onerror = null; // Prevent infinite loop
                    }}
                />
                {/* Optional: Add online status indicator */}
                <div className="absolute bottom-0 right-3 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
                <div className="text-[15px] font-bold leading-3 text-gray-800 truncate max-w-[120px]">
                    {user.name}
                </div>
                <button 
                    className="text-teal-600 text-sm font-semibold hover:underline hover:text-teal-950"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default ProfileInfoCard;