import * as types from '../constants/ActionTypes';
import * as AxiosConstants from '@/constants/AxiosConstants';
import axios from "axios";
import {getHeaders} from "@/utils/ApiUtil";

const initialState = {
    isAuth: localStorage.getItem("b_token") ? true:false,
    b_token: localStorage.getItem("b_token"),
    user: {},
    success: "",
    error: ""
};

var _auth = initialState;

const auth = (state = _auth, action) => {
    switch (action.type) {
        case types.PROFILE: {
            return _auth = profile(state);
        }
        case types.LOGIN: {
            return _auth = login(state, action.email, action.password);
        }
        default: {
            return state;
        }
    }
};

var profile = state => {
    return axios
        .get("/api/users/1", {
            headers: getHeaders()
        })
        .then(res => {
            let user = res.data.success;
            return { ...state,
                isAuth: true,
                user: user,
                success: AxiosConstants.PROFILE_SUCCESS
            };
        }).catch(err => {
            return { ...state,
                isAuth: false,
                error: err
            };
        })
}

var login = async (state, email, password) => {
    console.log("login axios");
    await axios
        .post("/api/login", {
            email: email,
            password: password
        })
        .then(res => {
            localStorage.setItem("b_token", res.data.success.b_token);
            history.back();
            console.log("login res");
            return { ...state,
                isAuth: true,
                user: {
                    user_id: res.data.success.user_id,
                    name: res.data.success.name
                },
                success: AxiosConstants.SUCCESS
            };
        })
        .catch(error => {
            localStorage.clear();
            return { ...state,
                isAuth: false,
                error: AxiosConstants.ERROR
            };
        });
}

export default auth;
