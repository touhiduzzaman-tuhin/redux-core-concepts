import './App.css';
import CakeComponent from './components/CakeComponent/CakeComponent';
import IceCreamContainer from './components/IceCreamContainer/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer/NewCakeContainer';
import UserContainer from './components/UserContainer/UserContainer';

function App() {
  return (
    <div className="App">
      <UserContainer></UserContainer>
      <CakeComponent></CakeComponent>
      <IceCreamContainer></IceCreamContainer>
      <NewCakeContainer></NewCakeContainer>
    </div>
  );
}

export default App;
