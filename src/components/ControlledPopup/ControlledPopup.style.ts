import Popup from "reactjs-popup";
import styled from "styled-components";
import { colors } from "../../utils/styles/colors";
import { devices } from "../../utils/styles/devices";

export const ImgMin = styled.img`
    border: 1px solid ${colors.black};
    height: 100px;
    margin-top: 20px;
    cursor: pointer;
    @media ${devices.mobile} {
        height: 50px;
    }
    @media ${devices.mobileL} {
        height: 50px;
    }
`;

export const StyledPopup = styled(Popup)`
    &-overlay {
        background: rgba(0, 0, 0, 0.5);
    }
`;

export const Img = styled.img`
    height: 500px;
    border: 1px solid ${colors.black};
    @media ${devices.mobile} {
        width: 95%;
        height: auto;
        margin-left: 2%;
    }
    @media ${devices.mobileL} {
        width: 95%;
        height: auto;
        margin-left: 2%;
    }
    @media ${devices.tablet} {
        width: 95%;
        height: auto;
        margin-left: 2%;
    }
`;