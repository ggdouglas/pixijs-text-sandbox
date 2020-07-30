export default function getSize(ratio) {
  if (ratio === '16:9') {
    return [640, 360];
  }
  if (ratio === '9:16') {
    return [360, 640];
  }
  if (ratio === '1:1') {
    return [640, 640];
  }
}
