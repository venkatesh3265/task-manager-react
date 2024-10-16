import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './Taskslice'; // Import the task slice you created

// Configure the Redux store
const store = configureStore({
  reducer: {
    task: taskReducer // Add the task reducer
  }
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
