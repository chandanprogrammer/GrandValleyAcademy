const Navbar = () => {
  return (
    <div className="pl-[5rem] pr-[5rem] pt-[0.5rem] pb-[0.5rem] border-b-2 border-b-blue-600 flex flex-row items-center justify-between">
      <div className="w-10">
        <img src="/images/logo.jpg" alt="Logo" />
      </div>
      <div className="flex flex-row gap-8 items-center justify-between">
        <ul className="flex flex-row gap-8 fredoka-medium">
          <li>Home</li>
          <li>The school</li>
          <li>Academics</li>
          <li>Disclosures</li>
          <li>Gallery</li>
          <li>Admission</li>
          <li>News</li>
        </ul>
        <div className="bg-[#3E4095] px-6 py-2 text-amber-50 rounded-full flex items-center justify-center fredoka-medium">
          Apply now
        </div>
      </div>
    </div>
  );
};

export default Navbar;
