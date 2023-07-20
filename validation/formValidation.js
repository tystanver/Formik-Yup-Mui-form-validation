import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
  First_name: Yup.string().min(2).max(30).required("Please Enter your Name"),
  Last_name: Yup.string().required("Please Enter your  last  Name"),
  Phone_number: Yup.number().required("Phone Number is required"),
  Email_address: Yup.string()
    .email("Invalid email address")
    .required("Email Address is required"),
  Password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("Password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  address: Yup.string().required("Plese write Your Adress"),
  note: Yup.string(),
  movie: Yup.object().required("you have to filled this"),
  school_pass_year: Yup.string().required("Please Fill this input"),
});
