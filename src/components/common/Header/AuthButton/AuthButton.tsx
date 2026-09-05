import { useState } from 'react';

import Auth from '@/components/features/Auth';
import Icon from '@/components/ui/Icon';
import Modal from '@/components/ui/Modal';

import scss from './AuthButton.module.scss';

const AuthButton = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <button type="button" onClick={() => setModalIsOpen(true)} className={scss.authButton}>
                <span className={scss.text}>Sign up</span>
                <Icon variant="arrow-right" className={scss.icon} />
            </button>

            <Modal
                modalIsOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                overlayClassName={scss.overlay}
                className={scss.modal}
            >
                <Auth />
            </Modal>
        </>
    );
};

export default AuthButton;
