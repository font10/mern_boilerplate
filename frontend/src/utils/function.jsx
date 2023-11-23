import { toast } from 'react-toastify';

export const getToast = (action, message, position) => {
  return toast[action](message, {
    position: position,
    autoClose: 2000,
    closeOnClick: true,
    theme: "light",
  });
}