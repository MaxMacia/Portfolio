import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';
import { devices } from '../../utils/styles/devices';

export const Container = styled.div`
	background-color: ${colors.desktop};
	display: flex;
	justify-content: flex-end;
	flex-wrap: wrap;
	padding-top: 200px;
	height: 100%;
	position: relative;
	z-index: 0;
    @media ${devices.mobile} {
        padding-top: 10px;
        justify-content: space-around;
    }
    @media ${devices.mobileL} {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 90%;
    }
    @media ${devices.tablet} {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 90%;
    }
`;

export const FirstWindowWrapper = styled.div<{ firstWindowOpen: boolean }>`
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
        @media ${devices.mobile} {
		    height: 460px;
	    }
        @media ${devices.mobileL} {
		    height: 460px;
	    }
        @media ${devices.tablet} {
		    height: 460px;
	    }
    `}
`;

export const SecondWindowWrapper = styled.div<{ secondWindowOpen: boolean }>`
	display: none;
	${(props) =>
		props.secondWindowOpen &&
		`
        display: block;
        position: absolute;
        left: 9%;
        top: 60px;
        height: 597px;
        width: 90%;
        z-index: 2;
        @media ${devices.mobile} {
		    height: 460px;
	    }
        @media ${devices.mobileL } {
		    height: 460px;
	    }
        @media ${devices.tablet} {
		    height: 460px;
	    }
    `}
`;

export const ThirdWindowWrapper = styled.div<{ thirdWindowOpen: boolean }>`
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
        @media ${devices.mobile} {
		    height: 460px;
	    }
        @media ${devices.mobileL} {
		    height: 460px;
	    }
        @media ${devices.tablet} {
		    height: 460px;
	    }
    `}
`;

export const TxtWindowWrapper = styled.div<{ txtWindowOpen: boolean }>`
	display: none;
	${(props) =>
		props.txtWindowOpen &&
		`
        display: block;
        position: absolute;
        left: 20%;
        top: 30px;
        height: 599px;
        width: 60%;
        z-index: 4;
        @media ${devices.mobile} {
		    width: 95%;
            left: 5%;
	    }
        @media ${devices.mobileL} {
		    width: 95%;
            left: 5%;
	    }
        @media ${devices.tablet} {
		    width: 95%;
            left: 5%;
	    }
    `}
`;

export const Figure = styled.figure<{ isOnDesktop: boolean }>`
	display: none;
	${(props) =>
		props.isOnDesktop &&
		`
        display: block;
        height: fit-content;
        cursor: pointer;
        @media ${devices.tablet} {
            margin: 16px 20px 16px 20px;
        }
    `}
`;

export const Img = styled.img`
	height: 100px;
	margin-bottom: 10px;
    @media ${devices.mobile} {
		height: 80px;
	}
    @media ${devices.mobileL} {
		height: 80px;
	}
    @media ${devices.tablet} {
        height: 100px;
    }
`;

export const FigCap = styled.figcaption`
	padding-left: 14%;
	color: ${colors.white};
	font-weight: bold;
`;
