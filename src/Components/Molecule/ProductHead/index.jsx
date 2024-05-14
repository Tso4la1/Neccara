import React from 'react'
import { GenStyle } from '../../../App'
import { Text } from '../../Atoms'

export const ProductHead = () => {
    return (
        <GenStyle
            Display="flex"
            JustifyContent="center"
            Margin="15px 0 25px 0"
            FontSize="28px"
            FontWeight="500"
        >
            <GenStyle><Text name="p" Text="Shop Neccara Products" /></GenStyle>
        </GenStyle>
    )
}
