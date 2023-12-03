import React, { Fragment, useContext } from "react";
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
import { UserContext } from "./context/UserContext";


import Button from "./components/Button";
import { useState, useEffect } from "react";
// import {  } from "react";
import { useHistory,Redirect } from "react-router-dom/cjs/react-router-dom.min";




function App() {
  const [account, setAccount] = useState({});
  const { user } = useContext(UserContext);

 


  useEffect(() => {
    // let session = sessionStorage.getItem('account');

//     if (session) {
//       setAccount(JSON.parse(session));
// }
  },[])

  if (user && user.isAuthenticated === true) {
  console.log(' cos user',user)
  } else {
    <Redirect to ="/login" />
} 



  return (
    <Router>

     <GlobalStyles>
        <div className='App-container'>
          {user && user.isAuthenticated === true &&
          <Nav />
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




export default App;
