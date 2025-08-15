import Loader from './Loader';

const Footer = () => {
  return (
    <footer className='w-screen absolute left-0 bottom-0 card-btn one py-4 text-center'>
      <div className='flex justify-center items-center'>
        <p className='text-md font-medium text-neutral-50'>
          Created by Jonathan Peña
          <span className='inline-block text-sm mx-1.5 animate-heart-pulse'>
            ❤️
          </span>
        </p>
        <div className='flex items-center font-semibold text-base text-neutral-50'>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
