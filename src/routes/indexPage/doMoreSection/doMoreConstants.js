// svg imports
import SearchIcon from '@svg/search';
import BookIcon from '@svg/book';
import CalendarIcon from '@svg/calendar';
import DirectionIcon from '@svg/direction';
import VideoIcon from '@svg/video';

// images imports
import mockUpImg from '@assets/images/mockup_img.png';
import mockUpImg1_1 from '@assets/images/mockup_img1_1.png';
import mockUpImg1 from '@assets/images/mockup_img1.png';
import mockUpImg2 from '@assets/images/mockup_img2.png';
import mockUpImg3 from '@assets/images/mockup_img3.png';

export const doMoreOptions = [
  {
    id: 'pills-home-tab',
    dataBsTarget: 'pills-home',
    ariaControls: 'pills-home',
    heading: 'Tutor Discovery',
    para: 'Find The Perfect Tutor For Your Needs And Interests.',
    icon: <SearchIcon />,
  },
  {
    id: 'pills-profile-tab',
    dataBsTarget: 'pills-profile',
    ariaControls: 'pills-profile',
    heading: 'Flexible Scheduling',
    para: 'Start Your Private Lesson Anytime, Anywhere.',
    icon: <CalendarIcon />,
  },
  {
    id: 'pills-contact-tab',
    dataBsTarget: 'pills-contact',
    ariaControls: 'pills-contact',
    heading: 'Specialized Curriculum',
    para: 'Focus On Your Specific Goals With Our Guided Courses.',
    icon: <BookIcon />,
  },
  {
    id: 'pills-contact-tab2',
    dataBsTarget: 'pills-contact2',
    ariaControls: 'pills-contact',
    heading: 'Interactive Classroom',
    para: 'Find The Perfect Tutor For Your Needs And Interests.',
    icon: <DirectionIcon />,
  },
  {
    id: 'pills-contact-tab3',
    dataBsTarget: 'pills-contact3',
    ariaControls: 'pills-contact',
    heading: 'Lesson Review',
    para: 'Solidify New Concepts And Vocabulary Words .',
    icon: <VideoIcon />,
  },
];

export const doMoreImagesOption = [
  {
    id: 'pills-home',
    arialabelledby: 'pills-home-tab',
    image: mockUpImg,
  },
  {
    id: 'pills-profile',
    arialabelledby: 'pills-profile-tab',
    image: mockUpImg1_1,
  },
  {
    id: 'pills-contact',
    arialabelledby: 'pills-contact-tab',
    image: mockUpImg1,
  },
  {
    id: 'pills-contact2',
    arialabelledby: 'pills-contact-tab2',
    image: mockUpImg3,
  },
  {
    id: 'pills-contact3',
    arialabelledby: 'pills-contact-tab3',
    image: mockUpImg2,
  },
];
