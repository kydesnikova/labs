import { useNavigate } from "react-router";

import { useDispatch } from "react-redux";
import { addAccount } from "../redux/actions/accounts";
import { changeAllowed } from "../redux/actions/rest";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    let { name, email, password } = event.target;
    const newAccount = {
      name: name.value,
      password: password.value,
      email: email.value,
    };

    dispatch(addAccount(newAccount));
    dispatch(changeAllowed());
    navigate("/");
  };

  return (
    <div className="container " style={{ marginTop: "5%" }}>
      <form className="row m-5" onSubmit={onSubmit}>
        <h1 className="text-center">We're glad to see you</h1>
        <p className="text-center">Let's know something new about you</p>

        <div className="d-flex flex-column align-items-center">
          <div className="col-4 mb-3">
            <label htmlFor="name">Name</label>
            <div className="my-2">
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Name"
                required
              />
            </div>
          </div>
          <div className="col-4 mb-3">
            <label htmlFor="email">Email</label>
            <div className="my-2">
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="col-4 mb-3">
            <label htmlFor="password">Password</label>
            <div className="my-2">
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <input
            className="btn btn-outline-primary"
            type="submit"
            value="Sign-up"
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
