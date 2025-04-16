import { useEffect, useState } from 'react';
import NewEntertainerForm from '../components/NewEntertainerForm';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';

interface Entertainer {
  entertainerID: number;
  entStageName: string;
  entPhoneNumber?: string;
  dateEntered?: string;
  bookingCount: number;
  lastBooked?: string;
}

const BASE_URL =
  'https://finalproject-backend-epagc2amb3eeafc6.eastus-01.azurewebsites.net';

const EntertainerList = () => {
  const navigate = useNavigate();
  const [entertainers, setEntertainers] = useState<Entertainer[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchEntertainers = async () => {
    const res = await fetch(`${BASE_URL}/Entertainer/AllEntertainers`);
    const data = await res.json();
    setEntertainers(data.entertainers);
    setLoading(false);
  };

  useEffect(() => {
    fetchEntertainers();
  }, []);

  if (loading) return <p>Loading entertainers...</p>;

  return (
    <div className='container-fluid min-vh-100 py-4 bg-light'>
      <Navbar />
      <h2>Entertainers</h2>

      {showForm && (
        <NewEntertainerForm
          onSuccess={() => {
            setShowForm(false);
            fetchEntertainers();
          }}
          onCancel={() => setShowForm(false)}
        />
      )}

      <div className='d-flex justify-content-end mb-3'>
        {!showForm && (
          <button className='btn btn-primary' onClick={() => setShowForm(true)}>
            Add Entertainer
          </button>
        )}
      </div>

      <div className='table-responsive'>
        <table className='table table-hover table-striped table-bordered rounded shadow-sm overflow-hidden'>
          <thead className='table-dark'>
            <tr>
              <th>Stage Name</th>
              <th>Phone</th>
              <th>Bookings</th>
              <th>Last Booked</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {entertainers.map((ent) => (
              <tr key={ent.entertainerID}>
                <td>{ent.entStageName}</td>
                <td>{ent.entPhoneNumber}</td>
                <td>{ent.bookingCount}</td>
                <td>{ent.lastBooked?.slice(0, 10) ?? 'Never'}</td>
                <td>
                  <button
                    className='btn btn-outline-primary btn-sm'
                    onClick={() =>
                      navigate(`/entertainers/${ent.entertainerID}`)
                    }
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EntertainerList;
