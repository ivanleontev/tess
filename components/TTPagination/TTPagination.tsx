import { Pagination } from 'antd';

interface PaginationProps {
  defaultCurrent: number;
  total: number;
}

export const TTPagination = ({ defaultCurrent, total }: PaginationProps) => (
  <Pagination defaultCurrent={defaultCurrent} total={total} />
);
