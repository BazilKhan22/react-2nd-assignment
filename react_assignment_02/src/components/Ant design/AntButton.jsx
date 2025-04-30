import { Button } from 'antd';

export default function AntButton() {
  return (
    <div style={{ padding: 20 }}>
      <Button type="primary">Primary</Button>
      <Button danger style={{ marginLeft: 10 }}>Danger</Button>
    </div>
  );
}