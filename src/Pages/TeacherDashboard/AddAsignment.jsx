import React from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";

const AddAsignment = ({ classData,refetch }) => {
  let [isOpen, setIsOpen] = useState(false);

  const axiosSecure = useAxiosSecure();
  

  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

    

  function open() {
    setIsOpen(true);
  }

  //   handle form submission
  const onSubmit = (data) => {
    const assignmentInfo = {
      title: data.title,
      dedline: data.dedline,
      description: data.description,
      teacherName: classData.name,
      assignmentId: classData._id,
    };

    try {
      axiosSecure.post("/assignments", assignmentInfo).then((respons) => {
        console.log(respons.data);

        if (respons.data.insertedId) {
          toast.success("assignment added succesfully");
          reset(); // clear form
          refetch()  // reload data
          setIsOpen(false); // close modal 
        }
      });
    } catch (error) {
    } finally {
      setIsOpen(false);
    }
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        onClick={open}
        className="btn common_bg_color_1 text-white mt-8 capitalize"
      >
        + creat Assignment
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex  items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              {/* <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Payment successful
              </DialogTitle> */}

              <main>
                <div>
                  <div className=" bg-base-200">
                    <div className=" flex-col">
                      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                        <div className="card-body relative">
                          {/* form  */}
                          <form className="" onSubmit={handleSubmit(onSubmit)}>
                            {/* assignment title  */}
                            <label className="fieldset-label">Title</label>
                            <input
                              type="text"
                              className="input my-4"
                              placeholder=" Assignment Title"
                              {...register("title", { required: true })}
                            />
                            {errors.title && (
                              <span className="text-red-500 my-3">
                                This field is required
                              </span>
                            )}

                            {/* assignment dedline  */}
                            <label className="fieldset-label">dedline</label>
                            <input
                              type="date"
                              className="input my-4"
                              placeholder=" Assignment dedline"
                              {...register("dedline", { required: true })}
                            />
                            {errors.dedline && (
                              <span className="text-red-500 my-3">
                                This field is required
                              </span>
                            )}

                            {/* assignment description  */}

                            <fieldset className="fieldset">
                              <legend className="fieldset-legend">
                                Description
                              </legend>

                              <textarea
                                className="textarea h-24"
                                placeholder="Assignment Description"
                                {...register("description", { required: true })}
                              ></textarea>

                              {errors.description && (
                                <span className="text-red-500 my-3">
                                  This field is required
                                </span>
                              )}
                            </fieldset>
                            {/* form button */}

                            <Button
                              type="submit"
                              className="btn  mt-4 common_bg_color_1 text-white"
                            >
                              Add Assignment
                            </Button>
                          </form>
                          <div
                            className="md:absolute bottom-8 right-12"
                            onClick={close}
                          >
                            <button className="btn  common_bg_color_1 text-white">
                              {" "}
                              cencel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default AddAsignment;
