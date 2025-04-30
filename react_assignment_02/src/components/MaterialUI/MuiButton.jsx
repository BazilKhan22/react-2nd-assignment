import Button from '@mui/material/Button';

export default function MuiButton() {
  return (
    <div style={{ padding: 20 }}>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined" style={{ marginLeft: 10 }}>Outlined</Button>
    </div>
  );
}