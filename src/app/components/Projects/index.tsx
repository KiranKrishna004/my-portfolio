export const Projects = () => {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
          <h3 className="text-xl font-semibold mb-1">Result Scraper</h3>
          <p className="text-xs text-gray-600 mb-4">
            Reactjs, Vite, MantineUI, Puppeteer, Docker, Express
          </p>
          <p className="text-sm mb-2">
            Developed and containerized a web scraper for CUSAT results,
            retrieving and organizing exam data efficiently.
          </p>
          <p className="text-sm mb-2">
            Reduced response time with parallel processing and deployed the
            application on Render.com using Docker.
          </p>
          <p className="text-sm">
            Ensured user privacy by avoiding server-side storage of personal
            information.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
          <h3 className="text-xl font-semibold mb-1">Azure Crop Prediction</h3>
          <p className="text-xs text-gray-600 mb-4">
            Azure VM, React.js, Flask, CI/CD
          </p>
          <p className="text-sm mb-2">
            Developed and deployed a machine learning-based crop recommendation
            single-page application (SPA) on an Azure VM, optimizing for
            multiple agricultural parameters.
          </p>
          <p className="text-sm mb-2">
            Established a CI/CD pipeline using GitHub Actions to automate
            testing and redeployment, ensuring seamless updates upon changes to
            the production branch.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
          <h3 className="text-xl font-semibold mb-1">Saleor Storefront</h3>
          <p className="text-xs text-gray-600 mb-4">
            React.js, Apollo-GraphQL, Redux, Saleor
          </p>
          <p className="text-sm mb-2">
            Engineered an SPA with Saleor API integration and Apollo GraphQL,
            optimizing data retrieval with a Cache-First policy and implementing
            secure Saleor authentication.
          </p>
        </div>
      </div>
    </section>
  )
}
