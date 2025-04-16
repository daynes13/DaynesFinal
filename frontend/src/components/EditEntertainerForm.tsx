import { useState } from 'react';

interface Entertainer {
  entertainerID: number;
  entStageName: string;
  entPhoneNumber?: string;
  entStreetAddress?: string;
  entCity?: string;
  entState?: string;
  entZipCode?: string;
  entWebPage?: string;
  entEMailAddress?: string;
  dateEntered?: string;
}

interface EditEntertainerFormProps {
  entertainer: Entertainer;
  onSave: (updated: Entertainer) => void;
  onCancel: () => void;
}

const EditEntertainerForm = ({
  entertainer,
  onSave,
  onCancel,
}: EditEntertainerFormProps) => {
  const [formData, setFormData] = useState<Entertainer>({ ...entertainer });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className='container d-flex justify-content-center mt-5'>
      <form
        onSubmit={handleSubmit}
        className='w-100'
        style={{ maxWidth: '700px' }}
      >
        <h2 className='mb-4'>Edit Entertainer</h2>

        <div className='row mb-3'>
          <div className='col-md-6'>
            <label className='form-label'>Stage Name</label>
            <input
              className='form-control'
              name='entStageName'
              value={formData.entStageName}
              onChange={handleChange}
            />
          </div>
          <div className='col-md-6'>
            <label className='form-label'>Phone</label>
            <input
              className='form-control'
              name='entPhoneNumber'
              value={formData.entPhoneNumber || ''}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='row mb-3'>
          <div className='col-md-6'>
            <label className='form-label'>Email</label>
            <input
              className='form-control'
              name='entEMailAddress'
              value={formData.entEMailAddress || ''}
              onChange={handleChange}
            />
          </div>
          <div className='col-md-6'>
            <label className='form-label'>Web Page</label>
            <input
              className='form-control'
              name='entWebPage'
              value={formData.entWebPage || ''}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='row mb-3'>
          <div className='col-12'>
            <label className='form-label'>Street Address</label>
            <input
              className='form-control'
              name='entStreetAddress'
              value={formData.entStreetAddress || ''}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='row mb-3'>
          <div className='col-md-6'>
            <label className='form-label'>City</label>
            <input
              className='form-control'
              name='entCity'
              value={formData.entCity || ''}
              onChange={handleChange}
            />
          </div>
          <div className='col-md-3'>
            <label className='form-label'>State</label>
            <input
              className='form-control'
              name='entState'
              value={formData.entState || ''}
              onChange={handleChange}
            />
          </div>
          <div className='col-md-3'>
            <label className='form-label'>Zip</label>
            <input
              className='form-control'
              name='entZipCode'
              value={formData.entZipCode || ''}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='mb-3'>
          <label className='form-label'>Date Entered</label>
          <input
            className='form-control'
            name='dateEntered'
            type='date'
            value={formData.dateEntered?.slice(0, 10) || ''}
            onChange={handleChange}
          />
        </div>

        <div className='mt-4'>
          <button type='submit' className='btn btn-success me-2'>
            Save Changes
          </button>
          <button
            type='button'
            className='btn btn-secondary'
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEntertainerForm;
