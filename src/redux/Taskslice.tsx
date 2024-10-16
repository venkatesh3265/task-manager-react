import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
    id: number;
    title: string;
    completed: boolean;
  }
  
  interface TaskState {
    tasks: Task[];
  }
  
  const initialState: TaskState = {
    tasks: []
  };

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task[]>) => {
       state.tasks.push({
        id: state.tasks.length + 1,
        title: action.payload,
        completed: false,
       })
      },
    getTask: (state, action: PayloadAction<Task[]>) => {
        state.tasks = action.payload;
      },
      deleteTask: (state, action: PayloadAction<Task[]>) => {
      state.tasks = state.tasks.filter(task => task.id!== action.payload);

      }
  },
});

// Action creators are generated for each case reducer function
export const { getTask,addTask ,deleteTask} = taskSlice.actions;

export default taskSlice.reducer;

