import closedFolder from '../../assets/folder-closed.png';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';

const Container = styled.div`
    background-color: ${colors.desktop};
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    padding-top: 200px;
    height: 100%;
`;

const Figure =styled.figure`
    height: fit-content;
    cursor: pointer;
`;

const Img = styled.img`
    height: 100px;
    margin-bottom: 10px;
`;

const FigCap = styled.figcaption`
    padding-left: 20px;
    color: ${colors.white};
    font-weight: bold;
`;

const Desktop = () => {
    return (
        <Container>
            <Figure>
                <Img src={closedFolder} alt="Fichier" />
                <FigCap>
                    About me
                </FigCap>
            </Figure>
            <Figure>
                <Img src={closedFolder} alt="Fichier" />
                <FigCap>
                    CV
                </FigCap>
            </Figure>
            <Figure>
                <Img src={closedFolder} alt="Fichier" />
                <FigCap>
                    Contact
                </FigCap>
            </Figure>
            <Figure>
                <Img src={closedFolder} alt="Fichier" />
                <FigCap>
                   Projects
                </FigCap>
            </Figure>
        </Container>
    );
};

export default Desktop;