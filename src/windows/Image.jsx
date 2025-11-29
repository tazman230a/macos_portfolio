import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows?.imgfile?.data;

  if (!data) return null;

  const { name, image, imageUrl } = data || {};
  const imgSrc = image || imageUrl;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name || "Image"}</h2>
      </div>

      <div className="bg-white p-5 max-w-[70vw] min-w-[40vw]">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={name || "image"}
            className="max-w-full max-h-[70vh] object-contain rounded"
          />
        ) : null}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
