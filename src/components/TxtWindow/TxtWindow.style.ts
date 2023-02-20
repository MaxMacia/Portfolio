import styled from 'styled-components';
import { colors } from '../../utils/styles/colors';
import { devices } from '../../utils/styles/devices';

export const Container = styled.div`
	border: 1px solid ${colors.black};
	width: 90%;
	height: 599px;
`;

export const TopBar = styled.div`
	border: 1px solid ${colors.black};
	background-color: ${colors.secondary};
	height: 24px;
	display: flex;
	justify-content: flex-start;
`;

export const CloseButton = styled.i`
	color: ${colors.white};
	padding-left: 1%;
	padding-top: 4px;
	cursor: pointer;
`;

export const WindowContent = styled.div`
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

export const ImgContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
`;

export const Picture = styled.img<{ aboutMe: boolean }>`
    display: none;
    ${props => props.aboutMe && `
        display: block;
        height: 100px;
        border-radius: 100px;
        margin-top: 20px;
    `}
`;

export const PopupWrapper = styled.div<{ cat: boolean }>`
    display: none;
    ${props => props.cat && `
        display: block;
    `}
`;

export const TextContainer = styled.div`
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

export const Para = styled.p<{ cat: boolean }>`
    display: none;
    ${props => props.cat && `
        display: inline-block;
        margin: 11px 0px 11px 0px;
    `}
`;
