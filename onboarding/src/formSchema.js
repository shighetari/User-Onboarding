import * as yup from 'yup'


const formSchema = yup.object().shape({
    name: yup.string()
      .trim()
      .min(3, 'The username must be at least three characters long')
      .required('The name is a required field'),
    email: yup.string()
      .email('The email must be a valid email address')
      .required('The email is a required field'),
      password: yup.string()
      .trim()
      .min(3, 'The username must be at least three characters long')
      .required('The name is a required field'),
      TOS: yup.boolean().oneOf([true], 'Must Accept Terms and Conditions')
  })
  
  export default formSchema
  