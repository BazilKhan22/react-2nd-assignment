import AntButton from './components/AntDesign/AntButton';
import AntCard from './components/AntDesign/AntCard';
import MuiButton from './components/MaterialUI/MuiButton';
import MuiCard from './components/MaterialUI/MuiCard';
import BootstrapButton from './components/ReactBootstrap/BootstrapButton';
import BootstrapCard from './components/ReactBootstrap/BootstrapCard';

export default function App() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Ant Design</h1>
      <AntButton />
      <AntCard />

      <h1>Material UI</h1>
      <MuiButton />
      <MuiCard />

      <h1>React Bootstrap (No CSS)</h1>
      <BootstrapButton />
      <BootstrapCard />
    </div>
  );
}