import ButtonGrid from '@/components/buttonGrid';
import BannerBase from '@/components/bannerBase';

export default function Home() {
  const buttonLabels = ["Button 1", "Button 2", "Button 3", "Button 4", "Button 5"];
  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <BannerBase/>
      <ButtonGrid buttons={buttonLabels} />
    </div>
  );
}
