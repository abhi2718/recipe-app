export const FILTER_MEALS="FILTER_MEALS";

const filterMeals=filterObject=>({type:FILTER_MEALS,payload:filterObject});
export default filterMeals;