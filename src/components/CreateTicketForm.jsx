import React, { useState, useEffect } from 'react';

const CreateTicketForm = ({ onCreate, initialValues }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [priority, setPriority] = useState('low');
  const [mode, setMode] = useState('mail'); 
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('open'); 

  useEffect(() => {
    if (initialValues) {
      setName(initialValues.name);
      setEmail(initialValues.email);
      setPriority(initialValues.priority);
      setMode(initialValues.mode);
      setDescription(initialValues.description);
      setStatus(initialValues.status);
    }
  }, [initialValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ticket = {
      name,
      email,
      priority,
      mode,
      description,
      status,
    };
    onCreate(ticket);
    setName('');
    setEmail('');
    setPriority('low');
    setMode('mail'); 
    setDescription('');
    setStatus('open'); 
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">
          Priority
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mode">
          Mode
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="mode"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          required
        >
          <option value="mail">Mail</option>
          <option value="email">Email</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="sms">SMS</option>
          <option value="facebook">Facebook</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
          Status
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="close">Closed</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {initialValues ? 'Update Ticket' : 'Create Ticket'}
        </button>
      </div>
    </form>
  );
};

export default CreateTicketForm;
