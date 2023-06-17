import './App.css';
import React,{useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from './components/Contact';

const App =(props) => {
  const apiKey = process.env.REACT_APP_NEWS_API3;
  const pagesize = 6;
  const [progress,setProgress] = useState(0);

    return (
      <Router>
        <div>
          <LoadingBar
            color='#000000'
            progress={progress}
            
          />
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News setProgress = {setProgress} apiKey = {apiKey} key="general" pagesize={pagesize} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress = {setProgress} apiKey = {apiKey} key="business" pagesize={pagesize} country="in" category="business" />} />
            <Route exact path="/sports" element={<News setProgress = {setProgress} apiKey = {apiKey} key="sports" pagesize={pagesize} country="in" category="sports" />} />
            <Route exact path="/health" element={<News setProgress = {setProgress} apiKey = {apiKey} key="health" pagesize={pagesize} country="in" category="health" />} />
            <Route exact path="/entertainment" element={<News setProgress = {setProgress} apiKey = {apiKey} key="entertainment" pagesize={pagesize} country="in" category="entertainment" />} />
            <Route exact path="/technology" element={<News setProgress = {setProgress} apiKey = {apiKey} key="technology" pagesize={pagesize} country="in" category="technology" />} />
            <Route exact path="/science" element={<News setProgress = {setProgress} apiKey = {apiKey} key="science" pagesize={pagesize} country="in" category="science" />} />
            <Route exact path="/contactUs" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
      
    )
}
export default App;