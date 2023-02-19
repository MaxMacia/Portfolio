import { useState } from 'react';
import closedFolder from '../../assets/folder-closed.png';
import { categories } from '../data/categories';
import Window from '../Window';
import TxtWindow from '../TxtWindow';
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
	z-index: 0;
`;

const FirstWindowWrapper = styled.div<{ firstWindowOpen: boolean }>`
	display: none;
	${(props) =>
		props.firstWindowOpen &&
		`
        display: block;
        position: absolute;
        left: 8%;
        top: 20px;
        height: 597px;
        width: 90%;
        z-index: 1;
    `}
`;

const SecondWindowWrapper = styled.div<{ secondWindowOpen: boolean }>`
	display: none;
	${(props) =>
		props.secondWindowOpen &&
		`
        display: block;
        position: absolute;
        left: 11%;
        top: 60px;
        height: 597px;
        width: 90%;
        z-index: 2;
    `}
`;

const ThirdWindowWrapper = styled.div<{ thirdWindowOpen: boolean }>`
	display: none;
	${(props) =>
		props.thirdWindowOpen &&
		`
        display: block;
        position: absolute;
        left: 7%;
        top: 90px;
        height: 597px;
        width: 90%;
        z-index: 3;
    `}
`;

const TxtWindowWrapper = styled.div<{ txtWindowOpen: boolean }>`
	display: none;
	${(props) =>
		props.txtWindowOpen &&
		`
        display: block;
        position: absolute;
        left: 25%;
        top: 30px;
        height: 599px;
        width: 60%;
        z-index: 4;
    `}
`;

const Figure = styled.figure<{ isOnDesktop: boolean }>`
	display: none;
	${(props) =>
		props.isOnDesktop &&
		`
        display: block;
        height: fit-content;
        cursor: pointer;
    `}
`;

const Img = styled.img`
	height: 100px;
	margin-bottom: 10px;
`;

const FigCap = styled.figcaption`
	padding-left: 14%;
	color: ${colors.white};
	font-weight: bold;
`;

const Desktop = () => {
	const [firstWindowOpen, setFirstWindowOpen] = useState<boolean>(false);
	const [secondWindowOpen, setSecondWindowOpen] = useState<boolean>(false);
	const [thirdWindowOpen, setThirdWindowOpen] = useState<boolean>(false);
    const [txtWindowOpen, setTxtWindowOpen] = useState<boolean>(false);
	const [firstWindowType, setFirstWindowType] = useState<string>('');
	const [secondWindowType, setSecondWindowType] = useState<string>('');
	const [thirdWindowType, setThirdWindowType] = useState<string>('');

	const openWindow = (event: any) => {
		setFirstWindowOpen(true);

		const className = event.target.className.split(' ');
		const category = className[className.length - 1];

		switch (category) {
			case categories[0].name:
				setFirstWindowType(categories[0].name);
				break;
			case categories[1].name:
				setFirstWindowType(categories[1].name);
				break;
			case categories[2].name:
				setFirstWindowType(categories[2].name);
				break;
			case categories[3].name:
				setFirstWindowType(categories[3].name);
				break;
		}
	};

	return (
		<Container>
			<FirstWindowWrapper firstWindowOpen={firstWindowOpen}>
				<Window
					level={1}
					firstWindowType={firstWindowType}
					setFirstWindowType={setFirstWindowType}
					secondWindowType={secondWindowType}
					setSecondWindowType={setSecondWindowType}
					thirdWindowType={thirdWindowType}
					setThirdWindowType={setThirdWindowType}
					setFirstWindowOpen={setFirstWindowOpen}
					setSecondWindowOpen={setSecondWindowOpen}
					setThirdWindowOpen={setThirdWindowOpen}
                    setTxtWindowOpen={setTxtWindowOpen}
				/>
			</FirstWindowWrapper>
			<SecondWindowWrapper secondWindowOpen={secondWindowOpen}>
				<Window
					level={2}
					firstWindowType={firstWindowType}
					setFirstWindowType={setFirstWindowType}
					secondWindowType={secondWindowType}
					setSecondWindowType={setSecondWindowType}
					thirdWindowType={thirdWindowType}
					setThirdWindowType={setThirdWindowType}
					setFirstWindowOpen={setFirstWindowOpen}
					setSecondWindowOpen={setSecondWindowOpen}
					setThirdWindowOpen={setThirdWindowOpen}
                    setTxtWindowOpen={setTxtWindowOpen}
				/>
			</SecondWindowWrapper>
			<ThirdWindowWrapper thirdWindowOpen={thirdWindowOpen}>
				<Window
					level={3}
					firstWindowType={firstWindowType}
					setFirstWindowType={setFirstWindowType}
					secondWindowType={secondWindowType}
					setSecondWindowType={setSecondWindowType}
					thirdWindowType={thirdWindowType}
					setThirdWindowType={setThirdWindowType}
					setFirstWindowOpen={setFirstWindowOpen}
					setSecondWindowOpen={setSecondWindowOpen}
					setThirdWindowOpen={setThirdWindowOpen}
                    setTxtWindowOpen={setTxtWindowOpen}
				/>
			</ThirdWindowWrapper>
            <TxtWindowWrapper txtWindowOpen={txtWindowOpen}>
                <TxtWindow
                    firstWindowType={firstWindowType}
                    thirdWindowType={thirdWindowType}
                    setTxtWindowOpen={setTxtWindowOpen}
                />
            </TxtWindowWrapper>
			{categories.map((entrie, index) => (
				<Figure key={index} onClick={openWindow} isOnDesktop={index < 4}>
					<Img
						className={entrie.name}
						src={closedFolder}
						alt={`Dossier ${entrie.title}`}
					/>
					<FigCap className={entrie.name}>{entrie.title}</FigCap>
				</Figure>
			))}
		</Container>
	);
};

export default Desktop;
