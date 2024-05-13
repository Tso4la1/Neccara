import React from 'react';
import { GenStyle } from '../../../App';
import { Text } from '../../Atoms';
import { Icons } from '../../Atoms';

export const SubNav = () => {
    return (
        <GenStyle
            Display="flex"
            JustifyContent="center"
            AlignItems="center"
            Width="100%"
            Margin="0 0 20px 0"
        >

            <GenStyle
                Display="flex"
                JustifyContent="space-between"
                AlignItems="center"
                Width="93%"

            >


                <GenStyle
                    Display="flex"
                    AlignItems="center"
                    className="whatsappSub"
                >
                    <Text name="p" Text="SHOP" />
                    <Text name="p" Text="OUR BRAND" />
                    <Text name="p" Text="BLOG" />
                    <Text name="p" Text="CONTACT US" />
                </GenStyle>

                <GenStyle className="whatsappSub2"  >
                    <Icons name="whatsapp" />
                </GenStyle>

            </GenStyle>
        </GenStyle>
    )
}
