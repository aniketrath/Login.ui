import './App.css';
//Basic Import
import Background from './Components/Background';
import Navigation from './Components/Navigation';
import Body from './Components/Body';
//Body Import
import LoginPage from './Components/BodyComponents/LoginPage';

function App() {
  return (
    <Background>
      <Navigation />
      <Body>
        <LoginPage />
      </Body>
    </Background>
  );
}

export default App;
