import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Title from './components/body/Title'
import Poster from './components/body/Poster';

function App() {
  return ( 
    <>
    <Header/>
    <Title/>
    <main>
      <Poster/>
    </main>
    </>
    
  );
}

export default App;
