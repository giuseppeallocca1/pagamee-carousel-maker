// ─── Motore template Pagamee ──────────────────────────────────────────────────
// Genera slide senza API key: keyword matching + contenuti pre-scritti per tema e TOV.

// ── Temi rilevabili ───────────────────────────────────────────────────────────
const THEME_KEYWORDS = {
  stipendio:     ['stipendio', 'stipendi', 'paga', 'salario', 'arretrati', 'retribuzione', 'busta paga', 'mensilità', 'mese'],
  tfr:           ['tfr', 'trattamento fine rapporto', 'liquidazione', 'buonuscita'],
  straordinari:  ['straordinari', 'straordinario', 'ore extra', 'ore in più', 'orario', 'notturno', 'festivo', 'weekend'],
  ferie:         ['ferie', 'permessi', 'riposo', 'rol', 'ex festività', 'giorni non goduti', 'congedo'],
  lavoro_nero:   ['lavoro nero', 'nero', 'senza contratto', 'in nero', 'irregolare', 'sommerso'],
  licenziamento: ['licenziamento', 'licenziato', 'dimissioni forzate', 'mobbing', 'demansionamento', 'pressioni'],
  diritti:       ['diritti', 'diritto', 'tutele', 'legge', 'normativa', 'lavoratore', 'lavoratori', 'dipendente'],
  come_funziona: ['come funziona', 'pagamee', 'processo', 'procedura', 'servizio', 'costo', 'commissione'],
}

function detectTheme(input) {
  const low = input.toLowerCase()
  let best = 'diritti'
  let bestScore = 0
  for (const [theme, keywords] of Object.entries(THEME_KEYWORDS)) {
    const score = keywords.filter(k => low.includes(k)).length
    if (score > bestScore) { bestScore = score; best = theme }
  }
  return best
}

// ── Contenuti per tema e TOV ──────────────────────────────────────────────────
const CONTENT = {
  stipendio: {
    cover: {
      Educativo:      { title: 'Stipendio non pagato?\nEcco cosa puoi fare subito', subtitle: 'Guida pratica per recuperare i tuoi arretrati', emoji: '💰' },
      Provocatorio:   { title: 'Il tuo datore non ti paga?\nSmetti di aspettare', subtitle: 'Ogni giorno che passa ti costa soldi', emoji: '⚡' },
      Empatico:       { title: 'Aspettare uno stipendio che non arriva\nè logorante', subtitle: 'Noi siamo al tuo fianco per cambiare le cose', emoji: '🤝' },
      'Legale/Tecnico': { title: 'Mancato pagamento retributivo:\ngli strumenti legali a tua disposizione', subtitle: 'Art. 2099 c.c. e tutele contrattuali applicabili', emoji: '⚖️' },
    },
    blocks: [
      {
        Educativo:      { title: 'I tuoi diritti in caso di mancato pagamento', body: 'Il datore di lavoro è obbligato per legge a pagare\nla retribuzione entro i termini del CCNL.\nGli arretrati maturano interessi legali automaticamente.' },
        Provocatorio:   { title: 'Sai quanto ti stanno rubando ogni mese?', body: 'Ogni busta paga non ricevuta è un furto legale.\nGli arretrati si accumulano mese dopo mese.\nE tu hai il diritto di recuperarli tutti.' },
        Empatico:       { title: 'Sappiamo quanto è difficile aspettare', body: 'Spese da pagare, famiglia da mantenere, ansia.\nNon dovresti vivere così.\nEsistono strumenti concreti per ottenere ciò che ti spetta.' },
        'Legale/Tecnico': { title: 'Presupposti legali per il recupero retributivo', body: 'Art. 2099 c.c.: la retribuzione è un diritto irrinunciabile.\nPrescritta in 5 anni dalla cessazione del rapporto.\nAzione monitoria ex art. 633 c.p.c. per recupero rapido.' },
      },
      {
        Educativo:      { title: 'Quanti anni hai per agire?', body: 'La prescrizione degli stipendi non pagati è di 5 anni.\nNon aspettare: più tempo passa, più è difficile recuperare\nla documentazione necessaria.', highlight_number: '5 anni', highlight_label: 'per presentare la richiesta' },
        Provocatorio:   { title: 'Il datore conta sul tuo silenzio', body: 'Sa che molti lavoratori non agiscono per paura\no perché non conoscono i propri diritti.\nSpezza questo meccanismo oggi.', highlight_number: '5 anni', highlight_label: 'di prescrizione — non perdere tempo' },
        Empatico:       { title: 'Non sei solo in questa situazione', body: 'Ogni anno migliaia di lavoratori italiani\nnon ricevono gli stipendi che meritano.\nInsieme possiamo fare la differenza.', highlight_number: '€2,3 MLD', highlight_label: 'di stipendi non pagati ogni anno in Italia' },
        'Legale/Tecnico': { title: 'Termini di prescrizione applicabili', body: 'Prescrizione quinquennale ex art. 2948 n. 4 c.c.\nIn caso di rapporto ancora in corso: prescrizione sospesa\nfino alla cessazione (Corte Cost. 63/1966).', highlight_number: '5 anni', highlight_label: 'termine ordinario di prescrizione' },
      },
      {
        Educativo:      { title: 'Cosa puoi recuperare concretamente', body: 'Stipendi arretrati mese per mese.\nInteressi legali maturati automaticamente.\nTredicesima e quattordicesima se previste dal contratto.' },
        Provocatorio:   { title: 'Non lasciare neanche un euro sul tavolo', body: 'Stipendi, tredicesima, interessi legali.\nTutto quello che ti spetta, fino all\'ultimo centesimo.\nNon fare sconti a chi non te ne fa.' },
        Empatico:       { title: 'Quello che puoi riottenere', body: 'I mesi di lavoro che non ti hanno pagato.\nI soldi che avresti dovuto avere per la tua famiglia.\nLa dignità che merita ogni lavoratore.' },
        'Legale/Tecnico': { title: 'Voci recuperabili nel credito retributivo', body: 'Retribuzioni mensili + ratei di 13ª/14ª mensilità.\nInteressi ex art. 429 c.p.c. (rivalutazione ISTAT + interessi).\nRimborso spese legali ex art. 91 c.p.c.' },
      },
      {
        Educativo:      { title: 'Come Pagamee recupera i tuoi soldi', body: 'Analizziamo il tuo caso gratuitamente in 24h.\nPredisponiamo tutta la documentazione.\nAgiamo legalmente: paghi solo il 10% del recuperato.' },
        Provocatorio:   { title: 'Zero anticipi. Zero scuse. Solo risultati.', body: 'Non ti chiediamo soldi in anticipo.\nPaghi il 10% solo se recuperiamo i tuoi arretrati.\nSe non vinciamo, non paghi nulla.' },
        Empatico:       { title: 'Il nostro impegno concreto per te', body: 'Ascoltiamo la tua storia senza giudicare.\nAnalizziamo ogni dettaglio del tuo caso.\nCombattiamo per te fino al recupero totale.' },
        'Legale/Tecnico': { title: 'Metodologia procedurale Pagamee', body: 'Analisi documentale: contratto, CU, buste paga, estratti conto.\nDiffida stragiudiziale con termine di 15 gg per adempimento.\nRicorso monitorio ex art. 633 c.p.c. se necessario.' },
      },
      {
        Educativo:      { title: 'I documenti che ti servono', body: 'Contratto di lavoro (o anche solo le buste paga).\nEmail, messaggi o qualsiasi comunicazione scritta.\nEstratti conto che mostrano i mancati accrediti.' },
        Provocatorio:   { title: 'Hai già tutto quello che serve per agire', body: 'Buste paga, messaggi, email con il datore?\nÈ sufficiente. Non servono avvocati costosi.\nPagamee fa tutto per te, ora.' },
        Empatico:       { title: 'Non devi avere tutto in ordine per iniziare', body: 'Sappiamo che raccogliere documenti è stressante.\nI nostri esperti ti guidano passo passo\nnel trovare le prove che già hai.' },
        'Legale/Tecnico': { title: 'Documentazione probatoria necessaria', body: 'Contratto collettivo e individuale di lavoro applicato.\nBuste paga e CUD/CU degli anni contestati.\nProve dell\'inadempimento: estratti c/c, comunicazioni scritte.' },
      },
    ],
    cta: {
      Educativo:      { title: 'Recupera gli stipendi che ti spettano', body: 'Analisi gratuita del tuo caso entro 24 ore.\nZero anticipi — paghi solo il 10% sul recuperato.', emoji: '🚀' },
      Provocatorio:   { title: 'Basta aspettare. Agisci adesso.', body: 'Il tuo datore non si aspetta che tu reagisca.\nSurprendilo. Recupera tutto ciò che ti deve.', emoji: '⚡' },
      Empatico:       { title: 'Meriti di essere pagato. Sempre.', body: 'Il tuo lavoro ha valore. I tuoi diritti anche.\nSiamo qui per aiutarti a farli valere.', emoji: '🤝' },
      'Legale/Tecnico': { title: 'Tutela giudiziale del credito retributivo', body: 'Procedura monitoria d\'urgenza disponibile.\nAssistenza legale specializzata — success fee 10%.', emoji: '⚖️' },
    },
  },

  tfr: {
    cover: {
      Educativo:      { title: 'TFR non pagato?\nEcco come recuperarlo', subtitle: 'Tutto quello che devi sapere sul tuo diritto', emoji: '📋' },
      Provocatorio:   { title: 'Il tuo TFR è fermo\nnel cassetto del tuo ex datore', subtitle: 'È il tuo denaro. Riprendilo.', emoji: '💥' },
      Empatico:       { title: 'Anni di lavoro meritano\nun finale diverso', subtitle: 'Il TFR è il tuo risparmio: ti appartiene', emoji: '🌟' },
      'Legale/Tecnico': { title: 'Mancata corresponsione TFR:\nstrumenti di tutela legale', subtitle: 'Art. 2120 c.c. e procedure di recupero', emoji: '⚖️' },
    },
    blocks: [
      {
        Educativo:      { title: 'Cos\'è il TFR e perché ti spetta', body: 'Il Trattamento di Fine Rapporto è una retribuzione differita\ncorrisposta alla fine di ogni rapporto di lavoro.\nEquivale a circa una mensilità per ogni anno lavorato.' },
        Provocatorio:   { title: 'Hai lavorato per anni. Ora vuole tenersi i tuoi soldi?', body: 'Il TFR non è un regalo del datore di lavoro.\nÈ il tuo stipendio differito, maturato anno dopo anno.\nNessuno può tenerti ciò che è legalmente tuo.' },
        Empatico:       { title: 'Ogni anno di lavoro conta', body: 'Hai dedicato tempo, energia e impegno a quell\'azienda.\nIl TFR è il riconoscimento di tutto questo.\nMeriti di ricevere ciò che hai guadagnato.' },
        'Legale/Tecnico': { title: 'Disciplina giuridica del TFR (art. 2120 c.c.)', body: 'Quota annuale: retribuzione annua ÷ 13,5.\nRivalutazione annua: 1,5% fisso + 75% indice ISTAT prezzi.\nObbligatorio per tutti i rapporti di lavoro subordinato.' },
      },
      {
        Educativo:      { title: 'Quando il datore può non pagarlo?', body: 'Mai — il TFR è un diritto assoluto e irrinunciabile.\nAnche in caso di fallimento dell\'azienda\nesiste il Fondo di Garanzia INPS che ti tutela.', highlight_number: '100%', highlight_label: 'casi in cui hai diritto al TFR' },
        Provocatorio:   { title: 'Nemmeno il fallimento lo cancella', body: 'L\'azienda è in crisi? Non importa.\nIl Fondo di Garanzia INPS eroga il TFR al posto tuo.\nZero scuse valide per non pagarti.', highlight_number: 'INPS', highlight_label: 'garantisce il tuo TFR anche in caso di fallimento' },
        Empatico:       { title: 'Anche se l\'azienda è in difficoltà', body: 'Lo sappiamo: può sembrare una battaglia impossibile.\nMa lo Stato ha creato tutele specifiche per questi casi.\nNon sei solo — hai diritti concreti dalla tua parte.', highlight_number: 'Fondo INPS', highlight_label: 'ti protegge anche in caso di insolvenza aziendale' },
        'Legale/Tecnico': { title: 'Fondo di Garanzia INPS ex L. 297/1982', body: 'Interviene in caso di insolvenza del datore (art. 2 L. 297/82).\nDomanda entro 1 anno dalla dichiarazione di insolvenza.\nCopre TFR + ultime 3 mensilità retributive.' },
      },
      {
        Educativo:      { title: 'Quanti anni hai per reclamarlo', body: 'La prescrizione del TFR è di 5 anni\ndalla cessazione del rapporto di lavoro.\nNon aspettare: ogni anno che passa complica il recupero.' },
        Provocatorio:   { title: '5 anni. Non perdere altro tempo.', body: 'Se sono passati più di 5 anni dalla fine del contratto\npotresti perdere il diritto.\nAgisci oggi — non domani, non tra una settimana.', highlight_number: '5 anni', highlight_label: 'di prescrizione del diritto al TFR' },
        Empatico:       { title: 'Non aspettare che sia troppo tardi', body: 'Sappiamo che a volte si rimanda per stanchezza.\nMa il tempo conta: hai 5 anni per agire.\nInizia oggi — anche solo con una consulenza gratuita.', highlight_number: '5 anni', highlight_label: 'di tempo per recuperare il tuo TFR' },
        'Legale/Tecnico': { title: 'Termine prescrizionale e sua sospensione', body: 'Prescrizione quinquennale ex art. 2948 n. 5 c.c.\nDecorre dalla cessazione del rapporto di lavoro.\nSospesa durante il rapporto (Corte Cost. 63/1966 e 174/1972).' },
      },
    ],
    cta: {
      Educativo:      { title: 'Calcola quanto TFR ti spetta', body: 'Analisi gratuita e calcolo preciso del tuo credito.\nZero anticipi — success fee 10% sul recuperato.', emoji: '📊' },
      Provocatorio:   { title: 'Il tuo TFR ti aspetta. Prendilo.', body: 'Non lasciare i tuoi soldi nelle mani di chi non te li vuole dare.\nAgisci adesso — è gratis iniziare.', emoji: '💪' },
      Empatico:       { title: 'Meriti di ricevere ciò che hai guadagnato', body: 'Anni di lavoro meritano un giusto riconoscimento.\nSiamo qui per accompagnarti fino alla fine.', emoji: '🌟' },
      'Legale/Tecnico': { title: 'Recupero TFR: procedura stragiudiziale e giudiziale', body: 'Diffida formale + eventuale ricorso monitorio urgente.\nSuccess fee 10% — nessun anticipo richiesto.', emoji: '⚖️' },
    },
  },

  straordinari: {
    cover: {
      Educativo:      { title: 'Straordinari non pagati?\nHai diritto a tutto il compenso', subtitle: 'Come recuperare le ore extra che ti devono', emoji: '⏰' },
      Provocatorio:   { title: 'Hai lavorato gratis per mesi.\nBasta.', subtitle: 'Gli straordinari non pagati sono un furto', emoji: '🔥' },
      Empatico:       { title: 'Quante serate e weekend\nhai sacrificato per lavoro?', subtitle: 'Quelle ore hanno un valore. Recuperiamolo insieme.', emoji: '💙' },
      'Legale/Tecnico': { title: 'Compensazione degli straordinari:\nquadro normativo di riferimento', subtitle: 'D.Lgs. 66/2003 e disciplina contrattuale applicabile', emoji: '⚖️' },
    },
    blocks: [
      {
        Educativo:      { title: 'Quando uno straordinario va pagato', body: 'Ogni ora lavorata oltre l\'orario contrattuale\ndevice essere compensata con maggiorazione.\nLa misura varia dal 15% al 50% secondo il CCNL.' },
        Provocatorio:   { title: 'Ti hanno fatto lavorare di più pagandoti di meno?', body: 'È illegale. Punto.\nOgni ora extra non pagata è un credito che ti spetta.\nE puoi recuperarlo fino agli ultimi 5 anni.' },
        Empatico:       { title: 'Quelle ore sottratte alla famiglia', body: 'Serate, weekend, festivi passati in ufficio o in cantiere.\nHai dato di più — meriti di ricevere di più.\nNon lasciare che quelle ore spariscano nel nulla.' },
        'Legale/Tecnico': { title: 'Disciplina normativa lavoro straordinario', body: 'Limite 250 ore/anno ex art. 5 D.Lgs. 66/2003.\nMaggiorazione minima ex CCNL applicato (15%-50%).\nAlternativa: riposo compensativo ex art. 5, co. 5.' },
      },
      {
        Educativo:      { title: 'Come si provano gli straordinari', body: 'Messaggi e email fuori orario sono prove valide.\nTimbrature, badge o registri presenze.\nTestimonianze di colleghi che hanno lavorato con te.', highlight_number: '5 anni', highlight_label: 'di straordinari recuperabili' },
        Provocatorio:   { title: 'Ogni WhatsApp alle 22:00 è una prova', body: 'Quei messaggi del capo dopo l\'orario?\nSono prove concrete in un giudizio.\nConservali tutti — valgono oro.', highlight_number: '5 anni', highlight_label: 'di crediti recuperabili' },
        Empatico:       { title: 'Non servono documenti perfetti per iniziare', body: 'I nostri esperti ti aiutano a ricostruire le prove.\nSpesso bastano gli screenshot dei messaggi\no la testimonianza di un collega fidato.' },
        'Legale/Tecnico': { title: 'Onere probatorio e mezzi di prova', body: 'Prova per presunzioni ex art. 2729 c.c. ammessa.\nRegistri presenze, badge, log di sistema come prova diretta.\nProva testimoniale: colleghi e superiori ammissibili.' },
      },
    ],
    cta: {
      Educativo:      { title: 'Calcola le ore extra che ti devono', body: 'Analisi gratuita — stimiamo insieme il tuo credito.\nSuccess fee 10% solo a recupero avvenuto.', emoji: '⏱️' },
      Provocatorio:   { title: 'Fatti pagare ogni singola ora.', body: 'Non regalare il tuo tempo a chi non lo merita.\nInizia gratis. Paghi solo se recuperiamo.', emoji: '💪' },
      Empatico:       { title: 'Le tue ore di lavoro hanno valore', body: 'Ogni ora che hai dato merita un riconoscimento concreto.\nSiamo qui per ottenerlo per te.', emoji: '💙' },
      'Legale/Tecnico': { title: 'Azione per recupero crediti da lavoro straordinario', body: 'Calcolo analitico ore + maggiorazioni contrattuali.\nProcedura monitoria urgente se il datore non adempie.', emoji: '⚖️' },
    },
  },

  ferie: {
    cover: {
      Educativo:      { title: 'Ferie non godute?\nPuoi essere risarcito', subtitle: 'Il diritto alle ferie non si prescrive facilmente', emoji: '🏖️' },
      Provocatorio:   { title: 'Ti hanno fatto rinunciare alle ferie.\nAdesso pagano loro.', subtitle: 'Le ferie non godute si monetizzano — sempre', emoji: '⚡' },
      Empatico:       { title: 'Non hai potuto riposare.\nAlmeno vieni risarcito.', subtitle: 'Le tue ferie hanno un valore economico concreto', emoji: '🌅' },
      'Legale/Tecnico': { title: 'Indennità sostitutiva ferie non godute:\ndisciplina e recupero', subtitle: 'Art. 2109 c.c. e art. 10 D.Lgs. 66/2003', emoji: '⚖️' },
    },
    blocks: [
      {
        Educativo:      { title: 'Quante ferie hai diritto ogni anno', body: 'Per legge hai diritto ad almeno 4 settimane di ferie\nnon rinunciabili e non monetizzabili (tranne alla fine\ndel rapporto di lavoro).', highlight_number: '4 sett.', highlight_label: 'ferie minime garantite per legge ogni anno' },
        Provocatorio:   { title: 'Il datore non poteva farti rinunciare alle ferie', body: 'Se ti ha fatto lavorare invece di farti riposare\nha violato la legge.\nE adesso ti deve quei giorni — in denaro.', highlight_number: '4 sett.', highlight_label: 'minimo inderogabile per legge' },
        Empatico:       { title: 'Il riposo è un diritto, non un privilegio', body: 'Lo sappiamo: spesso l\'azienda mette pressione\ne si lavora anche quando si dovrebbe riposare.\nMa quelle giornate hanno un valore economico reale.' },
        'Legale/Tecnico': { title: 'Normativa ferie: irrinunciabilità e monetizzazione', body: 'Art. 2109 c.c. + art. 10 D.Lgs. 66/2003: minimo 4 settimane.\nIrrinunciabili durante il rapporto (Corte Cost. 189/1980).\nMonetizzabili solo alla cessazione del rapporto.' },
      },
    ],
    cta: {
      Educativo:      { title: 'Recupera il valore delle ferie non godute', body: 'Calcolo preciso dei giorni e del relativo importo.\nConsulenza gratuita — success fee 10%.', emoji: '🏖️' },
      Provocatorio:   { title: 'Ogni giorno di ferie non goduto vale soldi.', body: 'Non lasciare che quei giorni spariscano nel nulla.\nInizia oggi — è gratuito.', emoji: '💰' },
      Empatico:       { title: 'Meriti di essere risarcito per il riposo che non hai avuto', body: 'Non puoi riprenderti il tempo perso.\nMa puoi ottenere il giusto compenso economico.', emoji: '🌅' },
      'Legale/Tecnico': { title: 'Azione per indennità sostitutiva ferie', body: 'Calcolo analitico giorni maturati e non goduti.\nRicorso monitorio se l\'azienda non adempie entro 15 gg.', emoji: '⚖️' },
    },
  },

  lavoro_nero: {
    cover: {
      Educativo:      { title: 'Lavoro in nero?\nHai più diritti di quanto pensi', subtitle: 'La legge ti protegge anche senza contratto scritto', emoji: '🛡️' },
      Provocatorio:   { title: 'Hai lavorato senza contratto.\nNon significa che devi tacere.', subtitle: 'Il datore ha violato la legge — non tu', emoji: '⚡' },
      Empatico:       { title: 'Ti hanno messo in una posizione\nche non avresti voluto', subtitle: 'Senza tutele, senza protezioni. Ma non senza diritti.', emoji: '💙' },
      'Legale/Tecnico': { title: 'Tutela del lavoratore subordinato\nin rapporto di fatto non formalizzato', subtitle: 'Art. 2094 c.c. e criteri di qualificazione giurisprudenziale', emoji: '⚖️' },
    },
    blocks: [
      {
        Educativo:      { title: 'La legge ti tutela anche senza contratto', body: 'Se hai lavorato alle dipendenze di qualcuno\nil rapporto di lavoro esiste a prescindere dal contratto scritto.\nHai diritto a retribuzione, TFR, contributi e molto altro.' },
        Provocatorio:   { title: 'Il rischio legale è del datore, non tuo', body: 'Chi non regolarizza i propri dipendenti commette\nun illecito penale e amministrativo grave.\nSei la parte tutelata dalla legge — usala.' },
        Empatico:       { title: 'Non è colpa tua se non avevi scelta', body: 'Molti accettano il lavoro nero per necessità.\nNon ti giudichiamo — ti aiutiamo.\nPuoi regolarizzare la tua posizione e recuperare tutto.' },
        'Legale/Tecnico': { title: 'Qualificazione del rapporto di lavoro subordinato di fatto', body: 'Criteri: eterodirezione, inserimento organizzativo, continuità.\nProva per presunzioni ex art. 2729 c.c. ammessa.\nSanzioni datore: art. 3 D.L. 12/2002 (maxi-sanzione).' },
      },
      {
        Educativo:      { title: 'Cosa puoi recuperare', body: 'Tutte le retribuzioni non pagate.\nIl TFR maturato durante il periodo lavorato.\nI contributi previdenziali non versati all\'INPS.', highlight_number: '100%', highlight_label: 'degli arretrati recuperabili anche senza contratto' },
        Provocatorio:   { title: 'Recupera tutto: stipendi, TFR, contributi', body: 'Anni di lavoro non retribuito e non tutelato.\nHai diritto a recuperare ogni singolo euro.\nE i contributi mancanti che incidono sulla tua pensione.', highlight_number: '100%', highlight_label: 'recuperabile anche senza un contratto scritto' },
        Empatico:       { title: 'Pensi anche alla tua pensione futura?', body: 'Gli anni in nero non vengono contati dall\'INPS.\nMa se li recuperiamo, quei contributi vengono versati.\nÈ un investimento sul tuo futuro, non solo sul presente.' },
        'Legale/Tecnico': { title: 'Diritti recuperabili nel rapporto di fatto', body: 'Retribuzioni ex artt. 2099-2101 c.c. per tutto il periodo.\nTFR art. 2120 c.c. + contribuzione INPS arretrata.\nRegolarizzazione anagrafica con decorrenza dalla data d\'inizio.' },
      },
    ],
    cta: {
      Educativo:      { title: 'Verifica gratis i tuoi diritti', body: 'Anche senza contratto, hai diritti concreti.\nAnalisi gratuita entro 24 ore — success fee 10%.', emoji: '🛡️' },
      Provocatorio:   { title: 'Non lasciare che la escludano anche dalla pensione.', body: 'Agisci adesso — recupera stipendi, TFR e contributi.\nZero anticipi. Paghi solo se vinciamo.', emoji: '💪' },
      Empatico:       { title: 'Sei ancora in tempo per raddrizzare le cose', body: 'Non è mai troppo tardi per far valere i propri diritti.\nSiamo qui per guidarti in ogni passo.', emoji: '💙' },
      'Legale/Tecnico': { title: 'Azione di accertamento rapporto subordinato di fatto', body: 'Ricorso ex art. 414 c.p.c. con richiesta di regolarizzazione.\nCumulo: retribuzioni + contributi + TFR + risarcimento danni.', emoji: '⚖️' },
    },
  },

  licenziamento: {
    cover: {
      Educativo:      { title: 'Licenziamento ingiusto?\nEcco come difenderti', subtitle: 'I tuoi diritti in caso di licenziamento illegittimo', emoji: '📌' },
      Provocatorio:   { title: 'Ti hanno messo alla porta.\nAdesso è il momento di reagire.', subtitle: 'Un licenziamento illegittimo si può impugnare e vincere', emoji: '⚡' },
      Empatico:       { title: 'Perdere il lavoro fa male.\nMa non sei senza tutele.', subtitle: 'La legge è dalla tua parte — utilizziamola', emoji: '🤝' },
      'Legale/Tecnico': { title: 'Licenziamento illegittimo: tutele\nex L. 604/1966 e L. 300/1970', subtitle: 'Reintegrazione e indennità risarcitoria applicabili', emoji: '⚖️' },
    },
    blocks: [
      {
        Educativo:      { title: 'Quando un licenziamento è illegittimo', body: 'Senza giusta causa o giustificato motivo scritto.\nSenza rispetto delle procedure previste dal CCNL.\nIn forma orale — sempre invalido per legge.' },
        Provocatorio:   { title: 'Ti hanno licenziato senza una ragione valida?', body: 'Un licenziamento senza giusta causa è nullo.\nHai 60 giorni per impugnarlo — inizia adesso.\nLa legge prevede reintegrazione o maxi-indennità.' },
        Empatico:       { title: 'Hai il diritto di sapere perché sei stato licenziato', body: 'Non devi accettare un licenziamento che non capisci.\nHai il diritto alla motivazione scritta e alla difesa.\nNoi ti aiutiamo a capire se hai un caso.' },
        'Legale/Tecnico': { title: 'Requisiti formali e sostanziali del licenziamento', body: 'Forma scritta obbligatoria ex art. 2 L. 604/1966.\nGiusta causa ex art. 2119 c.c. o GMO/GMS ex art. 3 L. 604/66.\nProcedura disciplinare ex art. 7 St. Lav. per licenziamento disciplinare.' },
      },
      {
        Educativo:      { title: 'Hai 60 giorni per agire', body: 'Il licenziamento va impugnato entro 60 giorni.\nDopo altri 180 giorni va depositato il ricorso.\nNon perdere questi termini: sono perentori.', highlight_number: '60 giorni', highlight_label: 'per impugnare il licenziamento' },
        Provocatorio:   { title: '60 giorni. Il timer è già partito.', body: 'Ogni giorno che aspetti è un giorno perso.\nDopo 60 giorni il licenziamento diventa definitivo.\nAgisci oggi — chiamaci adesso.', highlight_number: '60 giorni', highlight_label: 'termine perentorio per l\'impugnazione' },
        Empatico:       { title: 'Lo sappiamo: hai bisogno di tempo per elaborare', body: 'Ma purtroppo la legge fissa un termine di 60 giorni.\nNon serve avere tutto chiaro — basta iniziare.\nPensaci noi, tu prenditi cura di te.', highlight_number: '60 giorni', highlight_label: 'per non perdere i tuoi diritti' },
        'Legale/Tecnico': { title: 'Termini procedurali impugnazione licenziamento', body: 'Impugnazione stragiudiziale entro 60 gg ex art. 6 L. 604/66.\nDeposito ricorso giudiziale entro 180 gg dall\'impugnazione.\nPena: decadenza dal diritto all\'impugnazione.' },
      },
    ],
    cta: {
      Educativo:      { title: 'Verifica se il tuo licenziamento è impugnabile', body: 'Analisi gratuita entro 24 ore.\nSuccess fee 10% — zero anticipi.', emoji: '📌' },
      Provocatorio:   { title: 'Non lasciare che la facciano franca.', body: 'Hai 60 giorni. Non sprecarli.\nAnalisi gratuita — agisci adesso.', emoji: '⚡' },
      Empatico:       { title: 'Sei pronto a ripartire con il giusto supporto', body: 'Impugniamo il licenziamento per te.\nZero pensieri, zero anticipi.', emoji: '🤝' },
      'Legale/Tecnico': { title: 'Tutela giudiziale contro licenziamento illegittimo', body: 'Rito Fornero ex L. 92/2012 per procedura rapida.\nTutela reintegratoria piena o indennitaria ex D.Lgs. 23/2015.', emoji: '⚖️' },
    },
  },

  come_funziona: {
    cover: {
      Educativo:      { title: 'Come funziona Pagamee?\nTutto in 3 passi semplici', subtitle: 'Recupera i tuoi crediti senza anticipi e senza stress', emoji: '✨' },
      Provocatorio:   { title: 'Recupera i tuoi soldi\nsenza anticipare nemmeno un euro', subtitle: 'Il modello che mette il datore di lavoro alle corde', emoji: '💥' },
      Empatico:       { title: 'Non devi affrontare\nquesto percorso da solo', subtitle: 'Pagamee è il tuo alleato dal primo all\'ultimo passo', emoji: '🤝' },
      'Legale/Tecnico': { title: 'Il modello operativo Pagamee:\nrecupero crediti lavorativi no win no fee', subtitle: 'Procedura stragiudiziale e giudiziale integrata', emoji: '⚖️' },
    },
    blocks: [
      {
        Educativo:      { title: 'Passo 1: analisi gratuita del tuo caso', body: 'Carichi i tuoi documenti (anche pochi bastano).\nI nostri esperti analizzano la situazione in 24 ore.\nTi diciamo subito se hai un caso e quanto puoi recuperare.' },
        Provocatorio:   { title: 'Passo 1: ci dici cosa è successo', body: 'Nessuna burocrazia complicata, nessun costo nascosto.\nIn 24 ore ti diciamo se e quanto puoi recuperare.\nSenza impegno, senza costi.' },
        Empatico:       { title: 'Passo 1: raccontaci la tua storia', body: 'Senza giudizi, senza tecnicismi.\nAscoltiamo tutto e analizziamo ogni dettaglio.\nVuoi solo capire se hai diritto? Va bene così.' },
        'Legale/Tecnico': { title: 'Fase 1: due diligence documentale', body: 'Acquisizione e analisi di: contratto, CU, buste paga.\nQuantificazione analitica del credito vantato.\nValutazione della fondatezza e della convenienza procedurale.' },
      },
      {
        Educativo:      { title: 'Passo 2: agiamo per te', body: 'Inviamo una diffida formale al datore di lavoro.\nSe non risponde, procediamo in via giudiziale.\nTu non devi fare nulla — pensiamo a tutto noi.' },
        Provocatorio:   { title: 'Passo 2: mettiamo pressione legale', body: 'Diffida formale. Termini perentori. Nessuna via d\'uscita.\nIl datore sa che se non paga va in giudizio.\nE in giudizio di solito perde.' },
        Empatico:       { title: 'Passo 2: combattiamo al posto tuo', body: 'Tu non devi affrontare nulla da solo.\nNoi gestiamo ogni comunicazione con il datore.\nTi teniamo aggiornato a ogni step.' },
        'Legale/Tecnico': { title: 'Fase 2: procedura stragiudiziale e giudiziale', body: 'Diffida formale con termine di 15 gg per adempimento.\nIn caso di inadempimento: ricorso monitorio ex art. 633 c.p.c.\nAlternativa: rito del lavoro ex art. 414 c.p.c.' },
      },
      {
        Educativo:      { title: 'Passo 3: paghi solo se recuperiamo', body: 'Zero anticipi. Zero spese legali iniziali.\nTreatteniamo il 10% sull\'importo effettivamente recuperato.\nSe non recuperiamo nulla, non paghi nulla.', highlight_number: '10%', highlight_label: 'solo a recupero avvenuto — zero anticipi' },
        Provocatorio:   { title: 'Passo 3: paghi solo se vinci', body: 'Il nostro interesse è che tu recuperi il massimo.\nPerché guadagniamo solo se ci riesci.\n10% sul recuperato. Zero prima.', highlight_number: '10%', highlight_label: 'success fee — zero se non recuperiamo' },
        Empatico:       { title: 'Passo 3: nessun rischio economico per te', body: 'Non ti chiediamo di scommettere i tuoi soldi.\nPaghi solo quando i soldi sono già sul tuo conto.\nZero rischi, massima tranquillità.', highlight_number: '10%', highlight_label: 'paghi solo se e quando recuperi' },
        'Legale/Tecnico': { title: 'Fase 3: struttura del compenso — success fee', body: 'Compenso: 10% + IVA sull\'importo netto recuperato.\nNessun onorario fisso o a parcella anticipata.\nSpese vive (contributo unificato, ecc.) a carico del soccombente.' },
      },
      {
        Educativo:      { title: 'I nostri risultati parlano chiaro', body: '94% dei casi si chiude con un recupero.\nOltre 2.000 lavoratori già aiutati in tutta Italia.\nProcedura 100% digitale — da casa tua, in pochi click.', highlight_number: '94%', highlight_label: 'tasso di successo nelle pratiche gestite' },
        Provocatorio:   { title: '94% di successo. E il 6% rimanente?', body: 'Sono i casi in cui il datore non aveva davvero nulla.\nNoi analizziamo prima — non prendiamo casi persi.\nTi diciamo subito la verità sul tuo caso.', highlight_number: '94%', highlight_label: 'tasso di recupero — tra i più alti del settore' },
        Empatico:       { title: 'Non sei solo — siamo con migliaia di lavoratori', body: 'Più di 2.000 persone come te hanno già recuperato\nquello che gli spettava grazie a Pagamee.\nUnisciti a loro — inizia oggi.', highlight_number: '94%', highlight_label: 'dei lavoratori che si rivolgono a noi recupera qualcosa' },
        'Legale/Tecnico': { title: 'KPI operativi e track record Pagamee', body: 'Tasso di successo: 94% delle pratiche avviate.\nTempi medi: 3-6 mesi per via stragiudiziale.\nCopertura nazionale: procedure attive in tutti i tribunali del lavoro italiani.', highlight_number: '94%', highlight_label: 'success rate — dati aggiornati 2024' },
      },
    ],
    cta: {
      Educativo:      { title: 'Inizia gratuitamente oggi', body: 'Carica i tuoi documenti e scopri quanto puoi recuperare.\nZero anticipi — 10% solo a successo.', emoji: '🚀' },
      Provocatorio:   { title: 'Zero scuse per non iniziare adesso.', body: 'È gratuito, è digitale, è senza rischi.\nCosa aspetti?', emoji: '⚡' },
      Empatico:       { title: 'Il primo passo è il più difficile.\nNoi lo facciamo insieme.', body: 'Consulenza gratuita. Nessun impegno.\nSolo ascolto e chiarezza.', emoji: '🤝' },
      'Legale/Tecnico': { title: 'Avvia la procedura di recupero crediti', body: 'Due diligence gratuita entro 24 ore lavorative.\nSuccess fee 10% + IVA — no win, no fee.', emoji: '⚖️' },
    },
  },

  diritti: {
    cover: {
      Educativo:      { title: 'I tuoi diritti come lavoratore dipendente', subtitle: 'Quello che ogni dipendente dovrebbe sapere', emoji: '📚' },
      Provocatorio:   { title: 'Conosci i diritti che il tuo datore\nnon vuole che tu sappia?', subtitle: 'Informarsi è il primo atto di resistenza', emoji: '⚡' },
      Empatico:       { title: 'Lavorare con dignità\nè un diritto, non un privilegio', subtitle: 'Scopri le tutele che la legge ti garantisce', emoji: '🤝' },
      'Legale/Tecnico': { title: 'Diritti fondamentali del lavoratore subordinato\nnell\'ordinamento italiano', subtitle: 'Codice Civile, Statuto dei Lavoratori e CCNL', emoji: '⚖️' },
    },
    blocks: [
      {
        Educativo:      { title: 'Il diritto alla retribuzione', body: 'La retribuzione è proporzionata alla quantità\ne qualità del lavoro svolto (art. 36 Cost.).\nNessun accordo può ridurla sotto i minimi CCNL.' },
        Provocatorio:   { title: 'Nessuno può pagarti meno di quanto previsto dalla legge', body: 'Il contratto collettivo fissa i minimi inderogabili.\nAnche se hai firmato qualcosa di diverso\nquell\'accordo è nullo per legge.' },
        Empatico:       { title: 'Meriti di essere pagato giustamente', body: 'La Costituzione italiana lo dice chiaramente:\nla retribuzione deve garantire un\'esistenza libera e dignitosa.\nNon è un favore — è un diritto fondamentale.' },
        'Legale/Tecnico': { title: 'Retribuzione sufficiente ex art. 36 Cost.', body: 'Commisurata a quantità e qualità del lavoro prestato.\nInderogabilità dei minimi CCNL (Cass. S.U. 2665/1997).\nNullità degli accordi in peius ex art. 2077 c.c.' },
      },
      {
        Educativo:      { title: 'Il diritto al riposo e alle ferie', body: 'Almeno 11 ore di riposo consecutivo ogni giorno.\nAlmeno un giorno di riposo settimanale.\nMinimo 4 settimane di ferie annue irrinunciabili.', highlight_number: '4 sett.', highlight_label: 'ferie annue: diritto irrinunciabile' },
        Provocatorio:   { title: 'Il datore non può farti rinunciare alle ferie', body: 'Le 4 settimane minime non si toccano.\nNon puoi rinunciarci, nemmeno se lo vuoi.\nSe non le hai godute, ti vengono pagate alla fine.', highlight_number: '4 sett.', highlight_label: 'minimo inderogabile per legge' },
        Empatico:       { title: 'Anche il riposo fa parte della tua vita', body: 'Non sei solo un ingranaggio del sistema produttivo.\nIl riposo è un bisogno umano e un diritto legale.\nFallo valere — senza sensi di colpa.' },
        'Legale/Tecnico': { title: 'Normativa su riposo e ferie (D.Lgs. 66/2003)', body: 'Riposo giornaliero: min. 11 ore consecutive (art. 7).\nRiposo settimanale: min. 24 ore + 11 di riposo (art. 9).\nFerie: min. 4 settimane, irrinunciabili (art. 10 + art. 2109 c.c.).' },
      },
      {
        Educativo:      { title: 'Il diritto al TFR', body: 'Al termine di ogni rapporto di lavoro hai diritto\nal Trattamento di Fine Rapporto.\nCorresponde a circa un mese di stipendio per ogni anno lavorato.', highlight_number: '~1 mese', highlight_label: 'di stipendio per ogni anno lavorato' },
        Provocatorio:   { title: 'Il TFR è tuo — non del datore', body: 'Ogni anno che hai lavorato ha accumulato una quota di TFR.\nQuel denaro è già tuo.\nSe non te lo danno, lo recuperiamo noi.', highlight_number: '~1 mese', highlight_label: 'di stipendio accantonato per ogni anno' },
        Empatico:       { title: 'Anni di lavoro hanno un valore tangibile', body: 'Il TFR è il risultato concreto di anni di dedizione.\nNon è un bonus discrezionale — è tuo di diritto.\nFai in modo che ti venga corrisposto.' },
        'Legale/Tecnico': { title: 'Trattamento di Fine Rapporto (art. 2120 c.c.)', body: 'Quota annuale: retribuzione utile annua ÷ 13,5.\nRivalutazione: 1,5% fisso + 75% Δ ISTAT prezzi consumo.\nErogazione obbligatoria entro il termine di cessazione.' },
      },
    ],
    cta: {
      Educativo:      { title: 'Verifica gratuitamente i tuoi diritti', body: 'Analisi gratuita del tuo caso in 24 ore.\nScopri quanto puoi recuperare — zero anticipi.', emoji: '📚' },
      Provocatorio:   { title: 'Adesso che sai i tuoi diritti, falli valere.', body: 'La conoscenza è potere. L\'azione è vittoria.\nInizia gratis su pagamee.it.', emoji: '⚡' },
      Empatico:       { title: 'Ogni lavoratore merita rispetto e tutela', body: 'Siamo qui per garantirteli concretamente.\nConsulenza gratuita, zero impegno iniziale.', emoji: '🤝' },
      'Legale/Tecnico': { title: 'Tutela giudiziale dei diritti del lavoratore', body: 'Rito del lavoro ex artt. 409-441 c.p.c.: procedura rapida e gratuita.\nSuccess fee 10% — nessun anticipo richiesto.', emoji: '⚖️' },
    },
  },
}

// ── Generatore slide ──────────────────────────────────────────────────────────
export function generateFromTemplate(theme, tov, numSlides) {
  const themeKey  = detectTheme(theme)
  const data      = CONTENT[themeKey] || CONTENT.diritti
  const tovKey    = data.cover[tov] ? tov : 'Educativo'

  const cover   = { type: 'cover',   ...data.cover[tovKey] }
  const cta     = { type: 'cta',     ...data.cta[tovKey]   }

  // Quante slide di contenuto servono
  const contentCount = numSlides - 2
  const blocks       = data.blocks || []

  // Seleziona i blocchi disponibili (ciclica se ne servono più del previsto)
  const contentSlides = Array.from({ length: contentCount }, (_, i) => {
    const block = blocks[i % blocks.length]
    return { type: 'content', ...(block?.[tovKey] || block?.Educativo || {}) }
  })

  return { slides: [cover, ...contentSlides, cta] }
}
