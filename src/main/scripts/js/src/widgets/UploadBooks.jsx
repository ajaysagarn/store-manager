import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PublishIcon from '@mui/icons-material/Publish';
import GetAppIcon from '@mui/icons-material/GetApp';
import { uploadBooks } from '../reducers/BookActions'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: "10px",
    minWidth: 120,
    width: '100%'
  },
  department: {
    width: '75%'
  },
  uploadRow: {
    display: 'flex',
    flexDirection: 'row',
    width: '75%',
    padding: '15px 0px'
  },
  button: {
    margin: '10px'
  },
  selectEmpty: {
    marginTop: "15px"
  }
}))

export default function UploadUsersForm () {
  const classes = useStyles()

  const dispatch = useDispatch()
  const uploadInput = useRef()

  const [fileName, setFileName] = useState('')
  const [file, setFile] = useState({})


  const handleUploadFile = (e) => {
    const file = e.target.files[0]

    if (file) {
      setFileName(file?.name)
      setFile(file)
    }
  }

  const uploadFile = () => {
    uploadInput.current.click()
  }

  const submitBooks = () =>{
    dispatch(uploadBooks(file))
  }

  const CSV_COLUMNS = ['book_id','isbn','title','original_publication_year','image_url','small_image_url']

  const downloadTemplate = () => {
    const csvContent = 'data:application/csv;charset=UTF-8,' + CSV_COLUMNS.join(',')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', 'books_inventory.csv')
    document.body.appendChild(link) // Required for FF
    link.click() // This will download the data file named "my_data.csv".
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h5"> Upload Books </Typography>

      <div className={classes.uploadRow}>
      <FormControl className={classes.uploadRow}>
        <TextField className={classes.department} id="outlined-basic" label="Upload File" placeholder="----Upload file----" variant="outlined" value={fileName} disabled/>
        <input ref={uploadInput} type="file" onChange={handleUploadFile} hidden/>
        <Button variant="contained" startIcon={<PublishIcon/>} color="primary" onClick={uploadFile} className={classes.button}>Upload</Button>
        <Button variant="container" startIcon={<GetAppIcon/>} color="secondary" onClick={downloadTemplate} className={classes.button}>Template</Button>
      </FormControl>
      </div>
      <Button variant="contained" color="primary" onClick={submitBooks} disabled={(!((fileName?.length > 0)))}>Save</Button>
    </Container>

  )
}
