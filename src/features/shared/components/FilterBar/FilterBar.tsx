import { Space, Input, Select } from 'antd';
import { useTranslation } from 'react-i18next';

interface SelectOption {
    value: string;
    label: string;
}

interface FilterBarProps {
    searchValue: string;
    selectValue: string;
    selectOptions: SelectOption[];
    onSearchChange: (value: string) => void;
    onSelectChange: (value: string) => void;
}

export const FilterBar = ({
    searchValue,
    selectValue,
    selectOptions,
    onSearchChange,
    onSelectChange
}: FilterBarProps) => {
    const { t } = useTranslation();
    
    return (
        <Space>
            <Input
                placeholder={t('tasks.filters.searchPlaceholder')}
                value={searchValue}
                onChange={(e) => onSearchChange(e.target.value)}
                style={{ width: 250 }}
            />
            <Select
                value={selectValue}
                onChange={onSelectChange }
                style={{ width: 150}}
                options={selectOptions}
            />
        </Space>
    )
}