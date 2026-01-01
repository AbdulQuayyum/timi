import { Outlet, ScrollRestoration } from 'react-router';

import { BottomNavigation, Footer, Header } from '@/components';
import BackToTop from '@/utilities/BackToTop';
import ScrollToTop from '@/utilities/ScrollToTop';

const GeneralLayout = () => {
    return (
        <>
            <ScrollToTop />
            <div className="layout">
                <Header />
                <div className="w-full flex-1 flex flex-col items-start justify-start pt-52 md:pt-40 px-4 md:px-0">
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
