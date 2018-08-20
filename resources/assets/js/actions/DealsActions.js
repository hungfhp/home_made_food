import * as types from "@/constants/ActionTypes";
import {getHeaders, getPagination} from "@/utils/ApiUtil";

// getDeals
// export function getDeals(page) {
//     return function (dispatch) {
//         axios.get("/api/transactions" + "?page="+page)
//         .then(res => {
//             dispatch(getDealsSuccess(res.data.data));
//         }).catch(err => {
//             dispatch(getDealsError(err));
//         })
//     }    
// }

// export function getDealsSuccess(data) {
//     return {
//         type: types.GET_DEALS_SUCCESS,
//         data: getPagination(data)
//     };
// }

// export function getDealsError(err) {
//     return {
//         type: types.GET_DEALS_ERROR,
//         err
//     };
// }

// getDealsNewest
export function getDealsNewest(page) {
    return function (dispatch) {
        axios.get("/api/deals/newest", {
            headers: getHeaders()
        })
        .then(res => {
            dispatch(getDealsNewestSuccess(res.data.data));
        }).catch(err => {
            dispatch(getDealsNewestError(err));
        })
    }    
}

export function getDealsNewestSuccess(data) {
    return {
        type: types.GET_DEALS_NEWEST_SUCCESS,
        data
    };
}

export function getDealsNewestError(err) {
    return {
        type: types.GET_DEALS_NEWEST_ERROR,
        err
    };
}