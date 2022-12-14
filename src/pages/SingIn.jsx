import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { changeAllowed } from "../redux/actions/rest";

const SignIn = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.accounts);

  const isLogIn = ({ email, password }) => {
    return accounts.some(
      (item) => item.email === email && item.password === password
    );
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let { email, password } = event.target;

    if (
      isLogIn({ email: email.value.trim(), password: password.value.trim() })
    ) {
      dispatch(changeAllowed());
      navigate("/");
    } else {
      alert("Sorry, try again");
    }
  };

  return (
    <div className="container-fluid text-center" style={{ marginTop: "7%" }}>
      <form className="row m-5" onSubmit={onSubmit}>
        <h1>Welcome</h1>
        <p>Sign-in to get started</p>
        <div className="d-flex flex-column align-items-center">
          <div className="col-4 mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="col-4 mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              required
            />
          </div>
        </div>
        <div>
          <input
            className="btn btn-outline-primary"
            type="submit"
            value="Sign-in"
          />
        </div>
      </form>
      <div className="p-3 text-dark text ">
        <h4>
          First time here?
          <NavLink to="../signUp"> Just sign-up</NavLink>
        </h4>
      </div>
    </div>
  );
};

export default SignIn;
