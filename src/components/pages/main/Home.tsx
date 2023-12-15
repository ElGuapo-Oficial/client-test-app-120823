import '../../../styles/pages/main/Home.css'
import Introduction from '../../Introduction';
import Experience from '../../Experience';
import Skills from '../../Skills';

const Home = () => {
    return (
        <div className='home'>
            <Introduction />
            <Experience />
            <Skills />
        </div>
    )
}

export default Home;