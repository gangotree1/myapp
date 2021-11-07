import React from 'react'


function Error() {
  const [errorMessage, setErrorMessage] = React.useState("");
  const handleClick = () => {
    setErrorMessage("Please Enter Correct Inputs")
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Show error message</button>
      {errorMessage && <div className="error"> {errorMessage} </div>}
    </div>
  );
}


export default Error
