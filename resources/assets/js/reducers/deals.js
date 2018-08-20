import * as types from '../constants/ActionTypes';
import * as AxiosConstants from '@/constants/AxiosConstants';

const initialState = {
    is_loading: true,
    newest: {
        is_loading: true,
        data: {}
    },
    success: "",
    error: ""
}

const deals = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_DEALS_NEWEST_SUCCESS:
            return {...state,
                is_loading: false,
                success: AxiosConstants.SUCCESS,
                newest: {
                    is_loading: false,
                    data: action.data
                }
            }
        case types.GET_DEALS_NEWEST_ERROR:
            console.log(action.err);
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

export default deals;
