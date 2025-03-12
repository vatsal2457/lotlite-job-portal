import { useSelector } from "react-redux";
import Navbar from "../shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import store from "@/redux/store";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../shared/Footer";

const Jobs = () => {
  const { allJobs, searchQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchQuery) {
      const filteredJobs = allJobs.filter((job) => {
        return (
          job?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job?.company?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job?.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job?.jobType?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          String(job?.salary)?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          String(job?.position)?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job?.experience?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job?.description?.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchQuery]);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-20 p-4 mt-20 pb-12 ">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Filter Section */}
          <div className="w-full md:w-1/4 lg:w-1/5">
            <FilterCard />
          </div>

          {/* Jobs Section */}
          <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
            {filterJobs.length <= 0 ? (
              <span className="block text-center text-gray-500">Jobs Not Found</span>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterJobs.map((job) => (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    key={job._id}
                  >
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Jobs;
