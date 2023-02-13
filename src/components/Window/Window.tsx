import { categories } from "../data/categories";
import txtFile from '../../assets/fichier-txt.png';
import htmlFile from '../../assets/fichier-html.png';
import emailFile from '../../assets/fichier-email.png';
import closedFolder from '../../assets/folder-closed.png';  
import styled from "styled-components";
import { colors } from "../../utils/styles/colors";

const Container = styled.div`
    border: 1px solid ${colors.black};
    width: 90%;
    height: 60%;
`;

const TopBar = styled.div`
    border: 1px solid ${colors.black};
    background-color: ${colors.primary};
    display: flex;
    justify-content: flex-start;
`;

const CloseButton = styled.i`
    color: ${colors.white};
    padding-left: 10px;
    cursor: pointer;
`;

const TitleBar = styled.div`
    border: 1px solid ${colors.black};
    background-color: ${colors.grey};
    height: 5%;
`;

const Path = styled.div`
    border: 1px solid ${colors.black};
    background-color: ${colors.white};
    height: 60%;
    width: 50%;
    margin-top: 5px;
    margin-left: 100px;
`;

const Paragraphe = styled.div`
    margin: 0;
    padding-left: 5px;
`;

const WindowContent = styled.div`
    border: 1px solid ${colors.black};
    background-color: ${colors.white};
    height: 95.9%;
    display: flex;
`;

const TxtFile = styled.figure<{ aboutMe: boolean }>`
    display: none;
    ${props => props.aboutMe && `
        display: block;
        cursor: pointer;
    `}
`;

const TxtFileImg = styled.img`
    height: 100px;
    margin-bottom: 10px;
`;

const FigCap = styled.figcaption`
    font-weight: bold;
`;

const HtmlFile = styled.figure<{ cv: boolean, contact: boolean }>`
    display: none;
    ${props => props.cv && `
        display: block;
        cursor: pointer;
    `}
    ${props => props.contact && `
        display: block;
        cursor: pointer;
    `}
`;

const HtmlFileImg = styled.img`
    height: 100px;
    margin-bottom: 10px;
`;

const EmailFile = styled.figure<{ contact: boolean }>`
    display: none;
    ${props => props.contact && `
        display: block;
        cursor: pointer;
    `}
`;

const EmailFileImg = styled.img`
    height: 100px;
    margin-bottom: 10px;
`;

const ClosedFolder = styled.figure<{ projects: boolean }>`
    display: none;
    ${props => props.projects && `
        display: block;
        cursor: pointer;
    `}
`;

const ClosedFolderImg = styled.img`
    height: 100px;
    margin-bottom: 10px;
`;

type Props = {
    folder: string,
    setWindowOpen: Function
};

const Window = ({ folder, setWindowOpen }: Props) => {
    const closeWindow = () => {
        setWindowOpen(false);
    }
    
    return (
        <Container>
            <TopBar>
                <CloseButton className="fa-sharp fa-solid fa-xmark" onClick={closeWindow} />
            </TopBar>
            <TitleBar>
                <Path>
                    <Paragraphe>
                        {`/Maxence-Macia/Desktop/${folder}`}
                    </Paragraphe>
                </Path>
            </TitleBar>
            <WindowContent>
                <TxtFile aboutMe={folder === 'About me'} >
                    <TxtFileImg src={txtFile} alt="Fichier txt" />
                    <FigCap> Read me</FigCap>
                </TxtFile>
                <HtmlFile cv={folder === 'CV'} contact={folder === 'Contact'}>
                    <HtmlFileImg src={htmlFile} alt="Fichier html" />
                    <FigCap>{folder === 'CV' ? 'CV' : 'LinkedIn'}</FigCap>
                </HtmlFile>
                <EmailFile contact={folder === 'Contact'}>
                    <EmailFileImg src={emailFile} alt="Fichier email" />
                    <FigCap>e-mail</FigCap>
                </EmailFile>
                <ClosedFolder projects={folder === 'Projects'}>
                    <ClosedFolderImg src={closedFolder} alt="Dossier OpenClassRooms" />
                    <FigCap>OpenClassRooms</FigCap>
                </ClosedFolder>
                <ClosedFolder projects={folder === 'Projects'}>
                    <ClosedFolderImg src={closedFolder} alt="Dossier Perso" />
                    <FigCap>Perso</FigCap>
                </ClosedFolder>
            </WindowContent>
        </Container>
    );
};

export default Window;