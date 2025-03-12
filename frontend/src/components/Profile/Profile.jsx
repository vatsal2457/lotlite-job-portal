import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "../ui/badge";
import { Label } from "../ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";
import { motion } from "framer-motion";

const isResumeUploaded = true;

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <Navbar />
      <motion.div
        className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8 relative"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Profile Section with Proper Pen Icon Alignment */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
          {/* Profile Image & Name */}
          <div className="flex items-center gap-4 w-full">
            <Avatar className="w-20 h-20">
              <AvatarImage
                className="object-cover"
                src={user?.profile?.profilePhoto}
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.name}</h1>
              <p className="text-gray-600">{user?.profile?.bio}</p>
            </div>
          </div>

          {/* Pen Icon with Absolute Positioning */}
          <button
            onClick={() => setOpen(true)}
            className="absolute top-2 right-2 p-2 border rounded-lg hover:bg-gray-100"
          >
            <Pen />
          </button>
        </div>

        {/* Contact Information */}
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>

        {/* Skills Section with Wrap Fix */}
        <div className="my-5">
          <h1 className="font-medium text-lg">Skills</h1>
          <div className="flex flex-wrap gap-2 mt-2 overflow-hidden">
            {user?.profile?.skills.length !== 0 ? (
              user?.profile?.skills.map((item, index) => (
                <Badge key={index} className="px-3 py-1">{item}</Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>

        {/* Resume Section */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResumeUploaded ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={user?.profile?.resume}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </motion.div>

      {/* Applied Jobs Section */}
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-2xl my-5 p-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h1 className="font-bold font-medium text-lg my-5">Applied Jobs</h1>
        <AppliedJobTable />
      </motion.div>

      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </motion.div>
  );
};

export default Profile;
