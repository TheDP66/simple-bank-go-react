import { FormControl, FormLabel, TextField } from "@mui/material";

type Props = {
  name: string;
  label: string;
  formik: any;
  type: React.HTMLInputTypeAttribute | undefined;
};

const FormText = (props: Props) => {
  return (
    <FormControl
      fullWidth
      error={
        props.formik.touched[props.name] &&
        Boolean(props.formik.errors[props.name])
      }
      component="fieldset"
      variant="standard"
    >
      <FormLabel
        component="legend"
        sx={{ fontSize: ".8rem", m: "0 0 .5rem 0", color: "text.primary" }}
      >
        {props.label}
      </FormLabel>

      <TextField
        fullWidth
        name={props.name}
        type={props.type}
        variant="outlined"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ mb: 2 }}
        inputProps={{
          style: {
            padding: "5px 11px",
            fontSize: "12px",
            backgroundColor: "theme.background.default",
          },
        }}
        InputProps={{
          style: {
            backgroundColor: "theme.background.default",
          },
        }}
        value={props.formik.values[props.name]}
        onChange={props.formik.handleChange}
        error={
          props.formik.touched[props.name] &&
          Boolean(props.formik.errors[props.name])
        }
        helperText={
          props.formik.touched[props.name] && props.formik.errors[props.name]
        }
      />
    </FormControl>
  );
};

export default FormText;
