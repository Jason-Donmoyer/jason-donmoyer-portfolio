import Hero from '@/components/home/Hero'
import FeaturedProjects from '@/components/home/FeaturedProjects';
import ServicesPreview from '@/components/home/ServicesPreview';
import SkillsGrid from '@/components/home/SkillsGrid';
import AboutPreview from '@/components/home/AboutPreview'

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <FeaturedProjects></FeaturedProjects>
      <ServicesPreview></ServicesPreview>
      <SkillsGrid></SkillsGrid>
      <AboutPreview></AboutPreview>
    </main>
  );
}
