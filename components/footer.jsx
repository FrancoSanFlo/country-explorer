export default function Footer() {
  return (
    <footer className="bg-indigo-500 text-white py-2 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Country Explorer</h3>
          <p className="text-sm">Explore countries around the world</p>
        </div>
        <div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Country Explorer
          </p>
        </div>
      </div>
    </footer>
  );
}
