import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from 'redux/constants';
import { RootState } from './store';

export const selectTasks = (state: RootState) => state.tasks.items;
export const selectIsLoading = (state: RootState) => state.tasks.isLoading;
export const selectError = (state: RootState) => state.tasks.error;
export const selectStatusFilter = (state: RootState) => state.filters.status;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(task => !task.completed);
      case statusFilters.completed:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }
);

export const selectTaskCount = createSelector([selectTasks], tasks => {
  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
});
