import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { setUser } from '@/redux/authSlice'

const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phoneNumber: user?.phoneNumber || '',
        bio: user?.bio || '',
        skills: user?.profile?.skills?.join(', ') || '', // Convert skills array to string
        file: user?.profile?.resume || null
    });

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const fileChangeHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('name', input.name);
        formData.append('email', input.email);
        formData.append('phoneNumber', input.phoneNumber);
        formData.append('bio', input.bio);
        formData.append('skills', input.skills);
        if (input.file) formData.append('file', input.file);

        try {
            const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                withCredentials: true
            });

            if (res.data.success) {
                dispatch(setUser(res.data.user));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || 'An error occurred');
        } finally {
            setLoading(false);
            setOpen(false);
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}> {/* Fix: Close on "X" or click outside */}
            <DialogContent className='w-full max-w-lg p-4 md:p-6'>
                <DialogHeader>
                    <DialogTitle>Update Profile</DialogTitle>
                </DialogHeader>
                <form onSubmit={submitHandler}>
                    <div className='grid gap-4 py-2'>
                        {['name', 'email', 'phoneNumber', 'bio', 'skills'].map((field, index) => (
                            <div key={index} className='grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4'>
                                <Label htmlFor={field} className='sm:text-right capitalize'>{field}</Label>
                                <Input
                                    id={field}
                                    name={field}
                                    value={input[field]}
                                    onChange={changeEventHandler}
                                    className='col-span-3 w-full'
                                />
                            </div>
                        ))}
                        <div className='grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4'>
                            <Label htmlFor='file' className='sm:text-right'>Resume</Label>
                            <Input
                                id='file'
                                name='file'
                                type='file'
                                accept='application/pdf'
                                onChange={fileChangeHandler}
                                className='col-span-3 w-full'
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" className="w-full my-4" disabled={loading}>
                            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Update"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default UpdateProfileDialog;
