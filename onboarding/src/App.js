import React, { useState, useEffect } from 'react'
import './App.css';
//my imports\\
import Form from './Form';
import formSchema from './formSchema'
import axios from 'axios'
import * as yup from 'yup'

//start of initial states\\
const initialFormErrors = {
name: '',
email: '',
password: '',

}
const initialFormValues = {
name: '',
email: '',
password: '',
TOS: false,
}
const initialDisabled = true
const initialUsers = []
              function App() {  //START OF MY APPPPPPPPP

//states\\
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [formValues, setFormValues] = useState(initialFormValues)
const [disabled, setDisabled] = useState(initialDisabled)
const [users, setUsers] = useState(initialUsers)


//start of post\\

const postNewUsers = newUsers => {

  axios.post('https://reqres.in/api/users', newUsers)
  .then(res => {
    setUsers([res.data, ...users])
   
  })
  .catch(err => {
    debugger
  })
  .finally(() => {
    setFormValues(initialFormValues)
  })
}





  //start of onInputChange event handler 
  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value
  
//start of validation\\
  yup
  .reach(formSchema, name)
  .validate(value)
  .then(valid => {
      setFormErrors({
        ...formErrors, [name]: ''
      })
  })
.catch(err => {
setFormErrors({
  ...formErrors, [name]: err.errors[0]
})

})
  setFormValues({
    ...formValues,
    [name]: value
  })


  }
const onCheckboxChange = evt =>{
      const {name} = evt.target
      const {checked} = evt.target
      setFormValues({
        ...formValues,

        [name]: checked,
      
        
      })

}

const onSubmit = evt => {

evt.preventDefault() //prevents from refreshing
const newUsers = {
  name: formValues.name.trim(),
  email: formValues.email.trim(),
  password: formValues.password.trim(),
}
postNewUsers(newUsers)



}  

useEffect(() => {

  formSchema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid)
    })
}, [formValues])


                                                                  //start of display page\\
  return (
    <div className="App">
      <header className="App-header">


        {/* start of my form */}
       <Form
       values={formValues}
       onInputChange={onInputChange}
       onSubmit={onSubmit}
       errors={formErrors}
       disabled={disabled}
       onCheckboxChange={onCheckboxChange}
       />

        {/* end of my form */}

        { users.map(user => {
          return ( 
            <div key = {user.id}> 
            <h3> {user.name} </h3>
            <h3> {user.email} </h3>
            </div> 
          )


        }
          )}

      </header>
    </div>
  );
}

export default App;
