import { render } from '@testing-library/react';
import React from 'react';
import Img01 from './img/01.jpg';
import Img02 from './img/02.jpg';
import Img03 from './img/03.jpg';
import Img04 from './img/04.jpg';
import Img05 from './img/05.jpg';
import Img06 from './img/06.jpg';


function MyGallary() {
    let data = [
        {
            id: 1,
            img: Img01,
        },
        {
            id: 2,
            img: Img02,
        },
        {
            id: 3,
            img: Img03,
        },
        {
            id: 4,
            img: Img04,
        },
        {
            id: 5,
            img: Img05,
        },
        {
            id: 6,
            img: Img06,
        }
    ]

        return (
            <>
                {data.map((item, index) => {
                    return(
                        <div className="gallery-section" key={index}>
                            <img src={item.imgSrc} />
                        </div>
                            );
                })                          
                }
            </>
        ) 

}
export default MyGallary
