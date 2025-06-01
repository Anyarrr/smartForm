import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { useState } from "react";
import { useFormik } from "formik";
import { formatCardNumber } from "../../utils/formatCardNumber";
import { validateLuhn } from "../../utils/validateLuhn";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { maskCardNumber } from "../../utils/maskCardNumber"; // обязательно импортни
import { useAppDispatch } from "../../app/hook";
import { addCvv } from "../../features/cvvSlice";
import type { CardI } from "../firstStage/FirstStage.types";

const validationSchema = Yup.object({
  cardNumber: Yup.string()
    .required("Введите номер карты")
    .test("luhn-check", "Неверный номер карты", (value) =>
      validateLuhn(value?.replace(/\s/g, "") || "")
    ),
  cvv: Yup.string()
    .required("Введите CVV")
    .matches(/^\d{3,4}$/, "CVV должен содержать 3 или 4 цифры"),
  expiryDate: Yup.string()
    .required("Укажите дату истечения")
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Формат MM/YY"),
  amount: Yup.number()
    .typeError("Введите числовое значение")
    .required("Введите сумму")
    .positive("Сумма должна быть положительной"),
});

export const BankingInformationForm = ({cardLoading, setCardLoading} :CardI) => {
  const dispatch = useAppDispatch();
  const [showCVV, setShowCVV] = useState(false);
  const [maskedCard, setMaskedCard] = useState("");

  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      cvv: "",
      expiryDate: "",
      amount: "",
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      dispatch(addCvv(values));
      setCardLoading(true);
      console.log(values);
    },
  });

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    formik.setFieldValue("cardNumber", formatted);
    setMaskedCard(maskCardNumber(formatted));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "").slice(0, 4);
    if (value.length >= 3) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    formik.setFieldValue("expiryDate", value);
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid>
        <Typography sx={{ padding: "20px", fontSize: "15px" }}>
          Банковская информация
        </Typography>
      </Grid>

      <Grid sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          sx={{ width: "360px" }}
          fullWidth
          label="Номер карты"
          name="cardNumber"
          value={formik.values.cardNumber}
          onChange={handleCardChange}
          onBlur={formik.handleBlur}
          error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
          helperText={formik.touched.cardNumber && formik.errors.cardNumber}
        />
      </Grid>
      {formik.values.cardNumber && (
        <Grid sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="caption">
            Маскированный: {maskedCard}
          </Typography>
        </Grid>
      )}

      <Grid sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          sx={{ width: "360px" }}
          fullWidth
          label="CVV"
          name="cvv"
          type={showCVV ? "text" : "password"}
          value={formik.values.cvv}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.cvv && Boolean(formik.errors.cvv)}
          helperText={formik.touched.cvv && formik.errors.cvv}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowCVV(!showCVV)}
                  edge="end"
                  tabIndex={-1}
                >
                  {showCVV ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          sx={{ width: "360px" }}
          fullWidth
          label="Дата истечения (MM/YY)"
          name="expiryDate"
          placeholder="MM/YY"
          value={formik.values.expiryDate}
          onChange={handleExpiryChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.expiryDate && Boolean(formik.errors.expiryDate)
          }
          helperText={formik.touched.expiryDate && formik.errors.expiryDate}
        />
      </Grid>

      <Grid sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          sx={{ width: "360px" }}
          fullWidth
          label="Сумма"
          name="amount"
          type="number"
          value={formik.values.amount}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.amount && Boolean(formik.errors.amount)}
          helperText={formik.touched.amount && formik.errors.amount}
        />
      </Grid>

      <Grid>
        <Button
          sx={{ margin: "20px", width: '100px' }}
          onClick={() => formik.handleSubmit()}
          variant="contained"
          color="primary"
          fullWidth
          disabled={!formik.isValid || !formik.dirty}
        >
          Отправить
        </Button>
      </Grid>
    </Grid>
  );
};
