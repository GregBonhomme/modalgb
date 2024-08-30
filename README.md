# Description

Ce projet est un composant react générique qui affiche l'élément de votre choix sous la forme d'une modale. Il est entièrement customisable à l'aide de classes CSS prédéfinies.

# Exemples d'utilisation

Placez n'importe quel élément de votre choix entre les balises "Modal" et il sera affiché comme une modale. Ici par exemple nous affichons un message pour viens indiquer que l'envoi du formulaire a été effectué.

```
import Modal from "../../components/Modal/index.js"

<form>
    **contenu du formulaire**
</form>
<button onclick={setmodalOpen}>Envoyer</button>

<Modal>
    <div id="confirmation" className="modal">Employee Created!<div>
</Modal>

```