import React from 'react';
import { GenStyle } from '../../../App';
import { Imgs, Text } from '../../Atoms';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../../../responsive';
import { productdata } from '../../../productData';



export const SocialHandle = () => {



    return (
        <GenStyle
            Display="flex"
            JustifyContent="center"
            AlignItems="center"
            FlexDirection="column"
            Margin="0 0 25px 0"

        >
            <GenStyle
                Display="flex"
                JustifyContent="center"
                FontSize="28px"
                FontWeight="600"
                Margin="0 0 25px 0"
            >
                <Text name="p" Text="Follow Us @Neccara" /></GenStyle>

            <GenStyle
                className='carousel'
            >

                <Carousel responsive={responsive}>

                    {productdata.map(item =>
                        <div className="carousel_items" key={item.indx}>
                            <Imgs name={item.img} />

                        </div>
                    )}

                </Carousel>;
            </GenStyle>
        </GenStyle>
    )
}
