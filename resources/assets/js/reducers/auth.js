import * as types from '../constants/ActionTypes';
import * as AxiosConstants from '@/constants/AxiosConstants';
import swal2 from "sweetalert2";

const emptyState = {
    isAuth: false,
    b_token: "",
    user: {},
    success: "",
    error: ""
}

const initialState = { ...emptyState,
    isAuth: localStorage.getItem("b_token") ? true : false,
    b_token: localStorage.getItem("b_token")
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_SUCCESS:
            {
                localStorage.setItem("b_token", action.user.b_token);
                window.location.replace('/');
                return { ...state,
                    b_token: action.user.b_token,
                    isAuth: true,
                    user: action.user,
                    success: AxiosConstants.SUCCESS
                };
            }
        case types.REGISTER_ERROR:
            {
                localStorage.clear();
                return { ...emptyState,
                    isAuth: false,
                    error: action.err
                };
            }
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

                return { ...emptyState
                };
            }
        case types.GET_PROFILE_SUCCESS:
            {
                return { ...state,
                    isAuth: true,
                    user: { ...action.payload
                    },
                    success: AxiosConstants.SUCCESS_PROFILE
                }
            }
        case types.GET_PROFILE_ERROR:
            {
                return { ...emptyState,
                    isAuth: false,
                    error: AxiosConstants.ERROR_PROFILE
                };
            }
        case types.UPDATE_PROFILE_SUCCESS:
            {
                swal2({
                    type: 'success',
                    title: 'Saved',
                    showConfirmButton: false,
                    heightAuto: true,
                    timer: 1200
                });
                return { ...state,
                    isAuth: true,
                    user: {...action.user},
                    success: AxiosConstants.SUCCESS_PROFILE
                }
            }
        case types.UPDATE_PROFILE_ERROR:
            {
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