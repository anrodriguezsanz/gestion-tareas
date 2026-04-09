import { Select } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
    const { i18n } = useTranslation();

    return (
        <Select
            value={i18n.language}
            onChange={(lang) => i18n.changeLanguage(lang)}
            suffixIcon={<GlobalOutlined />}
            style={{ width: 140 }}
            options={[
                { value: 'es', label: 'ES | Español' },
                { value: 'ca', label: 'CA | Català' },
                { value: 'en', label: 'EN | English' }
            ]}
        />
    );
};