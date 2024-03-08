function Random() {
  let num = Math.random() * 100;

  return (
    <h3 style={{ backgroundColor: "grey", color: "white" }}>
      Generator random number {Math.round(num)}
    </h3>
  );
}

export default Random;
