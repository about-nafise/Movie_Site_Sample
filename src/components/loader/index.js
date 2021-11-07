const Loader = () => {
  return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
      <div
        className="spinner-border text-light"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
export default Loader;
