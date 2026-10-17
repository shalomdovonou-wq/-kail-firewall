export default {
  async fetch(request) {
    const url = new URL(request.url);
    const userAgent = request.headers.get("User-Agent") || "";

    // TON PARE-FEU : bloque les bots
    if (userAgent.toLowerCase().includes("bot")) {
      return new Response("Bloqué par le Pare-feu KAIL", { status: 403 });
    }

    // Redirige vers ta NOUVELLE boutique
    const originUrl = "https://teal-medovik-81ec65.netlify.app";
    const newUrl = originUrl + url.pathname + url.search;
    return fetch(newUrl, request);
  }
}
