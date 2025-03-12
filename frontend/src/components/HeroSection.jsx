import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchQuery(query));
    navigate("/browse");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center container mx-auto px-4"
    >
      <motion.div className="flex flex-col gap-5 my-10">
        <motion.samp
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium text-sm md:text-base"
        >
          No.1 Job Hunt Website
        </motion.samp>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Search, Apply & <br />
          Get Your <span className="text-[#6A38C2]">Dream Job</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-sm md:text-base px-2 md:px-0"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam enim
          accusantium dolore? Saepe, adipisci?
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex w-full md:w-[40%] shadow-lg border-gray-200 rounded-full pl-3 items-center gap-4 mx-auto"
        >
          <input
            type="text"
            placeholder="Find Your Dream Job"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full text-sm md:text-base px-2 py-2"
          />
          <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2] p-2 md:p-3">
            <Search className="h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
 