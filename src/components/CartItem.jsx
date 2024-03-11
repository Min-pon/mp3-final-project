export default function CartItem({}) {
  return (
    <div class="flex flex-row gap-2">
      <div class="flex w-1/5 aspect-square bg-fuchsia-200">img</div>
      <div class="flex flex-col grow bg-white p-4">
        detail
        <div>name</div>
        <div>selector</div>
      </div>
    </div>
  );
}
