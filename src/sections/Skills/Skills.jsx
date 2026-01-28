import React from 'react'
import Card from '../../components/skills/card'

export default function Skills() {

    const skills = [
        {
            name: 'Next.js',
            icon: 'fa-nextjs',
            color: 'text-gray-900 dark:text-gray-200'
        },
        {
            name: 'React',
            icon: 'fa-react',
            color: 'text-sky-500 dark:text-sky-400'
        }, 
        {
            name: "Tailwind",
            icon: "fa-tailwind",
            color: ''
        },
        {
            name: 'Bootstrap',
            icon: 'fa-bootstrap',
            color: 'text-purple-700 dark:text-purple-400'
        },
        {
            name: 'HTML5',
            icon: 'fa-html5',
            color: 'text-orange-600 dark:text-orange-400'
        },
        {
            name: 'CSS3',
            icon: 'fa-css3-alt',
            color: 'text-blue-600 dark:text-blue-400'
        },
        {
            name: 'JavaScript',
            icon: 'fa-js',
            color: 'text-yellow-500 dark:text-yellow-400'
        },
        {
            name: 'TypeScript',
            icon: 'fa-js text-blue-700',
            color: 'text-blue-600 dark:text-blue-400'
        },
        {
            name: 'Git / GitHub',
            icon: 'fa-github',
            color: 'text-gray-800 dark:text-gray-100'
        }
    ]

  return (
    <section id='Skills' className='min-h-screen bg-gray-50 dark:bg-gray-900 grid items-center'>

        <div className="container">
            <h2 className="text-sky-600 dark:text-sky-400">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    skills.map( skill => <Card key={skill.name} name={skill.name} icon={skill.icon} color={skill.color} /> )
                }
            </div>
        </div>
        
    </section>
  )
}
