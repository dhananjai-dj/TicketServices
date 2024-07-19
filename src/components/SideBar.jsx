import React from 'react';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import TaskIcon from '@mui/icons-material/Task';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';

const Sidebars = ({ open, onClose, createTicket, setStatusFilter }) => {
    const handleStatusFilter = (status) => {
        setStatusFilter(status);
    };

    return (
        <div
            className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition duration-300 ease-in-out mt-16 ${open ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            <div className="py-6">
                <div className="p-1 flex items-center border-zinc-100 block border-2 ">
                    <div className="w-full flex justify-between px-1">
                        <h1>Views</h1>
                        <button>
                            <FolderCopyIcon />
                        </button>
                        <button onClick={createTicket}>
                            <CreateNewFolderIcon />
                        </button>
                    </div>
                </div>

                <List component="nav">
                    <ListItem button onClick={() => handleStatusFilter('All')} className="hover:bg-gray-500 rounded-lg">
                        <ListItemIcon>
                            <AllInboxIcon className='text-black' />
                        </ListItemIcon>
                        <ListItemText primary="All" className="text-black" />
                    </ListItem>
                    <ListItem button onClick={() => handleStatusFilter('open')} className="hover:bg-gray-500 rounded-lg">
                        <ListItemIcon>
                            <MarkEmailUnreadIcon className="text-black" />
                        </ListItemIcon>
                        <ListItemText primary="To Open" className="text-black" />
                    </ListItem>
                    <ListItem button onClick={() => handleStatusFilter('in-progress')} className="hover:bg-gray-500 rounded-lg">
                        <ListItemIcon>
                            <AssignmentLateIcon className="text-black" />
                        </ListItemIcon>
                        <ListItemText primary="Pending" className="text-black" />
                    </ListItem>
                    <ListItem button onClick={() => handleStatusFilter('close')} className="hover:bg-gray-500 rounded-lg">
                        <ListItemIcon>
                            <AssignmentTurnedInIcon className="text-black" />
                        </ListItemIcon>
                        <ListItemText primary="Completed" className="text-black" />
                    </ListItem>

                    <ListItem button onClick={() => handleStatusFilter('All')} className="hover:bg-gray-500 rounded-lg">
                        <ListItemIcon>
                            <AssignmentReturnIcon className="text-black" />
                        </ListItemIcon>
                        <ListItemText primary="Assigned to me" className="text-black-100" />
                    </ListItem>
                    <ListItem button onClick={() => handleStatusFilter('Created by me')} className="hover:bg-gray-500 rounded-lg">
                        <ListItemIcon>
                            <AttachEmailIcon className="text-black" />
                        </ListItemIcon>
                        <ListItemText primary="Created by me" className="text-black-100" />
                    </ListItem>
                    <ListItem button onClick={() => handleStatusFilter('close')} className="hover:bg-gray-500 rounded-lg">
                        <ListItemIcon>
                            <TaskIcon className="text-black" />
                        </ListItemIcon>
                        <ListItemText primary="Completed by me" className="text-black-100" />
                    </ListItem>
                </List>
            </div>

            <button
                onClick={onClose}
                className="absolute bottom-4 left-4 px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md"
            >
                Close
            </button>
        </div>
    );
};

export default Sidebars;
