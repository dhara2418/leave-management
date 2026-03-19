import { useState } from "react";
import { useDispatch } from "react-redux";
import { addLeave } from "../features/leaveSlice";

const AddLeave = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    type: "Sick Leave",
    start: "",
    end: "",
    reason: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addLeave(form));

    // Reset form
    setForm({
      name: "",
      type: "Sick Leave",
      start: "",
      end: "",
      reason: "",
    });
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Apply Leave
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="border p-2 rounded"
          placeholder="Employee Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <select
          className="border p-2 rounded"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option>Sick Leave</option>
          <option>Casual Leave</option>
          <option>Emergency Leave</option>
          <option>Vacation Leave</option>
          <option>Half-Day Leave</option>
        </select>

        <input
          type="date"
          className="border p-2 rounded"
          value={form.start}
          onChange={(e) => setForm({ ...form, start: e.target.value })}
        />

        <input
          type="date"
          className="border p-2 rounded"
          value={form.end}
          onChange={(e) => setForm({ ...form, end: e.target.value })}
        />

        <input
          className="border p-2 rounded"
          placeholder="Reason"
          value={form.reason}
          onChange={(e) => setForm({ ...form, reason: e.target.value })}
        />

        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Apply Leave
        </button>
      </form>
    </div>
  );
};

export default AddLeave;