import {
  GET_METRIC_LISTING,
  GET_VEHICLE_LISTING,
  //   GET_WAREHOUSE_LIST,
  //  SAVE_COMPANY_DETAIL,
  //   UPDATE_COMPANY_DETAIL,
  //  WAREHOUSE_CITY_LISTING,
  //  WAREHOUSE_CITY_FILTER,
  VEHICLE_TYPE_FILTER,
  VEHICLE_CERTIFICATE_TYPE_FILTER,
  VEHICLE_METRIC_TYPE_FILTER,
  VEHICLE_DETAILS,
  GET_REQUEST_LISTING,
  GET_CERTIFICATION_LISTING,
  VEHICLE_TRUCK_TYPE_FILTER,
  VEHICLE_DATE_FILTER,
} from '../actions/types';
let initialState = {
  metric: [],
  vehiclesType: [],
  filterVehicle: {
    from_place: '',
    to_place: '',
    vehicle_type: '',
    metric_type: '',
    truck_available_for: '',
    truck_available_date: '',
  },
  //  warehouseCityList: [],
  currentVehicleDetails: {},
  certificateListing: [],
};
export default function(state = initialState, action) {
  switch (action.type) {
    // extra
    case GET_METRIC_LISTING:
      return {...state, metric: action.payload};
    case GET_VEHICLE_LISTING:
      return {...state, vehiclesType: action.payload};
    //   case SAVE_COMPANY_DETAIL:
    //     return {...state, company: action.payload};
    //   case WAREHOUSE_CITY_LISTING:
    //     return {...state, warehouseCityList: action.payload};
    //   case UPDATE_COMPANY_DETAIL:
    //     return {...state, company: {...state.company, ...action.payload}};
    //   case GET_REQUEST_LISTING:
    //     return {
    //       ...state,
    //       requestListing: {...state.requestListing, ...action.payload},
    //     };
    //   case GET_CERTIFICATION_LISTING:
    //     return {
    //       ...state,
    //       certificateListing: action.payload,
    //     };
    //   case WAREHOUSE_CITY_FILTER:
    //     return {
    //       ...state,
    //       filterVehicle: {...state.filterVehicle, city_id: action.payload},
    //     };
    case VEHICLE_TYPE_FILTER:
      return {
        ...state,
        filterVehicle: {
          ...state.filterVehicle,
          vehicle_type: action.payload,
        },
      };
    case VEHICLE_DATE_FILTER:
      return {
        ...state,
        filterVehicle: {
          ...state.filterVehicle,
          truck_available_date: action.payload,
        },
      };
    case VEHICLE_METRIC_TYPE_FILTER:
      return {
        ...state,
        filterVehicle: {
          ...state.filterVehicle,
          metric_type: action.payload,
        },
      };
    // case VEHICLE_CERTIFICATE_TYPE_FILTER:
    //   var index = state.filterVehicle.certificates.findIndex(
    //     x => x === action.payload,
    //   );
    //   if (index === -1) {
    //     state.filterVehicle.certificates.push(action.payload);
    //   } else {
    //     state.filterVehicle.certificates.splice(index, 1);
    //   }
    //   return {
    //     ...state,
    //     filterVehicle: {
    //       ...state.filterVehicle,
    //       certificates: [...state.filterVehicle.certificates],
    //     },
    //   };
    case VEHICLE_TRUCK_TYPE_FILTER:
      return {
        ...state,
        filterVehicle: {
          ...state.filterVehicle,
          truck_available_for: action.payload,
        },
      };
    case VEHICLE_DETAILS:
      return {...state, currentVehicleDetails: action.payload};
    case 'CLEAR_ALL_VEHICLE':
      return {
        ...state,
        filterVehicle: {
          city_id: '',
          vehicle_type: '',
          metric_type: '',
          certificates: [],
        },
      };
    default:
      return state;
  }
}
