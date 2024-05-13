import React from 'react'
import { Icons } from '../../Atoms'
import { GenStyle } from '../../../App'
import { Text } from '../../Atoms/Texts'

export const NavBar = () => {
    return (
        <GenStyle
            Display="flex"
            JustifyContent="space-between"
            Margin="50px 80px 10px 80px"
            AlignItems="center"

            className='Navstyles'
        >
            <Icons name="country" />

            <Icons name="Neccaralogo" />

            <GenStyle
                Display="flex"
                AlignItems="center"
                Gap="20px"
            >
                <Icons name="search" />
                <Icons name="profile" />
                <Icons name="waste-bag" />
                <Text name="p" Text="My Cart" />
            </GenStyle>
        </GenStyle>
    )
}
