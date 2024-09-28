import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export const Contact = () => {
  return (
    <section id="contact" className="mb-16">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <form className="space-y-4 max-w-md mx-auto">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Send Message
        </button>
      </form>
      <div className="flex justify-center space-x-4 mt-8">
        <a
          href="https://github.com/KiranKrishna004"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">GitHub</span>
          <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/kiran-krishna-a90640133/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">LinkedIn</span>
          <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
        </a>
        <a
          href="mailto:kiran.narath2000@gmail.com"
          className="text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Email</span>
          <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
        </a>
      </div>
    </section>
  )
}
