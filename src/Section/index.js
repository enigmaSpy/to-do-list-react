import './style.css';

const Section = ({ title, extras }) => (
    <section className="main__wrapper">
        <h2 className="main__title">{title}</h2>
        {extras}
    </section>
);
export default Section;
