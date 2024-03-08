const Errormsg = ({ Colormenu }) => {
  return (
    <>
      {Colormenu.length === 0 && (
        <h1 className="text-center text-danger">No Color Here</h1>
      )}
    </>
  );
};

export default Errormsg;
