import notFound from '../images/404.png'

const Whoops404 = () => {
  return (
    <div
      className="container d-flex flex-column justify-content-evenly align-items-center"
      style={{ width: "100vw", height: "70vh" }}
    >
      <h1> 404: Whoops, Page not found</h1>
      <div>
        <img src={notFound} alt="404" width="200px" height="200px" />
      </div>
    </div>
  );
};

export default Whoops404;
