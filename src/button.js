import React from 'react';

function Button() {

  function refreshPage() {
    window.location.reload(false);

  }

  return (
    <div>
      <button 
      className="button" onClick={refreshPage}>CLICK FOR A MEAL!
      </button>
    </div>
  );
}
export default Button;