import { Fragment } from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Header from './components/Header';
import avatar from './image.png';

function Logo(props) {

  const imageStyle = {
    width: "30%",
    marginLeft: "10px"
  }

  const userPic = <img src={avatar} style={imageStyle} />;
  return userPic
}
function App() {
  return (
    <Fragment>
      <Logo />
      <Header name="React" title="Blog" />
      <Header name="Few react js topics" />
      <Nav first="Home" second="Articles" third="About" fourth="Contact" />
      <Intro1 name="React js" />
      <Intro2 />
      <Intro3 />
      <Footer />
    </Fragment>
  );
}

export default App;
