import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EditEntertainerForm from '../components/EditEntertainerForm';
import Navbar from '../components/NavBar';

interface Entertainer {
  entertainerID: number;
  entStageName: string;
  entSSN?: string;
  entStreetAddress?: string;
  entCity?: string;
  entState?: string;
  entZipCode?: string;
  entPhoneNumber?: string;
  entWebPage?: string;
  entEMailAddress?: string;
  dateEntered?: string;
}

const BASE_URL =
  'https://finalproject-backend-epagc2amb3eeafc6.eastus-01.azurewebsites.net';

const EntertainerDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [entertainer, setEntertainer] = useState<Entertainer | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch(`${BASE_URL}/Entertainer/${id}`)
      .then((res) => res.json())
      .then(setEntertainer);
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this entertainer?'
    );
    if (!confirmDelete) return;

    await fetch(`${BASE_URL}/Entertainer/Delete/${id}`, { method: 'DELETE' });
    navigate('/entertainers');
  };

  const handleSave = async (updated: Entertainer) => {
    await fetch(`${BASE_URL}/Entertainer/Update/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });

    setEntertainer(updated);
    setIsEditing(false);
  };

  if (!entertainer) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <h2>{entertainer.entStageName} - Details</h2>
      {isEditing ? (
        <EditEntertainerForm
          entertainer={entertainer}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <ul className='list-group mb-4'>
            <li className='list-group-item'>
              <strong>ID:</strong> {entertainer.entertainerID}
            </li>
            <li className='list-group-item'>
              <strong>Stage Name:</strong> {entertainer.entStageName}
            </li>
            <li className='list-group-item'>
              <strong>SSN:</strong> {entertainer.entSSN}
            </li>
            <li className='list-group-item'>
              <strong>Street Address:</strong> {entertainer.entStreetAddress}
            </li>
            <li className='list-group-item'>
              <strong>City:</strong> {entertainer.entCity}
            </li>
            <li className='list-group-item'>
              <strong>State:</strong> {entertainer.entState}
            </li>
            <li className='list-group-item'>
              <strong>Zip Code:</strong> {entertainer.entZipCode}
            </li>
            <li className='list-group-item'>
              <strong>Phone:</strong> {entertainer.entPhoneNumber}
            </li>
            <li className='list-group-item'>
              <strong>Web Page:</strong> {entertainer.entWebPage}
            </li>
            <li className='list-group-item'>
              <strong>Email:</strong> {entertainer.entEMailAddress}
            </li>
            <li className='list-group-item'>
              <strong>Date Entered:</strong>{' '}
              {entertainer.dateEntered?.slice(0, 10)}
            </li>
          </ul>
          <button
            className='btn btn-primary'
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>{' '}
          <button className='btn btn-danger' onClick={handleDelete}>
            Delete
          </button>{' '}
          <button
            className='btn btn-secondary'
            onClick={() => navigate('/entertainers')}
          >
            Back to List
          </button>
        </>
      )}
    </div>
  );
};

export default EntertainerDetailsPage;
