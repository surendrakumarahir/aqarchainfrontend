import {
  GET_METRIC_LISTING,
  GET_VEHICLE_LILSTING,
  GET_WAREHOUSE_LIST,
  SAVE_COMPANY_DETAIL,
  UPDATE_COMPANY_DETAIL,
  WAREHOUSE_CITY_LISTING,
  WAREHOUSE_CITY_FILTER,
  WAREHOUSE_TYPE_FILTER,
  CERTIFICATE_TYPE_FILTER,
  WAREHOUSE_METRIC_TYPE_FILTER,
  WAREHOUSE_DETAILS,
  GET_REQUEST_LISTING,
  GET_CERTIFICATION_LISTING,
} from '../actions/types';
let initialState = {
  metric: [],
  warehouseType: [],
  company: [],
  filterWarehouse: {
    city_id: '',
    warehouse_type: '',
    metric_type: '',
    certificates: [],
  },
  warehouseCityList: [],
  currentWarehouseDetails: {},
  certificateListing: [],
};
export default function(state = initialState, action) {
  switch (action.type) {
    // extra
    case GET_METRIC_LISTING:
      return {...state, metric: action.payload};
    case GET_WAREHOUSE_LIST:
      return {...state, warehouseType: action.payload};
    case SAVE_COMPANY_DETAIL:
      return {...state, company: action.payload};
    case WAREHOUSE_CITY_LISTING:
      return {...state, warehouseCityList: action.payload};
    case UPDATE_COMPANY_DETAIL:
      return {...state, company: {...state.company, ...action.payload}};
    case GET_REQUEST_LISTING:
      return {
        ...state,
        requestListing: {...state.requestListing, ...action.payload},
      };
    case GET_CERTIFICATION_LISTING:
      return {
        ...state,
        certificateListing: action.payload,
      };
    case WAREHOUSE_CITY_FILTER:
      return {
        ...state,
        filterWarehouse: {...state.filterWarehouse, city_id: action.payload},
      };
    case WAREHOUSE_TYPE_FILTER:
      return {
        ...state,
        filterWarehouse: {
          ...state.filterWarehouse,
          warehouse_type: action.payload,
        },
      };
    case WAREHOUSE_METRIC_TYPE_FILTER:
      return {
        ...state,
        filterWarehouse: {
          ...state.filterWarehouse,
          metric_type: action.payload,
        },
      };
    case CERTIFICATE_TYPE_FILTER:
      var index = state.filterWarehouse.certificates.findIndex(
        x => x === action.payload,
      );
      if (index === -1) {
        state.filterWarehouse.certificates.push(action.payload);
      } else {
        state.filterWarehouse.certificates.splice(index, 1);
      }
      return {
        ...state,
        filterWarehouse: {
          ...state.filterWarehouse,
          certificates: [...state.filterWarehouse.certificates],
        },
      };

    case WAREHOUSE_DETAILS:
      return {...state, currentWarehouseDetails: action.payload};
    case 'CLEAR_ALL':
      return {
        ...state,
        filterWarehouse: {
          city_id: '',
          warehouse_type: '',
          metric_type: '',
          certificates: [],
        },
      };
    default:
      return state;
  }
}
