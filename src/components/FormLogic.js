import { Controller, useForm } from "react-hook-form";
import FormElement from "./FormElement.js";
import React from "react";

function FormLogic({ onSubmit }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      fav_color: "",
      submit_date: "",
      roles: "",
      age: "",
      password: "",
    },
  });

  const onFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <div className="pt-20 md:px-12 max-w-screen-2xl mx-auto text-center">
      <div className="pb-10">
        <h3 className="md:text-6xl font-bold">Dino Form 🦕</h3>
        <p className="md:text-xl mb-5 text-gray-600">
          This is a dummy project to learn about react hook form ^^
        </p>
      </div>
      <div className="rounded-lg shadow-lg bg-white md:py-10 md:px-4">
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="flex justify-center gap-5">
            <Controller
              name="name"
              control={control}
              rules={{ required: true, maxLength: 25 }}
              render={({ field }) => (
                <FormElement
                  type="text"
                  label="Name"
                  placeholder="Enter name here..."
                  fieldRef={field}
                  hasError={
                    errors.name?.type === "required" ||
                    errors.name?.type === "maxLength"
                  }
                  errorMessage={
                    errors.name?.type === "required"
                      ? "Name is required"
                      : errors.name?.type === "maxLength"
                      ? "Name cannot exceed 25 characters"
                      : ""
                  }
                />
              )}
            />
            <Controller
              className="w-1/2"
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <FormElement
                  type="email"
                  label="Email"
                  placeholder="Enter your email here..."
                  fieldRef={field}
                  hasError={errors.email?.type === "required"}
                  errorMessage={
                    errors.email?.type === "required" ? "Email is required" : ""
                  }
                />
              )}
            />
          </div>

          <div className="flex justify-center gap-5">
            <Controller
              name="file"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <FormElement
                  type="file"
                  label="Input file for Dino"
                  fieldRef={field}
                  hasError={errors.file?.type === "required"}
                  errorMessage={
                    errors.file?.type === "required" ? "File is required" : ""
                  }
                />
              )}
            />

            <Controller
              name="age"
              control={control}
              rules={{ required: true, min: 18 }}
              render={({ field }) => (
                <FormElement
                  type="number"
                  label="What is your age?"
                  fieldRef={field}
                  hasError={errors.age?.type === "required"}
                  errorMessage={
                    errors.age?.type === "required"
                      ? "Age is required"
                      : errors.age?.type === "min"
                      ? "Age must be at least 18"
                      : ""
                  }
                />
              )}
            />
          </div>

          <div className="flex justify-center gap-5">
            <Controller
              name="submit_date"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <FormElement
                  type="date"
                  label="Submit Date"
                  fieldRef={field}
                  hasError={errors.submit_date?.type === "required"}
                  errorMessage={
                    errors.submit_date?.type === "required"
                      ? "Submit Date is required"
                      : ""
                  }
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <FormElement
                  type="password"
                  label="Insert Password"
                  fieldRef={field}
                  hasError={errors.password?.type === "required"}
                  errorMessage={
                    errors.password?.type === "required"
                      ? "Password is required"
                      : ""
                  }
                />
              )}
            />
          </div>

          <Controller
            name="message"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormElement
                type="textarea"
                label="Message for Dino"
                placeholder="Enter your message here..."
                fieldRef={field}
                hasError={errors.message?.type === "required"}
                errorMessage={
                  errors.message?.type === "required"
                    ? "Message is required"
                    : ""
                }
              />
            )}
          />

          <Controller
            name="fav_color"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormElement
                type="radio"
                label="Favorite Color"
                options={[
                  { label: "Red", value: "red" },
                  { label: "Blue", value: "blue" },
                  { label: "Green", value: "green" },
                ]}
                fieldRef={field}
                hasError={errors.fav_color?.type === "required"}
                errorMessage={
                  errors.message?.type === "required"
                    ? "Favorite Color is required"
                    : ""
                }
              />
            )}
          />
          <Controller
            name="roles"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormElement
                type="checkbox"
                label="Roles"
                options={[
                  { label: "Frontend Engineer", value: "FE" },
                  { label: "Backend Engineer", value: "BE" },
                  { label: "Data Scientist", value: "DS" },
                ]}
                fieldRef={field}
                hasError={errors.roles?.type === "required"}
                errorMessage={
                  errors.roles?.type === "required" ? "Roles are required" : ""
                }
              />
            )}
          />
          <button
            type="submit"
            className="w-[820px] rounded-md bg-white py-2 px-5 outline outline-green-700 hover:bg-g_background text-md hover:bg-green-100"
          >
            Submit 🦖
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormLogic;
