import { Grid, Typography } from "@mui/material";
import Looks3Icon from "@mui/icons-material/Looks3";
import { BankingInformationForm } from "./BankingInformationForm";
import type { CardI } from "../firstStage/FirstStage.types";

export const ThirdStage = ({cardLoading, setCardLoading} :CardI) => {
  return (
    <Grid>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          fontWeight: "bold",
          padding: " 0px 0px 0px 20px",
        }}
      >
        <Looks3Icon />
        Третий этап
      </Typography>
      <BankingInformationForm cardLoading={cardLoading} setCardLoading={setCardLoading}/>
    </Grid>
  );
};
