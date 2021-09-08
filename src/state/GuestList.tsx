import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guest, setGuest] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGuest([...guest, name]);
  };
  const removeclick = () => {
    setGuest([name]);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
      <button onClick={removeclick}>Remove Guest</button>
      <ul>
        {guest.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
    </div>
  );
};
export default GuestList;
