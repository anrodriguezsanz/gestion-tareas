import { Space, Input, Select } from 'antd';

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
    return (
        <Space>
            <Input
                placeholder="Buscar por título..."
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