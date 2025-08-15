import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const contactDetails = [
  {
    icon: <FiMail size={24} className="text-accent" />,
    text: 'rommel.llanos.a@gmail.com',
    href: 'mailto:rommel.llanos.a@gmail.com',
  },
  {
    icon: <FiPhone size={24} className="text-accent" />,
    text: '+591 70101010',
    href: 'tel:+59170101010',
  },
  {
    icon: <FiMapPin size={24} className="text-accent" />,
    text: 'La Paz, Bolivia',
    href: '#',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-text mb-12">
          Get In Touch
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          {contactDetails.map((detail) => (
            <a key={detail.text} href={detail.href} className="flex items-center space-x-4 text-primary-text hover:text-accent transition-colors duration-300">
              {detail.icon}
              <span className="text-lg">{detail.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
