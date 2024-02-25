import Swal from "sweetalert2";

const PORT = process.env.BACKEND_PORT || 3000;
const HOST = process.env.BACKEND_HOST || "localhost";
export const URL_API = `http://${HOST}:${PORT}`;

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
