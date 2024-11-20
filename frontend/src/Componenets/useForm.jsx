import React from "react";
import { useForm } from "react-hook-form";

const FormHandling = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const role = watch("role")

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
            <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        {/* Role Dropdown */}
        <div>
          <label htmlFor="role">Role</label>
          <select
            id="role"
            {...register("role", { required: "Role is required" })}
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
          {errors.role && <p>{errors.role.message}</p>}
        </div>

        {/* Conditional Fields for Student */}
        {role === "student" && (
          <>
            <div>
              <label htmlFor="class">Class</label>
              <input
                id="class"
                {...register("class", { required: "Class is required" })}
              />
              {errors.class && <p>{errors.class.message}</p>}
            </div>

            <div>
              <label htmlFor="section">Section</label>
              <input
                id="section"
                {...register("section", { required: "Section is required" })}
              />
              {errors.section && <p>{errors.section.message}</p>}
            </div>
          </>
        )}

        {/* Conditional Fields for Teacher */}
        {role === "teacher" && (
          <>
            <div>
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && <p>{errors.subject.message}</p>}
            </div>

            <div>
              <label htmlFor="salary">Salary</label>
              <input
                id="salary"
                type="number"
                {...register("salary", { required: "Salary is required" })}
              />
              {errors.salary && <p>{errors.salary.message}</p>}
            </div>
          </>
        )}

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormHandling;
