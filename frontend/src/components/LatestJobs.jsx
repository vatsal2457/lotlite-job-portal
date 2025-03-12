import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";
import store from "@/redux/store";

const LatestJobs = () => {
  const { allJobs } = useSelector(store => store.job);
  
  return (
    <div className="max-w-7xl mx-auto my-10 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center"> 
        <span className="text-[#6A38C2]">Latest & Top </span> Job Openings
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        {
          allJobs && allJobs.length === 0 ? 
            <span className="col-span-full text-center text-gray-500">No Job Available</span> :
            allJobs?.slice(0, 6).map((job) => (
              <LatestJobCards key={job._id} job={job} />
            ))
        }
      </div>
    </div>
  );
};

export default LatestJobs;
