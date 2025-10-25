import { Outlet, ScrollRestoration } from 'react-router';

import { Footer, Header } from '@/components';
import ScrollToTop from '@/utilities/ScrollToTop';
import BackToTop from '@/utilities/BackToTop';

const GeneralLayout = () => {
    return (
        <>
            <ScrollToTop />
            <div className="layout">
                <Header />
                <div className="w-full flex-1 min-h-screen flex items-center justify-center pt-24">
                    <ScrollRestoration />
                    <Outlet />
                </div>
                <Footer />
            </div>
            <BackToTop />
        </>
    );
};

export default GeneralLayout;