import React, { useReducer, useState } from 'react';
const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        todos: [...state.todos, { text: action.payload, complete: false }],
        todoCounts: state.todoCounts + 1,
      };
    case 'toggle':
      return {
        todoCounts: state.todoCounts,
        todos: state.todos.map((v, i) => {
          if (i === action.idx) {
            v.complete = !v.complete;
          }
          return v;
        }),
      };
    default:
      return state;
  }
};
export const App3 = () => {
  const [{ todos, todoCounts }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCounts: 0,
  });
  const [text, setText] = useState('');
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: 'add',
            payload: text,
          });
          setText('');
        }}
      >
        <input
          type='text'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <span>todo有{todoCounts}个</span>
      </form>
      <div>
        {todos.map((v, i) => (
          <div
            style={{ textDecoration: v.complete ? 'line-through' : '' }}
            onClick={() => {
              dispatch({
                type: 'toggle',
                idx: i,
              });
            }}
            key={v.text}
          >
            {v.text}
          </div>
        ))}
      </div>
    </div>
  );
};
