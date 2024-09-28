import {
  IconBrandFramerMotion,
  IconBrandGraphql,
  IconBrandMantine,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandRedux,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVite,
  IconLetterTSmall,
} from '@tabler/icons-react'

import { Server, Database, Workflow } from 'lucide-react'

import {
  faDocker,
  faFigma,
  faGit,
  faJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend',
      skills: [
        {
          name: 'React',
          icon: <FontAwesomeIcon icon={faReact} className="w-5 h-5" />,
        },
        {
          name: 'Next.js',
          icon: <IconBrandNextjs stroke={1.25} />,
        },
        {
          name: 'JavaScript',
          icon: <FontAwesomeIcon icon={faJs} className="w-5 h-5" />,
        },
        {
          name: 'TypeScript',
          icon: <IconBrandTypescript stroke={1.25} />,
        },
        {
          name: 'Redux',
          icon: <IconBrandRedux stroke={1.25} />,
        },
        {
          name: 'Redux Toolkit',
          icon: <IconBrandRedux stroke={1.25} />,
        },
        {
          name: 'React-Query',
          icon: <IconLetterTSmall stroke={1.25} />,
        },
      ],
    },
    {
      category: 'UI Tools',
      skills: [
        {
          name: 'TailwindCSS',
          icon: <IconBrandTailwind stroke={1.25} />,
        },
        { name: 'Mantine UI', icon: <IconBrandMantine stroke={1.25} /> },
        { name: 'Material UI', icon: null },
        {
          name: 'Framer Motion',
          icon: <IconBrandFramerMotion stroke={1.25} />,
        },
        {
          name: 'Figma',
          icon: <FontAwesomeIcon icon={faFigma} className="w-5 h-5" />,
        },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Express.js', icon: <Server className="w-5 h-5" /> },
        { name: 'RESTful APIs', icon: <Database className="w-5 h-5" /> },
        { name: 'Apollo GraphQL', icon: <IconBrandGraphql stroke={1.25} /> },
        { name: 'MongoDB', icon: <IconBrandMongodb stroke={1.25} /> },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        {
          name: 'Git',
          icon: <FontAwesomeIcon icon={faGit} className="w-5 h-5" />,
        },
        { name: 'Vite', icon: <IconBrandVite stroke={1.25} /> },
        {
          name: 'Docker',
          icon: <FontAwesomeIcon icon={faDocker} className="w-5 h-5" />,
        },
        {
          name: 'CI/CD',
          icon: <Workflow className="w-5 h-5" />,
        },
      ],
    },
  ]
  return (
    <section id="skills" className="mb-16">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="bg-gray-50 p-6 rounded-lg">
        {skillsData.map(({ category, skills }) => (
          <div className="mb-6" key={category}>
            <h3 className="text-lg font-semibold mb-3">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills &&
                skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center bg-gray-50 p-2 rounded-lg"
                  >
                    <span>{skill.icon}</span>
                    <span className="text-sm ml-2">{skill.name}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
