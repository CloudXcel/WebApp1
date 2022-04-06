/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon4 from 'assets/images/icons/service4.png';
import icon5 from 'assets/images/icons/service5.png';
import icon6 from 'assets/images/icons/service6.png';
import icon7 from 'assets/images/icons/service7.png';
import icon8 from 'assets/images/icons/service8.png';
import icon9 from 'assets/images/icons/service9.png';

const data = [
  {
    id: 1,
    icon: icon4,
    moreLink: '#learn-more',
    title: 'Data Engineering',
    description: `ThirdEye’s Data Engineering Services transform organizational knowledge into insights for more informed and timely business decisions with the best possible TCO.`,
  },
  {
    id: 2,
    icon: icon5,
    moreLink: '#learn-more',
    title: 'Blockchain',
    description: `By the time you hear how Blockchain changed the world it will be too late. Capitalize on Blockchain today with the leaders in ledger technologies.`,
  },
  {
    id: 3,
    icon: icon6,
    moreLink: '#learn-more',
    title: 'Data Analytics',
    description: `ThirdEye’s Data Analytics services help businesses increase revenues, improve operational efficiencies, respond quickly to emerging market trends and gain a competitive edge.`,
  },
  {
    id: 4,
    icon: icon7,
    moreLink: '#learn-more',
    title: 'Artificial Intelligence',
    description: `Simply put, cloud computing is the delivery of computing services.`,
  },
  {
    id: 5,
    icon: icon8,
    moreLink: '#learn-more',
    title: 'Digital Tools',
    description: `Map out a cohesive digital strategy that enables your enterprise to achieve operational excellence.`,
  },
  {
    id: 6,
    icon: icon9,
    moreLink: '#learn-more',
    title: 'Cloud Services',
    description: `Power your journey to higher agility, faster innovation and lower IT costs.`,
  },
];

const OtherServices = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Go beyond ultimate Services"
          description="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred."
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
export default OtherServices;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [9, 9, 9, 11],
    pb: [9, 9, 9, 12, 12, 14],
  },
  heading: {
    mb: [6, null, null, 8, 9, null, 13],
    p: {
      maxWidth: 500,
      margin: '10px auto 0',
    },
  },
  contentWrapper: {
    gap: ['30px 30px', '30px 30px', '30px 30px', '80px 30px'],
    display: 'grid',
    justifyContent: ['center', 'center', 'center', 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
