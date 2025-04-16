import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar';

const LandingPage = () => (
  <>
    <Navbar />
    <div
      className='d-flex align-items-center justify-content-center bg-light'
      style={{
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      }}
    >
      <div className='text-center w-100'>
        <h1 className='display-3 fw-bold'>
          Welcome to the Entertainment Agency
        </h1>
        <p className='lead mb-4'>
          Discover and manage entertainers for booking!
        </p>
        <Link to='/entertainers'>
          <button className='btn btn-primary btn-lg'>View Entertainers</button>
        </Link>
      </div>
    </div>
  </>
);

export default LandingPage;
