import React from 'react';

function Preloader() {
  return (
    <div className="flex justify-center">
      <button
        disabled
        type="button"
        className="button button--preloader button--m button--plain"
      >
        <span className="dots" />
      </button>
    </div>
  );
}

export default Preloader;
