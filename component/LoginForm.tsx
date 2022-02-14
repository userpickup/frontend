import { useRouter } from "next/router";
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { signInWithEmailAndPassword } from "../src/api/firebaseAuth";
import FormikForm from "./FormikForm";
import { IconButton, InputAdornment, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box } from "@mui/system";
import { LoadingButton } from "@mui/lab";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [validateOnChangeStatus, setValidateOnChangeStatus] =
    React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = React.useCallback(() => {
    setShowPassword(!showPassword);
  }, [setShowPassword, showPassword]);

  const onSubmit = React.useCallback(
    async (values) => {
      setLoading(true);
      try {
        await signInWithEmailAndPassword(values.email, values.password);
        router.push("/");
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    },
    [router]
  );

  const validationSchema = React.useMemo(() => {
    return Yup.object({
      email: Yup.string()
        .email("メールアドレスの入力形式が正しくありません")
        .required("メールアドレスは必須です"),
      password: Yup.string()
        .min(7, "パスワードは7文字以上入力してください")
        .required("パスワードは必須です"),
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit,
    validateOnChange: validateOnChangeStatus,
  });

  return (
    <Box sx={{ mt: 3, width: 400, mx: "auto" }}>
      <Typography
        sx={{ mb: 2, fontSize: 40, fontWeight: "bold", textAlign: "center" }}
      >
        ログイン
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <FormikForm
          id="email"
          fullWidth
          name="email"
          label="メールアドレス"
          placeholder="example@example.com"
          formik={formik}
        />
        <FormikForm
          id="password"
          fullWidth
          type={showPassword ? "text" : "password"}
          name="password"
          label="パスワード"
          formik={formik}
          validationText="7文字以上の半角英数字"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <LoadingButton
          type="submit"
          onClick={() => setValidateOnChangeStatus(true)}
          loading={loading}
          loadingIndicator="Loading..."
          variant="outlined"
          size="large"
        >
          ログイン
        </LoadingButton>
      </form>
    </Box>
  );
};

export default LoginForm;
