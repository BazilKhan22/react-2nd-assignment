import { Card } from 'react-bootstrap';

export default function BootstrapCard() {
  const styles = {
    card: {
      width: '18rem',
      margin: 20,
      border: '1px solid #ddd',
      borderRadius: 8,
      padding: 16
    }
  };

  return (
    <Card style={styles.card}>
      <div>
        <h3 style={{ marginTop: 0 }}>Bootstrap Card</h3>
        <p>Without Bootstrap CSS</p>
      </div>
    </Card>
  );
}