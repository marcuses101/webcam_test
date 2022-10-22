<script lang="ts">
  import { onMount } from "svelte";

  let video: HTMLVideoElement;
  let canvas: HTMLCanvasElement;
  $: context = canvas?.getContext("2d");
  let stream = null;
  let devices: { value: string; label: string }[] = [];
  let deviceId: string;
  $: updateMediaSource(deviceId);

  async function updateMediaSource(currentDeviceId) {
    try {
      if (!currentDeviceId) return;
      stream = await navigator.mediaDevices.getUserMedia({
        video: {
          deviceId: currentDeviceId,
          width: { ideal: 1080 },
        },
        audio: false,
      });
      video.srcObject = stream;
      video.play();
    } catch (err) {
      console.log(err);
    }
  }
  async function getMedia() {
    try {
      const inputDeviceInfos: MediaDeviceInfo[] =
        await navigator.mediaDevices.enumerateDevices();
      devices = inputDeviceInfos
        .filter(({ kind }) => kind === "videoinput")
        .map(({ deviceId: value, label }) => ({ value, label }));
      deviceId = devices[0].value;
    } catch (err) {
      console.log(err);
    }
  }
  onMount(() => {
    getMedia();
  });

  function snap() {
    const { videoHeight, videoWidth } = video;
    canvas.width = videoWidth;
    canvas.height = videoHeight;
    context.drawImage(video, 0, 0, videoWidth, videoHeight);
    const data = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = data;

    link.setAttribute("download", `webcam-test ${new Date().toDateString()}`);
    link.click();
    link.remove();
  }
</script>

<main>
  <h1>Webcam test</h1>
  <select bind:value={deviceId} on:change={() => console.log(deviceId)}>
    {#each devices as { label, value }}
      <option {value}>{label}</option>
    {/each}
  </select>
  <div class="stack">
    {#if !stream}
      <h3>Loading</h3>
    {/if}
    <video bind:this={video}>
      <track kind="captions" />
    </video>

    <button on:click={snap}>snap</button>
  </div>

  <canvas bind:this={canvas} />
</main>

<style>
  canvas {
    display: none;
  }
  .stack {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
  video {
    max-width: 100%;
  }
  button {
    max-width: 300px;
    background-color: black;
    color: white;
  }
</style>
