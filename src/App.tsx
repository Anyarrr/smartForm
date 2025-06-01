import { Grid, Paper, Typography } from "@mui/material";
import { FirstStage } from "./components/firstStage/FirstStage";
import { useState } from "react";
import { TwoStage } from "./components/twoStage/TwoStage";
import { ThirdStage } from "./components/thirdStage/ThirdStage";

function App() {
  const [loading, setLoading] = useState(false);
  const [thridLoading, setThridLoading] = useState(false);
  return (
    <Grid>
      <Paper sx={{ width: "400px" }}>
        <Typography
          sx={{
            textAlign: "center",
            padding: "20px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
          gutterBottom
        >
          Форма заказа
        </Typography>
        <FirstStage loading={loading} setLoading={setLoading} />
        {loading? <TwoStage loading={loading} setLoading={setLoading} />: null}
        {thridLoading? <ThirdStage thridLoading={thridLoading} setThridLoading={setThridLoading} />: null}
      </Paper>
    </Grid>
  );
}

export default App;
