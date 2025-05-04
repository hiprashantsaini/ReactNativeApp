// data/courses-data.js
export const categories = [
    'All',
    'SSC',
    'NTPC',
    'UPSC',
    'UP Police',
    'Banking',
    'Teaching',
    'Defence'
  ];
  
  export const courses = [
    {
      id: '1',
      title: 'Complete SSC CGL Course',
      description: 'Comprehensive preparation course for SSC Combined Graduate Level examination covering all subjects and topics.',
      price: 2499,
      originalPrice: 4999,
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRflw4VITKkwAVwiwmZwGnKhdv70DtxIU-qtA&s',
      instructor: 'Dr. Rajesh Kumar',
      rating: 4.8,
      studentsEnrolled: 15420,
      totalLectures: 245,
      totalHours: 160,
      lastUpdated: '2023-12-10',
      language: 'Hindi & English',
      category: 'SSC',
      features: ['Lifetime Access', 'Mobile App Access', 'Certificate', 'Doubt Clearing Sessions'],
      demoVideos: [
        {
          id: 'v1',
          title: 'Introduction to SSC CGL',
          duration: '12:45',
          thumbnail: 'https://via.placeholder.com/300x200?text=SSC+Intro',
          videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        },
        {
          id: 'v2',
          title: 'Quantitative Aptitude Tricks',
          duration: '18:30',
          thumbnail: 'https://via.placeholder.com/300x200?text=Quant+Tricks',
          videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        }
      ]
    },
    {
      id: '2',
      title: 'UPSC CSE Foundation Course',
      description: 'Start your UPSC Civil Services journey with our structured foundation course covering NCERT basics and prelims strategy.',
      price: 8999,
      originalPrice: 12999,
      thumbnail: 'https://images.studyiq.com/https://www.studyiq.net/Course/462/3edf7fbd-570a-4b8d-a4dc-ce1454ecfc7d_1691046802.jpg',
      instructor: 'Priya Sharma, IAS',
      rating: 4.9,
      studentsEnrolled: 8750,
      totalLectures: 320,
      totalHours: 280,
      lastUpdated: '2024-01-15',
      language: 'English',
      category: 'UPSC',
      features: ['Lifetime Access', 'Study Material PDFs', 'Test Series', 'Personal Mentorship'],
      demoVideos: [
        {
          id: 'v3',
          title: 'UPSC Preparation Strategy',
          duration: '25:10',
          thumbnail: 'https://via.placeholder.com/300x200?text=UPSC+Strategy',
          videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        },
        {
          id: 'v4',
          title: 'Indian Polity Overview',
          duration: '32:15',
          thumbnail: 'https://via.placeholder.com/300x200?text=Indian+Polity',
          videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'
        }
      ]
    },
    {
      id: '3',
      title: 'NTPC Complete Batch',
      description: 'One-stop solution for RRB NTPC preparation with specialized focus on mathematics, reasoning and general awareness.',
      price: 1999,
      originalPrice: 3499,
      thumbnail: 'https://www.ekuhipath.com/uploads/sub_course/9d125cc7-0c31-4bc1-9896-71019e1a163d.jpg',
      instructor: 'Vikram Singh',
      rating: 4.7,
      studentsEnrolled: 22340,
      totalLectures: 185,
      totalHours: 140,
      lastUpdated: '2023-11-20',
      language: 'Hindi',
      category: 'NTPC',
      features: ['Recorded Lectures', 'Live Classes', 'Mock Tests', 'Study Material'],
      demoVideos: [
        {
          id: 'v5',
          title: 'Railway Exam Pattern Analysis',
          duration: '15:30',
          thumbnail: 'https://via.placeholder.com/300x200?text=NTPC+Pattern',
          videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
        },
        {
          id: 'v6',
          title: 'Quick Mathematics Tips',
          duration: '20:45',
          thumbnail: 'https://via.placeholder.com/300x200?text=Math+Tips',
          videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        }
      ]
    },
    {
      id: '4',
      title: 'UP Police Constable Crash Course',
      description: 'Intensive preparation program for UP Police Constable recruitment exam with daily practice sessions.',
      price: 1499,
      originalPrice: 2499,
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHyYXx26JgsZSij7mUs2rttDOcrPpVHzeD5A&s',
      instructor: 'Amit Chaudhary',
      rating: 4.6,
      studentsEnrolled: 35620,
      totalLectures: 120,
      totalHours: 90,
      lastUpdated: '2024-02-05',
      language: 'Hindi',
      category: 'UP Police',
      features: ['Daily Practice Sets', 'Previous Year Papers', 'Physical Test Tips', 'PDF Notes'],
      demoVideos: [
        {
          id: 'v7',
          title: 'UP Police Exam Strategy',
          duration: '14:20',
          thumbnail: 'https://via.placeholder.com/300x200?text=Police+Strategy',
          videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        },
        {
          id: 'v8',
          title: 'General Knowledge for UP Police',
          duration: '22:35',
          thumbnail: 'https://via.placeholder.com/300x200?text=Police+GK',
          videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        }
      ]
    },
    {
      id: '5',
      title: 'SBI PO Complete Course',
      description: 'Structured program covering all aspects of SBI PO examination including prelims, mains and interview preparation.',
      price: 3499,
      originalPrice: 5999,
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT42KL-080UEwFOXJmgxi3yEb6Vn8wn7NUHYg&s',
      instructor: 'Ananya Mishra',
      rating: 4.8,
      studentsEnrolled: 18750,
      totalLectures: 210,
      totalHours: 180,
      lastUpdated: '2023-12-28',
      language: 'Hindi & English',
      category: 'Banking',
      features: ['Live Classes', 'Mock Interview Sessions', 'Banking Awareness Series', 'Current Affairs Daily'],
      demoVideos: [
        {
          id: 'v9',
          title: 'Banking Exam Overview',
          duration: '16:50',
          thumbnail: 'https://via.placeholder.com/300x200?text=Banking+Overview',
          videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        },
        {
          id: 'v10',
          title: 'Data Interpretation Tips',
          duration: '19:15',
          thumbnail: 'https://via.placeholder.com/300x200?text=DI+Tips',
          videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'
        }
      ]
    },
    {
      id: '6',
      title: 'CTET Paper I Complete Course',
      description: 'Comprehensive preparation for Central Teacher Eligibility Test (CTET) Paper I for classes 1 to 5.',
      price: 2299,
      originalPrice: 3999,
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ITkQSE1XTR-dbdespI_HWr6ADwEzpP5mQw&s',
      instructor: 'Dr. Sunita Verma',
      rating: 4.9,
      studentsEnrolled: 12450,
      totalLectures: 180,
      totalHours: 150,
      lastUpdated: '2024-01-30',
      language: 'Hindi',
      category: 'Teaching',
      features: ['Child Development Modules', 'Pedagogy Concepts', 'Language Proficiency', 'Mock Tests'],
      demoVideos: [
        {
          id: 'v11',
          title: 'Child Development & Pedagogy',
          duration: '28:10',
          thumbnail: 'https://via.placeholder.com/300x200?text=Child+Development',
          videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
        },
        {
          id: 'v12',
          title: 'Mathematics Teaching Methods',
          duration: '22:45',
          thumbnail: 'https://via.placeholder.com/300x200?text=Math+Teaching',
          videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        }
      ]
    },
    {
      id: '7',
      title: 'CDS Exam Preparation',
      description: 'Strategic preparation course for Combined Defence Services examination covering all subjects and physical training guidance.',
      price: 2999,
      originalPrice: 4499,
      thumbnail: 'https://reliableacademy.com/assets/images/space-image/courses/thumbnails/NDA-CDS-CrashCourse04348dfe23b04982cdca5b3751ca90a3d80be1daf255aa020ff125f7d5a3eebf.webp',
      instructor: 'Major (Retd.) Deepak Sinha',
      rating: 4.7,
      studentsEnrolled: 9870,
      totalLectures: 160,
      totalHours: 130,
      lastUpdated: '2023-11-15',
      language: 'English',
      category: 'Defence',
      features: ['Military Aptitude Training', 'English Proficiency', 'SSB Interview Guidance', 'Physical Fitness Tips'],
      demoVideos: [
        {
          id: 'v13',
          title: 'CDS Exam Pattern Analysis',
          duration: '17:30',
          thumbnail: 'https://via.placeholder.com/300x200?text=CDS+Pattern',
          videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        },
        {
          id: 'v14',
          title: 'Current Affairs for Defence Exams',
          duration: '24:15',
          thumbnail: 'https://via.placeholder.com/300x200?text=Defence+Affairs',
          videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        }
      ]
    },
    {
      id: '8',
      title: 'SSC CHSL Fast Track Course',
      description: 'Accelerated preparation for SSC CHSL with focused approach on high-yielding topics and quick revision strategies.',
      price: 1799,
      originalPrice: 2999,
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjNVCJhT5QsfAmLrujbZTpmKvPGTwOFDhzhA&s',
      instructor: 'Rakesh Yadav',
      rating: 4.6,
      studentsEnrolled: 28450,
      totalLectures: 140,
      totalHours: 100,
      lastUpdated: '2024-02-18',
      language: 'Hindi',
      category: 'SSC',
      features: ['Topic-wise Tests', 'Shortcut Techniques', 'Tier I & II Coverage', 'Daily Practice Sets'],
      demoVideos: [
        {
          id: 'v15',
          title: 'SSC CHSL Exam Strategy',
          duration: '16:40',
          thumbnail: 'https://via.placeholder.com/300x200?text=CHSL+Strategy',
          videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'
        },
        {
          id: 'v16',
          title: 'English Grammar Quick Tips',
          duration: '19:55',
          thumbnail: 'https://via.placeholder.com/300x200?text=English+Tips',
          videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        }
      ]
    }
  ];