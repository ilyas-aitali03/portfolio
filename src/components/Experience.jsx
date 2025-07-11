import { motion } from 'framer-matrix';
import { Briefcase, Calendar, MapPin, Award, Users, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Employé de Magasin",
      company: "BIM",
      location: "Laâyoune, Maroc",
      period: "Mars 2025 - Présent",
      type: "CDI",
      description: "Gestion complète des opérations de magasin avec focus sur l'excellence du service client et l'optimisation des processus.",
      responsibilities: [
        "Accueil et conseil personnalisé des clients",
        "Gestion optimisée des stocks et inventaires",
        "Utilisation experte des systèmes POS",
        "Coordination d'équipe et formation des nouveaux employés",
        "Analyse des ventes et reporting"
      ],
      skills: ["Service Client", "Gestion d'Équipe", "Systèmes POS", "Gestion de Stock"],
      achievements: [
        "Amélioration de 25% de la satisfaction client",
        "Réduction de 15% des erreurs de stock",
        "Formation de 5+ nouveaux employés"
      ],
      icon: Users,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      title: "Stagiaire Infrastructure Réseau",
      company: "Aéroport Hassan I",
      location: "Laâyoune, Maroc",
      period: "2024",
      type: "Stage",
      description: "Mise en place d'une infrastructure réseau virtuelle sécurisée pour connecter les différents aéroports du royaume.",
      responsibilities: [
        "Configuration de réseaux virtuels DMVPN",
        "Déploiement de tunnels VPN sécurisés",
        "Collaboration en équipe pour l'optimisation réseau",
        "Tests et validation des performances",
        "Documentation technique complète"
      ],
      skills: ["DMVPN", "VPN", "GNS3", "Cisco IOS", "Sécurité Réseau"],
      achievements: [
        "Déploiement réussi du réseau inter-aéroports",
        "Amélioration de 30% des performances réseau",
        "Zéro incident de sécurité"
      ],
      icon: Briefcase,
      color: "from-blue-500 to-purple-600"
    }
  ];

  const education = [
    {
      degree: "Technicien Spécialisé en Infrastructure Digitale",
      specialization: "Option Systèmes et Réseaux",
      school: "Cité des Métiers et des Compétences (CMC)",
      location: "Laâyoune",
      period: "2022 - 2024",
      description: "Formation complète en infrastructure digitale avec spécialisation en systèmes et réseaux.",
      highlights: [
        "Certification CCNA (3 modules)",
        "Projets pratiques d'infrastructure",
        "Stage professionnel validé"
      ]
    },
    {
      degree: "Baccalauréat Sciences Physiques-Chimiques",
      school: "Lycée Baba Ahmed Ben Mohamed Yahdih",
      location: "Laâyoune",
      period: "2022",
      description: "Formation scientifique solide avec mention.",
      highlights: [
        "Mention Bien",
        "Spécialisation sciences exactes",
        "Projet de fin d'études"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.4),transparent_70%)]" />
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
            Mon <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Parcours</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Un parcours diversifié alliant expertise technique et compétences relationnelles, 
            forgé par des expériences enrichissantes et une formation solide.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Professional Experience */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center"
          >
            <Briefcase className="mr-3 text-blue-400" size={28} />
            Expérience Professionnelle
          </motion.h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-500 to-purple-600 opacity-30" />
                )}

                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Timeline Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <exp.icon className="text-white" size={24} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div>
                        <h4 className="text-2xl font-semibold text-white mb-2">{exp.title}</h4>
                        <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-4">
                          <span className="flex items-center">
                            <Briefcase size={16} className="mr-2 text-blue-400" />
                            {exp.company}
                          </span>
                          <span className="flex items-center">
                            <MapPin size={16} className="mr-2 text-green-400" />
                            {exp.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar size={16} className="mr-2 text-purple-400" />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        exp.type === 'CDI' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="grid lg:grid-cols-2 gap-6">
                      {/* Responsibilities */}
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <TrendingUp size={18} className="mr-2 text-blue-400" />
                          Responsabilités
                        </h5>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start text-gray-400 text-sm">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <Award size={18} className="mr-2 text-green-400" />
                          Réalisations
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-gray-400 text-sm">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center"
          >
            <Award className="mr-3 text-purple-400" size={28} />
            Formation
          </motion.h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Award className="text-white" size={20} />
                  </div>
                  <span className="text-gray-400 text-sm">{edu.period}</span>
                </div>

                <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                {edu.specialization && (
                  <p className="text-blue-400 font-medium mb-3">{edu.specialization}</p>
                )}
                
                <div className="flex items-center text-gray-300 mb-4">
                  <MapPin size={16} className="mr-2 text-purple-400" />
                  <span>{edu.school}, {edu.location}</span>
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{edu.description}</p>

                <div className="space-y-2">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;