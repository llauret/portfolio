import{_ as u,o as n,c as i,a as t,t as l,F as p,r as m,d as o,e as s}from"./index-C6ZHAj9p.js";const h={class:"card"},_={class:"title-header"},k={class:"tech-bubble"},v={class:"tech-images"},b=["alt","src"],f={class:"content"},j=["src"],P=["src"],S={class:"description"},q=["href"],y={key:1,class:"project-link",href:"",target:"_blank"},A={__name:"project-card",props:{title:String,image:String,pdf:String,technoimgs:Array,description:String,link:String,linkSkills:String},setup(e){return(d,a)=>(n(),i("div",h,[t("div",_,[t("h2",null,l(e.title),1)]),t("div",k,[t("div",v,[(n(!0),i(p,null,m(e.technoimgs,(g,c)=>(n(),i("img",{key:c,alt:"Technologie "+c,src:g,class:"logo"},null,8,b))),128))])]),t("div",f,[e.image?(n(),i("img",{key:0,id:"illustration",src:e.image,alt:"project image",class:"project-image"},null,8,j)):o("",!0),e.pdf?(n(),i("iframe",{key:1,id:"illustration",src:e.pdf,class:"project-image"},null,8,P)):o("",!0),t("div",S,[t("p",null,l(e.description),1)])]),e.link?(n(),i("a",{key:0,href:e.link,class:"project-link",target:"_blank"},"Voir le projet",8,q)):o("",!0),e.linkSkills?(n(),i("a",y,"Voir compétences (explication projet)")):o("",!0)]))}},r=u(A,[["__scopeId","data-v-97ed22c0"]]),C={class:"grid-container"},V={__name:"Projects",setup(e){return(d,a)=>(n(),i(p,null,[a[0]||(a[0]=t("h1",null,"Projets",-1)),t("div",C,[s(r,{technoimgs:["vue.png","nodejs.png","Postgresql_elephant.svg.png","docker.svg","python.png","sequelize.png","linux.png","vitepress.png"],description:`Développement d'une application web pour la numérisation de processus papier.\r
\r
        Cette application est destinée à un usage sur tablette (avec un os Windows, c'est plus un mini PC), l'objectif final est que :\r
\r
        ■ Le site remplît les attentes.\r
        ■ Sois ergonomique, et agréable à utiliser.\r
        ■ Remplace les processus papier.\r
\r
        Documentation avec VitePress et Test avec Vitest, hosting en VM/Container Docker\r
        `,image:"mode-histo.png","link-skills":"",title:"Alternance - Numérisation processus papier"}),s(r,{technoimgs:["kotlin.png"],description:`Développement d'une application mobile - Lecteur de musique\r
    ■ Lecteur de musique\r
    ■ Playlist\r
    ■ Recherche de musique\r
    ■ Guesser de musique\r
    ■ Partage de musique\r
    ■ Téléchargement de musique\r
    ■ Etc.\r
    `,image:"logo_musique.png",link:"https://github.com/llauret/ArcaneMusic",title:"Lecteur de musique"}),s(r,{technoimgs:["java.png"],description:"Transcription Image en son avec JavaFX et OpenCV",link:"https://github.com/llauret/ImageSonPM",title:"Java ImageSon"}),s(r,{technoimgs:["python.png"],description:`SUPA QUIZZU - QCM en Python Objectif :\r
    ■ Clé API pour générer in app les questions\r
    `,link:"https://github.com/llauret/QCM",title:"SUPA QUIZZU"}),s(r,{technoimgs:["java.png"],description:"2048 en Java avec JavaFX",image:"2048.png",link:"https://github.com/llauret/2048",title:"2048"}),s(r,{technoimgs:["qt.png"],description:"Gestionnaire de mot de passe avec Qt",link:"https://github.com/llauret/BeretPass",pdf:"QT_CPP_HUMBERT_LAURET.pdf"}),s(r,{technoimgs:["vue.png"],description:"Application web gestion orgnisation de héros avec VueJS et Ionic",link:"https://github.com/llauret/drMAD3",title:"drMAD"})])],64))}},M=u(V,[["__scopeId","data-v-2b6851db"]]);export{M as default};
