import Hero from '../components/home/Hero'
import FeaturedProjects from '@/components/home/FeaturedProjects';
import ServicesPreview from '@/components/home/ServicesPreview';
import SkillsGrid from '@/components/home/SkillsGrid';

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <FeaturedProjects></FeaturedProjects>
      <ServicesPreview></ServicesPreview>
      <SkillsGrid></SkillsGrid>
    </main>
  );
}
