import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useSelector } from 'react-redux';
import store from '@/redux/store';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import axios from 'axios';
import { JOB_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const PostJobs = () => {
    const [input, setInput] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        jobType: "",
        experience: "",
        position: 0,
        companyId: "",
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { companies } = useSelector(store => store.company);

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const selectChangeHandler = (value) => {
        const selectedCompany = companies?.find((company) => company?.name.toLowerCase() === value);
        setInput({ ...input, companyId: selectedCompany?._id });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            if (res?.data?.success) {
                toast.success(res?.data?.message);
                navigate("/admin/jobs");
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="mt-6 flex items-center justify-center w-screen min-h-screen pt-10">
                <motion.form
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    onSubmit={submitHandler}
                    className="shadow-lg p-8 max-w-4xl w-full border border-gray-200 rounded-md"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { name: "title", label: "Title" },
                            { name: "description", label: "Description" },
                            { name: "requirements", label: "Requirements" },
                            { name: "salary", label: "Salary" },
                            { name: "location", label: "Location" },
                            { name: "jobType", label: "Job Type" },
                            { name: "experience", label: "Experience Level" },
                            { name: "position", label: "No. of Position", type: "number" }
                        ].map((field, index) => (
                            <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                                <Label>{field.label}</Label>
                                <Input
                                    type={field.type || "text"}
                                    name={field.name}
                                    value={input[field.name]}
                                    onChange={changeEventHandler}
                                    className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                                />
                            </motion.div>
                        ))}
                    </div>

                    {companies.length > 0 && (
                        <Select onValueChange={selectChangeHandler}>
                            <SelectTrigger className="w-full mt-2">
                                <SelectValue placeholder="Select a Company" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Companies</SelectLabel>
                                    {companies?.map((company) => (
                                        <SelectItem key={company._id} value={company?.name?.toLowerCase()}>
                                            {company?.name}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    )}

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full mt-6 py-3 text-lg font-semibold rounded-md bg-[#0E1627] text-white flex justify-center items-center"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Posting...
                            </>
                        ) : (
                            "Post Job"
                        )}
                    </motion.button>

                    {companies?.length === 0 && (
                        <p className="text-xs text-red-600 font-bold text-center my-3">
                            *Please register a company first, before posting a job
                        </p>
                    )}
                </motion.form>
            </div>
        </div>
    );
};

export default PostJobs;
