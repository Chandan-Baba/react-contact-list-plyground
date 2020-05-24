import React from "react";
import ProfileCard from "./ProfileCard";

function ContactCard() {
  const profileList = [
    {
      id: 1,
      name: "Jenny Han",
      email: "Jenny.Han@notreal.com",
      age: 25,
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "David Rose",
      email: "David.Rose@example.com",
      age: 35,
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Tracy Godfrey",
      email: "Tracy.Godfrey@example.com",
      age: 47,
      avatar: "https://via.placeholder.com/150",
    },
  ];
  const personList = profileList.map((profile) => (
    <ProfileCard key={profile.id} profile={profile}></ProfileCard>
  ));
  return <div>{personList}</div>;
}

export default ContactCard;
