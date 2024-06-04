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
    },
  });

  const onFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <div className="my-20 md:px-12 max-w-screen-2xl mx-auto text-center">
      <div className="block">
        <h3 className="md:text-6xl font-bold">Dino Form 🦕</h3>
        <p className="md:text-xl mb-5 text-gray-600">
          This is a dummy project to learn about react hook form ^^
        </p>
      </div>
      <div className="rounded-lg shadow-lg bg-white md:py-6 md:px-4">
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormElement
                type="text"
                label="Name"
                placeholder="Enter name here..."
                fieldRef={field}
                hasError={errors.name?.type === "required"}
              />
            )}
          />
          <Controller
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
              />
            )}
          />
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
              />
            )}
          />
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
              />
            )}
          />
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
              />
            )}
          />
          <Controller
            name="age"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormElement
                type="number"
                label="What is your age?"
                fieldRef={field}
                hasError={errors.age?.type === "required"}
              />
            )}
          />
          <button
            type="submit"
            className="w-1/2 rounded bg-white py-2 px-5 outline outline-green-700 hover:bg-g_background text-md"
          >
            Submit 🦖
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormLogic;
