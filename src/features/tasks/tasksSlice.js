import {createSlice} from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'tasks',
    initialState:{
        tasks:[],
        hideDone: false,
    },
    reducers: {
        addTask:({tasks}, {payload})=>{
            tasks.push(payload);
        },
        toggleHideDone: state=>{
            state.hideDone = !state.hideDone
        },
        toggleDone: ({tasks}, {payload})=>{
            const index = tasks.findIndex(task => task.id === payload);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({tasks}, {payload})=>{
            const index = tasks.findIndex(({id}) => id === payload);
            tasks.splice(index,1);
        },
        doneAllTasks:({tasks})=>{
           tasks.forEach((task)=>{
            task.done = true;
           })
        },
    }
});

export const {addTask, toggleHideDone,toggleDone,removeTask,doneAllTasks} = taskSlice.actions;
export const selectTasks = state =>state.tasks;
export default taskSlice.reducer;

