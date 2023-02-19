import { categories } from '../data/categories';
import txtFile from '../../assets/fichier-txt.png';
import htmlFile from '../../assets/fichier-html.png';
import ghFile from '../../assets/fichier-github.png';
import emailFile from '../../assets/fichier-email.png';
import closedFolder from '../../assets/folder-closed.png';
import cvMM from '../../assets/CV_Maxence_Macia.pdf';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';
import { useEffect, useState } from 'react';

const Container = styled.div`
	border: 1px solid ${colors.black};
	width: 90%;
	height: 597px;
`;

const TopBar = styled.div`
	border: 1px solid ${colors.black};
	background-color: ${colors.primary};
	height: 24px;
	display: flex;
	justify-content: flex-start;
`;

const CloseButton = styled.i`
	color: ${colors.white};
	padding-left: 1%;
	padding-top: 4px;
	cursor: pointer;
`;

const TitleBar = styled.div`
	border: 1px solid ${colors.black};
	background-color: ${colors.grey};
	height: 30px;
`;

const Path = styled.div`
	border: 1px solid ${colors.black};
	background-color: ${colors.white};
	height: 18px;
	width: 50%;
	margin-top: 5px;
	margin-left: 10%;
`;

const Paragraphe = styled.div`
	margin: 0;
	padding-left: 1%;
`;

const WindowContent = styled.div`
	border: 1px solid ${colors.black};
	background-color: ${colors.white};
	height: 537px;
	display: flex;
	flex-wrap: wrap;
`;

const TxtFile = styled.figure<{ aboutMe: boolean }>`
	display: none;
	${(props) =>
		props.aboutMe &&
		`
        display: block;
        cursor: pointer;
		height: fit-content;
    `}
`;

const TxtFileImg = styled.img`
	height: 100px;
	margin-bottom: 10px;
`;

const FigCap = styled.figcaption`
	font-weight: bold;
`;

const HtmlFile = styled.figure<{ cv: boolean; contact: boolean }>`
	display: none;
	${(props) =>
		props.cv &&
		`
        display: block;
        cursor: pointer;
    `}
	${(props) =>
		props.contact &&
		`
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
	${(props) =>
		props.contact &&
		`
        display: block;
        cursor: pointer;
    `}
`;

const EmailFileImg = styled.img`
	height: 100px;
	margin-bottom: 10px;
`;

const ClosedFolderWrapper = styled.div`
    display: flex;
	flex-wrap: wrap;
`;

const ClosedFolder = styled.figure<{ projects: boolean }>`
	display: none;
	${(props) =>
		props.projects &&
		`
        display: block;
        height: fit-content;
        cursor: pointer;
    `}
`;

const ClosedFolderImg = styled.img`
	height: 100px;
	margin-bottom: 10px;
`;

type Props = {
	level: number;
	firstWindowType: string;
	secondWindowType: string;
	thirdWindowType: string;
	setFirstWindowType: Function;
	setSecondWindowType: Function;
	setThirdWindowType: Function;
	setFirstWindowOpen: Function;
	setSecondWindowOpen: Function;
	setThirdWindowOpen: Function;
    setTxtWindowOpen: Function
};

const Window = ({
	level,
	firstWindowType,
	secondWindowType,
	thirdWindowType,
	setFirstWindowType,
	setFirstWindowOpen,
	setSecondWindowType,
	setSecondWindowOpen,
	setThirdWindowType,
	setThirdWindowOpen,
    setTxtWindowOpen
}: Props) => {
	const [windowLevel] = useState<number>(level);
	const [path, setPath] = useState<string>('');

	useEffect(() => {
		switch (windowLevel) {
			case 1:
				setPath(`/Maxence-Macia/Desktop/${firstWindowType}`);
				break;
			case 2:
				setPath(
					`/Maxence-Macia/Desktop/Projects/${secondWindowType}`
				);
				break;
			case 3:
				if (secondWindowType === 'OpenClassrooms') {
                    setPath(
                        `/Maxence-Macia/Desktop/Projects/OpenClassrooms/${thirdWindowType}`
                    );
                } else if (secondWindowType === 'Perso') {
                    setPath(
                        `/Maxence-Macia/Desktop/Projects/Perso/${thirdWindowType}`
                    );
                }
                break;
		}
	}, [windowLevel, firstWindowType, secondWindowType, thirdWindowType]);

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
			case 3:
				setThirdWindowOpen(false);
				setThirdWindowType('');
		}
	};

	const openSecondWindow = (event: any) => {
		setSecondWindowOpen(true);

		const className = event.target.className.split(' ');
		const category = className[className.length - 1];

		switch (category) {
			case categories[4].name:
				setSecondWindowType(categories[4].name);
				break;
			case categories[5].name:
				setSecondWindowType(categories[5].name);
				break;
		}
	};

	const openThirdWindow = (event: any) => {
		setThirdWindowOpen(true);

		const className = event.target.className.split(' ');
		const category = className[className.length - 1];
		console.log(category);

		switch (category) {
			case categories[4].subDirectories?.[0].name:
				setThirdWindowType(categories[4].subDirectories?.[0].name);
				break;
			case categories[4].subDirectories?.[1].name:
				setThirdWindowType(categories[4].subDirectories?.[1].name);
				break;
			case categories[4].subDirectories?.[2].name:
				setThirdWindowType(categories[4].subDirectories?.[2].name);
				break;
			case categories[4].subDirectories?.[3].name:
				setThirdWindowType(categories[4].subDirectories?.[3].name);
				break;
			case categories[4].subDirectories?.[4].name:
				setThirdWindowType(categories[4].subDirectories?.[4].name);
				break;
			case categories[4].subDirectories?.[5].name:
				setThirdWindowType(categories[4].subDirectories?.[5].name);
				break;
			case categories[5].subDirectories?.[0].name:
				setThirdWindowType(categories[5].subDirectories?.[0].name);
				break;
			case categories[5].subDirectories?.[1].name:
				setThirdWindowType(categories[5].subDirectories?.[1].name);
				break;
			case categories[5].subDirectories?.[2].name:
				setThirdWindowType(categories[5].subDirectories?.[2].name);
				break;
			case categories[5].subDirectories?.[3].name:
				setThirdWindowType(categories[5].subDirectories?.[3].name);
				break;
		}
	};

    const openTxtWindow = () => {
        setTxtWindowOpen(true);
    };

	return (
		<Container>
			<TopBar>
				<CloseButton
					className="fa-sharp fa-solid fa-xmark"
					onClick={closeWindow}
				/>
			</TopBar>
			<TitleBar>
				<Path>
					<Paragraphe>{path}</Paragraphe>
				</Path>
			</TitleBar>
			<WindowContent>
				<TxtFile aboutMe={firstWindowType === 'About-me'} onClick={openTxtWindow}>
					<TxtFileImg src={txtFile} alt="Fichier txt" />
					<FigCap> Read me</FigCap>
				</TxtFile>
				<a href={firstWindowType === 'CV' ? cvMM : "https://www.linkedin.com/in/maxence-macia-4ab2a617b/"} target="_blank" rel="noreferrer" >
                    <HtmlFile
                        cv={firstWindowType === 'CV'}
                        contact={firstWindowType === 'Contact'}
                    >
                        <HtmlFileImg src={htmlFile} alt="Fichier html" />
                        <FigCap>{firstWindowType === 'CV' ? 'CV' : 'LinkedIn'}</FigCap>
                    </HtmlFile>
                </a>
				<a href='https://github.com/MaxMacia' target="_blank" rel="noreferrer" >
                    <HtmlFile cv={false} contact={firstWindowType === 'Contact'}>
                        <HtmlFileImg src={ghFile} alt="Fichier html" />
                        <FigCap>github</FigCap>
                    </HtmlFile>
                </a>
                <a href='mailto:maxence.macia@gmail.com'>
                    <EmailFile contact={firstWindowType === 'Contact'}>
                        <EmailFileImg src={emailFile} alt="Fichier email" />
                        <FigCap>e-mail</FigCap>
                    </EmailFile>
                </a>
				<ClosedFolder
					projects={firstWindowType === 'Projects' && secondWindowType === '' && thirdWindowType === ''}
					onClick={openSecondWindow}
				>
					<ClosedFolderImg
						className="OpenClassrooms"
						src={closedFolder}
						alt="Dossier OpenClassRooms"
					/>
					<FigCap className="OpenClassrooms">OpenClassrooms</FigCap>
				</ClosedFolder>
				<ClosedFolder
					projects={firstWindowType === 'Projects' && secondWindowType === '' && thirdWindowType === ''}
					onClick={openSecondWindow}
				>
					<ClosedFolderImg
						className="Perso"
						src={closedFolder}
						alt="Dossier Perso"
					/>
					<FigCap className="Perso">Perso</FigCap>
				</ClosedFolder>
				{categories[4].subDirectories?.map((entrie, index) => (
					<ClosedFolderWrapper>
                        <ClosedFolder
                            key={`OpenClassrooms-dossier-${index}`}
                            projects={
                                secondWindowType === 'OpenClassrooms' && thirdWindowType === ''
                            }
                            onClick={openThirdWindow}
                        >
                            <ClosedFolderImg
                                className={typeof entrie.name === 'string' ? entrie.name : ''}
                                src={closedFolder}
                                alt={`Dossier ${entrie.title}`}
                            />
                            <FigCap
                                className={typeof entrie.name === 'string' ? entrie.name : ''}
                            >
                                {entrie.title}
                            </FigCap>
                        </ClosedFolder>
                        <ClosedFolder
                            key={`OpenClassrooms-readme-${index}`}
                            projects={thirdWindowType === `${entrie.name}`}
                            onClick={openTxtWindow}
                        >
                            <ClosedFolderImg
                                src={txtFile}
                                alt={`Read me ${entrie.title}`}
                            />
                            <FigCap>{entrie.title} <br /> Read me</FigCap>
                        </ClosedFolder>
                        <a href={`https://github.com/MaxMacia/Projet_OpenClassrooms_${entrie.name}.git`} target="_blank" rel="noreferrer" >
                            <ClosedFolder
                                key={`OpenClassrooms-repo-${index}`}
                                projects={thirdWindowType === `${entrie.name}`}
                            >
                                <ClosedFolderImg
                                    src={ghFile}
                                    alt={`Repo gitHub ${entrie.title}`}
                                />
                                <FigCap>Repo <br /> gitHub</FigCap>
                            </ClosedFolder>
                        </a>
                        <a href={`https://maxmacia.github.io/Projet_OpenClassrooms_${entrie.name}/`} target="_blank" rel="noreferrer" >
                            <ClosedFolder
                                key={`OpenClassrooms-web-${index}`}
                                projects={thirdWindowType === `${entrie.name}` && entrie.ghPages === true}
                            >
                                <ClosedFolderImg
                                    src={htmlFile}
                                    alt={`page web ${entrie.title}`}
                                />
                                <FigCap>{entrie.title} <br /> Page web</FigCap>
                            </ClosedFolder>
                        </a>
                    </ClosedFolderWrapper>
				))}
				{categories[5].subDirectories?.map((entrie, index) => (
					<ClosedFolderWrapper>
                        <ClosedFolder
                            key={`perso-dossier-${index}`}
                            projects={secondWindowType === 'Perso' && thirdWindowType === ''}
                            onClick={openThirdWindow}
                        >
                            <ClosedFolderImg
                                className={typeof entrie.name === 'string' ? entrie.name : ''}
                                src={closedFolder}
                                alt={`Dossier ${entrie.title}`}
                            />
                            <FigCap
                                className={typeof entrie.name === 'string' ? entrie.name : ''}
                            >
                                {entrie.title}
                            </FigCap>
                        </ClosedFolder>
                        <ClosedFolder
                            key={`perso-readme-${index}`}
                            projects={thirdWindowType === `${entrie.name}` && index !== 3}
                            onClick={openTxtWindow}
                        >
                            <ClosedFolderImg
                                src={txtFile}
                                alt={`Read me ${entrie.title}`}
                            />
                            <FigCap>{entrie.title} <br /> Read me</FigCap>
                        </ClosedFolder>
                        <a href={`https://github.com/MaxMacia/${entrie.name}.git`} target="_blank" rel="noreferrer" >
                            <ClosedFolder
                                key={`perso-repo-${index}`}
                                projects={thirdWindowType === `${entrie.name}` && index !== 3}
                            >
                                <ClosedFolderImg
                                    src={ghFile}
                                    alt={`Repo gitHub ${entrie.title}`}
                                />
                                <FigCap>Repo <br /> gitHub</FigCap>
                            </ClosedFolder>
                        </a>
                        <a href={`https://maxmacia.github.io/${entrie.name}/`} target="_blank" rel="noreferrer" >
							<ClosedFolder
								key={`perso-web-${index}`}
								projects={thirdWindowType === `${entrie.name}` && entrie.ghPages === true && index !== 3}
							>
								<ClosedFolderImg
									src={htmlFile}
									alt={`page web ${entrie.title}`}
								/>
								<FigCap>{entrie.title} <br /> Page web</FigCap>
							</ClosedFolder>
						</a>
                    </ClosedFolderWrapper>
				))}
				<ClosedFolder
                    key={'animations-readme'}
                    projects={thirdWindowType === 'Animations-CSS'}
                    onClick={openTxtWindow}
                >
                    <ClosedFolderImg
                    	src={txtFile}
                        alt={'Read me animations CSS'}
                    />
                    <FigCap>Read me</FigCap>
                </ClosedFolder>
				{Array.isArray(categories[5].subDirectories?.[3].directories) ? (
					categories[5].subDirectories?.[3].directories.map((entrie, index) => (
						<ClosedFolderWrapper>
                        <a href={`https://github.com/MaxMacia/${entrie}.git`} target="_blank" rel="noreferrer" >
                            <ClosedFolder
                                key={`animations-${index}`}
                                projects={thirdWindowType === 'Animations-CSS'}
                            >
                                <ClosedFolderImg
                                    src={ghFile}
                                    alt={`Repo gitHub ${entrie}`}
                                />
                                <FigCap>Repo <br /> gitHub <br /> {entrie.split('_')[2]}</FigCap>
                            </ClosedFolder>
                        </a>
                        <a href={`https://maxmacia.github.io/${entrie}/`} target="_blank" rel="noreferrer" >
							<ClosedFolder
								key={`perso-web-${index}`}
								projects={thirdWindowType === 'Animations-CSS'}
							>
								<ClosedFolderImg
									src={htmlFile}
									alt={`page web ${entrie}`}
								/>
								<FigCap>Page web <br /> {entrie.split('_')[2]}</FigCap>
							</ClosedFolder>
						</a>
						</ClosedFolderWrapper>
					))
				) : (null) }
			</WindowContent>
		</Container>
	);
};

export default Window;
