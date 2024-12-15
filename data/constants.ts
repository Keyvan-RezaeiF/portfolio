export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
]

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: 'I\'m very flexible with time zone communications',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building a JS Animation library',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
]

export const projects = [
  {
    id: 1,
    title: 'TKN - Video Conferencing App',
    des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
    img: '/p2.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: '/ui.yoom.com',
  },
]

export const testimonials = [
  {
    quote: 'Keyvan is an exceptionally talented and dedicated individual whose expertise in software programming is truly admirable. His keen intellect and deep knowledge have consistently proven to be invaluable assets in navigating complex challenges. Keyvan\'s brilliance shines through when faced with intricate problems, and his insightful ideas have played a pivotal role in achieving successful outcomes. His extensive experience in the realm of smart TVs is nothing short of remarkable, making him an essential member of any team. Keyvan\'s commitment, sharpness, and advanced skill set make him an exemplary teammate and a pleasure to work with.',
    name: 'Mostafa Keshavarz',
    title: 'Front-End Team Lead at Namava',
    linkedinUrl: 'https://www.linkedin.com/in/mostafa-keshavarz-mehr/',
    img: '/keshavarz.jpeg'
  },
]

export const companies = [
  {
    id: 1,
    name: 'Namava',
    img: '/namava.svg',
    link: 'https://namava.ir'
  },
  {
    id: 2,
    name: 'KNTU',
    img: '/kntu.svg',
    link: 'https://kntu.ac.ir'
  },
  {
    id: 3,
    name: 'FilmDiDi',
    img: '/filmdidi.svg',
    link: 'https://filmdidi.com'
  },
  {
    id: 4,
    name: 'Vafa',
    img: '/vafa.svg',
    link: 'https://vafa.ir'
  },
]

export const workExperiences = [
  {
    id: 1,
    title: 'Frontend Engineer Intern',
    desc: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Mobile App Dev - JSM Tech',
    desc: 'Designed and developed mobile app for both iOS & Android platforms using React Native.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Freelance App Dev Project',
    desc: 'Led the dev of a mobile app for a client, from initial concept to deployment on app stores.',
    className: 'md:col-span-2',
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Lead Frontend Developer',
    desc: 'Developed and maintained user-facing features using modern frontend technologies.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
]

export const socialMedias = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/Keyvan-RezaeiF',
  },
  {
    id: 2,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/keyvan-rezaei-firozjah-5530841b8',
  },
]

export const approaches = [
  {
    id: 1,
    title: 'Planning & Strategy',
    des: 'We\'ll collaborate to map out your website\'s goals, target audience, and key functionalities. We\'ll discuss things like site structure, navigation, and content requirements.',
    order: 'Phase 1',
    animationSpeed: 5.1,
    containerClassName: 'bg-emerald-900 rounded-3xl overflow-hidden',
  },
  {
    id: 2,
    title: 'Development & Progress Update',
    des: 'Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.',
    order: 'Phase 2',
    animationSpeed: 3,
    containerClassName: 'bg-pink-900 rounded-3xl overflow-hidden',
    colors: [
      [255, 166, 158],
      [221, 255, 247],
    ],
    dotSize: 2,
  },
  {
    id: 3,
    title: 'Development & Launch',
    des: 'This is where the magic happens! Based on the approved design, I\'ll translate everything into functional code, building your website from the ground up.',
    order: 'Phase 3',
    animationSpeed: 3,
    containerClassName: 'bg-sky-600 rounded-3xl overflow-hidden',
    colors: [[125, 211, 252]]
  },
]