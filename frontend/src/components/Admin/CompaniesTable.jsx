import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
    const { companies, searchCompanyByText } = useSelector((store) => store.company);
    const [filterCompany, setFilterCompany] = useState(companies);
    const navigate = useNavigate();

    useEffect(() => {
        const filteredCompany = companies.filter((company) =>
            searchCompanyByText ? company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase()) : true
        );
        setFilterCompany(filteredCompany);
    }, [companies, searchCompanyByText]);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="overflow-x-auto">
            <Table className="w-full">
                <TableCaption>A list of Your recent registered companies</TableCaption>
                <TableHeader>
                    <TableRow className="bg-gray-100">
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filterCompany?.map((company, index) => (
                        <motion.tr key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }} className="hover:bg-gray-50">
                            <TableCell>
                                <Avatar>
                                    <AvatarImage className="object-cover" src={company?.logo} />
                                </Avatar>
                            </TableCell>
                            <TableCell>{company?.name}</TableCell>
                            <TableCell>{company?.createdAt.split("T")[0]}</TableCell>
                            <TableCell className="text-right">
                                <Popover>
                                    <PopoverTrigger className="cursor-pointer">
                                        <MoreHorizontal />
                                    </PopoverTrigger>
                                    <PopoverContent className="w-32 bg-white shadow-lg rounded-md p-2">
                                        <div onClick={() => navigate(`/admin/companies/${company._id}`)} className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                                            <Edit2 className="w-4" />
                                            <span>Edit</span>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </TableCell>
                        </motion.tr>
                    ))}
                </TableBody>
            </Table>
        </motion.div>
    );
};

export default CompaniesTable;
