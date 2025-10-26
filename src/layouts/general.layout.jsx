import { Outlet, ScrollRestoration } from 'react-router';

import { BottomNavigation, Footer, Header } from '@/components';
import ScrollToTop from '@/utilities/ScrollToTop';
import BackToTop from '@/utilities/BackToTop';

const GeneralLayout = () => {
    return (
        <>
            <ScrollToTop />
            <div className="layout">
                <Header />
                <div className="w-full flex-1 flex flex-col items-start justify-start pt-24">
                    <ScrollRestoration />
                    <Outlet />
                </div>
                <BottomNavigation />
                <Footer />
            </div>
            <BackToTop />
        </>
    );
};

export default GeneralLayout;