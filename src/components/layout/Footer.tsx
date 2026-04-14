import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";
import { SiLeetcode } from "react-icons/si";
import { navLinkData } from "../../data/Constant";
import FooterImage from "../../assets/images/gif/personWithPc.gif";
import { useRef } from "react";
import { toast } from "react-toastify";
import { Send } from "lucide-react";

const Footer = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xkgbkrnr", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast.success("Message sent successfully!", { position: "top-center" });
        form.reset();
      } else {
        toast.error("Failed to send message!", { position: "top-center" });
      }
    } catch {
      toast.error("Something went wrong!", { position: "top-center" });
    }
  };

  return (
    <footer className="mt-20 bg-linear-to-t from-black/50 via-black/70 to-transparent  text-white">

      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-12 md:grid-cols-3 items-start">

        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">Contact</h1>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              I'm open to new opportunities and collaborations. Feel free to reach out for any inquiries or just to say hello!{" "}
              <span className="text-white/80">Let's create something amazing together!</span>
            </p>
          </div>

          <div className="h-50 overflow-hidden">
            <img
              src={FooterImage}
              alt="Profile"
              className="rounded-sm object-cover"
            />
          </div>
        </div>

        {/* CENTER */}
        <div className="flex flex-col gap-4 items-start md:items-center">
          <h2 className="text-xl font-semibold">Quick Links</h2>

          <div className="flex flex-col gap-3">
            {navLinkData.map(({ label, to }) => (
              <ScrollLink
                key={label}
                to={to}
                smooth
                duration={500}
                offset={-60}
                className="text-sm text-white/60 hover:text-white transition cursor-pointer"
              >
                {label}
              </ScrollLink>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Get in Touch</h2>

          {/* SOCIAL LINKS */}
          <div className="flex flex-wrap gap-3">
            <a href="https://linkedin.com/in/mohamed-ahushan-498473265" target="_blank"
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-blue-500/25 hover:bg-blue-500/50 hover:scale-105 transition">
              <FaLinkedin className="text-blue-500" />
              <span className="text-sm">LinkedIn</span>
            </a>

            <a href="mailto:ahushanahushan@gmail.com"
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-red-500/25 hover:bg-red-500/50 hover:scale-105 transition">
              <MdEmail className="text-red-400" />
              <span className="text-sm">Gmail</span>
            </a>

            <a href="https://twitter.com/" target="_blank"
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-sky-500/25 hover:bg-sky-500/50 hover:scale-105 transition">
              <FaTwitter className="text-sky-400" />
              <span className="text-sm">Twitter</span>
            </a>

            <a href="https://www.instagram.com/" target="_blank"
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-pink-500/25 hover:bg-pink-500/50 hover:scale-105 transition">
              <FaInstagram className="text-pink-400" />
              <span className="text-sm">Instagram</span>
            </a>

            <a href="https://github.com/Ahushan" target="_blank"
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/25 hover:bg-white/50 hover:scale-105 transition">
              <FaGithub />
              <span className="text-sm">GitHub</span>
            </a>

            <a href="https://leetcode.com/" target="_blank"
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-yellow-400/25 hover:bg-yellow-400/50 hover:scale-105 transition">
              <SiLeetcode className="text-yellow-400" />
              <span className="text-sm">LeetCode</span>
            </a>
          </div>

          {/* FORM (NOW CORRECTLY PLACED) */}
          <div className="pt-2">
            <h3 className="text-lg font-medium mb-2">Send Message</h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-3"
            >
              <textarea
                name="message"
                placeholder="Your message"
                rows={3}
                required
                className="p-3 rounded-md bg-white/5 border border-white/10 text-white text-sm placeholder-white/40 focus:outline-none focus:border-indigo-700"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="p-3 rounded-md bg-white/5 border border-white/10 text-white text-sm placeholder-white/40 focus:outline-none focus:border-indigo-700"
              />

              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="p-3 rounded-md bg-white/5 border border-white/10 text-white text-sm placeholder-white/40 focus:outline-none focus:border-indigo-700"
              />

              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 transition px-4 py-2 rounded-md text-sm font-medium"
              >
                Send
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10 text-center py-4 text-xs text-white/40">
        © 2026 Ahushan Portfolio. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;