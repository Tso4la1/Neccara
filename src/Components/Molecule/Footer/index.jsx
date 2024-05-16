import React from 'react';
import { GenStyle } from '../../../App';
import { Imgs, Text } from '../../Atoms';
import { footerinfo } from '../../../footerinfo'

export const Footer = () => {
    return (

        <GenStyle
            Display="flex"
            FlexDirection="column"
            AlignItems="center"
            JustifyContent="center"
            BackgroundColour=" #e4e9fb"
            Width="100%"
            className='footer_cover'

        >
            <GenStyle
                Display="flex"
                FlexDirection="column"
                AlignItems="center"
                JustifyContent="center"
                Width="100%"
                Margin="15px 0"
                className='footer_first'

            >
                <GenStyle><Imgs name="footerlogo" /></GenStyle>

                <GenStyle
                    Display="flex"
                    AlignItems="center"
                    JustifyContent="space-between"
                    Width="100em"
                >



                    {footerinfo.map(items => (
                        <div className="footer_grid" key={items.idx} >


                            <div>
                                <Text className="grid_head" name="p" Text={items.head} />
                                <Text className="grid_title" name="p" Text={items.t1} />
                                <Text className="grid_title" name="p" Text={items.t2} />
                                <Text className="grid_title" name="p" Text={items.t3} />
                                <Text className="grid_title" name="p" Text={items.t4} />
                                <Text className="grid_title" name="p" Text={items.t5} />

                            </div>

                        </div>

                    ))}


                </GenStyle>
                <GenStyle className="Trusted">
                    <Imgs name="accredited" />

                </GenStyle>

            </GenStyle>


            <GenStyle
                Margin="8px 0 35px 0"
                Display="flex"
                FlexDirection="column"
                AlignItems="center"
                JustifyContent="center"
                Color="#5a5555"
                Gap="15px"
            >
                <GenStyle
                    Color="black"
                    FontWeight="600"
                    FontSize="20px"
                >
                    <Text name="p" Text="Subscribe to our Newsletter" />
                </GenStyle>

                <GenStyle
                    Width="80%"
                    className='newletter'
                >
                    <Text name="p" Text="Get the latest about Neccara, our skincare tips and exciting news-straight into your inbox" />

                </GenStyle>
                <form >
                    <input className='email' type="email" placeholder='Enter you email address' />
                    <button className='email_btn'><Text name="p" Text="Subscribe" /></button>
                </form>
                <GenStyle>
                    <Imgs name="instagram-filled" />
                    <Imgs name="twitter" />
                    <Imgs name="youtube-fill" />
                </GenStyle>

                <Text className="copy" name="p" Text="&copy; 2024 Neccara. A Product of Venus Skin Health Limited. All right reserved" />

            </GenStyle>
        </GenStyle>
    )
}
