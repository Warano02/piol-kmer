import Link from "next/link";

const Footer = () => {
  const groupsItems = [
    {
      title: "Support",
      items: [
        {
          label: 'Help Center',
          link: "/"
        },
        {
          label: 'AirCover',
          link: "/"
        },
        {
          label: 'Safety information',
          link: "/"
        },
        {
          label: 'Cancellation options',
          link: "/"
        },
        {
          label: 'Report a neighborhood concern',
          link: "/"
        },
      ]
    },
    {
      title: "Community",
      items: [
        {
          label: ' Airbnb.org: disaster relief housing',
          link: "/"
        },
        {
          label: 'Support Afghan refugees',
          link: "/"
        },
        {
          label: 'Combating discrimination',
          link: "/"
        },
      ]
    },
    {
      title: "Hosting",
      items: [
        {
          label: 'Try hosting',
          link: "/"
        },
        {
          label: 'AirCover for Hosts',
          link: "/"
        },
        {
          label: 'Explore hosting resources',
          link: "/"
        },
        {
          label: 'Visit our community forum',
          link: "/"
        },
        {
          label: 'How to host responsibly',
          link: "/"
        },
      ]
    },
    {
      title: "Support",
      items: [
        {
          label: 'Newsroom',
          link: "/"
        },
        {
          label: 'Learn about new features',
          link: "/"
        },
        {
          label: 'Letter from our founders',
          link: "/"
        },
        {
          label: 'Careers',
          link: "/"
        },
        {
          label: 'Investors',
          link: "/"
        },
        {
          label: 'Gift cards',
          link: "/"
        },
      ]
    }
  ]
  return (
    <footer className="bg-[#F7F7F7] border-t border-borderColor px-4">
      <div className="max-w-[1200px] mx-auto py-10">
        <div className="flex flex-wrap gap-4">
          {groupsItems.map((el, i) => (

            <div key={i} className="my-6 lg:m-0 w-full md:w-[calc(100%/2-20px)] lg:w-[calc(100%/3-20px)] xl:w-[calc(100%/4-20px)]">
              <h1 className="text-md font-semibold mb-4">{el.title} </h1>
              <ul>
                {el.items.map((e, i) => (
                  <li key={i} className="my-2 hover:underline cursor-pointer text-lightTextColor text-sm block py-1 md:p-0">
                    <Link href={e.link}>{e.label} </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[75px] mt-2 border-t-[0.3px] border-[#cac7c779] flex justify-between items-center">

      </div>
    </footer>
  );
};

export default Footer;
