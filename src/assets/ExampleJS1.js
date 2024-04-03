if ("undefined" === typeof window) {
  importScripts(
    decodeURIComponent(
      location.search.substring(location.search.indexOf("ref=") + 4)
    )
  );
}

console.log("this is service worker content");
