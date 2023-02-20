import ControlledPopup from '../ControlledPopup';
import picture from '../../assets/pp.jpg';
import bookiDesktop from '../../assets/booki-desktop.png';
import bookiMobile from '../../assets/booki-mobile.png';
import ohmyfoodMenus from '../../assets/ohmyfood-menus.png';
import ohmyfoodRestaurants from '../../assets/ohmyfood-restaurants.png';
import laPanthere from '../../assets/lapanthere.png';
import kanapNosProduits from '../../assets/Kanap-nosproduits.png';
import kanapPanier from '../../assets/Kanap-panier.png';
import hotTakesPageSauces from '../../assets/HotTakes-pagesauces.png';
import hotTakesLogin from '../../assets/HotTakes-login.png';
import kasaPageDaccueil from '../../assets/Kasa-pagedaccueil.png';
import kasaPageAppartement from '../../assets/Kasa-pageappartement.png';
import portfolioPageDaccueil from '../../assets/portfolio-pagedaccueil.png';
import portfolioAboutMe from '../../assets/portfolio-aboutme.png';
import rezoLogin from '../../assets/Rezo-login.png';
import rezoTl from '../../assets/Rezo-TL.png';
import calculator from '../../assets/Calculator.png';
import { categories } from '../data/categories';
import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';
import { devices } from '../../utils/styles/devices';

const Container = styled.div`
	border: 1px solid ${colors.black};
	width: 90%;
	height: 599px;
`;

const TopBar = styled.div`
	border: 1px solid ${colors.black};
	background-color: ${colors.secondary};
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

const WindowContent = styled.div`
	border: 1px solid ${colors.black};
	background-color: ${colors.white};
	height: 571px;
	display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media ${devices.mobile} {
        justify-content: space-around;
    }
    @media ${devices.mobileL} {
        justify-content: space-around;
    }
    @media ${devices.tablet} {
        justify-content: space-around;
    }
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
    @media ${devices.mobile} {
        width: 90%;
    }
    @media ${devices.mobileL} {
        width: 90%;
    }
    @media ${devices.tablet} {
        width: 90%;
    }
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
                    <PopupWrapper cat={thirdWindowType === 'HotTakes'}>
                        <ControlledPopup picture={hotTakesPageSauces} alt={"screenshot HotTakes page sauces"} />
                    </PopupWrapper>
                    <PopupWrapper cat={thirdWindowType === 'HotTakes'}>
                        <ControlledPopup picture={hotTakesLogin} alt={"screenshot HotTakes page login/signup"} />
                    </PopupWrapper>
                    <PopupWrapper cat={thirdWindowType === 'Kasa'}>
                        <ControlledPopup picture={kasaPageDaccueil} alt={"screenshot Kasa page d'accueil"} />
                    </PopupWrapper>
                    <PopupWrapper cat={thirdWindowType === 'Kasa'}>
                        <ControlledPopup picture={kasaPageAppartement} alt={"screenshot Kasa page appartement"} />
                    </PopupWrapper>
                    <PopupWrapper cat={thirdWindowType === 'Portfolio'}>
                        <ControlledPopup picture={portfolioPageDaccueil} alt={"screenshot Portfoilo page d'accueil"} />
                    </PopupWrapper>
                    <PopupWrapper cat={thirdWindowType === 'Portfolio'}>
                        <ControlledPopup picture={portfolioAboutMe} alt={"screenshot Portfoilo fenêtre about me"} />
                    </PopupWrapper>
                    <PopupWrapper cat={thirdWindowType === 'Rezo'}>
                        <ControlledPopup picture={rezoLogin} alt={"screenshot Rezo page login/signup"} />
                    </PopupWrapper>
                    <PopupWrapper cat={thirdWindowType === 'Rezo'}>
                        <ControlledPopup picture={rezoTl} alt={"screenshot Rezo page principale utilisateur"} />
                    </PopupWrapper>
                    <PopupWrapper cat={thirdWindowType === 'Calculator'}>
                        <ControlledPopup picture={calculator} alt={"screenshot Calculator"} />
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
                    { Array.isArray(categories[4].subDirectories?.[3].description) ? (
                        categories[4].subDirectories?.[3].description?.map((entrie, index) => (
                            <Para key={index} cat={thirdWindowType === 'Kanap'}>{entrie}</Para>
                        ))
                    ) : (null)}
                    { Array.isArray(categories[4].subDirectories?.[4].description) ? (
                        categories[4].subDirectories?.[4].description?.map((entrie, index) => (
                            <Para key={index} cat={thirdWindowType === 'HotTakes'}>{entrie}</Para>
                        ))
                    ) : (null)}
                    { Array.isArray(categories[4].subDirectories?.[5].description) ? (
                        categories[4].subDirectories?.[5].description?.map((entrie, index) => (
                            <Para key={index} cat={thirdWindowType === 'Kasa'}>{entrie}</Para>
                        ))
                    ) : (null)}
                    { Array.isArray(categories[5].subDirectories?.[0].description) ? (
                        categories[5].subDirectories?.[0].description?.map((entrie, index) => (
                            <Para key={index} cat={thirdWindowType === 'Portfolio'}>{entrie}</Para>
                        ))
                    ) : (null)}
                    { Array.isArray(categories[5].subDirectories?.[1].description) ? (
                        categories[5].subDirectories?.[1].description?.map((entrie, index) => (
                            <Para key={index} cat={thirdWindowType === 'Rezo'}>{entrie}</Para>
                        ))
                    ) : (null)}
                    { Array.isArray(categories[5].subDirectories?.[2].description) ? (
                        categories[5].subDirectories?.[2].description?.map((entrie, index) => (
                            <Para key={index} cat={thirdWindowType === 'Calculator'}>{entrie}</Para>
                        ))
                    ) : (null)}
                    { Array.isArray(categories[5].subDirectories?.[3].description) ? (
                        categories[5].subDirectories?.[3].description?.map((entrie, index) => (
                            <Para key={index} cat={thirdWindowType === 'Animations-CSS'}>{entrie}</Para>
                        ))
                    ) : (null)}
                </TextContainer>
			</WindowContent>
		</Container>
	);
};

export default TxtWindow;
