import { RiArrowDownSLine } from "react-icons/ri";
import { useToggle } from "../../hooks";

const Filter = ({ handleFilterByRegion, regions, filterRegion }) => {
  const [isFilterOpen, setIsFilterOpen] = useToggle(false);
  return (
    <div className="max-w-[14rem] relative mt-12">
      <button
        className="dark:darkmode-element lightmode-element transition-element flex justify-between items-center  w-full p-4 shadow-surrounding rounded-lg"
        onClick={setIsFilterOpen}
      >
        <span className="capitalize">
          {filterRegion ? filterRegion : "Filter by Region"}
        </span>
        <span>
          <RiArrowDownSLine />
        </span>
      </button>
      {isFilterOpen && (
        <ul className="dark:darkmode-element lightmode-element transition-element rounded-lg shadow-surrounding p-4 absolute top-[120%] left-0 w-full flex flex-col">
          {regions.map((region, index) => (
            <li
              key={index}
              className="capitalize p-2 hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer"
              onClick={() => {
                handleFilterByRegion(region);
              }}
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
