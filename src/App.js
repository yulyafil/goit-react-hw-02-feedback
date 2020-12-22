import React, { Component } from 'react';
import Section from './components/Section';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker';
import ToDoList from './components/ToDoList'



// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Посмотреть интенсив', completed: false },
      { id: 'id-2', text: 'Написать цель на месяц', completed: false },
      { id: 'id-3', text: 'Проработать страхи', completed: true },
      { id: 'id-4', text: 'Верить', completed: false },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0,
    );
    const inWorkToDoCount = todos.reduce((total, todo) => (!todo.completed ? total + 1 : total), 0,
    );
    return (
    <Section title="Please leave feedback">
       {/* <Counter />
      <Dropdown /> 
      <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <p>Общее кол-во целей: {totalTodoCount}</p>
          <p>Выполненные цели: { completedTodoCount}</p>
          <p>Цели в работе: { inWorkToDoCount}</p>
        </div>
        <ToDoList todos={todos} onDeleteTodo={this.deleteTodo} />
        <button onClick={event => console.log(event)}>Click me!</button>

    </Section>
 
  );
  }
}

export default App;




