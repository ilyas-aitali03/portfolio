import { motion } from 'framer-motion';
import { Network, Shield, Server, Users, Headphones, MessageCircle, Code, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Compétences Techniques",
      icon: Code,
      skills: [
        { name: "Réseaux (TCP/IP, DNS, DHCP)", level: 90 },
        { name: "Administration Windows/Linux", level: 85 },
        { name: "Configuration Cisco (Routeurs/Switches)", level: 88 },
        { name: "Réseaux Virtuels (VPN, DMVPN)", level: 82 },
        { name: "Cybersécurité", level: 80 },
        { name: "Outils de Simulation (Packet Tracer, GNS3)", level: 92 }
      ]
    },
    {
      title: "Compétences Professionnelles",
      icon: Users,
      skills: [
        { name: "Service Client", level: 95 },
        { name: "Gestion d'Équipe", level: 85 },
        { name: "Communication", level: 90 },
        { name: "Résolution de Problèmes", level: 88 },
        { name: "Gestion de Stock", level: 80 },
        { name: "Systèmes POS", level: 85 }
      ]
    }
  ];

  const tools = [
    { name: "Packet Tracer", icon: "🌐", color: "from-blue-500 to-cyan-500" },
    { name: "GNS3", icon: "⚙️", color: "from-green-500 to-emerald-500" },
    { name: "VMware", icon: "💻", color: "from-purple-500 to-pink-500" },
    { name: "VirtualBox", icon: "📦", color: "from-orange-500 to-red-500" },
    { name: "Microsoft Office", icon: "📊", color: "from-indigo-500 to-blue-500" },
    { name: "Linux", icon: "🐧", color: "from-yellow-500 to-orange-500" },
    { name: "Windows Server", icon: "🖥️", color: "from-teal-500 to-green-500" },
    { name: "Cisco IOS", icon: "🔧", color: "from-red-500 to-pink-500" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_70%)]" />
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
            Mes <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Compétences</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Une combinaison unique de compétences techniques et relationnelles, 
            forgée par l'expérience et la passion pour l'innovation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Outils & Technologies</h3>
          <p className="text-gray-400">Technologies et logiciels que je maîtrise au quotidien</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -10 }}
              className={`bg-gradient-to-br ${tool.color} p-6 rounded-xl text-center group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <h4 className="text-white font-semibold text-sm">{tool.name}</h4>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Certifications CCNA</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Introduction to Networks",
              "Switching, Routing, and Wireless Essentials", 
              "Enterprise Networking, Security, and Automation"
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="text-white" size={16} />
                </div>
                <p className="text-gray-300 text-sm font-medium">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;