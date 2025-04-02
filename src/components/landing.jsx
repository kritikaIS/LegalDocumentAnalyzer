import React from "react";
import Header from "./header";
import HeroSection from "./heroSection";
import HowItWorks from "./howItWorks";
import Testimonials from "./testimonials";
import Footer from "./footer";
import DocumentUpload from "./documentUpload";
import ContactPage from './contactPage'

function Landing(){
    return (
        <>
            <Header/>
            <HeroSection/>
            <Testimonials/>
            <DocumentUpload/>
            <HowItWorks/>
            <ContactPage/>
            <Footer/>
        </>
    );
}
export default Landing;