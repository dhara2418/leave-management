import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeaves } from "../features/leaveSlice";
import LeaveCard from "./LeaveCard";
import SearchFilter from "./SearchFilter";

const LeaveList = () => {
    const dispatch = useDispatch();
    const { leaves, loading } = useSelector((state) => state.leave);

    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(fetchLeaves());
    }, [dispatch]);

    if (!leaves) return <p>No data</p>;

    const filtered = (leaves || []).filter((l) =>
        l?.name?.toLowerCase()?.includes(search.toLowerCase())
    );
    return (



<div className="bg-white p-5 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-3">Leave Records</h2>

            <SearchFilter setSearch={setSearch} />

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid gap-3 max-h-400px overflow-y-auto">
                    {filtered.map((leave) => (
                        <LeaveCard key={leave.id} leave={leave} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default LeaveList;