import { useState } from 'react';
import closedFolder from '../../assets/folder-closed.png';
import { categories } from '../data/categories';
import Window from '../Window';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';

const Container = styled.div`
    background-color: ${colors.desktop};
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    padding-top: 200px;
    height: 100%;
    position: relative;
`;

const WindowWrapper = styled.div<{ windowOpen: boolean }>`
    display: none;
    ${props => props.windowOpen && `
        display: block;
        position: absolute;
        left: 100px;
        top: 20px;
        height: 100%;
        width: 100%;
    `}
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
    const [windowOpen, setWindowOpen] = useState<boolean>(false);
    const [folder, setFolder] = useState<string>('');

    const openWindow = (event: any) => {
        setWindowOpen(true);
        
        const className = event.target.className.split(' ');
        const category = className[className.length - 1];
        
        switch (category) {
            case categories[0].name:
                setFolder(categories[0].title)
                break;
            case categories[1].name:
                setFolder(categories[1].title)
                break;
            case categories[2].name:
                setFolder(categories[2].title)
                break;
            case categories[3].name:
                setFolder(categories[3].title)
                break;    
        };
    };
    
    return (
        <Container>
            <WindowWrapper windowOpen={windowOpen}>
                <Window folder={folder} setWindowOpen={setWindowOpen} />
            </WindowWrapper>
            {categories.map((entrie, index) => (
                <Figure key={index} onClick={openWindow}>
                    <Img className={entrie.name} src={closedFolder} alt={`Dossier ${entrie.title}`} />
                    <FigCap className={entrie.name}>
                        {entrie.title}
                    </FigCap>
                </Figure>
            ))}
        </Container>
    );
};

export default Desktop;