import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Contents from './components/contents/Contents';
import Contents2 from './components/contents/Contents2';
import Contents3 from './components/contents/Contents3';
import Contents4 from './components/contents/Contents4';
import Footer from './components/footer/Footer'
function App() {
  return (
    <>
    <div className="App">
      
        <Header/>
        <Contents/>
        <Contents2/>
        <Contents3/>
        
      <div  >
        <Contents4 />
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default App;
