import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

  export const sendUserRegister = createAsyncThunk('REGISTER', (form) => {
    return axios
      .post('http://localhost:3001/api/user/createUser', form)
      .then((res) => console.log('RES.DATA =>', res.data));
  });

  export const sendRegister = createAsyncThunk('REGISTER', (form) => {
    return axios
      .post('http://localhost:3001/api/user/getUsers', form)
      .then((res) => console.log('RES.DATA =>', res.data));
  });
  
  export const userReducer = createReducer(
    {},
    {    
      [sendUserRegister.fulfilled]: (state, action) => action.payload,
      [sendRegister.fulfilled]: (state, action) => action.payload,
    }
  );