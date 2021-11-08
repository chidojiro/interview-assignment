const JS_LIBRARIES = ["collapsible", "toggable", "untouched"];

const changeSVGPath = (use) => {
  const SVG_XLINK = "http://www.w3.org/1999/xlink";

  const newPath = use
    .getAttribute("xlink:href")
    .replace(
      "/themes/custom/bluex/dist/assets/image/icons.svg",
      "/src/styleguide/auto-generated-icons.svg",
    );

  use.setAttributeNS(SVG_XLINK, "xlink:href", newPath);
};

const loadScripts = () => {
  JS_LIBRARIES.forEach((lib) => {
    var script = document.createElement("script");
    script.src = `https://uk-static-dev.dta.randstadbluex.com/articles/static/assets/js/standalone/${lib}.js`;
    document.head.appendChild(script);
  });
};

export default function load() {
  let scriptLoaded = false;

  const observerConfig = {
    childList: true,
    subtree: true,
  };

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      for (var i = 0; i < mutation.addedNodes.length; i++) {
        if (!(mutation.addedNodes[i] instanceof HTMLElement)) {
          continue;
        }

        const use = mutation.addedNodes[i].querySelectorAll(
          "[data-testid='mountNode'] .icon > svg use",
        );

        if (use["0"] && use["0"].getAttribute("xlink:href").includes("themes")) {
          use.forEach((i) => changeSVGPath(i));
        }
      }
    });

    if (!scriptLoaded) {
      console.log("Mutation detected");
      loadScripts();
      scriptLoaded = true;
    }
  });

  if (!document.querySelector("main.rsg--content-3").length) {
    observer.observe(document.querySelector("main.rsg--content-3"), observerConfig);
  } else {
    console.error("Could not find main.rsg--content-3");
  }
}
