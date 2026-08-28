import Modal from "../ui/Modal";

const rows = [
  { size: "0-3M / 3-6M", age: "Newborn – 6 months", chest: "40-44 cm", height: "50-62 cm" },
  { size: "6-9M / 9-12M", age: "6 – 12 months", chest: "45-47 cm", height: "63-74 cm" },
  { size: "1-2Y / 2-3Y", age: "1 – 3 years", chest: "48-52 cm", height: "75-95 cm" },
  { size: "3-4Y / 4-5Y", age: "3 – 5 years", chest: "53-56 cm", height: "96-110 cm" },
  { size: "5-6Y / 6-7Y", age: "5 – 7 years", chest: "57-60 cm", height: "111-122 cm" },
  { size: "7-8Y / 8-9Y", age: "7 – 9 years", chest: "61-64 cm", height: "123-134 cm" },
  { size: "9-10Y / 10-12Y", age: "9 – 12 years", chest: "65-70 cm", height: "135-152 cm" },
  { size: "12-14Y", age: "12 – 14 years", chest: "71-78 cm", height: "153-164 cm" },
];

export default function SizeGuideModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} onClose={onClose} maxWidthClass="max-w-2xl">
      <h2 className="font-serif text-2xl text-ink">Size Guide</h2>
      <p className="mt-1 text-sm text-ink-soft">Measurements are approximate — we recommend sizing up for growing children.</p>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-line text-xs uppercase tracking-wide text-ink-soft">
              <th className="py-2 pr-4">Size</th>
              <th className="py-2 pr-4">Age</th>
              <th className="py-2 pr-4">Chest</th>
              <th className="py-2">Height</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.size} className="border-b border-line/70">
                <td className="py-2.5 pr-4 font-medium text-ink">{r.size}</td>
                <td className="py-2.5 pr-4 text-ink-soft">{r.age}</td>
                <td className="py-2.5 pr-4 text-ink-soft">{r.chest}</td>
                <td className="py-2.5 text-ink-soft">{r.height}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  );
}
