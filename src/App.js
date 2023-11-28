import React, { Fragment } from "react";
import GlobalStyles from "./components/GlobalStyle";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import _ from "lodash"

import './App.scss';
import { publicRoutes } from './routes'
import { DefaultLayout } from './components/Layouts'
import Nav from './components/Navigation/Nav'

import Button from "./components/Button";
import { useState } from "react";
import { useEffect } from "react";




function App() {
  const [account, setAccount] = useState({});

  useEffect(() => {
    let session = sessionStorage.getItem('account');
    if (session) {
      setAccount(JSON.parse(session));
}
  },[])




  return (
    <Router>

     <GlobalStyles>
        <div className='App-container'>
          {account && !_.isEmpty(account) && account.isAuthenticated
            && <Nav />
          }
         


          <Switch>
  
            {publicRoutes.map((route, index) => {
              const Page = route.component
              let Layout = DefaultLayout
              if (route.layout) {
                Layout = route.layout
              } else if (route.layout ===null){
                Layout = Fragment
              }
              return (
                <Route path={route.path} key={index}  >
                  <Layout> {<Page />}</Layout>
                </Route>
              )
            })}
  
            {/* <Route path="*">
              404 Notfout
            </Route>  */}
  
  
  
  
  
           
  
          </Switch>
        </div>
  
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
     </GlobalStyles>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }



export default App;
