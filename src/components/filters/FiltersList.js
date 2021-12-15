import FiltersLink from "./FiltersLink";

function FiltersList({ categories }) {
  return (
    <div>
      {categories.map(category => {
        <FiltersLink textContent={category.name}/>
      })}
    </div>
  );
}

export default FiltersList;