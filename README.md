<<<<<<< HEAD
# SoulKlibur

<p>SoulKlibur es un pequeño videojuego web donde elegimos un personaje
para enfrenar al bot, quien tambien elige un presonaje aleatoriamente y asi tenemos un combate
con elementos como ataque. Al final el ganador de este combate sera quien posea mas victorias
dentro de los 5 intentos de atacar</p>

## Tecnologias utilizadas

<h3>Tools🔨</h3>

[![Visual Studio](https://img.shields.io/badge/-007ACC?style=flat&logo=Visual-Studio-Code&logoColor=white&link=https://github.com/Quananhle "Visual Studio")](https://github.com/Quananhle)
[![Git](https://img.shields.io/badge/-Git-black?style=flat&logo=git&link=https://github.com/Quananhle)](https://github.com/Quananhle) 
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&link=https://github.com/Quananhle)](https://github.com/Quananhle)
[![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white&link=https://github.com/Quananhle/Front-End-Dev)](https://github.com/Quananhle/Front-End-Dev) 
[![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&link=https://github.com/Quananhle/Front-End-Dev)](https://github.com/Quananhle/Front-End-Dev) 


<h3>Languages👨‍💻</h3>

[![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat&logo=javascript&link=https://github.com/Quananhle/Front-End-Dev)](https://github.com/Quananhle/Front-End-Dev)



## Resumen JS

Recapitulando:

  - Tenemos 3 inputs en HTML(personajes para seleccionar), ademas tenemos un boton al que los jugadores le dan click.

  - Cuando le dan 'click' al boton seleccionar, ejecutamos la funcion seleccionarPersonajeJugador() cuyo proposito es validar cual de los 3 personajes fue seleccionado.

  - Validamos con condicionales, y asignamos los input en cada parametro para confirmar la eleccion.


LOGICA PRINCIPAL PARA EMPEZAR A EJECUTAR EL JUEGO:

--->Hay que saber tanto en HTML como en JS que personajes seleccionan nuestros jugadores.
    La logica se hace partiendo desde que nuestro jugador pueda seleccionar un personaje, 
    y ademas que JS sepa cual fue el personaje que seleccionaron  y podramos mostrar en HTML manipulando el DOM.

--->Logica para seleccionar al personaje del oponente,
    es decir que nuestro juego JS saque aleatoriamentea algun personaje para que sea el oponente con el que debe combatir el personaje del jugador.

--->Aplica la misma logica para seleccionar el ataque del jugador y oponente

--->Logica para que el personaje del jugador pierda vidas/victorias o la del oponente pierda vidas/victorias 
    dependiendo de si nuestro ataque perdio o gano contra el oponente.

--->Una vez terminado el combate se pueda reiniciar el juego


- Con inner insertamos contenido a una etiqueta en html desde js
- Genero una pequeña estructura(templates literarios) dentro de la funcion inicicar juego, esta es la forma de implementar html con valores de nuestras variables para hacer un mix de ambas cosas.
- Creo la variable 'opcionesPersonaje', que guardara toda la estructura de HTML que se hara en JS para despues inyectar esa variable con toda la estructura como valor directamente en el HTML.

### Notas
<p>
    Para poder tener mas personajes en el juego o mas ataques sin tener que escribir el codigo de cada uno,
    podemos extraer informacion del array de personajes creado en JS, asi como de los ataques.
    La seccion tarjetas que llevaba el codigo HTML de la informacion de mis personajes, la elimino de este documento
    porque ya lo he cogido desde el JS en la variable opcionPErsonajes
    La etiqueta div(class="tarjetas") funcionara como un contenedor donde inyectaremos cada uno de los elementos
    o estructura de HTML que genero en JS desde opcionPersonaje 
</p>

<p>
    El enlace a JS debe colocarse abajo para mejores practicas.
    El navegador empieza a leer el documento de arriba hacia abajo, css, html y si llega a un JS deja de un lado la lectura, para leer solo JS(Esto genera un bloqueo).
    El navegador lo primero que hace es renderizar y crear cada uno de los elementos de HTML en el navegador, al final abre el archivo de JS y empieza a leer de igual forma de arriba hacia abajo las lineas de codigo.
</p>

## Loading...
=======
# SoulKlibur v1



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/Dev-Joshua/soulklibur-v1.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://gitlab.com/Dev-Joshua/soulklibur-v1/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thank you to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README
Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
>>>>>>> 58c44a6fca51f5437009c11e4e2b2a534c81f451
