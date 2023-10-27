import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CardDetails from './components/CardDetails/CardsDetail';
import AccountSettings from './pages/AccountSettings';
import InfoPersonal from './pages/InfoPersonal';
import Security from './pages/Security';
import PaymentUser from './pages/PaymentUser';
import TuristicPost from './pages/PostTuristic';
import Test from './pages/test';
import Profile from './pages/Profile';
import Hostess from './pages/Hostess';
import PreRegister from './pages/PreRegister';
import ProfilePublic from './pages/ProfilePublic'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/auth/login' element={<Login />} />
        <Route exact path='/auth/register' element={<Register />} />
        <Route exact path='/rooms/:idTuristic' element={<CardDetails />} />
        <Route exact path='/account-settings' element={<AccountSettings />} />
        <Route exact path='/account-settings/personal-info' element={<InfoPersonal />} />
        <Route exact path='/account-settings/login-and-security' element={<Security />} />
        <Route exact path='/account-settings/payment-methods' element={<PaymentUser />} />
        <Route exact path='/public' element={<TuristicPost />} />
        <Route exact path='/user/show' element={<Profile />} />
        <Route exact path='/anfitrion' element={<Hostess />} />
        <Route exact path='/preregister' element={<PreRegister/>} />
        <Route exact path='/public/profile' element={<ProfilePublic/>} />


        <Route exact path='/test' element={<Test />} />
      </Routes>

    </Router>
  );
}

export default App;
