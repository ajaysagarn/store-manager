import { Button, Input, Paper, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { makeStyles } from '@mui/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React from 'react';
import { width } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { selectFormData } from '../app/selectors';
import { setAddFormData, submitAddForm } from '../reducers/BookActions';

const useStyles = makeStyles({
  paper: {
    padding: '15px',
    width: '50%'
  }
})


export default function AddNewBook () {
  const classes = useStyles()

  const formData = useSelector(selectFormData)
  const dispatch = useDispatch()

  const handleFormChange = (e) => {
    let prevData = {...formData}
    prevData[e.target.name] = e.target.value
    dispatch(setAddFormData(prevData))
  }

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    e.stopPropagation();
    dispatch(submitAddForm())
  }

  return (
    <React.Fragment>
    <Typography variant='h5'>Add New Book</Typography>
    <form onSubmit={handleFormSubmit}>
        <Paper className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="Title"
            name="title"
            label="Title"
            value={formData?.title}
            fullWidth
            variant="standard"
            onChange={handleFormChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="isbn"
            name="isbn"
            label="ISBN"
            value={formData?.isbn}
            fullWidth
            variant="standard"
            onChange={handleFormChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            required
            id="year"
            name="original_publication_year"
            label="Release years"
            value={formData?.year}
            inputProps={{type: 'number', min: 1800, max:2100}}
            fullWidth
            variant="standard"
            onChange={handleFormChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
          required
            id="lc"
            name="language_code"
            label="Language Code"
            value={formData?.language_code}
            fullWidth
            variant="standard"
            onChange={handleFormChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="imgurl"
            name="image_url"
            label="Image Url"
            value={formData?.image_url}
            fullWidth
            variant="standard"
            onChange={handleFormChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="imgurlsm"
            name="small_image_url"
            label="Image Url Small"
            value={formData?.small_image_url}
            fullWidth
            variant="standard"
            onChange={handleFormChange}
          />
        </Grid>
      </Grid>
        </Paper>
        <Button variant='outlined' type='submit'>Save</Button>
        </form>
    </React.Fragment>
  )
}
