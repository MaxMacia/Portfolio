const sizes = {
    mobile: '375px',
    mobileL: '425px',
    tablet: '820px',
    desktop: '1024px'
};

export const devices = {
    mobile: `(max-width: ${sizes.mobile})`,
    mobileL: `(min-width: ${sizes.mobile}) and (max-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.mobileL}) and (max-width: ${sizes.tablet})`,
    desktop: `(max-width: ${sizes.desktop})`
};