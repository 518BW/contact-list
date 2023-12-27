import React, { useState } from 'react';

function ContactList() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  const handleContactClick = (contactId) => {
    setSelectedContactId(contactId);
  };

  const renderContactList = () => {
    return Object.keys(contactData).map((contactId) => (
      <div key={contactId} onClick={() => handleContactClick(contactId)}>
        <h3>{contactData[contactId].name}</h3>
      </div>
    ));
  };

  return (
    <>
      {selectedContactId ? (
        <div>
          <h2>{contactData[selectedContactId].name}</h2>
          <p>Address: {contactData[selectedContactId].address}</p>
          <p>Company: {contactData[selectedContactId].company}</p>
          <p>Website: {contactData[selectedContactId].website}</p>
        </div>
      ) : (
        renderContactList()
      )}
    </>
  );
}


export default ContactList;