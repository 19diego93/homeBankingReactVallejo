import { createAction } from "@reduxjs/toolkit";

export const login = createAction("LOGIN", (data) => {
    const clearUser = {
        name: data.name,
        email: data.email,
        token: data.token,
        expirationIn: new Date(Date.now() + 1000 * 60 * 60).toISOString(),
        loggedIn: true
    }
    return { payload: clearUser }
});

export const logout = createAction("LOGOUT"); 
