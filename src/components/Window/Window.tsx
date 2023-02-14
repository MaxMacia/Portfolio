import { categories } from "../data/categories";
import txtFile from '../../assets/fichier-txt.png';
import htmlFile from '../../assets/fichier-html.png';
import emailFile from '../../assets/fichier-email.png';
import closedFolder from '../../assets/folder-closed.png';  
import styled from "styled-components";
import { colors } from "../../utils/styles/colors";
import { useEffect, useState } from "react";

const Container = styled.div`
    border: 1px solid ${colors.black};
    width: 90%;
    height: 60%;
`;

const TopBar = styled.div`
    border: 1px solid ${colors.black};
    background-color: ${colors.primary};
    height: 4%;
    display: flex;
    justify-content: flex-start;
`;

const CloseButton = styled.i`
    color: ${colors.white};
    padding-left: 10px;
    padding-top: 4px;
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
    level: number,
    firstWindowType: string,
    secondWindowType: string,
    setFirstWindowType: Function,
    setSecondWindowType: Function,
    setFirstWindowOpen: Function,
    setSecondWindowOpen: Function
};

const Window = ({ level, firstWindowType, secondWindowType, setFirstWindowType, setFirstWindowOpen, setSecondWindowType, setSecondWindowOpen }: Props) => {
    const [windowLevel] = useState<number>(level);
    const [path, setPath] = useState<string>('');

    
    useEffect(() => {
        switch (windowLevel) {
            case 1:
                setPath(`/Maxence-Macia/Desktop/${firstWindowType}`);
                break;
            case 2:
                setPath(`/Maxence-Macia/Desktop/Projects/${secondWindowType}`);
                break;
        }
    }, [windowLevel, firstWindowType, secondWindowType]);

    const closeWindow = () => {
        switch (windowLevel) {
            case 1:
                setFirstWindowOpen(false);
                setFirstWindowType('');
                break;
            case 2:
                setSecondWindowOpen(false);
                setSecondWindowType('');
                break;
        }
       
    }

    const openWindow = (event: any) => {
        setSecondWindowOpen(true);
        
        const className = event.target.className.split(' ');
		const category = className[className.length - 1];
        
        switch (category) {
            case categories[4].name:
                setSecondWindowType(categories[4].name)
                break;
            case categories[5].name:
                setSecondWindowType(categories[5].name)
                break; 
        };
    };
    
    return (
        <Container>
            <TopBar>
                <CloseButton className="fa-sharp fa-solid fa-xmark" onClick={closeWindow} />
            </TopBar>
            <TitleBar>
                <Path>
                    <Paragraphe>
                        {path}
                    </Paragraphe>
                </Path>
            </TitleBar>
            <WindowContent>
                <TxtFile aboutMe={firstWindowType === 'About-me'} >
                    <TxtFileImg src={txtFile} alt="Fichier txt" />
                    <FigCap> Read me</FigCap>
                </TxtFile>
                <HtmlFile cv={firstWindowType === 'CV'} contact={firstWindowType === 'Contact'}>
                    <HtmlFileImg src={htmlFile} alt="Fichier html" />
                    <FigCap>{firstWindowType === 'CV' ? 'CV' : 'LinkedIn'}</FigCap>
                </HtmlFile>
                <HtmlFile cv={false} contact={firstWindowType === 'Contact'}>
                    <HtmlFileImg src={htmlFile} alt="Fichier html" />
                    <FigCap>github</FigCap>
                </HtmlFile>
                <EmailFile contact={firstWindowType === 'Contact'}>
                    <EmailFileImg src={emailFile} alt="Fichier email" />
                    <FigCap>e-mail</FigCap>
                </EmailFile>
                <ClosedFolder projects={firstWindowType === 'Projects' && secondWindowType === ''} onClick={openWindow}>
                    <ClosedFolderImg className="OpenClassrooms" src={closedFolder} alt="Dossier OpenClassRooms" />
                    <FigCap className="OpenClassrooms">OpenClassrooms</FigCap>
                </ClosedFolder>
                <ClosedFolder projects={firstWindowType === 'Projects' && secondWindowType === ''} onClick={openWindow}>
                    <ClosedFolderImg className="Perso" src={closedFolder} alt="Dossier Perso" />
                    <FigCap className="Perso">Perso</FigCap>
                </ClosedFolder>
            </WindowContent>
        </Container>
    );
};

export default Window;