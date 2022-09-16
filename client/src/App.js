import './App.css';
//Basic Import
import Background from './Components/Background';
import Navigation from './Components/Navigation';
import Body from './Components/Body';
//Body Import
import SignUpPage from './Components/BodyComponents/SignUpPage';

function App() {
  return (
    <Background>
      <Navigation />
      <Body>
        <SignUpPage />
      </Body>
    </Background>
  );
}

export default App;
