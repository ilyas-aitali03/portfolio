import { motion } from 'framer-motion';
import { User, Target, Award, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: User,
      title: "Professionnel",
      description: "Expérience solide en infrastructure digitale et gestion client"
    },
    {
      icon: Target,
      title: "Orienté Solutions",
      description: "Approche méthodique pour résoudre les défis techniques complexes"
    },
    {
      icon: Award,
      title: "Certifié",
      description: "Certifications CCNA et formation spécialisée en systèmes et réseaux"
    },
    {
      icon: Heart,
      title: "Passionné",
      description: "Enthousiaste des nouvelles technologies et de l'innovation"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            À propos de <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-4">Mon Parcours</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Diplômé en infrastructure digitale avec une spécialisation en systèmes et réseaux, 
                je combine expertise technique et sens du service client. Mon expérience chez BIM 
                m'a permis de développer mes compétences en gestion d'équipe et relation client, 
                complétant parfaitement ma formation technique.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Passionné par l'innovation technologique, je cherche constamment à approfondir 
                mes connaissances et à relever de nouveaux défis dans le domaine des infrastructures 
                digitales et de la cybersécurité.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20"
            >
              <h4 className="text-xl font-semibold text-white mb-3">Objectif Professionnel</h4>
              <p className="text-gray-300 leading-relaxed">
                Contribuer au succès d'une entreprise innovante en mettant en œuvre mes compétences 
                techniques et mon expérience en configuration de réseaux virtuels, tout en continuant 
                à évoluer dans un environnement technologique stimulant.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "2+", label: "Années d'expérience" },
            { number: "10+", label: "Projets réalisés" },
            { number: "3", label: "Certifications CCNA" },
            { number: "100%", label: "Satisfaction client" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;