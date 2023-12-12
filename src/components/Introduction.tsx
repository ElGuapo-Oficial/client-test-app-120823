import '../styles/components/Introduction.css';

const Introduction = () => {
    return (
        <>
            <div className="introdiction-wrapper">
                <div className={'selfie'} />
                <div className="introduction">
                    <h2>Hi, my name is <strong>Najash Marron</strong></h2>
                    <h4>I am professional software applications developer</h4>
                    <ul>
                        <li><span>Over 10 years of web applications development experience</span></li>
                        <li><span>Agile/Scrum/Waterfall software development methodology and best practices</span></li>
                        <li><span>Unit, integration, performance and automation software testing</span></li>
                        <li><span>CI/CD automation</span></li>
                        <li><span>Project management and team leading</span></li>
                        <li><span>Hardware operation systems and network protocols</span></li>
                    </ul>
                    <div className="social-networks">
                        <div className="social-networks-wrapper">
                            <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/najashmarron/'><i className="fab fa-linkedin fa-2x"></i></a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a><i className="fab fa-stack-overflow fa-2x"></i></a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a><i className="fab fa-facebook fa-2x"></i></a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a><i className="fab fa-youtube fa-2x"></i></a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a><i className="fab fa-twitter fa-2x"></i></a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a><i className="fab fa-instagram fa-2x"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduction;