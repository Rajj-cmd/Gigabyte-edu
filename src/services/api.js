const API_URL = 'http://localhost:5000/api';

export const submitContactForm = async (formData) => {
  try {
    console.log('Submitting contact form:', formData);
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Failed to submit contact form');
    }

    return await response.json();
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error;
  }
};

export const submitRegistration = async (formData) => {
  try {
    console.log('Submitting registration form:', formData);
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country || '',
        program: formData.program || '',
        university: formData.university || '',
        message: formData.message || ''
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit registration');
    }

    const result = await response.json();
    console.log('Registration submission result:', result);
    return result;
  } catch (error) {
    console.error('Registration submission error:', error);
    throw error;
  }
};
