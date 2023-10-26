import { FormControl, FormLabel, TextField } from '@mui/material';

type Props = {
    name: string;
    label: string;
    formik: any;
    type: React.HTMLInputTypeAttribute | undefined;
}

const FormText = (props: Props) => {
    return (
        <FormControl
            // sx={{
            //     border:
            //         props.formik.touched.ktp && Boolean(props.formik.errors.ktp)
            //             ? "1px solid #d32f2f"
            //             : `1px solid ${theme.palette.divider}`,
            //     p: 1,
            // }}
            fullWidth
            error={props.formik.touched[props.name] && Boolean(props.formik.errors[props.name])}
            component="fieldset"
            variant="standard"
        >
            <FormLabel
                component="legend"
                sx={{ fontSize: ".8rem", m: "0 0 .2rem 0" }}
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
                        padding: "6px 8px",
                        fontSize: "14px"
                    }
                }}
                value={props.formik.values[props.name]}
                onChange={props.formik.handleChange}
                error={props.formik.touched[props.name] && Boolean(props.formik.errors[props.name])}
                helperText={props.formik.touched[props.name] && props.formik.errors[props.name]}
            />
        </FormControl>
    )
}

export default FormText