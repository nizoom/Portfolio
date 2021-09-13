import {useState, useEffect} from "react";

const useForm = (validate, submitForm) => {
  const [ values, setValues ] = useState({
    name: "",
    reply_to : "",
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
      console.log("useEffectFired");
      submitForm()
    }
  }, [isSubmitting])




  return { handleChange , values, handleSubmit, errors }
}


export default useForm;
