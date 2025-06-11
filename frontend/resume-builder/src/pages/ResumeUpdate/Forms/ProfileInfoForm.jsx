import React from 'react'
import ProfilePhotoSelector from '../../../components/Inputs/profilePhotoSelector'
import Input from '../../../components/Inputs/Input'

const ProfileInfoForm = ({profileData, updateSection}) => {
  return (
    <div className='px-5 pt-5'>
        <h2 className='text-lg font-semibold text-gray-900'>
            Personal Information
        </h2>
        <div className='mt-4'>
            <ProfilePhotoSelector
              image={profileData?.profileImg || profileData?.profilePreviewUrl}
              setImage={(value)=> updateSection("profilePreviewUrl", value)}
              setPreview={(value)=> updateSection("profilePreviewUrl",value)}
              />
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Input 
                  value={profileData.fullName || ""}
                  onChange={({target})=> 
                  updateSection("fullName", target.value)
                }
                label="Full Name"
                placeholder="Nick"
                type="text"
                />
                <Input 
                  value={profileData.designation || ""}
                  onChange={({target})=> 
                  updateSection("designation", target.value)
                }
                label="Designation"
                placeholder="Ui Desginer"
                type="text"
                />
                <div className='col-span-2 mt-3'>
                    <label className='text-xs font-medium text-slate-600'>
                        Summary
                    </label>
                    <textarea 
                      placeholder='Short Introduction'
                      className="from-input"
                      rows={4}
                      value={profileData.summary || ""}
                      onChange={({target})=> updateSection ("summary", target.value)}
                      />
                </div>
              </div>
        </div>
    </div>
  )
}

export default ProfileInfoForm