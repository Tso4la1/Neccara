import React from 'react'
import { GenStyle } from '../../../App'
import { Text } from '../../Atoms'

export const ProductHead = () => {
    return (
        <GenStyle
            Display="flex"
            JustifyContent="center"
            AlignItems="center"
            Margin="15px 5% 25px 0px"
            FontSize="28px"
            FontWeight="500"
        >
            <GenStyle><Text name="p" Text="Shop Neccara Products" /></GenStyle>
        </GenStyle>
    )
}
