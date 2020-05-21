import React from 'react';

            //start of my Form\\
export default function Form(props) {

    const {
        values,
        onInputChange,
        onSubmit,
        errors,
        disabled,
        onCheckboxChange,
    
    } = props
    


return (

<form className = 'form container' onSubmit={onSubmit}>
    <div>
        <h2>Add a User </h2>
       {/* rendering validation errors here */}
       <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
        </div>
     
      {/* end of validation */}

       
        <h4> General Information</h4>
{/* name  */}
<div> 
        <label> Name&nbsp;
            <input
            name='name'
            type='text'
            value={values.name}
            onChange={onInputChange}
            
            /> 
         </label>
 </div>

{/* email */}

<div> 
        <label>Email&nbsp;

        <input
              name='email'
              type='text'
              value={values.email}
              onChange={onInputChange}
         />  
        </label>
 </div>
{/* password */}
<div> 
        <label>Password&nbsp;

        <input
            name='password'
            type='password'
            value={values.password}
            onChange={onInputChange}
         />  
    </label>
 </div>
{/* TOS */}
<div> 

    <label>Terms Of Service&nbsp;
    <input
    type='checkbox'
    name='TOS'
    checked={values.TOS}
    onChange={onCheckboxChange}
    // add onChangefunction to app js and call it back later
    />  
    </label>
    </div>

     {/* Submit Button */}

    <button disabled={disabled}> Submit </button>

</div>
</form>

)
}

        //end of my form\\