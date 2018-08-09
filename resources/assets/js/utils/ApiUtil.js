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