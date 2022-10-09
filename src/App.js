import React from 'react';
import './index.scss';

const Modal = ({ toogle, onClickToogleModal }) => (
  <div className={`overlay animated ${toogle ? 'show' : ''}`}>
    <div className="modal">
      <svg onClick={onClickToogleModal} height="200" viewBox="0 0 200 200" width="200">
        <title />
        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
      </svg>
      <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt="Wow" />
    </div>
  </div>
);

function App() {
  const [toogle, setToogle] = React.useState(false);

  const onClickToogleModal = () => {
    setToogle(!toogle);
  };
  return (
    <div className="App">
      <button className="open-modal-btn" onClick={onClickToogleModal}>
        ✨ Открыть окно
      </button>
      <Modal toogle={toogle} onClickToogleModal={onClickToogleModal} />
    </div>
  );
}

export default App;
