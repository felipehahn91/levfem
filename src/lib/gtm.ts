interface GTMEvent {
  event: string;
  [key: string]: any;
}

declare global {
  interface Window {
    dataLayer: GTMEvent[];
  }
}

export const sendGTMEvent = (data: GTMEvent) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(data);
  } else {
    console.warn('Google Tag Manager dataLayer not found.');
  }
};