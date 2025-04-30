import { Card } from 'antd';

export default function AntCard() {
  return (
    <Card 
      title="Ant Design Card" 
      style={{ width: 300, margin: 20 }}
    >
      <p>Card content</p>
    </Card>
  );
}