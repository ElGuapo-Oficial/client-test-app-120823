import '../../styles/pages/main/Home.css'
import Introduction from '../../components/Introduction';
import Experience from '../../components/Experience';
import Skills from '../../components/Skills';

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