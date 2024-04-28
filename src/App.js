import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import Header from './Components/Header';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='App container'>
      <Header></Header>
      <Section1></Section1>
      <Section2></Section2>
      <Footer></Footer>
    
    </div>
  );
}

export default App;
