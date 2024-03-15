import Rating from "@mui/material/Rating";
export default function ProductInformation(props) {
  let { id, productName, description, price, promotionalPrice, ratings } =
    props;

  return (
    <div>
      <subtitle className="text-s tracking-tight text-gray-500">
        ID : {id}
      </subtitle>
      <h1 className="text-3xl font-extrabold tracking-normal text-gray-900">
        {productName}
      </h1>
      <subtitle className="text-m tracking-tight text-gray-500">
        {description}
      </subtitle>
      <div className="mt-3 flex flex-col">
        <div className=" px-2 py-1 w-fit bg-red-500">
          <p className="text-2xl text-white">THB {promotionalPrice}</p>
        </div>
        <div>
          <span className="ml-2 text-base text-gray-500">From</span>
          <span className="ml-2 text-base line-through text-gray-500">
            THB {price}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="mt-6">
          <div className="flex items-center">
            <Rating value={ratings} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
}
