import * as types from '../constants/ActionTypes';
import * as AxiosConstants from '@/constants/AxiosConstants';
import swal2 from "sweetalert2";

const initialState = {
    is_loading: true,
    success: "",
    error: "",
    show: {
        is_loading: true,
        data: {}
    }
}

const transaction = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TRANSACTION_SUCCESS:
            return {...state,
                is_loading: false,
                success: AxiosConstants.SUCCESS,
                show: {
                    is_loading: false,
                    data: action.data
                }
            }
        case types.GET_TRANSACTION_ERROR:
            return {...initialState,
                is_loading: false,
                error: action.err
            }
        
        case types.UPDATE_TRANSACTION_SUCCESS:
        console.log(action.data)
            return {...state,
                is_loading: false,
                success: AxiosConstants.SUCCESS
                // show: {
                //     is_loading: false,
                //     data: action.data
                // }
            }
        case types.UPDATE_TRANSACTION_ERROR:
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

export default transaction;
