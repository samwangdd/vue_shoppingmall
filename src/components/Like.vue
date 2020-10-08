<template>
  <div class="heart-wrapper">
    <input id="toggle-heart" type="checkbox" />
    <label for="toggle-heart">❤</label>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
$bubble-d: 4.5rem;
$bubble-r: 0.5 * $bubble-d;
$particle-d: 0.375rem;
$particle-r: 0.5 * $particle-d;

[id='toggle-heart'] {
  position: absolute;
  left: -100vw;
}

[for='toggle-heart'] {
  color: #aab8c2;
  font-size: 2em;
  cursor: pointer;
  align-self: center;
  position: relative;
  &::before,
  &::after {
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    content: '';
  }
}

// 气泡
[for='toggle-heart']::before {
  margin: -$bubble-r;
  width: $bubble-d;
  height: $bubble-d;
  box-sizing: border-box;
  border: solid $bubble-r #e2264d;
  transform: scale(0);
}

@mixin bubble($ext) {
  border-color: #cc8ef5;
  border-width: $ext;
  transform: scale(1);
}

@keyframes bubble {
  15% {
    @include bubble($bubble-r);
  }
  30%,
  100% {
    @include bubble(0);
  }
}

$shadow-list: (); // init shadow list
$n-groups: 7; // number of groups
$group-base-angle: 360deg / $n-groups;
$group-distr-r: $bubble-r;
$n-particles: 2;
$particle-base-angle: 360deg / $n-particles;
$particle-off-angle: 60deg;

@for $i from 0 to $n-groups {
  $group-curr-angle: $i * $group-base-angle - 90deg;
  $xg: $group-distr-r * cos($group-curr-angle);
  $yg: $group-distr-r * sin($group-curr-angle);

  @for $j from 0 to $n-particles {
    $particle-curr-angle: $group-curr-angle + $particle-off-angle + $j * $particle-base-angle;
    $xs: $xg + $particle-d * cos($particle-curr-angle);
    $ys: $yg + $particle-d * sin($particle-curr-angle);

    $shadow-list: $shadow-list, $xs $ys;
  }
}

// 彩色颗粒
$particle-d: 0.375rem;
$particle-r: 0.5 * $particle-d;

[for='toggle-heart']:after {
  margin: -$particle-r;
  width: $particle-d;
  height: $particle-d;
}

@keyframes heart {
  0%,
  17.5% {
    font-size: 0;
  }
}

[id='toggle-heart']:checked + label {
  color: #e2264d;
  will-change: font-size;
  animation: heart 1s cubic-bezier(0.17, 0.89, 0.32, 1.49);
  &::after,
  &::before {
    animation: inherit;
    animation-timing-function: cubic-bezier(0.21, 0.61, 0.35, 1);
  }

  &::before {
    will-change: transform, border-color, border-width;
    animation-name: bubble;
  }

  &::after {
    animation-name: particles;
  }
}

.heart-wrapper {
  display: flex;
  justify-content: center;
  margin: 0;
  height: 100%;
}
</style>