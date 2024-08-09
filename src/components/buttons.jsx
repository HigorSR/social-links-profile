export default function Links() {
  const links = [
    {
      id: 1,
      name: "GitHub",
      //link: "",
    },
    {
      id: 2,
      name: "Frontend Mentor",
      //link: "",
    },
    {
      id: 3,
      name: "LinkedIn",
      //link: "",
    },
    {
      id: 4,
      name: "Twitter",
      //link: "",
    },
    {
      id: 5,
      name: "Instagram",
      //link: "",
    },
  ];

  const listLinks = links.map((site) => (
    <div className="flex flex-col gap-3 w-full">
      <button
        key={site.id}
        className="w-full text-center bg-Grey-700 rounded-md py-3 font-semibold hover:bg-Green hover:text-Grey-800"
        href={site.link}
        target="_blank"
        
      >
        {site.name}
      </button>
    </div>
  ));

  return <>{listLinks}</>;
}
