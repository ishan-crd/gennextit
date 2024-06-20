const Footer = () => {
  return (
    <footer className="flex flex-col pt-9 pr-20 pb-3 pl-7 bg-black max-md:px-5 font-poppins">
      <div className="flex gap-5 justify-between items-start self-center w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col text-white">
          <div className="text-2xl font-medium">GennextIT</div>
          <div className="mt-7 text-xs leading-5">
            High level experience in web design and development knowledge,
            producing quality work.
          </div>
          <div className="shrink-0 mt-3 h-px bg-white border border-white border-solid" />
          <div className="mt-6 text-xs font-light text-white">
            © 2024 All Rights Reserved
          </div>
        </div>
        <div className="flex flex-col mt-1.5">
          <div className="text-sm font-bold text-white">Follow us</div>
          <div className="flex gap-3.5 mt-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/da296835485621be2ff94435cd5fdc8534639407ff5a61eb40462157454f25ae?"
              className="shrink-0 aspect-square w-[21px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6bcc7636399b8357cc1730f29fe23cf4acd02119207a973c65a524c5661f528?"
              className="shrink-0 aspect-[1.05] w-[22px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/47e6f683bf2e418515d4f32bcc9d266dc9a0b84cffae6197b5c45d0750463ea7?"
              className="shrink-0 aspect-square w-[21px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/12dd0e78fb1f1e411f56fe45d75ccace23bf61c5c8edff1a79fff077bd41f515?"
              className="shrink-0 aspect-[1.05] w-[22px]"
            />
          </div>
          <div className="mt-8 text-sm font-bold text-white">Call us</div>
          <div className="mt-4 text-sm text-white">+91 1234567891</div>
        </div>
        <div className="flex flex-col mt-2 text-xs text-white">
          <div className="text-base font-bold">Product</div>
          <div className="mt-9">Landing Page</div>
          <div className="mt-4">Popup Builder</div>
          <div className="mt-4">Web-design</div>
          <div className="mt-4">Content</div>
          <div className="mt-5">Integrations</div>
        </div>
        <div className="flex flex-col mt-1.5 text-xs text-white">
          <div className="text-base font-bold">Use Cases</div>
          <div className="mt-9">Web-designers</div>
          <div className="mt-4">Marketers</div>
          <div className="mt-5 max-md:mr-1.5">Small Business</div>
          <div className="mt-5">Website Builder</div>
        </div>
        <div className="flex flex-col self-stretch my-auto text-xs text-white">
          <div className="text-base font-bold">Company</div>
          <div className="mt-8">About Us</div>
          <div className="mt-5">Careers</div>
          <div className="mt-5">FAQs</div>
          <div className="mt-5">Teams</div>
          <div className="mt-5 max-md:mr-1.5">Contact Us</div>
        </div>
      </div>
      <div className="flex gap-5 justify-between self-start mt-5 text-xs text-white max-md:flex-wrap">
        <div>Privacy Policy</div>
        <div>Terms of Use</div>
        <div>Sales and Refunds</div>
        <div>Legal</div>
        <div>Site Map</div>
      </div>
    </footer>
  );
};
export default Footer;
