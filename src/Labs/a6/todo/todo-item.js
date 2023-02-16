const TodoItem = (props) => {
    return (
      <li>
        <input type="checkbox"
               defaultChecked={props.todo.done}/>
        {props.todo.title}
        ({props.todo.status})
      </li>
    );
   }
   export default TodoItem;