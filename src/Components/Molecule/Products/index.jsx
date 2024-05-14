import React from 'react'
import { GenStyle } from '../../../App'
import { Imgs, Text } from '../../Atoms'

export const Products = () => {
    return (
        <GenStyle
            Display="grid"
            Gap="25px"
            className='product'

        >
            <GenStyle
                className='productImg'
                Display="flex"
                JustifyContent="end"
            >
                <Imgs name="standalone" />
            </GenStyle>

            <GenStyle
                Display="flex"
                JustifyContent="center"
                FlexDirection="column"

            >
                <Text className="productHead" name="p" Text="MelanoClear" />
                <Text className="productContent" name="p" Text="This targeted treatment clarifies your complexion by addressing hyper pigmentation, sun spots, and dark spots, while respecting your skin's natural melanin product for a radiant, even-toned result." />
                <Text className="productCost" name="p" Text="&#8358; 110,000" />
                <button className="productButton"><Text name="p" Text="ADD TO CART" /> </button>
            </GenStyle>
        </GenStyle>
    )
}
