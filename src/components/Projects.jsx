import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Code, Network, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Infrastructure Digitale CMC",
      description: "Simulation complète de l'infrastructure digitale de la CMC à Laayoune-Sakia El-Hamra avec Packet Tracer.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Packet Tracer", "VLAN", "DHCP", "Routing"],
      features: [
        "Configuration des VLANs et EtherChannel",
        "Mise en place de serveurs DHCP",
        "Protocoles de routage avancés",
        "Sécurisation réseau"
      ],
      category: "Infrastructure",
      status: "Terminé",
      icon: Network
    },
    {
      id: 2,
      title: "Réseau DMVPN Aéroports",
      description: "Configuration d'un réseau virtuel sécurisé entre les aéroports du Maroc utilisant la technologie DMVPN.",
      image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["GNS3", "DMVPN", "VPN", "Cisco IOS"],
      features: [
        "Tunnels VPN sécurisés",
        "Communication inter-aéroports",
        "Optimisation des performances",
        "Tests et validation"
      ],
      category: "Sécurité",
      status: "Terminé",
      icon: Shield,
      github: "https://github.com/ilyas-aitali03",
      demo: "#"
    },
    {
      id: 3,
      title: "Infrastructure Réseau Entreprise",
      description: "Conception et sécurisation d'une infrastructure réseau d'entreprise avec segmentation avancée.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Cisco 3560", "ACLs", "NAT", "OSPF"],
      features: [
        "Segmentation réseau avec VLANs",
        "Routage inter-VLAN optimisé",
        "Sécurisation avec ACLs",
        "Accès Internet sécurisé"
      ],
      category: "Infrastructure",
      status: "Terminé",
      icon: Network
    },
    {
      id: 4,
      title: "TacoTexas - Site Restaurant",
      description: "Site web moderne et responsive pour un restaurant avec système de réservation en ligne.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
      features: [
        "Design responsive moderne",
        "Système de réservation",
        "Animations interactives",
        "Optimisation mobile"
      ],
      category: "Web",
      status: "En ligne",
      icon: Code,
      demo: "https://tacotexas.netlify.app",
      github: "https://github.com/ilyas-aitali03"
    },
    {
      id: 5,
      title: "AutoILYAS - Location Véhicules",
      description: "Plateforme de location de voitures et motos avec interface utilisateur intuitive.",
      image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
      features: [
        "Catalogue de véhicules",
        "Système de réservation",
        "Interface responsive",
        "Gestion des disponibilités"
      ],
      category: "Web",
      status: "En ligne",
      icon: Code,
      demo: "https://autoilyas.netlify.app",
      github: "https://github.com/ilyas-aitali03"
    },
    {
      id: 6,
      title: "Réseau Complet Cisco",
      description: "Implémentation d'un réseau d'entreprise complet avec haute disponibilité et sécurité avancée.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Cisco 4331", "OSPF", "VLANs", "ACLs"],
      features: [
        "Architecture haute disponibilité",
        "Protocole OSPF optimisé",
        "Sécurisation multicouche",
        "Monitoring avancé"
      ],
      category: "Infrastructure",
      status: "Terminé",
      icon: Network
    }
  ];

  const categories = ["Tous", "Infrastructure", "Sécurité", "Web"];
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(168,85,247,0.4),transparent_70%)]" />
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
            Mes <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projets</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Découvrez mes réalisations techniques, des infrastructures réseau complexes 
            aux applications web modernes.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'En ligne' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Category Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <project.icon className="text-white" size={20} />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md text-xs font-medium border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {project.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-center text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Eye size={16} />
                      <span>Voir</span>
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-white/10 text-white px-4 py-2 rounded-lg font-medium text-center text-sm hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 border border-white/20"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Intéressé par mes projets ? Discutons de vos besoins !
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            <span>Démarrer un projet</span>
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

// Add useState import at the top
import { useState } from 'react';

export default Projects;