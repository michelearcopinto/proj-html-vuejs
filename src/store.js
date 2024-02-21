import { reactive } from "vue";

export const store = reactive({
  coursesGridArray: [
    {
      imgPath: "./assets/img/cat_1-1540x750.jpg",
      nameCategory: "Software Development",
      courses: [
        {
          imgPath: "./assets/img/c_1-software-development.png",
          nameCourse: "Web Coding and Apache Basics theory",
          average_vote: 5,
        },
        {
          imgPath: "./assets/img/c_2-software-development.jpeg",
          nameCourse: "Engine Creating on Unity from PRO",
          average_vote: 0,
        },
        {
          imgPath: "./assets/img/c_3-software-development.jpeg",
          nameCourse: "Console Development Basics with Unity",
          average_vote: 4,
        },
      ],
    },
    {
      imgPath: "./assets/img/cat_2-544x322.jpg",
      nameCategory: "Art",
      courses: [
        {
          imgPath: "./assets/img/c_1-art.jpg",
          nameCourse: "Interior design concepts Masterclass",
          average_vote: 4,
        },
        {
          imgPath: "./assets/img/c_2-art.png",
          nameCourse: "Let`s paint Van Gogh`s Starry Night",
          average_vote: 0,
        },
      ],
    },
    {
      imgPath: "./assets/img/cat_3-740x310.jpg",
      nameCategory: "Material Design",
      courses: [
        {
          imgPath: "./assets/img/c_1-material-design.png",
          nameCourse: "Basics of MasterStudy",
          average_vote: 5,
        },
        {
          imgPath: "./assets/img/c_2-material-design.png",
          nameCourse: "Vector Design Basics Masterclass",
          average_vote: 5,
        },
        {
          imgPath: "./assets/img/c_3-material-design.png",
          nameCourse: "How to Design Components Right",
          average_vote: 3,
        },
        {
          imgPath: "./assets/img/c_4-material-design.png",
          nameCourse: "Minimalism, How to make things simpler",
          average_vote: 0,
        },
        {
          imgPath: "./assets/img/c_5-material-design.png",
          nameCourse: "Choosing Filament Color for Concept",
          average_vote: 4,
        },
      ],
    },
    {
      imgPath: "./assets/img/cat_4-740x310.jpg",
      nameCategory: "Exercise",
      courses: [
        {
          imgPath: "./assets/img/c_1-exercise.jpeg",
          nameCourse: "Road Bike Manual or How to Be a Champion",
          average_vote: 4,
        },
        {
          imgPath: "./assets/img/c_2-exercise.png",
          nameCourse: "Weight Training Courses with Any Di",
          average_vote: 0,
        },
        {
          imgPath: "./assets/img/c_3-exercise.png",
          nameCourse: "Swimming Sport Tricks for Beginner",
          average_vote: 2,
        },
        {
          imgPath: "./assets/img/c_4-exercise.png",
          nameCourse: "Skiing basic Instruction and Videos",
          average_vote: 4,
        },
        {
          imgPath: "./assets/img/c_5-exercise.png",
          nameCourse: "Run Forest, Run! How to create Running Route",
          average_vote: 0,
        },
        {
          imgPath: "./assets/img/c_6-exercise.png",
          nameCourse: "Success Bodybuilding with Protein Nutrition",
          average_vote: 0,
        },
        {
          imgPath: "./assets/img/c_7-exercise.jpg",
          nameCourse: "Fitness Blender 15 Minute Fast Workout",
          average_vote: 0,
        },
      ],
    },
    {
      imgPath: "./assets/img/cat_5-740x310.jpg",
      nameCategory: "Music",
      courses: [
        {
          imgPath: "./assets/img/c_1-material-design.png",
          nameCourse: "How to be a DJ? Make Electronic Music",
          average_vote: 5,
        },
        {
          imgPath: "./assets/img/c_2-material-design.png",
          nameCourse: "Learning Jazz like in San Francisco",
          average_vote: 5,
        },
        {
          imgPath: "./assets/img/c_3-material-design.png",
          nameCourse: "Music Theory basics for beginners",
          average_vote: 4,
        },
      ],
    },
    {
      imgPath: "./assets/img/cat_6-740x310.jpg",
      nameCategory: "Photography",
      courses: [
        {
          imgPath: "./assets/img/c_1-photography.png",
          nameCourse: "How to get comfortable on camera",
          average_vote: 3,
        },
        {
          imgPath: "./assets/img/c_2-photography.jpg",
          nameCourse: "Fashion Photography from professional",
          average_vote: 4,
        },
        {
          imgPath: "./assets/img/c_3-photography.jpg",
          nameCourse: "How to Make Beautiful Landscape photos?",
          average_vote: 3,
        },
        {
          imgPath: "./assets/img/c_4-photography.png",
          nameCourse: "Correct and Beautiful Design Interaction",
          average_vote: 0,
        },
      ],
    },
  ],
});
