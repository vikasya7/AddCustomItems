import React from 'react';

const EnquireButton = () => {
  return (
    <a
      href="mailto:info@example.com?subject=Enquiry&body=Hi, I would like to enquire about your services."
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      Enquire
    </a>
  );
};

export default EnquireButton;
