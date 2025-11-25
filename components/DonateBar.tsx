import Button from "./Button";

export default function DonateBar() {
  return (
    <div className="flex items-center justify-around bg-main-yellow width-100% p-10">
      <h1 className="text-h1 text-header-purple">
        When you're funding hope, every dollar counts.
      </h1>
      <Button>Donate</Button>
    </div>
  );
}
