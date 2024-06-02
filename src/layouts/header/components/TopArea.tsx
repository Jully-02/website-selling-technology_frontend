import './TopArea.css';

function TopArea() {
    return (
        <div className="top-area">
            <div className="top-area__heading">
                <a href="/" >
                    <i className="fa-solid fa-wallet"></i> WELCOME TO WORLDWIDE GIZMOS STORE
                </a>
            </div>
            <div className="top-area__info">
                <a href="/"><i className="fa-solid fa-location-dot"></i> STORE LOCATOR</a>
                <a href="/"><i className="fa-solid fa-truck"></i> FREE SHIPPING & RETURNS</a>
                <a href="/"><i className="fa-solid fa-user"></i> MY ACCOUNT</a>
            </div>
        </div>
    )
}

export default TopArea;