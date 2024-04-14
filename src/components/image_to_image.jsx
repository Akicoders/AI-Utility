import Dropzone from "../components/Dropzone.jsx";
import ResultImage from "../components/ResultImage.jsx";
import  { useState } from 'react';
function App(){
    const [imagenUrl, setImagenUrl] = useState();
    const [prompt, setPrompt] = useState();
    const [secureUrl, setSecureUrl] = useState("");

    const uploadFile = async (file , prompt) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'xkw9uvfs');
        formData.append('api_key', import.meta.env.API_KEY_CLOUDINARY);
        const res = await fetch('https://api.cloudinary.com/v1_1/drhh1zh1p/image/upload', {
        method: 'POST',
        body: formData
        });
        const data = await res.json();
        setImagenUrl(data.secure_url);
        handlePromptInput(prompt,data.secure_url);
    }

    const handlePromptInput = (prompt, secure_url) => {
        setPrompt(prompt);
        setSecureUrl(secure_url);
    }


    return(
    <section className="flex flex-col justify-start items-center bg-black text-white h-screen text-center " id="image_to_image" >
		<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-sky-300 md:text-5xl lg:text-4xl ">Generate an image with an image</h1>
		<div className=" flex flex-row flex-grow w-full">
			<div className=" flex w-full  flex-col h-full">
				<h1 className="mb-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Insert Image</h1>
				<Dropzone onFileUpload={uploadFile}  />

			</div>

			<div className= "flex w-full  flex-col h-full">
				<h1 className="mb-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Result</h1>
                <ResultImage prompt={prompt} secureUrl={secureUrl}/>
            </div>
		</div>

	</section>
    );
}

export default App;