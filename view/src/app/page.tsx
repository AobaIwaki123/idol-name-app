import RoundButton from '@/components/roundButton';
import SearchBar from '@/components/searchBar';
import ButtonGrid from '@/components/buttonGrid';

export default function Home() {
  const buttonLabels = ["Button 1", "Button 2", "Button 3", "Button 4", "Button 5"];
  return (
    <div className="flex justify-center items-center h-screen">
      <ButtonGrid buttons={buttonLabels} />
    </div>
  );
}
