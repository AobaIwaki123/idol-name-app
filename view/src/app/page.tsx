import ButtonGrid from '@/components/buttonGrid';
import BannerBase from '@/components/bannerBase';

export default function Home() {
  const buttonLabels = ["日向坂", "きゅるして", "iLiFE!", "ぴるあぽ", "きゃんちゅー"];
  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <BannerBase/>
      <ButtonGrid buttons={buttonLabels} />
    </div>
  );
}
