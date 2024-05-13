import React from 'react'
import { GenStyle } from '../../../App'
import { Icons, Text } from '../../Atoms'

export const Process = () => {
    return (
        <GenStyle

            Display="flex"
            AlignItems="center"
            JustifyContent="center"
            Gap="11%"
            Padding="15px 0 35px 0"

        >
            <GenStyle
                className='processCard'
                Display="flex"
                JustifyContent="center"
                FlexDirection="row"
                Gap="12px"

            >
                <Icons name="iconoir" />

                <GenStyle

                >
                    <Text name="p" className="H1" Text="FORMULATED BY EXPERT DERMATOLOGIST" />
                    <Text name="p" Text="produsts tested and proven" />
                </GenStyle>
            </GenStyle>


            <GenStyle

                className='processCard'
                Display="flex"
                JustifyContent="center"
                FlexDirection="row"
                Gap="12px">

                <Icons name="material" />
                <GenStyle>
                    <Text name="p" className="H2" Text="BACKED BY SCIENCE" />
                    <Text name="p" Text="This product is formulated in our labs" />
                </GenStyle>
            </GenStyle>


            <GenStyle
                className='processCard'
                Display="flex"
                JustifyContent="center"
                FlexDirection="row"
                Gap="12px"
            >
                <Icons name="bitcoin" />

                <GenStyle>
                    <Text name="p" Text="EXPERT RECOMMENDATION ADVISED" className="H3" />
                    <Text name="p" Text="Speak to our licensed Esthetician" />
                </GenStyle>
            </GenStyle>
        </GenStyle >
    )
}
