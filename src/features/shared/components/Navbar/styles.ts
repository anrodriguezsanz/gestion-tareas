import { themeConfig } from '../../../../core/theme/theme';

export const navbarStyles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 40px',
        background: '#ffffff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    },
    title: {
        margin: 0,
        color: themeConfig.token.colorPrimary,
        fontWeight: 600,
    },
};
