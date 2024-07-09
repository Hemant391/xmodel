import './App.css';
import React, {  useState } from 'react';
import Modal from './Model';
import Form from './Form';

function App() {
  
  const[showmodal,setShowmodal]=useState(false)
  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button type="button" onClick={()=>setShowmodal(!showmodal)} >Open Form</button>
      
<div className="modal">

<div className="modal-content">
      <Modal isOpen={showmodal} setIsOpen={setShowmodal}>
        <Form  setIsOpen={setShowmodal}  />
      </Modal>
</div>

</div>
    </div>
  );
}

export default App;
