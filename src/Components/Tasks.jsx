import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoTask from "./todoTask";
import ProgressTask from "./ProgressTask";
import DoneTask from "./doneTask";
import { toast } from "react-hot-toast";

const Tasks = () => {
  const [Todo, setTodo] = useState([]);
  const [InProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  // fetching data from database
  useEffect(() => {
    axios
      .get(`https://task-manager-server-alpha-ecru.vercel.app/tasks`)
      .then((response) => {
        const Data = response.data;

        // filtering todo data
        const todoData = Data.filter((data) => data.options === "Todo");
        setTodo(todoData);

        // filtering in progress data
        const progressData = Data.filter(
          (data) => data.options === "In Progress"
        );
        setInProgress(progressData);

        // filtering done data
        const doneData = Data.filter((data) => data.options === "Done");
        setDone(doneData);
      });
  }, [Todo, InProgress, done]);

  // delete todo
  const deleteTodo = (id) => {
    console.log(id);
    axios
      .delete(
        `https://task-manager-server-alpha-ecru.vercel.app/delete-todo/${id}`
      )
      .then((response) => {
        console.log(response.data);
        toast.success("Task Deleted");
      });
  };

  // delete progress
  const deleteProgress = (id) => {
    axios
      .delete(
        `https://task-manager-server-alpha-ecru.vercel.app/delete-progress/${id}`
      )
      .then((response) => {
        console.log(response.data);
        toast.success("Task Deleted");
      });
  };

  // delete done
  const deleteDone = (id) => {
    axios
      .delete(
        `https://task-manager-server-alpha-ecru.vercel.app/delete-done/${id}`
      )
      .then((response) => {
        console.log(response.data);
        toast.success("Task Deleted");
      });
  };

  // update todo
  const updateTodo = (id) => {
    axios
      .patch(
        `https://task-manager-server-alpha-ecru.vercel.app/update-todo/${id}`
      )
      .then((response) => {
        console.log(response.data);
        toast.success("Marked as done");
      });
  };

  // update progress
  const updateProgress = (id) => {
    axios
      .patch(
        `https://task-manager-server-alpha-ecru.vercel.app/update-progress/${id}`
      )
      .then((response) => {
        console.log(response.data);
        toast.success("Marked as done");
      });
  };

  return (
    <div className="max-w-[1280px] mx-auto">
      <h1 className="text-center my-8 font-semibold text-2xl">Task list</h1>
      <hr className="md:mx-[100px]" />
      <div className="max-w-[1200px] items-center justify-center  md:mx-[95px] gap-5 grid grid-cols-1 md:grid-cols-3 mx-auto mt-5 mb-10">
        {/* todo card */}
        <div className="md:w-[350px]  bg-slate-300 rounded-lg shadow">
          <div className="px-3">
            <h1 className="my-3 font-semibold text-center">
              Todo <span>{Todo.length}</span>
            </h1>
            {/* single card */}
            {Todo.map((todoTask) => (
              <TodoTask
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
                todoTask={todoTask}
                key={todoTask._id}
              ></TodoTask>
            ))}
          </div>
        </div>
        {/* in progress card */}
        <div className="md:w-[350px] bg-slate-300 rounded-lg shadow">
          <div className="px-3">
            <h1 className="my-3 font-semibold text-center">
              In progress {InProgress.length}
            </h1>

            {/* single card */}
            {InProgress.map((progressTask) => (
              <ProgressTask
                updateProgress={updateProgress}
                deleteProgress={deleteProgress}
                progressTask={progressTask}
                key={progressTask._id}
              ></ProgressTask>
            ))}
          </div>
        </div>
        {/* done card */}
        <div className="md:w-[350px]  bg-slate-300 rounded-lg shadow">
          <div className="px-3">
            <h1 className="my-3 font-semibold text-center">
              Done {done.length}
            </h1>

            {/* single card */}
            {done.map((doneTask) => (
              <DoneTask
                deleteDone={deleteDone}
                doneTask={doneTask}
                key={doneTask._id}
              ></DoneTask>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
