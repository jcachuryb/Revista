import React from 'react';
import './App.css';

class ListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,

    }
  }

  toggleCheck() {
    var value = !this.state.isChecked;
    this.setState({ isChecked: value });
    this.props.toggleCheck(value)
  }

  render() {
    var checkedCss = this.state.isChecked ? "task-done" : "task-pending";


    return (
      <li className={checkedCss}>
        <label className="container">
          {this.props.description}

          <input type="checkbox"
            onClick={() => { this.toggleCheck() }}
          />
          <span className="checkmark"></span>
        </label>
      </li>);
  }

}

class NewTask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      description: ""
    }
    this.handleKeyUp = this.onKeyPressed.bind(this);
  }
  onKeyPressed(event) {
    if (event.key === "Enter" && event.target.value !== "") {
      this.onFinish();
      return;
    }
    this.updateTaskDescription(event.target.value)
  }

  updateTaskDescription(value) {
    this.setState({
      description: value
    });

  }

  onFinish() {
    if (this.state.description !== "") {
      document.getElementById("textnewTask").value = "";
      this.props.onFinish(this.state.description);
    }
  }

  onDeletion() {

  }

  resetComponent() {
    this.updateTaskDescription("");
  }

  render() {
    return (
      <div className="new-task">
        <input  type="text" 
                placeholder="Type in a new task..."
                onKeyUp={this.handleKeyUp} />
        <button onClick={() => {
          this.onFinish()
        }}> Add Task</button>
      </div>

    );
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [{ description: 'Primera tarea' }]
    }
  }

  addListItem(taskDescription) {
    var tasks = this.state.tasks.slice();
    tasks.push({ description: taskDescription })
    this.setState({ tasks: tasks });
  }

  taskDone(id) {

  }

  taskDeleted(id) {
  }


  render() {
    return (<div className="App">
      <header className="App-header">
        JC TODO List
      </header>
      <div className="list-block">
        <ul>
          {this.state.tasks.map((item, i) => <ListItem description={item.description} toggleCheck={(value) => { this.taskDone(i) }} />)}
          <NewTask onFinish={(value) => { this.addListItem(value) }} />
        </ul>
      </div>
    </div>);
  };
}


export default App;

