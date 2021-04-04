function culqi() {
    if (Culqi && window.CustomEvent) {
        var event = new CustomEvent("culqiResponse", {
            detail: {
                token: Culqi.token,
                error: Culqi.error
            },
            bubbles: true,
            cancelable: true
        });
        document.dispatchEvent(event);
    }
}
