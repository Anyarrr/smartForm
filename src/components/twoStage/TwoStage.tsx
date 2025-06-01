import { Grid, Typography } from "@mui/material";
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import type { FirstStageProps } from "../firstStage/FirstStage.types";
import { PersonalDetails } from "./PersonalDetails";


export const TwoStage = ({loading, setLoading}: FirstStageProps) => {
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
      <PersonalDetails loading={loading} setLoading={setLoading}/>
    </Grid>
  );
};
