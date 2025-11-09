export default defineEventHandler(async (event) => {
  const res = await $fetch.raw(
    "https://tony99sgd.com/inc/securitycode.php?width=100&height=30&characters=4",
    {
      headers: {
        Cookie: "PHPSESSID=473586ccfa0fffc52f124032ecfa2b5d",
        // other headers you need
      },
      responseType: "arrayBuffer", // keep binary data intact
    }
  );

  setHeader(
    event,
    "Content-Type",
    res.headers.get("content-type") || "image/png"
  );
  return Buffer.from(res._data as any); // send image data back to browser
});
