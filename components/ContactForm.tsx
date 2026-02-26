"use client";

export default function ContactForm() {
  return (
    <form
      className="mt-6 flex flex-col gap-3 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Later: connect this to Buttondown/ConvertKit/etc.");
      }}
    >
      <input
        type="email"
        required
        placeholder="you@domain.com"
        className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"
      />
      <button
        type="submit"
        className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
      >
        Notify me
      </button>
    </form>
  );
}