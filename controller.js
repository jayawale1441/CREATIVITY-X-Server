const { motionRelatedWords, imageJpeg, imageGif, danceRelatedWords, dancingGif } = require('./contant');


const filterImages = async (prompt) => {
    // const ifPromtIsDance = danceRelatedWords.find(v => prompt.includes(v));
    // if (ifPromtIsDance?.length > 0) {
    //     let arr = dancingGif.map((val) => val.search_val);
    //     const foundElement = arr.find(v => prompt.includes(v));
    //     const filteredImage = dancingGif.find((val) => val?.search_val == foundElement);
    //     return { filteredImage: filteredImage, isMotion: true };
    // }

    const ifPromtIsMotion = motionRelatedWords.find(v => prompt.includes(v));

    if (ifPromtIsMotion?.length > 0) {
        let arr = imageGif.map((val) => val.search_val);
        console.log('arr =========', arr);
        const foundElement = arr.find(v => prompt.includes(v));
        console.log('prompt ===',prompt);
        console.log('foundElement =========', foundElement);        
        const filteredImage = imageGif.find((val) => val?.search_val == foundElement);
        console.log('filteredImage =========', filteredImage);
        return { filteredImage: filteredImage, isMotion: true };
    } else {
        let arr = imageJpeg.map((val) => val.search_val);
        const foundElement = arr.find(v => prompt.includes(v));
        const filteredImage = imageJpeg.find((val) => val?.search_val == foundElement);
        return { filteredImage: filteredImage, isMotion: false };
    }
}

const filterMotionImages = async (prompt) => {
    console.log('promt=====', prompt);
    let filteredGif = imageGif.filter((val) => val.search_val == prompt);
    // const foundElement = arr.find(v => prompt.includes(v));
    // const filteredGif = imageGif.find((val) => val?.search_val == foundElement);
    return filteredGif;
}

module.exports = { filterImages, filterMotionImages }