import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    image: "",
    gender: "",
    skills: [],
  });

  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        skills: checked
          ? [...formData.skills, value]
          : formData.skills.filter((skill) => skill !== value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, formData]);
    setFormData({
      name: "",
      email: "",
      website: "",
      image: "",
      gender: "",
      skills: [],
    });
  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      website: "",
      image: "",
      gender: "",
      skills: [],
    });
  };

  return (
    <div className="page-container">
      <div className="header">
        <h1>Student Enrollment Form</h1>
      </div>

      <div className="main-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Website:</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Image Link:</label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <span>Gender:</span>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
            <div className="form-group">
              <span>Skills:</span>
              <label>
                <input
                  type="checkbox"
                  name="skills"
                  value="C++"
                  checked={formData.skills.includes("C++")}
                  onChange={handleChange}
                />
                C++
              </label>
              <label>
                <input
                  type="checkbox"
                  name="skills"
                  value="Java"
                  checked={formData.skills.includes("Java")}
                  onChange={handleChange}
                />
                Java
              </label>
              <label>
                <input
                  type="checkbox"
                  name="skills"
                  value="Python"
                  checked={formData.skills.includes("Python")}
                  onChange={handleChange}
                />
                Python
              </label>
            </div>
            <div className="buttons">
              <button type="submit">Enroll Student</button>
              <button type="button" onClick={handleClear}>
                Clear
              </button>
            </div>
          </form>
        </div>
        <hr className="separator" />
        <div className="result-container">
          <div className="enrolled_student">Enrolled Students</div>
          <div className="data-header">
            <div className="header-description">Description</div>
            <div className="header-image">Image</div>
          </div>
          <div className="all-students">
            {students.length > 0 ? (
              students.map((student, index) => (
                <div key={index} className="student-entry">
                  <div className="student-description">
                    <p>
                      <strong>Name:</strong> {student.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {student.email}
                    </p>
                    <p>
                      <strong>Website:</strong>{" "}
                      <a
                        href={student.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {student.website}
                      </a>
                    </p>
                    <p>
                      <strong>Gender:</strong> {student.gender}
                    </p>
                    <p>
                      <strong>Skills:</strong> {student.skills.join(", ")}
                    </p>
                  </div>
                  <div className="student-image">
                    <img src={student.image} alt={`Student ${index + 1}`} />
                  </div>
                  {index < students.length - 1 && (
                    <hr className="student-separator" />
                  )}
                </div>
              ))
            ) : (
              <p>No data submitted yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
