import React from 'react';
import SimpleTable from './components/SimpleTable';

function App() {
  // Beispieldaten
  const tableData = [
    { id: 1, vorname: "Max", nachname: "Mustermann" },
    { id: 2, vorname: "Anna", nachname: "Schmidt" }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Meine einfache Tabelle</h1>
      <SimpleTable data={tableData} />
    </div>
  );
}

export default App;
