import { MoreHorizontal } from "lucide-react";
import React from "react";
import { Button } from "./button";
import { Progress } from "./progress";

const DATA = [
  {
    title: "Pattern Recognition and Machine Learning",
    color: "bg-red-200",
    icon: "👤",
    lessons: 5,
  },
  {
    title: "Natural Language Processing",
    color: "bg-green-200",
    icon: "🔗",
    lessons: 3,
  },
  {
    title: "Cryptography and Network Security",
    color: "bg-yellow-200",
    icon: "🎯",
    lessons: 7,
  },
  {
    title: "Intelligent Data Analysis",
    color: "bg-pink-200",
    icon: "📱",
    lessons: 2,
  },
  {
    title: "Computational Complexity",
    color: "bg-orange-200",
    icon: "🌟",
    lessons: 4,
  },
];

export function CourseSection() {
  return (
    <div className="w-2/5 bg-white border-l border-r border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Courses</h2>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
      <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-12rem)]">
        {DATA.map((course, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <div className="flex items-start space-x-4">
              <div
                className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center text-2xl`}
              >
                {course.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{course.title}</h3>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <span>{`${course?.lessons}/10 lessons`}</span>
                  <span>{`${(course.lessons / 10) * 100}%`}</span>
                </div>
                <Progress value={course.lessons * 10} className="h-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
