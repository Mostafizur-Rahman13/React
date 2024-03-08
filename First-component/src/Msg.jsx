function Message() {
  let age = 24;

  let Name = () => {
    return "Mostafizur";
  };

  return (
    <h1>
      Hey I'm {Name()}.I'm {age} years old.
    </h1>
  );
}

export default Message;
