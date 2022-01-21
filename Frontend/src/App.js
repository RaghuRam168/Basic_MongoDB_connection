import './App.css';
import LoginPage from './pages/LoginScreen/LoginPage';
import Navbar from './components/Navbar/Navbar';
import RegisterPage from './pages/RegisterScreen/RegisterPage';
import{BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom'
import Error from './pages/ErrorPage';
import Dashboard from './pages/Dashboard/Dashboard';
function App() {
  return (

  // <LoginPage/>
  //   <div>
  //   <Navbar/>
  
  //   <RegisterPage/>
  //  </div>
    <Router>
      <Navbar/>
      <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/dash-board' element={<Dashboard/>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>


  );
}

export default App;
