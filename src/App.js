import './App.css';
import 'react-router-dom';
import { Route,Switch } from 'react-router-dom';
import Header from './Components/Header';
import MainPage from './Components/MainPage';
import Footer from './Components/Footer';
import SecondPage from './Components/SecondPage';
import { useState } from 'react';
function App() {
  
  const [flag, setFlag] = useState('false');
  console.log(flag);
  function set(e){
    console.log("app", flag)
    setFlag(e);
  }
  console.log(flag)
  return (
    <div>
      <Header flag={flag}></Header>
      <Switch>
        <Route exact path="/secondPage" component={SecondPage} />
        <Route path="/" render={props => <MainPage set = {set()} />} />
      </Switch>
        
       {/* <MainPage set={set} /> */}
      <Footer></Footer>
      
    </div>
  );
}

export default App;
