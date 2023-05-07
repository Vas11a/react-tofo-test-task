import React from 'react';
import Sidebar from './components/Sidebar';
import ListItem from './components/ListItem';
import Workspace from './components/Workspace';

function App() {
  return (
    <div className='wrapper'>
      <Sidebar/>
      <main className="main">
        <ListItem/>
        <Workspace/>
      </main>
    </div>
  );
}

export default App;
