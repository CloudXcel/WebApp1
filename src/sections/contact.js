/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container,Label, Input, Textarea, Button } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/icons/service1.png';
import icon2 from 'assets/images/icons/service2.png';
import icon3 from 'assets/images/icons/service3.png';



const data = [
  {
    id: 1,
    icon: icon1,
    title: 'ADDRESS',
    description: `20-22 Wenlock way, London, N1 7GU.`,
  },
  {
    id: 3,
    icon: icon2,
    title: 'PHONE NUMBER',
    description: `+441344831606`,
  },
  {
    id: 4,
    icon: icon3,
    title: 'Business Email',
    description: `info@idatasolutions.co.uk`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="contact" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Contact Us"
          description=""
        />
        
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
        <Box  sx={{
            padding:10,
            
        }} as="form" onSubmit={(e) => e.preventDefault()}>
        
        <Label htmlFor="username">Name</Label>
        <Input name="username" id="username" mb={3} />
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" id="email" mb={3} />
        <Label htmlFor="comment">Comment</Label>
        <Textarea name="comment" id="comment" rows={6} mb={3} />

        
        <Button>Submit</Button>
    </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
  
};
