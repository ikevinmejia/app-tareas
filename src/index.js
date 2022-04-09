import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
todoList.todos.forEach(crearTodoHtml); // forma corta al tener solo un argumento
// todoList.todos.forEach(todo => crearTodoHtml(todo)); Forma larga

//console.log('todos', todoList.todos);