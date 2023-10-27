import { LoadingButton } from "@mui/lab";
import { Paper } from "@mui/material";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import { useState } from "react";
import * as yup from "yup";
import FormText from "../../../components/FormText";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { createUser } from "../../../redux/actions/authAction";

const INITIAL_VALUES = {
  username: "",
  fullName: "",
  password: "",
  email: "",
};

const VALIDATION_SCHEMES = yup.object({
  username: yup.string().min(3).max(100).required("field is required"),
  fullName: yup.string().min(3).max(100).required("field is required"),
  email: yup.string().email().min(3).max(200).required("field is required"),
  password: yup.string().min(6).max(100).required("field is required"),
});

type Props = {};

const SignUpForm = (props: Props) => {
  const { app } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: VALIDATION_SCHEMES,
    onSubmit: async (values) => {
      setLoading(true);

      dispatch(createUser(values, enqueueSnackbar));

      setLoading(false);
    },
  });

  return (
    <Paper
      sx={{
        padding: "16px 14px",
        maxWidth: "309px",
        marginTop: "18px",
        border: `1px solid ${
          app.darkMode ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .1)"
        }`,
      }}
      elevation={1}
    >
      <form onSubmit={formik.handleSubmit}>
        <FormText
          formik={formik}
          label="Username"
          name="username"
          type="text"
        />

        <FormText
          formik={formik}
          label="Full name"
          name="fullName"
          type="text"
        />

        <FormText formik={formik} label="Email" name="email" type="email" />

        <FormText
          formik={formik}
          label="Password"
          name="password"
          type="password"
        />

        <LoadingButton
          color="primary"
          fullWidth
          loading={loading}
          loadingPosition="start"
          type="submit"
          variant="contained"
          size="small"
        >
          Sign up
        </LoadingButton>
      </form>
    </Paper>
  );
};

export default SignUpForm;
