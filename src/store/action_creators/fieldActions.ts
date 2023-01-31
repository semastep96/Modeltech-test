import { fieldAction, fieldActionTypes } from './../reducers/fieldReducer';
import { Dispatch } from 'redux';
import { API } from '../../api/api';

export const fetchFieldError = (payload: string): fieldAction => ({
  type: fieldActionTypes.FETCH_FIELD_ERROR,
  payload: {
    message: payload,
  },
});

export const addFieldDaysInfo = (payload: DayDynamic[]): fieldAction => ({
  type: fieldActionTypes.ADD_DAYS_INFO,
  payload: {
    daysDynamic: payload,
  },
});

export const fetchField = (fieldName: string) => {
  return async (dispatch: Dispatch<fieldAction>) => {
    try {
      dispatch({ type: fieldActionTypes.FETCH_FIELD });
      const info = await API.fetchFieldData(fieldName);
      dispatch(addFieldDaysInfo(info));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(fetchFieldError(error.message));
      }
    }
  };
};
