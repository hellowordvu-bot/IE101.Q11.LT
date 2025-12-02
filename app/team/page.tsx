"use client";
import { Users, Monitor, Server, Palette } from "lucide-react";

const members = [
  {
    name: "Nguyễn Văn A",
    role: "Project Manager",
    desc: "Quản lý dự án, điều phối team và đảm bảo tiến độ.",
    icon: <Users size={32} className="text-indigo-500" />,
  },
  {
    name: "Trần Thị B",
    role: "Frontend Developer",
    desc: "Phát triển giao diện, UX/UI và tối ưu trải nghiệm.",
    icon: <Monitor size={32} className="text-green-500" />,
  },
  {
    name: "Lê Văn C",
    role: "Backend Developer",
    desc: "Xây dựng API, database và logic nghiệp vụ.",
    icon: <Server size={32} className="text-red-500" />,
  },
  {
    name: "Phạm Thị D",
    role: "Designer",
    desc: "Thiết kế giao diện và định hướng hình ảnh cho dự án.",
    icon: <Palette size={32} className="text-yellow-500" />,
  },
];

export default function TeamPage() {
  return (
    <div>
      <h1 className="text-4xl title font-bold mb-8 text-center">Team Members</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {members.map((m) => (
          <div
            key={m.name}
            className="p-6 border rounded-lg bg-white shadow-md hover:shadow-lg transition flex flex-col items-center text-center gap-3"
          >
            <div className="mb-2">{m.icon}</div>
            <h2 className="text-xl title font-semibold">{m.name}</h2>
            <p className="text-gray-600 font-medium">{m.role}</p>
            <p className="text-sm mt-2 text-gray-700">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
