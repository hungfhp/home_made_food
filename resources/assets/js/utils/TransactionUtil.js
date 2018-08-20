export function getStatus(transaction) {
    if (transaction.status == "dealing") {
        if (transaction.requirer) {
            return "required";
        } else {
            return "cooked";
        }
    } else {
        return transaction.status;
    }
}