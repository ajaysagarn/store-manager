import React from 'react';
import AppShell from './widgets/appshell/AppShell';
import AppSnackbar from './widgets/Snackbar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppShell/>
        <AppSnackbar/>
      </header>
    </div>
  );
}

export default App;
