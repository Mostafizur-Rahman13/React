function CountClock() {
  let currentDate = new Date();
  let CurrentTime = Date.now();

  return (
    <div>
      <h3>
        Current Date & Time Here {currentDate.toLocaleDateString("en-GB")} -{" "}
        {currentDate.toLocaleTimeString()}
      </h3>
    </div>
  );
}

export default CountClock;
