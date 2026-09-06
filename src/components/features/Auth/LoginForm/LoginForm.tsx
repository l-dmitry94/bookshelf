import clsx from 'clsx';
import { type Dispatch, type FC, type SetStateAction, useEffect } from 'react';

import loginSchema from '@/components/features/Auth/LoginForm/schema';
import Form from '@/components/ui/Form';
import Icon from '@/components/ui/Icon';
import { LoaderOff, LoaderOn } from '@/helpers/loader';
import { useAuthStore } from '@/store/auth.store';
import type { ILoginFormData } from '@/types/auth-form.types';

import scss from './LoginForm.module.scss';

interface Props {
    setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const LoginForm: FC<Props> = ({ setIsLogin }) => {
    const login = useAuthStore(state => state.login);
    const isLoading = useAuthStore(state => state.isLoading);

    const handleSubmit = async (data: ILoginFormData) => {
        await login(data);
    };

    useEffect(() => {
        if (isLoading) {
            LoaderOn();
        } else {
            LoaderOff();
        }

        return () => {
            LoaderOff();
        };
    }, [isLoading]);

    return (
        <Form onSubmit={handleSubmit} schema={loginSchema} className={scss.form}>
            {({ register, errors }) => {
                return (
                    <>
                        <div className={scss.wrapper}>
                            <div className={scss.field}>
                                <div className={scss.inputWrapper}>
                                    <input
                                        type="email"
                                        {...register('email')}
                                        autoComplete="email"
                                        placeholder="EMAIL"
                                        className={clsx(
                                            scss.input,
                                            errors.email && scss.inputError
                                        )}
                                    />
                                    <Icon variant="email" className={scss.icon} />
                                </div>
                            </div>

                            <div className={scss.field}>
                                <div className={scss.inputWrapper}>
                                    <input
                                        type="password"
                                        {...register('password')}
                                        autoComplete={'new-password'}
                                        placeholder="PASSWORD"
                                        className={clsx(
                                            scss.input,
                                            errors.password && scss.inputError
                                        )}
                                    />
                                    <Icon variant="password" className={scss.icon} />
                                </div>
                            </div>
                        </div>

                        <button type="submit" className={scss.submitButton}>
                            Sign in
                        </button>

                        <div className={scss.actions}>
                            <button
                                type="button"
                                className={scss.actionButton}
                                onClick={() => setIsLogin(false)}
                            >
                                Sign up
                            </button>

                            <button type="button" className={scss.actionButton} disabled>
                                Sign in
                            </button>
                        </div>
                    </>
                );
            }}
        </Form>
    );
};

export default LoginForm;
