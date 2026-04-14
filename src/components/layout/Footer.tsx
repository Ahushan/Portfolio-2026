import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Send } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { toast } from "react-toastify";
import React, { useRef } from "react";
import { SiLeetcode } from "react-icons/si";
import { navLinkData } from "../../data/Constant";

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
    <footer className="mt-16 border-t border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-10 md:grid-cols-3">
        
        {/* LEFT - ABOUT */}
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">Contact</h1>
          <p className="text-sm text-white/70 leading-relaxed">
            I'm a developer focused on building clean and performant web
            experiences. Open to collaboration and new opportunities.
          </p>
        </div>

        {/* CENTER - LINKS */}
        <div className="space-y-4">
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

        {/* RIGHT - SOCIAL + FORM */}
        <div className="space-y-6">
          
          {/* SOCIAL */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Follow</h2>
            <div className="flex gap-5 text-xl">
              <a
                href="https://linkedin.com/in/mohamed-ahushan-498473265"
                target="_blank"
                className="text-white/60 hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Ahushan"
                target="_blank"
                className="text-white/60 hover:text-white transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="text-white/60 hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://leetcode.com/"
                target="_blank"
                className="text-white/60 hover:text-yellow-400 transition"
              >
                <SiLeetcode />
              </a>
            </div>
          </div>

          {/* FORM */}
          <div>
            <h3 className="text-lg font-medium mb-2">Get in touch</h3>

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
                className="
                p-3 rounded-md
                bg-white/5 border border-white/10
                text-white text-sm
                placeholder-white/40
                focus:outline-none focus:border-indigo-700
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="
                p-3 rounded-md
                bg-white/5 border border-white/10
                text-white text-sm
                placeholder-white/40
                focus:outline-none focus:border-indigo-700
                "
              />

              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="
                p-3 rounded-md
                bg-white/5 border border-white/10
                text-white text-sm
                placeholder-white/40
                focus:outline-none focus:border-indigo-700
                "
              />

              <button
                type="submit"
                className="
                flex items-center justify-center gap-2
                bg-white text-black
                hover:bg-gray-200
                transition
                px-4 py-2 rounded-md text-sm font-medium
                "
              >
                Send
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 text-center py-4 text-xs text-white/40">
        © 2026 Ahushan Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;