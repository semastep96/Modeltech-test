export enum fieldActionTypes {
  FETCH_FIELD = 'FETCH_FIELD',
  FETCH_FIELD_ERROR = 'FETCH_FIELD_ERROR',
  ADD_DAYS_INFO = 'ADD_DAYS_INFO',
}

interface fieldState {
  daysDynamic: DayDynamic[];
  loading: boolean;
  error: null | string;
}

interface fetchFieldAction {
  type: fieldActionTypes.FETCH_FIELD;
}

interface fetchFieldErrorAction {
  type: fieldActionTypes.FETCH_FIELD_ERROR;
  payload: {
    message: string;
  };
}

interface fetchFieldSuccessAction {
  type: fieldActionTypes.ADD_DAYS_INFO;
  payload: {
    daysDynamic: DayDynamic[];
  };
}

export type fieldAction =
  | fetchFieldAction
  | fetchFieldErrorAction
  | fetchFieldSuccessAction;

const initialState: fieldState = {
  daysDynamic: [],
  loading: false,
  error: null,
};

export const fieldReducer = (
  state = initialState,
  action: fieldAction
): fieldState => {
  switch (action.type) {
    case fieldActionTypes.FETCH_FIELD:
      return { error: null, loading: true, daysDynamic: [] };
    case fieldActionTypes.FETCH_FIELD_ERROR:
      return { error: action.payload.message, loading: false, daysDynamic: [] };
    case fieldActionTypes.ADD_DAYS_INFO:
      return {
        error: null,
        loading: false,
        daysDynamic: action.payload.daysDynamic,
      };
    default:
      return state;
  }
};
