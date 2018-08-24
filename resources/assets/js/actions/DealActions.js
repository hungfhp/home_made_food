import * as types from "@/constants/ActionTypes";
import {getHeaders, getPagination} from "@/utils/ApiUtil";

// updateOrCreateDeal
export function updateOrCreateDeal(deal) {
    return function (dispatch) {
        axios({
            method: 'POST',
            url: "/api/deals/",
            data: deal,
            headers: getHeaders()
        })
        .then(res => {
            dispatch(updateOrCreateDealSuccess(res.data.data));
        }).catch(err => {
            dispatch(updateOrCreateDealError(err));
        })
    }    
}

export function updateOrCreateDealSuccess(data) {
    return {
        type: types.UPDATE_OR_CREATE_DEAL_SUCCESS,
        data
    };
}

export function updateOrCreateDealError(err) {
    return {
        type: types.UPDATE_OR_CREATE_DEAL_ERROR,
        err
    };
}