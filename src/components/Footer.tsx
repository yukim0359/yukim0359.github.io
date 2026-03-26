import { motion } from "framer-motion";
import { socialLinks } from "../constants/socialLinks";
import { useI18n } from "../i18n/index.tsx";
import { headerEn } from "../data/en/header";
import { headerJa } from "../data/ja/header";

const Footer = () => {
  const { locale } = useI18n();
  const header = locale === "en" ? headerEn : headerJa;
  const quickLinks = [
    { href: "#home", label: header.nav.home },
    { href: "#about", label: header.nav.about },
    { href: "#research", label: header.nav.research },
    { href: "#works", label: header.nav.works },
    { href: "#skills", label: header.nav.skills },
    { href: "#bio", label: header.nav.bio },
  ];
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.36 }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-400">© 2026 Yuki Maeda</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
