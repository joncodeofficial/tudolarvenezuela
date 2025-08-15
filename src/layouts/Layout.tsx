import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = ({ ...props }) => {
  return (
    <div className='relative border min-h-screen'>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
