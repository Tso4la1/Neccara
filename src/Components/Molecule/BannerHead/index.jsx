import React from 'react'
import { GenStyle } from '../../../App'
import { Text } from '../../Atoms'

export const BannerHead = () => {
    return (
        <GenStyle
            BackgroundColour="#001B79"
            Width="100%"
            Height="45px"
            Display="flex"
            JustifyContent="center"
            AlignItems="center"
            Color="#fff"
        >
            <GenStyle Margin=" 0 8% 0 0">
                <Text name="p" Text="Unveil Confindence" />
            </GenStyle>
        </GenStyle>
    )
}
