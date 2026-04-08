import { Tag } from 'antd';
import { COMPLETED_STATUS } from '../../../../../core/constants';

export const StatusTag = ({ status }: { status: string }) => (
  <Tag color={status === COMPLETED_STATUS ? 'green' : 'volcano'}>
    {status.toUpperCase()}
  </Tag>
);