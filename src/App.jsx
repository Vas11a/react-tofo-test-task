import React from 'react';
import plus from './imgs/plus.png'
import bin from './imgs/bin.png'
import rewrite from './imgs/pencil.png'

function App() {
  return (
    <div className='wrapper'>
      <header className="header">
        <div className="button-block">
          <div className="button add">
            <img src={plus} alt="Add" />
          </div>
          <div className="button remove">
            <img src={bin} alt="Rem" />
          </div>
          <div className="button rewrite">
            <img src={rewrite} alt="Rem" />
          </div>
        </div>
        <div className="search-bloc">
          <input type="text" placeholder='search' className="search" />
        </div>
      </header>
      <main className="main">
        <aside className="asside">
          <div className="note">
            <div className="note-title">Doooitt now</div>
            <div className="note-data">25/06/2022</div>
          </div>
          <div className="note">
            <div className="note-title">Doooitt now</div>
            <div className="note-data">25/06/2022</div>
          </div>
          <div className="note">
            <div className="note-title">Doooitt now</div>
            <div className="note-data">25/06/2022</div>
          </div>
          <div className="note">
            <div className="note-title">Doooitt now</div>
            <div className="note-data">25/06/2022</div>
          </div>
          <div className="note">
            <div className="note-title">Doooitt now</div>
            <div className="note-data">25/06/2022</div>
          </div>
          <div className="note">
            <div className="note-title">Doooitt now</div>
            <div className="note-data">25/06/2022</div>
          </div>
          <div className="note">
            <div className="note-title">Doooitt now</div>
            <div className="note-data">25/06/2022</div>
          </div>
          <div className="note">
            <div className="note-title">Doooitt now</div>
            <div className="note-data">25/06/2022</div>
          </div>
          <div className="note">
            <div className="note-title">Doooitt now</div>
            <div className="note-data">25/06/2022</div>
          </div>
        </aside>
        <section className="section">
          <div className="data-todo">12/05/7098</div>
          <input type="text" placeholder='title' className="todo-title" />
          <textarea placeholder='text' className="write-filed"></textarea>
        </section>
      </main>
    </div>
  );
}

export default App;
