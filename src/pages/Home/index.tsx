import CardInfos from '../../components/CardInfos';
import CardLinks from '../../components/CardLinks';
import Footer from '../../components/Footer';
import HomeBanner from '../../components/HomeBanner'

const Home = () => {
    return (
        <>
            <CardLinks />
            <HomeBanner />
            <CardInfos />
            <Footer />
        </>
    )
}

export default Home;