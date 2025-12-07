import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { images, contactInfo, navLinks } from "@/lib/mockData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <img
                src={images.logo}
                alt="MGOK Stąporków"
                className="h-12 w-auto invert"
              />
              <div className="text-lg font-serif font-semibold leading-tight">
                MGOK<br />Stąporków
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Miejsko-Gminny Ośrodek Kultury w Stąporkowie - centrum kultury, sztuki i edukacji dla mieszkańców gminy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-lg mb-6">Kontakt</h3>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  {contactInfo.address}<br />
                  {contactInfo.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-6">Godziny otwarcia</h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="block text-white">Pon - Pt</span>
                  {contactInfo.hours.weekdays}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="block text-white">Sobota</span>
                  {contactInfo.hours.saturday}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="block text-white">Niedziela</span>
                  {contactInfo.hours.sunday}
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold text-lg mb-6">Szybkie linki</h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              {navLinks.left.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="hover:text-white transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-lg mt-8 mb-4">Social Media</h3>
            <div className="flex gap-3">
              <a
                href={contactInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary transition-colors"
                data-testid="footer-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary transition-colors"
                data-testid="footer-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-primary transition-colors"
                data-testid="footer-youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-zinc-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
            <p data-testid="footer-copyright">
              © {currentYear} {contactInfo.name}. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex gap-6">
              <Link href="/polityka-prywatnosci">
                <span className="hover:text-white transition-colors cursor-pointer">
                  Polityka prywatności
                </span>
              </Link>
              <Link href="/regulamin">
                <span className="hover:text-white transition-colors cursor-pointer">
                  Regulamin
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
