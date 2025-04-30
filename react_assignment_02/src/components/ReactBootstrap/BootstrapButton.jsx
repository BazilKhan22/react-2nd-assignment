import { Button } from 'react-bootstrap';

export default function BootstrapButton() {
  const styles = {
    button: {
      padding: '6px 12px',
      borderRadius: 4,
      border: 'none',
      margin: 5,
      cursor: 'pointer'
    },
    primary: {
      backgroundColor: '#0d6efd',
      color: 'white'
    },
    danger: {
      backgroundColor: '#dc3545',
      color: 'white'
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Button style={{ ...styles.button, ...styles.primary }} className="border-0">
        Primary
      </Button>
      <Button style={{ ...styles.button, ...styles.danger }} className="border-0">
        Danger
      </Button>
    </div>
  );
}