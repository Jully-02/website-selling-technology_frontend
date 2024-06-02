import './HeaderTop.css';
import Logo from '../../../images/public/Logo.png';

function HeaderTop () {
    return (
        <div className='header-top'>
            <div className="header-menu">
                <div className="header-logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav className="header-nav">
                    <ul className="menu">
                        <li className="menu-item">
                            <a href="/">Home</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Pages</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Shop</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Blog</a>
                        </li>
                        <li className="menu-item">
                            <a href="/">Landing</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header-holder">
                <div className="holder-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40.455" height="35.301" viewBox="0 0 40.455 35.301"><path d="M827.7,761.483h-4.148a14.061,14.061,0,0,0-27.956,0h-4.15a2.1,2.1,0,0,0-2.1,2.1v8.692a2.1,2.1,0,0,0,2.1,2.1h4.2a11.406,11.406,0,0,0,1.464,4.059,8.31,8.31,0,0,0,3.042,2.9,14.771,14.771,0,0,0,6.731,1.493,2.1,2.1,0,0,0,1.981,1.421h3.087a2.1,2.1,0,0,0,2.093-2.094v-.646a2.1,2.1,0,0,0-2.093-2.094h-3.087a2.11,2.11,0,0,0-1.973,1.4,12.779,12.779,0,0,1-5.758-1.239c-2.057-1.147-3.238-3.2-3.611-6.252V763.014a12.049,12.049,0,1,1,24.1,0V773.37a1.008,1.008,0,0,0,1.006,1.007H827.7a2.1,2.1,0,0,0,2.1-2.1v-8.692A2.1,2.1,0,0,0,827.7,761.483Zm.087,2.1v8.692a.094.094,0,0,1-.087.087h-4.064V763.5H827.7A.093.093,0,0,1,827.783,763.584Zm-32.276-.087v8.866h-4.065a.094.094,0,0,1-.087-.087v-8.692a.093.093,0,0,1,.087-.087Zm13.276,18.661v-.646a.087.087,0,0,1,.08-.081h3.087a.087.087,0,0,1,.079.081v.646a.087.087,0,0,1-.079.081h-3.087A.087.087,0,0,1,808.783,782.158Z" transform="translate(-789.342 -748.951)"></path></svg>
                </div>
                <div className="holder-contact">
                    <a href="/" className="holder-phone">+0080 1234 56 789</a>
                    <a href="/" className="holder-email">gizmos@example.com</a>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop;