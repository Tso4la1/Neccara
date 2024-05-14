import React from 'react'


export const Imgs = ({ name }) => {
    if (name === "bottles") {
        return <img src="Rectangle.png" alt="Product" />
    }

    if (name === "standalone") {
        return <img src="standalone.png" alt="Product" />
    }
}
