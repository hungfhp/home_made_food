import * as types from '../constants/ActionTypes';
import * as AxiosConstants from '@/constants/AxiosConstants';

const initialState = {
    is_loading: true,
    index: {
        is_loading: true,
        data: {},
        pagination: {}
    },
    recent: {
        is_loading: true,
        data: {},
        pagination: {}
    },
    history: {
        is_loading: true,
        data: {},
        pagination: {}
    },
    total_cart: {
        is_loading: true,
        data: {}
    },
    success: "",
    error: ""
}

const transactions = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TRANSACTIONS_SUCCESS:
            return {...state,
                is_loading: false,
                success: AxiosConstants.SUCCESS,
                index: {
                    is_loading: false,
                    data: action.data.data,
                    pagination: action.data.pagination
                }
            }
        case types.GET_TRANSACTIONS_ERROR:
            return {...initialState,
                is_loading: false,
                error: action.err
            }

        case types.GET_TRANSACTIONS_RECENT_SUCCESS:
            return {...state,
                is_loading: false,
                success: AxiosConstants.SUCCESS,
                recent: {
                    is_loading: false,
                    data: action.data.data,
                    pagination: action.data.pagination
                }
            }
        case types.GET_TRANSACTIONS_RECENT_ERROR:
            return {...initialState,
                is_loading: false,
                error: action.err
            }

        case types.GET_TRANSACTIONS_HISTORY_SUCCESS:
            return {...state,
                is_loading: false,
                success: AxiosConstants.SUCCESS,
                history: {
                    is_loading: false,
                    data: action.data.data,
                    pagination: action.data.pagination
                }
            }
        case types.GET_TRANSACTIONS_HISTORY_ERROR:
            return {...initialState,
                is_loading: false,
                error: action.err
            }

        case types.GET_TRANSACTIONS_HISTORY_TOTAL_SUCCESS:
            return {...state,
                is_loading: false,
                success: AxiosConstants.SUCCESS,
                total_cart: {
                    is_loading: false,
                    data: action.data
                }
            }
        case types.GET_TRANSACTIONS_HISTORY_TOTAL_ERROR:
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

export default transactions;
