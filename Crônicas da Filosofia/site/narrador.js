
const Narrador = {
    voz: null,
    ativo: true,

    prepararVoz() {
        if (!("speechSynthesis" in window)) {
            console.warn("Este navegador não oferece suporte à narração.");
            return;
        }

        const selecionarVoz = () => {
            const vozes = window.speechSynthesis.getVoices();

            this.voz =
                vozes.find(v => v.lang === "pt-BR" && /feminina|female/i.test(v.name)) ||
                vozes.find(v => v.lang === "pt-BR") ||
                vozes.find(v => v.lang.startsWith("pt")) ||
                null;
        };

        selecionarVoz();
        window.speechSynthesis.onvoiceschanged = selecionarVoz;
    },

    falar(texto) {
        if (!this.ativo || !("speechSynthesis" in window)) return;

        window.speechSynthesis.cancel();

        const fala = new SpeechSynthesisUtterance(texto);
        fala.lang = "pt-BR";
        fala.rate = 0.88;
        fala.pitch = 0.95;
        fala.volume = 1;

        if (this.voz) fala.voice = this.voz;

        window.speechSynthesis.speak(fala);
    },

    pausar() {
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.pause();
        }
    },

    continuar() {
        window.speechSynthesis.resume();
    },

    parar() {
        window.speechSynthesis.cancel();
    }
};

Narrador.prepararVoz();