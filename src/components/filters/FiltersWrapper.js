import FiltersList from "./FiltersList";
import FiltersListHeader from "./FiltersListHeader";

function FiltersWrapper() {
  return (
    <div>
      <FiltersListHeader/>
      <FiltersList/>
    </div>
  );
}

export default FiltersWrapper;