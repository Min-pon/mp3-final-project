import CartItem from "../components/CartItem";

export default function Cart() {
  return (
    <div>
      Cart Page
      <div class="flex flex-row gap-2 w-full p-8 bg-red-500 ...">
        <div class="grow bg-blue-200 p-4 flex flex-col gap-2">
          items
          <CartItem> item 1</CartItem>
        </div>
        <div class="w-1/4 bg-slate-100 p-4">summary</div>
      </div>
    </div>
  );
}
