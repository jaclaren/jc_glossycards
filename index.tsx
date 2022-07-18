import JCGlossyCardList from './dist/jc-glossycards.js'
import { JCGlossyCardItem } from './src/jc-glossycards.d'

import React, { FC } from 'react';

export default JCGlossyCardList

export interface IJCGlossyCardListProps {
    items: JCGlossyCardItem[]
}

export const RJCGlossyCardList : FC<IJCGlossyCardListProps> = (props) => {
    return (<>Hello</>)
}
 