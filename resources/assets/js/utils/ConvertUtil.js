export function convertImageLink (link) {
    if (link.substring(0,4) !== 'http') {
        return  '/' + link;
    } else {
        return link;
    }
}
