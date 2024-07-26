// useState() Hook - helps us to make a State variable

import React, {useState} from 'react'

// text - variable
// setText - update function()

export default function TextForm(props) {

  // useState
  const [text, setText] = useState("");
  // ab me text ko jaha bhi use karunga, setText() ke madat se update kar paunga,
  // Bina page ko reload kie

  // [text, setText] me ka text ek aisa variable jisko react automatically watch karega
  // setText("New text");


  // handle Events with onChange 
  // event.target.value
  const handleOnChange = (event) => {

    // to enable user input/typing
    setText(event.target.value);
  }


  // Uppercase button click
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  }

  // Lowercase button click
  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  }

  // Clear button click
  const handleClearClick = () => {
    let newtext = text;
    newtext = '';
    setText(newtext);
    props.showAlert("Text cleared!", "success");

  }

  // Speak button click
  const handleSpeakClick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking", "success");

  }

  // File upload button click
  const readTxt = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function(event){
        setText(event.target.result);
    };
    reader.readAsText(file);
    props.showAlert("File uploaded!", "success");

  }

  // Copy button click
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    // alert("Copied to clipboard");
    props.showAlert("Copied to clipboard!", "success");

    }

  // Remove extra spaces button click
  const handleRemoveSpaces = () =>
  {
    let newtext2 = text.split(/[ ]+/);
    setText(newtext2.join(" "));
    props.showAlert("Extra spaces removed!", "success");

  }
  

  return(
    <>
    <h2>Upload File</h2>
    <input type="file" className="btn btn-outline-dark my-1" accept="text/plain" onChange = {readTxt}/>

    <h1 className="my-3">{props.heading}</h1>
    <div className={`container my-2 bg-{props.mode}`}>
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      <button className="btn btn-outline-primary my-3 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-outline-primary my-3 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-outline-danger my-3 mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-outline-success my-3 mx-1" onClick={handleSpeakClick}>Speak Text</button>
      <button className={`btn btn-outline-${props.mode==='dark'?'light':'dark'} my-3 mx-1`} onClick={handleCopyText}>Copy Text</button>
      <button className={`btn btn-outline-${props.mode==='dark'?'light':'dark'} my-3 mx-1`} onClick={handleRemoveSpaces}>Remove extra spaces</button>

    </div>
    
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words</p>
      <p>{text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes </p>

      <h2>Preview</h2>
      <div className="container border border-rounded">
      <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here..."}</p>
      </div>
    </div>
    </>
  )
  
}

// State - means avastha (Form ki avastha)
// useState is a hook