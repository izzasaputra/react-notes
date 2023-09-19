import React from 'react';
 
function ArchivedButton({ id, onArchive }) {
  return <button className='archive-button button-action' onClick={() => onArchive(id)}>Arsipkan</button>
}
 
export default ArchivedButton;