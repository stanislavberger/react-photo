import React from 'react'
import Img01 from './img/01.jpg'

function Item() {

    let data = [
        {
            id: 1,
            imgSrc: Img01,
            altDesc: 'New Image',
        }
    ]

    return (
        <div>
            {
                data.map((index, imgSrc, altDesc) => {
                    return(
                        <div key={index}>
                            <img src={imgSrc} alt={altDesc}/>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Item
