import Coloritem from "./Coloritem";

const Colorlist = ({ Colormenu }) => {
  return (
    <>
      <ol class="list-group list-group-numbered">
        {Colormenu.map((item) => (
          <Coloritem key={item} Colori={item}></Coloritem>
        ))}
      </ol>
    </>
  );
};

export default Colorlist;
