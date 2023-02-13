import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Todo } from 'types';

axios.defaults.baseURL = 'https://637b70f56f4024eac20da688.mockapi.io';

export const fetchTasks = createAsyncThunk<
  Todo[],
  undefined,
  { rejectValue: string }
>('tasks/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('/tasks');
    return response.data;
  } catch (e) {
    return rejectWithValue('Fail to fetch');
  }
});

export const addTask = createAsyncThunk<Todo, string, { rejectValue: string }>(
  'tasks/addTask',
  async (text, { rejectWithValue }) => {
    try {
      const response = await axios.post('/tasks', { text });
      return response.data;
    } catch (e) {
      return rejectWithValue('Fail to add task');
    }
  }
);

export const deleteTask = createAsyncThunk<
  Todo['id'],
  Todo['id'],
  { rejectValue: string }
>('tasks/deleteTask', async (taskId, thunkAPI) => {
  try {
    const response = await axios.delete(`/tasks/${taskId}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Fail to delete, try again');
  }
});

export const toggleCompleted = createAsyncThunk<
  Todo,
  Todo,
  { rejectValue: string }
>('tasks/toggleCompleted', async (task, thunkAPI) => {
  try {
    const response = await axios.put(`/tasks/${task.id}`, {
      completed: !task.completed,
    });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Impossible to update todo with id');
  }
});
