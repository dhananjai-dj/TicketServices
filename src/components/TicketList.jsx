import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTickets, deleteTicket } from '../redux/TicketAction';
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Search as SearchIcon, Flag as FlagIcon } from '@mui/icons-material';
import { WhatsApp as WhatsAppIcon, Sms as SmsIcon, Mail as MailIcon, Facebook as FacebookIcon } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import ArchiveIcon from '@mui/icons-material/Archive';

const TicketList = ({ tickets, loading, error, fetchTickets, deleteTicket, filter, onTicketSelect }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPriority, setSearchPriority] = useState('');
  const ticketsPerPage = 8;
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  const handlePriorityFilter = (priority) => {
    setSearchPriority(priority);
    setAnchorEl(null);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredTickets.length / ticketsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDelete = (ticketId) => {
    deleteTicket(ticketId);
  };

  const iconMapping = {
    whatsapp: <WhatsAppIcon className='text-green-700'/>,
    sms: <SmsIcon  className='text-amber-400 '/>,
    mail: <MailIcon className='text-rose-600' />,
    gmail: <MailIcon className='text-rose-600' />,
    facebook: <FacebookIcon />
  };
const statusMapping ={
  open: <HourglassFullIcon />,
  'in-progress': <HourglassBottomIcon />,
  close: <HourglassEmptyIcon />
};
  const offset = (currentPage - 1) * ticketsPerPage;

  const filteredTickets = tickets.filter(ticket => {
    const name = ticket.name || '';
    const email = ticket.email || '';
    const priority = ticket.priority || '';
    const status = ticket.status || '';
    const mode = ticket.mode || '';
  
    const matchesSearch = name.toLowerCase().includes(searchQuery.toLowerCase())
      || email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPriority = !searchPriority || priority === searchPriority;
    const matchesStatus = filter === 'All' || status === filter;
    
    return matchesSearch && matchesPriority && matchesStatus;
  });
  

  const currentTickets = filteredTickets.slice(offset, offset + ticketsPerPage);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="flex flex-col w-full h-[90%] p-4">
      <div className="flex justify-between mb-4 items-center">
        <TextField
          type="text"
          placeholder="Search by Name or Email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          variant="outlined"
          size="small"
          fullWidth
          InputProps={{
            endAdornment: <SearchIcon className="text-gray-500" />,
          }}
        />
        <div className="relative ml-4">
          <Button
            variant="outlined"
            aria-controls="priority-menu"
            aria-haspopup="true"
            size="small"
            onClick={(e) => setAnchorEl(e.currentTarget)}
            className="rounded-full min-w-[30px] min-h-[30px] p-1"
          >
            <span className="text-xs">Priority Scale</span>
          </Button>
          <Menu
            id="priority-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem>
              <button
                onClick={() => handlePriorityFilter('high')}
                className="hover:bg-gray-500 rounded-lg flex items-center w-full text-left p-2"
              >
                High: <FlagIcon className="text-red-500 ml-2" />
              </button>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => handlePriorityFilter('medium')}
                className="hover:bg-gray-500 rounded-lg flex items-center w-full text-left p-2"
              >
                Medium: <FlagIcon className="text-yellow-500 ml-2" />
              </button>
            </MenuItem>
            <MenuItem>
              <button
                onClick={() => handlePriorityFilter('low')}
                className="hover:bg-gray-500 rounded-lg flex items-center w-full text-left p-2"
              >
                Low: <FlagIcon className="text-green-500 ml-2" />
              </button>
            </MenuItem>
            <MenuItem onClick={() => handlePriorityFilter('')}>
              Clear Priority
            </MenuItem>
          </Menu>
        </div>
      </div>
      <TableContainer component={Paper} className="flex-grow">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell width="15%">Name</TableCell>
              <TableCell width="20%">Email</TableCell>
              <TableCell width="10%">Priority</TableCell>
              <TableCell width="10%" align="center">Mode</TableCell>
              <TableCell width="10%">Status</TableCell>
              <TableCell width="25%">Description</TableCell>
              <TableCell width="10%"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentTickets.map((ticket) => (
              <TableRow
                key={ticket.email}
                hover
                onClick={() => onTicketSelect(ticket)}
                style={{ cursor: 'pointer' }}
              >
                <TableCell width={"15%"}>{ticket.name}</TableCell>
                <TableCell width={"20%"}>{ticket.email}</TableCell>
                <TableCell width={"10%"}>
                  {ticket.priority === 'low' && <FlagIcon className="text-green-500" />}
                  {ticket.priority === 'medium' && <FlagIcon className="text-yellow-500" />}
                  {ticket.priority === 'high' && <FlagIcon className="text-red-500" />}
                </TableCell>
                <TableCell width={"10%"}>
                  {iconMapping[ticket.mode.toLowerCase()] && (
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      color="primary"
                    >
                      {iconMapping[ticket.mode.toLowerCase()]}
                    </Button>
                  )}
                </TableCell>
                <TableCell width={"10%"}> {statusMapping[ticket.status.toLowerCase()]}</TableCell>
                <TableCell width={"25%"}>{ticket.description}</TableCell>
                <TableCell align="right" width={"10%"}>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(ticket.email);
                    }}
                  
                  >
                    <ArchiveIcon className='text-black'/>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="flex justify-between mt-1">
        <Button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          variant="contained"
          className={`px-3 py-1 ${currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-gray-600 hover:bg-gray-700 text-white'}`}
        >
          Previous
        </Button>
        <span className="px-3 py-1">
          Page {currentPage} of {Math.ceil(filteredTickets.length / ticketsPerPage)}
        </span>
        <Button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(filteredTickets.length / ticketsPerPage)}
          variant="contained"
          className={`px-3 py-1 ${currentPage === Math.ceil(filteredTickets.length / ticketsPerPage) ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-gray-600 hover:bg-gray-700 text-white'}`}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tickets: state.ticket.tickets,
  loading: state.ticket.loading,
  error: state.ticket.error,
});

const mapDispatchToProps = {
  fetchTickets,
  deleteTicket,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
