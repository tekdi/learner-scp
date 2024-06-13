import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  OutlinedInput,
  MenuItem,
  Select,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import logo from "../assets/whiteLogo.png";
import { loginApi } from "../apis/loginApi";
import { useNavigate } from "react-router-dom";
import Loading from "../components/common/Loading";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../LanguageContext";

const LoginScreen = () => {
  const { t, i18n } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // Add error state
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      language: language,
      username: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Set the language select field to the current language from the context
    setValue("language", language);
  }, [language, setValue]);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    setError(""); // Clear previous errors
    try {
      const result = await loginApi(data.username, data.password);
      localStorage.setItem("authToken", result?.result?.access_token);
      localStorage.setItem("refreshToken", result?.result?.refresh_token);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.message);
      setError(error.message); // Set the error message
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Box
      sx={{
        backgroundColor: "#4a4640",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={logo}
        alt="Pratham Logo"
        width={350}
        style={{ marginTop: "10vh" }}
      />
      <Box
        sx={{
          mt: 10,
          backgroundColor: "white",
          padding: 3,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: "100vh",
          width: "100%",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {error && (
            <Typography color="error" sx={{ mb: 2 }}>
              {t("LOGIN.INVALID_USERNAME_OR_PASSWORD")}
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
              mt: 1,
              height: "30px",
            }}
          >
            <Controller
              name="language"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  onChange={(e) => {
                    field.onChange(e);
                    changeLanguage(e.target.value);
                    i18n.changeLanguage(e.target.value); // Also change i18n language
                  }}
                  value={field.value} // Ensure value is correctly set
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="hi">हिंदी</MenuItem>
                  <MenuItem value="or">ଓଡ଼ିଆ</MenuItem>
                  <MenuItem value="mr">मराठी</MenuItem>
                </Select>
              )}
            />
          </Box>
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor="username">{t("LOGIN.USERNAME")}</InputLabel>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <OutlinedInput
                  {...field}
                  id="username"
                  label={t("LOGIN.USERNAME")}
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor="password">{t("LOGIN.PASSWORD")}</InputLabel>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <OutlinedInput
                  {...field}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  label={t("LOGIN.PASSWORD")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              )}
            />
          </FormControl>
       
          <FormControlLabel
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
              mt: 1,
            }}
            control={<Checkbox defaultChecked />}
            label={t("LOGIN.REMEMBERME")}
          />
          <Button
            type="submit"
            fullWidth
            sx={{
              borderRadius: "50px",
              mt: 2,
              bgcolor: "#fdbe16", // Background color
              "&:hover": {
                bgcolor: "#dca10f", // Darker shade for hover state
              },
              color: "black", // Text color
            }}
          >
            {t("LOGIN.LOGIN")}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default LoginScreen;
