import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows?.txtfile?.data;

  if (!data) return null;

  const { name, image, imageUrl, subtitle, description } = data || {};
  const imgSrc = image || imageUrl;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name || "Text File"}</h2>
      </div>

      <div className="bg-white p-5 max-w-[70vw] min-w-[40vw]">
        {imgSrc ? (
          <img src={imgSrc} alt={name || "image"} className="w-28 h-28 object-cover rounded mb-4" />
        ) : null}

        {subtitle ? <h3 className="text-lg font-semibold mb-3">{subtitle}</h3> : null}

        {Array.isArray(description) && description.length > 0 ? (
          <div className="space-y-3 text-sm leading-6 text-black/80">
            {description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
