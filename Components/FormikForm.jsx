import { useState } from "react";
import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import { FirstNameTextField } from "./FormInputs";
import { validationSchema } from "@/validation/formValidation";
// import {Movie} from "./schemas/@media/movie"
import Movie from "/Components/schemas/@media/movie";
import Rows from "/Components/schemas/@media/row";
import Columns from "/Components/schemas/@media/columns";
import AutocompleteForm from "./AutocompleteForm";
import { useFormik } from "formik";
import { DataGrid } from "@mui/x-data-grid";
const FormikForm = () => {
  //   console.log(Movie);
  const {
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    handleSubmit,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues: {
      First_name: "",
      Last_name: "",
      Phone_number: "",
      Email_address: "",
      address: "",
      note: "",
      movie: null,
      school_pass_year: "",
      is_collage_result_golden: "",
      is_Agree: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (data) => {
      try {
        console.log(data);
        setIsFormSubmitted(true);
        resetForm();
      } catch (error) {}
    },
  });

  // console.log(errors);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 23 },
    { id: 6, lastName: "Melisandre", firstName: "Tanver", age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <section className="container mx-auto lg:my-20 my-10 px-2 xl:px-0 ">
      <div>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <div className="col-span-3">
            <h1 className="text-2xl">Your Billing Address</h1>
            <div className="grid grid-cols-2 gap-[30px] mt-[30px]">
              <FirstNameTextField
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched}
                errors={errors}
              />
              <TextField
                fullWidth
                label="Last Name"
                value={values.Last_name}
                onChange={handleChange}
                onBlur={handleBlur}
                name="Last_name"
                error={touched.Last_name && errors.Last_name}
                helperText={touched.Last_name && errors.Last_name}
              />
            </div>
            <div className="grid grid-cols-2 gap-[30px] lg:mt-[30px] mt-4">
              <TextField
                fullWidth
                label="Phone Number"
                name="Phone_number"
                value={values.Phone_number}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.Phone_number && errors.Phone_number}
                helperText={touched.Phone_number && errors.Phone_number}
              />
              <TextField
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Email_address}
                label="Email Address"
                name="Email_address"
                error={touched.Email_address && errors.Email_address}
                helperText={touched.Email_address && errors.Email_address}
              />
            </div>
            <div className="mt-[30px] w-full">
              <TextField
                fullWidth
                label="Address"
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                error={touched.address && errors.address}
                helperText={touched.address && errors.address}
                multiline
                rows={3}
              />
            </div>
            <div className="mt-[30px]">
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Order Note"
                name="note"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.note}
                error={touched.note && errors.note}
                helperText={touched.note && errors.note}
              />
            </div>
          </div>
          <div className="mt-4">
            {/* <AutocompleteForm
              fullWidth
              size="large"
              name="movie"
              options={Movie}
              value={values.movie}
              onChange={(e, value) => {
                setFieldValue("movie", value);
              }}
              disablePortal
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Movie"
                  required
                  error={touched.movie && Boolean(errors.movie)}
                  helperText={touched.movie && errors.movie}
                />
              )}
              getOptionLabel={(option) => option.label}
            /> */}
            <AutocompleteForm
              setFieldValue={setFieldValue}
              values={values}
              touched={touched}
              errors={errors}
            />
          </div>
          <div className="mt-5">
            <FormControl
              fullWidth
              required
              size="small"
              error={
                touched.school_pass_year && Boolean(errors.school_pass_year)
              }
            >
              <InputLabel>SSC Passing Year</InputLabel>
              <Select
                name="school_pass_year"
                value={values.school_pass_year}
                label="SSC Passing Year"
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <MenuItem value={"0000"}>Select your Scc passing year</MenuItem>
                {/* {Array.from(
                  { length: 90 },
                  (_, i) => new Date().getFullYear() - i
                ).map((i) => (
                  <MenuItem key={Math.random()} value={Movie}>
                    {Movie}
                  </MenuItem>
                ))} */}

                {Movie.map((movie) => (
                  <MenuItem key={movie.label} value={movie.label}>
                    {movie.label}
                  </MenuItem>
                ))}
              </Select>
              {
                <FormHelperText>
                  {touched.school_pass_year && errors.school_pass_year}
                </FormHelperText>
              }
            </FormControl>
          </div>
          <div>
            <FormControl>
              <FormControlLabel
                control={
                  <Switch
                    color="success"
                    name="is_collage_result_golden"
                    value={values.is_collage_result_golden}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                }
                label="Have Golden on HSC"
              />
            </FormControl>
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  name="is_Agree"
                  value={values.is_Agree}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultChecked
                />
              }
              label="Agree"
            />
          </div>
          <div className="mt-20">
            <DataGrid
              rows={rows}
              columns={columns}
              // columns={{
              //   valueGetter: (params) =>
              //     `${params.rows.firstName || ""} ${params.row.lastName || ""}`,
              // }}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 8,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </div>
          <div className="mt-4 flex justify-center items-center">
            <button
              type="submit"
              className="px-4 py-2 rounded border border-gray-700 font-semibold"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormikForm;
