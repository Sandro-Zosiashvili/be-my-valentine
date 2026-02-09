import { Suspense } from 'react';
import MainPage from '@/Components/MainPage/MainPage';

export default function Home() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MainPage />
        </Suspense>
    );
}