import React from 'react';
import { GenStyle } from "../../../App";
import { Imgs, Text } from '../../Atoms';
import { article } from '../../../../article';

export const Remarks = () => {
    return (

        <GenStyle
            Width="100%"
            Display="flex"
            JustifyContent="center"
            AlignItems="center"
            FlexDirection="column"
            Padding="0 60px"
            Margin="0 0 30px 0 "
        >

            <GenStyle
                FontSize="30px"
                FontWeight="600"
                Display="flex"
                JustifyContent="center"
                Margin="80px 0 45px 0"
            >
                <Text name="p" Text="Hear What Our Customers Say" />
            </GenStyle>
            <GenStyle
                Width="92%"
                Display="flex"
                JustifyContent="center"
                AlignItems="center"
                Padding="20px 8px 20px 20px"
                Gap="16px"

            >

                {article.map(items => (
                    <div key={items.indx} className='article_card'>
                        <div className='article_content'><Text name="p" Text={`"${items.content}"`} /></div>
                        <div className='article_user'>
                            <Imgs name={items.profile} />
                            {items.author}
                        </div>
                    </div>
                ))}
            </GenStyle>

            <button><Text className="article_button" name="p" Text="LEAVE A REVIEW" /></button>
        </GenStyle>
    )
}
