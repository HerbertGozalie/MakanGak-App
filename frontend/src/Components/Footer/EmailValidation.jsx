function Validation(values) {
  let error = {};

  if (values.email === "") {
    error.email = "Email should not be empty";
  } else {
    error.email = "";
  }

  return error;
}
export default Validation;
