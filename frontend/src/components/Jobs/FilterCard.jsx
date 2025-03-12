import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/redux/jobSlice";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi NCR",
      "Bangalore",
      "Hyderabad",
      "Pune",
      "Mumbai",
      "Chennai",
      "Kolkata",
      "Ahmedabad",
      "Jaipur",
      "Chandigarh",
    ],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "FullStack Developer",
      "DevOps Engineer",
      "Data Scientist",
      "Machine Learning Engineer",
      "Mobile Developer",
      "Cloud Engineer",
      "UI/UX Designer",
      "Product Manager",
    ],
  },
  {
    filterType: "Salary",
    array: [
      "8",
      "12",
      "80k-120k",
      "120k-160k",
      "160k-200k",
      "200k-240k",
      "240k-280k",
      "280k-320k",
      "320k-360k",
      "360k-400k",
    ],
  },
  {
    filterType: "Experience",
    array: [
      "0-1 years",
      "1-2 years",
      "2-3 years",
      "3-4 years",
      "4-5 years",
      "5-6 years",
      "6-7 years",
      "7-8 years",
      "8-9 years",
      "9-10 years",
    ],
  },
  { filterType: "Job Type", array: ["Full Time", "Part Time"] },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchQuery(selectedValue));
  }, [selectedValue]);

  return (
    <div className="relative w-full">
      {/* Hamburger Button (Mobile Only) */}
      <button
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
        <span>Filters</span>
      </button>

      {/* Filters Container */}
      <div className="sm:block">
        {/* Mobile (Collapsible) */}
        {isOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute sm:hidden left-0 top-12 z-50 w-64 bg-white p-4 rounded-lg shadow-lg overflow-auto"
          >
            <FilterContent
              selectedValue={selectedValue}
              changeHandler={changeHandler}
            />
          </motion.div>
        )}

        {/* Desktop (Always Visible) */}
        <div className="hidden sm:block bg-white p-3 sm:p-5 rounded-md shadow-md">
          <FilterContent
            selectedValue={selectedValue}
            changeHandler={changeHandler}
          />
        </div>
      </div>
    </div>
  );
};

// Reusable Filter Content Component
const FilterContent = ({ selectedValue, changeHandler }) => (
  <>
    <h1 className="font-bold text-lg">Filter Jobs</h1>
    <hr className="mt-3 border-gray-400" />

    <RadioGroup value={selectedValue} onValueChange={changeHandler}>
      {filterData.map((data, index) => (
        <div key={index} className="mt-4">
          <h2 className="font-medium text-lg font-bold">{data.filterType}</h2>
          {data.array.map((item, idx) => {
            const itemId = `id${index}-${idx}`;
            return (
                <div key={itemId} className="flex items-center space-x-2 my-2">
                    <RadioGroupItem value={item} id={itemId} />
                    <Label htmlFor={itemId}>{item}</Label>
                </div>
            );
        })}
        </div>
      ))}
    </RadioGroup>
  </>
);

export default FilterCard;
