import LoginIcon from '@mui/icons-material/Login';
import { LoadingButton } from '@mui/lab';
import { Paper } from '@mui/material';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import * as yup from "yup";
import FormText from '../../../components/FormText';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { login } from '../../../redux/actions/authAction';

const INITIAL_VALUES = {
    username: "",
    password: "",
}

const VALIDATION_SCHEMES = yup.object({
    username: yup.string().required("field is required"),
    password: yup.string().required("field is required"),
});

type Props = {}

const LoginForm = (props: Props) => {
    const dispatch = useAppDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: INITIAL_VALUES,
        validationSchema: VALIDATION_SCHEMES,
        onSubmit: async (values) => {
            setLoading(true);

            dispatch(login(values, enqueueSnackbar));

            setLoading(false);
        },
    });

    return (
        <Paper
            sx={{
                padding: 3,
            }}
        >
            <form onSubmit={formik.handleSubmit}>
                <FormText
                    formik={formik}
                    label='Username'
                    name='username'
                    type='text'
                />

                <FormText
                    formik={formik}
                    label='Password'
                    name='password'
                    type='password'
                />

                <LoadingButton
                    color="primary"
                    fullWidth
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<LoginIcon />}
                    type="submit"
                    variant="contained"
                    size='small'
                >
                    Sign in
                </LoadingButton>
            </form>
        </Paper>
    )
}

export default LoginForm