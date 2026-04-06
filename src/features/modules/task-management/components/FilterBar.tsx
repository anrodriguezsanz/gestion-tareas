import { Space, Input, Select } from 'antd';
import { useAtom } from 'jotai';
import { filterAtom } from '../utils/store';

export const FilterBar = () => {

    const [filters, setFilters] = useAtom(filterAtom);

    return (
        <Space>
            <Input
                placeholder="Buscar por título..."
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                style={{ width: 250 }}
            />
            <Select
                value={filters.status}
                onChange={(value) => setFilters({ ...filters, status: value })}
                style={{ width: 150}}
                // Usamos la propiedad options en lugar de hijos manuales
                options={[
                    { value: 'todas', label: 'Todas' },
                    { value: 'pendiente', label: 'Pendientes' },
                    { value: 'completada', label: 'Completadas' },
                ]}
            />
        </Space>
    )
}