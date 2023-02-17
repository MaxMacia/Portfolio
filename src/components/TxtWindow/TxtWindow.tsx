import ControlledPopup from '../ControlledPopup';
import picture from '../../assets/pp.jpg';
import bookiDesktop from '../../assets/booki-desktop.png';
import bookiMobile from '../../assets/booki-mobile.png';
import ohmyfoodMenus from '../../assets/ohmyfood-menus.png';
import ohmyfoodRestaurants from '../../assets/ohmyfood-restaurants.png';
import laPanthere from '../../assets/lapanthere.png';
import kanapNosProduits from '../../assets/Kanap-nosproduits.png';
import kanapPanier from '../../assets/Kanap-panier.png';
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

const ImgContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
`;

const Picture = styled.img<{ aboutMe: boolean }>`
    display: none;
    ${props => props.aboutMe && `
        display: block;
        height: 100px;
        border-radius: 100px;
        margin-top: 20px;
    `}
`;

const PopupWrapper = styled.div<{ cat: boolean }>`
    display: none;
    ${props => props.cat && `
        display: block;
    `}
`;

const TextContainer = styled.div`
    width: 60%;
    height: 70%;
    margin-bottom: 10px;
    text-align: justify;
    overflow: scroll;
`;

const Para = styled.p<{ cat: boolean }>`
    display: none;
    ${props => props.cat && `
        display: inline-block;
        margin: 11px 0px 11px 0px;
    `}
`;

type Props = {
	firstWindowType: string,
    thirdWindowType: string,
    setTxtWindowOpen: Function
};

const TxtWindow = ({ firstWindowType,thirdWindowType , setTxtWindowOpen }: Props) => {
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
                    <PopupWrapper cat={thirdWindowType === 'Booki'}>
                        <ControlledPopup picture={bookiDesktop} alt={"screenshot booki version desktop"} />
                    </PopupWrapper>
                    <PopupWrapper cat={thirdWindowType === 'Booki'}>
                        <ControlledPopup picture={bookiMobile} alt={"screenshot booki version mobile"} />
                    </PopupWrapper>
                    <PopupWrapper cat={thirdWindowType === 'Ohmyfood'}>
                        <ControlledPopup picture={ohmyfoodMenus} alt={"screenshot Ohmyfood page menus"} />
                    </PopupWrapper>
                    <PopupWrapper cat={thirdWindowType === 'Ohmyfood'}>
                        <ControlledPopup picture={ohmyfoodRestaurants} alt={"screenshot Ohmyfood page restaurants"} />
                    </PopupWrapper>
                    <PopupWrapper cat={thirdWindowType === 'La-Panthere'}>
                        <ControlledPopup picture={laPanthere} alt={"screenshot La Panthère page d'accueil"} />
                    </PopupWrapper>
                    <PopupWrapper cat={thirdWindowType === 'Kanap'}>
                        <ControlledPopup picture={kanapNosProduits} alt={"screenshot Kanap page d'accueil"} />
                    </PopupWrapper>
                    <PopupWrapper cat={thirdWindowType === 'Kanap'}>
                        <ControlledPopup picture={kanapPanier} alt={"screenshot Kanap page panier"} />
                    </PopupWrapper>
				</ImgContainer>
				<TextContainer>
                    {categories[0].description?.map((entrie, index) =>(
                        <Para key={index} cat={firstWindowType === 'About-me'}>{entrie}</Para>
                    ))}
                    { Array.isArray(categories[4].subDirectories?.[0].description) ? (
                        categories[4].subDirectories?.[0].description?.map((entrie, index) => (
                            <Para key={index} cat={thirdWindowType === 'Booki'}>{entrie}</Para>
                        ))
                    ) : (null)}
                    { Array.isArray(categories[4].subDirectories?.[1].description) ? (
                        categories[4].subDirectories?.[1].description?.map((entrie, index) => (
                            <Para key={index} cat={thirdWindowType === 'Ohmyfood'}>{entrie}</Para>
                        ))
                    ) : (null)}
                    { Array.isArray(categories[4].subDirectories?.[2].description) ? (
                        categories[4].subDirectories?.[2].description?.map((entrie, index) => (
                            <Para key={index} cat={thirdWindowType === 'La-Panthere'}>{entrie}</Para>
                        ))
                    ) : (null)}
                </TextContainer>
			</WindowContent>
		</Container>
	);
};

export default TxtWindow;
