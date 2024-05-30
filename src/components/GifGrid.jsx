import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGif'
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
        // getGifs(category)
        // .then(newImages => setImages(newImages))
    }, [])

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifItem
                        key={image.id}
                        // title={image.title}
                        // url={image.url}
                        {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
