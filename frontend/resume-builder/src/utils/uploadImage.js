import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile, onUploadProgress) => {
    // Validate input
    if (!(imageFile instanceof File || imageFile instanceof Blob)) {
        throw new Error("Invalid file type. Please provide a File or Blob object.");
    }

    // Check file size (e.g., 5MB limit)
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
    if (imageFile.size > MAX_FILE_SIZE) {
        throw new Error("File size exceeds 5MB limit.");
    }

    // Check file type
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(imageFile.type)) {
        throw new Error("Only JPG, PNG, GIF, or WebP images are allowed.");
    }

    const formData = new FormData();
    formData.append("image", imageFile);
    
    // Add metadata if needed
    formData.append("timestamp", Date.now());
    formData.append("source", "web-upload");

    try {
        const response = await axiosInstance.post(
            API_PATHS.IMAGE.UPLOAD_IMAGE, 
            formData, 
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: (progressEvent) => {
                    if (onUploadProgress && typeof onUploadProgress === 'function') {
                        const percentCompleted = Math.round(
                            (progressEvent.loaded * 100) / progressEvent.total
                        );
                        onUploadProgress(percentCompleted);
                    }
                },
                timeout: 30000, // 30 seconds timeout for uploads
            }
        );

        // Validate response structure
        if (!response.data || !response.data.imageUrl) {
            throw new Error("Invalid server response - missing image URL");
        }

        return {
            success: true,
            imageUrl: response.data.imageUrl,
            metadata: response.data.metadata || null,
            fullResponse: response.data
        };
    } catch (error) {
        console.error("Image upload failed:", error);
        
        // Enhanced error handling
        let errorMessage = "Image upload failed. Please try again.";
        
        if (error.response) {
            // Server responded with error status
            errorMessage = error.response.data?.message || errorMessage;
        } else if (error.request) {
            // Request was made but no response received
            errorMessage = "No response from server. Check your connection.";
        } else if (error.code === 'ECONNABORTED') {
            errorMessage = "Upload timed out. Please try again.";
        }

        throw new Error(errorMessage);
    }
};

export default uploadImage;