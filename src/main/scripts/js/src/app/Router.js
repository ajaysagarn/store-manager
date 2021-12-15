import { Router } from '@reach/router'
import React from 'react'
import AddNewBook from '../widgets/AddNewBook'
import Inventory from '../widgets/Inventory'
import SignIn from '../widgets/SignIn'
import SignUp from '../widgets/SignUp'
import UploadBooks from '../widgets/UploadBooks'


export default function MyRouter () {
  return (
        <Router>
          <Inventory path="/"/>
          <AddNewBook path="/addBook"/>
          <UploadBooks path="/upload"/>
        </Router>
  )
}
