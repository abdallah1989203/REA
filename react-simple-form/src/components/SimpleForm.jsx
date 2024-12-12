import React, { useState } from 'react';

function SimpleForm() {
  // State für die Formularfelder
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handler für Änderungen in den Eingabefeldern
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handler für das Absenden des Formulars
  const handleSubmit = (e) => {
    e.preventDefault(); // Verhindert das normale Absenden des Formulars
    alert(`Formular abgesendet!\n
      Name: ${formData.name}\n
      Email: ${formData.email}\n
      Nachricht: ${formData.message}`);
  };

  return (
    <div>
      <h2>Kontaktformular</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Nachricht:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Absenden</button>
      </form>
    </div>
  );
}

export default SimpleForm;
