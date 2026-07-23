import { motion } from 'motion/react';
import { Sparkles, Palette, Zap, Code, Layout, Globe, Check, ArrowRight, Quote } from 'lucide-react';

export function Services({ isNightMode }: { isNightMode: boolean }) {
  const services = [
    { icon: Sparkles, title: "Generative Design", desc: "AI-powered creative assets tailored to your brand identity." },
    { icon: Palette, title: "UI/UX Systems", desc: "Intelligent, adaptive interfaces that anticipate user needs." },
    { icon: Zap, title: "Rapid Prototyping", desc: "From conceptualization to interactive prototype in record time." },
    { icon: Code, title: "Front-end Engineering", desc: "Pixel-perfect, performant implementation of complex designs." },
    { icon: Layout, title: "Brand Identity", desc: "Cohesive visual languages powered by algorithmic design." },
    { icon: Globe, title: "Web Experiences", desc: "Immersive 3D and animated experiences that captivate." }
  ];

  return (
    <section className="w-full py-24 px-6 relative z-20" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Capabilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`max-w-2xl mx-auto ${isNightMode ? 'text-[#BFC7D5]' : 'text-gray-600'}`}
          >
            We blend human creativity with artificial intelligence to deliver unprecedented digital experiences.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-2xl glass ${!isNightMode ? 'border-gray-200 bg-white/50' : 'border-white/10 bg-white/5'} hover:scale-[1.02] transition-transform`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${isNightMode ? 'bg-white/10' : 'bg-black/5'}`}>
                <svc.icon className={`w-6 h-6 ${isNightMode ? 'text-white' : 'text-black'}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{svc.title}</h3>
              <p className={`text-sm leading-relaxed ${isNightMode ? 'text-[#BFC7D5]' : 'text-gray-600'}`}>{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stats({ isNightMode }: { isNightMode: boolean }) {
  const stats = [
    { value: "400+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50M+", label: "Generations" },
    { value: "24/7", label: "AI Availability" },
  ];
  return (
    <section className={`w-full py-16 px-6 relative z-20 border-y ${isNightMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <h4 className="text-4xl md:text-5xl font-bold mb-2 tracking-tighter">{stat.value}</h4>
            <p className={`text-sm uppercase tracking-widest font-medium ${isNightMode ? 'text-[#BFC7D5]/70' : 'text-gray-500'}`}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Showcase({ isNightMode }: { isNightMode: boolean }) {
  const projects = [
    { name: "Aura", category: "AI Strategy / UI Design", img: "/Day-Picture.png" },
    { name: "Nexus", category: "Brand Identity", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop" },
    { name: "Synthesis", category: "Web Experience", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" },
    { name: "Cognitive", category: "Prototyping", img: "/Night-Picture.png" }
  ];

  return (
    <section className="w-full py-24 px-6 relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Selected Work
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`max-w-xl ${isNightMode ? 'text-[#BFC7D5]' : 'text-gray-600'}`}
            >
              Discover how we've transformed brands through the power of AI-assisted design.
            </motion.p>
          </div>
          <button className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${isNightMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/5 hover:bg-black/10'}`}>
            View All Projects
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative glass ${!isNightMode ? 'border-gray-200 bg-white/50' : 'border-white/10 bg-white/5'}`}>
                <img 
                   src={item.img} 
                   alt={item.name} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
              <p className={`text-sm ${isNightMode ? 'text-[#BFC7D5]' : 'text-gray-600'}`}>{item.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials({ isNightMode }: { isNightMode: boolean }) {
  const testimonials = [
    { quote: "Neuron transformed our entire digital presence in weeks, not months. The AI-driven approach is truly revolutionary.", author: "Sarah Jenkins", role: "CMO, TechNova" },
    { quote: "The most forward-thinking design agency we've ever partnered with. They deliver impossible deadlines with perfect quality.", author: "Marcus Thorne", role: "CEO, Elevate" },
    { quote: "Their generative design systems have saved us countless hours while keeping our brand consistently ahead of the curve.", author: "Elena Rostova", role: "Design Director, Horizon" },
  ];

  return (
    <section className="w-full py-24 px-6 relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Client Feedback</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-2xl glass flex flex-col justify-between ${!isNightMode ? 'border-gray-200 bg-white/50' : 'border-white/10 bg-white/5'}`}
            >
              <div>
                <Quote className={`w-8 h-8 mb-6 ${isNightMode ? 'text-white/20' : 'text-black/10'}`} />
                <p className={`text-lg mb-8 leading-relaxed ${isNightMode ? 'text-[#BFC7D5]' : 'text-gray-700'}`}>"{testimonial.quote}"</p>
              </div>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className={`text-sm ${isNightMode ? 'text-gray-400' : 'text-gray-500'}`}>{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing({ isNightMode }: { isNightMode: boolean }) {
  const plans = [
    { name: "Starter", price: "$4,999", desc: "Perfect for early-stage startups", features: ["1 AI Model Fine-tuning", "Basic UI System", "3 Web Pages", "1 Week Delivery"] },
    { name: "Pro", price: "$12,999", desc: "For scaling companies", features: ["3 AI Models Fine-tuning", "Advanced UI/UX System", "10 Web Pages", "Interactive 3D Elements", "2 Weeks Delivery"], popular: true },
    { name: "Enterprise", price: "Custom", desc: "For large organizations", features: ["Unlimited Models", "Full Brand Identity", "Unlimited Pages", "Dedicated Team", "Custom SLA"] },
  ];

  return (
    <section className="w-full py-24 px-6 relative z-20" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`max-w-2xl mx-auto ${isNightMode ? 'text-[#BFC7D5]' : 'text-gray-600'}`}
          >
            Invest in the future of your brand.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-3xl glass ${plan.popular ? (isNightMode ? 'border-blue-500/50 bg-blue-500/5' : 'border-blue-500 bg-blue-50/50') : (!isNightMode ? 'border-gray-200 bg-white/50' : 'border-white/10 bg-white/5')}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-4">{plan.price}</div>
              <p className={`text-sm mb-8 ${isNightMode ? 'text-[#BFC7D5]' : 'text-gray-600'}`}>{plan.desc}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${isNightMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    <span className={`text-sm ${isNightMode ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-full text-sm font-semibold transition-colors ${
                plan.popular 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : isNightMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { supabase } from '../lib/supabase';

export function CTA({ isNightMode }: { isNightMode: boolean }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const { error } = await supabase
      .from('contacts')
      .insert([
        { name: formData.name, email: formData.email, message: formData.message }
      ]);

    if (error) {
      console.error('Error saving contact:', error);
      setStatus('error');
    } else {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className="w-full py-32 px-6 relative z-20">
      <div className={`max-w-5xl mx-auto p-12 md:p-20 rounded-3xl glass relative overflow-hidden flex flex-col md:flex-row gap-12 items-center ${!isNightMode ? 'border-gray-200 bg-white/80' : 'border-white/10 bg-white/5'}`}>
        <div className={`absolute inset-0 ${isNightMode ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10' : 'bg-gradient-to-br from-blue-500/5 to-purple-500/5'}`} />
        <div className="relative z-10 flex-1 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Ready to evolve?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-lg mb-10 ${isNightMode ? 'text-[#BFC7D5]' : 'text-gray-600'}`}
          >
            Let's discuss how we can leverage AI to transform your digital presence and accelerate your growth.
          </motion.p>
        </div>
        
        <div className="relative z-10 flex-1 w-full max-w-md">
          {status === 'success' ? (
            <div className={`p-8 rounded-2xl text-center ${isNightMode ? 'bg-white/10' : 'bg-black/5'}`}>
              <Check className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Message Sent</h3>
              <p className={isNightMode ? 'text-gray-300' : 'text-gray-600'}>We'll be in touch with you shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm underline opacity-70 hover:opacity-100"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-5 py-3 rounded-xl outline-none border transition-colors focus:border-blue-500 ${isNightMode ? 'bg-black/50 border-white/10 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'}`} 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-5 py-3 rounded-xl outline-none border transition-colors focus:border-blue-500 ${isNightMode ? 'bg-black/50 border-white/10 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'}`} 
                />
              </div>
              <div>
                <textarea 
                  placeholder="Tell us about your project" 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className={`w-full px-5 py-3 rounded-xl outline-none border transition-colors focus:border-blue-500 resize-none ${isNightMode ? 'bg-black/50 border-white/10 text-white placeholder-gray-500' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'}`} 
                />
              </div>
              {status === 'error' && (
                <p className="text-red-500 text-sm">Failed to send message. Please try again.</p>
              )}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'submitting'}
                type="submit"
                className={`w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-colors disabled:opacity-50 ${isNightMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
              >
                {status === 'submitting' ? 'Sending...' : 'Start a Project'}
                {status !== 'submitting' && <ArrowRight className="w-4 h-4" />}
              </motion.button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
