import { HfInference } from '@huggingface/inference'
const hf = new HfInference("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");
const img_to_img =  async (prompt, url_cloud ) => {
    const response = await fetch(url_cloud);
    console.log(response);
    const model = 'lllyasviel/control_v11p_sd15_scribble';
    const blob = await response.blob();
    console.log(blob);

    try {
        const result = await hf.imageToImage({
            inputs: blob,
            parameters: {
            prompt: prompt,
            },
        model,
        });
        console.log(result)
        const url = URL.createObjectURL(result);
        console.log(url);
        console.log(url.replace("blob:",""));
        return url;
    } catch (error) {
        console.error(error);
    }

}


export default img_to_img;