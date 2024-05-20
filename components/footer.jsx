export default function Footer() {
  return (
    <footer className="bg-indigo-800 text-white py-2 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Country Explorer</h3>
          <p className="text-sm">Explore countries around the world</p>
        </div>
        <div>
          <p className="text-sm text-right">
            &copy; {new Date().getFullYear()} Country Explorer
          </p>
          <p className="text-sm text-right font-bold">
            by <a href="https://github.com/FrancoSanFlo">Franco Sánchez</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
