

import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Send } from '@material-ui/icons';
import { Dialog } from '@material-ui/core';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://formspree.io/f/xgepkqol',
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, 'Thanks!', form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-98">
        <div className="w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg">
          <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">Get in Touch</h2>
          <form onSubmit={handleOnSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={handleOpen}
            >
              Contact Me
              <Send className="ml-2" />
            </button>
          </form>
          {serverState.status && (
            <Dialog open={open} onClose={handleClose}>
              <div className="p-8 bg-white rounded shadow-md">
                <h1 className={`${!serverState.status.ok ? 'text-red-600' : 'text-green-600'} text-center`}>
                  {serverState.status.msg}
                </h1>
              </div>
            </Dialog>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
