import swal2 from "sweetalert2";

export function alertPleaseLogin() {
    swal2({
        type: 'warning',
        title: 'Please Login !',
        showConfirmButton: false,
        heightAuto: true,
        timer: 1200
    });
}

export function alertSuccess() {
    swal2({
        type: 'success',
        title: 'Success !',
        showConfirmButton: false,
        heightAuto: true,
        timer: 1200
    });
}

export function alertWarning(title) {
    swal2({
        type: 'warning',
        title: title,
        showConfirmButton: false,
        heightAuto: true,
        timer: 1200
    });
}

