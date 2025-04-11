import React from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TextField,
  Button,
  IconButton,
  InputAdornment
} from '@mui/material';
import { MdClose } from 'react-icons/md';
import useAuth from '../Hooks/useAuth';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { UpdateDisabled } from '@mui/icons-material';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';

// image hosting 
const image_hosting_key= import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const EditProfileModal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

//   user 
  const {user} = useAuth();
//   public api 
  const axiosPublic = useAxiosPublic()
  // private api

  const axiosSecure  = useAxiosSecure();




  const onSubmit = async (data) => {
    console.log("Updated Data:", data);

    if (!data.photo || data.photo.length === 0) {
        console.error("No image selected!");
        return;
      }


      const imageFile = { image: data.photo[0] };


    //   post image to imgbb

      const res = await axiosPublic.post(image_hosting_api,imageFile,{
        headers : {
          'content-type' : 'multipart/form-data'
        }
      });

   

      if(res.data.success){
        // get data
          const updetedData = {
              name : user?.displayName,
              email : user?.email,
              image : res.data.data.display_url,
              phoneNumber : data?.phone,
              address : data?.address
              
          }


          // call async function to patch user data 

          const  updateProfile = async() => {
                try {
                  const response = await axiosSecure.patch(`/api/user/update-profile/${user?.email}`,updetedData);

                      console.log(response.data);

                      if(response.data.modifiedCount > 0) {
                         toast.success('data updated succesfully')
                      }else {
                        toast.error('no change. please try again')
                      }
                      
                } catch (error) {
                  console.log(error);
                  
                }
          };

          updateProfile()







      }
      














    // modal close & form reset
    onClose();
    reset();
  };

  return (
    // backdrop-blur-sm
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="editProfile_modal fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-[90%] md:w-[40%] rounded-xl shadow-lg p-6"
            initial={{ scale: 0.8, y: "-50%", opacity: 0 }}
            animate={{ scale: 1, y: "0%", opacity: 1 }}
            exit={{ scale: 0.8, y: "-50%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-center w-full">Edit Profile</h2>
              <IconButton onClick={onClose}>
                <MdClose />
              </IconButton>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                fullWidth
                label="Full Name"
                {...register('name')}
                error={!!errors.name}
                helperText={errors.name?.message}
                sx={{ mb: 2.5 }}
               value={user?.displayName}
              />

              <TextField
                fullWidth
                label="Email"
                type="email"
                {...register('email', {
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Invalid email'
                  }
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{ mb: 2.5 }}
                value={user?.email}
              />

              <TextField
                fullWidth
                label="Phone Number"
                {...register('phone', {
                  required: 'Phone is required',
                  pattern: {
                    value: /^[0-9]{10,14}$/,
                    message: 'Invalid phone number'
                  }
                })}
                error={!!errors.phone}
                helperText={errors.phone?.message}
                sx={{ mb: 2.5 }}
              />

              <TextField
                fullWidth
                label="Address"
                {...register('address', { required: 'Address is required' })}
                error={!!errors.address}
                helperText={errors.address?.message}
                sx={{ mb: 2.5 }}
              />

              <div style={{ marginBottom: '10px'}}>
                <label className="block font-medium mb-1">Change Profile Picture</label>
                <input
                  type="file"
                  className='file-input'
                  accept="image/*"
                  {...register('photo', { required: 'Photo is required' })}
                />
                {errors.photo && (
                  <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>
                )}
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <Button onClick={onClose} variant="outlined" color="error">
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: '#39B8AD', '&:hover': { backgroundColor: '#2f9d94' } }}
                >
                  Update
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EditProfileModal;
