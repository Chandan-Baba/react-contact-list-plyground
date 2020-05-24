import React, { useState } from "react";

function ProfileCard({ profile }) {
  const [showAge, setShowAge] = useState(false);

  return (
    <div
      className="card flex-row flex-wrap text-white bg-dark mb-3"
      style={{ border: "2px solid grey" }}
    >
      <div className="card-header border-0">
        <img src={profile.avatar} alt="profile" className="card-img" />
      </div>

      <div className="card-body px-2">
        <p>Name- {profile.name}</p>
        <p>Email- {profile.email}</p>
        <button className="btn btn-light" onClick={() => setShowAge(!showAge)}>
          Get my Age
        </button>
        {showAge === true ? <p>Age- {profile.age}</p> : null}
      </div>
    </div>
  );
}

export default ProfileCard;
