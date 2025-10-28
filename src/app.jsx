import React, { useEffect, useState } from 'react'
import { motion, useScroll, AnimatePresence, useTransform, useMotionTemplate } from "framer-motion";
import { Github, Linkedin, Mail, MessageSquare, Briefcase, Code, Coffee } from 'lucide-react'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiFigma } from "react-icons/si";
import LogoLoop from "./components/LogoLoop";

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'your-github-username'

function useGitHubRepos(username){
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    if(!username || username === 'your-github-username'){
      setLoading(false)
      setRepos([])
      return
    }
    setLoading(true)
    setError(null)
    fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
      .then(res => {
        if(!res.ok) throw new Error('GitHub API error')
        return res.json()
      })
      .then(data => {
        const filtered = data
          .filter(r => !r.fork)
          .sort((a,b)=> new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0,12)
        setRepos(filtered)
      })
      .catch(err=> setError(err.message))
      .finally(()=> setLoading(false))
  },[username])

  return {repos,loading,error}
}

export default function App(){
  const {repos, loading, error} = useGitHubRepos(GITHUB_USERNAME)

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0b0f13] via-[#101820] to-[#151f2b] text-gray-100">
      <Landing />
      <Nav />
      <main className="flex-1 container mx-auto px-6 py-12">
        <Hero />
        <section id="skills" className="mt-12">
          <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4">Skills</h3>
          <div className="relative overflow-hidden h-[120px] sm:h-[150px]">
            <LogoLoop
              logos={[
                { node: <SiReact />, title: "React", href: "https://react.dev" },
                { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
                { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
                { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
                { node: <SiPython />, title: "Python", href: "https://python.org" },
                { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
              ]}
              speed={100}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#0b0f13"
              ariaLabel="Technology stack"
            />
          </div>
        </section>


        <section id="projects" className="mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Selected Projects</h3>
            <p className="text-sm text-gray-400">pulled from GitHub • client-side</p>
          </div>

          <div className="mt-6">
            {loading && <p className="text-gray-400">Loading projects from GitHub...</p>}
            {error && <p className="text-red-400">{error}</p>}
            {!loading && repos.length === 0 && (
              <EmptyState />
            )}

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {repos.map(repo=> (
                  <motion.div
                    key={repo.id}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{
                      rotateX: 4,
                      rotateY: -4,
                      scale: 1.04,
                      transition: { type: "spring", stiffness: 200, damping: 15 },
                    }}
                    className="bg-panel p-5 rounded-2xl shadow-soft border border-white/6 backdrop-blur transform-gpu will-change-transform"
                  >
                    <ProjectCard repo={repo} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

function Landing() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const blur = useTransform(scrollY, [0, 150], [0, 8]);
  const filter = useMotionTemplate`blur(${blur}px)`; 

  return (
    <section className="relative h-[120vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
      <motion.div style={{ opacity, filter }} className="text-center z-10">
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold mb-4 tracking-tight"
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Welcome to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-indigo-200">
            Stijn's Portfolio
          </span>
        </motion.h1>
        <p className="text-lg md:text-xl text-white/80 mb-8">
          Crafting digital experiences that look sharp and feel smooth.
        </p>

        <ScrollIndicator />
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0b0f13] to-transparent pointer-events-none"></div>
    </section>
  );
}

function Nav(){
  return (
    <nav className="w-full border-b border-white/10 backdrop-blur-md bg-[#0b0f13]/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center font-semibold">Sv</div>
          <div>
            <div className="text-sm font-medium">Stijn van den Dool</div>
            <div className="text-xs text-gray-400">18 · Software developer</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="#projects" className="text-sm text-gray-300 hover:text-white">Projects</a>
          <a href="#skills" className="text-sm text-gray-300 hover:text-white">Skills</a>
          <a href="#contact" className="text-sm text-gray-300 hover:text-white">Contact</a>
          <div className="ml-3 flex items-center gap-2">
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-white/5">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/stijnvdd/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-white/5">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

function ContactSection() {
  const contactOptions = [
    {
      icon: <Briefcase size={22} />,
      title: "Collaboration 🤝",
      desc: "Got a project idea or want to team up on something innovative?",
      subject: "Collaboration Opportunity",
      body: "Hey Stijn,\n\nI’d love to collaborate with you on a project! Here’s what I had in mind:\n\n(Describe your idea here)\n\nLooking forward to hearing from you!",
    },
    {
      icon: <Code size={22} />,
      title: "Freelance / Work 🧑‍💻",
      desc: "Looking for a developer or designer? Let’s build something together.",
      subject: "Freelance Project Inquiry",
      body: "Hi Stijn,\n\nI’m interested in working with you on a freelance basis. Here are the project details:\n\n(Specify project scope or requirements)\n\nThanks!",
    },
    {
      icon: <MessageSquare size={22} />,
      title: "Ideas or Feedback 💡",
      desc: "Got a cool idea or something I could improve? I’d love to hear it!",
      subject: "Idea or Feedback",
      body: "Hey Stijn,\n\nI had an idea or some feedback I wanted to share with you:\n\n(Write it here)\n\nThanks for being open to suggestions!",
    },
    {
      icon: <Coffee size={22} />,
      title: "Just Say Hi 👋",
      desc: "Want to chat or say hello? I’m always happy to connect.",
      subject: "Just Saying Hi",
      body: "Hey Stijn,\n\nJust wanted to say hi! Love your work and would like to connect sometime.\n\nCheers!",
    },
  ];

  const handleEmailClick = (subject, body) => {
    const mailto = `mailto:stijnvdd2007@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="mt-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <motion.h3
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          Let’s build something great together.
        </motion.h3>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Select how you’d like to reach out — I’ll prepare the email for you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactOptions.map((option, i) => (
          <motion.div
            key={option.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <button
              onClick={() => handleEmailClick(option.subject, option.body)}
              className="group relative w-full text-left bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-400 group-hover:text-indigo-300">
                  {option.icon}
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-indigo-300 transition">
                    {option.title}
                  </div>
                  <div className="text-sm text-gray-400">{option.desc}</div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute bottom-4 right-4 text-xs text-indigo-400 group-hover:translate-x-1 transition"
              >
              </motion.div>
            </button>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm"
      >
        <a
          href="mailto:stijnvdd2007@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition"
        >
          <Mail size={16} /> stijnvdd2007@gmail.com
        </a>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/zyphcore"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/stijnvdd/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Hero(){
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <motion.h1 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay:0.05}} className="text-4xl md:text-5xl font-extrabold leading-tight">Stijn van den Dool
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400"> — developer & designer</span>
        </motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.15}} className="mt-4 text-gray-300 max-w-xl">I build responsive apps, polished interfaces, and secure systems. Frontend, backend, UX/UI and cybersecurity — I like making things that feel fast and look sleek.</motion.p>

        <div className="mt-6 flex items-center gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md hover:opacity-90 transition">View projects</a>
          <a href="#contact" className="px-4 py-3 rounded-full border border-white/10 hover:bg-white/5 transition">Contact</a>
        </div>
      </div>

      <div className="relative">
        <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale:1, opacity:1 }} transition={{ duration: 0.6 }} className="p-6 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur border border-white/10 shadow-soft">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-lg font-bold">Sv</div>
            <div>
              <div className="text-sm text-gray-300">Currently exploring</div>
              <div className="mt-1 font-medium">Secure full-stack patterns • micro-frontend UX</div>
              <div className="mt-3 text-xs text-gray-400">Age 18 • Amsterdam timezone</div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2">
            <MiniStat label="Frontend" value="React" />
            <MiniStat label="Backend" value="Node" />
            <MiniStat label="Design" value="Figma" />
          </div>
        </motion.div>
        {/* Floating badge for large screens */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="hidden lg:flex absolute -right-8 -bottom-8 w-48 p-4 rounded-2xl bg-gradient-to-r from-indigo-500/30 to-purple-500/30 border border-white/10 backdrop-blur-lg shadow-lg cursor-pointer hover:scale-105 transition"
        >
          <div className="flex flex-col items-start">
            <div className="text-xs uppercase tracking-wider text-gray-200">Open to work</div>
            <div className="text-sm font-medium text-white">Freelance Opportunities</div>
          </div>
        </motion.a>

        {/* Centered badge for smaller screens */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="lg:hidden mt-6 w-full flex justify-center cursor-pointer"
        >
          <div className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500/30 to-purple-500/30 border border-white/10 backdrop-blur-lg text-center hover:scale-105 transition">
            <div className="text-xs uppercase tracking-wider text-gray-200">Open to work</div>
            <div className="text-sm font-medium text-white">Freelance Opportunities</div>
          </div>
        </motion.a>
      </div>
    </section>
  )
}


function ScrollIndicator() {
  const { scrollY } = useScroll();
  const fadeOut = useTransform(scrollY, [0, 150], [1, 0]);

  return (
    <motion.div
      style={{ opacity: fadeOut }}
      className="flex flex-col items-center mt-6"
    >
      <p className="text-sm text-white/80 mb-2 animate-pulse font-medium">
        Scroll to start your journey
      </p>

      <motion.div
        animate={{ y: [0, 10, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className="drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-7 h-7 text-white/80"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

function MiniStat({label,value}){
  return (
    <div className="p-3 rounded-lg bg-white/5">
      <div className="text-xs text-gray-400">{label}</div>
      <div className="font-semibold text-white">{value}</div>
    </div>
  )
}

function Skill({name, delay}){
  return (
    <motion.div initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} transition={{delay}} className="p-3 rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10">
      <div className="text-sm font-medium">{name}</div>
    </motion.div>
  )
}

function EmptyState(){
  return (
    <div className="p-6 rounded-lg bg-panel border border-white/10">
      <p className="text-gray-400">No projects found. Set your GitHub username in <code className="text-xs px-1 py-0.5 rounded bg-white/5">VITE_GITHUB_USERNAME</code> in <code className="text-xs px-1 py-0.5 rounded bg-white/5">.env</code> to fetch public repos.</p>
    </div>
  )
}

function ProjectCard({repo}){
  const topics = repo.topics || []
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between">
        <div>
          <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-sm font-semibold hover:underline">{repo.name}</a>
          <div className="text-xs text-gray-400 mt-1">{repo.language || '—'}</div>
        </div>
        <div className="text-xs text-gray-400">{new Date(repo.updated_at).toLocaleDateString()}</div>
      </div>

      <p className="mt-3 text-sm text-gray-300 flex-1">{repo.description || 'No description'}</p>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {topics.slice(0,3).map(t=> (
            <span key={t} className="text-xs px-2 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">{t}</span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 rounded-lg border border-white/10 hover:bg-white/5 transition">View</a>
        </div>
      </div>
    </div>
  )
}

function Footer(){
  return (
    <footer className="border-t border-white/10 bg-[#0b0f13]/60 backdrop-blur-md">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-400">© {new Date().getFullYear()} Stijn van den Dool</div>
        <div className="flex items-center gap-3">
          <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5"><Github size={16} /></a>
          <a href="https://www.linkedin.com/in/stijnvdd/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5"><Linkedin size={16} /></a>
          <a href="mailto:stijnvdd2007@gmail.com" className="p-2 rounded-md hover:bg-white/5"><Mail size={16} /></a>
        </div>
      </div>
    </footer>
  )
}