const [anchorEl, setAnchorEl] = useState(null);
const loginMenuCloseHandler = (e, redirect) => {
  setAnchorEl(null);
  if (redirect) {
    router.push(redirect);
  }
};
const loginClickHandler = (e) => {
  setAnchorEl(e.currentTarget);
};
const logoutClickHandler = () => {
  setAnchorEl(null);
  dispatch({ type: "USER_LOGOUT" });
  jsCookie.remove("userInfo");
  jsCookie.remove("cartItems");
  router.push("/");
};
