import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions/users";

const Form = () => {
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email } = event.target;
    
    const newUser = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
    };

    dispatch(addUser(newUser));
    firstName.value = "";
    lastName.value = "";
    email.value = "";
  };

  return (
    <form
      className="row align-items-end justify-content-center"
      onSubmit={onSubmit}
    >
      <div className="col-md-3  ">
        <label className="form-label fw-bold" htmlFor="firstName">
          First name
        </label>
        <input className="form-control" type="text" name="firstName" required />
      </div>

      <div className="col-md-3">
        <label className="form-label fw-bold" htmlFor="lastName">
          Second name
        </label>
        <input className="form-control" type="text" name="lastName" required />
      </div>

      <div className="col-md-3">
        <label className="form-label fw-bold" htmlFor="email">
          Email
        </label>
        <input className="form-control" type="email" name="email" required />
      </div>
      <div className="col-md-2">
        <input className="btn btn-primary" type="submit" value="Add User" />
      </div>
    </form>
  );
};

export default Form;
