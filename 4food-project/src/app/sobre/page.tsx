import AboutUs from "../components/AboutUs";
import { OurHistory } from "../components/OurHistory";
import LocalizationCarousel from "../components/localizationCarousel";



export default function Sobre() {
    return (
    <section className="p-5">
        <AboutUs />
        <OurHistory />
        <LocalizationCarousel />
    </section>
);
}