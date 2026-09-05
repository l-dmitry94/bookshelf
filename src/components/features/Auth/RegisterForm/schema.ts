import * as yup from 'yup';

import type { IRegisterFormData } from '@/types/auth-form.types';

const registerSchema: yup.ObjectSchema<IRegisterFormData> = yup.object({
    name: yup
        .string()
        .min(2, 'The name must contain at least 2 characters')
        .required('This field is required'),

    email: yup
        .string()
        .email('Please enter a valid email address')
        .required('This field is required'),

    password: yup
        .string()
        .min(6, 'The password must be at least 6 characters long')
        .required('This field is required'),
});

export default registerSchema;
