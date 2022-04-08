import React, { useState, useEffect} from 'react'
import { LazyLoadImage, trackWindowScroll }
    from 'react-lazy-load-image-component';

const Gallery = ({images, scrollPosition }) => {
    const [renderCount, setRenderCount] = useState(1);

    console.log("images ", images)

    // console.log("render count ", renderCount)
    // console.log("products  ", products)
    // useEffect(() => {

    //     fetchProducts()
    //     setProducts(fetchProducts());
    //     setRenderCount(count => count + 1)
    // }, [])


     useEffect(() => {

    //     fetchProducts()
    //     setProducts(fetchProducts());
    //     setRenderCount(count => count + 1)
    }, [images])

    return (
        <div>
            <h2>hello from Gallery</h2>
            {/* <p>normal images</p> */}

             <div>
             {images.length > 0 && images.map((product) =>
                <LazyLoadImage
                    key={product.id}
                    alt={product.title}
                    height={500}
                    // Make sure to pass down the scrollPosition,
                    // this will be used by the component to know
                    // whether it must track the scroll position or not
                    scrollPosition={scrollPosition}
                    src={product.image}
                    width={400} />
            )}
             </div>
        </div>
    )
}

// Wrap Gallery with trackWindowScroll HOC so it receives
// a scrollPosition prop to pass down to the images
export default trackWindowScroll(Gallery);