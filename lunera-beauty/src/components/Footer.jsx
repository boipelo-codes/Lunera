export default function Footer() {
  return (
    <footer className="border-t border-gold mt-20 px-10 py-10 text-sm">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div>
          <p className="text-gold mb-2">Subscribe</p>
          <input
            placeholder="Email address"
            className="bg-transparent border border-gold px-4 py-2"
          />
        </div>

        <div className="flex gap-6 text-gold">
          <span>Twitter</span>
          <span>Facebook</span>
          <span>LinkedIn</span>
        </div>

        <div className="flex gap-6">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Contact</span>
        </div>
      </div>
    </footer>
  );
}
