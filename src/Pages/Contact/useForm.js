import {useState, useEffect} from "react";

const useForm = (validate, submitForm) => {
  const [ values, setValues ] = useState({
    name: "",
    email : "",
    message : ""
  })

  const [errors, setErrors] = useState({})

  const [isSubmitting, setIsSubmitting] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name] : value
    })
  }

  const handleSubmit = (e) => {
    console.log("handleSubmit");
    e.preventDefault();
    setErrors(validate(values))
    setIsSubmitting(true)
    }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting){
      submitForm()
    }
  })

  /*
  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting){

    }
  }, [errors])  */



  return { handleChange , values, handleSubmit, errors }
}


export default useForm;
