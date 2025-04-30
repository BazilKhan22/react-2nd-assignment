import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function MuiCard() {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardContent>
        <h3>Material UI Card</h3>
        <p>This is a basic card</p>
      </CardContent>
    </Card>
  );
}