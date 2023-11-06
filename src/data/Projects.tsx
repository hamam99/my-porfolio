import jakpat from '/public/assets/projects/jakpat.jpg'
import appfuxion from '/public/assets/projects/appfuxion.png'
import newsapp from '/public/assets/projects/newsapp.jpg'
import myDoctor from '/public/assets/projects/my-doctor.jpg'
import reactLendela from '/public/assets/projects/react-lendela.jpg'
import tmestetik from '/public/assets/projects/tmestetik.jpg'
import presensi from '/public/assets/projects/presensi.jpg'

const Projects = [
  {
    name: 'TM Estetik',
    description: 'Online shop for tmestetik.com',
    image: tmestetik,
    url: 'https://play.google.com/store/apps/details?id=com.tmestetik',
    urlDemo: 'https://play.google.com/store/apps/details?id=com.tmestetik',
    urlCode: '',
    technology: 'React Native, Zustand, Axios'
  },
  {
    name: 'Presensi',
    description: 'Absense App for Teacher',
    image: presensi,
    url: 'https://play.google.com/store/apps/details?id=com.git.jakpat.jajakpendapat',
    urlDemo:
      'https://play.google.com/store/apps/details?id=com.git.jakpat.jajakpendapat',
    urlCode: '',
    technology: 'React Native, Zustand, Axios'
  },
  {
    name: 'Jakpat',
    description: 'Survey Online App',
    image: jakpat,
    url: 'https://play.google.com/store/apps/details?id=com.git.jakpat.jajakpendapat',
    urlDemo:
      'https://play.google.com/store/apps/details?id=com.git.jakpat.jajakpendapat',
    urlCode: '',
    technology: 'React Native'
  },
  {
    name: 'Fuxion Spark',
    description:
      'A gigs provider apps for talent to bid a job and for searching talent',
    image: appfuxion,
    urlDemo:
      'https://play.google.com/store/apps/details?id=com.fuxionspark&hl=id&gl=US',
    urlCode: '',
    technology: 'React Native'
  },
  {
    name: 'Simple News App',
    description: 'A Simple News app using axios and react-query',
    image: newsapp,
    urlDemo: '',
    urlCode: 'https://github.com/hamam99/NewsApp',
    technology: 'React Native'
  },
  {
    name: 'My Doctor App',
    description: 'Simple app for consultation to doctor using Firebase',
    image: myDoctor,
    urlDemo: '',
    urlCode: 'https://github.com/hamam99/MyDoctor-BWA',
    technology: 'React Native + Firebase'
  },
  {
    name: 'Lendela SG',
    description: 'Clone landing page Lendela SG for learning',
    image: reactLendela,
    urlDemo: '',
    urlCode: 'https://github.com/hamam99/clone-lendela',
    technology: 'NextJS + TailwindCSS'
  }
]

export default Projects
