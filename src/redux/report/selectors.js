import { createSelector } from "reselect";

export const reportState = state => state.report || {};

export const selectReportStatus = createSelector(
  reportState,
  report => report.status,
);

export const selectReportImage = createSelector(
  reportState,
  report => report.image,
);

export const selectReportLocationShared = createSelector(
  reportState,
  report => report.location.shared,
);

export const selectReportLocationFetching = createSelector(
  reportState,
  report => report.location.fetching,
);

export const selectReportLocationCoords = createSelector(
  reportState,
  report => report.location.coords,
);

export const selectReportLocationMethod = createSelector(
  reportState,
  report => report.location.method,
);

export const selectReportDetails = createSelector(
  reportState,
  report => report.details,
);
