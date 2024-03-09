import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [Length, setLength] = useState(8);
  const [Number, setNumber] = useState(true);
  const [Character, setCharacter] = useState(false);
  const [Password, setPassword] = useState("");
  const PasswordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let Pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (Number) str += "0123456789";
    if (Character) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= Length; i++) {
      let Char = Math.floor(Math.random() * str.length + 1);
      Pass += str.charAt(Char);
    }
    setPassword(Pass);
  }, [length, Number, Character, setPassword]);

  useEffect(() => {
    PasswordGenerator();
  }, [Length, Number, Character, setPassword]);

  const CopyPasswordClipboard = useCallback(() => {
    PasswordRef.current?.select();
    PasswordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-purple-800 text-white">
        <h1 className="text-white text-center text-2xl font-bold texy-3xl my-5 shadow-lg shadow-white">
          AI Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 text-black">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Create Password"
            readOnly
            ref={PasswordRef}
          />
          <button
            onClick={CopyPasswordClipboard}
            className="outline-none bg-red-700 hover:bg-red-800 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={Length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {Length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={Number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={Character}
              id="characterInput"
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
