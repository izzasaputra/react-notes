import React from 'react';
 
function NotArchivedButton({ id, onNotArchive }) {
  return <button className='not-archive-button button-action' onClick={() => onNotArchive(id)}>Pindahkan</button>
}
 
export default NotArchivedButton;