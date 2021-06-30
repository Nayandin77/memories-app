import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
    try {
        console.log("HEre 1");
        const { data } = await api.signIn(formData);
        console.log("HEre 2");
        dispatch({ type: AUTH, data });

        router.push('/');
    } catch (error) {
        console.log(error);
    }
};

    export const signup = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        router.push('/');
    } catch (error) {
        console.log(error);
    }
};