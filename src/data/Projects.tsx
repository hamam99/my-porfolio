import jakpat from '/public/assets/projects/jakpat.jpg'
import appfuxion from '/public/assets/projects/appfuxion.png'
import newsapp from '/public/assets/projects/newsapp.jpg'

const Projects = [
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
    name: 'News App',
    description: 'A Simple News app using axios and react-query',
    image: newsapp,
    urlDemo: '',
    urlCode: 'https://github.com/hamam99/NewsApp',
    technology: 'React Native'
  }
]

export default Projects
