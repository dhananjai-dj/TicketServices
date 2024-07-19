import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dialog } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Sidebars from './SideBar';
import TicketList from './TicketList';
import CreateTicketForm from './CreateTicketForm';
import TicketDetail from './TicketDetail';
import Navbar from './Navbar';
import { addTicket, updateTicket } from '../redux/TicketAction';

const Dashboard = ({ tickets, createTicket, updateTicket }) => {
  const [filter, setFilter] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation();
  const { username } = location.state || {};

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleCreateTicketClick = () => {
    setShowForm(true);
    setEditMode(false);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditMode(false);
  };

  const handleTicketSelect = (ticket) => {
    setSelectedTicket(ticket);
    setShowDetail(true);
    setEditMode(false);
  };

  const handleEditTicket = (ticket) => {
    setSelectedTicket(ticket);
    setEditMode(true);
    setShowForm(true);
    setShowDetail(false);
  };

  const handleCloseDetail = () => {
    setSelectedTicket(null);
    setShowDetail(false);
  };

  const handleCreateTicket = (ticket) => {
    if (editMode) {
      updateTicket(ticket);
    } else {
      createTicket(ticket);
    }
    setShowForm(false);
  };

  return (
    <div className="relative h-screen bg-slate-100 overflow-hidden">
      <Navbar onMenuClick={toggleDrawer} username={username} />
      <Sidebars open={openDrawer} onClose={toggleDrawer} createTicket={handleCreateTicketClick} setStatusFilter={setFilter} />

      <div className={`flex-grow p-4 ml-10 ${selectedTicket ? 'lg:pl-4' : ''} overflow-y-auto h-full transition-all duration-300 ease-in-out ${openDrawer ? 'ml-64' : 'ml-0'}`}>
        <div className='h-full'>
          <TicketList tickets={tickets} filter={filter} onTicketSelect={handleTicketSelect} setStatusFilter={setFilter} />
        </div>
      </div>

      <Dialog open={showForm} onClose={handleFormClose} maxWidth="sm" fullWidth>
        <CreateTicketForm
          onClose={handleFormClose}
          onCreate={handleCreateTicket}
          initialValues={editMode ? selectedTicket : null}
        />
      </Dialog>

      <Dialog open={showDetail} onClose={handleCloseDetail} maxWidth="md" fullWidth>
        {selectedTicket && (
          <TicketDetail ticket={selectedTicket} onEdit={handleEditTicket} onClose={handleCloseDetail} />
        )}
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tickets: state.ticket.tickets,
});

const mapDispatchToProps = (dispatch) => ({
  createTicket: (ticket) => dispatch(addTicket(ticket)),
  updateTicket: (ticket) => dispatch(updateTicket(ticket))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
