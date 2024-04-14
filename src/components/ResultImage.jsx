import { useState, useEffect } from 'react';
import img_to_img from '../IA/img_to_img';

function ResultImage(props) {
    const [imageUrl, setImageUrl] = useState(null);
    let url = props.secureUrl;
    let prompts = props.prompt;

    useEffect(() => {
        if (url) {
            img_to_img(prompts, url).then((url) => {
            setImageUrl(url);
        });
        }
    },[url,prompts]);

    return (
        <div className='flex flex-col  h-full justify-center items-center'>
            {prompts ? (
                <div>
                    <img src={imageUrl} alt="result" id="result_image" width={320}/>
                    <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5">Download</button>
                </div>
            ) : (
                <div>
                <p className='text-center text-white text-4xl animate-pulse font-mono'> Esperando la imagen...</p>
                <div className="flex flex-row justify-center items-center">
                <img src="public\loading.gif" alt="monachina bailando" className="w-1/2 " />
                </div>
                </div>
            )}
        </div>
    );
}

export default ResultImage;