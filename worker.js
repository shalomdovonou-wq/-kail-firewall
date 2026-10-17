export default {
  async fetch(request) {
    const url = new URL(request.url);
    const userAgent = request.headers.get("User-Agent") || "";
    
    // TON PARE-FEU : bloque les bots
    if (userAgent.toLowerCase().includes("bot") && !userAgent.toLowerCase().includes("google")) {
      return new Response("Bloqué par le Pare-feu KAIL", { status: 403 });
    }

    // Redirige vers ta boutique
    const originUrl = "https://curious-kangaroo-de4955.netlify.app" + url.pathname + url.search;
    return fetch(originUrl, request);
  }
}
