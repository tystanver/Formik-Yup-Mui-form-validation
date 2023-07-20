import { TextField } from "@mui/material";

export const FirstNameTextField = ({
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
}) => {
  return (
    <TextField
      fullWidth
      name="First_name"
      label="First Name"
      value={values.First_name}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched.First_name && !!errors.First_name}
      helperText={touched.First_name && errors.First_name}
    />
  );
};
