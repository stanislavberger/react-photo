import React, { Component } from 'react'
import Img01 from './img/01.jpg'
import Img02 from './img/02.jpg'

let data = [
    {
        id: 1,
        imgSrc: Img01,
        altDesc: 'Image 01',
    },
    {
        id: 2,
        imgSrc: Img02,
        altDesc: 'Image 02',
    }
]


export class Image extends Component {

    render() {

        return (
            <>
                {
                    data.map((i, imgSrc) => {
                        return(
                            <div>
                                <ul key={i}>
                                    <li><img src={imgSrc} /></li>
                                </ul>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}

export default Image
