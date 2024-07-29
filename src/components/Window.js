function Window({window}) {
    switch (window) {
        default: {
            return (
                <img src='assets/img/display/web.png' title="Projet intégration maquette figma" alt="page index d'un site portfolio" />
            )
        }
        case 'mobile': {
            return (
                <img src='assets/img/display/mobile.png' title="Projet intégration maquette figma, version mobile" alt="page index d'un site portfolio en version mobile" />
            )
        }
    }
}

export default Window

