import React, { useState, useEffect } from 'react';
import { getLightColorFromImage } from '../../utils/helper';

const ResumeSummaryCard = ({ imgUrl, title, lastUpdated, onSelect }) => {
    const [bgColor, setBgColor] = useState("#ffffff");
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        let isMounted = true;
        
        const fetchColor = async () => {
            if (!imgUrl) return;
            
            try {
                const color = await getLightColorFromImage(imgUrl);
                if (isMounted) setBgColor(color);
            } catch (error) {
                console.error("Error extracting color:", error);
                if (isMounted) setBgColor("#ffffff");
            }
        };

        fetchColor();

        return () => {
            isMounted = false; // Cleanup to prevent state updates on unmounted component
        };
    }, [imgUrl]);

    const handleImageError = () => {
        setImageError(true);
        setBgColor("#ffffff"); // Fallback color if image fails to load
    };

    return (
        <div 
            className='h-[300px] flex flex-col items-center justify-between bg-white rounded-lg border border-gray-200 hover:border-teal-400 hover:bg-teal-50/5 cursor-pointer p-4 shadow-sm transition-all duration-200 ease-in-out'
            style={{ backgroundColor: bgColor }}
            onClick={onSelect}
            role="button"
            tabIndex={0}
            aria-label={`Resume: ${title}`}
        >
            <div className='p-4 w-full flex justify-center'>
                {imgUrl && !imageError ? (
                    <img 
                        src={imgUrl}
                        alt={`Thumbnail for ${title}`}
                        className={`w-full h-[200px] rounded object-cover transition-opacity ${
                            imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                        onLoad={() => setImageLoaded(true)}
                        onError={handleImageError}
                        loading="lazy"
                    />
                ) : (
                    <div className='w-full h-[200px] rounded bg-gray-100 flex items-center justify-center'>
                        <span className='text-gray-400'>No preview available</span>
                    </div>
                )}
            </div>
            <div className='w-full bg-white/90 backdrop-blur-sm px-4 py-3 rounded-b'>
                <h5 
                    className='text-sm font-medium truncate'
                    title={title} // Show full title on hover
                >
                    {title}
                </h5>
                <p className='text-xs text-gray-500 mt-1'>
                    Last Updated: {lastUpdated}
                </p>
            </div>
        </div>
    );
};

export default ResumeSummaryCard;