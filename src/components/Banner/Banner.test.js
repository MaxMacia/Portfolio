import { render, screen } from "@testing-library/react";
import Banner from "./Banner";
import picture from '../../assets/pp.jpg';

describe('Header', () => {
    it('Should render a picture, a name, icons and a percentage', () => {
        render(<Banner />);

        const img = screen.getByAltText('Maxence Macia');
        expect(img).toHaveAttribute('src', picture);

        const name = screen.getByText('Maxence Macia - Web Developper');
        expect(name).toBeInTheDocument();

        const iconWifi = screen.getByTestId('wifi');
        expect(iconWifi).toBeInTheDocument();

        const percentage = screen.getByText('75%');
        expect(percentage).toBeInTheDocument();

        const iconBattery = screen.getByTestId('battery');
        expect(iconBattery).toBeInTheDocument();
    });
});