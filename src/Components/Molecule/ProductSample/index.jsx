import React from 'react';
import { GenStyle } from "../../../App";
// import { Imgs } from '../../Atoms';

export const ProductSample = () => {
    return (
        <GenStyle
            Display="flex"
            JustifyContent="center"
            AlignItems="center"
            Margin="60px 0 30px 0"
            Gap="2%"

        >
            <GenStyle className='sample1'></GenStyle>
            <GenStyle className='sample2'></GenStyle>
        </GenStyle>
    )
}
