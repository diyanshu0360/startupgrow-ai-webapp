import Footer from "@/components/landing_page/Footer";
import Navbar from "@/components/landing_page/Navbar";

const PrivacyPage = () => {
  const privacyPolicyContent = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula lobortis sapien, non scelerisque nunc fringilla eget. Integer id justo elit. Vivamus laoreet mauris in turpis venenatis, ac lobortis leo fermentum. Sed vulputate orci sit amet eros tempor, quis dignissim ligula fringilla. Nullam varius eros eu nibh tincidunt tincidunt. Cras sed lorem arcu. Sed sollicitudin, magna a dignissim convallis, dolor nisi finibus metus, sed pellentesque velit nisi et enim. Duis sed venenatis felis, id bibendum nisi. Nam a ex eget erat sollicitudin efficitur nec nec lacus. Pellentesque sed justo quis ex placerat feugiat id a eros. Aliquam vel ligula in nisl volutpat viverra.

  Phasellus tempor lectus eget est tincidunt tristique. Maecenas luctus lectus eget nisi euismod suscipit. Sed eget tincidunt risus. Donec sollicitudin erat nec mauris vehicula, vitae interdum quam elementum. Morbi vitae metus vitae elit vehicula egestas. Ut a sapien nec purus sodales tincidunt. Suspendisse sed eros in tortor fermentum molestie. In egestas, ipsum id varius fringilla, nisl velit venenatis mi, in condimentum nisl sem nec lorem. Curabitur at augue justo. Phasellus in nulla libero. Aliquam non arcu a risus consequat iaculis sed id libero. Sed et est nunc.

  Mauris sodales ipsum nec libero auctor, ac ultricies arcu mattis. Donec sed risus pretium, fringilla est ut, lobortis nisi. Sed at orci ipsum. Integer sit amet tempus leo. Suspendisse potenti. Vestibulum posuere ante non tortor tincidunt, vitae ullamcorper ante tempus. Duis et augue nec nunc malesuada vehicula. Quisque at velit eget purus elementum dapibus.

  Nullam blandit efficitur purus, a consectetur nulla commodo sit amet. Sed vestibulum vitae est vel tincidunt. Quisque vel diam in odio lobortis gravida vel a felis. Proin gravida risus vitae sapien lobortis malesuada. Nulla facilisi. Aliquam vestibulum ac dui nec fringilla. Phasellus tristique ex nec mi aliquet laoreet. Curabitur lobortis enim nec nibh lobortis, et hendrerit justo blandit. Aliquam lacinia scelerisque nibh, at ultrices libero tempor in. Proin eget enim interdum, commodo leo non, consequat sapien. Duis eget purus nec felis fringilla tempus. Mauris vestibulum purus vel lectus lobortis venenatis. Fusce condimentum quam sed odio ullamcorper, vel convallis justo lacinia.
`;

  // Example last update date
  const lastUpdateDate = "June 1, 2024";
  return (
    <main className="bg-white">
      <Navbar />
      <main>
        <div className="container mx-auto px-4 pt-24 md:pt-32 pb-12">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-black">
              Privacy Policy
            </h1>
            <p className="text-md text-black font-medium mt-4">
              Last updated: {lastUpdateDate}
            </p>
            <div className="prose mt-4 max-w-4xl">
              <p className="text-black font-normal">{privacyPolicyContent}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </main>
  );
};

export default PrivacyPage;
