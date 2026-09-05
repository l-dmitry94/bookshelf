import * as yup from 'yup';

import type { ILoginFormData } from '@/types/auth-form.types';

const loginSchema: yup.ObjectSchema<ILoginFormData> = yup.object({
    email: yup
        .string()
        .email('Please enter a valid email address')
        .required('This field is required'),

    password: yup
        .string()
        .min(6, 'The password must be at least 6 characters long')
        .required('This field is required'),
});

export default loginSchema;
