import { useState, useEffect } from "react";


const useTask = () => {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const removeTask = (id) => {
        setTasks((tasks) =>
            tasks.filter((task) => task.id !== id)
        );
    };

    const toggleDone = (id) => {
        setTasks((tasks) =>
            tasks.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        );
    };

    const doneAllTasks = () => {
        setTasks((tasks) =>
            tasks.map((task) => ({ ...task, done: true }))
        );
    };

    const addNewTask = (content) => {
        setTasks((tasks) => [
            ...tasks,
            {
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
                content,
                done: false,
            },
        ]);
    };

    return [tasks, removeTask, toggleDone, doneAllTasks, addNewTask];
};

export default useTask;