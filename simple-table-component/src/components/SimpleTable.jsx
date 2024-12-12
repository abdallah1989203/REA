import React from 'react';

function SimpleTable({ data }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Vorname</th>
          <th>Nachname</th>
        </tr>
      </thead>
      <tbody>
        {data.map(person => (
          <tr key={person.id}>
            <td>{person.id}</td>
            <td>{person.vorname}</td>
            <td>{person.nachname}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SimpleTable;
