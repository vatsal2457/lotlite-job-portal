import { setUser } from "@/redux/authSlice";
import { USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { LogOut, Menu, User2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-white shadow-md fixed top-0 left-0 w-full z-50 ">
    <div className="flex items-center justify-between mx-auto max-w-screen-xl h-16 px-4 md:px-8">
      {/* Logo */}
      <h1 className="text-2xl font-bold">
        Job<span className="text-[#F83002]">Portal</span>
      </h1>

      {/* Right Section (Navigation + Profile Section) */}
      <div className="flex items-center gap-6 ml-auto">
        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex font-medium items-center gap-5">
          {user && user.role === "recruiter" ? (
            <>
              <li>
                <Link className="hover:text-[#F83002]" to="/admin/companies">
                  Companies
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F83002]" to="/admin/jobs">
                  Jobs
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className="hover:text-[#F83002]" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F83002]" to="/jobs">
                  Jobs
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F83002]" to="/browse">
                  Browse
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Profile Section */}
        <div className="flex items-center gap-4">
          {/* Show Hamburger Menu Only When User is Logged In */}
          {user && (
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <Menu size={28} />
            </button>
          )}

          {/* If user is logged in, show profile avatar */}
          {user ? (
            <div className="flex items-center">
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer w-10 h-10">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="User"
                      className="object-cover rounded-full"
                    />
                  </Avatar>
                </PopoverTrigger>

                <PopoverContent className="w-80">
                  <div className="flex gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={user?.profile?.profilePhoto} alt="User" />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{user?.name}</h4>
                      <p className="text-sm text-muted-foreground">{user?.profile?.bio}</p>
                    </div>
                  </div>

                  <div className="flex flex-col my-2 text-gray-600">
                    {user?.role === "student" && (
                      <div className="flex items-center gap-2 cursor-pointer">
                        <User2 />
                        <Button variant="link">
                          <Link to="/profile">View Profile</Link>
                        </Button>
                      </div>
                    )}
                    <div className="flex items-center gap-2 cursor-pointer">
                      <LogOut />
                      <Button onClick={logoutHandler} variant="link">
                        Logout
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          ) : (
            // Show Login & Signup buttons when user is not logged in
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Mobile Navigation Menu */}
    {menuOpen && user && (
      <div className="md:hidden bg-white shadow-md w-full p-4">
        <ul className="flex flex-col font-medium gap-4">
          {user.role === "recruiter" ? (
            <>
              <li>
                <Link className="hover:text-[#F83002]" to="/admin/companies" onClick={() => setMenuOpen(false)}>
                  Companies
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F83002]" to="/admin/jobs" onClick={() => setMenuOpen(false)}>
                  Jobs
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className="hover:text-[#F83002] " to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F83002]" to="/jobs" onClick={() => setMenuOpen(false)}>
                  Jobs
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F83002]" to="/browse" onClick={() => setMenuOpen(false)}>
                  Browse
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    )}
  </div>
  
  );
};

export default Navbar;
