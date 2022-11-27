import { Name, BackImage, Title, Photo, About, Network, Experience, Education, Skills, Projects } from './Datas';

export const NAME: Name[] = [
  {
    id: 1,
    name: "Marlenys Palma"
  }
]
export const BACKIMAGE: BackImage[] = [
  {
    id: 1,
    backImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/13471/sparkles.gif"
   }
]
export const TITLE: Title[] = [
  {
    id: 1,
    title: "Desarrollador Web Full Stack Jr"
  }
]
export const PHOTO: Photo[] = [
  {
    id: 1,
    photo: "../assets/images/fotoCurriculo.png"
  }
]
export const ABOUT: About[] = [
  {
    id: 1,
    about: "Profesional Autodidacta, dedicada 02 años incansables a la busqueda del conocimiento de la tecnologia para optimizar el rendimiento de los trabajos para lograr la excelencia"  
  }
]

export const NETWORK: Network[] = [
  {
    id: 1,
    name: "https://linkedin.com/in/marlenys-p-439891101",
    logo: "../assets/images/linkedin.svg"
  },
  {
    id: 2,
    name: "https://www.instagram.com/marlex_20",
    logo: "../assets/images/instagram.svg"
  },
  {
    id: 3,
    name: "https://twitter.com/pmarlex",
    logo: "../assets/images/twitter.svg"
  }
]
export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    image:"../assets/images/bbva.png",
    name:"Banco BBVA Argentina S.A",
    title: "Analista de Datos",
    date:"Noviembre 2020 - Enero 2022",
    description:"Analisis de Datos en la seccional"
  },
  {
    id: 2,
    image:"https://seeklogo.com/images/I/intech-logo-FF4A88A990-seeklogo.com.gif",  
    name:"INTECH",
    title:"Diseñadores UX y UI",
    date:"Febrero 2022- Mayo 2022",
    description:"Encargada del aspecto visual de la interfaz, y de garantizar que la navegación y acciones en los procesos"
  }
]
export const EDUCATION: Education[] = [
  {
    id: 1,
    image:"http://lumetrio.com/images/og_image.jpg",
    name:"Lumetrio",
    title:"Programación Backend",
    date:"Abril 2022 - Octubre 2022",
    description:"Desarrollo de programación Backend Basico"
  },
  {
    id: 2,
    image:"https://www.plataforma5.la/static/media/P5Desktop.d1842dd2bff00677295cd7d28a29e60c.svg",
    name:"Plataforma Coding BootCamp",
    title:"HTML, CSS Y JAVASCRIPT",
    date:"Enero 2020- Mayo 2020",
    description:"Introducción a la base de la Programación"
  }
]

export const SKILLS: Skills[] = [ 
  {
    id: 1,
    name:"Diseño Gráfico",
    val: 75   
  },
  {
    id: 2,
    name:"Resolución de Problemas",
    val: 80   
  },
  {
    id: 3,
    name: "Dominio de Ingles",
    val: 75   
  },
  {
    id: 4,
    name: "Pensamiento Matematico",
    val:90   
  },
  {
    id: 5,
    name:"HTML",
    val: 85   
  }
]

export const PROJECTS: Projects[] = [
  {
   id: 1,
    image: "https://remissoeste.com/img/logo2.png",
    name: "Remis Oeste",
    date: "2021",
    description: "App de servicios de traslados terrestre",
    url: "https://play-lh.googleusercontent.com/b0MT9vazJqOJSMYTK_G9phWTapzxsf7L7px8xPUIuQCNhMa6nthYBVYtvPQOHknb2g"
  },
  {
    id: 2,
    image: "../assets/images/mundohadas.png",
    name: "Mundo Hadas Pzo",
    date: "2022",
    description: "Diseño Web Ecommerce",
    url: "https://instagram.com/mundohadas_pzo?igshid=YmMyMTA2M2Y="
  }
]
