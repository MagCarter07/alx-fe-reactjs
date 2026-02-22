import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Profile Page</h2>

      <div className="flex gap-4 mb-4">
        <Link to="details" className="text-blue-600">
          Details
        </Link>
        <Link to="settings" className="text-blue-600">
          Settings
        </Link>
      </div>

      {/* Nested Routes Defined Here */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
