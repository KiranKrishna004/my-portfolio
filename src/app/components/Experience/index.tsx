export const Experience = () => {
  return (
    <section id="experience" className="mb-16">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
          <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
          <p className="text-gray-600 mb-4">NuCash | 2022 - Present</p>

          <p className="ml-2 text-gray-900">
            Admin Panel{' '}
            <span className="text-xs">
              (React.js, RTK Query, Mantine UI, Golang, Python, Nest.js)
            </span>
          </p>
          <ul className="ml-4 list-disc list-inside space-y-2 pt-2">
            <li>
              Proposed and implemented an in-house email system, eliminating the
              need for an external service and{' '}
              <strong>saving the company $30K per month.</strong>
            </li>
            <li>
              Developed and enforced authorized page access, enhancing security
              protocols.
            </li>
            <li>
              <strong>Improved API status clarity by 50%</strong> with
              interceptors and engineered customer support features, including
              audit logging and notification triggers.
            </li>
            <li>
              Managed the wrapper microservice for the admin panel, ensuring
              99.9% uptime and seamless operation.
            </li>
            <li>
              Facilitated the Bank&apos;s Security and Crime team by developing
              an account opening feature with a review system and system
              override, <strong>reducing manual intervention by 40%</strong>.
            </li>
            <li>
              <strong>Increased operational efficiency by 30%</strong> by
              creating workflows for Lending and Digital Gold partners.
            </li>
          </ul>

          <p className="ml-2 text-gray-900 pt-10">
            NuCash Website{' '}
            <span className="text-xs">(Next.js, Mantine UI, Strapi)</span>
          </p>
          <ul className="ml-4 list-disc list-inside space-y-2 pt-2">
            <li>
              Boosted website performance by 25% through SSR and SSG, and{' '}
              <strong>increased visibility by 35%</strong> with optimized SEO.
            </li>
            <li>
              <strong> Reduced load time by 40% </strong>with standardized cache
              policies and achieved an A-grade using Lighthouse and PageSpeed
              Insights.
            </li>
            <li>
              Maintained 99.9% uptime with automated monitoring, and{' '}
              <strong>improved marketing engagement by 20%</strong> through OG
              meta tagging.
            </li>
            <li>
              Streamlined content management for over 100 blog updates using
              Strapi CMS.
            </li>
          </ul>

          <p className="ml-2 text-gray-900 pt-10">
            Marketing{' '}
            <span className="text-xs">
              (MailerLite, CleverTap, In-House Mailer)
            </span>
          </p>
          <ul className="ml-4 list-disc list-inside space-y-2 pt-2">
            <li>
              Implemented tracking pixels and CTA tracking for enhanced email
              campaign analytics.
            </li>
          </ul>

          <p className="ml-2 text-gray-900 pt-10">
            Backend{' '}
            <span className="text-xs">(Golang, Python, gRPC, REST)</span>
          </p>
          <ul className="ml-4 list-disc list-inside space-y-2 pt-2">
            <li>
              Reduced API response time by 70% by migrating to gRPC and
              developed APIs to reduce the bank&apos;s statement API load by
              60%.
            </li>
            <li>
              Improved debugging capabilities by 50% by adding middleware to
              provide audit logs for user-requested APIs.
            </li>
            <li>
              Engineered a script to convert HTML to PDF for document uploads to
              the bank for KYC purposes.
            </li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
          <h3 className="text-xl font-semibold mb-2">Web Developer</h3>
          <p className="text-gray-600 mb-4">Kreate | Jul 2022 - Nov 2022</p>
          <ul className="ml-4 list-disc list-inside space-y-2 pt-2">
            <li>
              Enhanced security and streamlined payments on the Seller Dashboard
              by integrating Razorpay and improving workflows.
            </li>
            <li>
              Refactored and optimized code to boost readability and user
              experience (UX).
            </li>
            <li>
              Successfully launched the website for the Independence Day Sale,
              handling a 200% traffic increase.
            </li>
            <li>
              Improved load time by 25% and resolved SSR issues for better site
              performance.
            </li>
            <li>
              Streamlined seller payouts and improved operational efficiency by
              30% with new interfaces for the Admin Panel.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
