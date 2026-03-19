import { useDispatch } from "react-redux";
import { deleteLeave, approveLeave } from "../features/leaveSlice";

const LeaveCard = ({ leave }) => {
  const dispatch = useDispatch();

  // 👇 safety check
  if (!leave) return null;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-blue-500">

      <h3 className="text-lg font-bold text-gray-800">
        {leave?.name || "No Name"}
      </h3>

      <p className="text-sm text-gray-600">
        {leave?.type || "No Type"}
      </p>

      <p className="text-sm">
        {leave?.start || "-"} → {leave?.end || "-"}
      </p>

      <p
        className={`mt-1 font-semibold ${leave?.status === "Approved"
          ? "text-green-600"
          : leave?.status === "Rejected"
            ? "text-red-600"
            : "text-yellow-600"
          }`}
      >
        {leave?.status || "Pending"}
      </p>

      <div className="flex gap-2 mt-3">
        <button
          className="bg-green-500 text-white px-2 py-1 rounded"
          onClick={() =>
            dispatch(approveLeave({ id: leave?.id, status: "Approved" }))
          }
        >
          ✔
        </button>

        <button
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={() =>
            dispatch(approveLeave({ id: leave?.id, status: "Rejected" }))
          }
        >
          ✖
        </button>

        <button
          className="bg-gray-500 text-white px-2 py-1 rounded"
          onClick={() => dispatch(deleteLeave(leave?.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default LeaveCard;