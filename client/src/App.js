import './App.css';
//Basic Import
import Background from './Components/Background';
import Navigation from './Components/Navigation';
import Body from './Components/Body';
//Body Import
import Dashoard from './Components/BodyComponents/Dashoard';
import Quote from './Components/BodyComponents/Quote';
import LoginPage from './Components/BodyComponents/LoginPage'
function App() {
  return (
    <Background>
      <Navigation />
      <Body>
        <LoginPage />
        <Quote />
      </Body>
    </Background>
  );
}

export default App;
