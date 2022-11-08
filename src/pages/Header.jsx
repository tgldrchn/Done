import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { DarkMode } from "../App";
import { useContext } from "react";
const Header = () => {
  const { setIsDarkMode, isDarkMode } = useContext(DarkMode);
  const styles = {
    body: {
      backgroundColor: isDarkMode ? "white" : "#252B3B",
      color: isDarkMode ? "grey" : "white",
    },
    page: {
      color: isDarkMode ? "black" : "white",
    },
  };
  return (
    <div className='header' style={styles.body}>
      <Link className='logo' to='./home' style={styles.page}>
        HOME
      </Link>
      <Form>
        <Form.Check
          type='switch'
          onChange={(e) => setIsDarkMode(e.target.checked)}
        ></Form.Check>
      </Form>
      <div className='bar'>
        <Link className='page' style={styles.page} to='./products'>
          products
        </Link>
        <Link className='page' style={styles.page} to='./services'>
          services
        </Link>
        <Link className='page' style={styles.page} to='./contact'>
          contact
        </Link>
        <Link className='page' style={styles.page} to='./login'>
          login
        </Link>
      </div>
    </div>
  );
};

export default Header;
