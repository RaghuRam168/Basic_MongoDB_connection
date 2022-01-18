import './App.css';
import SignUp from './components/SignUp';
const App = () => {

  const onSignIn= (data)=>{
    console.log(data)
  }

  return (
    <>
   <h1>React</h1>
     <SignUp onSignIn={onSignIn} />
    </>
  );
}

export default App;
