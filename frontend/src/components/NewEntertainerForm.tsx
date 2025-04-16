import { useState } from 'react';

interface NewEntertainerFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

const BASE_URL = 'https://localhost:5000';

const NewEntertainerForm = ({
  onSuccess,
  onCancel,
}: NewEntertainerFormProps) => {
  const [formData, setFormData] = useState({
    entStageName: '',
    entPhoneNumber: '',
    dateEntered: new Date().toISOString(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`${BASE_URL}/Entertainer/AddEntertainer`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Entertainer</h2>
      <label>
        Stage Name:
        <input
          type='text'
          name='entStageName'
          value={formData.entStageName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Phone Number:
        <input
          type='text'
          name='entPhoneNumber'
          value={formData.entPhoneNumber}
          onChange={handleChange}
        />
      </label>
      <button type='submit'>Add Entertainer</button>
      <button type='button' onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default NewEntertainerForm;
