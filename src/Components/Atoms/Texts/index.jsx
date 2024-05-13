import React from 'react'

export const Text = ({ name, Text, className }) => {
    if (name === "p") {
        return <p className={className}>{Text}</p>
    }
}
