import axios from "axios";
import React from "react";
import { Toaster, toast } from "react-hot-toast";

const Form = () => {
  const handleSubmit = () => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const options = form.option.value;

    // send data to database
    axios
      .post(`http://localhost:5000/tasks`, {
        title,
        description,
        options,
      })
      .then((response) => {
        console.log(response);
        toast.success("Task added successfully");
        form.reset();
      });
  };

  return (
    <div className="text-center mt-10">
      <form
        onSubmit={() => handleSubmit()}
        className="mx-auto max-w-sm bg-blend-normal shadow py-14 rounded-md"
      >
        <input
          className="bg-red-50 outline-none p-2 rounded-md w-64 shadow"
          type="text"
          name="title"
          id=""
        />
        <br />
        <input
          className="bg-red-50 mt-5 p-2 outline-none rounded-md w-64 h-20 shadow"
          type="text"
          name="description"
          id=""
        />
        <br />
        <select
          name="option"
          id=""
          className="bg-red-50 p-2 rounded-md w-64 mt-5 shadow"
        >
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <br />

        <button className="mt-6 font-semibold text-white bg-pink-700 w-64 py-2 rounded-md">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Form;
