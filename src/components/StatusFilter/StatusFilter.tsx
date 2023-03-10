
import { useSelector, useDispatch } from 'react-redux';

import { setStatusFilter } from 'redux/filtersSlice';

import { statusFilters } from 'redux/constants';
import { selectStatusFilter } from 'redux/selectors';
import { Button } from 'components/Button/Button';
import styles from "./StatusFilter.module.scss";

export const StatusFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = (filter: string) => dispatch(setStatusFilter(filter));

  return (
    <div className={styles.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
