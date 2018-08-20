export function getHeaders() {
    if (localStorage.getItem("b_token")) {
        return {
            Authorization: localStorage.getItem("b_token"),
            Accept :"application/json",
            // "Content-Type": "application/x-www-form-urlencoded"
            "content-type": "application/json; charset=UTF-8"
        }
    } else {
        return null;
    }
}

export function getPagination(dataWrap) {
    let pagination = {
        "current_page": dataWrap.current_page,
        "first_page_url": dataWrap.first_page_url,
        "from": dataWrap.from,
        "last_page": dataWrap.last_page,
        "last_page_url": dataWrap.last_page_url,
        "next_page_url": dataWrap.next_page_url,
        "path": dataWrap.path,
        "per_page": dataWrap.per_page,
        "prev_page_url": dataWrap.prev_page_url,
        "to": dataWrap.to,
        "total": dataWrap.total
    }
    return {
        "data": dataWrap.data,
        pagination
    }

}

