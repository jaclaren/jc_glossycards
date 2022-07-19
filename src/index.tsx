import React, { FC } from 'react';

import JCGlossyCardList from './jc-glossycards'

export interface IJCGlossyCardListProps {
    items: any[]
}

export default JCGlossyCardList;

export const RJCGlossyCardList : FC<IJCGlossyCardListProps> = (props) => {
    return (<>Hello</>)
}
 