function PingConfirm(props) {
    function cancelHandler() {
      props.onCancel();
    }
      return (
        <div className='modal'>
          <p>{props.text}</p>
          <button className='btnPing' onClick={cancelHandler}>Cancel</button>
        </div>
      );
    }
    
    export default PingConfirm;