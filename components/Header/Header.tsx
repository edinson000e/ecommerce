import TopBar from "./TopBar/TopBar";

export default function Header(props) {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <TopBar />
      </div>
    </header>
  );
}
