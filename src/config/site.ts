/**
 * ============================================================
 *  FANAVERSE — FICHIER DE CONFIGURATION UNIQUE
 *  Tout ce que tu peux vouloir modifier (textes, photos, légendes, couleurs) est ici.
 *  Les textes marqués "À REMPLACER" sont des espaces réservés : écris les tiens.
 * ============================================================
 */

export type RouteId =
  | "home"
  | "dossier"
  | "lettre"
  | "ouvrir"
  | "final";

export const siteConfig = {
  /* ---------- COULEURS ---------- */
  colors: {
    cream: "#fff8f0", // blanc crème (fond)
    powder: "#f9d3dd", // rose poudré
    candy: "#ff5d9e", // rose bonbon
    wine: "#7a1f3d", // bordeaux
    ink: "#3b1626", // texte
  },

  /* ---------- IDENTITÉ ---------- */
  name: "FANAVERSE",
  emoji: "💗",
  slogan: "Un site entièrement consacré à une personne qui se prend beaucoup trop au sérieux.",

  /* ---------- MENU ---------- */
  nav: [
    { id: "home", label: "Accueil" },
    { id: "dossier", label: "Le dossier Fana" },
    { id: "lettre", label: "Ma lettre" },
    { id: "ouvrir", label: "À ouvrir quand…" },
    { id: "final", label: "Message final" },
  ] as { id: RouteId; label: string }[],

  /* ---------- PAGE D'ACCUEIL ---------- */
  home: {
    title: "BIENVENUE DANS LE FANAVERSE™",
    subtitle: "Oui, Fana. Un site entier. Pour toi. On n'a visiblement rien de mieux à faire.",
    officialLabel:
      "Projet financé à 100 % par l'amour d'une grande sœur et à 200 % par son manque de sérieux.",
    subjectTitle: "SUJET À L'ÉTUDE : FANA DRAME",
    subject: [
      { label: "Prénom", value: "Fana." },
      { label: "Statut", value: "petite sœur officiellement insupportable mais irremplaçable." },
      { label: "Niveau de douceur", value: "suspectement élevé." },
      { label: "Niveau de drama", value: "données confidentielles." },
      { label: "Place dans mon cœur", value: "malheureusement illimitée." },
      { label: "Statut juridique", value: "condamnée à être aimée à vie." },
    ],
    enterButton: "Entrer dans mon musée personnel 😌",
    diva: {
      question: "Alors, madame la star, tu comptes entrer ou tu attends une cérémonie officielle ?",
      yes: "Entrer, évidemment 💅",
      no: "Je suis trop importante pour ça",
      quips: [
        "Même ton bouton refuse ton niveau de drama.",
        "Fana, on te connaît. Clique simplement.",
        "La modestie a quitté la conversation.",
        "Un site entier ne suffisait donc pas à ton ego ? 😭",
      ],
    },
  },

  /* ---------- LE DOSSIER FANA (taquineries) ---------- */
  dossier: {
    studyTitle: "ÉTUDE SCIENTIFIQUE TRÈS SÉRIEUSE SUR FANA",
    studyButton: "Lancer l'analyse",
    studyRunning: "Analyse en cours… (c'est long, comme toi le matin)",
    studyResults: [
      { text: "Douceur détectée.", value: 94 },
      { text: "Empathie détectée.", value: 97 },
      { text: "Sensibilité détectée : cœur en mode éponge, émotions en accès illimité.", value: 98 },
      { text: "Boule d'amour confirmée : gentillesse tellement élevée que c'en est suspect.", value: 100 },
      { text: "Intelligence détectée : brillante, malgré une grande sœur comme influence.", value: 96 },
      { text: "Serviabilité : maximale. Statut officiel : ma servante personnelle. 👑", value: 100 },
      { text: "Niveau de complicité avec sa grande sœur : trop élevé pour être mesuré.", value: 100 },
      { text: "Sarcasme de la grande sœur : irréversible.", value: 100 },
      { text: "Résultat final : personne beaucoup trop aimée pour son propre bien.", value: 100 },
    ],
    stamp: "CAS DÉFINITIVEMENT IRRÉCUPÉRABLE",

    counterTitle: "COMPTEUR OFFICIEL DES CAPRICES",
    counterDisclaimer: "*Donnée purement fictive. Aucun caprice réel n'a été comptabilisé dans la fabrication de ce compteur.",
    counterButton: "Ajouter un caprice de Fana +1",
    counterReset: "Remettre à zéro (soyons optimistes)",
    counterReactions: [
      "Noté. Archivé. Encadré.",
      "Un de plus. La nature est généreuse.",
      "Le registre te remercie pour ta constance.",
      "Oui bon, celui-là était justifié. Peut-être.",
      "On va devoir rajouter une page au dossier.",
      "Le compteur demande une augmentation.",
    ],
    counterZero: "Compteur à zéro. Suspect.",

    secretTitle: "CONFIDENTIEL — FANA DRAME UNIQUEMENT",
    secretHint: "(clique, si tu oses)",
    /* À REMPLACER plus tard par tes propres blagues */
    secretMessage:
      "Ce dossier contient des informations beaucoup trop compromettantes. Pour des raisons de sécurité familiale, le contenu sera communiqué ultérieurement.",
    secretAccept: "J'accepte de ne pas porter plainte",
    secretAfter: "Sage décision. Mon avocate (moi) est soulagée.",
    secretClose: "Fermer le dossier",

    transition: {
      line1: "Bon. Trêve de plaisanteries.",
      line2: "Derrière toutes mes moqueries, il y a quelque chose que je ne te dirai peut-être jamais assez.",
      button: "Découvrir ce que ma grande sœur mijote ♡",
    },
  },

  /* ---------- PAGE 1 : MA LETTRE ---------- */

letter: {
  title: "Bon, là je suis sérieuse… presque.",
  openHint: "Clique sur l'enveloppe",
  closeLabel: "Refermer la lettre",

  paragraphs: [
    `À ma Fana Drame, ma petite sœur, mon morceau de cœur. 🤍`,

    `Il y a des choses que je ne te dis pas assez, des sentiments que je cache derrière mes moqueries, mes petites piques et parfois même ma dureté. Alors aujourd'hui, j'ai décidé de poser mon cœur quelque part, là où tu pourras enfin lire ce que ma bouche ne sait pas toujours te dire.`,

    `Fana, je passe mon temps à te dire que tu es bête. 😭 Je te taquine, je me moque de toi, je fais comme si tu ne comprenais jamais rien… Mais est-ce que je t'ai déjà vraiment dit à quel point je te trouve intelligente ? Parce que oui, ma fille, tu l'es. Tu as une manière de réfléchir, de voir les choses et de comprendre le monde qui me rend fière de toi. Tu as du potentiel, des capacités et tellement de belles choses en toi que j'espère te voir accomplir un jour. Ne laisse jamais mes taquineries te faire douter de toi, parce que je crois en toi bien plus que tu ne l'imagines.`,

    `Et Fana, il y a encore une chose que je veux que tu saches : tu es belle. Belle de l'intérieur comme de l'extérieur. Et je ne te dis pas ça simplement parce que tu es ma petite sœur et que je suis censée te trouver magnifique. 😂 Je te le dis parce que je le pense sincèrement. Il y a ta beauté que les yeux peuvent voir, mais il y a aussi celle que tu portes en toi, dans ton cœur, dans ta douceur, dans ton empathie et dans ta manière d'être. Pour moi, cette beauté-là est tout aussi précieuse que celle que le monde peut admirer.`,

    `Je te trouve brave, ambitieuse et courageuse. Tu as tes propres idées, tes objectifs et ta manière de voir la vie. Tu n'es pas le genre de personne qui se laisse facilement influencer par les autres, et j'admire énormément cela chez toi. Tu sais défendre tes idées, tu ne te laisses pas faire et tu ne te laisses pas facilement marcher dessus. Tu as ce petit caractère qui me fait parfois lever les yeux au ciel 😂, mais qui me rend aussi tellement fière de toi.`,

    `Je veux que tu gardes cette force, ma Fana. Que tu n'aies jamais besoin de diminuer ta lumière pour mettre quelqu'un à l'aise, ni de changer qui tu es pour être acceptée. Reste cette fille douce, belle, intelligente, ambitieuse et courageuse. Apprends simplement à protéger ton cœur autant que tu sais comprendre celui des autres. Ne laisse jamais personne te faire croire que tu dois choisir entre être douce et être forte. Tu peux être les deux, ma sœur. Et c'est justement ce mélange qui te rend si spéciale à mes yeux.`,

    `Et puis, il y a ta douceur. Ton empathie. Cette partie de toi qui me touche peut-être plus que je ne le montre. Tu as cette capacité à ressentir les choses, à t'attacher et à donner de l'importance aux sentiments. Tu as un cœur qui mérite qu'on en prenne soin. Et si parfois je suis dure avec toi, si mes paroles dépassent ma pensée, si je te blesse alors que je devrais être celle qui te protège, je veux que tu saches que je le regrette.`,

    `Je suis désolée, Fana. Vraiment. 🤍 Je sais que le fait d'être ta grande sœur ne me donne pas le droit de tout te dire, de te parler n'importe comment ou de penser que tu dois forcément comprendre mes réactions parce que tu me connais. Je sais que parfois, derrière mes blagues, il peut y avoir des paroles qui font mal. Je ne veux jamais que tu finisses par croire que je ne vois pas ta valeur, que je ne respecte pas tes sentiments ou que je ne mesure pas la chance que j'ai de t'avoir.`,

    `Je t'aime énormément, petite sœur. Beaucoup plus que ce que mes gestes et mes mots laissent parfois paraître. Et je te demande pardon pour les fois où je n'ai pas su te le montrer correctement.`,

    `Mais bon… tu me connais, hein. 😭 Je vais quand même préciser quelque chose : c'est la dernière fois que je te demande pardon comme ça, avec une lettre et tout ce cinéma. Profite bien de ce moment historique, parce que tu ne verras pas tous les jours ta grande sœur déposer son ego, prendre sa plume et reconnaître officiellement ses torts. 😂`,

    `Plus sérieusement, je ne veux pas que cela signifie que je ne m'excuserai plus jamais si je te blesse. Je veux simplement que ce soit la dernière fois que tu aies besoin de douter de l'amour que j'ai pour toi au point d'attendre une déclaration pareille pour le comprendre. Je veux apprendre à mieux te montrer cet amour, même dans les jours ordinaires, même quand je suis de mauvaise humeur, même quand je te taquine jusqu'à ce que tu aies envie de me jeter quelque chose à la figure. 😭❤️`,

    `Et maintenant, il y a quelque chose que je ne t'ai jamais vraiment dit.`,

    `Tu sais, il y a des chansons d'amour que les gens écoutent en pensant à leur amoureux, à une histoire passée ou à quelqu'un qu'ils aimeraient rencontrer. Moi, presque toutes les chansons d'amour me font penser à toi.`,

    `Oui, toi. Ma petite sœur. 😭🤍`,

    `Parfois, j'écoute une chanson et certaines paroles me font penser à notre lien, à l'amour que j'ai pour toi, à la place que tu occupes dans ma vie. Il y a des mots dans ces chansons que j'aurais aimé pouvoir te dire moi-même. Des mélodies qui me rappellent combien une personne peut compter pour nous, combien on peut aimer quelqu'un sans toujours savoir comment l'exprimer.`,

    `Et chaque fois que cela m'arrive, je pense à toi. Je pense à nous, à notre complicité, à tout ce qu'on partage et à tout ce que je ressens pour toi sans forcément savoir le mettre en mots.`,

    `Tu es dans mes pensées d'une manière que tu ne soupçonnes peut-être même pas. Il y a des choses qui me font sourire et auxquelles toi seule me fais penser. Des envies, des projets, des endroits qui prennent un sens particulier simplement parce que tu pourrais y être avec moi.`,

    `Et Mbour, justement… Est-ce que tu sais que c'est à cause de toi, et toi uniquement, que je veux venir à Mbour ?`,

    `Ce n'est pas seulement une question de ville, de trajet ou de changement d'endroit. C'est toi que j'ai envie de voir. C'est ta présence que je recherche. C'est le bonheur de pouvoir être près de toi, de partager du temps avec toi, de rire avec toi pour des bêtises, de te taquiner en face plutôt que derrière un écran et de vivre ces petits moments qui paraissent ordinaires mais qui comptent énormément pour moi.`,

    `Parfois, on ne se rend pas compte qu'une personne peut devenir une raison d'avoir envie d'aller quelque part. Toi, tu es cette raison pour moi. Si Mbour m'attire autant, c'est parce que tu y es. Et je crois que cela dit beaucoup de choses sur la place que tu occupes dans mon cœur.`,

    `Je ne sais pas si tu réalises vraiment à quel point tu es importante pour moi, Fana. Je ne sais pas si tu mesures la place que tu as dans ma vie, ni combien ton absence peut se faire sentir. Mais je voulais que tu le saches au moins une fois, sans blague, sans sarcasme et sans que je change de sujet au milieu parce que je suis gênée d'être aussi sentimentale. 😭`,

    `Tu es ma petite sœur, mais tu es aussi une personne que j'admire, que je respecte, dont je suis fière et que j'aime profondément.`,

    `Je veux te voir réussir. Je veux te voir réaliser tes ambitions, devenir la femme que tu rêves d'être, prendre tes décisions avec assurance et ne jamais laisser quelqu'un te convaincre que tu es moins intelligente, moins capable ou moins précieuse que tu ne l'es réellement.`,

    `Je veux que tu sois heureuse, que tu sois aimée correctement et que tu rencontres des personnes qui sauront reconnaître la beauté de ton cœur. Je veux que tu gardes ta douceur sans jamais croire qu'elle est une faiblesse. Que tu gardes ton empathie sans oublier de penser à toi. Que tu restes ambitieuse, brave et fidèle à la personne que tu es.`,

    `Et si un jour tu doutes de toi, rappelle-toi qu'il existe quelque part une grande sœur qui passe son temps à te traiter de bête, mais qui, au fond, connaît ta valeur et croit en toi. Une grande sœur qui n'est pas toujours parfaite, qui peut être dure, qui ne trouve pas toujours les bons mots, mais qui t'aime d'un amour immense.`,

    `Joyeux anniversaire, ma Fana Drame. 🎂🤍 Merci d'être toi. Merci pour ta douceur, pour ton cœur, pour ta force et pour cette place unique que tu occupes dans ma vie.`,

    `Et si je pouvais te faire un cadeau qui dure toute ta vie, je crois que je te donnerais la possibilité de te voir à travers mes yeux, juste une fois. Tu comprendrais alors pourquoi je suis aussi attachée à toi, pourquoi certaines chansons me font penser à toi, pourquoi Mbour a une place particulière dans mes envies et pourquoi, malgré toutes mes bêtises, tu resteras toujours quelqu'un d'irremplaçable pour moi.`,

    `Je t'aime, ma petite sœur. Plus que mes moqueries ne le laissent croire, plus que mes silences ne le montrent et bien plus que ces quelques pages ne pourront jamais l'expliquer.`,

    `Et maintenant, ne prends pas trop la grosse tête après avoir lu ça. Demain, je risque de recommencer à te traiter de bête. 😂 Mais au moins, maintenant, tu sais.`,

    `Derrière toutes mes taquineries, il y a un amour immense. Et cet amour-là, Fana, il est à toi. Pour toujours. ♡`
  ],

  signature: "Ta grande sœur, qui t'aime plus qu'elle ne sait te le dire. 🤍"
},

  /* ---------- PAGE 2 : NOTRE HISTOIRE (Polaroids) ---------- */
  story: {
    title: "Les preuves de notre complicité",
    intro: "[Écris ici une petite phrase d'intro, ou supprime cette ligne.]",
    /* Pour chaque photo : mets le fichier dans public/photos/ et écris "photos/nom.jpg" dans src */
    photos: [
      { src: "", caption: "[Légende 1]" },
      { src: "", caption: "[Légende 2]" },
      { src: "", caption: "[Légende 3]" },
      { src: "", caption: "[Légende 4]" },
      { src: "", caption: "[Légende 5]" },
      { src: "", caption: "[Légende 6]" },
    ],
  },

  /* ---------- PAGE 3 : POURQUOI TOI ? ---------- */
  
why: {
  title: "Tes qualités. Malheureusement, il y en a beaucoup.",
  hint: "Retourne les cartes",

  cards: [
    {
      emoji: "🧠",
      front: "Madame l'intelligente",
      back: "Je passe mon temps à te dire que tu es bête, mais entre nous, je sais très bien que tu es intelligente. Tu as du potentiel, tu réfléchis par toi-même et tu es capable de grandes choses. Ne laisse jamais mes taquineries te faire oublier ça. Bon, ne prends pas trop la grosse tête non plus. 😂",
      exemple: false
    },
    {
      emoji: "🌷",
      front: "Ton cœur en or",
      back: "Tu as une douceur et une empathie qui me touchent énormément. Tu sais que les sentiments comptent, tu sais être attentive aux autres et tu as cette belle capacité à comprendre ce que les gens peuvent ressentir. Le monde a besoin de personnes comme toi. Mais pense aussi à protéger ton propre cœur, ma Fana. 🤍",
      exemple: false
    },
    {
      emoji: "🦋",
      front: "La brave que tu es",
      back: "J'admire ton courage et ta force de caractère. Tu ne te laisses pas faire, tu sais défendre tes idées et tu ne suis pas les autres juste pour leur plaire. Tu as ta propre personnalité et tu sais tenir debout pour ce en quoi tu crois. Et ça, petite sœur, c'est une qualité que je respecte énormément.",
      exemple: false
    },
    {
      emoji: "👑",
      front: "Madame Ambition",
      back: "J'aime le fait que tu aies des ambitions et que tu puisses vouloir quelque chose pour toi-même. Je veux te voir aller loin, réaliser tes rêves et devenir cette femme dont tu seras fière. Je crois en toi, même les jours où tu doutes de toi-même. Alors, s'il te plaît, ne te sous-estime jamais.",
      exemple: false
    },
    {
      emoji: "🎀",
      front: "Belle, dedans et dehors",
      back: "Tu es belle de l'intérieur comme de l'extérieur. Et non, ce n'est pas juste le discours obligatoire d'une grande sœur. 😂 Ta beauté ne se résume pas à ton apparence : elle est aussi dans ta douceur, ton cœur, ta personnalité et ta façon d'être. J'espère qu'un jour tu pourras te voir avec autant d'admiration que j'en ai pour toi.",
      exemple: false
    },
    {
      emoji: "💌",
      front: "Mon irremplaçable",
      back: "Parmi toutes les personnes que je pourrais rencontrer dans ma vie, il n'y aura jamais une autre Fana. Personne ne pourra prendre exactement ta place dans mon cœur. Tu es ma petite sœur, ma complice et une personne que j'admire profondément. Et oui, même quand tu m'énerves, je t'aime toujours autant. Malheureusement pour moi, tu es coincée avec moi pour la vie. 😂❤️",
      exemple: false
    }
  ],
},


  /* ---------- PAGE 4 : À OUVRIR QUAND… ---------- */
  openWhen: {
    title: "À ouvrir quand…",
    hint: "Une enveloppe à la fois. Pas de triche, madame la curieuse. 💌",
    close: "Refermer",

    envelopes: [
      {
        emoji: "🌧️",
        label: "Quand tu es triste",
        teaser: {
          kicker: "mini surprise",
          title: "Avant l'ouverture…",
          text: "Un petit moment drôle avant le message : sourire, grimaces et un petit câlin virtuel.",
          faces: ["😌", "😂", "🤪", "😹"],
          button: "Ouvrir le message",
        },
        message: `Ma Fana,

      Si tu lis ce message parce que tu es triste, viens là que je te fasse un câlin virtuel. 🫂

      Je ne sais pas toujours trouver les bons mots pour te réconforter, et parfois je peux même être la dernière personne à qui tu as envie de parler. Mais je veux que tu saches une chose : tu n'as pas besoin de faire semblant d'aller bien avec moi.

      Tu as le droit d'être fatiguée, de pleurer, de douter et de ne pas avoir toutes les réponses. Tu n'as pas besoin d'être forte tous les jours.

      Et surtout, ne laisse jamais un mauvais jour te faire croire que ta vie est mauvaise, ni une personne te faire croire que tu ne vaux rien. Tu as tellement de belles choses en toi, même les jours où tu n'arrives plus à les voir.

      Si j'étais près de toi, je te prendrais dans mes bras, je te laisserais parler… puis je finirais probablement par t'embêter parce que je suis incapable d'être sérieuse trop longtemps. 😂

      Je t'aime, ma petite sœur. Même quand tu es triste, même quand tu ne veux parler à personne, même quand tu ne sais pas expliquer ce que tu ressens. Tu n'as pas besoin de mériter mon amour.

      Ta grande sœur est là. Toujours dans la limite de ses capacités à être gentille plus de cinq minutes. 🤍`
      },

      {
        emoji: "🪞",
        label: "Quand tu doutes de toi",
        teaser: {
          kicker: "mini surprise",
          title: "Avant l'ouverture…",
          text: "Une petite blague, un petit sourire et la vérité : tu es brillante et je le vois bien.",
          faces: ["🤩", "😌", "😏", "✨"],
          button: "Ouvrir le message",
        },
        message: `Fana Drame, écoute-moi bien. 🫵🏽

      Qui t'a autorisée à douter de toi comme ça ? Certainement pas moi !

      Je sais que je passe mon temps à te traiter de bête, mais entre nous, tu sais très bien que je ne pense pas vraiment ça. 😂 Tu es intelligente, tu as tes propres idées et tu es capable de réfléchir par toi-même.

      Tu es aussi courageuse et ambitieuse. J'espère que tu ne laisseras jamais quelqu'un te faire croire que tu es incapable de réaliser tes rêves. Ne réduis pas tes ambitions pour rassurer les personnes qui ne savent pas quoi faire des leurs.

      Tu n'as pas besoin d'être parfaite pour être exceptionnelle. Tu peux faire des erreurs, apprendre, recommencer et évoluer à ton rythme.

      Et si un jour tu oublies toutes ces choses, reviens lire ce message. Je te le rappellerai autant de fois qu'il le faudra.

      Je crois en toi, même quand tu doutes de toi-même. Et si jamais tu commences à prendre la grosse tête après avoir lu tout ça, sache que je peux toujours te rappeler que tu es ma petite sœur et que je connais tous tes dossiers. 😂❤️`
      },

      {
        emoji: "😂",
        label: "Quand tu as besoin de rire",
        teaser: {
          kicker: "mini surprise",
          title: "Avant l'ouverture…",
          text: "Une petite dose de folie pour te rappeler qu'il faut rire, même quand ça va mal.",
          faces: ["😆", "🤡", "😂", "😵‍💫"],
          button: "Ouvrir le message",
        },
        message: `ALERTE ! 🚨

      Fana Drame a besoin de rire. Je répète : Fana Drame a besoin de rire !

      Premièrement, respire. Deuxièmement, rappelle-toi que tu as une grande sœur absolument incroyable. Bon, un peu insupportable, parfois trop dure, mais incroyable quand même. On ne peut pas tout avoir. 😂

      Troisièmement, rappelle-toi toutes les fois où on s'est embêtées pour des choses complètement inutiles. Toutes les petites disputes, les regards qui veulent tout dire, les moments où l'une énerve l'autre juste pour le plaisir.

      Franchement, si quelqu'un filmait notre quotidien, on aurait probablement une série comique avec plusieurs saisons.

      Et si tu es encore triste après ce message, je suis désolée : le service de divertissement est actuellement en maintenance. Merci de réessayer plus tard. 😭😂

      Plus sérieusement, j'espère que tu retrouveras vite ton sourire. Et si ce n'est pas aujourd'hui, ce n'est pas grave. Tu n'es pas obligée d'aller bien immédiatement.

      Je t'aime, espèce de bête. ❤️`
      },

      {
        emoji: "💗",
        label: "Quand tu as besoin d'amour",
        teaser: {
          kicker: "mini surprise",
          title: "Avant l'ouverture…",
          text: "Une petite dose de tendresse pour te rappeler que tu comptes énormément.",
          faces: ["💌", "😍", "🥹", "🤍"],
          button: "Ouvrir le message",
        },
        message: `Mon petit cœur,

      Si tu as ouvert cette enveloppe, je suppose que tu as besoin qu'on te rappelle à quel point tu comptes.

      Alors laisse-moi te le dire : je t'aime énormément, Fana. Beaucoup plus que je ne le montre et probablement beaucoup plus que ce que mes comportements te laissent parfois croire.

      Je sais que je peux être dure avec toi. Je peux te parler sèchement, te taquiner toute la journée et ne pas toujours te montrer la tendresse que j'ai pour toi. Je ne veux pas que tu confondes ma façon maladroite de te montrer mon affection avec un manque d'amour.

      Tu es ma petite sœur, ma complice, une personne qui a une place unique dans ma vie. Personne ne peut prendre exactement ta place, parce que personne ne peut être toi.

      Il y a tellement de chansons d'amour qui me font penser à toi. Et oui, même celles qui parlent d'un amour immense et impossible à expliquer. Parce que parfois, les paroles arrivent à exprimer ce que je n'arrive pas à te dire moi-même.

      Tu mérites d'être aimée avec douceur, respect et sincérité. N'accepte jamais moins que cela, que ce soit de moi ou de quelqu'un d'autre.

      Je t'aime quand je te le dis, quand je ne le dis pas, quand je t'embête et même quand tu m'énerves au point où je me demande qui m'a donné une petite sœur pareille. 😂

      Réponse : personne ne m'a demandé mon avis, mais maintenant je te garde à vie. Je t'aime, Fana. 💗`
      },

      {
        emoji: "📸",
        label: "Quand tu veux te souvenir de nous",
        teaser: {
          kicker: "mini surprise",
          title: "Avant l'ouverture…",
          text: "Un petit souvenir rigolo pour te rappeler qu'on a de la suite dans les idées, toi et moi.",
          faces: ["📷", "😜", "🤭", "💞"],
          button: "Ouvrir le message",
        },
        message: `Toi et moi. 🤍

      Parfois, je me demande si tu réalises vraiment la place que tu occupes dans ma vie.

      Il y a beaucoup d'endroits où je peux aller, beaucoup de choses que je peux faire, mais quand je pense à Mbour, la première personne qui me vient à l'esprit, c'est toi.

      Ce n'est pas seulement l'endroit qui me donne envie de venir. C'est le fait de savoir que je vais te retrouver, te parler, te taquiner et partager encore des moments avec toi.

      Je veux qu'on garde des souvenirs de nous : les fous rires, les conversations inutiles qui durent des heures, les petites disputes qu'on oubliera probablement le lendemain, les photos ratées et les moments simples qui finissent par devenir précieux.

      On va grandir, changer, avoir nos projets et nos responsabilités. La vie ne sera pas toujours exactement comme aujourd'hui. Mais j'espère qu'on continuera à se choisir, à se soutenir et à trouver du temps l'une pour l'autre.

      Et si un jour tu relis ce message en étant plus grande, j'espère que tu souriras en pensant à nous.

      Souviens-toi que, derrière toutes mes moqueries, mes airs sévères et mes « tu es bête », il y a une grande sœur qui t'aime profondément.

      Notre histoire n'est pas parfaite, mais elle est à nous. Et je veux encore plein de souvenirs avec toi.

      Je t'aime, ma Fana. Pour tous les souvenirs qu'on a déjà créés et tous ceux qu'il nous reste à vivre. 🥹💗`
      },
    ],
  },


  /* ---------- PAGE 6 : MESSAGE FINAL ---------- */
  final: {
    lockedTitle: "Cette page est verrouillée 🔒",
    lockedText: "Elle ne s'ouvrira que si tu promets de rester humble.",
    unlockButton: "Bon, dernier arrêt avant que tu prennes encore la grosse tête.",
    title: "Joyeux anniversaire, Fana",
    paragraphs: [
      "Joyeux anniversaire, ma Fana Drame. 💗 Tu es bien plus que ma petite sœur : tu es une partie de mon cœur, ma complice et une personne que je choisirais encore dans toutes les vies. Même si je passe mon temps à t'embêter, n'oublie jamais que je t'aime infiniment. Grandis, rêve et brille, mon cœur. Ta grande sœur sera toujours fière de toi. 🎀❤️",
    ],
    signature: "[Ta signature]",
  },
};

export type SiteConfig = typeof siteConfig;
