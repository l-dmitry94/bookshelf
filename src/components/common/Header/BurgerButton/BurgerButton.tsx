import type { FC } from 'react';

import Icon from '@/components/ui/Icon';

import scss from './BurgerButton.module.scss';

interface Props {
    burgerMenuIsOpen: boolean;
    onClick: () => void;
}

const BurgerButton: FC<Props> = ({ burgerMenuIsOpen, onClick }) => {
    return (
        <button onClick={onClick} className={scss.burgerButton}>
            <Icon variant={burgerMenuIsOpen ? 'close' : 'burger'} className={scss.icon} />
        </button>
    );
};

export default BurgerButton;
