import * as types from '../constants/ActionTypes';
import * as AxiosConstants from '@/constants/AxiosConstants';
import { alertSuccess } from "@/utils/AlertUtil";
const initialState = {
    is_loading: true,
    show: {},
    success: "",
    error: ""
}

const deal = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_DEAL_SUCCESS:
            return {...state,
                is_loading: false,
                success: AxiosConstants.SUCCESS,
                show: action.data
            }
        case types.GET_DEAL_ERROR:
            return {...initialState,
                is_loading: false,
                error: action.err
            }

        case types.CREATE_DEAL_SUCCESS:
            alertSuccess();
            return {...state,
                is_loading: false,
                success: AxiosConstants.SUCCESS,
                show: action.data
            }
        case types.CREATE_DEAL_ERROR:
            return {...initialState,
                is_loading: false,
                error: action.err
            }

        case types.UPDATE_DEAL_SUCCESS:
            alertSuccess();
            return {...state,
                is_loading: false,
                success: AxiosConstants.SUCCESS,
                show: action.data
            }
        case types.UPDATE_DEAL_ERROR:
            return {...initialState,
                is_loading: false,
                error: action.err
            }
        
        case types.DELETE_DEAL_SUCCESS:
            return {...state,
                is_loading: false,
                success: AxiosConstants.SUCCESS,
                show: action.data
            }
        case types.DELETE_DEAL_ERROR:
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

export default deal;
