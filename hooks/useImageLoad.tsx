import { useState, useEffect } from "react";

function useImageLoad(refs: any) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let images = refs.map((ref: any) => ref.current);
    if (images.every((img: any) => img.complete)) {
      setLoaded(true);
      return;
    }

    let loadCount = 0;
    function onLoad() {
      loadCount++;
      if (loadCount === images.length) {
        setLoaded(true);
      }
    }

    images.forEach((img: any) => {
      if (img.complete) {
        onLoad();
      } else {
        img.addEventListener("load", onLoad);
      }
    });

    return () => {
      images.forEach((img: any) => img.removeEventListener("load", onLoad));
    };
  }, [refs]);
  return loaded;
}
export default useImageLoad;
