import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

function App() {
  return (
    <div>
     <Router>
     <Header/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/profile" element= {<PrivateRoute/>}>
          <Route path="/profile" element= {<Profile/>}/>
        </Route>
        <Route path="/offers" element= {<Offers/>}/>
        <Route path="/sign-in" element= {<SignIn/>}/>
        <Route path="/sign-up" element= {<SignUp/>}/>
        <Route path="/forgot-password" element= {<ForgotPassword/>}/>
      </Routes>
     </Router>
     <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </div>
  );
}

export default App;
