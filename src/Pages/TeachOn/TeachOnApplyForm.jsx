import React from 'react';

import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useRole from "../../Hooks/useRole";
import Loading from "../../Common/Loading";
import CoverImg from "../../Common/CoverImg";
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, FormHelperText, Grid, Container, CircularProgress } from '@mui/material';

const TeachOnApplyForm = () => {
  // react hook form
  const {
    register,
    handleSubmit, reset,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  
  const [loading, setLoading] = React.useState(false);  // Loading state for spinner

  // form submit functionality
  const onSubmit = async (data) => {
    setLoading(true);  // Show loading spinner when form is submitted
    const skills = {
      experience: data.experience,
      title: data.title,
      catagory: data.catagory,
      phone: data.phone,
      address: data.address,
      description: data.description,
      // image: data.image && data.image[0], // handle image upload
    };

    console.log(skills);
    

    try {
      const result = await axiosSecure.patch(`/users/${user?.email}`, skills);
      if (result.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your form has been successfully submitted",
          showConfirmButton: false,
          timer: 1500
        });
        reset();
        navigate('/');
      }
    } catch (error) {
        if(error.response && error.response.status === 400){
          toast.error(error.response.data)
        }else{

          toast.error('Something went wrong. Please try again');
        }
    } finally {
      setLoading(false);  // Hide loading spinner after request is done
    }
  };

  return (
         <div>
      <CoverImg title={'Become a Teacher'} />
             <Container maxWidth="lg" className='mt-14 mb-30'>

      <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[40%] mx-auto mt-20 px-6 lg:px-0">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>

            <Grid container spacing={3}>
              {/* User Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={user?.displayName}
                  {...register("name")}
                  disabled
                />
              </Grid>

              {/* User Email */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={user?.email}
                  {...register("email")}
                  disabled
                />
              </Grid>

              {/* Title */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Title"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  {...register("title", { required: true })}
                  error={Boolean(errors.title)}
                  helperText={errors.title && "This field is required"}
                />
              </Grid>

              {/* Experience Dropdown */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal" error={Boolean(errors.experience)}>
                  <InputLabel>Experience</InputLabel>
                  <Select
                    label="Experience"
                    {...register('experience', { required: true })}
                    defaultValue=""
                  >
                    <MenuItem value="beginner">Beginner</MenuItem>
                    <MenuItem value="mid-level">Mid-level</MenuItem>
                    <MenuItem value="experienced">Experienced</MenuItem>
                  </Select>
                  {errors.experience && <FormHelperText>Experience is required</FormHelperText>}
                </FormControl>
              </Grid>

              {/* Category Dropdown */}
              <Grid item xs={12} sm={12}>
                <FormControl fullWidth margin="normal" error={Boolean(errors.catagory)}>
                  <InputLabel>Category</InputLabel>
                  <Select
                   className=''
                    label="Category"
                    {...register('catagory', { required: true })}
                    defaultValue=""
                  >
                    <MenuItem value="web development">Web Development</MenuItem>
                    <MenuItem value="graphics design">Graphics Design</MenuItem>
                    <MenuItem value="digital marketing">Digital Marketing</MenuItem>
                    <MenuItem value="video editing">Video Editing</MenuItem>
                    <MenuItem value="ui/ux design">UI/UX Design</MenuItem>
                  </Select>
                  {errors.catagory && <FormHelperText>Category is required</FormHelperText>}
                </FormControl>
              </Grid>

              {/* Image Upload */}
              {/* <Grid item xs={12}>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-[16px] text-gray-600">Your CV</legend>
                  <input type="file" className="file-input w-full" />
                </fieldset>
              </Grid> */}

              {/* Phone Number */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  {...register("phone", { required: true })}
                  error={Boolean(errors.phone)}
                  helperText={errors.phone && "This field is required"}
                />
              </Grid>

              {/* Address */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Address"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  {...register("address", { required: true })}
                  error={Boolean(errors.address)}
                  helperText={errors.address && "This field is required"}
                />
              </Grid>

              {/* Description */}
              <Grid item xs={12}>
                <TextField
                  label="Description"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  margin="normal"
                  {...register("description", { required: true })}
                  error={Boolean(errors.description)}
                  helperText={errors.description && "This field is required"}
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    backgroundColor: "#39B8AD", // Custom background color
                    '&:hover': {
                      backgroundColor: "#35A59B", // Slightly darker shade for hover effect
                    },
                    mt: 3,
                    p: 2,
                  }}
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : "Submit for Review"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </Container>
         </div>
  );
};

export default TeachOnApplyForm;
