import React from 'react';
import { GenStyle } from "../../../App";
import { Text } from '../../Atoms';


export const ProductSample = () => {
    return (
        <GenStyle
            Display="flex"
            JustifyContent="center"
            AlignItems="center"
            Margin="60px 0 30px 0"
            Gap="2%"

        >
            <GenStyle className='sample1'>
                <Text className='sample1Topic' name="p" Text="New to Skincare?" />
                <Text className='sample1Content' name="p" Text="Book A consultation with one of our Esthetication" />
                <button className='sample1Button'><Text name="p" Text="BOOK APPOINTMENT" /></button>
            </GenStyle>
            <GenStyle className='sample2'>
                <Text className='sample2Topic' name="p" Text="Not Sure Where to Start Your Skincare Journey?" />
                <Text className='sample2Content' name="p" Text="Download our begginers skincare guide" />
                <button className='sample2Button'><Text name="p" Text="BOOK APPOINTMENT" /></button>
            </GenStyle>
        </GenStyle>
    )
}
