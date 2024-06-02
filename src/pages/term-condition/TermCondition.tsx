import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';
import './TermCondition.css';

function TermCondition() {
    return (
        <>
            <Header />
            <div className="term-condition">
                <h1 className="title">Terms & Conditions</h1>
                <div className="content">
                    <div className="purchase">
                        <h1 className="title">Purchases Terms <br /> and Conditions</h1>
                        <div className="desc">
                            <p>Nulla porta nulla nec orci vulputate, id rutrum sapien varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Integer vel felis cursus, varius arcu non, sollicitudin tortor. Vivamus piorttitor libero id metus scele risque pellentesque sit amet in est. Mauris accumsan porta ante, vel tincidunt quam auctor vitae. Maecenas suscipit risus neque, at dapibus dolor sollicitudin vitae. Maecenas a eros eget lorem iaculis ultricies.</p>
                            <p>Suspendisse sodales magna ut gravida feugiat. Aenean gravida pellentesque lacinia. Suspendisse ullamcorper, nisl et iaculis pharet ra, lacus sem gravida urna, eu pharetra enim felis condimentum enim. Cras eget quam mollis, ultrices dolor tincidunt, finibus mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rhoncus metus ex, quis pretium neque tincidunt ut. Donec vestibulum congue sapien eu lacinia. Fusce vitae convallis tortor, sed ultricies eros. Morbi quis varius nibh, nec semper nibh.</p>
                        </div>
                    </div>
                    <div className="website">
                        <h1 className="title">Website Terms of Use</h1>
                        <div className="desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut nulla pulvinar, lobortis purus eu, interdum urna. Donec dapib us ne queue ipsum efficitur iaculis. Suspendisse accumsan erat id sapien tempor ultricies. Fusce lacinia augue vitae nibh gravida rhoncus. Aenean eg massa ipsum. Vivamus nisi massa, euismod sed tristique.</p>
                            <div className="sub">
                                <i className="fa-regular fa-tv"></i>
                                <p>Pellentesque porta egestas eros vel sollicitudin. Donec ut nulla pulvinar, lobortis purus eu, interdum urna. Donec dapibus ne queue ipsum efficitu.</p>
                            </div>
                            <div className="sub">
                                <i className="fa-regular fa-gamepad-modern"></i>
                                <p>Per adipisci accusata laboramus ex, usu postea ponderum quaestio id, in postulant intellegebat qui. Has primis disputationi.</p>
                            </div>
                            <div className="sub">
                                <i className="fa-regular fa-children"></i>
                                <p>Pellentesque porta egestas eros vel sollicitudin. Donec ut nulla pulvinar, lobortis purus eu, interdum urna. Donec dapibus ne queue ipsum efficitu</p>
                            </div>
                            <div className="sub">
                                <i className="fa-regular fa-headphones"></i>
                                <p>Per adipisci accusata laboramus ex, usu postea ponderum quaestio id, in postulant intellegebat qui. Has primis disputationi.</p>
                            </div>
                        </div>
                    </div>
                    <div className="intellectual">
                        <h1 className="title">Intellectual Propertly</h1>
                        <div className="desc">
                            <ul>
                                <li>Donec leo ligula, pulvinar id lectus ut, fringilla laoreet felis. Donec ut nulla pulvinar, lobortis purus eu, interdum urna apib queue ipsum efficitu Fusce lacinia augue vitae nibh gravida rhoncus. Donec ut nulla pulvinar, lobortis purus eu, interdu id. Donec dapibus ne queue ipsum efficitu uspendisse porta ligula id aliquam scelerisque.</li>
                                <li>Fusce lacinia augue vitae nibh gravida rhoncus. Nunc odio nibh, finibus ac ante facilisis, iaculis accumsan magna.</li>
                                <li>Sed eget varius neque. Vivamus id varius dui. Etiam finibus ligula sit amet ex malesuada, id pretium nu. Donec eu ibend auris in euismod ex, vel scelerisque odio. Vestibulum convallis dui vel neque feugiat, vel ultricies mauris faucibus.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="termination">
                        <h1 className="title">Termination</h1>
                        <div className="desc">
                            <p>Vestibulum convallis dui vel neque feugiat, vel ultricies mauris faucibus. Lobortis purus eu, interdum urna. Donec dapibus ipsum efficitur iaculis. Suspendisse accumsan erat id sapien tempor ultricies. Fusce lacinia augue vitae nibh gravida rho. Aenean eg massa ipsum. Vivamus nisi massa, euismod sed tristique ac, consectetur tincidunt tellus.</p>
                        </div>
                    </div>
                </div>
                <div className="contact-us">
                    <div className="title">Contact Us</div>
                    <form className='add-question'>
                        <p className='add-question__attention'>If you have any questions about this Agreement, please contact us filling this contact form</p>
                        <div className="add-question__form">
                            <textarea className="add-question__desc" placeholder="Messages" rows={8} cols={50}></textarea>
                            <input className="add-question__name" type="text" placeholder="Your Name *" />
                            <input className="add-question__email" type="email" placeholder="Your Email *" />
                        </div>
                        <button className="add-question__submit">
                            <span>Submit</span>
                            <i className="fa-regular fa-angle-right"></i>
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TermCondition;