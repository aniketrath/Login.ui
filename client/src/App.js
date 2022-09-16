import './App.css';
//Basic Import
import Background from './Components/Background';
import Navigation from './Components/Navigation';
import Body from './Components/Body';
//Body Import
import Dashoard from './Components/BodyComponents/Dashoard';

function App() {
  return (
    <Background>
      <Navigation />
      <Body>
        <Dashoard />
      </Body>
    </Background>
  );
}

export default App;
