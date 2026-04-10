import { Tag } from 'antd';
import { useTranslation } from 'react-i18next';
import { COMPLETED_STATUS } from '../../constants/constants';

export const StatusTag = ({ status }: { status: string }) => {
  const { t } = useTranslation();
  
  const statusText = status === COMPLETED_STATUS 
    ? t('tasks.status.completed') 
    : t('tasks.status.pending');

  return (
    <Tag color={status === COMPLETED_STATUS ? 'green' : 'volcano'}>
      {statusText.toUpperCase()}
    </Tag>
  );
};