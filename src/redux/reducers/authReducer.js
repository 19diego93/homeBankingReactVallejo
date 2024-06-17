import { createReducer } from "@reduxjs/toolkit";
import { login as loginAction, logout } from "../actions/authActions";

const initialState = {
    loggedIn: false,
    token: "",
    expiresIn: "",
    user: {
        name: "",
        email: ""
    }

};

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(loginAction, (state, action) => {

            return {
                ...state,
                user: {
                    name: action.payload.name,
                    email: action.payload.email
                },
                token: action.payload.token,
                loggedIn: action.payload.loggedIn,
                expiresIn: action.payload.expirationIn
            }
        })
        .addCase(logout, (state, action) => {
            return {
                initialState
            }
        })
});

export default authReducer;