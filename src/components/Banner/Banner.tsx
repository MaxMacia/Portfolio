import picture from '../../assets/pp.jpg';
import {
	Container,
	HeadingContainer,
	Img,
	Heading,
	IconsContainer,
	IconWiFi,
	BatteryContainer,
	Percentage,
	IconBattery,
} from './Banner.style';

const Banner = () => {
	return (
		<Container>
			<HeadingContainer>
				<Img src={picture} alt="Maxence Macia" />
				<Heading>Maxence Macia - Web Developper</Heading>
			</HeadingContainer>
			<IconsContainer>
				<IconWiFi className="fa-solid fa-wifi" data-testid="wifi" />
				<BatteryContainer>
					<Percentage>75%</Percentage>
					<IconBattery
						className="fa-solid fa-battery-three-quarters"
						data-testid="battery"
					/>
				</BatteryContainer>
			</IconsContainer>
		</Container>
	);
};

export default Banner;
