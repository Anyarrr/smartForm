import { Grid, Typography } from "@mui/material";
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import { PersonalDetails } from "./PersonalDetails";
import type { ThridStageProps } from "../firstStage/FirstStage.types";


export const TwoStage = ({thridLoading, setThridLoading}: ThridStageProps) => {
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
        <LooksTwoIcon />
        Второй этап
      </Typography>
      <PersonalDetails thridLoading={thridLoading} setThridLoading={setThridLoading}/>
    </Grid>
  );
};
