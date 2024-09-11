import RoundButton from '@/components/roundButton';
import SearchBar from '@/components/searchBar';
export default function Home() {
  return (
    <main>
      <div className="h-full w-full bg-primarycolor">
        <RoundButton
          >Text</RoundButton>
          <SearchBar></SearchBar>
      </div>
    </main>
  );
}
