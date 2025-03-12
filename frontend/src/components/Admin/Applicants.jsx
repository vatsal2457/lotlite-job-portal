import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../shared/Navbar";
import ApplicantsTable from "./ApplicantsTable";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAllApplicants } from "@/redux/applicationSlice";
import store from "@/redux/store";

const Applicants = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { applicants } = useSelector(store => store.application);

    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/${params?.id}/applicants`, { withCredentials: true });
                dispatch(setAllApplicants(res?.data?.job));
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllApplicants();
    }, []);

    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-100"
        >
            <Navbar />
            <div className="max-w-7xl mx-auto p-4">
                <motion.h1 
                    className="text-xl my-5 font-bold text-center md:text-left"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Applicants ({applicants?.applications?.length})
                </motion.h1>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-x-auto"
                >
                    <ApplicantsTable />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Applicants;
