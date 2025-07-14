import '../App.css'
import Header from '../component/header'
import { BrowserRouter } from 'react-router-dom';
import { HeroSection } from '../component/heroSection';
import { HomeShopCategories } from '../component/hero-FeaturedCategories';
import { HomeProductCategories } from '../component/hero-FeaturedProducts';
import { WhyChooseUs } from '../component/why-choose-us';
import Footer from '../component/footer';
import HomeNewsletter from '../component/home-newsletter';

export default function Home(){
    return <>
    <BrowserRouter>
        <Header />
        <HeroSection />
        <HomeShopCategories />
        <HomeProductCategories />
        <WhyChooseUs />
        <HomeNewsletter />
        <Footer />
    </BrowserRouter>
    </>
}