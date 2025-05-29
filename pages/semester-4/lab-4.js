import { useState, useEffect } from "react";
import axios from "axios";

export default function Post() {
  const [name, setName] = useState("");
  const [ovog, setOvog] = useState("");
  const [email, setEmail] = useState("");
  const [nas, setNas] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:8080/getUsers");
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8080/createUsers", {
        first_name: name,
        last_name: ovog,
        email: email,
        age: nas,
      });
      setName("");
      setOvog("");
      setEmail("");
      setNas("");
      const res = await fetch("http://localhost:8080/getUsers");
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  return (
    <div className="p-10 flex flex-col space-x-16 font-sans bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen justify-center">
      <div className="flex flex-col space-y-10 w-80">
        <h1 className="text-2xl font-extrabold text-gray-800">Хэрэглэгчийн бүртгэл</h1>

        <div className="flex flex-col space-y-5">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Нэр:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Нэр ээ оруулна уу"
              className="text-black w-full h-11 rounded-lg p-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Овог:</label>
            <input
              type="text"
              value={ovog}
              onChange={(e) => setOvog(e.target.value)}
              placeholder="Овог оо оруулна уу"
              className="text-black w-full h-11 rounded-lg p-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">И-мэйл:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="И-мэйл ээ оруулна уу"
              className="text-black w-full h-11 rounded-lg p-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Нас:</label>
            <input
              type="number"
              value={nas}
              onChange={(e) => setNas(e.target.value)}
              placeholder="Нас аа оруулна уу"
              className="text-black w-full h-11 rounded-lg p-3 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full h-12 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg shadow-md transition duration-300"
          >
            Бүртгэх
          </button>
        </div>
      </div>

      <div className="flex-1 w-10xl overflow-auto">
        <h2 className="text-xl font-semibold mb-6 mt-6 text-gray-900">Хэрэглэгчид</h2>
        {loading ? (
          <p className="text-gray-700">Loading...</p>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {data.map((user, idx) => (
              <div
                key={user.id}
                className={`p-5 rounded-xl shadow-lg text-gray-900 ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-100"
                }`}
              >
                <p className="text-lg font-semibold mb-1">
                  Нэр: <span className="font-normal">{user.first_name}</span>
                </p>
                <p className="text-lg font-semibold mb-1">
                  Овог: <span className="font-normal">{user.last_name}</span>
                </p>
                <p className="text-lg font-semibold mb-1">
                  И-мэйл: <span className="font-normal">{user.email}</span>
                </p>
                <p className="text-lg font-semibold">
                  Нас: <span className="font-normal">{user.age}</span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
