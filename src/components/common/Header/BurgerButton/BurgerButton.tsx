import Icon from '@/components/ui/Icon';

import scss from './BurgerButton.module.scss';

const BurgerButton = () => {
    return (
        <button type="button" className={scss.btn}>
            <Icon variant="burger" className={scss.icon} />
        </button>
    );
};

export default BurgerButton;
