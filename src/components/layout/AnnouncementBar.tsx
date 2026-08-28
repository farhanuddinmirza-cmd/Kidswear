const messages = [
  "Free shipping on prepaid orders above ₹1,499",
  "Easy 15-day returns & exchanges",
  "Use code PANDA10 for 10% off your first order",
];

export default function AnnouncementBar() {
  return (
    <div className="bg-ink text-ivory">
      <div className="container-page flex h-9 items-center justify-center overflow-hidden">
        <p className="truncate text-center text-[11px] font-medium tracking-wide sm:text-xs">
          {messages.join("  ·  ")}
        </p>
      </div>
    </div>
  );
}
