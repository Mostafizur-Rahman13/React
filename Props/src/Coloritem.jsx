const Coloritem = ({ Colori }) => {
  return (
    <>
      <li key={Colori} className="list-group-item">
        {Colori}
      </li>
    </>
  );
};

export default Coloritem;
