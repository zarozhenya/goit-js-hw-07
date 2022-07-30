if (!"loading" in HTMLImageElement.prototype) {
  const scriptRef = document.querySelector('[src="js/lazyload.js"]');
  const newScript = document.createElement("script");
  newScript.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  console.log(newScript);
  scriptRef.after(newScript);
}
