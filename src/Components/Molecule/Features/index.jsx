import React from 'react'
import { feature } from '../../../feature'
import { Imgs, Text } from '../../Atoms'

export const Features = () => {
    return (
        <div className='feature'>
            <Text name="p" Text="Feature In" />

            <div className="feature_display">
                {feature.map(items => (
                    <div key={items.indx} >


                        <div>
                            <Imgs name={items.company} />
                        </div>

                    </div>

                ))}</div>
        </div>

    )
}
