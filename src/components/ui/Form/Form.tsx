import { yupResolver } from '@hookform/resolvers/yup';
import type { ReactNode } from 'react';
import {
    type FieldErrors,
    type FieldValues,
    type SubmitHandler,
    useForm,
    type UseFormRegister,
} from 'react-hook-form';
import type { AnyObjectSchema } from 'yup';

interface Props<T extends FieldValues> {
    onSubmit: SubmitHandler<T>;
    schema?: AnyObjectSchema;
    children: (props: { register: UseFormRegister<T>; errors: FieldErrors<T> }) => ReactNode;
    className?: string;
}

const Form = <T extends FieldValues>({ onSubmit, children, schema, className }: Props<T>) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<T>({
        resolver: schema && yupResolver(schema),
        mode: 'onBlur',
        shouldFocusError: false,
    });

    const handleFormSubmit: SubmitHandler<T> = data => {
        onSubmit(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className={className}>
            {children({ register, errors })}
        </form>
    );
};

export default Form;
