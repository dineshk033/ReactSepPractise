import { faker } from "@faker-js/faker";

const Banner = () => {
  return (
    <img
      src={faker.image.image(1024, 480)}
      alt="banner"
      width="100%"
      height="400"
      className="mb-5"
    />
  );
};

export default Banner;
