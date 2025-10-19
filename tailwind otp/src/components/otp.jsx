import { useRef, useState } from "react";

export function Otp() {
  const [otp, setOtp] = useState(new Array(6).fill("")); // store values
  const refs = Array.from({ length: 6 }, () => useRef());
  //   Array.from([10, 20, 30], (element, index) => element * 2)
  // element = actual value of the array element (10, then 20, then 30)
  // index = position (0, 1, 2)
  // Output:
  // [20, 40, 60]
  //const numbers = Array.from({ length: 6 }, (_, i) => i + 1);_because undefined upar andar array de rakhi thi par yaha kuch nahi de rakha
  // → [1, 2, 3, 4, 5, 6]

  const handleChange = (e, index) => {
    const val = e.target.value;
    console.log(val)
    // only allow 1 character
    if (/^\d?$/.test(val)) {
      const newOtp = [...otp]; //newOtp = copy of otp
      newOtp[index] = val;
      setOtp(newOtp);

      // move to next input if value entered
      if (val && index < refs.length - 1) {
        refs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      // Case 1: if current box has a value, clear it
      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      }
      // Case 2: if current box is empty, move to previous one
      else if (index > 0) {
        if (otp[index - 1]) {
          e.preventDefault(); // ⛔ stops the browser from deleting previous value
          refs[index - 1].current.focus();
        } else {
          while (!otp[index] && index > 0) {
            refs[index].current.focus();
            index--;
          }
        }
      }
    }
  };

  return (
    <div className="flex justify-center gap-2">
      {refs.map((ref, idx) => (
        <input
          key={idx}
          ref={ref}
          value={otp[idx]}
          onChange={(e) => handleChange(e, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          type="text"
       
          className="outline-none m-2  h-12 w-10 rounded-2xl bg-blue-500 text-center text-white font-bold text-xl"
        />
      ))}
    </div>
  );
}
