import Banner from "../components/home/Banner"
import Categorias from "../components/home/Categorias"
import CTAWhatsApp from "../components/home/CTAWhatsApp"
import Destacados from "../components/home/Destacados"
import Pilares from "../components/home/Pilares"

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categorias/>
            <Destacados/>
            <Pilares/>
            <CTAWhatsApp/>
        </div>
    )
}

export default Home