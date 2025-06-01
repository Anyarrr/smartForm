import { Grid, Typography } from "@mui/material";
import type { ThridStageProps } from "../firstStage/FirstStage.types";
import * as Yup from "yup";
import { useState } from "react";
import { useFormik } from "formik";
import { formatCardNumber } from "../../utils/formatCardNumber";
import { validateLuhn } from "../../utils/validateLuhn";

const validationSchema = Yup.object({
  cardNumber: Yup.string()
    .required("Введите номер карты")
    .test("luhn-check", "Неверный номер карты", (value) =>
      validateLuhn(value || "")
    ),
  cvv: Yup.string()
    .required("Введите CVV")
    .matches(/^\d{3,4}$/, "CVV должен содержать 3 или 4 цифры"),
  expiryDate: Yup.string()
    .required("Укажите дату истечения")
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Формат MM/YY"),
  amount: Yup.number()
    .required("Введите сумму")
    .positive("Сумма должна быть положительной"),
  currency: Yup.string().required("Выберите валюту"),
});

export const BankingInformationForm = ({thridLoading, setThridLoading,}: ThridStageProps) => {
  const [showCVV, setShowCVV] = useState(false);

  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      cvv: "",
      expiryDate: "",
      amount: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    formik.setFieldValue("cardNumber", formatted);
  };
  return (
    <Grid>
      <Grid>
        <Typography sx={{ padding: "20px", fontSize: "15px" }}>
          Банковская информация
        </Typography>
      </Grid>
    </Grid>
  );
};
