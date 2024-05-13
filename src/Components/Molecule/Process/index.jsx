import React from 'react'
import { GenStyle } from '../../../App'
import { Icons, Text } from '../../Atoms'

export const Process = () => {
    return (
        <GenStyle>
            <GenStyle>
                <GenStyle> <Icons name="iconoir" /></GenStyle>
                <Text name="p" Text="FORMULATED BY EXPERT DERMATOLOGIST" />
                <Text name="p" Text="produsts tested and proven" />
            </GenStyle>
            <GenStyle>
                <GenStyle> <Icons name="material" /> </GenStyle>
                <Text name="p" Text="BACKED BY SCIENCE" />
                <Text name="p" Text="This product is formulated in our labs" />

            </GenStyle>
            <GenStyle>
                <GenStyle> <Icons name="bitcoin" /></GenStyle>
                <Text name="EXPERT RECOMMENDATION ADVISED" />
                <Text name="p" Text="Speak to our licensed Esthetician" />

            </GenStyle>
        </GenStyle>
    )
}
