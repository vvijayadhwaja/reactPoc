import { Component } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { Button, Segment, Icon, Progress } from "semantic-ui-react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setModalIsOpen: false
    };
    this.state = { percent: 5 }
    this.deleteHandler = this.deleteHandler.bind(this);


  this.increment = () =>
  this.setState((prevState) => ({
    percent: prevState.percent >= 100 ? 0 : prevState.percent + 20,
  }))
  }

  deleteHandler() {
    this.setState({ setModalIsOpen: true })
  }

  closeModalHandler= ()  => {
    this.setState({ setModalIsOpen: false })
  }
  // const [modalIsOpen, setModalIsOpen] = useState(false);
render() {
    return (
      <Segment>
        <h2>{this.props.text}</h2>
        <div>
          <h4>Record your Progress!!</h4>
          <Progress percent={this.state.percent} indicating />
          <Button onClick={this.increment}>Increment</Button>
        </div>
        <br/>
        <div>
          <Button animated color="red"  
          onClick = {this.deleteHandler}        >
            <Button.Content hidden>Delete</Button.Content>
            <Button.Content visible>
              <Icon name="trash" />
            </Button.Content>
          </Button>
        </div>
      {this.state.setModalIsOpen && (
        <Modal onCancel={() => this.closeModalHandler()} onConfirm={() => this.closeModalHandler()} />
      )}
      {this.state.setModalIsOpen && <Backdrop onCancel={() => this.closeModalHandler()} />}
    </Segment>
  );

  }

}

export default Todo;
