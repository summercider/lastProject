export default function MemberTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2
      className="text-[32px] font-black text-[#010101] whitespace-nowrap
    max-sm:text-[22px]"
    >
      {children}
    </h2>
  );
}
