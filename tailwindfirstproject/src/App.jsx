import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [birthDate, setBirthDate] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  // Validation logic
  const today = new Date()
  const enteredDate = new Date(birthDate)

  const isValidDate =
    birthDate && !isNaN(enteredDate.getTime()) && enteredDate < today
//     enteredDate.getTime()
// Returns the number of milliseconds since January 1, 1970 (Unix epoch).
// If the date is invalid, getTime() returns NaN.
// Example:
// new Date("2005-08-17").getTime() 
// // 1124236800000  (valid number)
// new Date("abcd").getTime()
// // NaN (invalid date)

  const handleChange = (e) => {
    setBirthDate(e.target.value)
    setIsTouched(true)
  }

  return (
      <div className='bg-blue-950 h-screen pt-1 flex flex-col justify-center items-center'>
{/* What is margin collapsing?
In CSS, vertical margins of a child and parent can “collapse”.
Example: if the first child of a div has mt-20, and the parent has no border/padding, the margin appears as if it’s applied outside the parent.
So visually it seems like the “upper div is pushed down” instead of the child moving inside the parent. */}
             <div className='flex justify-center items-center space-x-3'>
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUKt-uC5k8WQnIDL5etuyYzgHIbD9QaRaAmQ&s' className='h-10 w-10 rounded-full'/>
  <h1 className='text-4xl font-semibold text-blue-200'>
    Webinar<span className='text-white'>.gg</span>
  </h1>
</div>
              <div className=' font-bold text-2xl text-white mt-10'>
                  Verify your age
              </div>
              <div className=' text-blue-300 mt-10 text-sm'>
                  Please Confirm Your Birth Year . This Data Will Not Be Saved
              </div>
              <div className=' mt-3'>
               {/* Input field */}
      <input
        type="date"
        value={birthDate}
        onChange={handleChange}
        onBlur={() => setIsTouched(true)}
        className={`bg-blue-900 text-white placeholder:text-gray-400 px-4 py-3 rounded-lg w-72 
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-blue-800 
          transition duration-200 text-center
          ${
            isTouched && !isValidDate
              ? 'ring-2 ring-red-500'
              : isValidDate
              ? 'ring-2 ring-green-500'
              : ''
          }`}
      />
              </div>
              <div className=' mt-10'>
                     <button disabled={!isValidDate}
          className={`text-white font-semibold uppercase px-20 py-3 w-72 rounded-lg 
          transition-all duration-300 ease-in-out shadow-md hover:shadow-xl cursor-pointer
          ${
            isValidDate
              ? 'bg-blue-500 hover:bg-blue-700 hover:ring-2 hover:ring-green-500'
              : 'bg-gray-600 cursor-not-allowed opacity-60'
          }`}>continue</button>
              </div>
              {/* Feedback message */}
               {isTouched && !isValidDate && (
                 <p className="text-red-400 text-sm">
                   Please enter a valid date in the past.
                </p>
               )}
              {isValidDate && (
                <p className="text-green-400 text-sm"> Date looks good!</p>
              )}
       </div>
      
      
    
  )
}

export default App
