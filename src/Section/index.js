import { Wrapper, Title } from "./styled";

const Section = ({ title, extras }) => (
    <Wrapper>
        <Title>{title}</Title>
        {extras}
    </Wrapper>
);
export default Section;
