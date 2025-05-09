import { IMAGES } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function FloatingWhatsapp() {
  const whatsappNumber = "+918880880101";
  const whatsappMessage = "Hi,Can I recieve more information about Ather project?";
  const whatsappUrl = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg z-50 hover:scale-110 transition-transform duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <i className="fab fa-whatsapp text-white text-3xl"></i>
    </motion.a>
  );
}
