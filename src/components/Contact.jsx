import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/sendEmail', formData);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-16 mt-24 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-gradient text-accent  font-poppins mb-2 tracking-wide">
                Hablá con nosotros
              </h4>
              <h2 className="text-[45px] lg:text-[80px] text-zinc-900 font-semibold leading-none mb-12">
                Dejá tu <br /> Consulta
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border-4 border-zinc-400 bg-zinc-900 rounded-2xl  text-white flex flex-col gap-y-6 pb-24 p-6 items-start"
            onSubmit={handleSubmit}
          >
            <input
              name="name"
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-zinc-300 focus:border-accent transition-all"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              name="email"
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-zinc-300 focus:border-accent transition-all"
              placeholder="Tu email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-zinc-300 focus:border-accent transition-all resize-none mb-12"
              placeholder="Tu mensaje"
              value={formData.message}
              onChange={handleChange}
            />
            <div>
              <button
                type="submit"
                className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-green-800 rounded-[10px] outline-none `}
              >
                Enviar →
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
