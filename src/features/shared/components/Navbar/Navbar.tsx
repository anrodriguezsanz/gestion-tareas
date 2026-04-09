import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import { navbarStyles as styles } from './styles.ts';

export const Navbar = () => {
    const { Title } = Typography;
    const { t } = useTranslation();

    return (
        <div style={styles.navbar}>
            <Title level={2} style={styles.title}>
                {t('app.title')}
            </Title>
            <LanguageSelector />
        </div>
    );
};
