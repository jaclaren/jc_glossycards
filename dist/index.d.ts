import JCGlossyCardList from './dist/jc-glossycards.js';
import { JCGlossyCardItem } from './src/jc-glossycards.d';
import { FC } from 'react';
export default JCGlossyCardList;
export interface IJCGlossyCardListProps {
    items: JCGlossyCardItem[];
}
export declare const RJCGlossyCardList: FC<IJCGlossyCardListProps>;
