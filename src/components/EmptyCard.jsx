export default function EmptyCard({}) {
  return (
    // Use 'max-w-full' to ensure the component doesn't overflow on small devices and set a specific max width for larger screens
    <div className="flex flex-col items-center justify-center w-full max-w-[616px] h-auto py-[24px] mt-[24px] bg-white px-4 sm:px-6">
      {/* Adjust the image container to be more responsive by allowing it to scale based on the screen size */}
      <div className="w-3/4 max-w-[200px] h-auto mb-[16px]">
        <img
          src="https://cdn.discordapp.com/attachments/1208360755007852586/1217848591305932840/image.png?ex=660584e2&is=65f30fe2&hm=133903bce19e4a09f025def30965b10c05a275eaca3960dc785e125528d5fedf&"
          alt="Empty cart"
          className="w-full h-auto"
        />
      </div>
      {/* Text scales down on smaller screens to fit nicely */}
      <div className="text-[20px] sm:text-[24px] font-bold mb-[8px] text-center px-2">
        Your cart is empty
      </div>
      <p className="text-center text-[14px] sm:text-[16px] font-semibold mb-[24px] px-2">
        Looks like you have not added anything to your cart.
        <br /> Go ahead & explore top categories.
      </p>
      {/* Button adjusts to screen size, maintaining usability */}
      <button className="bg-secondary text-white text-[14px] sm:text-[16px] font-normal w-full max-w-[173px] h-[54px] px-[7px] py-[10px]">
        Continue shopping
      </button>
    </div>
  );
}
