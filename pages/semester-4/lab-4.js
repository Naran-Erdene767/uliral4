import axios from "axios";
import { useState } from "react";

export default function Post() {
  const [name, setName] = useState("");
  const [ovog, setOvog] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = async () => {
    const data = {
      first_name: name,
      last_name: ovog,
      age: age,
      email: email,
    };

    try {
      await axios.post("http://localhost:8080/createUsers", data);
      setSubmittedData(data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div>
      <h2>Мэдээлэл оруулах</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Нэр оруулна уу"
      />
      <input
        type="text"
        value={ovog}
        onChange={(e) => setOvog(e.target.value)}
        placeholder="Овог оруулна уу"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Нас оруулна уу"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Имэйл оруулна уу"
      />
      <button onClick={handleSubmit}>Илгээх</button>

      {submittedData && (
        <div>
          <h3>Илгээсэн мэдээлэл:</h3>
          <p>Нэр: {submittedData.first_name}</p>
          <p>Овог: {submittedData.last_name}</p>
          <p>Нас: {submittedData.age}</p>
          <p>Имэйл: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

