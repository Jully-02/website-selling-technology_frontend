import './ClientList.css';
import Client1 from '../../../images/public/client-1.png';
import Client2 from '../../../images/public/client-2.png';
import Client3 from '../../../images/public/client-3.png';
import Client4 from '../../../images/public/client-4.png';
import Client5 from '../../../images/public/client-5.png';
import Client6 from '../../../images/public/client-6.png';


function ClientList() {
    return (
        <div className="client-list">
            <div className="client-item">
                <img src={Client1} alt="" />
            </div>
            <div className="client-item">
                <img src={Client2} alt="" />
            </div>
            <div className="client-item">
                <img src={Client3} alt="" />
            </div>
            <div className="client-item">
                <img src={Client4} alt="" />
            </div>
            <div className="client-item">
                <img src={Client5} alt="" />
            </div>
            <div className="client-item">
                <img src={Client6} alt="" />
            </div>
        </div>
    )
}

export default ClientList;