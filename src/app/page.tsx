import Hero from '../components/home/Hero'
import FeaturedProjects from '@/components/home/FeaturedProjects';
import ServicesPreview from '@/components/home/ServicesPreview';

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <ServicesPreview></ServicesPreview>
      <FeaturedProjects></FeaturedProjects>
    </main>
  );
}
