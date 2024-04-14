import { useState } from 'react';

function Dropzone(props) {
    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [errorMessage, setErrorMessage] = useState("");

    const handleFileChange = (e) => {
      e.preventDefault();
      const file = e.target.files[0];
      setFile(file);
      // Crear una URL temporal para el archivo
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    };


    const verifyTextArea = () => {
      const textArea = document.getElementById("chat");
      if (textArea.value === "") {
      setErrorMessage("Please fill out the text area");
          return;
      }else{
        props.onFileUpload(file, textArea.value);
      }
    }

    const handleImageChange = () => {
      setPreviewUrl(null);
    }
  return (
<div className='flex flex-col bg-black h-full' >
      { previewUrl ? (
          <div className='flex flex-col justify-center items-center '>
              <img src={previewUrl} alt="Vista previa de la imagen" width={320}/>
        <div className="flex items-center px-3 flex-col rounded-lg w-full">
            <textarea id="chat" required rows="1" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your prompt..."
              onChange={(e) => {
                setErrorMessage("");
                setTimeout(() => {
                    document.getElementById('alert-info').style.display = 'none';
                }, 3000);
                document.getElementById('boton-container').style.display = 'mt-3';
              }}>
            </textarea>
              <div id='alert-info' className="flex items-center mt-3 p-2 text-sm text-blue-800 bg-transparent   dark:text-blue-400 " role="alert">
                    <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span className="sr-only">Info</span>
        <div>
                <span className="font-medium">Info!</span> Write the prompt in english and try to be as specific as possible.
            </div>
            </div>
             {errorMessage && <div className="flex items-center mt-3 p-2 text-sm text-red-800  rounded-lg bg-red-50 dark:bg-transparent dark:text-red-400" role="alert">
             <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
               <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
             </svg>
             <span className="sr-only">Info</span>
             <div>
               <span className="font-medium"> Alert!</span> {errorMessage}
             </div>
           </div> }
        </div>
              <div className='flex flex-row justify-between mt-6' id='boton-container'>
              <button type="button" onClick={verifyTextArea}  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  mr-6" >Generate Image</button>
              <button type="button" onClick={handleImageChange}  className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  ml-6">Change Image</button>
              </div>
          </div>
        ) : (
          <div className='flex flex-col h-full'>
            <form className='flex h-full '>
            <div className="flex items-center justify-center w-full p-5 h-full">
    <label  htmlFor='dropzone-file' className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-transparent  dark:border-gray-100 dark:hover:border-gray-500 ">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor"  strokeLinecap='round' strokeLinejoin="round"  strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload </span> your image</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">PNG and JPG </p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
    </label>
            </div>
            </form>
        </div>
        )}

</div>

    );
  }
  export default Dropzone;



