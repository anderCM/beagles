/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Calidad A-1',
    title: 'Calidad A-1',
    text:
      'Nuestros cachorros de raza pura, listos para recibir y darte amor.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Cuidado especializado',
    title: 'Cuidado especializado',
    text:
      'Nos encargamos de darles el mejor cuidado para que nazcan y crezcan felices.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Alimentos premium',
    title: 'Alimentos premium',
    text:
      'Ya que los queremos tanto como tú, solo les damos alimento premium para fortaleces su desarrollo.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Asesoramiento',
    title: 'Asesoramiento',
    text:
      'Si tienes alguna duda sobre ellos no dudes en consultarnos.',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{variant:"section.KeyFeature", mt:"150px"}} id="feature">
      <Container>
        <SectionHeader
          slogan="Cómo lo hacemos"
          title="Conócenos un poco más"
        />
        <Grid sx={styles.grid}>
          {data.map((item)=>(
            <FeatureCardColumn 
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
