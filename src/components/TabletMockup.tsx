const TabletMockup = () => {
  let width: number = 300;
  let custom: string = `md:max-w-[${width}px]`;
  return (
    <div
      className={
        `dark relative aspect-[0.54] mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] ` +
        custom
      }
    >
      <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden h-[426px] md:max-w-[300px] bg-white dark:bg-gray-800">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
          className="dark:hidden h-[426px] aspect-[0.54]"
          alt=""
        />
        <img
          src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png"
          className="hidden dark:block h-[426px] aspect-[0.54]"
          alt=""
        />
      </div>
    </div>
  );
};

export default TabletMockup;
