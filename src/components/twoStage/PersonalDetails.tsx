import { Button, Grid, TextField, Typography } from "@mui/material";
import type { FirstStageProps } from "../firstStage/FirstStage.types";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";

const validationSchema = Yup.object({
  name: Yup.string().required("Поле обязательно для заполнения"),
  surname: Yup.string().required("Поле обязательно для заполнения"),
  address: Yup.string().required("Поле обязательно для заполнения"),
  city: Yup.string().required("Поле обязательно для заполнения"),
  code: Yup.number().required("Поле обязательно для заполнения"),
  company: Yup.string().optional(),
  information: Yup.string().optional(),
  comment: Yup.string().optional(),
});

export const PersonalDetails = ({ loading, setLoading }: FirstStageProps) => {
  const [loadingResult, setLoadingResult] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      address: "",
      city: "",
      code: "",
      company: "",
      information: "",
      comment: "",
    },
    validationSchema,
    onSubmit: () => {
      setLoadingResult(true);
      setLoading(true);
    },
  });

  return (
    <Grid container direction="column" spacing={2}>
      <Grid>
        <Typography sx={{ padding: "20px", fontSize: "15px" }}>
          Личные данные и адрес
        </Typography>
      </Grid>

      <Grid sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          sx={{ width: "360px" }}
          fullWidth
          id="name"
          name="name"
          label="Имя"
          placeholder="Имя"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          disabled={loadingResult}
        />
      </Grid>
      <Grid sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          sx={{ width: "360px" }}
          fullWidth
          id="surname"
          name="surname"
          label="Фамилия"
          placeholder="Фамилия"
          value={formik.values.surname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.surname && Boolean(formik.errors.surname)}
          helperText={formik.touched.surname && formik.errors.surname}
          disabled={loadingResult}
        />
      </Grid>
      <Grid sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          sx={{ width: "360px" }}
          fullWidth
          id="address"
          name="address"
          label="Адрес"
          placeholder="Адрес"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
          disabled={loadingResult}
        />
      </Grid>
      <Grid sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          sx={{ width: "360px" }}
          fullWidth
          id="city"
          name="city"
          label="Город"
          placeholder="Город"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
          disabled={loadingResult}
        />
      </Grid>
      <Grid sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          sx={{ width: "360px" }}
          fullWidth
          id="code"
          name="code"
          label="Почтовый индекс"
          placeholder="Почтовый индекс"
          value={formik.values.code}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.code && Boolean(formik.errors.code)}
          helperText={formik.touched.code && formik.errors.code}
          disabled={loadingResult}
        />
      </Grid>
      <Grid sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          sx={{ width: "360px" }}
          fullWidth
          id="company"
          name="company"
          label="Компания"
          placeholder="Компания"
          value={formik.values.company}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.company && Boolean(formik.errors.company)}
          helperText={formik.touched.company && formik.errors.company}
          disabled={loadingResult}
        />
      </Grid>
      <Grid sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          sx={{ width: "360px" }}
          fullWidth
          id="information"
          name="information"
          label="Дополнительная информация"
          placeholder="Дополнительная информация"
          value={formik.values.information}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.information && Boolean(formik.errors.information)
          }
          helperText={formik.touched.information && formik.errors.information}
          disabled={loadingResult}
        />
      </Grid>
      <Grid sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          sx={{ width: "360px" }}
          fullWidth
          id="comment"
          name="comment"
          label="Комментарий"
          placeholder="Комментарий"
          value={formik.values.comment}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.comment && Boolean(formik.errors.comment)}
          helperText={formik.touched.comment && formik.errors.comment}
          disabled={loadingResult}
        />
      </Grid>
      <Grid>
        <Button
          sx={{ margin: "20px" }}
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
