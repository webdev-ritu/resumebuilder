import { useRef, useState } from 'react';
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage, preview, setPreview }) => {
    const inputRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0]; // Fixed: removed duplicate .target
        if (file) {
            // Update the image state
            setImage(file);

            // Generate preview URL
            const previewUrl = URL.createObjectURL(file);
            setPreviewUrl(previewUrl);
            
            if (setPreview) {
                setPreview(previewUrl);
            }
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
        setPreviewUrl(null);
        if (setPreview) {
            setPreview(null);
        }
        // Revoke the object URL to avoid memory leaks
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }
    };

    const onChooseFile = () => {
        inputRef.current.click();
    };

    return (
        <div className='flex justify-center mb-6'>
            <input 
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={inputRef}
                className="hidden"
            />
            
            {!image ? (
                <div className="relative group">
                    <div className="w-20 h-20 flex items-center justify-center bg-teal-100 rounded-full cursor-pointer transition-all hover:bg-teal-200">
                        <LuUser className='text-3xl text-teal-600'/>  
                    </div>
                    <button 
                        className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer hover:from-teal-600 hover:to-teal-700 transition-colors"
                        type="button" 
                        onClick={onChooseFile}
                        aria-label="Upload profile photo"
                    >
                        <LuUpload size={14}/> 
                    </button>
                </div>
            ) : (
                <div className="relative group">
                    <img
                        src={preview || previewUrl}
                        alt="Profile preview"
                        className='w-20 h-20 rounded-full object-cover border-2 border-teal-100'
                    />
                    <button 
                        className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer hover:bg-red-600 transition-colors"
                        type="button" 
                        onClick={handleRemoveImage}
                        aria-label="Remove profile photo"
                    >
                        <LuTrash size={14}/>
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfilePhotoSelector;