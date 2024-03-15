export default function EmptyCard({}) {
  return (
    <div className="flex flex-col items-center justify-center w-[896px] h-[754px]">
      <div className="w-[403px] h-[403px]">
        <img
          src="https://cdn.discordapp.com/attachments/1208360755007852586/1217848591305932840/image.png?ex=660584e2&is=65f30fe2&hm=133903bce19e4a09f025def30965b10c05a275eaca3960dc785e125528d5fedf&"
          alt="Empty cart"
        />
      </div>
      <div className="text-[40px] font-bold">Your cart is empty</div>
      <p className="text-center text-[18px] font-semibold mt-[8px]">
        Looks like you have not added anything to your cart.
        <br /> Go ahead & explore top categories.
      </p>
      <button className="bg-black text-white text-[16px] font-normal w-[173px] h-[54px] px-[7px] py-[10px] mt-[24px]">
        Continue shopping
      </button>
    </div>
  );
}
