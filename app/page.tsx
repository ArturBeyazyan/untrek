"use client";
import { Aside } from "./components";
import { jobsItem } from "./models/selectItems";

// import JobItem from "./listing-category/jobs";
export default function Home() {
  return (
    <div className="Home">
      <Aside items={jobsItem}/>
      {/* <div className="flex">
      <aside className="w-64 bg-gray-100 p-4">
      </aside>
      <main className="flex-1 p-4">
      </main>
    </div> */}
    {/* <JobItem id="job"/> */}
    </div>
  );
}