import { createSelector } from 'reselect';

const selectDataState = (state) => state || { nodes: [], links: [] };

export const selectNodes = createSelector(
  [selectDataState],
  (data) => data.nodes || []
);

export const selectLinks = createSelector(
  [selectDataState],
  (data) => data.links || []
);
