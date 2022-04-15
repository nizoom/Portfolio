//import React from "react";
export default function validateInfo(values) {
  let errors = {}
  if (!values.name.trim()) {
    errors.name = "required"
  }

  if (values.reply_to === "") {
    errors.reply_to = "required"
  } else if (!/\S+@\S+\.\S+/.test(values.reply_to)) {

    errors.reply_to = "Email address is invalid"
  }

  if (!values.message) {
    errors.message = "required"
  }

  return errors
}
