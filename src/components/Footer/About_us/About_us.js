import s from './About_us.module.css'

const About_us = () => {
    return(
        <div className={s.about}>
            <div>
                About us:
            </div>
            <div>
                <ul>
                    <li><a href=''>About the company</a></li>
                    <li><a href=''>Contacts</a></li>
                </ul>
            </div>
        </div>
    );
}

export default About_us;