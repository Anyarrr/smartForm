import { Grid, Typography } from "@mui/material";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import { PhoneForm } from "./PhoneForm";
import type { FirstStageProps } from "./FirstStage.types";

export const FirstStage = ({ loading, setLoading }: FirstStageProps) => {
  return (
    <Grid>
      <Typography
        sx={{ display: "flex", alignItems: "center", fontWeight: "bold",padding: ' 0px 0px 0px 20px', }}
      >
        <LooksOneIcon />
        Первый этап
      </Typography>
      <PhoneForm loading={loading} setLoading={setLoading}/>
    </Grid>
  );
};
