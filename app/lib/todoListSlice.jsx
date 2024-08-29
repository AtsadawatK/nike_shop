// lib/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    List: [], 

  };

export const todolistSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    addList : (state,action) => {
        state.List.push(action.payload)


    }
  },
});

// Export actions และ reducer
export const { addList  } = todolistSlice.actions;
export default todolistSlice.reducer;
