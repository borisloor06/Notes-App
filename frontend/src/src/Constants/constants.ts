import Swal from "sweetalert2";

const BACKEND_PORT = process.env.BACKEND_PORT || 3000;
export const URL_API = `http://localhost:${BACKEND_PORT}`;

export const Toast = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});
