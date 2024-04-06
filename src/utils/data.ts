export interface introTypes {
  image: string;
  title: string;
  optionalText: string;
}

interface interestTypes {
  image: string;
  title: string;
  optionalText: string;
};

interface maths {
  type:string,
  level:string,
  image:string
}

export const intro: introTypes[] = [
  {
    image: "/student.png",
    title: "Student",
    optionalText: "or soon to be enrolled",
  },
  {
    image: "/professional.png",
    title: "Professional",
    optionalText: "pursuing a carrer",
  },
  {
    image: "/parents.png",
    title: "Parent",
    optionalText: "of a school-age child",
  },
  {
    image: "/lifelong-learner.png",
    title: "Lifelong learner",
    optionalText: "",
  },
  { image: "/teacher.png", title: "Teacher", optionalText: "" },
  { image: "/question.png", title: "Other", optionalText: "" },
];

export const interests:interestTypes[] = [
    {
        image:"/higher-education.png",
        optionalText:"",
        title:"Learning specific skills to advance my carrer"
    },
    {
        image:"/explore.png",
        optionalText:"",
        title:"Exploring new topics I'm interested in"
    },
    {
        image:"/refresh.png",
        optionalText:"",
        title:"Refreshing my math foundations"
    },
    {
        image:"/target.png",
        optionalText:"",
        title:"Exercising my brain to stay sharp"
    },

    {
        image:"/eyes.png",
        optionalText:"",
        title:"Something else"
    }

];

export const mathLevel : maths[] = [
  {
    type:"Arithmetic",
    level:"Introductory",
    image:"/Arithmetic.png"
  },
  {
    type:"Basic Algebra",
    level:"Foundational",
    image:"/BasicAlgebra.png"
  },
  {
    type:"Intermediate Algebra",
    level:"Intermediate",
    image:"/IntermediateAlgebra.png",
  },
  {
    type:"Calculus",
    level:"Advance",
    image:"/Calculus.png"
  }
]