import React from 'react';
 
function DeleteButton({ id, onDelete }) {
  return <button className='delete-button button-action' onClick={() => onDelete(id)}>Delete</button>
}
 
export default DeleteButton;