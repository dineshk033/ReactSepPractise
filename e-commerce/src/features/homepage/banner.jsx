import { faker } from "@faker-js/faker";

const Banner = () => {
  return (
    <img
      src={faker.image.image(640, 480)}
      alt="banner"
      width="100%"
      height="400"
    />
  );
};

export default Banner;
