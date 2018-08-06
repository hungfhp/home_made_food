import * as types from '../constants/ActionTypes';
import * as AxiosConstants from '@/constants/AxiosConstants';
import axios from "axios";
import {getHeaders} from "@/utils/ApiUtil";

const initialState = {
    isAuth: localStorage.getItem("b_token") ? true : false,
    b_token: localStorage.getItem("b_token"),
    user: {},
    success: "",
    error: ""
};

var _auth = initialState;

const auth = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            {
                return { ...state,
                    b_token: action.user.b_token,
                    isAuth: true,
                    user: action.user,
                    success: AxiosConstants.SUCCESS_LOGIN
                };
            }
        case types.LOGOUT_SUCCESS: 
            {
                localStorage.clear();
                return initialState;
            }
        case types.PROFILE:
            {
                let user = profile();
                if (user) {
                    return { ...state,
                        isAuth: true,
                        user: user,
                        success: AxiosConstants.SUCCESS_PROFILE
                    }
                } else {
                    return { ...state,
                        isAuth: false,
                        error: err
                    };
                }
            }
        default:
            {
                return state;
            }
    }
};

var profile = state => {
    axios
        .get("/api/profile", {
            headers: getHeaders()
        })
        .then(res => {
            return res.data.success;
        }).catch(err => {
            return null;
        })
}









export default auth;
