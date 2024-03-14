export default function EmptyCard({}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[403px] h-[403px]">
        <img
          src="https://cdn.discordapp.com/attachments/1208360755007852586/1217848591305932840/image.png?ex=660584e2&is=65f30fe2&hm=133903bce19e4a09f025def30965b10c05a275eaca3960dc785e125528d5fedf&"
          alt="Empty cart"
        />
      </div>
      <div>Your cart is empty</div>
      <p className="text-center">
        Looks like you have not added anything to your cart.
        <br /> Go ahead & explore top categories.
      </p>
      <button>Continue shopping</button>
    </div>
  );
}
