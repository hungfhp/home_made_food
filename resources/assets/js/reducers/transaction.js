import * as types from '../constants/ActionTypes';
import * as AxiosConstants from '@/constants/AxiosConstants';
import swal2 from "sweetalert2";

const initialState = {
    is_loading: true,
    data: {},
    success: "",
    error: ""
}

const transaction = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_TRANSACTION_SUCCESS:
            swal2({
                type: 'success',
                title: 'Success',
                showConfirmButton: false,
                heightAuto: true,
                timer: 1200
            });
            return {...state,
                is_loading: false,
                success: AxiosConstants.SUCCESS,
                data: action.data,
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
