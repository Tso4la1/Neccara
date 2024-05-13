import React from 'react'
import { GenStyle } from '../../../App'
import { Imgs, Text } from '../../Atoms'


export const Banner = () => {
    return (
        <GenStyle
            Display="flex"
            AlignItems="center"
            JustifyContent="space-between"
            Padding="0 80px"
            BackgroundColour="#e4e9fb"
        >
            <GenStyle
                Width="50%"

            >
                <Text name="p" className='headerText' Text="Neccara : Beyond Beautiful, It's Science-Backend Melanin Magic" />
                <Text name="p" className='BannerContent' Text="Luxury meets science in skincae formulation specifically for the brilliance of deeper skin tones. We don't just address concerns. We celebrate your complexion with powerful, meticulously curated ingredients that work wonders" />
                <button className='bannerButton'> SHOP NOW</button>
            </GenStyle>
            <GenStyle>
                <Imgs name="bottles" />
            </GenStyle>
        </GenStyle>
    )
}
