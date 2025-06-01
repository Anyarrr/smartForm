import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import type { FirstStageProps } from "./FirstStage.types";

const validationSchema = Yup.object({
  phone: Yup.string()
    .required("Введите номер телефона")
    .matches(/^\+7\d{10}$/, "Номер должен начинаться с +7 и содержать 11 цифр"),
});

const mockDataPhone = (phone: string): Promise<boolean> =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(phone.startsWith("+7"));
    }, 0)
  );

export const PhoneForm = ({loading, setLoading}: FirstStageProps) => {
//   const [serverError, setServerError] = useState<string | null>(null);
  const [loadingResult, setLoadingResult] = useState(false);
  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    validationSchema,
    onSubmit: async (values) => {
    //   setServerError(null);
      setLoadingResult(true);
      setLoading(true);
      const isValid = await mockDataPhone(values.phone);
      // setLoadingResult(false);

      if (isValid) {
        alert("Номер валиден! Можно переходить к следующему шагу.");
        // Здесь можно вызвать Redux action для сохранения номера и перехода к следующему шагу
      }
    },
  });
  return (
    <Grid container direction="column" spacing={2}>
      <Grid>
        <Typography sx={{ padding: '20px', fontSize: '15px'}}>Номер телефона</Typography>
      </Grid>

      <Grid sx={{display: 'flex', justifyContent: 'center'}}>
        <TextField
        sx={{width: '360px'}}
          fullWidth
          id="phone"
          name="phone"
          label="Телефон"
          placeholder="+7XXXXXXXXXX"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={(formik.touched.phone && Boolean(formik.errors.phone))}
          helperText={(formik.touched.phone && formik.errors.phone)}
          disabled={loadingResult}
        />
      </Grid>

      <Grid >
        <Button
        sx={{margin: '20px'}}
          color="primary"
          variant="contained"
          onClick={() => formik.handleSubmit()}
          disabled={!formik.isValid || loadingResult}
        >
          {loadingResult ? "Готово" : "Далее"}
        </Button>
      </Grid>
    </Grid>
  );
};
