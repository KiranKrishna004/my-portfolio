import Link from 'next/link'

import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Contact } from './components/Contact'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans ">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="space-x-4">
            <Link href="#experience" className="hover:underline">
              Experience
            </Link>
            <Link href="#projects" className="hover:underline">
              Projects
            </Link>
            <Link href="#skills" className="hover:underline">
              Skills
            </Link>
            <Link href="#education" className="hover:underline">
              Education
            </Link>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Kiran Krishna N</h1>
          <p className="text-xl mb-8">
            Frontend Developer | Full Stack Developer
          </p>
          <Link
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Get in touch
          </Link>
        </section>
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="bg-gray-100 py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Kiran Krishna N. All rights
          reserved.
        </p>
      </footer>
    </div>
  )
}
