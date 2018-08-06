import * as types from '../constants/ActionTypes';
import * as AxiosConstants from '@/constants/AxiosConstants';

const emptyState = {
    isAuth: false,
    b_token: "",
    user: {},
    success: "",
    error: ""
}

const initialState = {...emptyState,
    isAuth: localStorage.getItem("b_token") ? true : false,
    b_token: localStorage.getItem("b_token")
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            {
                localStorage.setItem("b_token", action.user.b_token);
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

                return {...emptyState};
            }
        case types.GET_PROFILE_SUCCESS:
            {
                return { ...state,
                    isAuth: true,
                    user: {...action.payload},
                    success: AxiosConstants.SUCCESS_PROFILE
                }
            }
        case types.GET_PROFILE_ERROR:
        
            {
                console.log('sdfisdhfsdfsdfsdfsd');
                return { ...emptyState,
                    isAuth: false,
                    error: AxiosConstants.ERROR_PROFILE
                };
            }
        default:
            {
                return state;
            }
    }
};

export default auth;