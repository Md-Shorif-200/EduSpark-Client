
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Common/Loading';

// Material UI Components
import { TextField, Button, Grid, MenuItem, Typography, Paper, Box } from '@mui/material';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddClass = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    if (!data.imageUrl || data.imageUrl.length === 0) {
      console.error('No image selected!');
      return;
    }

    const imageFile = { image: data.imageUrl[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });

    if (res.data.success) {
      const courseCurriculam = String(data.curriculam);
      const classInfo = {
        name: data.name,
        email: data.email,
        time: new Date(),
        title: data.title,
        category: data.category,
        price: parseFloat(data.price),
        duration: parseFloat(data.duration),
        totalLectures: parseFloat(data.lectures),
        totalProjects: parseFloat(data.projects),
        courseCurriculam: courseCurriculam.split(',').map(item => item.trim()),
        description: data.description,
        image: res.data.data.display_url,
        status: 'pending',
      };

      try {
        const classResponse = await axiosSecure.post('/classes', classInfo);
        if (classResponse.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your class was added successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
          navigate('/dashboard/myClass');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading) return <Loading />;

  return (
    <Box className="add_class_form my-12 min-h-screen flex justify-center items-center px-4">
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8} lg={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom sx={{mb:4}}>
              Add a New Class
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    fullWidth
                    value={user?.displayName}
                    {...register('name')}
                    disabled
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    fullWidth
                    value={user?.email}
                    {...register('email')}
                    disabled
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Course Title"
                    fullWidth
                    {...register('title', { required: true })}
                    error={!!errors.title}
                    helperText={errors.title ? 'This field is required' : ''}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    select
                    label="Course Category"
                    fullWidth
                    defaultValue=""
                    {...register('category', { required: true })}
                    error={!!errors.category}
                    helperText={errors.category ? 'This field is required' : ''}
                  >
                    <MenuItem value="web_development">Web Development</MenuItem>
                    <MenuItem value="app_development">App Development</MenuItem>
                    <MenuItem value="cyber_security">Cyber Security</MenuItem>
                    <MenuItem value="design_and_multimedia">Design & Multimedia</MenuItem>
                    <MenuItem value="digital_marketing">Digital Marketing</MenuItem>
                    <MenuItem value="office_management">Office Management</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Price"
                    type="number"
                    fullWidth
                    {...register('price', { required: true, min: 100 })}
                    error={!!errors.price}
                    helperText={errors.price ? 'Minimum price is 100' : ''}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Duration (month)"
                    type="number"
                    fullWidth
                    {...register('duration', { required: true, min: 4, max: 6 })}
                    error={!!errors.duration}
                    helperText={errors.duration ? 'Duration must be 4-6 weeks' : ''}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Total Lectures"
                    type="number"
                    fullWidth
                    {...register('lectures', { required: true, min: 5 })}
                    error={!!errors.lectures}
                    helperText={errors.lectures ? 'Minimum 5 lectures' : ''}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Total Projects"
                    type="number"
                    fullWidth
                    {...register('projects', { required: true, min: 3 })}
                    error={!!errors.projects}
                    helperText={errors.projects ? 'Minimum 3 projects' : ''}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Curriculum"
                    fullWidth
                    multiline
                    rows={2}
                    placeholder="Enter topics separated by commas (e.g. HTML, CSS, JS)"
                    {...register('curriculam', { required: true })}
                    error={!!errors.curriculam}
                    helperText={errors.curriculam ? 'This field is required' : ''}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Description"
                    fullWidth
                    multiline
                    rows={3}
                    {...register('description', { required: true })}
                    error={!!errors.description}
                    helperText={errors.description ? 'This field is required' : ''}
                  />
                </Grid>

                <Grid item xs={12}>
                <legend className="fieldset-legend mb-2 text-gray-500">Course Cover Image</legend>
                  <input className='file-input' type="file" {...register('imageUrl', { required: true })} />
                  {errors.imageUrl && (
                    <Typography color="error" variant="body2">
                      This field is required
                    </Typography>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <Button variant="contained" color="primary" fullWidth type="submit">
                    Add Class
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddClass;
