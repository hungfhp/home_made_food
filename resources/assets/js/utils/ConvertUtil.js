const queryString = require('query-string');

export function convertImageLink (link) {
    if (link.substring(0,4) !== 'http') {
        return  '/' + link;
    } else {
        return link;
    }
}

export function convertURL(params) {
    if (history.pushState) {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?page='+params.page + window.location.hash;
        window.history.pushState({path:newurl},'',newurl);
    }
}

// get ?page=page from url 
export function parsedSearch() {
    return queryString.parse(location.search);
}