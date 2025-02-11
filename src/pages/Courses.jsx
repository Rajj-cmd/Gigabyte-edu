const Courses = () => {
    const courses = [
      {
        category: "Undergraduate",
        programs: ["Business Administration", "Computer Science", "Engineering"],
      },
      {
        category: "Graduate",
        programs: ["MBA", "Data Science", "International Relations"],
      },
      {
        category: "Language Programs",
        programs: ["English", "German", "French"],
      },
    ];
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Available Courses</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">{course.category}</h2>
              <ul className="space-y-2">
                {course.programs.map((program, idx) => (
                  <li key={idx} className="text-gray-700">{program}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Courses;