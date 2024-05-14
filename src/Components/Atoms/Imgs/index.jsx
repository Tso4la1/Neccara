import React from 'react'


export const Imgs = ({ name }) => {
    if (name === "bottles") {
        return <img src="Rectangle.png" alt="Product" />
    }

    if (name === "standalone") {
        return <img src="standalone.png" alt="Product" />
    }

    if (name === "sample1") {
        return <img src="sample1.png" alt="Product" />
    }

    if (name === "sample2") {
        return <img src="sample2.png" alt="Product" />
    }

    if (name === "instagram") {
        return <img src="instagram.png" alt="Product" />
    }

    if (name === "sampleproduct") {
        return <img src="sampleproduct.png" alt="Product" />
    }

    if (name === "3D") {
        return <img src="3D.png" alt="Product" />
    }

    if (name === "drop") {
        return <img src="drop.png" alt="Product" />
    }
}
