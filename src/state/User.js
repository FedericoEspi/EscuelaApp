import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

  export const sendUserRegister = createAsyncThunk('REGISTER', (form) => {
    return axios
      .post('http://localhost:3001/user/register', form)
      .then((res) => console.log('RES.DATA =>', res.data));
  });

  export const getUsers = createAsyncThunk('REGISTER', (form) => {
    return axios
      .get('http://localhost:3001/api/user/getUsers', form)
      .then((res) => console.log('RES.DATA =>', res.data));
  });
  
  export const userReducer = createReducer(
    {},
    {    
      [sendUserRegister.fulfilled]: (state, action) => action.payload,
      [getUsers.fulfilled]: (state, action) => action.payload,
    }
  );