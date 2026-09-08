import clsx from 'clsx';
import { useState } from 'react';

import FoundationsItem from '@/components/features/Foundations/FoundationsItem';
import Icon from '@/components/ui/Icon';
import foundations from '@/data/foundations';

import scss from './Foundations.module.scss';

const Foundations = () => {
    const [isTranslateItems, setIsTranslateItems] = useState(false);

    const handleClick = () => {
        setIsTranslateItems(prev => !prev);
    };

    return (
        <section className={scss.foundations}>
            <div className={scss.head}>
                <h2 className={scss.title}>Support Ukraine</h2>
                <Icon variant="foundation" className={scss.icon} />
            </div>

            <ul className={scss.list}>
                {foundations.map((foundation, index) => (
                    <FoundationsItem
                        key={foundation.title}
                        foundation={foundation}
                        index={index + 1}
                        isTranslateItems={isTranslateItems}
                    />
                ))}
            </ul>

            <button
                type="button"
                onClick={handleClick}
                className={clsx(scss.button, isTranslateItems && scss.buttonRotate)}
            >
                <Icon variant="chevron" className={scss.buttonIcon} />
            </button>
        </section>
    );
};

export default Foundations;
