 interface HeroData {
     id:string
    heading: string,
    paragraph: string,
    btnText: string,
  
  }

interface GuideData {
  id: string;
  image: string;
  heading: string;
  paragraph: string ;
}

interface SectionData {
  title: string;
  description: string;
  buttonText: string;
  image: {
    src: string;
    alt: string;
  };
}

export const data: HeroData[] = [
  {
    id: "1",
    heading: "Scooter sharing made simple",
    paragraph:
      "Scoot takes the hassle out of urban mobility.our bikes are placed in convenient locations in each of our cities.Use our app to locate the nearest bike,unlock it with a tap,and you re away!",
    btnText: "learn more",
  },
];

export const guide: GuideData[] = [
  {
    id: "1",
    image: "/Guider/Location.png",
    heading: "Locate with app",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since .",
  },
  {
    id: "2",
    image: "/Guider/Bike.png",
    heading: "Pick your scooter",
    paragraph:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, ",
  },
  {
    id: "3",
    image: "/Guider/paddler.png",
    heading: "Enjoy the ride",
    paragraph:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus ",
  },
];

7

export const cityData: SectionData[] = [
  {
    title: "Coming to a city near you",
    description:
      "Scoot is available in 4 major cities so far,We re expanding rapidly, so be sure to let us know if you want to see us in your hometown.We re aiming to let our scooters loose on 23 cities over the coming year..",
    buttonText: "Learn More",
    image: {
      src: "/City/mobileMan.png",
      alt: "Person holding a mobile phone",
    },
  },
];

export const HasselData: SectionData[] = [
  {
    title: "Zero hassle payments",
    description:
      "Our payment is as easy as one two three. We accept most credit cards and debit cards.You can also link your Paypal account inside tha app later? No worries! You can defer payment for up to a month.",
    buttonText: "Learn More",
    image: {
      src: "/Hassel/hassel.png",
      alt: "Person holding a mobile phone",
    },
  },
];
export const Rept = [
  {
    "title": "Easy to use riding telemetry",
    "description": "The Scoot app is available with riding telemetry. This means it can show your average speed, how long you've been using the scooter, your traveling distance and many more things all in an easy to use app.",
    "buttonText": "Learn More",
    "image": {
      "src": "/Telematray/buisnessHand.png",
      "alt": "Person holding a mobile phone"
    },
  }
]
export const HeroData={
  "heading":"Scooter sharing made simple",
   "paragraph":"Scoot takes the hassle out of urban mobility. Our bikes areplaced in convenient locations in each of our cities. Use app to locate the nearest bike, unlock it with a tap, andyou’re away!",
   "buttonText":"Get Scootin",
  "image":{
    "src":"/hero/hero.png",
    "alt":"hero image"
  }
}
export const Mobility = [
  {
    "title": "Mobility for the digital era",
    "description": "Getting around should be simple (and even fun!) for everyone.We embrace technology to provide low cost,smart access to scooters at your fingertips.",
    "buttonText": "Learn More",
    "image": {
      "src": "/About/about.png",
      "alt": "Person holding a mobile phone"
    },
  }
]

export const Urbandata = [
  {
    "title": "Better urban living",
    "description": "We,re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.",
    "buttonText": "Learn More",
    "image": {
      "src": "/About/image (2).png",
      "alt": "Person holding a mobile phone"
    },
  }
]