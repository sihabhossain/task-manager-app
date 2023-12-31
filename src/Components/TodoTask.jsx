import React from "react";

const TodoTask = ({ todoTask, deleteTodo, updateTodo }) => {
  return (
    <div>
      <div className="h-[180px] bg-white mb-3 p-5 rounded-lg">
        <div>
          <h2 className="font-semibold">{todoTask.title}</h2>
          <p className="text-gray-500">{todoTask.description}</p>
        </div>
        <div className="my-3">
          <button
            onClick={() => updateTodo(todoTask._id)}
            className="mr-3 px-3 py-1 bg-blue-700 rounded-lg font-semibold text-white"
          >
            Mark as done
          </button>
          <button
            onClick={() => deleteTodo(todoTask._id)}
            className="px-3 py-1 bg-pink-700 font-semibold text-white rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoTask;
