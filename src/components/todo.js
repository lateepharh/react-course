import {useState} from "react";
import Modal from "./modal";
import Backdrop from "./backdrop";

function Todo(props){
   // useState is  a reacthook that will be called nd used inside a function componet functions and italways return an array with two element
   const [modalIsOpen, setModalIsOpen] = useState(false);
   function deleteClick(){
   //  alert("deleted");
   //  console.log(props.text);
   setModalIsOpen(true)

   }
   function closeModalHandler(){
      setModalIsOpen(false)
   }
   return(
      <div className="card">
         <h2>{props.text}</h2>
         <div className="actions">
            {/* <p>Helo</p> */}
           <button className="btn" onClick={deleteClick}>Delete</button>
        </div>
        {/* ? also performs the same function as the &&(and) we used for backdrop */}
        {modalIsOpen && <Backdrop onClick={closeModalHandler}></Backdrop>}
        {modalIsOpen ? <Modal oncancel={closeModalHandler} onConfirm={closeModalHandler}></Modal>: null}
    </div>
   )
}
export default Todo;