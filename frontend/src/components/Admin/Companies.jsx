import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";
import useGetAllCompanies from "@/hooks/useGetAllCompanies";
import { useDispatch } from "react-redux";
import { setSearchCompanyByText } from "@/redux/companySlice";

const Companies = () => {
    useGetAllCompanies();
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchCompanyByText(input));
    }, [input]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full min-h-screen"
        >
            <Navbar />
            <div className="max-w-6xl mx-auto my-10 px-4 pt-10">
                <motion.div 
                    className="flex flex-col md:flex-row items-center justify-between my-5 gap-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Input
                        className="w-full md:w-auto"
                        placeholder="Filter by Name"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => navigate("/admin/companies/create")}
                        whileTap={{ scale: 0.95 }}
                        className="w-full md:w-auto px-4 py-2 rounded-md bg-[#0E1627] text-white"
                    >
                        New Company
                    </motion.button>
                </motion.div>
                <CompaniesTable />
            </div>
        </motion.div>
    );
};

export default Companies;
