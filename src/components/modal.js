function Modal(props){
   function cancelButton(){
      props.oncancel()
   }
   function ConfirmButton(){
      props.onConfirm()
   }
   return (
      <div className="modal">
         <p>Are you sure?</p>
         <button className="btn btn--alt" onClick={cancelButton}>Cancel</button>
         <button className="btn " onClick={ConfirmButton}>Confirm</button>
         
      </div>
   )
}
export default Modal;