import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Navbar from 'react-bootstrap/Navbar';
import Ad from './Components/Ad/Ad';
import Courses from './Components/Courses/Courses';


function App() {
  return (
    <div>
      <Header></Header>
      <Ad></Ad>
      <Courses></Courses>
    </div>
  );
}

export default App;
