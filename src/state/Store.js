import { configureStore } from '@reduxjs/toolkit'

import { userReducer } from './User.js';



const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
    reducer: {
        user: userReducer,
    },
});

export default store;