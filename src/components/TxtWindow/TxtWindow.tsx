import picture from '../../assets/pp.jpg';
import { categories } from '../data/categories';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';

const Container = styled.div`
	border: 1px solid ${colors.black};
	width: 90%;
	height: 60%;
`;

const TopBar = styled.div`
	border: 1px solid ${colors.black};
	background-color: ${colors.secondary};
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

const WindowContent = styled.div`
	border: 1px solid ${colors.black};
	background-color: ${colors.white};
	height: 95.9%;
	display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ImgContainer = styled.div``;

const Picture = styled.img<{ aboutMe: boolean }>`
    display: none;
    ${props => props.aboutMe && `
        display: block;
        height: 100px;
        border-radius: 100px;
        margin-top: 20px;
    `}
`;

const TextContainer = styled.div`
    width: 60%;
    height: 70%;
    margin-bottom: 10px;
    text-align: justify;
    overflow: scroll;
`;

const ParaAboutMe = styled.p<{ aboutMe: boolean }>`
    display: none;
    ${props => props.aboutMe && `
        display: inline-block;
        margin: 11px 0px 11px 0px;
    `}
`;

type Props = {
	firstWindowType: string,
    setTxtWindowOpen: Function
};

const TxtWindow = ({ firstWindowType, setTxtWindowOpen }: Props) => {
	const closeWindow = () => {
		setTxtWindowOpen(false);
	};

	return (
		<Container>
			<TopBar>
				<CloseButton
					className="fa-sharp fa-solid fa-xmark"
					onClick={closeWindow}
				/>
			</TopBar>
			<WindowContent>
				<ImgContainer>
					<Picture src={picture} alt="Maxence Macia" aboutMe={firstWindowType === 'About-me'} />
				</ImgContainer>
				<TextContainer>
                    {categories[0].description?.map((entries, index) =>(
                        <ParaAboutMe key={index} aboutMe={firstWindowType === 'About-me'}>{entries}</ParaAboutMe>
                    ))}
                </TextContainer>
			</WindowContent>
		</Container>
	);
};

export default TxtWindow;
