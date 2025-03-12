import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { useSelector } from 'react-redux';

const AppliedJobTable = () => {
    const { allAppliedJobs } = useSelector(store => store.job);

    return (
        <div className="overflow-x-auto w-full">
            <Table className="min-w-full">
                <TableCaption className="text-lg font-semibold">List Of Applied Jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center">Date</TableHead>
                        <TableHead className="text-center">Job Role</TableHead>
                        <TableHead className="text-center">Company</TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {allAppliedJobs?.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan="4" className="text-center py-4">
                                You haven't applied for any jobs yet.
                            </TableCell>
                        </TableRow>
                    ) : (
                        allAppliedJobs?.map((appliedJob) => (
                            <TableRow key={appliedJob?._id}>
                                <TableCell className="text-center">{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                                <TableCell className="text-center">{appliedJob?.job?.title}</TableCell>
                                <TableCell className="text-center">{appliedJob?.job?.company?.name}</TableCell>
                                <TableCell className="text-right">
                                    <Badge
                                        className={`px-3 py-1 rounded-md text-white ${
                                            appliedJob?.status === "rejected"
                                                ? 'bg-red-500'
                                                : appliedJob?.status === 'pending'
                                                ? 'bg-gray-500'
                                                : 'bg-green-500'
                                        }`}
                                    >
                                        {appliedJob?.status.toUpperCase()}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default AppliedJobTable;
