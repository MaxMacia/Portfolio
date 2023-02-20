import { useState } from 'react';
import closedFolder from '../../assets/folder-closed.png';
import { categories } from '../data/categories';
import Window from '../Window';
import TxtWindow from '../TxtWindow';
import {
	Container,
	FirstWindowWrapper,
	SecondWindowWrapper,
	ThirdWindowWrapper,
	TxtWindowWrapper,
	Figure,
	Img,
	FigCap,
} from './Desktop.style';

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
