function AddItem2() {
  let todoname = "Go to collage";
  let tododate = "27/03/2024";

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItem2;
