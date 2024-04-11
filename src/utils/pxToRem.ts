export function setRem(): void {
  let deviceWidth: number;

  window.onload = () => {
    setHtmlFontSize();

    if (window.addEventListener) {
      window.addEventListener(
        "resize",
        function () {
          setHtmlFontSize();
        },
        false
      );
    }
  };

  function setHtmlFontSize(): void {
    deviceWidth =
      document.documentElement.clientWidth > 1920
        ? 1920
        : document.documentElement.clientWidth;
    document.getElementsByTagName("html")[0].style.cssText =
      "font-size:" + deviceWidth / 19.2 + "px !important";
  }
}
