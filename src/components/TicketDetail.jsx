import React from 'react';

const TicketDetail = ({ ticket, onEdit, onClose }) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col h-full">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Ticket Details</h2>
            <div className="flex-grow flex flex-col justify-between space-y-4 h-full">
                <div className="space-y-6 h-full">
                    <div className="flex flex-col">
                        <span className="text-gray-600 font-semibold">Name:</span>
                        <span className="text-gray-800">{ticket.name}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-600 font-semibold">Email:</span>
                        <span className="text-gray-800">{ticket.email}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-600 font-semibold">Priority:</span>
                        <span className="text-gray-800 capitalize">{ticket.priority}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-600 font-semibold">Mode:</span>
                        <span className="text-gray-800 capitalize">{ticket.mode}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-600 font-semibold">Status:</span>
                        <span className="text-gray-800 capitalize">{ticket.status}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-600 font-semibold">Description:</span>
                        <span className="text-gray-800">{ticket.description}</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-6">
                <button
                    onClick={() => onEdit(ticket)}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Edit
                </button>
                <button
                    onClick={onClose}
                    className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default TicketDetail;
