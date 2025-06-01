import { Button, Grid, Paper, Typography } from "@mui/material";
import { useAppSelector } from "../app/hook";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { useNavigate } from "react-router-dom";

export const Card = () => {
 const navigate = useNavigate();
  const phone = useAppSelector((state) => state.phone);
  const data = useAppSelector((state) => state.data.data);
  const cvvData = useAppSelector((state) => state.cvv.cvv);
  return (
    <Grid>
      <Paper>
        <Grid>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              padding: " 0px 0px 0px 20px",
            }}
          >
            <NewspaperIcon />
            Информация
          </Typography>
        </Grid>
        <Grid sx={{ marginLeft: "10px" }}>
          <Typography gutterBottom>Номер: {phone.phone}</Typography>
          <Typography gutterBottom>имя: {data.name}</Typography>
          <Typography gutterBottom>Фамилия: {data.surname}</Typography>
          <Typography gutterBottom>Адрес: {data.address}</Typography>
          <Typography gutterBottom>Город: {data.city}</Typography>
          <Typography gutterBottom>Индекс: {data.code}</Typography>
          {data.comment && (
            <Typography gutterBottom>Комментарий: {data.comment}</Typography>
          )}
          {data.company && (
            <Typography gutterBottom>Комментарий: {data.company}</Typography>
          )}
          {data.information && (
            <Typography gutterBottom>Комментарий: {data.information}</Typography>
          )}
          <Typography gutterBottom>
            Номер карты: {cvvData.cardNumber}
          </Typography>
          <Typography gutterBottom>CVV: {cvvData.cvv}</Typography>
          <Typography gutterBottom>
            Срок действия: {cvvData.expiryDate}
          </Typography>
          <Typography gutterBottom>Сумма: {cvvData.amount}руб</Typography>
        </Grid>
        <Button sx={{margin: '20px'}} variant="contained" onClick={() => navigate(`/gratitude/`)}>Все верно?</Button>
      </Paper>
    </Grid>
  );
};
