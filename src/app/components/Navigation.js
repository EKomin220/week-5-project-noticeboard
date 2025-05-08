"use client";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-sky-800 p-10">
      <div>
        <div>
          <Link href="/">View noticeboard</Link>
        </div>
        <div>
          <Link href="/newpost">Pin a new post</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;