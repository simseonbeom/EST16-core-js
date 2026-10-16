/* eslint-disable no-undef */





export function shake(t) {
  const tween = gsap.fromTo(
    t,
    { x: -10 },
    {
      x: 0,
      duration: 0.1,
      repeat: 5,
      yoyo: true,
    }
  );
  return tween;
}
