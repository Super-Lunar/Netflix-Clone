import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { auth } from './firebase';
import {userAuth} from 'firebase/auth'


function App() {
  const user=null;

  useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged in
        console.log(userAuth);
      } else {
        //Logged out
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {!user?(
          <LoginScreen/>
        ):(
          <Routes>
            <Route exact path=''>
              <HomeScreen/>
            </Route>
          </Routes>
        )}

      </Router>
    </div>
  );
}

export default App;
