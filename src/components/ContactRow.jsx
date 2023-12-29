export default function ContactRow({ contact, setSelectedContactId }) {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id, contact.company, contact.website)
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}

