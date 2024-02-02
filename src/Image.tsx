interface Props {
  viewportWidth: number;
  viewportHeight: number;
  width: number;
  height: number;
  src: string;
  alt: string;
}

function Image(props: Props) {
  const { src, alt } = props;

  // TODO: make the image fit the screen as in https://sot-2024-tech-test-example.pages.dev/
  // Important: you MUST NOT use object-fit: cover or objectFit: 'cover'

  // write your code here...

  return (
    <img
      style={{
        // write your code here...
      }}
      src={src}
      alt={alt}
    />
  );
}

export default Image;