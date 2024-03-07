import AddWriterForm from "./AddWriterForm";

const AddWriter = () => {
  return (
    <div className="">
      <div className=" py-5 px-3 md:px-0">
        <div className="">
          <h2 className="text-2xl font-bold uppercase py-3 text-left border-b-2 pb-5">
            Create Writer Here
          </h2>

          <AddWriterForm />
        </div>
      </div>
    </div>
  );
};

export default AddWriter;
