import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
import { Button, Segment, Icon } from 'semantic-ui-react'

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <Segment>
      <h2>{props.text}</h2>
      <div>
        <Button animated onClick={deleteHandler}>
      <Button.Content hidden>Delete</Button.Content>
      <Button.Content visible>
        <Icon name='trash' />
      </Button.Content>
    </Button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </Segment>
  );
}

export default Todo;