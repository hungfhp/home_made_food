import * as types from '../constants/ActionTypes';
import * as AxiosConstants from '@/constants/AxiosConstants';

const initialState = {
    is_loading: true,
    id: "",
    name: "",
    email: "",
    address: "",
    phone: "",
    success: "",
    error: "",
    cooked_foods: {
        is_loading: true,
        data: {},
        pagination: {}
    },
    liked_foods: {
        is_loading: true,
        data: {},
        pagination: {}
    },
    favorited_foods: {
        is_loading: true,
        data: {},
        pagination: {}
    }
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER_SUCCESS:
            return {...state,
                is_loading: false,
                id: action.user.id,
                name: action.user.name,
                email: action.user.email,
                address: action.user.address,
                phone: action.user.phone,
                success: AxiosConstants.SUCCESS
            }
        case types.GET_USER_ERROR:
            return {...initialState,
                is_loading: false,
                error: action.err
            }

        case types.GET_COOKED_FOODS_SUCCESS:
            return {...state,
                cooked_foods: {
                    is_loading: false,
                    data: action.data.data,
                    pagination: action.data.pagination
                },
                success: AxiosConstants.SUCCESS
            }
        case types.GET_COOKED_FOODS_ERROR:
            return {...initialState,
                cooked_foods: {
                    is_loading: false
                },
                error: action.err
            }
            
        case types.GET_LIKED_FOODS_SUCCESS:
            return {...state,
                liked_foods: {
                    is_loading: false,
                    data: action.data.data,
                    pagination: action.data.pagination
                },
                success: AxiosConstants.SUCCESS
            }
        case types.GET_LIKED_FOODS_ERROR:
            return {...initialState,
                liked_foods: {
                    is_loading: false
                },
                error: action.err
            }

        // case types.GET_FAVORITED_FOODS_SUCCESS:
        //     return {...state,
        //         favorited_foods: {
        //             is_loading: false,
        //             data: action.data.data,
        //             pagination: action.data.pagination
        //         },
        //         success: AxiosConstants.SUCCESS
        //     }
        // case types.GET_FAVORITED_FOODS_ERROR:
        //     return {...initialState,
        //         favorited_foods: {
        //             is_loading: false
        //         },
        //         error: action.err
        //     }
        default:
            return {...state,
                is_loading: false
            };
    }
};

export default user;
