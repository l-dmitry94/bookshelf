import { FirebaseError } from 'firebase/app';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    type User,
} from 'firebase/auth';
import { create } from 'zustand';

import notify from '@/helpers/notification';
import { auth } from '@/services/firebase';
import type { ILoginFormData, IRegisterFormData } from '@/types/auth-form.types';

interface AuthState {
    user: User | null;
    isLoggedIn: boolean;
    isInitialized: boolean;
    isLoading: boolean;
    error: string | null;

    register: (data: IRegisterFormData) => Promise<void>;
    login: (data: ILoginFormData) => Promise<void>;
    logout: () => Promise<void>;
    initAuth: () => () => void;
}

export const useAuthStore = create<AuthState>(set => ({
    user: null,
    isLoggedIn: false,
    isInitialized: false,
    isLoading: false,
    error: null,

    register: async ({ name, email, password }) => {
        set({ isLoading: true, error: null });
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            if (userCredential.user) {
                await updateProfile(userCredential.user, { displayName: name });
                const updatedUser = { ...userCredential.user, displayName: name };
                set({ user: updatedUser, isLoggedIn: true });
            }
        } catch (error) {
            if (error instanceof FirebaseError) {
                notify('failure', 'Email already in use');
            } else {
                notify('failure', 'An unexpected error occurred');
            }
            throw error;
        } finally {
            set({ isLoading: false });
        }
    },

    login: async ({ email, password }) => {
        set({ isLoading: true, error: null });
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            set({
                user: userCredential.user,
                isLoggedIn: true,
                isLoading: false,
            });
        } catch (error) {
            if (error instanceof FirebaseError) {
                notify('failure', 'Invalid Credentials');
            } else {
                notify('failure', 'An unexpected error occurred');
            }
            throw error;
        } finally {
            set({ isLoading: false });
        }
    },

    logout: async () => {
        set({ isLoading: true, error: null });
        try {
            await signOut(auth);
            set({
                user: null,
                isLoggedIn: false,
                isLoading: false,
            });
        } catch (error) {
            if (error instanceof FirebaseError) {
                notify('failure', error.message);
            } else {
                notify('failure', 'An unexpected error occurred');
            }
            throw error;
        } finally {
            set({ isLoading: false });
        }
    },

    initAuth: () => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            set({
                user,
                isLoggedIn: !!user,
                isInitialized: true,
                isLoading: false,
            });
        });
        return unsubscribe;
    },
}));
