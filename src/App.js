import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import FirstBox from './components/FirstBox';
import Text from './components/Text';
import Payment from './components/Payment';
import SecondBox from './components/SecondBox';
// import Stories from './components/Stories';
import ThirdBox from './components/ThirdBox';
import Footer from './components/Footer';
import  Line from './components/Line';







function App() {
  return (
    <div>
      <Hero/>
      <About/>
      <FirstBox/>
      <Text/>
      <Payment/>
      <SecondBox/>
      {/* <Stories/> */}
      <ThirdBox/>
      <Footer/>
      <Line/>
      
    </div>
    
  );
}

export default App;
