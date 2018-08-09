import * as types from '../constants/ActionTypes';
import * as AxiosConstants from '@/constants/AxiosConstants';

const initialState = {
    name: "",
    email: "",
    address: "",
    phone: "",
    success: "",
    error: ""
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER_SUCCESS:
            return {...state,
                name: action.user.name,
                email: action.user.email,
                address: action.user.address,
                phone: action.user.phone,
                success: AxiosConstants.SUCCESS
            }
        case types.GET_USER_ERROR:
            return {...initialState,
                error: action.err
            }
        default:
            return state;
    }
};

export default user;
