import Content from "./Content";
import "bootstrap/dist/css/bootstrap.min.css";
import Hub from "../components/Hub";
import Task from "../components/Task";
import What from "../components/What";
import Schedule from "../components/Schedule";
import { DarkMode } from "../App";
import { useContext } from "react";

const Home = () => {
  const { isDarkMode } = useContext(DarkMode);

  const styles = {
    body: {
      backgroundColor: isDarkMode ? "white" : "#252B3B",
      color: isDarkMode ? "black" : "white",
    },
    page: {
      color: isDarkMode ? "black" : "white",
    },
  };
  return (
    <div className='box'>
      <div className='url'>
        <Content
          title='Instant collaborations for remote teams'
          text='All in one for your remote team chats, collaboration and track projects'
          button='Get early access'
          placeholder='Email'
          type='email'
        />
      </div>
      <div style={styles.body}>
        <Hub />
        <Task />
        <Schedule />
        <What />
      </div>
    </div>
  );
};

export default Home;
