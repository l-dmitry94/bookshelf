import clsx from 'clsx';
import type { Dispatch, FC, SetStateAction } from 'react';

import registerSchema from '@/components/features/Auth/RegisterForm/schema';
import Form from '@/components/ui/Form';
import Icon from '@/components/ui/Icon';
import type { IRegisterFormData } from '@/types/auth-form.types';

import scss from './RegisterForm.module.scss';

interface Props {
    setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const RegisterForm: FC<Props> = ({ setIsLogin }) => {
    const handleSubmit = (data: IRegisterFormData) => {
        console.log(data);
    };

    return (
        <Form onSubmit={handleSubmit} schema={registerSchema} className={scss.form}>
            {({ register, errors }) => {
                return (
                    <>
                        <div className={scss.wrapper}>
                            <div className={scss.field}>
                                <input
                                    type="text"
                                    {...register('name')}
                                    autoComplete="name"
                                    placeholder="NAME"
                                    className={clsx(scss.input, errors.name && scss.inputError)}
                                />
                            </div>

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
                            Sign up
                        </button>

                        <div className={scss.actions}>
                            <button
                                type="button"
                                className={scss.actionButton}
                                disabled
                                onClick={() => setIsLogin(false)}
                            >
                                Sign up
                            </button>

                            <button
                                type="button"
                                className={scss.actionButton}
                                onClick={() => setIsLogin(true)}
                            >
                                Sign in
                            </button>
                        </div>
                    </>
                );
            }}
        </Form>
    );
};

export default RegisterForm;
