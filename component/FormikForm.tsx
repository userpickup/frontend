import { FormHelperText, TextField, InputLabel, Box } from "@mui/material";
import React from "react";
import { useFormik } from "formik";

type Props = React.ComponentProps<typeof TextField> & {
  formik?: ReturnType<typeof useFormik>;
  validationText?: string;
  required?: boolean;
};

const FormikForm = ({
  formik,
  label,
  name,
  validationText,
  required = true,
  ...textFieldProps
}: Props) => {
  const helperText = React.useMemo(() => formik.errors[name], [name, formik]);

  return (
    <>
      <Box sx={{ my: 3 }}>
        <InputLabel
          required={required}
          sx={{
            mb: 1,
            color: "rgba(0, 0, 0, 1)",
            "& .MuiInputLabel-asterisk": { ml: 0.5, color: "rgb(211, 47, 47)" },
          }}
        >
          {label}
        </InputLabel>
        <TextField
          onChange={formik.handleChange}
          value={formik.values[name]}
          error={Boolean(formik.errors[name])}
          {...textFieldProps}
        />
        <FormHelperText className="helper-text">
          {validationText || ""}
        </FormHelperText>
        <FormHelperText error className="helper-text">
          {helperText || ""}
        </FormHelperText>
      </Box>
    </>
  );
};

export default FormikForm;
