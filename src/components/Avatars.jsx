import { useState } from "react";
import { IMG } from "../config";

const getInitials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

function Avatar({ name, file, size = 36 }) {
  const [failed, setFailed] = useState(false);

  if (failed || !file) {
    return (
      <span className="avatar avatar--fallback" style={{ width: size, height: size }}>
        {getInitials(name)}
      </span>
    );
  }

  return (
    <img
      className="avatar"
      style={{ width: size, height: size }}
      src={`${IMG}/avatars/${file}`}
      alt={name}
      onError={() => setFailed(true)}
    />
  );
}

export default Avatar;
