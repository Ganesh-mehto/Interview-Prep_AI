import React, { useState, useRef } from 'react'
import { LuUser, LuUpload, LuTrash } from 'react-icons/lu'

const ProfilePhotoSelector = ({ image, setImage, preview, setPreview }) => {
    const [previewurl, setPreviewUrl] = useState(null);
    const inputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return

        setImage(file);
        const preview = URL.createObjectURL(file);
        if (setPreview) {
            setPreview(preview);
        }
        setPreviewUrl(preview);
    
    };

    const handleRemoveImage = () => {
        setImage(null);
        setPreviewUrl(null);
        if (setPreview) {
            setPreview(null);
        }
    };

    const onChooseFile = () => {
        inputRef.current.click();
    }

    return (
        <div className='flex justify-center mb-6'>
            <input type="file" accept="image/*" onChange={handleImageChange} ref={inputRef} className='hidden' />
            {!image ? (
                <div className='w-20 h-20 flex items-center justify-center bg-orange-50 rounded-full relative cursor-pointer'>
                    <LuUser className='text-4xl text-orange-500' />
                    <button onClick={onChooseFile} className='w-8 h-8 flex justify-center items-center bg-linear-to-r from-orange-500/85 to-orange-600 text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer' type="button">
                        <LuUpload />
                    </button>
                </div>
            ) : (
                <div className='relative'>
                    <img src={preview || previewurl} alt="Profile" className='w-20 h-20 rounded-full object-cover' />
                    <button onClick={handleRemoveImage} className='w-8 h-8 flex justify-center items-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer'>
                        <LuTrash />
                    </button>
                </div>
            )}
        </div>
    )
}

export default ProfilePhotoSelector