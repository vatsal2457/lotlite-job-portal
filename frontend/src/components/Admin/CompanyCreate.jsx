import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companySlice";

const CompanyCreate = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState("");
    const dispatch = useDispatch();

    const registerNewCompany = async () => {
        try {
            const res = await axios.post(
                `${COMPANY_API_END_POINT}/register`,
                { companyName },
                { headers: { "Content-Type": "application/json" }, withCredentials: true }
            );
            if (res?.data?.success) {
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message);
                navigate(`/admin/companies/${res?.data?.company?._id}`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="w-full min-h-screen">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 pt-10">
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="my-10">
                    <h1 className="font-bold text-2xl">Create Company</h1>
                    <p className="text-gray-500">Create a new company to post jobs and manage the company profile.</p>
                </motion.div>

                <Label>Company Name</Label>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Input type="text" className="my-2 w-full" placeholder="JobHunt, Microsoft etc." onChange={(e) => setCompanyName(e.target.value)} />
                </motion.div>

                <div className="flex flex-col md:flex-row items-center gap-2 my-10">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/admin/companies")}
                        className="w-full md:w-auto px-4 py-2 rounded-md border border-black text-black bg-white"
                    >
                        Cancel
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={registerNewCompany}
                        className="w-full md:w-auto px-4 py-2 rounded-md bg-[#0E1627] text-white"
                    >
                        Continue
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default CompanyCreate;
