import * as types from '../constants/ActionTypes';
import * as AxiosConstants from '@/constants/AxiosConstants';

const initialState = {
    is_loading: true,
    food: {},
    success: "",
    error: ""
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_FOOD_SUCCESS:
            return {...state,
                is_loading: false,
                success: AxiosConstants.SUCCESS,
                food: action.data
            }
        case types.GET_FOOD_ERROR:
            return {...initialState,
                is_loading: false,
                error: action.err
            }

        case types.CREATE_FOOD_SUCCESS:
            return {...state,
                is_loading: false,
                success: AxiosConstants.SUCCESS,
                food: action.data
            }
        case types.CREATE_FOOD_ERROR:
            return {...initialState,
                is_loading: false,
                error: action.err
            }

        case types.UPDATE_FOOD_SUCCESS:
            return {...state,
                is_loading: false,
                success: AxiosConstants.SUCCESS,
                food: action.data
            }
        case types.UPDATE_FOOD_ERROR:
            return {...initialState,
                is_loading: false,
                error: action.err
            }
        
        case types.DELETE_FOOD_SUCCESS:
            return {...state,
                is_loading: false,
                success: AxiosConstants.SUCCESS,
                food: action.data
            }
        case types.DELETE_FOOD_ERROR:
            return {...initialState,
                is_loading: false,
                error: action.err
            }
        default:
            return {...state,
                is_loading: false
            };
    }
};

export default user;
