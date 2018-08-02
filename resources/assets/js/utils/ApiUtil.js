export function getHeaders() {
    if (localStorage.getItem("b_token")) {
        return {
            Authorization: localStorage.getItem("b_token"),
            Accept :"application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        }
    } else {
        return null;
    }
}