import { Autocomplete, TextField } from "@mui/material";
import Movie from "/Components/schemas/@media/movie";

export const AutocompleteForm = ({
  values,
  touched,
  errors,
  setFieldValue,
}) => {
  //   console.log(Movie);
  return (
    <div>
      <Autocomplete
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
      />
    </div>
  );
};

export default AutocompleteForm;
